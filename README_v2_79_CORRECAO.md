# APP SERVIÇOS VERSÁTIL v2.79

Correção emergencial após a tela de acessos em branco da v2.78.

A v2.79 foi refeita diretamente sobre a v2.77 estável, descartando as alterações estruturais de dropdown introduzidas na v2.78.

Para corrigir o fechamento espontâneo das listas foram mantidas apenas mudanças de baixo risco:
- horário/versão não participam mais da assinatura estrutural das páginas;
- Conheça a Starlis não é mais forçada a renderizar em toda sincronização;
- se houver uma lista `<details>` aberta, uma sincronização automática atualiza os dados em memória e imagens, mas não destrói/recria o DOM;
- quando nenhuma lista estiver aberta, atualizações reais de conteúdo continuam podendo renderizar normalmente.

Preservado:
- correção do horário da versão da v2.77;
- Starlis e sincronização PC/celular;
- Sala de Jogos/Poker;
- layout compacto;
- Roteiros/e-mails;
- sem data.json;
- sem limpeza de Local Storage/IndexedDB.
