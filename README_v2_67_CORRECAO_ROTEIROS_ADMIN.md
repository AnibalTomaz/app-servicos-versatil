# v2.67 — Admin > Roteiros

A tela Admin > Roteiros foi corrigida para carregar os dados por JSONP, usando o suporte `callback` que já existe no Apps Script. Isso evita a falha do `fetch()` entre GitHub Pages e Apps Script que produzia “Não foi possível carregar os roteiros de hoje”.

Preservados:
- endpoint `adminItinerariesToday`;
- leitura corrigida das colunas de ITINERARIES;
- e-mail do roteiro e cópias administrativas da v2.66;
- gerente operacional fora das estatísticas;
- dados existentes, sem data.json e sem limpeza local.
