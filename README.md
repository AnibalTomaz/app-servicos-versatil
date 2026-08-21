# APP SERVIÇOS VERSÁTIL — v1

Protótipo funcional/PWA para contratação de serviços.

## Admin inicial
- Nome: `Admin`
- Senha: `1234`

Altere em **Admin > Conta**.

## Implementado
- Área Admin e Cliente.
- Cadastro de quartos e apartamentos.
- Categorias, produtos, preços e descritivos.
- Preços diferenciados para quarto e apartamento.
- Catálogo, carrinho e confirmação.
- Data padrão hoje e períodos 06–12h / 13–19h nas meias diárias.
- Calendário de abertura/fechamento de datas.
- Pedidos, cancelamento e exclusão do relatório quando cancelado.
- Relatórios por categoria, por produto, consolidado e últimos 12 meses.
- Exportação CSV.
- Conta do Admin com senha, recuperação e múltiplos e-mails.
- Geração de arquivo `.ics` para agenda.
- Logo fornecido pelo usuário, paleta azul, confirmações verdes e negativas vermelhas.
- Ícones próprios por categoria/produto usando símbolos visuais.

## Limites desta versão local
Esta versão usa `localStorage`. Envio automático real de e-mails, recuperação real por e-mail, relatório mensal automático e criação/remoção automática no Google Calendar exigem backend, banco online e integração OAuth/SMTP/API.

## Pacotes promocionais
O briefing não trouxe preços para os pacotes promocionais. Eles foram criados com preço `0` e ficam aguardando cadastro pelo Admin.

## Versão 1.1 — página inicial corrigida
- O botão da área selecionada muda claramente de cor.
- Área do Admin usa campos próprios: Login do ADMIN e Senha do ADMIN.
- Cliente informa Quarto/Apartamento em campo editável.
- Login inicial do Admin: `Anibal`
- Senha inicial: `1234`
- E-mail do Admin: `anibal@starlis.com.br`

## Versão 1.2 — correção efetiva da tela de acesso
- Área selecionada muda claramente de cor.
- Cliente: E-mail, Nome e campo livre Quarto/Apartamento.
- Admin: apenas Login do ADMIN e Senha do ADMIN.
- Login do Admin: Anibal
- Senha do Admin: 1234
- E-mail `anibal@starlis.com.br` foi gravado internamente em **Admin > Conta** como e-mail de recuperação e recebimento de solicitações. Ele não aparece como campo de acesso.
- Nova chave de armazenamento evita que dados antigos do navegador escondam estas alterações.

## Versão 1.4
Correção feita a partir da versão 1.2 válida, com revisão de sintaxe pelo Node antes da entrega.

## Versão 1.5 — atualização de pacotes e relatórios
Pacotes promocionais atualizados com os preços fornecidos. Como foi informado um único preço por pacote, o mesmo valor foi aplicado a quarto e apartamento.

Relatório mensal agora inclui:
- total consolidado;
- total por categoria;
- total por produto;
- últimos três meses;
- comparativo anual mês a mês;
- total acumulado do ano;
- comparação com o mesmo mês do ano anterior;
- diferença em valor e variação percentual.

Pedidos cancelados permanecem fora dos cálculos.

## Versão 1.6 — quartos/apartamentos e calendário
- Cadastro de unidades revisado: o **tipo** é selecionado entre Quarto/Apartamento e somente o **número** é digitado.
- Edição segue a mesma regra: tipo por seleção e número como único campo livre.
- Calendário agora permite escolher **mês e ano**.
- Cada dia foi dividido em:
  - Manhã: 06h–12h
  - Tarde: 13h–19h
- Admin pode abrir/fechar cada período separadamente.
- Locações de meia diária respeitam o período escolhido pelo cliente.
- Produtos sem período específico ficam bloqueados somente quando os dois períodos do dia estiverem fechados.
- Corrigida também a identificação de Quarto/Apartamento digitada pelo cliente para aplicar a tabela de preços correspondente.

## Versão 1.7 — unidades alfanuméricas, vínculo do cliente e calendário
- Identificação de quartos/apartamentos aceita letras e números, por exemplo `101A`, `A12` ou `201-B`.
- O tipo continua selecionável entre **Quarto** e **Apartamento**.
- No acesso do Cliente, a unidade digitada é conferida contra o cadastro existente.
- Se não houver correspondência, o aplicativo mostra exatamente: **Unidade não existente**.
- Quando a unidade existe, o Cliente fica vinculado ao cadastro e recebe automaticamente a tabela de preços correta para Quarto/Apartamento.
- O calendário do Admin continua dividido em Manhã/Tarde, porém sem exibir horários.
- `versatil@starlis.com.br` foi adicionado como e-mail padrão de recebimento na Conta do Admin, junto com `anibal@starlis.com.br`.

## Versão 1.8
- Cadastro de unidade: Número/Identificação → Tipo → Confirmação.
- Categorias em tons distintos de azul; categoria selecionada fica mais escura.
- Período de meia diária aparece na confirmação e no texto dos e-mails como Manhã/Tarde.
- Após confirmar, o arquivo de agenda é gerado e iniciado automaticamente.
- Inserção silenciosa em Google Calendar de contas remotas exige backend/OAuth; nesta demo local a automação possível é o disparo automático do arquivo `.ics`.

