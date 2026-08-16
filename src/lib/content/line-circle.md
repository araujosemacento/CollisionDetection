---
title: "Linha / Círculo"
slug: "line-circle"
order: 14
sketch: "LineCircle"
caption: "Use o mouse para posicionar o círculo sobre a linha!"
---

<script>
	import CodeTabs from '$lib/components/CodeTabs.svelte';
</script>

# LINHA / CÍRCULO

#### Jeff Thompson

Para verificar se um círculo está colidindo com um segmento de reta, reutilizamos códigos de exemplos anteriores — uma prática didática que continuaremos adotando ao longo de todo o resto do livro. A matemática por trás dessa verificação é um pouco mais espinhosa, mas simplificaremos as partes mais difíceis passo a passo.

---

## PASSO A PASSO DO ALGORITMO

### 1. Testar se as extremidades da linha estão dentro do círculo
Primeiro, verificamos se qualquer uma das duas extremidades da linha está contida dentro do círculo. Isso é especialmente provável de acontecer quando a linha é muito menor que o diâmetro do círculo. Para isso, chamamos a função [Ponto/Círculo](point-circle) para ambas as extremidades. Se alguma delas estiver dentro, retornamos `true` imediatamente e pulamos os demais cálculos!

```javascript
let inside1 = pointCircle(x1, y1, cx, cy, r);
let inside2 = pointCircle(x2, y2, cx, cy, r);
if (inside1 || inside2) return true;
```

### 2. Calcular o comprimento da linha
Em seguida, precisamos encontrar o ponto mais próximo da linha em relação ao centro do círculo. Para começar, calculamos o comprimento total da linha (`len`) aplicando o Teorema de Pitágoras:

```javascript
let len = Math.hypot(x1 - x2, y1 - y2);
```

### 3. Calcular a projeção por produto escalar (*Dot Product*)
Depois, calculamos um valor de proporção que chamamos de `dot`. Se você já estudou matemática vetorial, isso equivale a realizar o **produto escalar** (*dot product*) entre dois vetores. Se o termo não for familiar, não se preocupe! Considere esta etapa como uma porção de cálculo vetorial que você pode se alegrar de não ter que resolver à mão:

```javascript
let dot = (((cx - x1) * (x2 - x1)) + ((cy - y1) * (y2 - y1))) / Math.pow(len, 2);
```

### 4. Encontrar as coordenadas do ponto mais próximo
Usamos o valor de `dot` para calcular as coordenadas X e Y do ponto mais próximo da linha em relação ao centro do círculo:

```javascript
let closestX = x1 + (dot * (x2 - x1));
let closestY = y1 + (dot * (y2 - y1));
```

### 5. Verificar se o ponto projetado pertence ao segmento de reta
No entanto, essa equação vetorial projeta um ponto ao longo de uma linha imaginária estendida infinitamente em ambas as direções. Ou seja, ela poderia nos dar um ponto situado além das extremidades do segmento!

Por isso, verificamos se esse ponto projetado `(closestX, closestY)` realmente pertence ao segmento de reta usando a função [Linha/Ponto](line-point) que criamos anteriormente. Esta é a primeira de muitas vezes em que aninharemos funções anteriores para resolver colisões mais complexas:

```javascript
let onSegment = linePoint(x1, y1, x2, y2, closestX, closestY);
if (!onSegment) return false;
```

Se o ponto mais próximo não estiver sobre o segmento de reta, podemos retornar `false` imediatamente!

### 6. Calcular a distância ao centro e testar contra o raio
Por fim, calculamos a distância euclidiana entre o centro do círculo `(cx, cy)` e o ponto mais próximo encontrado `(closestX, closestY)`:

```javascript
let distX = closestX - cx;
let distY = closestY - cy;
let distance = Math.sqrt((distX * distX) + (distY * distY));
```

Se essa distância for menor ou igual ao raio `r` do círculo, confirmamos a colisão!

```javascript
if (distance <= r) {
    return true;
}
return false;
```

---

## CÓDIGO COMPLETO MULTILINGUAGEM

Abaixo está a implementação completa reunindo todas as etapas e incluindo as funções utilitárias aninhadas:

<CodeTabs>

