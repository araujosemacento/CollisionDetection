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

#### Jeff Thompson

Passar do capítulo [Ponto/Retângulo](point-rect) para a colisão entre dois retângulos é um passo simples, embora as instruções `if` comecem a ficar um pouco mais longas. Vamos considerar dois retângulos, `r1` e `r2`. Para verificar a colisão, precisamos testar:

- A borda **direita** de `r1` passou da borda **esquerda** de `r2`?
- A borda **esquerda** de `r1` está antes da borda **direita** de `r2`?
- A borda **superior** de `r1` está acima da borda **inferior** de `r2`?
- A borda **inferior** de `r1` passou da borda **superior** de `r2`?

Pode parecer pouco intuitivo à primeira vista 😖. Uma imagem certamente ajudará a visualizar:

![Teste de sobreposição entre dois retângulos](images/rect-rect.jpg)

Primeiro, testamos a borda direita de `r1` em relação à borda esquerda de `r2`:

```javascript
let r1RightEdge = r1x + r1w;
if (r1RightEdge >= r2x) {
    // a borda direita de r1 passou da borda esquerda de r2
}
```

Expandindo essa mesma ideia para as quatro bordas simultâneas, temos a função completa:

<CodeTabs>

```javascript
function rectRect(r1x, r1y, r1w, r1h, r2x, r2y, r2w, r2h) {
  // as bordas de um retângulo estão tocando o outro?
  if (r1x + r1w >= r2x &&    // borda direita de r1 passou da esquerda de r2
      r1x <= r2x + r2w &&    // borda esquerda de r1 antes da direita de r2
      r1y + r1h >= r2y &&    // borda inferior de r1 passou da superior de r2
      r1y <= r2y + r2h) {    // borda superior de r1 antes da inferior de r2
        return true;
  }
  return false;
}
```

```java
boolean rectRect(float r1x, float r1y, float r1w, float r1h, float r2x, float r2y, float r2w, float r2h) {
  // as bordas de um retângulo estão tocando o outro?
  if (r1x + r1w >= r2x &&    // borda direita de r1 passou da esquerda de r2
      r1x <= r2x + r2w &&    // borda esquerda de r1 antes da direita de r2
      r1y + r1h >= r2y &&    // borda inferior de r1 passou da superior de r2
      r1y <= r2y + r2h) {    // borda superior de r1 antes da inferior de r2
        return true;
  }
  return false;
}
```

```python
def rect_rect(r1x, r1y, r1w, r1h, r2x, r2y, r2w, r2h):
    # as bordas de um retângulo estão tocando o outro?
    if (r1x + r1w >= r2x and    # borda direita de r1 passou da esquerda de r2
        r1x <= r2x + r2w and    # borda esquerda de r1 antes da direita de r2
        r1y + r1h >= r2y and    # borda inferior de r1 passou da superior de r2
        r1y <= r2y + r2h):      # borda superior de r1 antes da inferior de r2
        return True
    return False

# Dica Pygame (usando o método nativo colliderect):
# rect1 = pygame.Rect(r1x, r1y, r1w, r1h)
# rect2 = pygame.Rect(r2x, r2y, r2w, r2h)
# hit = rect1.colliderect(rect2)
```

</CodeTabs>

> **Nota sobre Modos de Desenho:** Este algoritmo assume o padrão de desenho a partir do canto superior esquerdo (`rectMode(CORNER)`). Caso queira desenhar retângulos a partir do centro (`rectMode(CENTER)`), a matemática do algoritmo precisará ser ajustada adaptando as bordas.

---

## AABB (AXIS-ALIGNED BOUNDING BOX)

Este algoritmo pressupõe que os retângulos **não estão rotacionados** no espaço (conhecido na computação gráfica como **AABB** - *Axis-Aligned Bounding Box*). Essa é a base do sistema de colisão de quase todos os jogos 2D clássicos como *Super Mario*, jogos de plataforma e *Top-Down Shooters*!

![Exemplo de Bounding Box retangular em objeto complexo](images/bounding-box.jpg)

Assim como no caso dos [Círculos Delimitadores](circle-circle), a colisão Retângulo/Retângulo é muito usada para desenhar "caixas delimitadoras" (*bounding boxes*) em torno de sprites complexos. No entanto, o que você ganha em desempenho computacional pode perder em precisão visual. 

Se você já jogou um game e gritou frustrado *"Eu com certeza acertei aquele tiro!"*, você provavelmente vivenciou caixas delimitadoras que não se ajustavam perfeitamente à silhueta do personagem. Encontrar o equilíbrio ideal entre precisão matemática rigorosa e o que parece justo e divertido para o jogador é a chave de um bom design de jogos!

