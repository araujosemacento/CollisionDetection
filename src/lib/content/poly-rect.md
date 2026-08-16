---
title: "Polígono / Retângulo"
slug: "poly-rect"
order: 20
sketch: "PolyRect"
caption: "Mova o retângulo com o mouse para atingir o polígono!"
---

<script>
	import CodeTabs from '$lib/components/CodeTabs.svelte';
</script>

# POLÍGONO / RETÂNGULO

Para testar se um retângulo colide com um polígono:

1. Testamos todas as arestas do polígono contra os 4 lados do retângulo usando a função [Linha/Retângulo](/line-rect).
2. Opcionalmente, testamos se o retângulo está totalmente contido dentro do polígono usando [Polígono/Ponto](/poly-point).

<CodeTabs>

```javascript
function polyRect(vertices, rx, ry, rw, rh) {
  let next = 0;
  for (let current = 0; current < vertices.length; current++) {
    next = current + 1;
    if (next === vertices.length) next = 0;

    let vc = vertices[current];
    let vn = vertices[next];

    let collision = lineRect(vc.x, vc.y, vn.x, vn.y, rx, ry, rw, rh);
    if (collision) return true;

    let inside = polyPoint(vertices, rx, ry);
    if (inside) return true;
  }
  return false;
}
```

```java
boolean polyRect(float rx, float ry, float rw, float rh, PVector[] vertices) {
  int next = 0;
  for (int current=0; current<vertices.length; current++) {
    next = current+1;
    if (next == vertices.length) next = 0;

    PVector vc = vertices[current];
    PVector vn = vertices[next];

    boolean collision = lineRect(vc.x,vc.y,vn.x,vn.y, rx,ry,rw,rh);
    if (collision) return true;

    boolean inside = polygonPoint(rx,ry, vertices);
    if (inside) return true;
  }
  return false;
}
```

```python
def poly_rect(vertices, rx, ry, rw, rh):
    next_idx = 0
    for current in range(len(vertices)):
        next_idx = current + 1
        if next_idx == len(vertices):
            next_idx = 0

        vc = vertices[current]
        vn = vertices[next_idx]

        if line_rect(vc[0], vc[1], vn[0], vn[1], rx, ry, rw, rh):
            return True

        if poly_point(vertices, rx, ry):
            return True

    return False
```

</CodeTabs>
