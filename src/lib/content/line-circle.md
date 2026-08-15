---
title: "Linha / Círculo"
slug: "line-circle"
order: 14
sketch: "LineCircle"
caption: "Mova o círculo para colidir com a linha!"
---

# LINHA / CÍRCULO

Para testar a colisão entre um segmento de reta e um círculo:

1. Verificamos primeiro se qualquer uma das duas extremidades da linha está dentro do círculo (usando `pointCircle`).
2. Projetamos vetorialmente o centro do círculo sobre a reta usando o produto escalar (*dot product*) para encontrar o **ponto mais próximo da linha**.
3. Verificamos se esse ponto mais próximo está realmente no segmento de reta (`linePoint`).
4. Se estiver no segmento, calculamos a distância até o centro do círculo: se for menor ou igual ao raio `r`, temos uma colisão!

### JavaScript (p5.js)
```javascript
function lineCircle(x1, y1, x2, y2, cx, cy, r) {
  let inside1 = pointCircle(x1, y1, cx, cy, r);
  let inside2 = pointCircle(x2, y2, cx, cy, r);
  if (inside1 || inside2) return true;

  let len = Math.hypot(x1 - x2, y1 - y2);
  let dot = (((cx - x1) * (x2 - x1)) + ((cy - y1) * (y2 - y1))) / Math.pow(len, 2);

  let closestX = x1 + (dot * (x2 - x1));
  let closestY = y1 + (dot * (y2 - y1));

  let onSegment = linePoint(x1, y1, x2, y2, closestX, closestY);
  if (!onSegment) return false;

  let distX = closestX - cx;
  let distY = closestY - cy;
  let distance = Math.sqrt((distX * distX) + (distY * distY));

  if (distance <= r) {
    return true;
  }
  return false;
}
```

### Processing (Java)
```java
boolean lineCircle(float x1, float y1, float x2, float y2, float cx, float cy, float r) {
  boolean inside1 = pointCircle(x1,y1, cx,cy,r);
  boolean inside2 = pointCircle(x2,y2, cx,cy,r);
  if (inside1 || inside2) return true;

  float distX = x1 - x2;
  float distY = y1 - y2;
  float len = sqrt( (distX*distX) + (distY*distY) );

  float dot = ( ((cx-x1)*(x2-x1)) + ((cy-y1)*(y2-y1)) ) / pow(len,2);

  float closestX = x1 + (dot * (x2-x1));
  float closestY = y1 + (dot * (y2-y1));

  boolean onSegment = linePoint(x1,y1,x2,y2, closestX,closestY);
  if (!onSegment) return false;

  distX = closestX - cx;
  distY = closestY - cy;
  float distance = sqrt( (distX*distX) + (distY*distY) );

  if (distance <= r) {
    return true;
  }
  return false;
}
```