## Versão 1.9 — períodos corrigidos
- Área **Admin > Pedidos** agora possui coluna explícita **Período** para cada item.
- Meias diárias aparecem como **Manhã** ou **Tarde** no pedido do Admin.
- Confirmação do Cliente mostra **Período escolhido** em coluna própria.
- E-mail do Cliente e e-mail do Admin são preparados separadamente e ambos incluem o período em linha própria.
- O banco local da versão 1.8 foi mantido para não apagar pedidos de teste existentes.

## Versão 1.10 — foco automático no cadastro de unidades
- Ao abrir **Admin > Quartos e apartamentos**, o cursor vai automaticamente para **Número / Identificação**.
- Depois de confirmar um novo cadastro, o campo volta a receber o foco automaticamente e fica pronto para a próxima digitação.
- Depois de confirmar uma alteração, a tela também retorna com o foco no campo de nova unidade.
- O armazenamento da versão anterior foi mantido.

## Versão 1.11 — exclusão de pedidos no Admin
- Em **Admin > Pedidos**, o botão **Cancelar pedido** foi substituído por **Excluir pedido**.
- Ao excluir, o pedido é removido definitivamente da página de pedidos.
- Como o pedido é removido do banco local, ele deixa automaticamente de participar dos relatórios.
- A chave de armazenamento do aplicativo foi mantida para preservar o cadastro de quartos/apartamentos já existente.

## Versão 1.12 — pedidos no calendário interno
- Todo pedido confirmado é gravado também em `calendarOrders`, banco persistente do calendário do APP.
- Pedidos antigos existentes são migrados automaticamente para o calendário.
- Ao excluir um pedido no Admin, suas marcações são removidas do calendário e o pedido deixa de participar dos relatórios.
- `Admin > Pedidos` é ordenado por data/hora de criação, sempre do mais recente para o mais antigo.
- O calendário mostra os pedidos dentro do respectivo dia.
- Ao clicar em um pedido no calendário, abre um popup com o pedido completo: cliente, unidade, e-mail, serviços, datas, períodos, quantidades, preços e total.
- A chave do banco local foi mantida, preservando o cadastro de quartos/apartamentos existente.

## Versão 1.13 — capacidade por categoria e período
- Calendário separa visualmente pedidos em **Manhã** e **Tarde**.
- Regra de capacidade: para a mesma data/período, cada categoria aceita apenas **um pedido**.
- Categorias diferentes podem coexistir no mesmo período.
- Itens sem meia diária ocupam os dois períodos do dia para a respectiva categoria.
- Na área Cliente, produtos de meia diária exibem somente períodos realmente disponíveis; período ocupado/fechado desaparece da seleção.
- Se ambos os períodos da categoria estiverem indisponíveis, o botão de adicionar fica desabilitado.
- Antes da confirmação, a disponibilidade é verificada novamente para evitar conflito.
- Dados existentes e cadastro de unidades foram preservados.

## Versão 1.14 — Serviços por período
- Todos os produtos da categoria **Serviços** agora exigem escolha entre **Manhã** e **Tarde**.
- Serviços usam a mesma regra de disponibilidade aplicada às locações de meia diária.
- Se um período já estiver ocupado por outro pedido da categoria Serviços, ele desaparece da seleção do Cliente.
- Categorias diferentes continuam podendo ocupar o mesmo período.
- Se não houver período disponível, o botão de adicionar ao carrinho fica desabilitado.
- A disponibilidade é verificada novamente no momento da confirmação.
- Produtos de Locação que já eram de meia diária continuam funcionando da mesma forma.
- A chave do banco local foi preservada.

## Versão 1.15 — horários de Serviços e capacidade corrigida
- Produtos da categoria **Serviços** usam:
  - Manhã: 09h às 11h
  - Tarde: 13h às 15h
- Locações de meia diária mantêm seus horários anteriores.
- Corrigida a capacidade por categoria/data/período.
- O carrinho agora impede inserir um segundo produto da mesma categoria no mesmo dia e período.
- A confirmação faz uma segunda validação e também bloqueia duplicidade dentro do mesmo pedido.
- Pedidos já existentes no calendário continuam sendo considerados na ocupação.
- Categorias diferentes continuam podendo ocupar o mesmo período.
- Arquivo de agenda `.ics` usa os novos horários corretos dos Serviços.
- O banco local existente foi preservado.

## Versão 1.16 — períodos indisponíveis suprimidos
- Períodos ocupados ou fechados não aparecem mais na seleção do Cliente.
- Ao trocar a data, o dropdown é reconstruído somente com períodos disponíveis.
- Se nenhum período estiver disponível, o dropdown, a quantidade e o botão de adicionar ficam desabilitados.
- Nesse caso é exibida exatamente a mensagem:
  **"Lamentamos mas nesta data e período não há disponibilidade, por favor selecione outra data de sua conveniência."**
- A disponibilidade é validada novamente ao adicionar ao carrinho e ao confirmar o pedido.
- Banco local e cadastros existentes foram preservados.

## Versão 1.17 — correção efetiva da supressão de períodos
A causa foi identificada: a versão anterior considerava somente os pedidos já confirmados no calendário, mas não considerava os períodos já escolhidos no carrinho da compra atual.

Agora:
- períodos já enviados ao carrinho são considerados ocupados provisoriamente;
- ao voltar ao catálogo, o período já escolhido desaparece das opções dos demais produtos da mesma categoria e data;
- se todos os períodos estiverem ocupados ou fechados, a seleção, quantidade e botão ficam desabilitados e a mensagem de indisponibilidade é exibida;
- ao excluir o item do carrinho, o período volta a ficar disponível;
- pedidos confirmados continuam bloqueando os períodos pelo calendário interno.

