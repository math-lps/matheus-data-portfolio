# Portfólio — Matheus Augusto Lopes

Portfólio profissional desenvolvido com React, TanStack Start, Vite e Tailwind CSS.

## Desenvolvimento local

Requer Node.js 22.13+.

```bash
npm install
npm run dev
```

## Publicação no Cloudflare

Este projeto usa TanStack Start com renderização no servidor. A configuração preparada é para **Cloudflare Workers**, não Cloudflare Pages estático.

1. `npm install`
2. `npx wrangler login`
3. `npm run build`
4. `npm run deploy`

O comando de deploy compila e publica o Worker.

## Conteúdo

- `src/content/portfolio.ts`: textos, links, projetos e habilidades.
- `src/routes/index.tsx`: estrutura das seções.
- `public/img/`: foto e imagens dos projetos.
