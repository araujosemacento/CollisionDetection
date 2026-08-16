---
title: "Linha / Círculo"
slug: "line-circle"
order: 14
sketch: "LineCircle"
caption: "Use o mouse para posicionar o círculo sobre a linha!"
---

<script>
	import CodeTabs from '$lib/components/CodeTabs.svelte';
</script>

# LINHA / CÍRCULO

Para verificar se um segmento de reta colide com um círculo:

1. Testamos se alguma das extremidades da linha já está **dentro** do círculo (usando `pointCircle`).
2. Calculamos o **ponto mais próximo** da linha em relação ao centro do círculo usando produto escalar (*dot product*).
3. Verificamos se esse ponto mais próximo pertence ao segmento de reta e se sua distância até o centro é menor ou igual ao raio.

<CodeTabs>

```javascript
function lineCircle(x1, y1, x2, y2, cx, cy, r) {
  let inside1 = pointCircle(x1, y1, cx, cy, r);
  let inside2 = pointCircle(x2, y2, cx, cy, r);
  if (inside1 || inside2) return true;

  let len = Math.hypot(x1 - x2, y1 - y2);
  let dot = (((cx - x1) * (x2 - x1)) + ((cy - y1) * (y2 - y1))) / Math.pow(len, 2);

  let closestX = x1 + (dot * (x2 - x1));
  let closestY = y1 + (dot * (y2 - y1));

  let onSegment = linePoint(x1, y1, x2, y2, closestX, closestY);
  if (!onSegment) return false;

  let distX = closestX - cx;
  let distY = closestY - cy;
  let distance = Math.sqrt((distX * distX) + (distY * distY));

  if (distance <= r) {
    return true;
  }
  return false;
}
```

```java
boolean lineCircle(float x1, float y1, float x2, float y2, float cx, float cy, float r) {
  boolean inside1 = pointCircle(x1,y1, cx,cy,r);
  boolean inside2 = pointCircle(x2,y2, cx,cy,r);
  if (inside1 || inside2) return true;

  float distX = x1 - x2;
  float distY = y1 - y2;
  float len = sqrt( (distX*distX) + (distY*distY) );

  float dot = ( ((cx-x1)*(x2-x1)) + ((cy-y1)*(y2-y1)) ) / pow(len,2);

  float closestX = x1 + (dot * (x2-x1));
  float closestY = y1 + (dot * (y2-y1));

  boolean onSegment = linePoint(x1,y1,x2,y2, closestX,closestY);
  if (!onSegment) return false;

  distX = closestX - cx;
  distY = closestY - cy;
  float distance = sqrt( (distX*distX) + (distY*distY) );

  if (distance <= r) {
    return true;
  }
  return false;
}
```

```python
import math

def line_circle(x1, y1, x2, y2, cx, cy, r):
    inside1 = point_circle(x1, y1, cx, cy, r)
    inside2 = point_circle(x2, y2, cx, cy, r)
    if inside1 or inside2:
        return True

    line_len = math.hypot(x1 - x2, y1 - y2)
    dot = (((cx - x1) * (x2 - x1)) + ((cy - y1) * (y2 - y1))) / (line_len ** 2)

    closest_x = x1 + (dot * (x2 - x1))
    closest_y = y1 + (dot * (y2 - y1))

    if not line_point(x1, y1, x2, y2, closest_x, closest_y):
        return False

    dist_x = closest_x - cx
    dist_y = closest_y - cy
    distance = math.sqrt((dist_x ** 2) + (dist_y ** 2))

    if distance <= r:
        return True
    return False
```

</CodeTabs>
