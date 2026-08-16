---
title: "Colisão Orientada a Objetos"
slug: "object_oriented_collision"
order: 27
sketch: "ObjectOrientedCollision"
caption: "Mova o círculo (objeto) com o mouse para testar a colisão contra o array de retângulos!"
---

<script>
	import CodeTabs from '$lib/components/CodeTabs.svelte';
</script>

# COLISÃO ORIENTADA A OBJETOS

Em projetos de jogos do mundo real, os objetos da cena geralmente são instâncias de **classes**. A colisão é integrada diretamente dentro dos métodos dessas classes para modularizar e organizar o código.

---

## ESTRUTURA DO CÓDIGO

Em vez de verificar variáveis avulsas, encapsulamos o estado e o comportamento dentro dos objetos:

<CodeTabs>

```javascript
class CircleObj {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
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
    fill(this.hit ? [255, 150, 0] : [0, 150, 255]);
    noStroke();
    rect(this.x, this.y, this.w, this.h);
  }
}
```

```java
class Circle {
  float x, y, r;
  Circle(float _x, float _y, float _r) {
    x = _x; y = _y; r = _r;
  }
  void update() {
    x = mouseX; y = mouseY;
  }
  void display() {
    fill(0, 150); noStroke();
    ellipse(x, y, r*2, r*2);
  }
}

class Rectangle {
  float x, y, w, h;
  boolean hit = false;
  Rectangle(float _x, float _y, float _w, float _h) {
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

```python
import pygame

class Circle:
    def __init__(self, x, y, r):
        self.x = x
        self.y = y
        self.r = r

    def update(self):
        self.x, self.y = pygame.mouse.get_pos()

    def draw(self, surface):
        pygame.draw.circle(surface, (0, 0, 0, 150), (int(self.x), int(self.y)), int(self.r))

class Rectangle:
    def __init__(self, x, y, w, h):
        self.rect = pygame.Rect(x, y, w, h)
        self.hit = False

    def check_collision(self, circle):
        self.hit = circle_rect(circle.x, circle.y, circle.r, 
                               self.rect.x, self.rect.y, self.rect.width, self.rect.height)

    def draw(self, surface):
        color = (255, 150, 0) if self.hit else (0, 150, 255)
        pygame.draw.rect(surface, color, self.rect)
```

</CodeTabs>

---

## LOOP PRINCIPAL DE VERIFICAÇÃO

No loop principal de atualização e renderização, iteramos sobre a lista de objetos testando as interações:

<CodeTabs>

```javascript
function draw() {
  background(255);
  circle.update();

  for (let r of rects) {
    r.checkCollision(circle);
    r.display();
  }

  circle.display();
}
```

```java
void draw() {
  background(255);
  
  for (Rectangle r : rects) {
    r.checkCollision(circle);
    r.display();
  }
  
  circle.update();
  circle.display();
}
```

```python
while running:
    surface.fill((255, 255, 255))
    circle.update()

    for r in rects:
        r.check_collision(circle)
        r.draw(surface)

    circle.draw(surface)
```

</CodeTabs>
