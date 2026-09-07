# v2.68 — correção definitiva de Admin > Roteiros

Causa localizada na v2.67:
- o `doGet()` chamava `jsonOrJsonp(...)`;
- porém a função `jsonOrJsonp` não existia no Apps Script;
- isso fazia a chamada de Admin > Roteiros falhar antes de devolver os dados.

Correção:
- adicionada a função `jsonOrJsonp`;
- respostas com `callback` agora retornam JavaScript/JSONP válido;
- respostas sem `callback` continuam retornando JSON;
- mantido `adminItinerariesToday`;
- mantida a leitura das colunas de ITINERARIES;
- mantido o envio de roteiro ao hóspede e cópia administrativa;
- mantida a exclusão estatística do gerente;
- nenhum `data.json` incluído;
- nenhum Local Storage/IndexedDB é apagado.
