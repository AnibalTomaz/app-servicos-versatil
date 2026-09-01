# APP SERVIÇOS VERSÁTIL v2.58

Correção específica do botão **Normas gerais** do cabeçalho.

- O rótulo do botão permanece fixo em `Normas gerais`, sem incorporar título ou texto explicativo da categoria.
- O clique abre `Conheça o Versátil` já com a subcategoria canônica `Normas gerais` expandida.
- A abertura não depende mais apenas de um `setTimeout` posterior ao `render`: o estado `open` é aplicado na própria geração do HTML da seção.
- Depois da renderização, o aplicativo posiciona a tela diretamente na subcategoria.
- Mantidas as correções e dados da v2.57.
- O pacote não inclui `data.json`.
