---
title: "Triângulo / Ponto"
slug: "tri-point"
order: 24
sketch: "TriPoint"
caption: "Mova o ponteiro do mouse para dentro do triângulo!"
---

# TRIÂNGULO / PONTO

Para testar se um ponto $(px, py)$ está dentro de um triângulo formado por $(x_1, y_1), (x_2, y_2), (x_3, y_3)$, comparamos a **área total do triângulo original** com a **soma das áreas dos três sub-triângulos** formados pelo ponto e os vértices.

Calculamos a área do triângulo original usando a fórmula do produto vetorial (Fórmula de Heron / Determinante):

$$\text{areaOrig} = |(x_2-x_1)(y_3-y_1) - (x_3-x_1)(y_2-y_1)|$$

Em seguida, calculamos as 3 sub-áreas:

$$\text{area}_1 = |(x_1-px)(y_2-py) - (x_2-px)(y_1-py)|$$
$$\text{area}_2 = |(x_2-px)(y_3-py) - (x_3-px)(y_2-py)|$$
$$\text{area}_3 = |(x_3-px)(y_1-py) - (x_1-px)(y_3-py)|$$

Se $\text{area}_1 + \text{area}_2 + \text{area}_3 = \text{areaOrig}$, o ponto está **DENTRO** do triângulo!

### JavaScript (p5.js)
```javascript
function triPoint(x1, y1, x2, y2, x3, y3, px, py) {
  let areaOrig = Math.abs((x2 - x1) * (y3 - y1) - (x3 - x1) * (y2 - y1));

  let area1 = Math.abs((x1 - px) * (y2 - py) - (x2 - px) * (y1 - py));
  let area2 = Math.abs((x2 - px) * (y3 - py) - (x3 - px) * (y2 - py));
  let area3 = Math.abs((x3 - px) * (y1 - py) - (x1 - px) * (y3 - py));

  if (Math.abs((area1 + area2 + area3) - areaOrig) < 0.01) {
    return true;
  }
  return false;
}
```

### Processing (Java)
```java
boolean triPoint(float x1, float y1, float x2, float y2, float x3, float y3, float px, float py) {
  float areaOrig = abs( (x2-x1)*(y3-y1) - (x3-x1)*(y2-y1) );

  float area1 =    abs( (x1-px)*(y2-py) - (x2-px)*(y1-py) );
  float area2 =    abs( (x2-px)*(y3-py) - (x3-px)*(y2-py) );
  float area3 =    abs( (x3-px)*(y1-py) - (x1-px)*(y3-py) );

  if (area1 + area2 + area3 == areaOrig) {
    return true;
  }
  return false;
}
```
