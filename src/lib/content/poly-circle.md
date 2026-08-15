---
title: "Polígono / Círculo"
slug: "poly-circle"
order: 19
sketch: "PolyCircle"
caption: "Mova o círculo com o mouse para colidir com o polígono!"
---

# POLÍGONO / CÍRCULO

Para testar a colisão entre um polígono e um círculo, percorremos cada uma das arestas do polígono (os segmentos de reta entre vértices adjacentes) e aplicamos a função [Linha/Círculo](/line-circle):

```javascript
for (let current = 0; current < vertices.length; current++) {
    let next = current + 1;
    if (next === vertices.length) next = 0;

    let vc = vertices[current];
    let vn = vertices[next];

    let collision = lineCircle(vc.x, vc.y, vn.x, vn.y, cx, cy, r);
    if (collision) return true;
}
```

Caso deseje também detectar se o círculo está completamente contido **dentro** do polígono (sem tocar as bordas), podemos opcionalmente testar se o centro do círculo está dentro do polígono com `polyPoint(vertices, cx, cy)`.

### JavaScript (p5.js)
```javascript
function polyCircle(vertices, cx, cy, r) {
  let next = 0;
  for (let current = 0; current < vertices.length; current++) {
    next = current + 1;
    if (next === vertices.length) next = 0;

    let vc = vertices[current];
    let vn = vertices[next];

    let collision = lineCircle(vc.x, vc.y, vn.x, vn.y, cx, cy, r);
    if (collision) return true;
  }
  return false;
}
```

### Processing (Java)
```java
boolean polyCircle(PVector[] vertices, float cx, float cy, float r) {
  int next = 0;
  for (int current=0; current<vertices.length; current++) {
    next = current+1;
    if (next == vertices.length) next = 0;

    PVector vc = vertices[current];
    PVector vn = vertices[next];

    boolean collision = lineCircle(vc.x,vc.y, vn.x,vn.y, cx,cy,r);
    if (collision) return true;
  }
  return false;
}
```
