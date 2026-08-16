---
title: "Polígono / Círculo"
slug: "poly-circle"
order: 19
sketch: "PolyCircle"
caption: "Mova o círculo com o mouse para atingir o polígono!"
---

<script>
	import CodeTabs from '$lib/components/CodeTabs.svelte';
</script>

# POLÍGONO / CÍRCULO

Testamos a colisão de um círculo contra um polígono verificando a colisão da circunferência contra cada uma das arestas usando a função [Linha/Círculo](/line-circle):

<CodeTabs>

```javascript
function polyCircle(vertices, cx, cy, r) {
  let next = 0;
  for (let current = 0; current < vertices.length; current++) {
    next = current + 1;
    if (next === vertices.length) next = 0;

    let vc = vertices[current];
    let vn = vertices[next];

    let collision = lineCircle(vc.x, vc.y, vn.x, vn.y, cx, cy, r);
    if (collision) return true;
  }
  return false;
}
```

```java
boolean polyCircle(PVector[] vertices, float cx, float cy, float r) {
  int next = 0;
  for (int current=0; current<vertices.length; current++) {
    next = current+1;
    if (next == vertices.length) next = 0;

    PVector vc = vertices[current];
    PVector vn = vertices[next];

    boolean collision = lineCircle(vc.x,vc.y, vn.x,vn.y, cx,cy,r);
    if (collision) return true;
  }
  return false;
}
```

```python
def poly_circle(vertices, cx, cy, r):
    next_idx = 0
    for current in range(len(vertices)):
        next_idx = current + 1
        if next_idx == len(vertices):
            next_idx = 0

        vc = vertices[current]
        vn = vertices[next_idx]

        if line_circle(vc[0], vc[1], vn[0], vn[1], cx, cy, r):
            return True

    return False
```

</CodeTabs>
