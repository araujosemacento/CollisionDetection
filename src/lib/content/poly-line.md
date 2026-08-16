---
title: "Polígono / Linha"
slug: "poly-line"
order: 21
sketch: "PolyLine"
caption: "Mova a linha com o mouse para atingir o polígono regular de 16 lados!"
---

<script>
	import CodeTabs from '$lib/components/CodeTabs.svelte';
</script>

# POLÍGONO / LINHA

Verificamos se uma linha `(x1, y1) -> (x2, y2)` cruza qualquer uma das arestas do polígono utilizando a função [Linha/Linha](line-line):

<CodeTabs>

```javascript
function polyLine(vertices, x1, y1, x2, y2) {
  let next = 0;
  for (let current = 0; current < vertices.length; current++) {
    next = current + 1;
    if (next === vertices.length) next = 0;

    let x3 = vertices[current].x;
    let y3 = vertices[current].y;
    let x4 = vertices[next].x;
    let y4 = vertices[next].y;

    let hit = lineLine(x1, y1, x2, y2, x3, y3, x4, y4);
    if (hit) return true;
  }
  return false;
}
```

```java
boolean polyLine(PVector[] vertices, float x1, float y1, float x2, float y2) {
  int next = 0;
  for (int current=0; current<vertices.length; current++) {
    next = current+1;
    if (next == vertices.length) next = 0;

    float x3 = vertices[current].x;
    float y3 = vertices[current].y;
    float x4 = vertices[next].x;
    float y4 = vertices[next].y;

    boolean hit = lineLine(x1, y1, x2, y2, x3, y3, x4, y4);
    if (hit) return true;
  }
  return false;
}
```

```python
def poly_line(vertices, x1, y1, x2, y2):
    next_idx = 0
    for current in range(len(vertices)):
        next_idx = current + 1
        if next_idx == len(vertices):
            next_idx = 0

        x3, y3 = vertices[current]
        x4, y4 = vertices[next_idx]

        if line_line(x1, y1, x2, y2, x3, y3, x4, y4):
            return True

    return False
```

</CodeTabs>
