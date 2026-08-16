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

Testar a colisão entre um ponto e um retângulo é uma das verificações mais comuns no desenvolvimento de jogos (usada para selecionar botões, detectar cliques no menu ou colisão de tiros).

Para verificar se um ponto `(px, py)` está dentro de um retângulo definido pela posição superior esquerda `(rx, ry)` e dimensões `(rw, rh)`, testamos quatro condições simultâneas:

1. O X do ponto é maior ou igual à borda esquerda (`px >= rx`)
2. O X do ponto é menor ou igual à borda direita (`px <= rx + rw`)
3. O Y do ponto é maior ou igual à borda superior (`py >= ry`)
4. O Y do ponto é menor ou igual à borda inferior (`py <= ry + rh`)

![Borda esquerda e limites do retângulo](images/rect-bounding-box.jpg)

<CodeTabs>

```javascript
function pointRect(px, py, rx, ry, rw, rh) {
  if (px >= rx && 
      px <= rx + rw && 
      py >= ry && 
      py <= ry + rh) {
    return true;
  }
  return false;
}
```

```java
boolean pointRect(float px, float py, float rx, float ry, float rw, float rh) {
  if (px >= rx && 
      px <= rx+rw && 
      py >= ry && 
      py <= ry+rh) {
    return true;
  }
  return false;
}
```

```python
def point_rect(px, py, rx, ry, rw, rh):
    if (px >= rx and 
        px <= rx + rw and 
        py >= ry and 
        py <= ry + rh):
        return True
    return False

# Dica Pygame (usando o objeto Rect nativo):
# rect = pygame.Rect(rx, ry, rw, rh)
# hit = rect.collidepoint(px, py)
```

</CodeTabs>
