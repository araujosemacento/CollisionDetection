<?php include('includes/header.php'); ?>

<h1 style="font-size:2.5em">DEALING WITH MATRIX TRANS&shy;FORMATIONS</h1>

<p>Using simple shapes with pre-defined X/Y coordinates is great, but in real-world situations it's likely that we'll be using matrix transformations like <code>push/popMatrix()</code>, <code>translate()</code>, and <code>rotate()</code>, and we'll be drawing shapes around the origin (<code>0, 0</code>). It also means that any transformations, like rotation, will put the vertices in different positions onscreen than how we have originally defined them!</p>

<p>Luckily, Processing has two great functions: <code>screenX()</code> and <code>screenY()</code>. They let us send in an X/Y position and Processing sends us back the actual onscreen coordinates, taking into account all matrix transformations.</p>

<p>While we could update all our examples to allow for this, it's easier to assume everything is a polygon (bonus: in raster graphics, everything code pretty much is!) and use the <code>Poly/Poly</code> collision we already built. 

<p>Rather than define the polygon as an array of <code>PVector</code> screen coordinates, however, we'll center them around <code>(0, 0)</code>. For example, here's a square that's <code>100 x 100 pixels</code>:

<pre>PVector[] square1 = {
  new PVector(-50, -50),
  new PVector(50, -50),
  new PVector(50, 50),
  new PVector(-50, 50)
};</pre>

<p>This square is then drawn in position using <code>translate()</code>. Each frame, we need to convert these points to screen coordinates that take into account any matrix transformations that have happened. To do that, we build a simple function that takes the points in and returns a new array with the actual onscreen positions.</p>

<pre>PVector[] pointsToScreenCoords(PVector[] points) {
  // create output array
  PVector[] screenPoints = new PVector[points.length];
  for (int i=0; i&lt;points.length; i++) {
    // go through all the points and get screen x/y coords
    float x = screenX(points[i].x, points[i].y);
    float y = screenY(points[i].x, points[i].y);
    screenPoints[i] = new PVector(x, y);
  }
  return screenPoints;
}</pre>

<p>Then we feed these points to <code>Poly/Poly</code> collision – super simple! This scales really nicely for object-oriented code and let's you go crazy without having to use bounding boxes or other less-accurate methods.</p>

<p>Here's a full example:</p>

<pre>// two squares, defined as PVector 
// arrays around the origin
PVector[] square1 = {
  new PVector(-50, -50),
  new PVector(50, -50),
  new PVector(50, 50),
  new PVector(-50, 50)
};
PVector[] square2 = {
  new PVector(-100, -100),
  new PVector(100, -100),
  new PVector(100, 100),
  new PVector(-100, 100)
};

float angle = 0;


void setup() {
  size(600,400);
  noCursor();
}


void draw() {
  background(255);
  
  // update rotation angle
  angle += 0.02;
  
  // move the origin to the position of the first square
  pushMatrix();
  translate(width/3, height/2);
  rotate(angle);
  
  // convert the square's four points to actual screen coords
  // after the matrix transformations above (see the function
  // below that does this)
  PVector[] square1Screen = pointsToScreenCoords(square1);
  
  // and draw the square!
  fill(0, 150);
  noStroke();
  beginShape();
  for (PVector pt : square1) {
    vertex(pt.x, pt.y);
  }
  endShape(CLOSE);
  popMatrix();
  
  // move the origin to the position for the other square
  pushMatrix();
  translate(width-width/3, height/2);
  rotate(angle);
  
  // get the screen coords for this shape too
  PVector[] square2Screen = pointsToScreenCoords(square2);
  
  // check for collision
  // if hit, change color
  boolean hit = polyPoly(square1Screen, square2Screen);
  if (hit) fill(255,150,0);
  else fill(0,150,255);
  
  // and draw this shape too
  beginShape();
  for (PVector pt : square2) {
    vertex(pt.x, pt.y);
  }
  endShape(CLOSE);
  popMatrix();
}


// a function that returns the actual screen coordinates
// after matrix transformations (like translate and rotate)
// we could do this up above but easier to make it a function
// that can take any number of polygon points
PVector[] pointsToScreenCoords(PVector[] points) {
  PVector[] screenPoints = new PVector[points.length];   // create output array
  for (int i=0; i&lt;points.length; i++) {                  // go through all the points
    float x = screenX(points[i].x, points[i].y);         // get the screen x coordinate
    float y = screenY(points[i].x, points[i].y);
    screenPoints[i] = new PVector(x, y);
  }
  return screenPoints;
}