## Versão 1.18 — Serviço de café, títulos e pacotes
- **Serviço de café** agora exige escolha de período, usando os períodos de Locações.
- Títulos dos produtos foram revisados e padronizados em português, incluindo correções como **Limpeza de WCs**, uso consistente de **2x/4x** e substituição de abreviações `c/` e `s/` por **com** e **sem**.
- Pacotes passam a exigir todas as utilizações antes de ir ao carrinho:
  - pacotes 2x: 2 datas + 2 períodos;
  - pacotes 4x: 4 datas + 4 períodos;
  - pacotes semanais: 5 datas + 5 períodos.
- Pacotes de limpeza usam os períodos de Serviços.
- Pacotes de sala usam os períodos de Locações.
- Cada utilização é validada individualmente contra o calendário e a capacidade da categoria.
- Carrinho, confirmação, Admin, e-mails, calendário interno e arquivo `.ics` mostram/gravam todas as datas e períodos do pacote.
- Banco local existente foi preservado.

## Versão 1.19 — correção efetiva de pacotes, títulos e carrinho
Foi identificada a causa das alterações incompletas: o aplicativo preservava o banco local de versões anteriores. Assim, alterações feitas apenas no catálogo inicial (`seed`) não substituíam os títulos e produtos já gravados no navegador.

Correções:
- Criada uma migração do catálogo já existente no navegador.
- Títulos padrão são atualizados no banco local, não apenas no catálogo inicial.
- Contagem das utilizações de pacotes agora é feita principalmente pelo ID do produto:
  - pacotes 2x = 2 utilizações;
  - pacotes 4x = 4 utilizações;
  - pacotes semanais = 5 utilizações.
- Também há compatibilidade com títulos antigos escritos como `2 x` e `4 x`.
- Novos pacotes de sala com/sem serviço são acrescentados mesmo quando o banco veio de uma versão antiga.
- Títulos padronizados, incluindo `Limpeza express`, `Limpeza de WCs`, `2x`, `4x`, `com serviço` e `sem serviço`.
- Adicionado botão **Excluir tudo** no Carrinho.
- Cadastro de unidades, pedidos e demais dados existentes continuam preservados.

## Versão 1.20 — capacidade compartilhada e Enxoval por período
- Produtos de **Enxoval** agora também exigem seleção de período.
- Enxoval usa os mesmos períodos de Serviços:
  - Manhã: 09h às 11h
  - Tarde: 13h às 15h
- Criado grupo de capacidade compartilhado **Serviços + Enxoval + Pacotes de limpeza**.
- Assim, quando um pacote de limpeza reserva uma data/período, esse período deixa de aparecer também nos produtos de Serviços e Enxoval.
- O inverso também ocorre: uma reserva de Serviços ou Enxoval fecha o mesmo período para pacotes de limpeza.
- Pacotes de sala continuam compartilhando capacidade com Locações.
- Regras valem para carrinho, pedidos confirmados e calendário interno.
- Entradas antigas do calendário recebem migração automática do novo grupo de capacidade.
- Banco local e cadastros existentes foram preservados.

## Versão 1.21 — Pedidos a executar + limpeza de pedidos
- Adicionada área **Admin > Pedidos a executar**.
- O filtro de data inicia sempre com a data atual.
- O relatório mostra somente as execuções marcadas exatamente para a data selecionada.
- Em pacotes com várias datas, apenas a utilização correspondente ao dia filtrado aparece.
- É possível abrir o pedido completo a partir do relatório.
- A versão executa uma limpeza única dos pedidos já existentes e também limpa suas marcações do calendário.
- O cadastro de quartos/apartamentos, produtos, categorias, conta e demais configurações é preservado.

## Versão 1.22 — Serviço de café independente e carrinho bloqueado
- **Serviço de café** passou a ter grupo de capacidade próprio.
- Reservas de sala/locações não bloqueiam mais o Serviço de café.
- O Serviço de café continua dependendo da disponibilidade do seu próprio período.
- Entradas antigas do calendário são migradas para a nova regra, inclusive pedidos de café anteriormente gravados como Locações.
- No Carrinho, nenhum produto que dependa de disponibilidade de data/período permite alterar quantidade.
- Isso inclui Serviços, Enxoval, Serviço de café, Locações por período e Pacotes.
- Para alterar quantidade desses itens, o cliente deve excluir o item e selecioná-lo novamente no Catálogo.
- Itens sem dependência de disponibilidade continuam editáveis no Carrinho.
- Banco local, quartos, conta e demais cadastros foram preservados.

## Versão 1.23 - PDFs e revisão dos relatórios
- **Pedidos a executar** ganhou botão **Exportar PDF**, sempre respeitando a data filtrada.
- A página **Relatórios** foi revisada e reativada.
- Cada quadro possui:
  - caixa **Selecionar para PDF**;
  - botão **PDF deste quadro**.
- É possível marcar vários quadros e usar **Gerar PDF dos selecionados** para consolidá-los em um único arquivo.
- Quadros disponíveis: resumo mensal, vendas por categoria, vendas por produto, últimos 3 meses, comparativo anual e mesmo mês do ano anterior.
- Exportação CSV foi mantida.
- Geração de PDF utiliza jsPDF carregado antes do aplicativo.
- Banco local e cadastros existentes foram preservados.

