---
title: "Polígono / Linha"
slug: "poly-line"
order: 21
sketch: "PolyLine"
caption: "Mova a linha com o mouse para atingir o polígono regular de 16 lados!"
---

# POLÍGONO / LINHA

Verificamos se uma linha $(x_1, y_1) \rightarrow (x_2, y_2)$ cruza qualquer uma das arestas do polígono utilizando a função [Linha/Linha](/line-line):

```javascript
for (let current = 0; current < vertices.length; current++) {
    let next = current + 1;
    if (next === vertices.length) next = 0;

    let x3 = vertices[current].x;
    let y3 = vertices[current].y;
    let x4 = vertices[next].x;
    let y4 = vertices[next].y;

    let hit = lineLine(x1, y1, x2, y2, x3, y3, x4, y4);
    if (hit) return true;
}
```

### JavaScript (p5.js)
```javascript
function polyLine(vertices, x1, y1, x2, y2) {
  let next = 0;
  for (let current = 0; current < vertices.length; current++) {
    next = current + 1;
    if (next === vertices.length) next = 0;

    let x3 = vertices[current].x;
    let y3 = vertices[current].y;
    let x4 = vertices[next].x;
    let y4 = vertices[next].y;

    let hit = lineLine(x1, y1, x2, y2, x3, y3, x4, y4);
    if (hit) return true;
  }
  return false;
}
```

### Processing (Java)
```java
boolean polyLine(PVector[] vertices, float x1, float y1, float x2, float y2) {
  int next = 0;
  for (int current=0; current<vertices.length; current++) {
    next = current+1;
    if (next == vertices.length) next = 0;

    float x3 = vertices[current].x;
    float y3 = vertices[current].y;
    float x4 = vertices[next].x;
    float y4 = vertices[next].y;

    boolean hit = lineLine(x1, y1, x2, y2, x3, y3, x4, y4);
    if (hit) return true;
  }
  return false;
}
```
