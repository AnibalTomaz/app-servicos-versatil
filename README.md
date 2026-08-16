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
