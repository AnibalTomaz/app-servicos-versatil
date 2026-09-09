# APP SERVIÇOS VERSÁTIL v2.78 — listas estáveis

## Causa localizada
O glitch não vinha da animação visual dos ícones do menu.

Havia uma combinação de três comportamentos:
1. `loadCentralData()` roda ao recuperar foco, ao voltar para a aba e a cada 60 segundos;
2. desde a v2.73, a página `Conheça a Starlis` era marcada como alterada em toda sincronização, mesmo sem mudança real;
3. ao reconstruir a página, o app lembrava apenas `detail.open=true`, mas o controlador animado já havia criado o painel interno com altura `0px`. Assim a lista ficava tecnicamente aberta, porém visualmente fechada.

Isso explica o fechamento espontâneo depois de algum tempo ou após mudança de foco.

## Correções
- Starlis não é mais reconstruída em toda sincronização;
- uma página só é renderizada novamente se o conteúdo dela realmente mudou;
- data/hora e versão não participam mais da assinatura estrutural da página;
- listas abertas são salvas por chave estável, não apenas pela posição;
- após render necessário, o estado é restaurado pelo próprio controlador de dropdown;
- painel, altura, opacidade, pointer-events e `detail.open` são restaurados em conjunto;
- atualização de fotos continua independente via cache-buster, sem reconstruir listas.

## Preservado
- horário da versão separado da base da v2.77;
- sincronização PC/celular;
- Starlis com fotos públicas;
- Sala de Jogos/Poker;
- gerente sem estatísticas;
- layout compacto;
- Roteiros e e-mails;
- sem `data.json`;
- sem limpeza de Local Storage/IndexedDB.
