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

A colisão [Ponto/Ponto](point-point) foi extremamente fácil, mas a partir de agora precisaremos de matemática básica para verificar se os objetos estão se tocando. Testar se um ponto está dentro de um círculo exige relembrar o **Teorema de Pitágoras**:

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

<CodeTabs>

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

```python
import math

def point_circle(px, py, cx, cy, r):
    dist_x = px - cx
    dist_y = py - cy
    distance = math.sqrt((dist_x ** 2) + (dist_y ** 2))

    if distance <= r:
        return True
    return False

# Dica Pygame (usando Vector2):
# point = pygame.math.Vector2(px, py)
# center = pygame.math.Vector2(cx, cy)
# hit = point.distance_to(center) <= r
```

</CodeTabs>
