---
title: "Ponto / Círculo"
slug: "point-circle"
order: 6
sketch: "PointCircle"
caption: "Mova o mouse (ponto) para dentro do círculo para testar a colisão!"
---

# PONTO / CÍRCULO

A colisão [Ponto/Ponto](/point-point) foi extremamente fácil, mas a partir de agora precisaremos de matemática básica para verificar se os objetos estão se tocando. Testar se um ponto está dentro de um círculo exige relembrar o **Teorema de Pitágoras**:

```text
a² + b² = c²
```

Podemos calcular o comprimento da hipotenusa **c** dados os dois catetos **a** e **b**:

```javascript
c = Math.sqrt((a * a) + (b * b));
```

Por que precisamos disso? O Teorema de Pitágoras nos dá a **distância entre dois pontos no espaço 2D**! Nesse contexto, **a** e **b** são as distâncias horizontal e vertical entre o ponto e o centro do círculo.

Calculamos as distâncias X e Y:

```javascript
let distX = px - cx;
let distY = py - cy;
```

E obtemos a distância euclidiana total:

```javascript
let distance = Math.sqrt((distX * distX) + (distY * distY));
```

Se o ponto está em `(10,10)` e o centro do círculo em `(40,50)`, a distância será `50`. (Mesmo se as diferenças forem negativas, a multiplicação por si mesmas torna o resultado positivo).

## COMO TESTAR A COLISÃO?

Se a distância entre o ponto e o centro do círculo for **menor ou igual ao raio (r) do círculo**, significa que o ponto está dentro do círculo!

```javascript
if (distance <= r) {
    return true; // Colisão!
}
return false;
```

### JavaScript (p5.js)
```javascript
function pointCircle(px, py, cx, cy, r) {
  let distX = px - cx;
  let distY = py - cy;
  let distance = Math.sqrt((distX * distX) + (distY * distY));

  if (distance <= r) {
    return true;
  }
  return false;
}
```

### Processing (Java)
```java
boolean pointCircle(float px, float py, float cx, float cy, float r) {
  float distX = px - cx;
  float distY = py - cy;
  float distance = sqrt( (distX*distX) + (distY*distY) );

  if (distance <= r) {
    return true;
  }
  return false;
}
```

## EXEMPLO COMPLETO

```javascript
let px = 0, py = 0;
let cx = 300, cy = 200;
let radius = 100;

function setup() {
  createCanvas(600, 400);
  noCursor();
  strokeWeight(5);
}

function draw() {
  background(255);
  px = mouseX;
  py = mouseY;

  let hit = pointCircle(px, py, cx, cy, radius);

  if (hit) {
    fill(255, 150, 0);
  } else {
    fill(0, 150, 255);
  }
  noStroke();
  ellipse(cx, cy, radius * 2, radius * 2);

  stroke(0);
  point(px, py);
}
```

O p5.js possui uma função embutida chamada `dist(x1, y1, x2, y2)`, mas entender a fórmula de Pitágoras por trás é essencial para os próximos capítulos!
