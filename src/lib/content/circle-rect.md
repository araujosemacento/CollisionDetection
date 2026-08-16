---
title: "Círculo / Retângulo"
slug: "circle-rect"
order: 11
sketch: "CircleRect"
caption: "Mova o círculo com o mouse para colidir com o retângulo!"
---

<script>
	import CodeTabs from '$lib/components/CodeTabs.svelte';
</script>

# CÍRCULO / RETÂNGULO

Testar a colisão entre um círculo e um retângulo parece complexo, mas é resolvido em duas etapas simples:

1. Encontramos o **ponto mais próximo** do centro do círculo que pertence ao retângulo.
2. Calculamos a distância desse ponto mais próximo até o centro do círculo. Se a distância for menor ou igual ao raio, houve colisão!

<CodeTabs>

```javascript
function circleRect(cx, cy, radius, rx, ry, rw, rh) {
  let testX = cx;
  let testY = cy;

  if (cx < rx)         testX = rx;        // borda esquerda
  else if (cx > rx+rw) testX = rx+rw;     // borda direita
  if (cy < ry)         testY = ry;        // borda superior
  else if (cy > ry+rh) testY = ry+rh;     // borda inferior

  let distX = cx - testX;
  let distY = cy - testY;
  let distance = Math.sqrt((distX * distX) + (distY * distY));

  if (distance <= radius) {
    return true;
  }
  return false;
}
```

```java
boolean circleRect(float cx, float cy, float radius, float rx, float ry, float rw, float rh) {
  float testX = cx;
  float testY = cy;

  if (cx < rx)         testX = rx;        // borda esquerda
  else if (cx > rx+rw) testX = rx+rw;     // borda direita
  if (cy < ry)         testY = ry;        // borda superior
  else if (cy > ry+rh) testY = ry+rh;     // borda inferior

  float distX = cx-testX;
  float distY = cy-testY;
  float distance = sqrt( (distX*distX) + (distY*distY) );

  if (distance <= radius) {
    return true;
  }
  return false;
}
```

```python
import math

def circle_rect(cx, cy, radius, rx, ry, rw, rh):
    test_x = cx
    test_y = cy

    if cx < rx:
        test_x = rx
    elif cx > rx + rw:
        test_x = rx + rw
        
    if cy < ry:
        test_y = ry
    elif cy > ry + rh:
        test_y = ry + rh

    dist_x = cx - test_x
    dist_y = cy - test_y
    distance = math.sqrt((dist_x ** 2) + (dist_y ** 2))

    if distance <= radius:
        return True
    return False
```

</CodeTabs>
