---
title: "Linha / Linha"
slug: "line-line"
order: 15
sketch: "LineLine"
caption: "Use o mouse para cruzar as duas linhas!"
---

# LINHA / LINHA

Com este algoritmo você pode criar mecânicas incríveis de combate de espadas ou raycasting!

Para verificar se dois segmentos de reta se cruzam, calculamos os parâmetros de interseção `uA` e `uB`:

```javascript
uA = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1));
uB = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1));
```

Se ambos `uA` e `uB` estiverem no intervalo entre `0` e `1`, as linhas se cruzam! O ponto exato do impacto pode ser obtido por:

```javascript
intersectionX = x1 + (uA * (x2 - x1));
intersectionY = y1 + (uA * (y2 - y1));
```

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
