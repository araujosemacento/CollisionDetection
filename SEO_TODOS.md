# Checklist de Ações de SEO & Configuração Externa

Este documento contém a lista de tarefas manuais e externas que não puderam ser automatizadas diretamente via código na aplicação, mas que são fundamentais para maximizar o ranqueamento no Google, Bing e a visibilidade no GitHub.

---

## 1. Configuração do Repositório no GitHub

Acesse a página inicial do repositório no GitHub (`https://github.com/araujosemacento/collision_detection`) e clique no ícone da engrenagem no canto superior direito da caixa **About**:

- [X] **Description (Descrição):**
  Copiar e colar uma das descrições abaixo:
  > *Livro interativo sobre algoritmos de detecção de colisão 2D em jogos. Explicações visuais com p5.js e exemplos de código em JavaScript, Pygame (Python) e Processing (Java). Traduzido para PT-BR.*

- [X] **Website:**
  Preencher com a URL do GitHub Pages:
  `https://araujosemacento.github.io/collision_detection/`

- [X] **Topics (Tópicos do GitHub):**
  Adicionar as seguintes 18 tags (separadas por vírgula ou espaço):
  `collision-detection`, `2d-physics`, `gamedev`, `game-development`, `game-math`, `algorithms`, `geometry`, `p5js`, `pygame`, `processing`, `javascript`, `python`, `java`, `sveltekit`, `svelte`, `educational`, `interactive-book`, `pt-br`

---

## 2. Imagem para Redes Sociais (Open Graph Cover)

Quando o link do seu site for compartilhado no WhatsApp, Twitter/X, LinkedIn, Discord ou Facebook, os buscadores e redes usarão a imagem especificada no metadado `og:image`.

- [X] **Criar a Imagem de Capa:**
  - **Dimensões recomendadas:** 1200 x 630 pixels (proporção 1.91:1).
  - **Formato:** PNG ou JPG otimizado.
  - **Conteúdo sugerido:** Título "Detecção de Colisão 2D", capturas visuais dos demonstrativos gráficos (ex: colisão círculo/retângulo em p5.js) e logos das linguagens (JS, Python, Java).
- [X] **Salvar no Projeto:**
  - Salvar o arquivo no caminho `static/og-cover.png`.

---

## 3. Cadastro nos Motores de Busca (Webmaster Tools)

Para acelerar a indexação de todos os 30 capítulos no Google e Bing:

- [X] **Google Search Console:**
  1. Acesse [Google Search Console](https://search.google.com/search-console).
  2. Adicione a propriedade do tipo URL: `https://araujosemacento.github.io/collision_detection/`.
  3. Verifique a propriedade via meta tag HTML ou arquivo HTML na pasta `static/`.
  4. Acesse o menu **Sitemaps** e envie a URL: `https://araujosemacento.github.io/collision_detection/sitemap.xml`.

- [ ] **Bing Webmaster Tools:**
  1. Acesse [Bing Webmaster Tools](https://www.bing.com/webmasters).
  2. Importe sua propriedade diretamente do Google Search Console.
  3. Envie a URL do sitemap: `https://araujosemacento.github.io/collision_detection/sitemap.xml`.

---

## 4. Divulgação & Geração de Backlinks

Backlinks (links de outros sites apontando para o seu) são o fator de maior peso para o ranqueamento no Google:

- [ ] Postar no **TabNews** (Comunidade tech PT-BR): Apresentar o projeto traduzido e modernizado.
- [ ] Postar no **Reddit**: Comunidades `r/gamedev`, `r/p5js`, `r/brdev`, `r/Python`.
- [ ] Criar post no **Dev.to / Medium / LinkedIn**: Artigo explicando como a migração de PHP para SvelteKit e p5.js foi realizada.
- [ ] Adicionar o repositório em listas curadas (*Awesome lists*) de GameDev ou p5.js no GitHub.