## Versão 1.24 — relatórios, datas e cabeçalho dos PDFs
- Corrigida a página **Relatórios**: a função de pedidos ativos havia sido removida em uma atualização anterior e causava erro ao abrir a página.
- PDFs agora exibem no cabeçalho:
  - logo Versátil;
  - nome **APP SERVIÇOS VERSÁTIL**;
  - título do relatório.
- Datas apresentadas ao usuário e nos PDFs/e-mails foram padronizadas para `dia/mês/ano`.
- Campos nativos de seleção de data continuam usando o formato técnico exigido pelo navegador internamente, mas a apresentação nos relatórios, pedidos, confirmação e PDFs usa o formato brasileiro/europeu.
- Exportação PDF de **Pedidos a executar** e dos quadros da página **Relatórios** foi mantida.
- Banco local e cadastros existentes foram preservados.

## Versão 1.25 — gráficos nos Relatórios
- Cada quadro da página **Relatórios** recebeu um gráfico de colunas.
- Gráficos incluídos em:
  - Resumo do período;
  - Vendas por categoria;
  - Vendas por produto;
  - Últimos 3 meses;
  - Comparativo anual;
  - Mesmo mês do ano anterior.
- Os gráficos são gerados diretamente pelo aplicativo, sem biblioteca externa adicional.
- Exportações CSV/PDF e demais funcionalidades foram preservadas.

## Versão 1.26 — gráficos nos PDFs, seleção em massa e filtro por data
- Os PDFs dos Relatórios agora levam **os dados e o gráfico de colunas** de cada quadro selecionado.
- O PDF individual de cada quadro também inclui seu gráfico.
- Adicionados botões **Selecionar tudo** e **Desmarcar tudo**.
- Adicionado filtro dos Relatórios por:
  - **Dia**
  - **Mês**
  - **Ano**
- O filtro afeta o resumo, vendas por categoria e vendas por produto.
- Os comparativos usam o período selecionado como referência.
- O comparativo com o ano anterior acompanha o mesmo tipo de filtro escolhido.
- Logo e nome do APP permanecem no cabeçalho dos PDFs.
- Banco local e cadastros existentes foram preservados.

## Versão 1.27 — filtros combináveis, gráficos modernizados e PDF em duas colunas
- A página Relatórios agora possui três filtros independentes:
  - Dia
  - Mês
  - Ano
- Os filtros podem ser usados isoladamente, em pares ou combinando os três.
- Adicionado botão **Limpar filtros**.
- Os gráficos em tela foram redesenhados com aparência mais moderna, fundo graduado, linhas-guia e colunas com profundidade visual.
- Os PDFs passam a organizar cada quadro em duas colunas:
  - esquerda: dados do relatório;
  - direita: gráfico de colunas correspondente.
- O gráfico deixa de aparecer abaixo dos dados no PDF.
- PDFs individuais e PDFs consolidados usam o novo layout.
- Selecionar tudo / Desmarcar tudo foram mantidos.
- Banco local e demais dados existentes foram preservados.

## Versão 1.28 — responsividade para celular
- Adicionado `viewport` adequado para smartphones.
- Menus, filtros, formulários, botões e cards passam a se reorganizar em 1 ou 2 colunas conforme a largura da tela.
- Tabelas ganham rolagem horizontal em telas pequenas para não quebrar o layout.
- Calendário mantém todas as informações e passa a permitir rolagem horizontal no celular.
- Modais foram ajustados para ocupar quase toda a largura da tela.
- Campos e botões foram ampliados para melhor uso por toque.
- Inputs usam tamanho de fonte adequado para evitar zoom automático no iPhone.
- Gráficos continuam responsivos e podem rolar horizontalmente quando necessário.
- O banco local e todos os cadastros existentes foram preservados.

## Versão 1.29 — envio real de e-mails
- Conectado ao Google Apps Script:
  `https://script.google.com/macros/s/AKfycbwzCLmpeiIs2rluomRVUNTJ_yXDv2oj1zSXcX376hTOPgyRcfzVX5r7l5oGamiTQnJddw/exec`
- Ao confirmar um pedido, o APP envia automaticamente os dados ao Apps Script.
- O Apps Script recebe cliente, unidade, itens, datas, períodos, quantidades e total.
- Foi mantido o registro local dos dados de e-mail.
- Em **Admin > Conta** existe um botão para disparar um teste de integração.
- Próxima etapa: criar/remover eventos automaticamente no Google Calendar.

## Versão 1.30 — botão de teste de e-mail corrigido
- Corrigida a tela **Admin > Conta**.
- Adicionado bloco visível **Integração de e-mail**.
- Adicionado botão **Testar envio de e-mail**.
- O teste usa o e-mail de recuperação da conta; se estiver vazio, usa o primeiro e-mail Admin.
- O botão mostra estado de envio e confirma o destinatário após o disparo.
- Mantida a integração automática de e-mail ao confirmar pedidos.
- Banco local e demais cadastros existentes foram preservados.

## Versão 1.31 — integração com Google Calendar
- A confirmação do pedido continua acionando o Apps Script, que agora também cria os eventos no Google Calendar.
- Cada data/período de pedidos e pacotes vira um evento individual.
- Ao excluir um pedido no Admin, o aplicativo envia `deleteOrder` ao Apps Script para remover os eventos correspondentes do Google Calendar.
- O pedido também é removido do calendário interno e dos relatórios.
- Banco local e demais cadastros foram preservados.

