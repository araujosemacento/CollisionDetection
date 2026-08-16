---
title: "Retângulo / Retângulo"
slug: "rect-rect"
order: 10
sketch: "RectRect"
caption: "Mova o retângulo menor com o mouse para colidir com o retângulo maior!"
---

<script>
	import CodeTabs from '$lib/components/CodeTabs.svelte';
</script>

# RETÂNGULO / RETÂNGULO

Assim como no capítulo [Ponto/Retângulo](point-rect), para verificar a colisão entre dois retângulos alinhados aos eixos (AABB - *Axis-Aligned Bounding Box*), comparamos as bordas dos dois objetos.

A colisão ocorre se todas as quatro condições de sobreposição das bordas forem verdadeiras:

1. A borda direita do retângulo 1 passa da borda esquerda do retângulo 2 (`r1x + r1w >= r2x`)
2. A borda esquerda do retângulo 1 está antes da borda direita do retângulo 2 (`r1x <= r2x + r2w`)
3. A borda inferior do retângulo 1 passa da borda superior do retângulo 2 (`r1y + r1h >= r2y`)
4. A borda superior do retângulo 1 está antes da borda inferior do retângulo 2 (`r1y <= r2y + r2h`)

![Teste de sobreposição entre dois retângulos](images/rect-rect.jpg)

<CodeTabs>

```javascript
function rectRect(r1x, r1y, r1w, r1h, r2x, r2y, r2w, r2h) {
  if (r1x + r1w >= r2x && 
      r1x <= r2x + r2w && 
      r1y + r1h >= r2y && 
      r1y <= r2y + r2h) {
    return true;
  }
  return false;
}
```

```java
boolean rectRect(float r1x, float r1y, float r1w, float r1h, float r2x, float r2y, float r2w, float r2h) {
  if (r1x + r1w >= r2x && 
      r1x <= r2x + r2w && 
      r1y + r1h >= r2y && 
      r1y <= r2y + r2h) {
    return true;
  }
  return false;
}
```

```python
def rect_rect(r1x, r1y, r1w, r1h, r2x, r2y, r2w, r2h):
    if (r1x + r1w >= r2x and 
        r1x <= r2x + r2w and 
        r1y + r1h >= r2y and 
        r1y <= r2y + r2h):
        return True
    return False

# Dica Pygame (usando o método nativo colliderect):
# rect1 = pygame.Rect(r1x, r1y, r1w, r1h)
# rect2 = pygame.Rect(r2x, r2y, r2w, r2h)
# hit = rect1.colliderect(rect2)
```

</CodeTabs>

## AABB (AXIS-ALIGNED BOUNDING BOX)

Este algoritmo pressupõe que os retângulos **não estão rotacionados**. Essa é a base do sistema de colisão de quase todos os jogos 2D clássicos como *Super Mario*, *Platformers* e *Top-Down Shooters*!

![Exemplo de Bounding Box retangular em objeto complexo](images/bounding-box.jpg)
