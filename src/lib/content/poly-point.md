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

Para testar se um ponto está dentro de um polígono com qualquer número de vértices, utilizamos o algoritmo de **Ray-Casting** (baseado no *Teorema da Curva de Jordan*).

Traçamos um raio horizontal imaginário partindo do ponto e indo até o infinito à direita. Contamos quantas vezes esse raio cruza as arestas do polígono:

- Se cruzar um número **ímpar** de vezes &rarr; o ponto está **DENTRO**.
- Se cruzar um número **par** de vezes &rarr; o ponto está **FORA**.

![Diagrama do ponto em relação às coordenadas Y do polígono](images/poly-point.jpg)

<CodeTabs>

```javascript
function polyPoint(vertices, px, py) {
  let collision = false;
  let next = 0;

  for (let current = 0; current < vertices.length; current++) {
    next = current + 1;
    if (next === vertices.length) next = 0;

    let vc = vertices[current];
    let vn = vertices[next];

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
  int next = 0;

  for (int current=0; current<vertices.length; current++) {
    next = current+1;
    if (next == vertices.length) next = 0;

    PVector vc = vertices[current];
    PVector vn = vertices[next];

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

    for current in range(len(vertices)):
        next_idx = current + 1
        if next_idx == len(vertices):
            next_idx = 0

        vc = vertices[current]
        vn = vertices[next_idx]

        if (((vc[1] >= py and vn[1] < py) or (vc[1] < py and vn[1] >= py)) and
            (px < (vn[0] - vc[0]) * (py - vc[1]) / (vn[1] - vc[1]) + vc[0])):
            collision = not collision

    return collision
```

</CodeTabs>