## Versão 1.32
- E-mails HTML com logo Versátil, cores do APP e texto enxuto.
- Envio Admin separado para anibal@starlis.com.br e versatil@starlis.com.br.
- Serviço de café renomeado para Serviço de café na sala.
- Calendário com Atualizar, gestão por item/categoria, datas em lote e estados Aberto/Parcial/Fechado.
- Fechamentos retiram imediatamente a disponibilidade no catálogo do Cliente.
- Fechamentos/reaberturas são sincronizados com o Google Calendar via Apps Script.
- Arquivo APPS_SCRIPT_v1_32.gs incluído para substituir o código atual do Apps Script e republicar a implantação.

## Versão 1.33 — correções
- Logo dos e-mails agora é incorporada como imagem inline (CID) pelo Apps Script.
- E-mails Admin enviados individualmente aos dois endereços configurados.
- Incluída função `testarEmailsAdministrativosV133` para comprovar os dois envios.
- Botão Atualizar do calendário exibe confirmação.
- Locações diárias: qualquer fechamento de período torna o produto indisponível no dia inteiro.
- Fechamentos de produtos/categorias também afetam pacotes que contenham esses itens.
- Bloqueios continuam sincronizados com Google Calendar.
- Incluída função `testarBloqueioCalendarioV133` para criar um bloqueio visível de teste.

## Versão 1.34 — fechamento corrigido e aplicativo limpo
- Limpeza única ao abrir esta versão:
  - pedidos removidos;
  - carrinho removido;
  - marcações do calendário interno removidas;
  - fechamentos anteriores removidos.
- Ao clicar em um período com fechamento, o popup mostra **somente as categorias/produtos que causaram aquele fechamento**, permitindo selecionar quais reabrir.
- Locações sem venda por período são tratadas como **diária completa**: se manhã OU tarde estiver fechada/ocupada, o produto fica indisponível no dia.
- Pacotes possuem mapeamento explícito para seus produtos-base; fechamento do produto/categoria correspondente afeta cada utilização do pacote.
- Incluído `APPS_SCRIPT_v1_34.gs`.
- Incluída função `limparMarcacoesVersatilV134` para remover do Google Calendar somente eventos rastreados pelo APP Serviços Versátil.

## Versão 1.35
- Fechamentos somente em datas futuras.
- Locações diárias ficam indisponíveis no dia inteiro se qualquer período for fechado.
- Quantidade de locações diárias fixada em 1 no catálogo e carrinho.
- Pacotes de diária de sala herdando fechamento do produto/categoria base por utilização.
- Nova limpeza única de pedidos, calendário interno e fechamentos.
- Sincronização com Google Calendar reforçada; recria evento se o ID anterior estiver obsoleto.
- Testes V135 de bloqueio/reabertura e limpeza de marcações incluídos no Apps Script.

## Versão 1.36
- Churrasqueiras com e sem serviço são explicitamente tratadas como locações diárias.
- Se qualquer período for fechado para Locações, churrasqueira diária fica indisponível no dia inteiro.
- Adicionado botão `Sincronizar Google Calendar` para reenviar todos os fechamentos atuais.
- Adicionado botão `Reenviar pendências` para repetir tentativas registradas localmente.
- Apps Script registra as ações recebidas e inclui `statusIntegracaoV136`.
- Teste `testarBloqueioChurrasqueiraV136` cria um bloqueio visível para Locações em data futura.
- Teste `testarReaberturaChurrasqueiraV136` remove esse bloqueio.

## Versão 1.37
- Recuperação de senha agora envia e-mail real via Apps Script, exclusivamente para `anibal@starlis.com.br`.
- `anibal@starlis.com.br` é o e-mail principal; `versatil@starlis.com.br` é secundário.
- Sincronização de fechamentos usa POST simplificado para reduzir falhas do navegador/GitHub Pages.
- Incluídos `diagnosticarSincronizacaoCalendarioV137` e `testarRecuperacaoSenhaV137`.

## Versão 1.38
- Corrigido erro `ReferenceError: escapeHtml is not defined` na recuperação de senha.
- A função passa a usar `escaparHtml`, que já existe no Apps Script.
- Incluído teste `testarRecuperacaoSenhaV138`.

## Versão 1.39 — correção de tela branca / cache
- Arquivos `app.js` e `style.css` recebem versão na URL para evitar carregamento de cópia antiga.
- Service Worker atualizado para estratégia network-first nos arquivos principais.
- Caches das versões anteriores são removidos na ativação do novo Service Worker.
- Adicionada tela de diagnóstico caso ocorra erro de inicialização, evitando página totalmente branca.
- A correção de recuperação de senha da v1.38 foi preservada.

## Versão 1.40 — correção definitiva da tela branca
- Identificado o erro real: o `app.js` carregava normalmente, mas não executava `render()` ao final da inicialização.
- Adicionado `bootVersatilV140()` para montar a tela de acesso automaticamente após o DOM estar pronto.
- Adicionada mensagem visível caso haja qualquer erro real durante a inicialização.
- Corrigido o favicon 404 usando `logo-versatil.jpg`.
- Mantidas as correções de recuperação de senha e integrações das versões anteriores.
- O Apps Script não precisa ser atualizado para esta versão, pois a alteração é somente no front-end/GitHub Pages.

## Versão 1.41 — URL da implantação corrigida
- O aplicativo estava apontando para uma implantação antiga do Google Apps Script.
- Nova implantação de produção configurada:
  `https://script.google.com/macros/s/AKfycbxxn_Oo355Xlel9W6Oc3SKNFIJeesZc0jyTVesvUDdv8LSEDtFq8p-IlHjRvL_JFCvREw/exec`
