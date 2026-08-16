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

Testar se dois polígonos quaisquer estão colidindo é o ápice dos testes com polígonos:

1. Testamos todas as arestas do Polígono 1 contra o Polígono 2 usando [Polígono/Linha](/poly-line).
2. Testamos se o Polígono 2 está inteiramente contido dentro do Polígono 1 usando [Polígono/Ponto](/poly-point).

<CodeTabs>

```javascript
function polyPoly(p1, p2) {
  let next = 0;
  for (let current = 0; current < p1.length; current++) {
    next = current + 1;
    if (next === p1.length) next = 0;

    let vc = p1[current];
    let vn = p1[next];

    let collision = polyLine(p2, vc.x, vc.y, vn.x, vn.y);
    if (collision) return true;

    collision = polyPoint(p1, p2[0].x, p2[0].y);
    if (collision) return true;
  }
  return false;
}
```

```java
boolean polyPoly(PVector[] p1, PVector[] p2) {
  int next = 0;
  for (int current=0; current<p1.length; current++) {
    next = current+1;
    if (next == p1.length) next = 0;

    PVector vc = p1[current];
    PVector vn = p1[next];

    boolean collision = polyLine(p2, vc.x,vc.y,vn.x,vn.y);
    if (collision) return true;

    collision = polyPoint(p1, p2[0].x, p2[0].y);
    if (collision) return true;
  }
  return false;
}
```

```python
def poly_poly(p1, p2):
    next_idx = 0
    for current in range(len(p1)):
        next_idx = current + 1
        if next_idx == len(p1):
            next_idx = 0

        vc = p1[current]
        vn = p1[next_idx]

        if poly_line(p2, vc[0], vc[1], vn[0], vn[1]):
            return True

        if poly_point(p1, p2[0][0], p2[0][1]):
            return True

    return False
```

</CodeTabs>
