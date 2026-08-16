# Detecção de Colisão 2D (Collision Detection)

**Acesse a versão interativa em português: [Collision Detection PT-BR](https://araujosemacento.github.io/CollisionDetection)**

A colisão de objetos está na base da maioria das experiências em jogos e interfaces de usuário. Tacos de beisebol colidem com bolas, zumbis esbarram em paredes, e o Mario pousa em plataformas e pisa em tartarugas. Até mesmo algo simples como clicar em um botão (um retângulo) com o ponteiro do mouse (um ponto) é uma colisão.

Este livro explica os algoritmos por trás dessas colisões usando formas básicas como círculos, retângulos e linhas, para que você possa implementá-los em seus próprios projetos.

---

#### O QUE É COBERTO AQUI?

Este livro cobre colisões entre pontos, círculos, retângulos, linhas, polígonos e triângulos. Os exemplos foram projetados para serem os mais legíveis e compreensíveis possíveis. Existem métodos mais rápidos e eficientes para detectar essas colisões, mas a intenção deste livro é ser amigável e ensinar os princípios com o mínimo de matemática necessária.

Cada seção inclui uma explicação didática do algoritmo de colisão e um demonstrativo interativo integrado com **p5.js**, além de exemplos de código em **p5.js (JavaScript)**, **Processing (Java)** e **Pygame (Python)**.

---

#### O QUE NÃO É COBERTO?

Como em qualquer livro, há muito mais material útil do que poderia ser coberto aqui. Assuntos omitidos ficaram de fora principalmente porque a matemática torna-se bastante complexa. Espaço tridimensional (3D) não é abordado. Elipses, que parecem simples à primeira vista, são na verdade bastante complexas.

---

#### SOBRE ESTA ADAPTAÇÃO E CRÉDITOS

- **Autor Original**: [Jeff Thompson](http://www.jeffthompson.org/)
- **Livro Original em Inglês**: [Collision Detection](http://www.jeffthompson.org/collision-detection/)
- **Repositório Original**: [jeffThompson/CollisionDetection](https://github.com/jeffThompson/CollisionDetection)
- **Licença**: O conteúdo do livro e os códigos originais são licenciados sob a [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-nc-sa/4.0/) e [MIT License](LICENSE).

Este repositório é uma adaptação e tradução comunitária mantida para fins educacionais. Todo o crédito pelo conteúdo teórico, didática e algoritmos de colisão originais pertence a Jeff Thompson.

---

#### USO DE INTELIGÊNCIA ARTIFICIAL (IA)

Esta versão foi reestruturada, traduzida e modernizada através de *pair programming* com **Antigravity AI (Google DeepMind)**.

A IA desempenhou papel fundamental em:
1. **Migração do Ecossistema Web**: Substituição do site estático PHP legado por uma arquitetura **SvelteKit SSG (Static Site Generation)**.
2. **Portabilidade dos Demonstrativos Gráficos**: Adaptação fiel dos 19 exemplos em Java/PDE (pasta `web_export`) para **p5.js (Canvas 2D)**.
3. **Tradução e Preservação de Conteúdo**: Tradução completa dos capítulos para o português do Brasil (PT-BR).
4. **Exemplos em Pygame (Python)**: Criação de implementações equivalentes em **Pygame** para quem desenvolve jogos em Python.
5. **Interface e UX**: Sistema de abas de código multilinguagem com persistência global em `localStorage` e suporte a temas Light e Dark Mode.

---

#### COMO EXECUTAR LOCALMENTE

##### Pré-requisitos
- [Bun](https://bun.sh/) (recomendado) ou Node.js (v18+)

##### Comandos:
```bash
# Clone o repositório
git clone https://github.com/araujosemacento/CollisionDetection.git
cd CollisionDetection

# Instale as dependências
bun install

# Execute o servidor de desenvolvimento
bun run dev

# Para checagem de tipos e compilação do build estático
bun run check
bun run build
```

---

#### IMPLANTAÇÃO AUTOMÁTICA (GITHUB PAGES)

O repositório inclui um workflow de **GitHub Actions** em [`.github/workflows/deploy.yml`](file:///.github/workflows/deploy.yml) para compilar e implantar o site no **GitHub Pages** a cada `push` na branch `main`.

##### Como Ativar no GitHub:
1. Vá nas **Settings** do seu repositório no GitHub.
2. Acesse a aba **Pages** no menu lateral esquerdo.
3. Em **Build and deployment** -> **Source**, selecione **GitHub Actions**.
