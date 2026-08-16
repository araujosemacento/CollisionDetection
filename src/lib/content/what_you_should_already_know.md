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

#### Jeff Thompson

Este livro é escrito utilizando o ecossistema gráfico **p5.js (JavaScript)**, mantendo também o código original em **Processing (Java)** e exemplos equivalentes em **Pygame (Python)**. Se você já programa em qualquer uma dessas ferramentas (ou em linguagens parecidas como C++, C# ou ActionScript), estará pronto para acompanhar as explicações!

<div class="callout">
<strong>Não usou Processing ou p5.js antes? Não tem problema!</strong> Se você já utilizou qualquer outra linguagem de programação, será muito fácil entender os exemplos didáticos e portar os algoritmos para a linguagem ou engine de sua preferência.
</div>

---

## VARIÁVEIS

Precisaremos de variáveis para armazenar a posição dos objetos (geralmente `x` e `y`), seus tamanhos (como `largura`, `altura` ou `raio`), a posição do ponteiro do mouse (`mouseX` e `mouseY`) e estados de colisão (`true` ou `false`).

---

## FUNÇÕES

O coração de todos os exemplos de colisão são as **funções**. Se você nunca criou uma função antes, leia esta seção com atenção.

Uma função é um bloco de código reutilizável e independente. Elas são usadas para operações que você deseja executar mais de uma vez — como verificar a colisão entre dois objetos.

Uma função *retorna* (envia de volta) um valor com determinado tipo de dado (como `boolean` ou `float`). Veja a função simples abaixo que retorna uma saudação:

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

Se uma função não precisa retornar nada (por exemplo, se tudo o que ela faz é desenhar um retângulo na tela), seu tipo de retorno é `void`. As seções `setup()` e `draw()` do Processing/p5.js são, na verdade, funções!

As funções também recebem **argumentos** (parâmetros de entrada). Um argumento recebe um tipo e um nome (que existe apenas dentro do escopo da função). Múltiplos argumentos são separados por vírgula. Veja uma função que soma dois números:

<CodeTabs>

```javascript
function addNumbers(a, b) {
  return a + b;
}

let result = addNumbers(2, 2);
console.log(result); // 4
```

```java
float addNumbers(float a, float b) {
  return a + b;
}

float result = addNumbers(2, 2);
println(result); // 4
```

```python
def add_numbers(a, b):
    return a + b

result = add_numbers(2, 2)
print(result) # 4
```

</CodeTabs>

Todos os exemplos deste livro são estruturados como funções. Elas recebem parâmetros dos objetos a serem testados (como posição ou tamanho) e retornam um valor booleano (`true` ou `false`) indicando se a colisão está ocorrendo. Elas também podem ser modificadas para retornar a posição exata da colisão.

---

## FLOATS (PONTO FLUTUANTE)

Você notará que ao longo deste livro usamos quase exclusivamente variáveis de ponto flutuante (`float` / números com casas decimais). Isso ocorre por três motivos principais:

1. **Flexibilidade de Tipos**: Números inteiros (`int`) podem ser passados para funções que esperam números decimais sem causar erros, mas o oposto não é verdadeiro.
2. **Precisão e Suavidade**: Variáveis `float` nos dão a capacidade de medir com maior precisão e mover objetos de forma mais suave e fluida pela tela.
3. **Compatibilidade com Vetores (PVector / Vector2)**: Usar decimais facilita imensamente a transição do uso de posições X/Y separadas para a utilização de vetores geométricos, cujos componentes internos são armazenados em ponto flutuante.

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

