# APP SERVIÇOS VERSÁTIL v2.69

Correções desta versão:

1. Sala de Jogos — glitch de fechamento
- A sincronização automática da base pública ocorre a cada 60 segundos.
- Antes, ao estar na Sala de Jogos, essa sincronização podia executar `render()` no app principal.
- Isso recriava o iframe da Sala de Jogos e encerrava a partida.
- Na v2.69 a página `games` preserva o iframe durante sincronizações automáticas e eventos de foco.

2. Gerente sem estatísticas
- A maior parte da telemetria já respeitava `NO_STATS_MODE`.
- A função de finalização da partida (`statsMarkMatchFinished`) ainda gravava diretamente no Firebase.
- Agora ela também encerra imediatamente quando o acesso é de gerente/preview.
- O gerente pode continuar jogando normalmente, mas não gera entradas, partidas, conclusões, abandonos ou folds.

3. Limpeza das estatísticas
- Foi criado o marcador de reset `statistics/resetMarkers/v269`.
- Na primeira abertura de Relatórios após publicar a v2.69, as estatísticas antigas da Sala de Jogos são apagadas uma única vez.
- Depois disso, novas estatísticas válidas passam a ser contabilizadas normalmente para clientes reais.

4. Layout Admin
- Menu administrativo forçado para 5 colunas × 3 linhas.
- Ordem preservada:
  Linha 1: Visão geral | Quartos/Apartamentos | Categorias | Produtos/Preços | Lazer e Conveniência
  Linha 2: Conheça o Versátil | Conheça a Starlis | Correio Versátil | Sala de Jogos | Roteiros
  Linha 3: Calendário | Pedidos | Pedidos a executar | Relatórios | Conta

Preservado:
- correção de Admin > Roteiros da v2.68;
- envio do Meu Roteiro e cópias administrativas;
- pedidos reais do gerente fora das estatísticas;
- dados públicos existentes;
- nenhum data.json incluído;
- nenhuma limpeza de Local Storage/IndexedDB.
