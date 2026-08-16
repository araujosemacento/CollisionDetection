---
title: "Ponto / Ponto"
slug: "point-point"
order: 5
sketch: "PointPoint"
caption: "Mova o mouse sobre o ponto azul alvo para testar a colisão!"
---

<script>
	import CodeTabs from '$lib/components/CodeTabs.svelte';
</script>

# PONTO / PONTO

A forma mais simples de detecção de colisão é entre dois pontos.

Para testar se dois pontos estão colidindo, verificamos se suas coordenadas X e Y são exatamente iguais:

```text
x1 == x2  E  y1 == y2
```

### EXEMPLO DE IMPLEMENTAÇÃO

<CodeTabs>

```javascript
function pointPoint(x1, y1, x2, y2) {
  if (x1 === x2 && y1 === y2) {
    return true;
  }
  return false;
}
```

```java
boolean pointPoint(float x1, float y1, float x2, float y2) {
  if (x1 == x2 && y1 == y2) {
    return true;
  }
  return false;
}
```

```python
def point_point(x1, y1, x2, y2):
    if x1 == x2 and y1 == y2:
        return True
    return False

# Dica Pygame (usando a classe nativa Vector2):
# p1 = pygame.math.Vector2(x1, y1)
# p2 = pygame.math.Vector2(x2, y2)
# hit = (p1 == p2)
```

</CodeTabs>

### NA PRÁTICA INTERATIVA (WEB)

No mundo real (e na tela de um computador), acertar uma coordenada de 1 pixel exato com o mouse pode ser difícil. Por isso, a versão interativa web deste demonstrativo inclui uma pequena zona de tolerância (*buffer*) em torno dos pontos para tornar o toque mais natural.
