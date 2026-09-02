# APP SERVIÇOS VERSÁTIL v2.61

Correção de regressão em **Conheça o Versátil** e no botão **Normas gerais** do cabeçalho.

## Correção principal
Na v2.59 foi introduzida a rotina que posiciona **Normas gerais** como primeira subcategoria. Essa rotina chamava `normalize(...)` fora do escopo em que a função existia. Ao abrir **Conheça o Versátil**, ocorria um erro JavaScript em tempo de execução antes da montagem da página. Por isso o botão parecia ativo, mas nada era aberto. O botão **Normas gerais** também falhava pelo mesmo motivo, pois direcionava para essa página.

Na v2.61, essas chamadas passam a usar a função global já existente `normasNormalizeV253(...)`.

## Mantido
- **Normas gerais** continua sendo a primeira subcategoria de Conheça o Versátil.
- O botão **Normas gerais** do cabeçalho abre diretamente a subcategoria, já expandida.
- Ajustes da v2.60 em Lazer e Conveniência foram preservados.
- O pacote não contém `data.json`; a base publicada não é substituída.
