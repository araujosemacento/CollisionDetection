---
title: "Polígono / Retângulo"
slug: "poly-rect"
order: 20
sketch: "PolyRect"
caption: "Mova o retângulo menor para colidir com o polígono!"
---

# POLÍGONO / RETÂNGULO

Testamos a colisão entre cada aresta do polígono e os quatro lados do retângulo usando a função [Linha/Retângulo](/line-rect):

```javascript
for (let current = 0; current < vertices.length; current++) {
    let next = current + 1;
    if (next === vertices.length) next = 0;

    let vc = vertices[current];
    let vn = vertices[next];

    let collision = lineRect(vc.x, vc.y, vn.x, vn.y, rx, ry, rw, rh);
    if (collision) return true;
}
```

### JavaScript (p5.js)
```javascript
function polyRect(vertices, rx, ry, rw, rh) {
  let next = 0;
  for (let current = 0; current < vertices.length; current++) {
    next = current + 1;
    if (next === vertices.length) next = 0;

    let vc = vertices[current];
    let vn = vertices[next];

    let collision = lineRect(vc.x, vc.y, vn.x, vn.y, rx, ry, rw, rh);
    if (collision) return true;

    let inside = polyPoint(vertices, rx, ry);
    if (inside) return true;
  }
  return false;
}
```

### Processing (Java)
```java
boolean polyRect(PVector[] vertices, float rx, float ry, float rw, float rh) {
  int next = 0;
  for (int current=0; current<vertices.length; current++) {
    next = current+1;
    if (next == vertices.length) next = 0;

    PVector vc = vertices[current];
    PVector vn = vertices[next];

    boolean collision = lineRect(vc.x,vc.y,vn.x,vn.y, rx,ry,rw,rh);
    if (collision) return true;

    boolean inside = polygonPoint(vertices, rx,ry);
    if (inside) return true;
  }
  return false;
}
```
