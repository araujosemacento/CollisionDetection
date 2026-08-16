---
title: "Ponto / Círculo"
slug: "point-circle"
order: 6
sketch: "PointCircle"
caption: "Mova o mouse (ponto) para dentro do círculo para testar a colisão!"
---

<script>
	import CodeTabs from '$lib/components/CodeTabs.svelte';
</script>

# PONTO / CÍRCULO

#### Jeff Thompson

A colisão [Ponto/Ponto](point-point) foi extremamente fácil, mas a partir de agora precisaremos de matemática básica para verificar se os objetos estão se tocando. Testar se um ponto está dentro de um círculo exige relembrar o famoso **Teorema de Pitágoras**:

```text
a² + b² = c²
```

Podemos calcular o comprimento do lado mais longo de um triângulo retângulo (a hipotenusa **c**) dados os comprimentos dos outros dois lados (**a** e **b**):

```javascript
c = Math.sqrt((a * a) + (b * b));
```

Multiplicamos `a` por ele mesmo, o mesmo para `b`, somamos os dois resultados e tiramos a raiz quadrada do total.

Por que precisamos disso? O Teorema de Pitágoras nos dá a **distância exata entre dois pontos no espaço 2D**! Nesse contexto, **a** e **b** são as distâncias horizontal e vertical entre o ponto e o centro do círculo.

![Triângulo formado entre o ponto e o centro do círculo](images/point-circle.jpg)

Calculamos as distâncias X e Y:

```javascript
let distX = px - cx;
let distY = py - cy;
```

Em seguida, encontramos a distância entre o ponto e o centro do círculo usando a fórmula:

```javascript
let distance = Math.sqrt((distX * distX) + (distY * distY));
```

Por exemplo, se o ponto está na coordenada `(10, 10)` e o centro do círculo está em `(40, 50)`, obtemos uma distância exata de `50`.

Você pode estar se perguntando: *"E se a diferença das distâncias resultar em um número negativo?"* Não se preocupe: como multiplicamos cada valor por ele mesmo (`distX * distX`), mesmo se o resultado da subtração for negativo, a multiplicação tornará o resultado positivo!

---

## COMO TESTAR A COLISÃO?

Se a distância calculada entre o ponto e o centro do círculo for **menor ou igual ao raio (r)** do círculo, significa que o ponto está dentro dele!

<CodeTabs>

```javascript
function pointCircle(px, py, cx, cy, r) {
  // calcula a distância entre o ponto e o centro do círculo
  // usando o Teorema de Pitágoras
  let distX = px - cx;
  let distY = py - cy;
  let distance = Math.sqrt((distX * distX) + (distY * distY));

  // se a distância for menor ou igual ao raio, há colisão!
  if (distance <= r) {
    return true;
  }
  return false;
}
```

```java
boolean pointCircle(float px, float py, float cx, float cy, float r) {
  // calcula a distância entre o ponto e o centro do círculo
  // usando o Teorema de Pitágoras
  float distX = px - cx;
  float distY = py - cy;
  float distance = sqrt( (distX*distX) + (distY*distY) );

  // se a distância for menor ou igual ao raio, há colisão!
  if (distance <= r) {
    return true;
  }
  return false;
}
```

```python
import math

def point_circle(px, py, cx, cy, r):
    # calcula a distância entre o ponto e o centro do círculo
    # usando o Teorema de Pitágoras
    dist_x = px - cx
    dist_y = py - cy
    distance = math.sqrt((dist_x ** 2) + (dist_y ** 2))

    # se a distância for menor ou igual ao raio, há colisão!
    if distance <= r:
        return True
    return False

# Dica Pygame (usando a classe Vector2):
# point = pygame.math.Vector2(px, py)
# center = pygame.math.Vector2(cx, cy)
# hit = point.distance_to(center) <= r
```

</CodeTabs>

> **Nota didática:** Muitas linguagens de programação possuem funções utilitárias nativas para calcular a distância diretamente (como `dist()` no Processing ou `Math.hypot()` em JavaScript). No entanto, mantemos a matemática explícita no código para servir de referência conceitual.

---

## O PROBLEMA DA "BALA ATRAVÉS DO PAPEL" (CCD)

Uma ressalva importante: se você tiver um objeto movendo-se a altíssima velocidade em um jogo (como um projétil ou tiro), ele pode atravessar completamente o alvo entre um quadro (*frame*) e outro sem que a colisão seja detectada no instante exato do teste!

Esse fenômeno é conhecido no desenvolvimento de jogos como o problema da *"bala através do papel"* (*bullet through paper*). A técnica avançada padrão para solucionar isso é chamada de **Continuous Collision Detection (CCD)** (Detecção de Colisão Contínua), que projeta trajetórias ao longo do tempo em vez de apenas verificar posições discretas a cada frame.

