# APP SERVIÇOS VERSÁTIL v2.66 — correção do e-mail de Meu Roteiro

Falha identificada:
- o fluxo de Meu Roteiro enviava o roteiro apenas ao e-mail do hóspede;
- não havia cópia do roteiro para os e-mails administrativos configurados.

Correção:
- o hóspede continua recebendo normalmente o roteiro;
- os e-mails administrativos configurados em ADMIN_EMAILS recebem uma cópia;
- `anibal@starlis.com.br` recebe a cópia do roteiro;
- `versatil@starlis.com.br` também recebe cópia quando não for o próprio destinatário do roteiro;
- evita envio duplicado quando o e-mail do hóspede já é um dos ADMIN_EMAILS;
- o roteiro continua sendo gravado normalmente;
- o e-mail do cliente passa a ser armazenado na coluna 8 (`clientEmail`) da planilha ITINERARIES;
- o usuário gerente continua fora das estatísticas, mas todo o restante do fluxo permanece real e operacional.

Também foi corrigida a leitura de `itinerariesTodayV170_` para os índices corretos das colunas.

O arquivo do Apps Script agora se chama corretamente:
`APPS_SCRIPT_v2_66.gs`

Não inclui `data.json` e não limpa Local Storage/IndexedDB.
