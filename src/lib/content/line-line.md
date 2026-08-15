---
title: "Linha / Linha"
slug: "line-line"
order: 15
sketch: "LineLine"
caption: "Use o mouse para cruzar as duas linhas!"
---

# LINHA / LINHA

Com este algoritmo você pode criar mecânicas incríveis de combate de espadas ou raycasting!

Para verificar se dois segmentos de reta se cruzam, calculamos os parâmetros de interseção $u_A$ e $u_B$:

$$u_A = \frac{(x_4-x_3)(y_1-y_3) - (y_4-y_3)(x_1-x_3)}{(y_4-y_3)(x_2-x_1) - (x_4-x_3)(y_2-y_1)}$$

$$u_B = \frac{(x_2-x_1)(y_1-y_3) - (y_2-y_1)(x_1-x_3)}{(y_4-y_3)(x_2-x_1) - (x_4-x_3)(y_2-y_1)}$$

Se ambos $u_A$ e $u_B$ estiverem no intervalo de $0$ a $1$, as linhas se cruzam! O ponto exato do impacto pode ser obtido por:

$$\text{intersectionX} = x_1 + (u_A \cdot (x_2 - x_1))$$
$$\text{intersectionY} = y_1 + (u_A \cdot (y_2 - y_1))$$

### JavaScript (p5.js)
```javascript
function lineLine(x1, y1, x2, y2, x3, y3, x4, y4) {
  let denom = ((y4 - y3) * (x2 - x1)) - ((x4 - x3) * (y2 - y1));
  if (denom === 0) return false; // linhas paralelas

  let uA = (((x4 - x3) * (y1 - y3)) - ((y4 - y3) * (x1 - x3))) / denom;
  let uB = (((x2 - x1) * (y1 - y3)) - ((y2 - y1) * (x1 - x3))) / denom;

  if (uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1) {
    return true;
  }
  return false;
}
```

### Processing (Java)
```java
boolean lineLine(float x1, float y1, float x2, float y2, float x3, float y3, float x4, float y4) {
  float uA = ((x4-x3)*(y1-y3) - (y4-y3)*(x1-x3)) / ((y4-y3)*(x2-x1) - (x4-x3)*(y2-y1));
  float uB = ((x2-x1)*(y1-y3) - (y2-y1)*(x1-x3)) / ((y4-y3)*(x2-x1) - (x4-x3)*(y2-y1));

  if (uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1) {
    return true;
  }
  return false;
}
```
