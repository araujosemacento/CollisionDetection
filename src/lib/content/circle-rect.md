---
title: "Círculo / Retângulo"
slug: "circle-rect"
order: 11
sketch: "CircleRect"
caption: "Mova o círculo com o mouse para colidir com o retângulo central!"
---

# CÍRCULO / RETÂNGULO

Esta colisão combina conceitos de círculos e retângulos. Temos um círculo na posição `(cx, cy)` com raio `r` e um retângulo em `(rx, ry)` com largura/altura `(rw, rh)`.

Nosso algoritmo primeiro identifica **qual borda do retângulo está mais próxima do centro do círculo**, e em seguida aplica o Teorema de Pitágoras para verificar a distância:

1. Encontra os pontos limite mais próximos no retângulo (`testX` e `testY`).
2. Calcula a distância entre `(cx, cy)` e `(testX, testY)`.
3. Se a distância for menor ou igual ao raio `r`, há colisão!

### JavaScript (p5.js)
```javascript
function circleRect(cx, cy, radius, rx, ry, rw, rh) {
  let testX = cx;
  let testY = cy;

  // qual borda está mais próxima?
  if (cx < rx)         testX = rx;      // borda esquerda
  else if (cx > rx+rw) testX = rx+rw;   // borda direita

  if (cy < ry)         testY = ry;      // borda superior
  else if (cy > ry+rh) testY = ry+rh;   // borda inferior

  // distância até os pontos mais próximos
  let distX = cx - testX;
  let distY = cy - testY;
  let distance = Math.sqrt((distX * distX) + (distY * distY));

  if (distance <= radius) {
    return true;
  }
  return false;
}
```

### Processing (Java)
```java
boolean circleRect(float cx, float cy, float radius, float rx, float ry, float rw, float rh) {
  float testX = cx;
  float testY = cy;

  if (cx < rx)         testX = rx;
  else if (cx > rx+rw) testX = rx+rw;
  if (cy < ry)         testY = ry;
  else if (cy > ry+rh) testY = ry+rh;

  float distX = cx-testX;
  float distY = cy-testY;
  float distance = sqrt( (distX*distX) + (distY*distY) );

  if (distance <= radius) {
    return true;
  }
  return false;
}
```
