# APP SERVIÇOS VERSÁTIL v2.72 — PC e celular sincronizados

Revisão voltada à diferença de conteúdo/fotos entre navegador de PC, celular e PWA.

## Correções

1. Conheça a Starlis
- As fotos publicadas passam a ser recarregadas com a identificação da publicação atual.
- Se uma foto externa for substituída mantendo a mesma URL, o celular não reutiliza silenciosamente a imagem antiga do cache.
- Toda nova publicação força a reconstrução da página Starlis mesmo quando o texto/URL não mudou.

2. Todo o conteúdo do Cliente
A mesma proteção foi aplicada às fotos de:
- Catálogo / Produtos;
- Categorias;
- Lazer e Conveniência;
- Conheça o Versátil;
- Conheça a Starlis;
- Correio Versátil.

3. Entrada no Cliente
- Ao entrar, o app solicita imediatamente a base pública atual.
- O celular/PWA não fica dependendo do espelho antigo de localStorage/IndexedDB.

4. Sincronização
- A data/versão da publicação agora faz parte da assinatura da tela pública.
- Ao detectar publicação nova, a árvore visual é atualizada e o estado dos dropdowns/rolagem é restaurado.
- As imagens locais (`data:image`, `idbimg:` e assets do próprio app) continuam preservadas.

## Preservado
- Sala de Jogos v2.71;
- resultados do Poker;
- banner arredondado;
- auto-recuperação dos jogos;
- gerente sem estatísticas;
- Admin 5×3 e layout compacto;
- Roteiros/e-mails;
- sem data.json;
- sem limpeza de Local Storage/IndexedDB.
