# APP SERVIÇOS VERSÁTIL v2.75

Correção do indicador de atualização.

- O indicador agora mostra a data e hora da versão efetivamente ativa.
- O Apps Script grava uma única data/hora na primeira chamada feita após a nova implantação da versão.
- A referência é compartilhada por PC e celular.
- O horário do indicador usa `America/Sao_Paulo`, para coincidir com o horário de Brasília exibido no computador do usuário.
- O texto passa a ser `Versão 2.75 atualizada • DD/MM, HH:mm`, evitando confusão com a data de alteração de conteúdo da base.
- A data da base pública continua existindo internamente para sincronização, mas não é mais confundida com a versão do aplicativo.

Preservadas todas as correções da v2.74 e anteriores.
Não inclui data.json e não limpa Local Storage/IndexedDB.
