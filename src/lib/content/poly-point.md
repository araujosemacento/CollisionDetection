---
title: "Polígono / Ponto"
slug: "poly-point"
order: 18
sketch: "PolyPoint"
caption: "Mova o mouse (ponto) para dentro do polígono!"
---

# POLÍGONO / PONTO

Para testar se um ponto está dentro de um polígono com qualquer número de vértices, utilizamos o algoritmo de **Ray-Casting** (baseado no *Teorema da Curva de Jordan*).

Traçamos um raio horizontal imaginário partindo do ponto e indo até o infinito à direita. Contamos quantas vezes esse raio cruza as arestas do polígono:

- Se cruzar um número **ímpar** de vezes &rarr; o ponto está **DENTRO**.
- Se cruzar um número **par** de vezes &rarr; o ponto está **FORA**.

```javascript
if (((vc.y >= py && vn.y < py) || (vc.y < py && vn.y >= py)) &&
    (px < (vn.x - vc.x) * (py - vc.y) / (vn.y - vc.y) + vc.x)) {
    collision = !collision;
}
```

### JavaScript (p5.js)
```javascript
function polyPoint(vertices, px, py) {
  let collision = false;
  let next = 0;

  for (let current = 0; current < vertices.length; current++) {
    next = current + 1;
    if (next === vertices.length) next = 0;

    let vc = vertices[current];
    let vn = vertices[next];

    if (((vc.y >= py && vn.y < py) || (vc.y < py && vn.y >= py)) &&
        (px < (vn.x - vc.x) * (py - vc.y) / (vn.y - vc.y) + vc.x)) {
      collision = !collision;
    }
  }
  return collision;
}
```

### Processing (Java)
```java
boolean polyPoint(PVector[] vertices, float px, float py) {
  boolean collision = false;
  int next = 0;

  for (int current=0; current<vertices.length; current++) {
    next = current+1;
    if (next == vertices.length) next = 0;

    PVector vc = vertices[current];
    PVector vn = vertices[next];

    if (((vc.y >= py && vn.y < py) || (vc.y < py && vn.y >= py)) &&
         (px < (vn.x-vc.x)*(py-vc.y) / (vn.y-vc.y)+vc.x)) {
            collision = !collision;
    }
  }
  return collision;
}
```
