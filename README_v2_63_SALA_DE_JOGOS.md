# APP SERVIÇOS VERSÁTIL v2.63 — Sala de Jogos integrada

Base: v2.62 CLIENTE IMAGENS SINCRONIZAÇÃO.

Integração:
- novo botão `Sala de Jogos` no menu do cliente com o ícone aprovado;
- módulo completo da Sala de Jogos v0.26 incorporado em `/sala-jogos/`, atualizado internamente para v0.27 integrado;
- Jogo da Velha, Quatro em Linha, Batalha Naval, Xadrez e Poker +18;
- Batalha Naval sem temporizador, barcos aprovados e sem CAR/SUB/CAI;
- banners com crossfade suave e rotação de 60 segundos durante as partidas;
- Admin → Sala de Jogos com 6 banners de 1200 × 340 px;
- Admin → Sala de Jogos com estatísticas: entradas, partidas, concluídas, desistências, Humano × Humano, Humano × Virtual, partidas por jogo e folds;
- área administrativa do módulo NÃO aparece ao cliente;
- compatibilidade responsiva para celular.

IMPORTANTE
Antes de usar banners compartilhados e estatísticas, publique no Firebase Realtime Database as regras de `FIREBASE_RULES_SALA_JOGOS_v2_63.json`.

A v2.63 não inclui data.json e não limpa Local Storage/IndexedDB.
