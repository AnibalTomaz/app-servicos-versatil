# APP SERVIÇOS VERSÁTIL v2.77

Corrige o sintoma em que o horário correto aparecia e era rapidamente sobrescrito.

Causa:
- o horário da versão e o horário da base pública usavam o mesmo campo (`centralUpdatedAt`);
- o Apps Script colocava o horário correto;
- logo depois, `data.json` terminava de carregar e substituía esse campo pelo horário antigo da base.

Correção:
- `versionPublishedAt` guarda somente o horário da versão;
- `versionPublishedVersion` identifica a versão a que esse horário pertence;
- `centralUpdatedAt` fica reservado à base pública;
- `data.json` não pode mais sobrescrever o relógio da versão;
- após cada sincronização da base, o horário da versão é reconfirmado diretamente no Apps Script;
- enquanto ainda não houver resposta, o app mostra “sincronizando horário…” em vez de exibir um horário antigo.

Horário: America/Sao_Paulo.
Não inclui data.json e não limpa Local Storage/IndexedDB.
