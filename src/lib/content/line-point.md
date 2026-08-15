---
title: "Linha / Ponto"
slug: "line-point"
order: 13
sketch: "LinePoint"
caption: "Use o mouse para posicionar o ponto sobre o segmento de reta!"
---

# LINHA / PONTO

Para testar se um ponto está sobre um segmento de reta definido por `(x1, y1)` e `(x2, y2)`, utilizamos a propriedade da soma das distâncias:

Se o ponto `(px, py)` está na linha, a **distância do ponto até o início da linha** (`d1`) mais a **distância do ponto até o fim da linha** (`d2`) deve ser exatamente igual ao **comprimento total da linha** (`lineLen`).

```text
d1 + d2 = lineLen
```

Como os números de ponto flutuante possuem imprecisão de arredondamento, adicionamos uma pequena margem de tolerância (*buffer*):

```javascript
if (d1 + d2 >= lineLen - buffer && d1 + d2 <= lineLen + buffer) {
    return true; // Ponto está na linha!
}
```

### JavaScript (p5.js)
```javascript
function linePoint(x1, y1, x2, y2, px, py) {
  let d1 = Math.hypot(px - x1, py - y1);
  let d2 = Math.hypot(px - x2, py - y2);
  let lineLen = Math.hypot(x2 - x1, y2 - y1);
  let buffer = 0.1;

  if (d1 + d2 >= lineLen - buffer && d1 + d2 <= lineLen + buffer) {
    return true;
  }
  return false;
}
```

### Processing (Java)
```java
boolean linePoint(float x1, float y1, float x2, float y2, float px, float py) {
  float d1 = dist(px,py, x1,y1);
  float d2 = dist(px,py, x2,y2);
  float lineLen = dist(x1,y1, x2,y2);
  float buffer = 0.1;

  if (d1+d2 >= lineLen-buffer && d1+d2 <= lineLen+buffer) {
    return true;
  }
  return false;
}
```
