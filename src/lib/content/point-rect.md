---
title: "Ponto / Retângulo"
slug: "point-rect"
order: 9
sketch: "PointRect"
caption: "Mova o ponteiro do mouse para dentro do retângulo!"
---

<script>
	import CodeTabs from '$lib/components/CodeTabs.svelte';
</script>

# PONTO / RETÂNGULO

#### Jeff Thompson

Checar colisões com objetos circulares é bastante direto porque a distância do centro até a borda é a mesma em todas as direções. Retângulos, no entanto, exigem um algoritmo um pouco mais detalhado.

Imagine um retângulo definido por sua posição superior esquerda `(rx, ry)` e dimensões de largura e altura `(rw, rh)`:

```javascript
let rx = 10;  // posição X (canto superior esquerdo)
let ry = 10;  // posição Y
let rw = 30;  // largura (width)
let rh = 30;  // altura (height)
```

Para testar se um ponto `(px, py)` está contido dentro do retângulo, precisamos verificar quatro condições em conjunto:

- O X do ponto está à **DIREITA** da borda esquerda? (`px >= rx`)
- O X do ponto está à **ESQUERDA** da borda direita? (`px <= rx + rw`)
- O Y do ponto está **ABAIXO** da borda superior? (`py >= ry`)
- O Y do ponto está **ACIMA** da borda inferior? (`py <= ry + rh`)

![Borda esquerda e limites do retângulo](images/rect-bounding-box.jpg)

Se **todas** as quatro afirmações forem verdadeiras simultaneamente, o ponto está dentro do retângulo!

<CodeTabs>

```javascript
function pointRect(px, py, rx, ry, rw, rh) {
  // o ponto está dentro dos limites do retângulo?
  if (px >= rx &&        // à direita da borda esquerda E
      px <= rx + rw &&   // à esquerda da borda direita E
      py >= ry &&        // abaixo da borda superior E
      py <= ry + rh) {   // acima da borda inferior
        return true;
  }
  return false;
}
```

```java
boolean pointRect(float px, float py, float rx, float ry, float rw, float rh) {
  // o ponto está dentro dos limites do retângulo?
  if (px >= rx &&        // à direita da borda esquerda E
      px <= rx + rw &&   // à esquerda da borda direita E
      py >= ry &&        // abaixo da borda superior E
      py <= ry + rh) {   // acima da borda inferior
        return true;
  }
  return false;
}
```

```python
def point_rect(px, py, rx, ry, rw, rh):
    # o ponto está dentro dos limites do retângulo?
    if (px >= rx and        # à direita da borda esquerda E
        px <= rx + rw and   # à esquerda da borda direita E
        py >= ry and        # abaixo da borda superior E
        py <= ry + rh):     # acima da borda inferior
        return True
    return False

# Dica Pygame (usando a classe Rect nativa):
# rect = pygame.Rect(rx, ry, rw, rh)
# hit = rect.collidepoint(px, py)
```

</CodeTabs>

