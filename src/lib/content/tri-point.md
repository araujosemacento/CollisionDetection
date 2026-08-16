---
title: "Triângulo / Ponto"
slug: "tri-point"
order: 24
sketch: "TriPoint"
caption: "Mova o ponteiro do mouse para dentro do triângulo!"
---

<script>
	import CodeTabs from '$lib/components/CodeTabs.svelte';
</script>

# TRIÂNGULO / PONTO

Para testar se um ponto `(px, py)` está dentro de um triângulo formado por `(x1, y1), (x2, y2), (x3, y3)`, comparamos a **área total do triângulo original** com a **soma das áreas dos três sub-triângulos** formados pelo ponto e os vértices.

Calculamos a área do triângulo original usando a fórmula do produto vetorial (Fórmula de Heron / Determinante):

```javascript
areaOrig = Math.abs((x2 - x1) * (y3 - y1) - (x3 - x1) * (y2 - y1));
```

Em seguida, calculamos as 3 sub-áreas:

```javascript
area1 = Math.abs((x1 - px) * (y2 - py) - (x2 - px) * (y1 - py));
area2 = Math.abs((x2 - px) * (y3 - py) - (x3 - px) * (y2 - py));
area3 = Math.abs((x3 - px) * (y1 - py) - (x1 - px) * (y3 - py));
```

Se `area1 + area2 + area3 === areaOrig`, o ponto está **DENTRO** do triângulo!

![Pontos fora e dentro de um triângulo formando três subtriângulos](images/tri-point.jpg)

<CodeTabs>

```javascript
function triPoint(x1, y1, x2, y2, x3, y3, px, py) {
  let areaOrig = Math.abs((x2 - x1) * (y3 - y1) - (x3 - x1) * (y2 - y1));

  let area1 = Math.abs((x1 - px) * (y2 - py) - (x2 - px) * (y1 - py));
  let area2 = Math.abs((x2 - px) * (y3 - py) - (x3 - px) * (y2 - py));
  let area3 = Math.abs((x3 - px) * (y1 - py) - (x1 - px) * (y3 - py));

  if (Math.abs((area1 + area2 + area3) - areaOrig) < 0.01) {
    return true;
  }
  return false;
}
```

```java
boolean triPoint(float x1, float y1, float x2, float y2, float x3, float y3, float px, float py) {
  float areaOrig = abs( (x2-x1)*(y3-y1) - (x3-x1)*(y2-y1) );

  float area1 =    abs( (x1-px)*(y2-py) - (x2-px)*(y1-py) );
  float area2 =    abs( (x2-px)*(y3-py) - (x3-px)*(y2-py) );
  float area3 =    abs( (x3-px)*(y1-py) - (x1-px)*(y3-py) );

  if (area1 + area2 + area3 == areaOrig) {
    return true;
  }
  return false;
}
```

```python
def tri_point(x1, y1, x2, y2, x3, y3, px, py):
    area_orig = abs((x2 - x1) * (y3 - y1) - (x3 - x1) * (y2 - y1))

    area1 = abs((x1 - px) * (y2 - py) - (x2 - px) * (y1 - py))
    area2 = abs((x2 - px) * (y3 - py) - (x3 - px) * (y2 - py))
    area3 = abs((x3 - px) * (y1 - py) - (x1 - px) * (y3 - py))

    if abs((area1 + area2 + area3) - area_orig) < 0.01:
        return True
    return False
```

</CodeTabs>
