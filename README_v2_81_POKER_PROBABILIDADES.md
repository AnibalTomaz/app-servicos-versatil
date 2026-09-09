# APP SERVIÇOS VERSÁTIL v2.81

Nova função no Poker: durante a mão, o usuário vê um comentário visual “Suas probabilidades”.

O painel mostra sempre as 3 categorias de mão final mais prováveis, considerando:
- as duas cartas do usuário;
- somente as cartas comunitárias já abertas;
- todas as cartas restantes desconhecidas.

As probabilidades são estimadas por 5.000 simulações por estado da mão e ficam em cache
enquanto as cartas conhecidas não mudarem, evitando recalcular a cada atualização da mesa.

Exemplo visual:
Straight — 32,4%
Dois Pares — 24,8%
Trinca — 18,1%

No river, quando todas as cartas estão abertas, o resultado é determinístico.

A v2.80 continua preservada, incluindo:
- resultado da mão com o nome e descrição da jogada;
- cartas de todos os jogadores visíveis no resultado;
- botões de revanche;
- horário da versão corrigido;
- demais funcionalidades existentes.

Não inclui data.json e não limpa Local Storage/IndexedDB.