// POLYGON/POLYGON
boolean polyPoly(PVector[] p1, PVector[] p2) {
  
  // go through each of the vertices, plus the next vertex in the list
  int next = 0;
  for (int current=0; current&lt;p1.length; current++) {
    
    // get next vertex in list
    // if we've hit the end, wrap around to 0
    next = current+1;
    if (next == p1.length) next = 0;
    
    // get the PVectors at our current position
    // this makes our if statement a little cleaner
    PVector vc = p1[current];    // c for "current"
    PVector vn = p1[next];       // n for "next"
    
    // now we can use these two points (a line) to compare to the
    // other polygon's vertices using polyLine()
    boolean collision = polyLine(p2, vc.x,vc.y,vn.x,vn.y);
    if (collision) return true;
    
    // optional: check if the 2nd polygon is INSIDE the first
    collision = polyPoint(p1, p2[0].x, p2[0].y);
    if (collision) return true;
  }
  
  return false;
}


// POLYGON/LINE
boolean polyLine(PVector[] vertices, float x1, float y1, float x2, float y2) {

  // go through each of the vertices, plus the next vertex in the list
  int next = 0;
  for (int current=0; current&lt;vertices.length; current++) {

    // get next vertex in list
    // if we've hit the end, wrap around to 0
    next = current+1;
    if (next == vertices.length) next = 0;

    // get the PVectors at our current position
    // extract X/Y coordinates from each
    float x3 = vertices[current].x;
    float y3 = vertices[current].y;
    float x4 = vertices[next].x;
    float y4 = vertices[next].y;

    // do a Line/Line comparison
    // if true, return 'true' immediately and stop testing (faster)
    boolean hit = lineLine(x1, y1, x2, y2, x3, y3, x4, y4);
    if (hit) {
      return true;
    }
  }

  // never got a hit
  return false;
}


// LINE/LINE
boolean lineLine(float x1, float y1, float x2, float y2, float x3, float y3, float x4, float y4) {

  // calculate the direction of the lines
  float uA = ((x4-x3)*(y1-y3) - (y4-y3)*(x1-x3)) / ((y4-y3)*(x2-x1) - (x4-x3)*(y2-y1));
  float uB = ((x2-x1)*(y1-y3) - (y2-y1)*(x1-x3)) / ((y4-y3)*(x2-x1) - (x4-x3)*(y2-y1));

  // if uA and uB are between 0-1, lines are colliding
  if (uA &gt;= 0 &amp;&amp; uA &lt;= 1 &amp;&amp; uB &gt;= 0 &amp;&amp; uB &lt;= 1) {
    return true;
  }
  return false;
}


// POLYGON/POINT
// used only to check if the second polygon is INSIDE the first
boolean polyPoint(PVector[] vertices, float px, float py) {
  boolean collision = false;
  
  // go through each of the vertices, plus the next vertex in the list
  int next = 0;
  for (int current=0; current&lt;vertices.length; current++) {
    
    // get next vertex in list
    // if we've hit the end, wrap around to 0
    next = current+1;
    if (next == vertices.length) next = 0;
    
    // get the PVectors at our current position
    // this makes our if statement a little cleaner
    PVector vc = vertices[current];    // c for "current"
    PVector vn = vertices[next];       // n for "next"
    
    // compare position, flip 'collision' variable back and forth
    if ( ((vc.y &gt; py &amp;&amp; vn.y &lt; py) || (vc.y &lt; py &amp;&amp; vn.y &gt; py)) &amp;&amp;
         (px &lt; (vn.x-vc.x) * (py-vc.y) / (vn.y-vc.y) + vc.x) ) {
            collision = !collision;
    }
  }
  return collision;  
}</pre>


	<!-- link to the next page -->
	<a href="thanks.php"><p class="nextPage">NEXT: Thanks</p></a>
	<footer>
		<p>[ <a href="index.php">intro</a>, <a href="https://web.archive.org/web/20260406003120/https://github.com/jeffThompson/CollisionDetection">source</a>, <a href="https://web.archive.org/web/20260406003120/https://github.com/jeffThompson/CollisionDetection/issues">issues</a> ]</p>

		<p class="license"><a rel="license" href="https://web.archive.org/web/20260406003120/http://creativecommons.org/licenses/by-nc-sa/4.0/">
			<img id="license" alt="Creative Commons License" style="border-width:0" src="https://web.archive.org/web/20260406003120im_/https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png">
		</a></p>
	</footer>

	</div> <!-- end footer -->

<!-- nice smart quotes, via: http://smartquotesjs.com -->
<script src="/web/20260406003120js_/https://www.jeffreythompson.org/collision-detection/js/smartquotes.min.js"></script>

</body>
</html><!--
     FILE ARCHIVED ON 00:31:20 Apr 06, 2026 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:34:12 Aug 17, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
-->
<!--
playback timings (ms):
  captures_list: 0.719
  exclusion.robots: 0.065
  exclusion.robots.policy: 0.051
  esindex: 0.01
  cdx.remote: 9.798
  LoadShardBlock: 65.672 (3)
  PetaboxLoader3.datanode: 98.152 (4)
  load_resource: 410.095
  PetaboxLoader3.resolve: 351.693
  nav: 0.126 (6)
-->