---
title: "Ponto / Retângulo"
slug: "point-rect"
order: 9
sketch: "PointRect"
caption: "Mova o ponteiro do mouse (ponto) para dentro do retângulo!"
---

# PONTO / RETÂNGULO

Testar a colisão com objetos circulares é simples porque a distância do centro até a borda é idêntica em todas as direções. Retângulos, por outro lado, exigem um algoritmo baseado nos seus limites laterais (Bounding Box).

Para testar se um ponto está dentro de um retângulo, verificamos 4 condições simultâneas:

1. A posição X do ponto está à **direita da borda esquerda**? (`px >= rx`)
2. A posição X do ponto está à **esquerda da borda direita**? (`px <= rx + rw`)
3. A posição Y do ponto está **abaixo da borda superior**? (`py >= ry`)
4. A posição Y do ponto está **acima da borda inferior**? (`py <= ry + rh`)

Se **todas** as 4 condições forem verdadeiras, o ponto está dentro do retângulo!

### JavaScript (p5.js)
```javascript
function pointRect(px, py, rx, ry, rw, rh) {
  if (px >= rx &&        // à direita da borda esquerda E
      px <= rx + rw &&   // à esquerda da borda direita E
      py >= ry &&        // abaixo da borda superior E
      py <= ry + rh) {   // acima da borda inferior
        return true;
  }
  return false;
}
```

### Processing (Java)
```java
boolean pointRect(float px, float py, float rx, float ry, float rw, float rh) {
  if (px >= rx &&
      px <= rx + rw &&
      py >= ry &&
      py <= ry + rh) {
        return true;
  }
  return false;
}
```

## EXEMPLO COMPLETO

```javascript
let px = 0, py = 0;
let rx = 200, ry = 100;
let rw = 200, rh = 200;

function setup() {
  createCanvas(600, 400);
  noCursor();
  strokeWeight(5);
}

function draw() {
  background(255);
  px = mouseX;
  py = mouseY;

  let hit = pointRect(px, py, rx, ry, rw, rh);

  if (hit) {
    fill(255, 150, 0);
  } else {
    fill(0, 150, 255);
  }
  noStroke();
  rect(rx, ry, rw, rh);

  stroke(0);
  point(px, py);
}
```
