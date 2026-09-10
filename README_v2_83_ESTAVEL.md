# APP SERVIÇOS VERSÁTIL v2.83 — pacote estável

A v2.82 foi revisada porque o app deixou de abrir após a publicação. A v2.83 foi reconstruída diretamente sobre a base estável v2.80 e recebeu somente a pasta Sala de Jogos da v2.82, preservando as alterações de Poker e banners.

Correções de empacotamento:
- app.js principal volta à base funcional v2.80;
- APPS_SCRIPT atualizado para 2.83;
- service worker recebe cache próprio v2.83, sem reutilizar o identificador antigo v2.79;
- URLs de app recebem cache-buster 2830;
- tela de acesso ganha tratamento de erro também para rejeições assíncronas;
- Sala de Jogos mantém probabilidades, painel deslocado, nomes legíveis, banner arredondado, “Carregando...” e troca a cada 25 s.

Não inclui data.json e não limpa Local Storage/IndexedDB.
