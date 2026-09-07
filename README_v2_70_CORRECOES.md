# APP SERVIÇOS VERSÁTIL v2.70

## 1. Sala de Jogos — auto-recuperação de partida
A v2.69 eliminou o fechamento do iframe, mas uma partida ainda podia aparentar travamento se o listener do Firebase deixasse de receber atualização ou uma jogada do jogador virtual ficasse presa.

A v2.70 adiciona:
- watchdog da sala a cada 2,5 segundos;
- releitura segura do estado da partida quando não há evento por mais de 5 segundos;
- nova tentativa automática quando a vez do jogador virtual fica parada;
- liberação de `botBusy` após 6,5 segundos caso uma operação fique presa;
- tratamento de erro do listener e da jogada do bot;
- limpeza do watchdog ao sair da partida.

O watchdog não cria estatísticas e não altera as regras dos jogos.

## 2. Layout mais compacto
- conteúdo principal limitado a 1080 px e centralizado;
- botões do Admin menores;
- cards, tabelas, campos e espaçamentos reduzidos;
- mantém Admin em 5 colunas × 3 linhas;
- menu do Cliente também ficou mais compacto;
- melhor aproveitamento da tela sem exigir diminuir o zoom do navegador.

## Preservado
- gerente joga sem gerar estatísticas;
- reset de estatísticas da v2.69;
- Admin > Roteiros;
- e-mails de roteiro;
- pedidos e demais dados;
- sem data.json;
- sem limpeza de Local Storage/IndexedDB.
