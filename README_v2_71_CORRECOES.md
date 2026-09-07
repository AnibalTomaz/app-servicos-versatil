# APP SERVIÇOS VERSÁTIL v2.71

1. Sala de Jogos — banners
- `homeBanner`, `gameBanner` e camadas internas agora têm cantos arredondados definitivos.
- Foi sobrescrita a regra antiga que ainda deixava o banner principal com `border-radius: 0`.
- O recorte da imagem acompanha o raio dos cantos.

2. Poker — resultados
- Ao clicar em “MOSTRAR RESULTADO”, as cartas fechadas de todos os jogadores passam a ficar visíveis.
- Isso vale para usuário, jogadores online e jogadores virtuais.
- O resultado é exibido abaixo da mesa, dentro da própria área do Poker.
- O modal que cobria a mesa/cartas não é mais usado no Poker.
- “Jogar de novo” e “Voltar à Sala de Jogos” ficam no painel de resultado.

Preservado:
- auto-recuperação dos jogos da v2.70;
- gerente sem estatísticas;
- layout compacto;
- Admin > Roteiros;
- e-mails e dados existentes;
- sem data.json;
- sem limpeza de Local Storage/IndexedDB.
