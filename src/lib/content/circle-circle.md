---
title: "Círculo / Círculo"
slug: "circle-circle"
order: 7
sketch: "CircleCircle"
caption: "Use o mouse para mover o círculo menor e colidir com o círculo maior!"
---

# CÍRCULO / CÍRCULO

Raramente os objetos em jogos ocupam apenas um ponto no espaço. Em seguida, podemos utilizar a mesma fórmula da distância do Teorema de Pitágoras vista no capítulo [Ponto/Círculo](/point-circle) para verificar se dois círculos estão se tocando.

Primeiro, calculamos a distância entre os centros dos dois círculos:

```javascript
let distX = c1x - c2x;
let distY = c1y - c2y;
let distance = Math.sqrt((distX * distX) + (distY * distY));
```

Para verificar se há colisão, testamos se a **distância entre os centros é menor ou igual à soma dos dois raios** (`r1 + r2`):

```javascript
if (distance <= c1r + c2r) {
    return true; // Colisão!
}
return false;
```

### JavaScript (p5.js)
```javascript
function circleCircle(c1x, c1y, c1r, c2x, c2y, c2r) {
  let distX = c1x - c2x;
  let distY = c1y - c2y;
  let distance = Math.sqrt((distX * distX) + (distY * distY));

  if (distance <= c1r + c2r) {
    return true;
  }
  return false;
}
```

### Processing (Java)
```java
boolean circleCircle(float c1x, float c1y, float c1r, float c2x, float c2y, float c2r) {
  float distX = c1x - c2x;
  float distY = c1y - c2y;
  float distance = sqrt( (distX*distX) + (distY*distY) );

  if (distance <= c1r+c2r) {
    return true;
  }
  return false;
}
```

## BINDING CIRCLES (CÍRCULOS DELIMITADORES)

A colisão **Círculo/Círculo** é amplamente utilizada para criar "círculos delimitadores" (*bounding circles*) em torno de objetos complexos. Embora sacrifique um pouco de precisão, este tipo de teste é extremamente veloz e serve como uma ótima aproximação inicial.
