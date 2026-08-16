---
title: "Polígono / Polígono"
slug: "poly-poly"
order: 22
sketch: "PolyPoly"
caption: "Mova o polígono irregular com o mouse para colidir com o pentágono central!"
---

<script>
	import CodeTabs from '$lib/components/CodeTabs.svelte';
</script>

# POLÍGONO / POLÍGONO

#### Jeff Thompson

Nosso exemplo final nesta seção verifica a colisão entre dois polígonos quaisquer. Como precisamos apenas testar se qualquer uma das arestas do primeiro polígono está colidindo com qualquer uma das arestas do segundo, a solução é muito direta e demonstra a força de reutilizar funções construídas anteriormente!

> **Dica Visual:** Recarregue a página da demonstração para gerar um novo polígono irregular aleatório sob o controle do mouse!

---

## ESTRUTURA E PASSO A PASSO

### 1. Construindo os Dois Polígonos
Em nossa demonstração interativa, criamos dois polígonos distintos:
1. Um **pentágono regular** de 5 lados centralizado na tela.
2. Um **polígono irregular aleatório** cujos vértices são gerados usando ângulos e raios aleatórios:

```javascript
let randomPoly = [];
let a = 0;
while (a < 360) {
  let rad = (a * Math.PI) / 180;
  let r = Math.random() * (50 - 30) + 30; // raio aleatório entre 30 e 50
  randomPoly.push({
    x: Math.cos(rad) * r,
    y: Math.sin(rad) * r
  });
  a += Math.random() * (40 - 15) + 15; // incremento angular aleatório
}
```

### 2. O Algoritmo de Colisão `polyPoly`
Percorremos os vértices do Polígono 1 em loop para formar cada uma de suas arestas `(vc, vn)`. Em seguida, passamos essa aresta como uma linha para a função [Polígono/Linha](poly-line) contra todos os lados do Polígono 2:

```javascript
let collision = polyLine(p2, vc.x, vc.y, vn.x, vn.y);
if (collision) return true;
```

### 3. O "Edge Case": Polígono Inteiramente DENTRO do Outro
Assim como nos capítulos anteriores, pode acontecer de o Polígono 2 estar **totalmente dentro** do Polígono 1 sem que nenhuma de suas arestas se cruze nas bordas.

Para detectar isso, fazemos uma verificação rápida testando se o primeiro vértice do Polígono 2 (`p2[0]`) está contido dentro do Polígono 1 usando a função [Polígono/Ponto](poly-point):

```javascript
collision = polyPoint(p1, p2[0].x, p2[0].y);
if (collision) return true;
```

---

## CÓDIGO COMPLETO MULTILINGUAGEM

<CodeTabs>

```javascript
function polyPoly(p1, p2) {
  // percorre os vértices do Polígono 1 para formar cada aresta
  let next = 0;
  for (let current = 0; current < p1.length; current++) {
    next = current + 1;
    if (next === p1.length) next = 0;

    let vc = p1[current];
    let vn = p1[next];

    // 1. Compara cada aresta do Polígono 1 contra todas as arestas do Polígono 2
    let collision = polyLine(p2, vc.x, vc.y, vn.x, vn.y);
    if (collision) return true;

    // 2. OPCIONAL: testa se o Polígono 2 está inteiramente DENTRO do Polígono 1
    collision = polyPoint(p1, p2[0].x, p2[0].y);
    if (collision) return true;
  }

  return false;
}
```

```java
boolean polyPoly(PVector[] p1, PVector[] p2) {
  // percorre os vértices do Polígono 1 para formar cada aresta
  int next = 0;
  for (int current=0; current<p1.length; current++) {
    next = current+1;
    if (next == p1.length) next = 0;

    PVector vc = p1[current];
    PVector vn = p1[next];

    // 1. Compara cada aresta do Polígono 1 contra todas as arestas do Polígono 2
    boolean collision = polyLine(p2, vc.x,vc.y,vn.x,vn.y);
    if (collision) return true;

    // 2. OPCIONAL: testa se o Polígono 2 está inteiramente DENTRO do Polígono 1
    collision = polyPoint(p1, p2[0].x, p2[0].y);
    if (collision) return true;
  }

  return false;
}
```

```python
def poly_poly(p1, p2):
    # percorre os vértices do Polígono 1 para formar cada aresta
    next_idx = 0
    for current in range(len(p1)):
        next_idx = current + 1
        if next_idx == len(p1):
            next_idx = 0

        vc = p1[current]
        vn = p1[next_idx]

        # 1. Compara cada aresta do Polígono 1 contra todas as arestas do Polígono 2
        if poly_line(p2, vc[0], vc[1], vn[0], vn[1]):
            return True

        # 2. OPCIONAL: testa se o Polígono 2 está inteiramente DENTRO do Polígono 1
        if poly_point(p1, p2[0][0], p2[0][1]):
            return True

    return False
```

</CodeTabs>