- Esta correção afeta recuperação de senha, sincronização de fechamentos e demais chamadas ao Apps Script.
- Não é necessário alterar o Apps Script se a implantação Versão 9 já contém o código atual.

## Versão 1.42 — auditoria de disponibilidade
- Locações diárias ocupam sempre Manhã e Tarde para fins de capacidade.
- Churrasqueiras com e sem serviço, salas diárias e moto diária são consideradas diária completa.
- Pacotes baseados em sala diária também ocupam o dia inteiro em cada utilização.
- Fechamento de qualquer período elimina a disponibilidade da diária completa.
- A confirmação do pedido repete a validação de disponibilidade para evitar reserva com dados desatualizados.
- Carrinho e pedidos existentes são considerados na validação de ambos os períodos para diárias.
- Adicionado botão `Verificar regras` no Calendário Admin.
- Não há alteração necessária no Apps Script nesta versão.

## Versão 1.43 — resposta ao solicitante
- O e-mail de pedido recebido pelos administradores mostra o e-mail do solicitante em destaque.
- O endereço do solicitante é clicável.
- Os e-mails administrativos usam `Reply-To` igual ao e-mail do solicitante; portanto, o botão Responder do Gmail/Outlook responde diretamente ao cliente.
- `anibal@starlis.com.br` continua como principal e `versatil@starlis.com.br` como secundário.
- Mantida a correção `jsonResponse` na recuperação de senha.
- Incluído teste `testarEmailPedidoComRespostaV143`.

## Versão 1.44 — versão visível
- Exibe `v1.44` em todas as páginas.
- Indicador pequeno, cinza e discreto.
- Posicionado sempre no canto inferior direito.
- Não interfere em cliques ou navegação.
- Responsivo no celular.
- Nenhuma alteração funcional no Apps Script.

## Versão 1.45 — proteção de dados e versão sempre visível
- Removidas definitivamente as rotinas antigas `cleanForV134` e `cleanForV135` que apagavam pedidos/calendário em determinadas instalações.
- Nenhuma atualização futura deve apagar dados locais automaticamente.
- `v1.45` é inserida diretamente no `index.html`, aparecendo desde a página inicial, mesmo antes do JavaScript carregar.
- Mantida também a atualização dinâmica da versão.
- Esta versão não consegue restaurar dados locais que já tenham sido apagados pelo navegador; restauração depende de existir cópia em outro navegador/dispositivo, backup/exportação ou armazenamento ainda preservado.

## Versão 1.46 — cadastro oficial de unidades e preços da moto
- Cadastro-base atualizado para 77 unidades, conforme a lista fornecida.
- As unidades já existentes com o mesmo número preservam o ID anterior quando possível.
- Nenhum pedido, conta, fechamento ou outro dado é apagado por esta migração.
- Moto elétrica diária: **R$ 160,00** para quarto e apartamento.
- Moto elétrica meia diária: **R$ 90,00** para quarto e apartamento.
- `v1.46` continua visível desde a página de entrada.
- Não é necessário atualizar o Apps Script nesta versão.

## Versão 1.47 — lista de unidades atualizada
- Cadastro-base atualizado para 79 unidades.
- Incluídos `501B` e `502A`, que não constavam na lista anterior.
- Mantidos os preços corrigidos da moto: diária R$ 160,00 e meia diária R$ 90,00.
- A migração preserva IDs de unidades já existentes quando o número coincide.
- Nenhuma rotina de limpeza automática.
- Não é necessário atualizar o Apps Script nesta versão.

## Versão 1.48 — unidades corrigidas
- Cadastro-base atualizado para 81 unidades.
- Incluídos `208A` e `208B`.
- Mantidos `501A`, `501B`, `502A` e `502B`.
- Mantidos os preços corrigidos da moto: diária R$ 160,00 e meia diária R$ 90,00.
- Migração preserva IDs existentes quando o número da unidade coincide.
- Nenhuma rotina automática de limpeza foi adicionada.
- Não é necessário atualizar o Apps Script.

## Versão 1.49
- Serviço de café não é afetado por fechamentos manuais do calendário, inclusive fechamento da categoria Locações ou Todos os itens.
- Café continua sujeito apenas à sua própria capacidade por período/pedidos.
- Valores e descrição atualmente personalizados do café são preservados no banco local e salvos como padrão local ao editar o produto.
- Google Calendar passa a criar pedidos e bloqueios explicitamente no fuso `America/Cuiaba`.
- Horários usados no Google Calendar seguem o APP:
  - Serviços/Enxoval: 09:00–11:00 e 13:00–15:00.
  - Locações por período: 06:00–12:00 e 13:00–19:00.
  - Locações diárias sem período: 06:00–19:00.
- Títulos dos produtos podem ser alterados clicando diretamente no título na página Produtos/Preços do Admin.
- Página Produtos/Preços ganhou filtro por categoria.
- Incluídos `diagnosticarFusoHorarioV149` e `testarHorarioCuiabaV149` no Apps Script.

