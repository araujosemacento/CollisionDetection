---
title: "Polígono / Ponto"
slug: "poly-point"
order: 18
sketch: "PolyPoint"
caption: "Mova o mouse (ponto) para dentro do polígono!"
---

<script>
	import CodeTabs from '$lib/components/CodeTabs.svelte';
</script>

# POLÍGONO / PONTO

#### Jeff Thompson

Colisões entre círculos e retângulos são fantásticas e quase sempre faz sentido simplificar a colisão de formas complexas usando caixas e círculos delimitadores. No entanto, existem aplicações em que precisamos de precisão total. Felizmente, a maioria dos exemplos restantes reutiliza ideias que já cobrimos, mesmo que sua aplicação pareça mais sofisticada.

Neste exemplo, testaremos se um ponto está dentro de um polígono complexo de qualquer formato. Definimos nosso polígono através de uma lista de pontos X/Y chamados de **vértices**.

Para verificar a colisão, percorremos os vértices um a um usando um loop `for` com a variável `current`. Também precisamos do próximo vértice da lista (`next`) para formar cada aresta (linha do lado do polígono):

```javascript
let next = 0;
for (let current = 0; current < vertices.length; current++) {
    // pega o próximo vértice da lista; se chegar ao fim, volta para 0
    next = current + 1;
    if (next === vertices.length) next = 0;
}
```

O algoritmo baseia-se no **Teorema da Curva de Jordan** (*Ray-Casting*). Traçamos um raio horizontal imaginário partindo do ponto em direção ao infinito à direita:

![Diagrama do ponto em relação às coordenadas Y do polígono](images/poly-point.jpg)

Testamos se o ponto está entre a coordenada Y dos dois vértices (`vc.y` e `vn.y`) e calculamos a interseção em X:

- A cada cruzamento confirmado do raio com uma aresta, invertemos o estado da variável booleana (`collision = !collision`).
- Se o número final de cruzamentos for **ímpar**, a variável terminará como `true` (ponto **DENTRO**).
- Se for **par**, ela terminará como `false` (ponto **FORA**).

<CodeTabs>

```javascript
function polyPoint(vertices, px, py) {
  let collision = false;

  // percorre cada um dos vértices e o próximo vértice da lista
  let next = 0;
  for (let current = 0; current < vertices.length; current++) {
    next = current + 1;
    if (next === vertices.length) next = 0;

    let vc = vertices[current];    // vértice atual (current)
    let vn = vertices[next];       // próximo vértice (next)

    // compara posições e inverte o estado da variável 'collision'
    if (((vc.y >= py && vn.y < py) || (vc.y < py && vn.y >= py)) &&
        (px < (vn.x - vc.x) * (py - vc.y) / (vn.y - vc.y) + vc.x)) {
      collision = !collision;
    }
  }
  return collision;
}
```

```java
boolean polyPoint(PVector[] vertices, float px, float py) {
  boolean collision = false;

  // percorre cada um dos vértices e o próximo vértice da lista
  int next = 0;
  for (int current=0; current<vertices.length; current++) {
    next = current+1;
    if (next == vertices.length) next = 0;

    PVector vc = vertices[current];    // vértice atual (current)
    PVector vn = vertices[next];       // próximo vértice (next)

    // compara posições e inverte o estado da variável 'collision'
    if (((vc.y >= py && vn.y < py) || (vc.y < py && vn.y >= py)) &&
         (px < (vn.x-vc.x)*(py-vc.y) / (vn.y-vc.y)+vc.x)) {
            collision = !collision;
    }
  }
  return collision;
}
```

```python
def poly_point(vertices, px, py):
    collision = False
    next_idx = 0

    # percorre cada um dos vértices e o próximo vértice da lista
    for current in range(len(vertices)):
        next_idx = current + 1
        if next_idx == len(vertices):
            next_idx = 0

        vc = vertices[current]
        vn = vertices[next_idx]

        # compara posições e inverte o estado da variável 'collision'
        if (((vc[1] >= py and vn[1] < py) or (vc[1] < py and vn[1] >= py)) and
            (px < (vn[0] - vc[0]) * (py - vc[1]) / (vn[1] - vc[1]) + vc[0])):
            collision = not collision

    return collision
```

</CodeTabs>

> **Nota de Desempenho:** Esta função foi projetada para aceitar qualquer número de vértices. No entanto, quanto mais vértices você testar, mais lento será o cálculo. Em um jogo completo com dezenas de objetos complexos, equilibre a necessidade de precisão exata com a velocidade de execução!

> **Atribuição:** Algoritmo adaptado de respostas da comunidade no StackOverflow por **nirg** e **Pranav**.

