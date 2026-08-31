# APP SERVIÇOS VERSÁTIL v2.54 — correção de inicialização de Normas

Correção emergencial do erro `Cannot access NORMAS_RESTORE_MARK_V253 before initialization`. A constante de migração agora é inicializada antes da rotina de restauração. Mantém a recuperação definitiva de Normas gerais da v2.53 sem alterar `data.json`.

APP SERVIÇOS VERSÁTIL — v2.53 — NORMAS RESTAURADAS DEFINITIVAMENTE

Correção baseada no comportamento anterior à v2.48 (especialmente v2.46):
- Normas gerais volta a ser uma categoria/subcategoria dentro de Conheça o Versátil, no Cliente e no Admin.
- O botão Normas gerais do cabeçalho abre a própria seção dentro de Conheça o Versátil; não existe página Admin separada.
- Recuperação única dos 10 itens históricos (n1–n10) se a regressão das versões posteriores os tiver removido.
- Textos, imagens, ícones e alterações já existentes têm prioridade e NÃO são sobrescritos pelos textos padrão.
- Tombstone histórico que apagou a categoria Normas é neutralizado. Depois da migração v2.53, exclusões de itens feitas pelo Admin voltam a ser respeitadas normalmente.
- A sincronização remota não pode mais fazer Normas desaparecer: após cada sincronização a categoria estrutural é verificada/restaurada.
- Nenhum data.json acompanha o pacote; a base pública atual do usuário não é substituída pelo deploy do código.

Atualização: primeiro APPS_SCRIPT_v2_53.gs na implantação existente; depois os arquivos web no GitHub.
