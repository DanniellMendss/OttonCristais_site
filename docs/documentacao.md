# Documentação do Site Otton Cristais

## Visão Geral

O site Otton Cristais é uma loja virtual de pedras preciosas e cristais lapidados, desenvolvido com React, TypeScript e Vite.

## Tecnologias Utilizadas

- **React 18** - Framework UI
- **TypeScript** - Linguagem tipada
- **Vite** - Build tool
- **Tailwind CSS** - Framework de estilização
- **React Router DOM** - Roteamento
- **Framer Motion** - Animações
- **next-themes** - Gerenciamento de temas (claro/escuro)

## Estrutura do Projeto

```
src/
├── assets/           # Imagens e arquivos estáticos
├── components/       # Componentes reutilizáveis
│   ├── ui/          # Componentes de interface (shadcn/ui)
│   ├── CartDrawer.tsx
│   ├── Features.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── ProductCard.tsx
│   └── ProductCatalog.tsx
├── contexts/        # Contextos React
│   └── CartContext.tsx
├── data/            # Dados estáticos
│   └── products.ts
├── hooks/           # Hooks personalizados
├── pages/           # Páginas da aplicação
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Index.tsx
│   ├── ProductDetail.tsx
│   ├── Store.tsx
│   └── NotFound.tsx
└── App.tsx         # Componente principal
```

## Páginas do Site

### Home (/)
- Hero com imagem de destaque
- Seção de peças selecionadas (8 produtos)
- Botão para visualizar todos os produtos
- Features acima do footer

### Loja (/loja)
- Catálogo completo de produtos
- Filtros por categoria
- Ordenação por preço e nome
- Visualização em grid ou lista
- Paginação de produtos

### Sobre (/sobre)
- História da Otton Cristais
- Valores da empresa
- Equipe e experiência

### Contato (/contato)
- Formulário de contato
- Informações de contato
- Horário de funcionamento

### Detalhes do Produto (/produto/:id)
- Imagem do produto
- Descrição completa
- Informações técnicas (quilates, origem, lapidação)
- Botão de adicionar ao carrinho

## Funcionalidades

### Carrinho de Compras
- Adicionar produtos
- Alterar quantidade
- Remover produtos
- Finalização via WhatsApp

### Tema Claro/Escuro
- Alternância via botão no header
- Persistência de preferência
- Cores adaptadas para cada tema

### Responsividade
- Design mobile-first
- Menu hamburger no mobile
- Grid adaptativo

## Componentes Principais

### Header
- Logo com imagem
- Navegação principal
- Botão de tema
- Carrinho de compras
- Menu mobile

### ProductCard
- Imagem do produto
- Badge (Destaque, Raro, Exclusivo)
- Informações básicas
- Botão de compra rápida

### CartDrawer
- Lista de itens
- Controles de quantidade
- Total do carrinho
- Botão de finalização WhatsApp

## Categorias de Produtos

- Cristais Lapidados
- Quartzo
- Raras
- Decoração

## Variáveis de Ambiente

Não há variáveis de ambiente obrigatórias no projeto atual.

## Scripts Disponíveis

```bash
npm run dev      # Iniciar servidor de desenvolvimento
npm run build    # Build de produção
npm run preview  # Visualizar build de produção
npm run lint     # Executar linter
npm run test     # Executar testes
```

## Extensões VSCode Recomendadas

- ESLint
- Tailwind CSS IntelliSense
- TypeScript Vue Plugin
