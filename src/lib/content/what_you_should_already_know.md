---
title: "O Que Você Já Deve Saber"
slug: "what_you_should_already_know"
order: 4
sketch: null
---

<script>
	import CodeTabs from '$lib/components/CodeTabs.svelte';
</script>

# O QUE VOCÊ JÁ DEVE SABER

Este livro é escrito utilizando o ecossistema gráfico **p5.js (JavaScript)**, mantendo também o código original em **Processing (Java)** e exemplos equivalentes em **Pygame (Python)**. Se você já programa em qualquer uma dessas ferramentas (ou em linguagens parecidas como C++, C# ou ActionScript), estará pronto para acompanhar as explicações!

Se você for completamente iniciante em programação, recomendamos experimentar primeiro alguns tutoriais básicos de p5.js, Processing ou Pygame antes de se aprofundar nos algoritmos geométricos.

---

## VARIÁVEIS

Precisaremos de variáveis para armazenar a posição dos objetos (geralmente `x` e `y`), seus tamanhos (como `largura`, `altura` ou `raio`), a posição do ponteiro do mouse (`mouseX` e `mouseY`) e estados de colisão (`true` ou `false`).

---

## FUNÇÕES

O coração de todos os exemplos de colisão são as **funções**. Uma função é um bloco de código reutilizável e independente projetado para executar uma tarefa específica — como verificar a colisão entre dois objetos.

Uma função *retorna* um valor (como um booleano `true` ou `false`). Compare a sintaxe abaixo:

<CodeTabs>

```javascript
function sayHi() {
  return "Olá!";
}
```

```java
String sayHi() {
  return "Olá!";
}
```

```python
def say_hi():
    return "Olá!"
```

</CodeTabs>

As funções recebem **argumentos** (parâmetros de entrada), como coordenadas X/Y e tamanhos. Aqui está uma função simples que soma dois números:

<CodeTabs>

```javascript
function addNumbers(a, b) {
  return a + b;
}
```

```java
float addNumbers(float a, float b) {
  return a + b;
}
```

```python
def add_numbers(a, b):
    return a + b
```

</CodeTabs>

---

## ESTRUTURAS CONDICIONAIS (IF / ELSE)

Usamos instruções `if` para tomar decisões com base no resultado das funções de colisão:

<CodeTabs>

```javascript
let hit = pointPoint(x1, y1, x2, y2);

if (hit) {
  console.log("Colisão detectada!");
} else {
  console.log("Sem colisão.");
}
```

```java
boolean hit = pointPoint(x1, y1, x2, y2);

if (hit) {
  println("Colisão detectada!");
} else {
  println("Sem colisão.");
}
```

```python
hit = point_point(x1, y1, x2, y2)

if hit:
    print("Colisão detectada!")
else:
    print("Sem colisão.")
```

</CodeTabs>

Com esses conceitos básicos alinhados, você está pronto para os algoritmos de colisão!
