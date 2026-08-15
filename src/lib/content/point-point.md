---
title: "Ponto / Ponto"
slug: "point-point"
order: 5
sketch: "PointPoint"
caption: "Use o mouse para alinhar o seu ponto exatamente com o ponto alvo!"
---

# PONTO / PONTO

A colisão mais simples de testar é entre dois pontos. Para verificar se dois pontos estão se tocando, simplesmente checamos se suas coordenadas X e Y são exatamente iguais!

```javascript
if (x1 === x2 && y1 === y2) {
    // os pontos estão no mesmo lugar: colisão!
} else {
    // não há colisão
}
```

Podemos então empacotar este código em uma função para torná-lo facilmente reutilizável. Como argumentos, passamos as coordenadas X/Y de ambos os pontos. A função retorna um valor booleano `true` ou `false`.

### JavaScript (p5.js)
```javascript
function pointPoint(x1, y1, x2, y2) {
    if (x1 === x2 && y1 === y2) {
        return true;
    }
    return false;
}
```

### Processing (Java)
```java
boolean pointPoint(float x1, float y1, float x2, float y2) {
    if (x1 == x2 && y1 == y2) {
        return true;
    }
    return false;
}
```

Note o atalho acima: poderíamos especificar `else { return false; }`, mas retornar diretamente `false` após o `if` produz o exato mesmo resultado com um código mais limpo.

Com nossa primeira função de colisão em mãos, podemos construir algo interativo. Tente alinhar o ponteiro do mouse com o ponto azul no canvas acima e observe o fundo mudar de cor para laranja quando colidirem!

<div class="callout">
Você notará que é um pouco difícil fazer a colisão acontecer (consegue adivinhar o porquê?) &mdash; um problema que resolveremos na <a href="/section_1_challenges">seção de desafios do Capítulo 1</a>.
</div>

Abaixo está o código completo do exemplo interativo em **p5.js**:

```javascript
let px, py;           // ponto controlado pelo mouse
let targetX = 300;    // coordenadas do ponto alvo
let targetY = 200;

function setup() {
  createCanvas(600, 400);
  noCursor();
  strokeWeight(5);    // traço mais espesso para facilitar a visualização
}

function draw() {
  px = mouseX;
  py = mouseY;

  // verifica colisão!
  let colliding = pointPoint(px, py, targetX, targetY);
  if (colliding) {
    background(255, 150, 0);
  } else {
    background(255);
  }

  // desenha os dois pontos
  stroke(0, 150, 255);
  point(targetX, targetY);

  stroke(0, 150);
  point(px, py);
}

function pointPoint(x1, y1, x2, y2) {
  if (x1 === x2 && y1 === y2) {
    return true;
  }
  return false;
}
```

Parabéns, você escreveu seu primeiro programa utilizando colisão! Esta estrutura básica (exemplo interativo, explicação, código da função e exemplo completo) se repetirá ao longo de todos os capítulos.
