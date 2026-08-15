---
title: "Polígono / Polígono"
slug: "poly-poly"
order: 22
sketch: "PolyPoly"
caption: "Mova o polígono irregular para colidir com o pentágono!"
---

# POLÍGONO / POLÍGONO

Chegamos à colisão entre dois polígonos genéricos de quaisquer formas e quantidade de vértices!

Para testar se o polígono 1 (`p1`) colide com o polígono 2 (`p2`), testamos cada uma das arestas de `p1` contra todo o polígono `p2` utilizando `polyLine(p2, edgeX1, edgeY1, edgeX2, edgeY2)`:

```javascript
for (let current = 0; current < p1.length; current++) {
    let next = current + 1;
    if (next === p1.length) next = 0;

    let vc = p1[current];
    let vn = p1[next];

    let collision = polyLine(p2, vc.x, vc.y, vn.x, vn.y);
    if (collision) return true;

    // testa se o segundo polígono está totalmente contido no primeiro
    collision = polyPoint(p1, p2[0].x, p2[0].y);
    if (collision) return true;
}
```

### JavaScript (p5.js)
```javascript
function polyPoly(p1, p2) {
  let next = 0;
  for (let current = 0; current < p1.length; current++) {
    next = current + 1;
    if (next === p1.length) next = 0;

    let vc = p1[current];
    let vn = p1[next];

    let collision = polyLine(p2, vc.x, vc.y, vn.x, vn.y);
    if (collision) return true;

    let inside = polyPoint(p1, p2[0].x, p2[0].y);
    if (inside) return true;
  }
  return false;
}
```

### Processing (Java)
```java
boolean polyPoly(PVector[] p1, PVector[] p2) {
  int next = 0;
  for (int current=0; current<p1.length; current++) {
    next = current+1;
    if (next == p1.length) next = 0;

    PVector vc = p1[current];
    PVector vn = p1[next];

    boolean collision = polyLine(p2, vc.x,vc.y,vn.x,vn.y);
    if (collision) return true;

    collision = polyPoint(p1, p2[0].x, p2[0].y);
    if (collision) return true;
  }
  return false;
}
```