## Versão 1.50 — aplicativo instalável no celular
- APP configurado como PWA instalável.
- Android/Chrome/Edge: botão `Instalar aplicativo` aparece quando o navegador libera a instalação.
- iPhone/iPad: botão mostra instruções para `Compartilhar → Adicionar à Tela de Início`.
- Ícones próprios 192×192, 512×512 e maskable.
- Ao instalar, o app abre em modo standalone, como aplicativo.
- Service Worker permite abrir a estrutura básica do app mesmo quando a rede estiver momentaneamente indisponível.
- Envio de e-mail e sincronização com Google Calendar continuam exigindo internet.
- Os dados administrativos permanecem no armazenamento do próprio site/aparelho; não limpar os dados do site sem antes ter uma cópia/backup.
- Não é necessário atualizar o Apps Script nesta versão.

## v1.51 — base central
Produtos, categorias, unidades e disponibilidade passam a ser compartilhados por uma Google Planilha criada automaticamente pelo Apps Script. O app consulta a base ao abrir. Alterações do Admin são publicadas na base. Pedidos também são gravados na aba ORDERS. Execute `inicializarBaseCentralV151`, atualize a implantação e depois use `Admin > Visão geral > Publicar alterações`.

## v1.52 — sincronização móvel reforçada
- Mantém JSONP como primeira tentativa de leitura da base central.
- Se o navegador móvel bloquear/falhar na leitura JSONP, usa automaticamente uma ponte invisível por iframe + postMessage.
- A ponte é somente para leitura dos dados públicos do aplicativo.
- Corrige casos em que a v1.51 aparecia como `Modo local/offline` no celular mesmo com o backend funcionando.
- Apps Script deve ser atualizado e a implantação deve receber uma nova versão.

## v1.53 — sincronização móvel sem parâmetros
- O celular passa a ler a base central pela URL simples `/exec`, sem `?action=...`.
- O Apps Script responde com HtmlOutput e envia a base por `postMessage`.
- Isso contorna celulares que abrem `/exec`, mas falham quando a URL contém parâmetros.
- As rotas com `?action=centralStatus` e `?action=bootstrapPublic` são mantidas apenas para diagnóstico.
- Atualize o Apps Script e gere uma nova versão da mesma implantação.

## v1.54 — publicação automática da base no GitHub
- O app deixa de ler a base pública diretamente do Apps Script.
- Todos os clientes passam a ler `data.json` no mesmo domínio GitHub Pages.
- Ao salvar alterações públicas no Admin, o Apps Script atualiza a planilha central e publica automaticamente `data.json` no GitHub usando a API oficial.
- É necessário criar um Fine-grained Personal Access Token no GitHub com acesso somente ao repositório `app-servicos-versatil` e permissão `Contents: Read and write`.
- O token é salvo em Script Properties, não no código público do GitHub.
- Funções de configuração/teste: `definirTokenGitHubV154`, `testarPublicacaoGitHubV154`, `statusPublicacaoGitHubV154`.

## v1.55 — sincronização multi-dispositivo
- O computador, navegador e PWA atualizam `data.json` ao abrir, ao voltar para a aba, ao recuperar internet e a cada 60 segundos enquanto estiverem em uso.
- O selo `Base pública atualizada` agora é clicável para forçar atualização imediata.
- O selo mostra também a data/hora da última publicação carregada.
- Após o Admin publicar uma alteração, o próprio aparelho tenta reler a base pública automaticamente.
- Evita situações em que um aparelho já esteja na versão correta, mas continue exibindo valores antigos até uma recarga manual.

## v1.56 — catálogo simplificado para clientes
- Ao entrar no Catálogo, o cliente vê somente as categorias.
- Ao selecionar uma categoria, as demais desaparecem.
- A categoria escolhida fica no topo.
- Botão `Trocar de categoria` no topo e no fim da lista, com aparência idêntica e alinhamento à direita.
- Produtos exibidos em lista compacta com preço e texto `Clique para ver a composição`.
- A seta dos produtos replica o estilo preto do seletor de período.
- Ao clicar no produto, abre descrição, quantidade, data, período e botão `Enviar para o carrinho`.
- Ao enviar para o carrinho, o item fecha e o cliente permanece na lista de produtos da categoria.
- O menu Carrinho mostra a quantidade de itens.
- Toda a lógica existente de preço, disponibilidade, diárias, pacotes, carrinho e base pública foi preservada.
- Apps Script muda somente a versão central para 1.56.

## v1.57 — carrinho mobile
- Barra de rolagem horizontal reforçada e permanentemente disponível na área rolável do carrinho.
- No celular, aparece a indicação discreta `← Deslize para ver todos os dados →`.
- Botões `Excluir` ficam compactos.
- `Excluir tudo` fica compacto e alinhado à direita, acompanhando a coluna de exclusão.
- `Excluir tudo` pede confirmação antes de esvaziar o carrinho.
- Mantém o catálogo simplificado e toda a sincronização da v1.56.

## v1.58 — correção efetiva do carrinho
- Corrigido o motivo pelo qual a v1.57 não alterava visualmente o carrinho: o HTML real da tabela não possuía o wrapper/classes que a regra CSS anterior esperava.
- A tabela agora fica dentro de uma área horizontal explicitamente rolável.
- Barra horizontal reforçada no celular.
- Aviso `← Deslize para ver todos os dados →`.
- `Excluir tudo` foi movido para o cabeçalho da mesma coluna onde ficam os botões `Excluir`.
- `Excluir tudo` e `Excluir` têm o mesmo tamanho compacto.
- Mantida confirmação antes de excluir todo o carrinho.

