# Migração preparada

- Removido o adaptador Netlify.
- Adicionado o adaptador oficial `@cloudflare/vite-plugin` e Wrangler.
- Criado `wrangler.jsonc` para TanStack Start no Cloudflare Workers.
- Removida a dependência de `/.netlify/images`; imagens servidas diretamente de `/img/`.
- Adicionada a seção Formação & Cursos com os dados confirmados.

Importante: TanStack Start usa SSR; a configuração é Cloudflare Workers, não Pages estático.
