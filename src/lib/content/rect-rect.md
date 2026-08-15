---
title: "Retângulo / Retângulo"
slug: "rect-rect"
order: 10
sketch: "RectRect"
caption: "Use o mouse para mover o retângulo menor e colidir com o retângulo central!"
---

# RETÂNGULO / RETÂNGULO

Passar de [Ponto/Retângulo](/point-rect) para dois retângulos é conceitualmente simples, mas os testes relacionam 4 bordas simultâneas:

1. A **borda direita de r1** passou da **borda esquerda de r2**? (`r1x + r1w >= r2x`)
2. A **borda esquerda de r1** está antes da **borda direita de r2**? (`r1x <= r2x + r2w`)
3. A **borda inferior de r1** passou da **borda superior de r2**? (`r1y + r1h >= r2y`)
4. A **borda superior de r1** está antes da **borda inferior de r2**? (`r1y <= r2y + r2h`)

Se todas essas quatro condições forem verdadeiras, os dois retângulos estão se sobrepondo (colidindo)!

### JavaScript (p5.js)
```javascript
function rectRect(r1x, r1y, r1w, r1h, r2x, r2y, r2w, r2h) {
  if (r1x + r1w >= r2x &&    // borda direita de r1 passa da esquerda de r2 E
      r1x <= r2x + r2w &&    // borda esquerda de r1 antes da direita de r2 E
      r1y + r1h >= r2y &&    // borda inferior de r1 passa da superior de r2 E
      r1y <= r2y + r2h) {    // borda superior de r1 antes da inferior de r2
        return true;
  }
  return false;
}
```

### Processing (Java)
```java
boolean rectRect(float r1x, float r1y, float r1w, float r1h, float r2x, float r2y, float r2w, float r2h) {
  if (r1x + r1w >= r2x &&
      r1x <= r2x + r2w &&
      r1y + r1h >= r2y &&
      r1y <= r2y + r2h) {
        return true;
  }
  return false;
}
```

## CAIXAS DELIMITADORAS (BOUNDING BOXES / AABB)

Esta técnica é o clássico **Axis-Aligned Bounding Box (AABB)**. É o teste mais utilizado na indústria de jogos para caixas de colisão preliminares por conta do baixíssimo custo computacional.
