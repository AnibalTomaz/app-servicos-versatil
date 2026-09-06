# APP SERVIÇOS VERSÁTIL — v2.62

Revisão focada na área do Cliente e na cadeia completa de imagens/sincronização, baseada na v2.61.

## Correções principais
- Re-renderização automática da página do Cliente somente quando a base pública daquela página realmente mudou, fazendo fotos recém-publicadas aparecerem sem exigir sair/entrar.
- Estado visual (acordeões abertos e posição de rolagem) preservado durante atualização pública.
- Espelho local passa a preservar imagens públicas em IndexedDB por referência, sem inflar localStorage e sem apagar fotos do fallback.
- A base pública em memória não é convertida/destruída para referências locais durante publicação.
- Recuperação defensiva quando um aparelho encontra referência de imagem local ausente: sincroniza novamente a base pública.
- Mantidos Normas gerais no topo e link direto do cabeçalho.
- Mantidas as correções de Lazer e Conveniências para categorias/subcategorias/itens editáveis, criáveis e excluíveis.
- `data.json` não está incluído no pacote: a base publicada do usuário não é sobrescrita pelo ZIP.

## Segurança de dados
A versão não remove cadastros, não redefine a base pública e não altera IDs/links existentes. O fluxo de publicação continua usando o conteúdo atual do Admin e valida confirmação pela base pública.
