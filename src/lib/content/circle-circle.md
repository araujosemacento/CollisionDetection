---
title: "Círculo / Círculo"
slug: "circle-circle"
order: 7
sketch: "CircleCircle"
caption: "Use o mouse para mover o círculo menor e colidir com o círculo maior!"
---

<script>
	import CodeTabs from '$lib/components/CodeTabs.svelte';
</script>

# CÍRCULO / CÍRCULO

#### Jeff Thompson

A colisão com pontos é ótima, mas raramente os objetos em jogos ocupam apenas um único ponto no espaço. Em seguida, podemos utilizar a mesma aplicação do Teorema de Pitágoras vista no capítulo [Ponto/Círculo](point-circle) para testar se dois círculos estão se tocando.

Primeiro, calculamos a distância entre os centros dos dois círculos:

```javascript
let distX = c1x - c2x;
let distY = c1y - c2y;
let distance = Math.sqrt((distX * distX) + (distY * distY));
```

Para verificar se eles estão colidindo, testamos se a **distância entre os seus centros é menor ou igual à soma de seus raios** (`c1r + c2r`):

```javascript
if (distance <= c1r + c2r) {
  return true;
}
return false;
```

Abaixo está a implementação completa da função:

<CodeTabs>

```javascript
function circleCircle(c1x, c1y, c1r, c2x, c2y, c2r) {
  // calcula a distância entre os centros dos círculos
  // usando o Teorema de Pitágoras
  let distX = c1x - c2x;
  let distY = c1y - c2y;
  let distance = Math.sqrt((distX * distX) + (distY * distY));

  // se a distância for menor ou igual à soma dos raios,
  // os círculos estão se tocando!
  if (distance <= c1r + c2r) {
    return true;
  }
  return false;
}
```

```java
boolean circleCircle(float c1x, float c1y, float c1r, float c2x, float c2y, float c2r) {
  // calcula a distância entre os centros dos círculos
  // usando o Teorema de Pitágoras
  float distX = c1x - c2x;
  float distY = c1y - c2y;
  float distance = sqrt( (distX*distX) + (distY*distY) );

  // se a distância for menor ou igual à soma dos raios,
  // os círculos estão se tocando!
  if (distance <= c1r+c2r) {
    return true;
  }
  return false;
}
```

```python
import math

def circle_circle(c1x, c1y, c1r, c2x, c2y, c2r):
    # calcula a distância entre os centros dos círculos
    # usando o Teorema de Pitágoras
    dist_x = c1x - c2x
    dist_y = c1y - c2y
    distance = math.sqrt((dist_x ** 2) + (dist_y ** 2))

    # se a distância for menor ou igual à soma dos raios,
    # os círculos estão se tocando!
    if distance <= (c1r + c2r):
        return True
    return False

# Dica Pygame (usando a classe Vector2):
# center1 = pygame.math.Vector2(c1x, c1y)
# center2 = pygame.math.Vector2(c2x, c2y)
# hit = center1.distance_to(center2) <= (c1r + c2r)
```

</CodeTabs>

---

## BOUNDING CIRCLES (CÍRCULOS DELIMITADORES)

A colisão **Círculo/Círculo** é amplamente utilizada para criar "círculos delimitadores" (*bounding circles*) em torno de objetos complexos. Embora sacrifique um pouco de precisão perfeita, este tipo de teste é extremamente veloz e serve como uma excelente aproximação inicial.

![Exemplo de Bounding Circle ao redor de um dodecágono](images/bounding-circle.jpg)

<figcaption style="text-align: center; font-size: 0.85rem; color: var(--color-text-muted); margin-top: -0.75rem; margin-bottom: 1.5rem;">Embora inclua algumas áreas que não fazem parte da forma original, um círculo é uma boa aproximação didática para este dodecágono.</figcaption>

> **Por que não elipses?** Você pode estar se perguntando por que estamos falando apenas sobre círculos e não elipses. Embora pareçam simples à primeira vista, a matemática exata para verificar colisão entre elipses é surpreendentemente complexa. Considere um excelente desafio avançado para explorar após dominar este livro!

