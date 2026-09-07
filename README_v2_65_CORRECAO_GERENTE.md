# APP SERVIÇOS VERSÁTIL v2.65 — Correção do usuário gerente

Usuário padrão:
- E-mail: versatil@starlis.com.br
- Nome: gerente
- Apartamento: 800

Correção:
Este usuário agora funciona como um Cliente comum para conferência ponta a ponta.

Ele:
- cria pedidos reais;
- grava pedidos;
- envia e-mails normalmente;
- cria os registros/calendário previstos pelo fluxo normal;
- envia e grava Meu Roteiro normalmente;
- pode conferir geração, envio e recebimento;
- usa a Sala de Jogos normalmente.

Única diferença:
- suas ações não entram nas estatísticas e gráficos.

Implementação:
- pedidos do gerente recebem `excludeFromStatistics: true`, mas continuam sendo pedidos normais;
- Relatórios ignoram apenas esses pedidos;
- roteiros são gravados e enviados normalmente, mas ficam fora das estatísticas de roteiros;
- na Sala de Jogos o acesso gerente continua com telemetria desativada, sem alterar a jogabilidade.

Mantidas todas as demais alterações da v2.64.
`data.json` não está incluído e Local Storage/IndexedDB não são limpos.

IMPORTANTE:
Para a exclusão correta das estatísticas de roteiros, publique também a versão do Apps Script incluída neste pacote.
