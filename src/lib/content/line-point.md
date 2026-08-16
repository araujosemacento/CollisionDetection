---
title: "Linha / Ponto"
slug: "line-point"
order: 13
sketch: "LinePoint"
caption: "Use o mouse para posicionar o ponto sobre o segmento de reta!"
---

<script>
	import CodeTabs from '$lib/components/CodeTabs.svelte';
</script>

# LINHA / PONTO

#### Jeff Thompson

Até agora, nossas colisões foram compostas por lógica básica e adições simples. A colisão com linhas é um pouco mais delicada, a menos que as aulas de geometria do ensino médio ainda estejam bem frescas na sua memória.

<div class="callout">
<strong>Nota conceitual:</strong> Tecnicamente, o que chamamos aqui de linha é um <a href="http://en.wikipedia.org/wiki/Line_segment"><em>segmento de reta</em></a> (definido por dois pontos extremidades). Mas por simplicidade didática, nos referiremos a ele ao longo do livro usando o termo genérico <em>linha</em>.
</div>

Uma linha é definida por dois conjuntos de coordenadas X/Y `(x1, y1)` e `(x2, y2)`. Podemos encontrar o comprimento total da linha usando o Teorema de Pitágoras ou a função utilitária `dist()`:

```javascript
let lineLen = Math.hypot(x2 - x1, y2 - y1);
```

Também precisamos calcular a distância entre o ponto de teste `(px, py)` e cada uma das duas extremidades da linha:

```javascript
let d1 = Math.hypot(px - x1, py - y1);
let d2 = Math.hypot(px - x2, py - y2);
```

Se o ponto estiver situado exatamente sobre a linha, a soma das duas distâncias (`d1 + d2`) será igual ao comprimento total da linha (`lineLen`)! O diagrama a seguir ilustra a formação de triângulos quando o ponto está fora versus quando está sobre a linha:

![Triângulos formados entre um ponto e uma linha](images/line-point.jpg)

Se colapsarmos as distâncias quando o ponto está fora, a soma `d1 + d2` sempre resultará em um valor maior que o comprimento da linha.

Entretanto, como os números de ponto flutuante em computação têm alta precisão decimal, exigir uma igualdade exata (`d1 + d2 === lineLen`) tornaria a colisão rígida e quase impossível de ser acionada manualmente. Para solucionar isso e proporcionar uma colisão natural, adicionamos uma pequena margem de tolerância (*buffer*):

```javascript
let buffer = 0.1; // quanto maior o valor, mais tolerante (e menos precisa) será a colisão
```

Verificamos se `d1 + d2` está dentro dessa margem de tolerância ao redor de `lineLen`:

```javascript
if (d1 + d2 >= lineLen - buffer && d1 + d2 <= lineLen + buffer) {
    return true;
}
return false;
```

Abaixo está o código da função pronta para uso:

<CodeTabs>

```javascript
function linePoint(x1, y1, x2, y2, px, py) {
  // calcula a distância do ponto até as duas extremidades da linha
  let d1 = Math.hypot(px - x1, py - y1);
  let d2 = Math.hypot(px - x2, py - y2);

  // calcula o comprimento total da linha
  let lineLen = Math.hypot(x2 - x1, y2 - y1);

  // margem de tolerância para precisão de ponto flutuante
  let buffer = 0.1;

  // se a soma das duas distâncias for igual ao comprimento da linha (com o buffer),
  // o ponto está sobre a linha!
  if (d1 + d2 >= lineLen - buffer && d1 + d2 <= lineLen + buffer) {
    return true;
  }
  return false;
}
```

```java
boolean linePoint(float x1, float y1, float x2, float y2, float px, float py) {
  // calcula a distância do ponto até as duas extremidades da linha
  float d1 = dist(px,py, x1,y1);
  float d2 = dist(px,py, x2,y2);

  // calcula o comprimento total da linha
  float lineLen = dist(x1,y1, x2,y2);

  // margem de tolerância para precisão de ponto flutuante
  float buffer = 0.1;

  // se a soma das duas distâncias for igual ao comprimento da linha (com o buffer),
  // o ponto está sobre a linha!
  if (d1+d2 >= lineLen-buffer && d1+d2 <= lineLen+buffer) {
    return true;
  }
  return false;
}
```

```python
import math

def line_point(x1, y1, x2, y2, px, py):
    # calcula a distância do ponto até as duas extremidades da linha
    d1 = math.hypot(px - x1, py - y1)
    d2 = math.hypot(px - x2, py - y2)

    # calcula o comprimento total da linha
    line_len = math.hypot(x2 - x1, y2 - y1)

    # margem de tolerância para precisão de ponto flutuante
    buffer = 0.1

    # se a soma das duas distâncias for igual ao comprimento da linha (com o buffer),
    # o ponto está sobre a linha!
    if line_len - buffer <= d1 + d2 <= line_len + buffer:
        return True
    return False
```

</CodeTabs>

> **Atribuição:** Algoritmo baseado em contribuições de **MrRoy** no StackOverflow.

