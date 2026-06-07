# Nexus Con - Landing Page Mobile First

**Projeto de Workshop - Frontend P1**

Este repositório contém o código-fonte de uma Landing Page focada em um evento fictício de jogos (Nexus Con), desenvolvida com as tecnologias requeridas pelo projeto. A página foi inteiramente construída seguindo a filosofia *Mobile-First* e com *Progressive Enhancement* para dispositivos de tela maior, garantindo 100% de fluidez e eliminando barras de rolagens horizontais indesejadas.

## 1. Relato de Experiência (Paper)

### 1.1) Introdução e Contextualização
A proposta do trabalho consistiu no desenvolvimento de uma interface atraente, responsiva e acessível para o usuário final, utilizando React, Tailwind CSS e TypeScript. A temática escolhida foi a **Nexus Con**, uma convenção fictícia de games no formato de grandes eventos como a E3 ou a Gamescom. 
Essa escolha justifica o uso intensivo de design visual imersivo e a aplicação rigorosa do conceito *Mobile-First*. Uma grande parcela dos usuários que pesquisam sobre eventos de entretenimento o fazem através de smartphones; portanto, iniciar a arquitetura pensando nas telas reduzidas e em carregamento rápido é vital para a conversão de vendas de ingressos e captação do interesse do público.

### 1.2) Fundamentação Teórica e Referencial
Para sustentar as decisões arquiteturais e de design, os seguintes conceitos e referências foram empregados:

1. **Mobile-First & Progressive Enhancement**: Iniciar o layout nas menores telas e expandi-lo através de *Media Queries*. (Referência: WROBLEWSKI, Luke. *Mobile First*, A Book Apart, 2011).
2. **Estruturas 1D e 2D (Flexbox e CSS Grid)**: Utilização de Flexbox na Navbar para alinhamento alinhamento (1D) e CSS Grid na sessão de destaques ("Por que participar") para formação de *cards* em colunas e linhas (2D). (Referências: *CSS Flexible Box Layout Module Level 1* - W3C e *CSS Grid Layout Module Level 1* - W3C).
3. **Web Semântica e Acessibilidade (WCAG)**: Utilização de tags semânticas HTML5 (`<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`) e atributos ARIA (`aria-label`) para promover a acessibilidade do layout entre leitores de tela em conformidade com as diretrizes do WCAG. (Referência: *Web Content Accessibility Guidelines (WCAG) 2.1* - W3C).
4. **Otimização de Ativos (Assets)**: Uso do elemento `<picture>` com o atributo `srcset` fornecendo resoluções diferentes para Mobile, Tablet e Desktop de forma a poupar a banda de rede do usuário Mobile. (Referência: *HTML Living Standard - The picture element*, WHATWG).
5. **Responsividade com Unidades Relativas**: Escolha de unidades como % (porcentagens) em conjunto com Tailwind CSS (`max-w-2xl`, `w-full`) e `rem` implícito por padrão estruturado, garantindo que o texto e os contêineres fluam adequadamente sem gerar rolagem horizontal (overflow-x). (Referência: MARCOTTE, Ethan. *Responsive Web Design*, A Book Apart, 2011).

### 1.3) Metodologia (O Passo a Passo)
O desenvolvimento seguiu as etapas abaixo:
1. **Setup do Projeto**: Inicializado com Vite (`create-vite`), TypeScript e React (`@vitejs/plugin-react`). O uso de Vite garante carregamento mais rápido do ambiente de desenvolvimento.
2. **Configuração de Estilos**: A biblioteca Tailwind CSS v4 foi implementada. O Tailwind gerencia rapidamente a responsividade via prefixos (`md:`, `lg:`).
3. **Layout Base Mobile**: O arquivo `App.tsx` foi estruturado para renderizar tudo nativamente no layout *mobile*, com os itens flexíveis em coluna por padrão e menu de navegação responsivo. 
4. **Evolução Desktop**: Foram aplicadas *Media Queries* abstratas do Tailwind, expandindo os menus (`md:flex`) e utilizando o CSS Grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`) para dividir as pautas de vantagens de participar no evento.
5. **Picture tag e Background**: Para a seção Hero principal da interface, a imagem de destaque da multidão em um evento de software foi implementada via marcação `<picture>`, disponibilizando múltiplos assets através de `srcset` referenciando aos breakpoints.

### 1.4) Resultados e Discussão
A página entregou uma experiência imersiva:
- **Fluidez (100%)**: Os contêineres colapsam e expandem livremente sem criação de qualquer espaço morto ou scroll lateral no eixo X, garantindo sucesso em resoluções minúsculas (<= 320px).
- **Acessibilidade**: Contraste aprimorado, marcação semântica com `<main>` e `<header>`.
- **Performance**: Usando `<picture>` com `srcset`, imagens dimensionadas desnecessariamente em resoluções altas não são entregues à aparelhos celulares.

---

## 2. Guia de Reprodução

### Pré-requisitos
- Node.js (versão 18 ou superior recomendada)
- NPM ou Yarn

### Instalação
1. Clone o repositório.
2. Acesse a pasta do frontend e instale as dependências:
   ```bash
   cd Workshop_frontend_p1
   npm install
   ```
3. Execute a aplicação em ambiente de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Abra o navegador no link exibido no terminal, geralmente em `http://localhost:5173`. Navegue alterando a dimensão da janela do seu browser para observar o comportamento mobile-first (ferramenta de Desenvolvedor -> Toggle Device Toolbar).

### Scripts
Para testar a geração do pacote unificado para produção:
```bash
npm run build
```
Para pré-visualizar o app built em modo servido simulado:
```bash
npm run preview
```
