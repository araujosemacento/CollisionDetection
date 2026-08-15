---
title: "Colisão Orientada a Objetos"
slug: "object_oriented_collision"
order: 27
sketch: "ObjectOrientedCollision"
caption: "Mova o círculo com o mouse para interagir com a grade de retângulos em POO!"
---

# COLISÃO ORIENTADA A OBJETOS

Parabéns por chegar até aqui! Todos os algoritmos anteriores são funções puras e isoladas. Para integrar esses conceitos em jogos ou projetos reais maiores, a melhor abordagem é organizar o código usando **Programação Orientada a Objetos (POO)**.

Imagine que temos um círculo controlado pelo jogador e vários retângulos na tela. Ao invés de manter variáveis soltas para cada posição e tamanho, encapsulamos as propriedades em classes `Circle` e `Rectangle`.

### JavaScript (p5.js)
```javascript
class CircleObj {
  constructor(r) {
    this.x = 0;
    this.y = 0;
    this.r = r;
  }

  update() {
    this.x = mouseX;
    this.y = mouseY;
  }

  display() {
    fill(0, 150);
    noStroke();
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }
}

class RectObj {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.hit = false;
  }

  checkCollision(circle) {
    this.hit = circleRect(circle.x, circle.y, circle.r, this.x, this.y, this.w, this.h);
  }

  display() {
    if (this.hit) fill(255, 150, 0);
    else fill(0, 150, 255);
    noStroke();
    rect(this.x, this.y, this.w, this.h);
  }
}
```

### Processing (Java)
```java
class Circle {
  float x, y, r;

  Circle (float _x, float _y, float _r) {
    x = _x; y = _y; r = _r;
  }

  void update() {
    x = mouseX; y = mouseY;
  }

  void display() {
    fill(0, 150);
    noStroke();
    ellipse(x, y, r*2, r*2);
  }
}

class Rectangle {
  float x, y, w, h;
  boolean hit = false;

  Rectangle (float _x, float _y, float _w, float _h) {
    x = _x; y = _y; w = _w; h = _h;
  }

  void checkCollision(Circle c) {
    hit = circleRect(c.x, c.y, c.r, x, y, w, h);
  }

  void display() {
    if (hit) fill(255,150,0);
    else fill(0,150,255);
    noStroke();
    rect(x, y, w, h);
  }
}
```

No loop principal de atualização (`draw`), percorremos o array de objetos chamando os métodos `checkCollision()` e `display()`. Isso mantém o código limpo, modular e expansível para milhares de objetos!
