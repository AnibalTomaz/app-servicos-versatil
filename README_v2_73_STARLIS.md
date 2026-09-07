# APP SERVIÇOS VERSÁTIL v2.73 — Conheça a Starlis

## Causa corrigida
A v2.72 tratava cache de imagens, mas ainda havia um problema anterior ao cache:
o navegador podia manter uma marca local de edição administrativa. Quando isso acontecia,
a sincronização usava o merge conservador e preservava o conteúdo local antigo — inclusive
a foto antiga da página Conheça a Starlis — mesmo que a base pública já tivesse as 4 fotos novas.

## Correções
- somente uma sessão Admin preserva alterações locais não publicadas;
- Cliente sempre considera a base pública como autoritativa;
- Conheça a Starlis é aplicada exatamente a partir da publicação central vigente;
- a página Starlis é reconstruída após toda sincronização do Cliente;
- os campos `images`, `image`, `image2`, `image3`, `image4` são normalizados juntos;
- até 4 fotos publicadas no Admin são mantidas na página do Cliente;
- não limpa Local Storage nem IndexedDB.

## Preservado
- todo o conteúdo da v2.72;
- Sala de Jogos/Poker;
- gerente sem estatísticas;
- layout compacto;
- Roteiros e e-mails;
- sem data.json.