```javascript
function lineCircle(x1, y1, x2, y2, cx, cy, r) {
  // 1. As extremidades da linha estão dentro do círculo?
  let inside1 = pointCircle(x1, y1, cx, cy, r);
  let inside2 = pointCircle(x2, y2, cx, cy, r);
  if (inside1 || inside2) return true;

  // 2. Comprimento total da linha
  let len = Math.hypot(x1 - x2, y1 - y2);

  // 3. Produto escalar (dot product) para encontrar a projeção
  let dot = (((cx - x1) * (x2 - x1)) + ((cy - y1) * (y2 - y1))) / Math.pow(len, 2);

  // 4. Coordenadas do ponto mais próximo sobre a linha infinita
  let closestX = x1 + (dot * (x2 - x1));
  let closestY = y1 + (dot * (y2 - y1));

  // 5. O ponto mais próximo está realmente no segmento de reta?
  let onSegment = linePoint(x1, y1, x2, y2, closestX, closestY);
  if (!onSegment) return false;

  // 6. Calcula a distância até o centro do círculo
  let distX = closestX - cx;
  let distY = cy - closestY;
  let distance = Math.sqrt((distX * distX) + (distY * distY));

  // se a distância for menor ou igual ao raio, há colisão!
  if (distance <= r) {
    return true;
  }
  return false;
}
```

```java
boolean lineCircle(float x1, float y1, float x2, float y2, float cx, float cy, float r) {
  // 1. As extremidades da linha estão dentro do círculo?
  boolean inside1 = pointCircle(x1,y1, cx,cy,r);
  boolean inside2 = pointCircle(x2,y2, cx,cy,r);
  if (inside1 || inside2) return true;

  // 2. Comprimento total da linha
  float distX = x1 - x2;
  float distY = y1 - y2;
  float len = sqrt( (distX*distX) + (distY*distY) );

  // 3. Produto escalar (dot product)
  float dot = ( ((cx-x1)*(x2-x1)) + ((cy-y1)*(y2-y1)) ) / pow(len,2);

  // 4. Coordenadas do ponto mais próximo
  float closestX = x1 + (dot * (x2-x1));
  float closestY = y1 + (dot * (y2-y1));

  // 5. O ponto está no segmento de reta?
  boolean onSegment = linePoint(x1,y1,x2,y2, closestX,closestY);
  if (!onSegment) return false;

  // 6. Distância até o centro
  distX = closestX - cx;
  distY = closestY - cy;
  float distance = sqrt( (distX*distX) + (distY*distY) );

  if (distance <= r) {
    return true;
  }
  return false;
}
```

```python
import math

def line_circle(x1, y1, x2, y2, cx, cy, r):
    # 1. As extremidades da linha estão dentro do círculo?
    inside1 = point_circle(x1, y1, cx, cy, r)
    inside2 = point_circle(x2, y2, cx, cy, r)
    if inside1 or inside2:
        return True

    # 2. Comprimento total da linha
    line_len = math.hypot(x1 - x2, y1 - y2)

    # 3. Produto escalar (dot product)
    dot = (((cx - x1) * (x2 - x1)) + ((cy - y1) * (y2 - y1))) / (line_len ** 2)

    # 4. Coordenadas do ponto mais próximo
    closest_x = x1 + (dot * (x2 - x1))
    closest_y = y1 + (dot * (y2 - y1))

    # 5. O ponto está no segmento de reta?
    if not line_point(x1, y1, x2, y2, closest_x, closest_y):
        return False

    # 6. Distância até o centro
    dist_x = closest_x - cx
    dist_y = closest_y - cy
    distance = math.sqrt((dist_x ** 2) + (dist_y ** 2))

    if distance <= r:
        return True
    return False
```

</CodeTabs>

---

## VETORES E REFERÊNCIAS

A matemática com linhas se beneficia muito das funcionalidades de vetores de posição (`PVector` no Processing / `Vector2` em engines modernas). Se você deseja se aprofundar em física 2D e vetores, o livro [*Nature of Code*](http://natureofcode.com/book/) de Daniel Shiffman é uma excelente recomendação.

> **Atribuição:** Algoritmo construído com base na formulação matemática desenvolvida por **Philip Nicoletti** em sua publicação clássica no fórum *CodeGuru*.

