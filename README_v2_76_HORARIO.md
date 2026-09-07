# APP SERVIÇOS VERSÁTIL v2.76

Correção definitiva do horário exibido na tela inicial.

## Causa confirmada na v2.75
O app já tinha `publicationAt` no Apps Script, mas o arquivo público do GitHub (`data.json`) ainda podia chegar sem esse campo. Nessa situação, a tela voltava a usar `updatedAt` antigo da base (ex.: 01:00), mesmo com a interface já em v2.75.

## Correção
- `data.json` passa a carregar `publicationAt`;
- ao abrir o app, é feita uma consulta direta `centralStatus` ao Apps Script ativo;
- essa consulta é autoritativa para a versão e seu horário;
- a primeira chamada ao novo deployment grava o horário da versão no Apps Script;
- respostas antigas sem `publicationAt` não conseguem mais sobrescrever esse horário;
- PC e celular usam a mesma referência;
- horário exibido em `America/Sao_Paulo`;
- texto passa a ser `Versão 2.76 publicada • DD/MM, HH:mm`.

Não inclui data.json e não limpa Local Storage/IndexedDB.
