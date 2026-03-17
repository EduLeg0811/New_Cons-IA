# Cons-IA Landing

Landing page em React para organizar ferramentas de IA voltadas ao estudo e pesquisa da Conscienciologia.

## Visão geral

O projeto entrega uma experiência de navegação simples com:

- página inicial com cards por categoria
- página com todos os módulos em `/todos`
- páginas por categoria em `/cat/:categoryKey`
- páginas placeholder para módulos futuros
- tema claro/escuro
- animações e vídeos na landing

As categorias e links são centralizados em [src/data/modules.ts](/d:/APPS/SIMPLE/New_Landpage_v2/src/data/modules.ts).

## Stack

- React 18
- TypeScript
- Vite
- React Router
- Tailwind CSS
- Framer Motion
- TanStack Query
- Radix UI apenas para `toast` e `tooltip`

## Estrutura principal

- [src/App.tsx](/d:/APPS/SIMPLE/New_Landpage_v2/src/App.tsx): define providers e rotas
- [src/pages/Landing.tsx](/d:/APPS/SIMPLE/New_Landpage_v2/src/pages/Landing.tsx): homepage principal
- [src/pages/Index.tsx](/d:/APPS/SIMPLE/New_Landpage_v2/src/pages/Index.tsx): visão agregada de todos os módulos
- [src/pages/CategoryPage.tsx](/d:/APPS/SIMPLE/New_Landpage_v2/src/pages/CategoryPage.tsx): lista módulos por categoria
- [src/pages/ComingSoon.tsx](/d:/APPS/SIMPLE/New_Landpage_v2/src/pages/ComingSoon.tsx): placeholder para rotas ainda não implementadas
- [src/components](/d:/APPS/SIMPLE/New_Landpage_v2/src/components): componentes visuais reutilizados
- [src/index.css](/d:/APPS/SIMPLE/New_Landpage_v2/src/index.css): tokens de tema e estilos globais

## Rotas

- `/`: landing principal
- `/todos`: lista geral de módulos
- `/cat/:categoryKey`: páginas por categoria
- `/mancia`
- `/biblio-wv`
- `/biblio-verbete`
- `/ragbot`
- `/search-book`
- `/search-verb`
- `/search-ccg`

As últimas rotas hoje usam a tela de placeholder.

## Desenvolvimento

Pré-requisitos:

- Node.js 18+
- npm

Comandos:

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
```

Preview local do build:

```bash
npm run preview
```

Lint:

```bash
npm run lint
```

Testes:

```bash
npm run test
```

Observação: o projeto mantém configuração de Vitest, mas atualmente não possui testes automatizados em `src`.

## Conteúdo e manutenção

- Os links externos e metadados dos módulos ficam em [src/data/modules.ts](/d:/APPS/SIMPLE/New_Landpage_v2/src/data/modules.ts).
- A identidade visual e as variáveis de cor ficam em [src/index.css](/d:/APPS/SIMPLE/New_Landpage_v2/src/index.css).
- Os vídeos da landing ficam em [src/assets](/d:/APPS/SIMPLE/New_Landpage_v2/src/assets).

## Pendências conhecidas

- Há textos com encoding incorreto em alguns arquivos e labels visíveis.
- As rotas de placeholder ainda não possuem integração real com backend.
