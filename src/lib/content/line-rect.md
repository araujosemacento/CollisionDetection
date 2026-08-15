---
title: "Linha / Retângulo"
slug: "line-rect"
order: 16
sketch: "LineRect"
caption: "Mova a linha com o mouse para atingir o retângulo!"
---

# LINHA / RETÂNGULO

Como verificar se uma linha colide com um retângulo? Basta reutilizar a função [Linha/Linha](/line-line) que acabamos de aprender e testar a linha contra cada um dos **quatro lados do retângulo**:

1. Lado esquerdo: $(rx, ry)$ até $(rx, ry+rh)$
2. Lado direito: $(rx+rw, ry)$ até $(rx+rw, ry+rh)$
3. Lado superior: $(rx, ry)$ até $(rx+rw, ry)$
4. Lado inferior: $(rx, ry+rh)$ até $(rx+rw, ry+rh)$

Se a linha cruzar **qualquer um** dos quatro lados, há colisão!

### JavaScript (p5.js)
```javascript
function lineRect(x1, y1, x2, y2, rx, ry, rw, rh) {
  let left =   lineLine(x1, y1, x2, y2, rx, ry, rx, ry + rh);
  let right =  lineLine(x1, y1, x2, y2, rx + rw, ry, rx + rw, ry + rh);
  let top =    lineLine(x1, y1, x2, y2, rx, ry, rx + rw, ry);
  let bottom = lineLine(x1, y1, x2, y2, rx, ry + rh, rx + rw, ry + rh);

  if (left || right || top || bottom) {
    return true;
  }
  return false;
}
```

### Processing (Java)
```java
boolean lineRect(float x1, float y1, float x2, float y2, float rx, float ry, float rw, float rh) {
  boolean left =   lineLine(x1,y1,x2,y2, rx,ry,rx, ry+rh);
  boolean right =  lineLine(x1,y1,x2,y2, rx+rw,ry, rx+rw,ry+rh);
  boolean top =    lineLine(x1,y1,x2,y2, rx,ry, rx+rw,ry);
  boolean bottom = lineLine(x1,y1,x2,y2, rx,ry+rh, rx+rw,ry+rh);

  if (left || right || top || bottom) {
    return true;
  }
  return false;
}
```
