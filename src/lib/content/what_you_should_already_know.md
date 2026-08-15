---
title: "O Que Você Já Deve Saber"
slug: "what_you_should_already_know"
order: 4
sketch: null
---

# O QUE VOCÊ JÁ DEVE SABER

Os exemplos deste livro utilizam **p5.js** (JavaScript) e **Processing** (Java). Embora seja necessária pouca experiência prévia em programação, é recomendável entender a estrutura básica de um sketch (como a função `setup()` e `draw()`), o uso de variáveis, desenho de formas geométricas, captura da posição do mouse e o funcionamento de condicionais `if/else`.

No final do livro, abordaremos colisões em código orientado a objetos. Compreender Programação Orientada a Objetos (POO) ajudará a organizar projetos maiores com múltiplos objetos colidindo.

<div class="callout">
<strong>Nunca usou p5.js ou Processing antes? Sem problemas!</strong>
Se você já utilizou qualquer outra linguagem de programação, será extremamente fácil compreender os exemplos e portar a lógica de colisão para a linguagem ou motor de sua preferência (Python, C#, C++, GDScript, etc.).
</div>

## FUNÇÕES

O coração de todos os exemplos de colisão são as **funções**. Uma função é um bloco de código reutilizável e independente projetado para executar uma tarefa específica — como verificar a colisão entre dois objetos.

Uma função *retorna* um valor (como um `boolean` `true` ou `false`). Por exemplo, em JavaScript / p5.js:

```javascript
function sayHi() {
    return "Olá!";
}
```

E em Processing (Java):

```java
String sayHi() {
    return "Olá!";
}
```

As funções recebem **argumentos** (parâmetros de entrada), como coordenadas X/Y e tamanhos. Aqui está uma função simples que soma dois números:

```javascript
function sum(a, b) {
    return a + b;
}

let result = sum(2, 2);
console.log(result); // 4
```

Todos os exemplos de colisão neste livro são funções pura. Elas recebem como parâmetros as propriedades dos objetos a serem testados e retornam um valor `boolean` indicando se há ou não colisão (`true` ou `false`).

## NÚMEROS DE PONTO FLUTUANTE (FLOATS)

Você notará que utilizamos variáveis numéricas com decimais (`float` ou `number`). Isso nos garante:

1. **Maior Precisão**: O cálculo de distâncias e pontos de interseção frequentemente resulta em frações decimais.
2. **Movimento Suave**: Posições com ponto flutuante permitem movimentação contínua de objetos na tela.
3. **Compatibilidade com Vetores**: Facilita a transição para vetores 2D (`p5.Vector` ou `PVector`), utilizados nos capítulos mais avançados.
