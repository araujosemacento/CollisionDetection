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

#### Jeff Thompson

Este exemplo combina o código de círculos e retângulos vistos anteriormente. Temos um círculo na posição `(cx, cy)` com raio `r` e um retângulo na posição `(rx, ry)` com largura `rw` e altura `rh`.

Nosso algoritmo primeiro testa qual borda do retângulo está mais próxima do centro do círculo e, em seguida, verifica a colisão aplicando o Teorema de Pitágoras.

Para começar, criamos variáveis temporárias (`testX` e `testY`) para guardar as coordenadas das bordas mais próximas do retângulo. Inicialmente, atribuímos a elas a própria posição do centro do círculo:

```javascript
let testX = cx;
let testY = cy;
```

Em seguida, realizamos os quatro testes condicionais:

- Se o centro do círculo estiver à **ESQUERDA** do retângulo, testamos contra a borda **esquerda** (`rx`).
- Se o centro do círculo estiver à **DIREITA** do retângulo, testamos contra a borda **direita** (`rx + rw`).
- Se o centro do círculo estiver **ACIMA** do retângulo, testamos contra a borda **superior** (`ry`).
- Se o centro do círculo estiver **ABAIXO** do retângulo, testamos contra a borda **inferior** (`ry + rh`).

Em código, esses testes são estruturados assim:

```javascript
if (cx < rx)         testX = rx;        // borda esquerda
else if (cx > rx+rw) testX = rx+rw;     // borda direita

if (cy < ry)         testY = ry;        // borda superior
else if (cy > ry+rh) testY = ry+rh;     // borda inferior
```

Agora que descobrimos quais coordenadas de borda estão mais próximas, usamos o Teorema de Pitágoras entre o centro do círculo `(cx, cy)` e o ponto encontrado `(testX, testY)`:

```javascript
let distX = cx - testX;
let distY = cy - testY;
let distance = Math.sqrt((distX * distX) + (distY * distY));
```

Por fim, comparamos essa distância com o raio do círculo: se `distance <= radius`, ocorreu uma colisão!

<CodeTabs>

```javascript
function circleRect(cx, cy, radius, rx, ry, rw, rh) {
  // variáveis temporárias para armazenar as bordas de teste
  let testX = cx;
  let testY = cy;

  // qual borda do retângulo está mais próxima do centro do círculo?
  if (cx < rx)         testX = rx;        // borda esquerda
  else if (cx > rx+rw) testX = rx+rw;     // borda direita
  if (cy < ry)         testY = ry;        // borda superior
  else if (cy > ry+rh) testY = ry+rh;     // borda inferior

  // calcula a distância até a borda mais próxima (Teorema de Pitágoras)
  let distX = cx - testX;
  let distY = cy - testY;
  let distance = Math.sqrt((distX * distX) + (distY * distY));

  // se a distância for menor ou igual ao raio, houve colisão!
  if (distance <= radius) {
    return true;
  }
  return false;
}
```

```java
boolean circleRect(float cx, float cy, float radius, float rx, float ry, float rw, float rh) {
  // variáveis temporárias para armazenar as bordas de teste
  float testX = cx;
  float testY = cy;

  // qual borda do retângulo está mais próxima do centro do círculo?
  if (cx < rx)         testX = rx;        // borda esquerda
  else if (cx > rx+rw) testX = rx+rw;     // borda direita
  if (cy < ry)         testY = ry;        // borda superior
  else if (cy > ry+rh) testY = ry+rh;     // borda inferior

  // calcula a distância até a borda mais próxima (Teorema de Pitágoras)
  float distX = cx-testX;
  float distY = cy-testY;
  float distance = sqrt( (distX*distX) + (distY*distY) );

  // se a distância for menor ou igual ao raio, houve colisão!
  if (distance <= radius) {
    return true;
  }
  return false;
}
```

```python
import math

def circle_rect(cx, cy, radius, rx, ry, rw, rh):
    # variáveis temporárias para armazenar as bordas de teste
    test_x = cx
    test_y = cy

    # qual borda do retângulo está mais próxima do centro do círculo?
    if cx < rx:
        test_x = rx
    elif cx > rx + rw:
        test_x = rx + rw
        
    if cy < ry:
        test_y = ry
    elif cy > ry + rh:
        test_y = ry + rh

    # calcula a distância até a borda mais próxima
    dist_x = cx - test_x
    dist_y = cy - test_y
    distance = math.sqrt((dist_x ** 2) + (dist_y ** 2))

    # se a distância for menor ou igual ao raio, houve colisão!
    if distance <= radius:
        return True
    return False
```

</CodeTabs>

> **Atribuição:** Este algoritmo didático é baseado na solução clássica desenvolvida por **Matt Worden**.

