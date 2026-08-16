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

#### Jeff Thompson

A colisão mais simples de testar é entre dois pontos. Para verificar se dois pontos estão se tocando, simplesmente checamos se suas coordenadas X e Y são exatamente iguais!

```text
x1 == x2  E  y1 == y2
```

Encapsulamos esse código em uma função para torná-lo reutilizável. Como argumentos, passamos as coordenadas X/Y de ambos os pontos. A função retorna um valor booleano `true` ou `false`, dependendo da ocorrência ou não da colisão:

<CodeTabs>

```javascript
function pointPoint(x1, y1, x2, y2) {
  // os dois pontos estão exatamente no mesmo local?
  if (x1 === x2 && y1 === y2) {
    return true;
  }
  return false;
}
```

```java
boolean pointPoint(float x1, float y1, float x2, float y2) {
  // os dois pontos estão exatamente no mesmo local?
  if (x1 == x2 && y1 == y2) {
    return true;
  }
  return false;
}
```

```python
def point_point(x1, y1, x2, y2):
    # os dois pontos estão exatamente no mesmo local?
    if x1 == x2 and y1 == y2:
        return True
    return False

# Dica Pygame (usando a classe nativa Vector2):
# p1 = pygame.math.Vector2(x1, y1)
# p2 = pygame.math.Vector2(x2, y2)
# hit = (p1 == p2)
```

</CodeTabs>

Observe o atalho de retorno utilizado no código: poderíamos ter especificado explicitamente um bloco `else { return false; }`, mas a estrutura acima produz exatamente o mesmo resultado! É um padrão comum pensar em `return false;` como o valor padrão a ser enviado de volta, a menos que as condições de colisão dentro do `if` sejam atendidas.

<div class="callout">
<strong>DIFICULDADE DE ACERTO:</strong> Você notará no exemplo interativo que é bastante difícil acionar essa colisão pixel a pixel (consegue adivinhar o porquê?). Este é um problema de precisão rígida que aprenderemos a solucionar criando zonas de tolerância na seção de <a href="section_1_challenges">Desafios da Seção 1</a>.
</div>

Parabéns, você acabou de estudar sua primeira função de detecção de colisão! Essa estrutura básica (explicação teórica, matemática didática, código multilinguagem e demonstração interativa) estará presente em todos os capítulos do livro.

