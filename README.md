# APP SERVIÇOS VERSÁTIL v2.55 — Sincronização PC/Celular

Correção estrutural para que a base pública seja renderizada de forma idêntica em PC e celular.

- Conteúdo público (inclusive imagens data:image) é aplicado e renderizado imediatamente, sem bloquear a tela esperando cópia para IndexedDB.
- O IndexedDB passa a ser apenas cache local em segundo plano; falha/quota do aparelho não remove conteúdo público.
- O localStorage recebe um espelho compacto, evitando estouro de quota por imagens base64.
- A publicação audita referências de imagem e é interrompida se alguma imagem local não puder ser incorporada à base pública.
- Mantidas as correções anteriores, inclusive Normas Gerais integradas em Conheça o Versátil.
- O pacote não inclui data.json.