## v1.59 — economia nos pacotes promocionais
- Somente na categoria `Pacotes promocionais`, logo abaixo do preço aparece `Você poupará R$ XX,XX`.
- O valor é calculado automaticamente por: `(preço do produto-base × número de utilizações) − preço do pacote`.
- Exemplo: produto avulso R$ 50,00 × 2 = R$ 100,00; pacote R$ 90,00; economia exibida R$ 10,00.
- Se não houver economia positiva, a mensagem não é exibida.
- Nenhuma outra regra, layout ou comportamento do aplicativo foi alterado.

## v1.60 — persistência das alterações
Corrige o caso em que um preço recém-editado voltava ao valor anterior enquanto o GitHub Pages ainda servia um `data.json` antigo. O aplicativo marca a publicação como pendente e não deixa uma base anterior sobrescrever a alteração. O status mostra `Publicando alterações…` até a nova base chegar.

## v1.61
- Logos sempre quadradas, sem cantos arredondados.
- Saudação no cabeçalho com o nome do acesso.
- Signout: `Obrigado por seu pedido,` / `até breve, Nome.`
- Todos os produtos exigem no mínimo 24h de antecedência, considerando horário/período em Cuiabá.
- Diarista não possui período e não bloqueia o dia inteiro.
- Aviso destacado ao hóspede para solicitações do dia de hoje.
- Botões com efeito visual de pressionamento.
- Botão `Publicar alterações` repetido nas páginas administrativas editáveis; páginas de consulta permanecem sem ele.

## v1.62 — cabeçalho fixo, espera visual e conta
- `Publicar alterações` existe apenas uma vez, fixo no cabeçalho do Admin.
- O botão `Publicar alterações` tem a mesma altura do botão `Sair`.
- A saudação fica branca e, no celular, ocupa duas linhas para evitar sobreposição.
- A logo permanece quadrada.
- Ações com espera podem usar o loader da logo sendo montada em blocos estilo Tetris.
- A sincronização inicial, publicação e salvamento da Conta exibem o loader.
- A página Conta recebeu olho para mostrar/ocultar senha.
- O salvamento da Conta foi refeito para persistir nome, senha, e-mail de recuperação e e-mails de pedidos, com confirmação visual.
- Mantidas todas as regras da v1.61, inclusive antecedência mínima de 24h.

## v1.63 — Lazer e Conveniências
- Nova área somente de consulta no catálogo do cliente.
- Navegação progressiva por Turismo, Conveniências, Alimentação e Espaços de eventos.
- Alimentação usa quatro níveis: Alimentação → Restaurantes/Bares/Lanchonetes → especialidade/tipo → local.
- Cada item final pode mostrar uma foto, descrição, distância, telefone e botão Google Maps.
- Fotos foram priorizadas por fidelidade: fachada/local real quando localizada; quando a entrada é uma especialidade genérica, imagem literal do produto (ex.: espeto, pizza, peixe, hambúrguer), evitando imagens abstratas.

## v1.64 — Lazer e Conveniências integrado à base pública e ao Admin
- Corrige a v1.63 para que `Lazer e Conveniências` apareça sempre no Catálogo do Cliente.
- Inclui a estrutura completa fornecida para Turismo, Conveniências, Alimentação e Espaços de eventos (228 registros entre menus e locais).
- Alimentação mantém níveis adicionais: Restaurantes/Bares/Lanchonetes → especialidade/tipo → estabelecimento.
- Nova página Admin `Lazer e Conveniências` com inclusão, edição e exclusão de menus, submenus e locais.
- Cada local pode editar: nome, descrição, distância, telefone, URL da foto e busca/link do Google Maps.
- Exclusão de um menu exclui também os itens contidos nele, mediante confirmação.
- O botão `Publicar alterações` continua único e fixo no cabeçalho do Admin.
- `leisureGuide` passa a fazer parte da base pública e do `data.json`.
- Apps Script cria automaticamente a planilha `LEISURE` na primeira leitura, usando a estrutura inicial quando ainda estiver vazia.
- Corrigido o horário mostrado em `Base pública atualizada`: toda publicação GitHub recebe um novo `publishedAt` e também atualiza `updatedAt`.
- Imagens reais previamente verificadas foram preservadas; quando não havia uma foto específica confiável, foi usada imagem literal da especialidade quando possível ou o campo ficou administrável para substituição.

## FIX v1.64 — atualização do PWA
- Corrigido `APP_VERSION` dentro de `app.js`, que ainda estava marcado como `1.63`.
- O botão `Atualizar agora` agora remove service workers e caches antigos antes de recarregar.
- Novo cache-buster `1642` força o navegador/PWA a buscar `app.js` e `style.css` novamente.
- A versão pública continua sendo `1.64`; não é necessário mudar o Apps Script novamente por causa deste fix.

## FIX v1.64 — identificação visual da versão
- Corrigidos dois textos hard-coded restantes em `app.js` que ainda exibiam `v1.63`.
- O `APP_VERSION` já estava 1.64, mas o badge inferior e a mensagem de console ainda estavam fixos em 1.63.
- Cache-buster atualizado para `1643` para forçar o carregamento do arquivo corrigido.

## FIX v1.64 — Catálogo Lazer + saída do Admin
- `Lazer e Conveniências` agora é inserido diretamente como a 5ª opção do Catálogo do Cliente.
- A opção abre a árvore completa `leisureGuidePage()`.
- Mantida a saudação em duas linhas no cabeçalho.
- Signout do Admin alterado para: `Até breve (nome do usuário)!`
- Signout do Cliente permanece: `Obrigado por seu pedido,` / `até breve, Nome.`
- Cache-buster atualizado para `1644`.
