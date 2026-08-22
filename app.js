const KEY='versatil_services_v1_8';
const GOOGLE_APPS_SCRIPT_URL="https://script.google.com/macros/s/AKfycbxxn_Oo355Xlel9W6Oc3SKNFIJeesZc0jyTVesvUDdv8LSEDtFq8p-IlHjRvL_JFCvREw/exec";
const APP_VERSION='1.82';
const APP_BUILD='1790-reference-icons-exclusive-details';
const DEFAULT_VERSATIL_GUIDE_V173=[{"id":"acomodacoes","name":"Acomodações","icon":"🛌","type":"gallery","items":[{"id":"loft-solo","name":"Loft Solo","description":"1 cama de solteiro","iconKey":"bedSingle"},{"id":"loft-solteiro","name":"Loft Solteiro","description":"2 camas de solteiro","iconKey":"bedSingle","iconCount":2},{"id":"loft-casal","name":"Loft Casal","description":"1 cama de casal","iconKey":"bedDouble"},{"id":"studio-casal","name":"Studio Casal","description":"1 cama de casal","iconKey":"bedDouble"},{"id":"studio-triplo","name":"Studio Triplo casal","description":"1 cama de casal e 1 cama de solteiro","iconKey":"bedDouble","extraBed":"single"},{"id":"master","name":"Master","description":"1 cama de casal maior","iconKey":"bedMaster"},{"id":"apto-2q","name":"Apartamento de 2 quartos","description":"","icon":"🏠"}]},{"id":"areas-comuns","name":"Áreas comuns","icon":"🛋️","type":"gallery","items":[{"id":"sala-reuniao","name":"Sala de reunião","description":"","iconKey":"tableSide"},{"id":"cowork","name":"Espaço cowork","description":"","icon":"💻"},{"id":"lounge","name":"Lounge","description":"","iconKey":"sofaPastel"},{"id":"tv","name":"Sala de TV","description":"","iconKey":"smartTv"}]},{"id":"garagem","name":"Garagem","icon":"🅿️","type":"gallery","items":[{"id":"patios","name":"Pátios","description":"","iconKey":"parking"}]},{"id":"lazer-interno","name":"Lazer","icon":"🏖️","type":"gallery","items":[{"id":"academia","name":"Academia","description":"","iconKey":"weights"},{"id":"piscina","name":"Piscina","description":"","iconKey":"pool"},{"id":"churrasqueira","name":"Churrasqueira","description":"","iconKey":"skewer"}]},{"id":"comodidades","name":"Comodidades","icon":"🛎️","type":"text","items":[{"id":"c1","name":"Portaria 24h","description":"Portaria 24h","icon":"🕒"},{"id":"c2","name":"Estacionamento coberto (uma vaga por reserva)","description":"Estacionamento coberto (uma vaga por reserva)","iconKey":"parking"},{"id":"c3","name":"Wifi","description":"Wifi","icon":"📶"},{"id":"c4","name":"Dois elevadores panorâmicos","description":"Dois elevadores panorâmicos","iconKey":"elevator"},{"id":"c5","name":"Loja de conveniência no local","description":"Loja de conveniência no local","iconKey":"store24"},{"id":"c6","name":"Equipe de limpeza e manutenção no local","description":"Equipe de limpeza e manutenção no local","icon":"🧹"},{"id":"c7","name":"Passadoria no 4º andar","description":"Passadoria no 4º andar","iconKey":"iron"},{"id":"c8","name":"Voltagem 110V","description":"Voltagem 110V","icon":"⚡"},{"id":"c9","name":"Áreas externas para fumantes","description":"Áreas externas para fumantes","icon":"🚬"}]},{"id":"normas","name":"Normas gerais","icon":"📖","type":"text","items":[{"id":"n1","name":"Não é permitido fumar nas unidades","description":"Não é permitido fumar nas unidades","icon":"🚭"},{"id":"n2","name":"O pagamento de suas reservas deve ser realizado no check-in","description":"O pagamento de suas reservas deve ser realizado no check-in","icon":"💲"},{"id":"n3","name":"Vaga de garagem","description":"As vagas de garagem destinam-se exclusivamente ao estacionamento dos veículos dos Condôminos proprietários as mesmas, sendo permitido o uso de uma vaga por apartamento, não podendo ser vendidas, emprestadas ou alugadas a terceiros não condôminos no edifício.","icon":"🚗"},{"id":"n4","name":"Não dispomos de vagas para visitantes","description":"Não dispomos de vagas para visitantes","iconKey":"noCar"},{"id":"n5","name":"Não aceitamos Pets","description":"Não são permitidos animais no condomínio.","iconKey":"noDog"},{"id":"n6","name":"Churrasqueira e sala de reunião","description":"churrasqueira, sala de reunião. São espaços alugados mediante agendamento prévio com o concierge.","icon":"🔑"},{"id":"n7","name":"Lixos e resíduos","description":"Coletar o lixo e detritos em sacos plásticos e colocá-los em local indicado pelo síndico e /ou administrador no horário determinado, uma vez ao dia, e no local onde serão coletados pelo funcionário do condomínio. (estacionamento do subsolo marcado como ‘SS’ no elevador.)","icon":"⚫"},{"id":"n8","name":"Piscina","description":"Destina-se exclusivamente ao uso dos dos Condôminos as mesmas das 06:00 às 22:00 não podendo ser utilizada por terceiros não condôminos no edifício.","iconKey":"pool"},{"id":"n9","name":"Lei do silêncio","description":"Não fazer barulho que possa incomodar os vizinhos, tendo como parâmetro a legislação municipal vigente. LEI Nº 3819 DE 15 DE JANEIRO DE 1999 – Art. 1º É vedado perturbar o sossego e o bem estar público com ruídos, sons excessivos ou incômodos de qualquer natureza, produzidos por qualquer forma ou que contrariem os níveis máximos fixados nesta Lei.\n\n- Não usar em qualquer hora, alto-falante, piano, rádio, toca-fitas ou quaisquer outros instrumentos sonoros em condições que venham a causar incômodo aos demais condôminos ou moradores;\n- Não é permitido o uso de caixas de som ou semelhantes, ou qualquer meio de poluição sonora na piscina ou áreas sociais","iconKey":"noMegaphone"}]},{"id":"mensalista","name":"Morador mensalista","icon":"✍️","type":"text","items":[{"id":"m1","name":"Morador mensalista","description":"Sem necessidade de fiador ou caução você pode se hospedar mensalmente conosco e ter todos os benefícios oferecidos pelo Versátil, como: Água, gás, internet, condomínio incluso em todas as modalidades. Energia cobrada à parte em algumas unidades. Converse conosco! (65) 2121 3300","icon":"🏠"}]}];
const DEFAULT_VERSATIL_GUIDE_V171=[{"id":"acomodacoes","name":"Acomodações","icon":"bed","type":"gallery","items":[{"id":"loft-solo","name":"Loft Solo","description":"1 cama de solteiro","icon":"🛏️"},{"id":"loft-solteiro","name":"Loft Solteiro","description":"2 camas de solteiro","icon":"🛏️🛏️"},{"id":"loft-casal","name":"Loft Casal","description":"1 cama de casal","icon":"🛌"},{"id":"studio-casal","name":"Studio Casal","description":"1 cama de casal","icon":"🛌"},{"id":"studio-triplo","name":"Studio Triplo casal","description":"1 cama de casal e 1 cama de solteiro","icon":"🛌🛏️"},{"id":"master","name":"Master","description":"1 cama de casal maior","icon":"🛌"},{"id":"apto-2q","name":"Apartamento de 2 quartos","description":"","icon":"🏠"}]},{"id":"areas-comuns","name":"Áreas comuns","icon":"🛋️","type":"gallery","items":[{"id":"sala-reuniao","name":"Sala de reunião","description":"","icon":"🪑🟥🪑"},{"id":"cowork","name":"Espaço cowork","description":"","icon":"💻"},{"id":"lounge","name":"Lounge","description":"","icon":"🛋️"},{"id":"tv","name":"Sala de TV","description":"","icon":"📺"}]},{"id":"garagem","name":"Garagem","icon":"🅿️","type":"gallery","items":[{"id":"patios","name":"Pátios","description":"","icon":"🅿️"}]},{"id":"lazer-interno","name":"Lazer","icon":"🏖️","type":"gallery","items":[{"id":"academia","name":"Academia","description":"","icon":"🏋️"},{"id":"piscina","name":"Piscina","description":"","icon":"🏊"},{"id":"churrasqueira","name":"Churrasqueira","description":"","icon":"🍢"}]},{"id":"comodidades","name":"Comodidades","icon":"🛎️","type":"text","items":[{"id":"c1","name":"Portaria 24h","description":"Portaria 24h","icon":"🕒"},{"id":"c2","name":"Estacionamento coberto (uma vaga por reserva)","description":"Estacionamento coberto (uma vaga por reserva)","icon":"🅿️"},{"id":"c3","name":"Wifi","description":"Wifi","icon":"📶"},{"id":"c4","name":"Dois elevadores panorâmicos","description":"Dois elevadores panorâmicos","icon":"⬆️⬇️"},{"id":"c5","name":"Loja de conveniência no local","description":"Loja de conveniência no local","icon":"🏠24h"},{"id":"c6","name":"Equipe de limpeza e manutenção no local","description":"Equipe de limpeza e manutenção no local","icon":"🧹"},{"id":"c7","name":"Passadoria no 4º andar","description":"Passadoria no 4º andar","icon":"♨️"},{"id":"c8","name":"Voltagem 110V","description":"Voltagem 110V","icon":"⚡"},{"id":"c9","name":"Áreas externas para fumantes","description":"Áreas externas para fumantes","icon":"🚬"}]},{"id":"normas","name":"Normas gerais","icon":"📖","type":"text","items":[{"id":"n1","name":"Não é permitido fumar nas unidades","description":"Não é permitido fumar nas unidades","icon":"🚭"},{"id":"n2","name":"O pagamento de suas reservas deve ser realizado no check-in","description":"O pagamento de suas reservas deve ser realizado no check-in","icon":"💲"},{"id":"n3","name":"Vaga de garagem","description":"As vagas de garagem destinam-se exclusivamente ao estacionamento dos veículos dos Condôminos proprietários as mesmas, sendo permitido o uso de uma vaga por apartamento, não podendo ser vendidas, emprestadas ou alugadas a terceiros não condôminos no edifício.","icon":"🚗"},{"id":"n4","name":"Não dispomos de vagas para visitantes","description":"Não dispomos de vagas para visitantes","icon":"🚫🚗"},{"id":"n5","name":"Não aceitamos Pets","description":"Não são permitidos animais no condomínio.","icon":"🚫🐕"},{"id":"n6","name":"Churrasqueira e sala de reunião","description":"churrasqueira, sala de reunião. São espaços alugados mediante agendamento prévio com o concierge.","icon":"🔑"},{"id":"n7","name":"Lixos e resíduos","description":"Coletar o lixo e detritos em sacos plásticos e colocá-los em local indicado pelo síndico e /ou administrador no horário determinado, uma vez ao dia, e no local onde serão coletados pelo funcionário do condomínio. (estacionamento do subsolo marcado como ‘SS’ no elevador.)","icon":"🗑️"},{"id":"n8","name":"Piscina","description":"Destina-se exclusivamente ao uso dos dos Condôminos as mesmas das 06:00 às 22:00 não podendo ser utilizada por terceiros não condôminos no edifício.","icon":"🏊"}]},{"id":"mensalista","name":"Morador mensalista","icon":"🏠","type":"text","items":[{"id":"m1","name":"Morador mensalista","description":"Sem necessidade de fiador ou caução você pode se hospedar mensalmente conosco e ter todos os benefícios oferecidos pelo Versátil, como: Água, gás, internet, condomínio incluso em todas as modalidades. Energia cobrada à parte em algumas unidades. Converse conosco! (65) 2121 3300","icon":"🏠"}]}];
const DEFAULT_VERSATIL_GUIDE=[{"id":"acomodacoes","name":"Acomodações","icon":"bed","type":"gallery","items":[{"id":"loft-solo","name":"Loft Solo","description":"1 cama de solteiro","images":["https://images.trvl-media.com/lodging/38000000/37200000/37198900/37198826/w6661h3000x6y0-9582d101.jpg?h=800&impolicy=fcrop&quality=medium&w=1200","https://cf.bstatic.com/xdata/images/hotel/max1024x768/530591456.jpg?hp=1&k=4c274cdf4bd33bdfde8ea7bf40170693d99330afca2b189442e2220b434de99e&o="]},{"id":"loft-solteiro","name":"Loft Solteiro","description":"2 camas de solteiro","images":["https://images.trvl-media.com/lodging/38000000/37200000/37198900/37198826/w6661h3000x6y0-9582d101.jpg?h=800&impolicy=fcrop&quality=medium&w=1200","https://cf.bstatic.com/xdata/images/hotel/max1024x768/530591456.jpg?hp=1&k=4c274cdf4bd33bdfde8ea7bf40170693d99330afca2b189442e2220b434de99e&o="]},{"id":"loft-casal","name":"Loft Casal","description":"1 cama de casal","images":["https://images.trvl-media.com/lodging/38000000/37200000/37198900/37198826/w6661h3000x6y0-9582d101.jpg?h=800&impolicy=fcrop&quality=medium&w=1200","https://cf.bstatic.com/xdata/images/hotel/max1024x768/530591456.jpg?hp=1&k=4c274cdf4bd33bdfde8ea7bf40170693d99330afca2b189442e2220b434de99e&o="]},{"id":"studio-casal","name":"Studio Casal","description":"1 cama de casal","images":["https://images.trvl-media.com/lodging/38000000/37200000/37198900/37198826/w6661h3000x6y0-9582d101.jpg?h=800&impolicy=fcrop&quality=medium&w=1200","https://cf.bstatic.com/xdata/images/hotel/max1024x768/530591456.jpg?hp=1&k=4c274cdf4bd33bdfde8ea7bf40170693d99330afca2b189442e2220b434de99e&o="]},{"id":"studio-triplo","name":"Studio Triplo casal","description":"1 cama king e 1 cama de solteiro","images":["https://images.trvl-media.com/lodging/38000000/37200000/37198900/37198826/w6661h3000x6y0-9582d101.jpg?h=800&impolicy=fcrop&quality=medium&w=1200","https://cf.bstatic.com/xdata/images/hotel/max1024x768/530591456.jpg?hp=1&k=4c274cdf4bd33bdfde8ea7bf40170693d99330afca2b189442e2220b434de99e&o="]},{"id":"master","name":"Master","description":"1 cama King","images":["https://images.trvl-media.com/lodging/38000000/37200000/37198900/37198826/w6661h3000x6y0-9582d101.jpg?h=800&impolicy=fcrop&quality=medium&w=1200","https://cf.bstatic.com/xdata/images/hotel/max1024x768/530591456.jpg?hp=1&k=4c274cdf4bd33bdfde8ea7bf40170693d99330afca2b189442e2220b434de99e&o="]},{"id":"apto-2q","name":"Apartamento de 2 quartos","description":"Apartamento com dois quartos","images":["https://images.trvl-media.com/lodging/38000000/37200000/37198900/37198826/w6661h3000x6y0-9582d101.jpg?h=800&impolicy=fcrop&quality=medium&w=1200","https://cf.bstatic.com/xdata/images/hotel/max1024x768/530591456.jpg?hp=1&k=4c274cdf4bd33bdfde8ea7bf40170693d99330afca2b189442e2220b434de99e&o="]}]},{"id":"areas-comuns","name":"Áreas comuns","icon":"sofa","type":"gallery","items":[{"id":"recepcao","name":"Recepção interna","description":"","images":["https://cf.bstatic.com/xdata/images/hotel/max1024x768/530591456.jpg?hp=1&k=4c274cdf4bd33bdfde8ea7bf40170693d99330afca2b189442e2220b434de99e&o=","https://images.trvl-media.com/lodging/38000000/37200000/37198900/37198826/w6661h3000x6y0-9582d101.jpg?h=800&impolicy=fcrop&quality=medium&w=1200"]},{"id":"sala-reuniao","name":"Sala de reunião","description":"","images":["https://cf.bstatic.com/xdata/images/hotel/max1024x768/530591456.jpg?hp=1&k=4c274cdf4bd33bdfde8ea7bf40170693d99330afca2b189442e2220b434de99e&o=","https://images.trvl-media.com/lodging/38000000/37200000/37198900/37198826/w6661h3000x6y0-9582d101.jpg?h=800&impolicy=fcrop&quality=medium&w=1200"]},{"id":"cowork","name":"Espaço cowork","description":"","images":["https://cf.bstatic.com/xdata/images/hotel/max1024x768/530591456.jpg?hp=1&k=4c274cdf4bd33bdfde8ea7bf40170693d99330afca2b189442e2220b434de99e&o=","https://images.trvl-media.com/lodging/38000000/37200000/37198900/37198826/w6661h3000x6y0-9582d101.jpg?h=800&impolicy=fcrop&quality=medium&w=1200"]},{"id":"lounge","name":"Lounge","description":"","images":["https://cf.bstatic.com/xdata/images/hotel/max1024x768/530591456.jpg?hp=1&k=4c274cdf4bd33bdfde8ea7bf40170693d99330afca2b189442e2220b434de99e&o=","https://images.trvl-media.com/lodging/38000000/37200000/37198900/37198826/w6661h3000x6y0-9582d101.jpg?h=800&impolicy=fcrop&quality=medium&w=1200"]},{"id":"tv","name":"Sala de TV","description":"","images":["https://cf.bstatic.com/xdata/images/hotel/max1024x768/530591456.jpg?hp=1&k=4c274cdf4bd33bdfde8ea7bf40170693d99330afca2b189442e2220b434de99e&o=","https://images.trvl-media.com/lodging/38000000/37200000/37198900/37198826/w6661h3000x6y0-9582d101.jpg?h=800&impolicy=fcrop&quality=medium&w=1200"]}]},{"id":"garagem","name":"Garagem","icon":"car","type":"gallery","items":[{"id":"patios","name":"Pátios","description":"","images":["https://cf.bstatic.com/xdata/images/hotel/max1024x768/530591456.jpg?hp=1&k=4c274cdf4bd33bdfde8ea7bf40170693d99330afca2b189442e2220b434de99e&o=","https://images.trvl-media.com/lodging/38000000/37200000/37198900/37198826/w6661h3000x6y0-9582d101.jpg?h=800&impolicy=fcrop&quality=medium&w=1200"]}]},{"id":"lazer-interno","name":"Lazer","icon":"gym","type":"gallery","items":[{"id":"academia","name":"Academia","description":"","images":["https://cf.bstatic.com/xdata/images/hotel/max1024x768/530591456.jpg?hp=1&k=4c274cdf4bd33bdfde8ea7bf40170693d99330afca2b189442e2220b434de99e&o=","https://images.trvl-media.com/lodging/38000000/37200000/37198900/37198826/w6661h3000x6y0-9582d101.jpg?h=800&impolicy=fcrop&quality=medium&w=1200"]},{"id":"piscina","name":"Piscina","description":"","images":["https://images.trvl-media.com/lodging/38000000/37200000/37198900/37198826/9d32d0c9.jpg?impolicy=resizecrop&ra=fill&rh=575&rw=575","https://images.trvl-media.com/lodging/38000000/37200000/37198900/37198826/w6661h3000x6y0-9582d101.jpg?h=800&impolicy=fcrop&quality=medium&w=1200"]},{"id":"churrasqueira","name":"Churrasqueira","description":"","images":["https://cf.bstatic.com/xdata/images/hotel/max1024x768/530591456.jpg?hp=1&k=4c274cdf4bd33bdfde8ea7bf40170693d99330afca2b189442e2220b434de99e&o=","https://images.trvl-media.com/lodging/38000000/37200000/37198900/37198826/w6661h3000x6y0-9582d101.jpg?h=800&impolicy=fcrop&quality=medium&w=1200"]}]},{"id":"comodidades","name":"Comodidades","icon":"bell","type":"text","items":[{"id":"c1","name":"Portaria 24h","description":""},{"id":"c2","name":"Estacionamento coberto (uma vaga por reserva)","description":""},{"id":"c3","name":"Wifi","description":""},{"id":"c4","name":"Dois elevadores panorâmicos","description":""},{"id":"c5","name":"Loja de conveniência no local","description":""},{"id":"c6","name":"Equipe de limpeza e manutenção no local","description":""},{"id":"c7","name":"Passadoria no 4º andar","description":""},{"id":"c8","name":"Voltagem 110V","description":""},{"id":"c9","name":"Áreas externas para fumantes","description":""}]},{"id":"normas","name":"Normas gerais","icon":"book","type":"text","items":[{"id":"n1","name":"Não é permitido fumar nas unidades","description":""},{"id":"n2","name":"O pagamento de suas reservas deve ser realizado no check-in","description":""},{"id":"n3","name":"Uma vaga de garagem por reserva","description":""},{"id":"n4","name":"Não dispomos de vagas para visitantes","description":""},{"id":"n5","name":"Não aceitamos pets","description":""},{"id":"n6","name":"Uso de churrasqueira e sala de reunião apenas por locação","description":""}]},{"id":"mensalista","name":"Morador mensalista","icon":"pen","type":"text","items":[{"id":"m1","name":"Morador mensalista","description":"Sem necessidade de fiador ou caução você pode se hospedar mensalmente conosco e ter todos os benefícios oferecidos pelo Versátil, como: Água, gás, internet, condomínio incluso em todas as modalidades. Energia cobrada à parte em algumas unidades. Converse conosco! (65) 2121 3300"}]}];
const DEFAULT_STARLIS_GUIDE=[{"id":"delmond","name":"Delmond Hotel","image":"https://delmond.com.br/wp-content/uploads/2021/12/fachada-frente-hotel-delmond-19.jpg","description":"Sofisticação, acomodações bem equipadas, gastronomia e estrutura de lazer e eventos.","map":"Delmond Hotel Cuiabá","reserve":"https://www.starlis.com.br"},{"id":"delcas","name":"Delcas Hotel","image":"https://delcashotel.com.br/wp-content/uploads/2025/11/delcas-fachada-print-1.png","description":"Localização, lazer, conforto e gastronomia para viagens a negócios ou lazer.","map":"Delcas Hotel Cuiabá","reserve":"https://www.starlis.com.br"},{"id":"hotel365","name":"Hotel 365","image":"https://hotel365.com.br/wp-content/uploads/2025/11/fachada-at.jpg","description":"Hospedagem funcional com conforto, praticidade e boa relação custo-benefício.","map":"Hotel 365 Cuiabá","reserve":"https://www.starlis.com.br"},{"id":"versatil","name":"Versátil","image":"https://cf.bstatic.com/xdata/images/hotel/max1024x768/530591456.jpg?hp=1&k=4c274cdf4bd33bdfde8ea7bf40170693d99330afca2b189442e2220b434de99e&o=","description":"Esperamos que esteja gostando de estar conosco. Qualquer coisa basta avisar a portaria e faremos o possível para atendê-lo","map":"Starlis Home Versátil Cuiabá","reserve":""}];
const DEFAULT_POSTAL_CONFIG={"address":"Rua Presidente Afonso Pena, 282 – Quilombo – Cuiabá – CEP: 78.043-505","phone":"(65) 2121 3300","site":"https://www.starlis.com.br","message":"Caro amigo(a) estou em Cuiabá, ficando no Versátil e estou adorando o lugar. Envio este postal pois lembrei de você durante minha viagem. Espero que estejas bem, mande notícias!","couponText":"Use meu cupom de desconto e ganhe um up-grade na sua reserva","frontFaçade":"https://cf.bstatic.com/xdata/images/hotel/max1024x768/530591456.jpg?hp=1&k=4c274cdf4bd33bdfde8ea7bf40170693d99330afca2b189442e2220b434de99e&o=","frontRoom":"https://images.trvl-media.com/lodging/38000000/37200000/37198900/37198826/w6661h3000x6y0-9582d101.jpg?h=800&impolicy=fcrop&quality=medium&w=1200","frontPool":"https://images.trvl-media.com/lodging/38000000/37200000/37198900/37198826/9d32d0c9.jpg?impolicy=resizecrop&ra=fill&rh=575&rw=575"};
const CENTRAL_SYNC_TIMEOUT_MS=12000;
let centralDataStatus='carregando';
let centralLastSyncAt=0;
let centralSyncInFlight=false;
const PENDING_PUBLICATION_KEY='versatil_pending_publication';
const seed={
 account:{recoveryEmail:'anibal@starlis.com.br',adminEmails:['anibal@starlis.com.br','versatil@starlis.com.br'],adminName:'Anibal',adminPassword:'1234'},
 rooms:[{"id":"unit_101","name":"Apartamento 101","number":"101","type":"apartamento"},{"id":"unit_102","name":"Apartamento 102","number":"102","type":"apartamento"},{"id":"unit_103","name":"Apartamento 103","number":"103","type":"apartamento"},{"id":"unit_104","name":"Apartamento 104","number":"104","type":"apartamento"},{"id":"unit_105","name":"Apartamento 105","number":"105","type":"apartamento"},{"id":"unit_106","name":"Apartamento 106","number":"106","type":"apartamento"},{"id":"unit_107","name":"Apartamento 107","number":"107","type":"apartamento"},{"id":"unit_108a","name":"Quarto 108A","number":"108A","type":"quarto"},{"id":"unit_108b","name":"Quarto 108B","number":"108B","type":"quarto"},{"id":"unit_201","name":"Apartamento 201","number":"201","type":"apartamento"},{"id":"unit_202","name":"Apartamento 202","number":"202","type":"apartamento"},{"id":"unit_203","name":"Apartamento 203","number":"203","type":"apartamento"},{"id":"unit_204","name":"Apartamento 204","number":"204","type":"apartamento"},{"id":"unit_205","name":"Apartamento 205","number":"205","type":"apartamento"},{"id":"unit_206","name":"Apartamento 206","number":"206","type":"apartamento"},{"id":"unit_207a","name":"Quarto 207A","number":"207A","type":"quarto"},{"id":"unit_207b","name":"Quarto 207B","number":"207B","type":"quarto"},{"id":"unit_208a","name":"Quarto 208A","number":"208A","type":"quarto"},{"id":"unit_208b","name":"Quarto 208B","number":"208B","type":"quarto"},{"id":"unit_301a","name":"Quarto 301A","number":"301A","type":"quarto"},{"id":"unit_301b","name":"Quarto 301B","number":"301B","type":"quarto"},{"id":"unit_302a","name":"Quarto 302A","number":"302A","type":"quarto"},{"id":"unit_302b","name":"Quarto 302B","number":"302B","type":"quarto"},{"id":"unit_303a","name":"Quarto 303A","number":"303A","type":"quarto"},{"id":"unit_303b","name":"Quarto 303B","number":"303B","type":"quarto"},{"id":"unit_304","name":"Apartamento 304","number":"304","type":"apartamento"},{"id":"unit_305a","name":"Quarto 305A","number":"305A","type":"quarto"},{"id":"unit_305b","name":"Quarto 305B","number":"305B","type":"quarto"},{"id":"unit_306a","name":"Quarto 306A","number":"306A","type":"quarto"},{"id":"unit_306b","name":"Quarto 306B","number":"306B","type":"quarto"},{"id":"unit_307a","name":"Quarto 307A","number":"307A","type":"quarto"},{"id":"unit_307b","name":"Quarto 307B","number":"307B","type":"quarto"},{"id":"unit_308a","name":"Quarto 308A","number":"308A","type":"quarto"},{"id":"unit_308b","name":"Quarto 308B","number":"308B","type":"quarto"},{"id":"unit_401a","name":"Quarto 401A","number":"401A","type":"quarto"},{"id":"unit_401b","name":"Quarto 401B","number":"401B","type":"quarto"},{"id":"unit_402a","name":"Quarto 402A","number":"402A","type":"quarto"},{"id":"unit_402b","name":"Quarto 402B","number":"402B","type":"quarto"},{"id":"unit_403a","name":"Quarto 403A","number":"403A","type":"quarto"},{"id":"unit_403b","name":"Quarto 403B","number":"403B","type":"quarto"},{"id":"unit_404a","name":"Quarto 404A","number":"404A","type":"quarto"},{"id":"unit_404b","name":"Quarto 404B","number":"404B","type":"quarto"},{"id":"unit_405a","name":"Quarto 405A","number":"405A","type":"quarto"},{"id":"unit_405b","name":"Quarto 405B","number":"405B","type":"quarto"},{"id":"unit_406a","name":"Quarto 406A","number":"406A","type":"quarto"},{"id":"unit_406b","name":"Quarto 406B","number":"406B","type":"quarto"},{"id":"unit_407a","name":"Quarto 407A","number":"407A","type":"quarto"},{"id":"unit_407b","name":"Quarto 407B","number":"407B","type":"quarto"},{"id":"unit_408a","name":"Quarto 408A","number":"408A","type":"quarto"},{"id":"unit_408b","name":"Quarto 408B","number":"408B","type":"quarto"},{"id":"unit_501a","name":"Quarto 501A","number":"501A","type":"quarto"},{"id":"unit_501b","name":"Quarto 501B","number":"501B","type":"quarto"},{"id":"unit_502a","name":"Quarto 502A","number":"502A","type":"quarto"},{"id":"unit_502b","name":"Quarto 502B","number":"502B","type":"quarto"},{"id":"unit_503a","name":"Quarto 503A","number":"503A","type":"quarto"},{"id":"unit_503b","name":"Quarto 503B","number":"503B","type":"quarto"},{"id":"unit_504a","name":"Quarto 504A","number":"504A","type":"quarto"},{"id":"unit_504b","name":"Quarto 504B","number":"504B","type":"quarto"},{"id":"unit_505a","name":"Quarto 505A","number":"505A","type":"quarto"},{"id":"unit_505b","name":"Quarto 505B","number":"505B","type":"quarto"},{"id":"unit_506a","name":"Quarto 506A","number":"506A","type":"quarto"},{"id":"unit_506b","name":"Quarto 506B","number":"506B","type":"quarto"},{"id":"unit_507a","name":"Quarto 507A","number":"507A","type":"quarto"},{"id":"unit_507b","name":"Quarto 507B","number":"507B","type":"quarto"},{"id":"unit_508","name":"Apartamento 508","number":"508","type":"apartamento"},{"id":"unit_601a","name":"Quarto 601A","number":"601A","type":"quarto"},{"id":"unit_601b","name":"Quarto 601B","number":"601B","type":"quarto"},{"id":"unit_602a","name":"Quarto 602A","number":"602A","type":"quarto"},{"id":"unit_602b","name":"Quarto 602B","number":"602B","type":"quarto"},{"id":"unit_603a","name":"Quarto 603A","number":"603A","type":"quarto"},{"id":"unit_603b","name":"Quarto 603B","number":"603B","type":"quarto"},{"id":"unit_604a","name":"Quarto 604A","number":"604A","type":"quarto"},{"id":"unit_604b","name":"Quarto 604B","number":"604B","type":"quarto"},{"id":"unit_605a","name":"Quarto 605A","number":"605A","type":"quarto"},{"id":"unit_605b","name":"Quarto 605B","number":"605B","type":"quarto"},{"id":"unit_606a","name":"Quarto 606A","number":"606A","type":"quarto"},{"id":"unit_606b","name":"Quarto 606B","number":"606B","type":"quarto"},{"id":"unit_607a","name":"Quarto 607A","number":"607A","type":"quarto"},{"id":"unit_607b","name":"Quarto 607B","number":"607B","type":"quarto"},{"id":"unit_608a","name":"Quarto 608A","number":"608A","type":"quarto"},{"id":"unit_608b","name":"Quarto 608B","number":"608B","type":"quarto"}],
 categories:[
  {id:'servicos',name:'Serviços',icon:'🧹',description:'Selecione aqui o serviço desejado.'},
  {id:'enxoval',name:'Enxoval',icon:'🛏️',description:'Selecione aqui o tipo de enxoval que deseja trocar.'},
  {id:'locacoes',name:'Locações',icon:'🔑',description:'Selecione aqui o espaço/ítem de sua preferência.'},
  {id:'pacotes',name:'Pacotes promocionais',icon:'🎁',description:'Selecione o pacote mais vantajoso para a sua estada.'}
 ],
 products:[
  {id:'diarista',cat:'servicos',name:'Diarista',icon:'🧹',desc:'Limpeza completa, vidros, louças, troca de enxoval de cama e toalhas, reposição de amenidades e papel higiênico',q:230,a:260},
  {id:'limpeza-padrao',cat:'servicos',name:'Limpeza padrão',icon:'✨',desc:'Limpeza completa, vidros, troca de enxoval de cama e toalhas, reposição de amenidades e papel higiênico',q:140,a:235},
  {id:'limpeza-express',cat:'servicos',name:'Limpeza Express',icon:'⚡',desc:'Limpeza de pisos e WC´s, troca de toalhas, reposição de amenidades e papel higiênico',q:110,a:140},
  {id:'limpeza-wc',cat:'servicos',name:'Limpeza de WCs',icon:'🚿',desc:'Limpeza de WC, troca de toalhas, reposição de amenidades e papel higiênico',q:80,a:110},
  {id:'troca-geral',cat:'enxoval',name:'Troca geral de cama e toalhas',icon:'🛏️',desc:'Todos os lençóis, fronhas, edredon, toalhas de banho, piso e rosto serão trocadas.',q:28,a:45},
  {id:'troca-cama',cat:'enxoval',name:'Troca de roupa de cama',icon:'🛌',desc:'Todos os lençóis, fronhas e edredon serão trocados.',q:15,a:20},
  {id:'troca-toalhas',cat:'enxoval',name:'Troca de toalhas',icon:'🧺',desc:'Todas as toalhas de banho, rosto e piso serão trocadas.',q:13,a:25},
  {id:'churras-serv',cat:'locacoes',name:'Locação de churrasqueira com serviço',icon:'🔥',desc:'Locação do espaço com grelha/parrilha, utensílios, descartáveis, gás, fogão e limpeza.',q:450,a:450},
  {id:'churras-sem',cat:'locacoes',name:'Locação de churrasqueira sem serviço',icon:'🍖',desc:'Locação do espaço com grelha/parrilha, utensílios, panelas, gás, fogão e limpeza.',q:300,a:300},
  {id:'sala-dia-serv',cat:'locacoes',name:'Locação diária de sala de reunião com serviço',icon:'🏢',desc:'Locação do espaço, máquina de café e 8 xícaras, açúcar, adoçante, água mineral, descartáveis e limpeza de louça ao meio dia.',q:400,a:400},
  {id:'sala-dia-sem',cat:'locacoes',name:'Locação diária de sala de reunião sem serviço',icon:'🗓️',desc:'Apenas a locação do espaço está compreendida nesta modalidade.',q:300,a:300},
  {id:'sala-meio-serv',cat:'locacoes',name:'Locação de sala de reunião por meia diária com serviço',icon:'🕘',desc:'Locação do espaço, máquina de café e 8 xícaras, pó de café, açúcar, adoçante, água mineral e descartáveis.',q:250,a:250,halfDay:true},
  {id:'sala-meio-sem',cat:'locacoes',name:'Locação de sala de reunião por meia diária sem serviço',icon:'🕐',desc:'Apenas a locação do espaço está compreendida nesta modalidade.',q:150,a:150,halfDay:true},
  {id:'cafe',cat:'locacoes',name:'Serviço de café na sala',icon:'☕',desc:'Máquina de café e 8 xícaras, pó de café, açúcar, adoçante.',q:80,a:80},
  {id:'moto-dia',cat:'locacoes',name:'Locação diária de moto elétrica',icon:'🛵',desc:'Locação do veículo com capacete.',q:160,a:160},
  {id:'moto-meio',cat:'locacoes',name:'Locação de moto elétrica por meia diária',icon:'⚡',desc:'Locação do veículo com capacete. Das 6 às 12h ou das 13 às 19h.',q:90,a:90,halfDay:true},
  {id:'pkg-diarista2',cat:'pacotes',name:'Pacote de diarista 2x',icon:'🎁',desc:'Duas faxinas dentro do período de sua hospedagem.',q:400,a:400},
  {id:'pkg-padrao2',cat:'pacotes',name:'Pacote de limpeza padrão 2x',icon:'🎁',desc:'Duas limpezas dentro do período de sua hospedagem.',q:240,a:240},
  {id:'pkg-padrao4',cat:'pacotes',name:'Pacote de limpeza padrão 4x',icon:'🎁',desc:'Quatro limpezas dentro do período de sua hospedagem.',q:400,a:400},
  {id:'pkg-express2',cat:'pacotes',name:'Pacote de limpeza express 2x',icon:'🎁',desc:'Duas limpezas dentro do período de sua hospedagem.',q:200,a:200},
  {id:'pkg-express4',cat:'pacotes',name:'Pacote de limpeza express 4x',icon:'🎁',desc:'Quatro limpezas dentro do período de sua hospedagem.',q:380,a:380},
  {id:'pkg-wc2',cat:'pacotes',name:'Pacote de limpeza de WCs 2x',icon:'🎁',desc:'Duas limpezas dentro do período de sua hospedagem.',q:150,a:150},
  {id:'pkg-wc4',cat:'pacotes',name:'Pacote de limpeza de WCs 4x',icon:'🎁',desc:'Quatro limpezas dentro do período de sua hospedagem.',q:280,a:280},
  {id:'pkg-sala2-serv',cat:'pacotes',name:'Pacote de locação de sala 2x com serviço',icon:'🎁',desc:'Duas diárias de sala com serviço dentro do período de sua hospedagem.',q:750,a:750},
  {id:'pkg-sala2-sem',cat:'pacotes',name:'Pacote de locação de sala 2x sem serviço',icon:'🎁',desc:'Duas diárias de sala sem serviço dentro do período de sua hospedagem.',q:550,a:550},
  {id:'pkg-sala5-serv',cat:'pacotes',name:'Pacote semanal de locação de sala com serviço',icon:'🎁',desc:'Locação de sala por 5 dias corridos com serviço.',q:1800,a:1800},
  {id:'pkg-sala5-sem',cat:'pacotes',name:'Pacote semanal de locação de sala sem serviço',icon:'🎁',desc:'Locação de sala por 5 dias corridos sem serviço.',q:1250,a:1250}
 ],leisureGuide:[{"id":"lz_002","parentId":"","type":"group","name":"TURISMO","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":2},{"id":"lz_003","parentId":"lz_002","type":"group","name":"Parques","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":3},{"id":"lz_004","parentId":"lz_003","type":"place","name":"Parque Estadual Mãe Bonifácia","description":"","distance":"aprox. 1,8 km","phone":"(65) 3623-4965","imageUrl":"https://photos.wikimapia.org/p/00/00/81/39/19_big.jpg","mapQuery":"Parque Estadual Mãe Bonifácia, Cuiabá MT","sort":4},{"id":"lz_005","parentId":"lz_003","type":"place","name":"Parque das Águas \"Seo Fiote\"","description":"","distance":"aprox. 4,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"https://www.midianews.com.br/storage/webdisco/2017/01/02/886x590/7f1ab3a4177923599e0cf1ff7835e5a8.jpg","mapQuery":"Parque das Águas \"Seo Fiote\", Cuiabá MT","sort":5},{"id":"lz_006","parentId":"lz_003","type":"place","name":"Parque Tia Nair","description":"","distance":"aprox. 6,5 km","phone":"(65) 3645-6279","imageUrl":"https://str1.lnmimg.net/img/2025/08/14/1f0cefb5a82e11c2b291942077129efc.webp","mapQuery":"Parque Tia Nair, Cuiabá MT","sort":6},{"id":"lz_007","parentId":"lz_003","type":"place","name":"Parque Estadual Zé Bolo Flô","description":"","distance":"aprox. 8,5 km","phone":"(65) 98464-8416","imageUrl":"","mapQuery":"Parque Estadual Zé Bolo Flô, Cuiabá MT","sort":7},{"id":"lz_008","parentId":"lz_003","type":"place","name":"Parque Estadual Massairo Okamura","description":"","distance":"aprox. 5,2 km","phone":"(65) 99328-0670","imageUrl":"","mapQuery":"Parque Estadual Massairo Okamura, Cuiabá MT","sort":8},{"id":"lz_009","parentId":"lz_003","type":"place","name":"Parque da Família","description":"","distance":"aprox. 6,0 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Parque da Família, Cuiabá MT","sort":9},{"id":"lz_010","parentId":"lz_003","type":"place","name":"Parque Morro da Luz","description":"","distance":"aprox. 2,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Parque Morro da Luz, Cuiabá MT","sort":10},{"id":"lz_011","parentId":"lz_003","type":"place","name":"Horto Florestal Tote Garcia","description":"","distance":"aprox. 7,2 km","phone":"(65) 3313-3157","imageUrl":"","mapQuery":"Horto Florestal Tote Garcia, Cuiabá MT","sort":11},{"id":"lz_012","parentId":"lz_003","type":"place","name":"Parque da Nascente","description":"","distance":"aprox. 5,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Parque da Nascente, Cuiabá MT","sort":12},{"id":"lz_013","parentId":"lz_003","type":"place","name":"Parque de Exposições Senador Jonas Pinheiro","description":"","distance":"aprox. 4,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Parque de Exposições Senador Jonas Pinheiro, Cuiabá MT","sort":13},{"id":"lz_014","parentId":"lz_002","type":"group","name":"museus","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":14},{"id":"lz_015","parentId":"lz_014","type":"place","name":"Museu de História Natural de Mato Grosso (Casa Dom Aquino)","description":"focado em paleontologia, arqueologia e etnologia, exibindo fósseis e acervos pré-históricos da região.","distance":"aprox. 5,2 km","phone":"(65) 3634-4858","imageUrl":"https://www.secel.mt.gov.br/documents/362998/14597620/Museu%2Bde%2Bhist%C3%B3ria%2Bnatural%2B-%2Bfrente%2Brio%2Bcuiab%C3%A1.jpg/70cbe33e-a4ef-3ae6-70c5-e996e17a8d4c?t=1650471365613","mapQuery":"Museu de História Natural de Mato Grosso (Casa Dom Aquino), Cuiabá MT","sort":15},{"id":"lz_016","parentId":"lz_014","type":"place","name":"Museu de Arte Sacra de Mato Grosso","description":"localizado no antigo Seminário da Conceição, reúne acervo religioso do século XVIII em diante.","distance":"aprox. 3,0 km","phone":"(65) 3056-1373","imageUrl":"https://stppprod01.blob.core.windows.net/pp-prod-container/2021/11/Museu-da-Arte-Sacra.jpg","mapQuery":"Museu de Arte Sacra de Mato Grosso, Cuiabá MT","sort":16},{"id":"lz_017","parentId":"lz_014","type":"place","name":"Museu do Morro da Caixa d'Água Velha","description":"ocupa os antigos reservatórios subterrâneos do século XIX e abriga exposições de arte e acervos históricos.","distance":"aprox. 2,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"https://ihgmt.nyc3.digitaloceanspaces.com/storage/webdisco/2021/08/04/800x600/4960fb9811a9e6e2dc8ba0319d14623d.jpg","mapQuery":"Museu do Morro da Caixa d'Água Velha, Cuiabá MT","sort":17},{"id":"lz_018","parentId":"lz_014","type":"place","name":"Museu da Imagem e do Som de Cuiabá (MISC)","description":"dedicado à preservação do patrimônio audiovisual e fotográfico da cidade.","distance":"aprox. 2,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"https://www.cuiaba.mt.gov.br/storage/webdisco/2025/02/27/original/2025-02-27-17-43-088a9399-67c0dc6c328fc.jpg","mapQuery":"Museu da Imagem e do Som de Cuiabá (MISC), Cuiabá MT","sort":18},{"id":"lz_019","parentId":"lz_014","type":"place","name":"Museu Histórico de Mato Grosso","description":"resgata a história política, social e cultural do estado através de documentos e objetos históricos.","distance":"aprox. 2,6 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Museu Histórico de Mato Grosso, Cuiabá MT","sort":19},{"id":"lz_020","parentId":"lz_014","type":"place","name":"Museu Rondon de Etnologia e Arqueologia (UFMT)","description":"voltado para a preservação e estudo das culturas e povos indígenas.","distance":"aprox. 5,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Museu Rondon de Etnologia e Arqueologia (UFMT), Cuiabá MT","sort":20},{"id":"lz_021","parentId":"lz_014","type":"place","name":"Museu de Arte e Cultura Popular (MACP/UFMT)","description":"reúne um rico acervo de obras plásticas e artesanato da cultura popular mato-grossense.","distance":"aprox. 5,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Museu de Arte e Cultura Popular (MACP/UFMT), Cuiabá MT","sort":21},{"id":"lz_022","parentId":"lz_014","type":"place","name":"Museu do Rio Cuiabá \"Hid Alfredo Scaff\"","description":"situado no antigo Mercado do Peixe, às margens do rio, com acervo sobre a história do bairro do Porto e do rio Cuiabá.","distance":"aprox. 4,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Museu do Rio Cuiabá \"Hid Alfredo Scaff\", Cuiabá MT","sort":22},{"id":"lz_023","parentId":"lz_014","type":"place","name":"Museu Residência dos Governadores","description":"casarão histórico que foi moradia oficial de ex-governadores e hoje expõe mobiliário e acervo da época.","distance":"aprox. 3,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Museu Residência dos Governadores, Cuiabá MT","sort":23},{"id":"lz_024","parentId":"lz_014","type":"place","name":"Museu de Minerais, Rochas e Fósseis (UFMT)","description":"voltado ao estudo geocientífico com amostras registradas de minerais e fósseis.","distance":"aprox. 5,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Museu de Minerais, Rochas e Fósseis (UFMT), Cuiabá MT","sort":24},{"id":"lz_025","parentId":"lz_014","type":"place","name":"Museu das Bonecas e Brinquedos","description":"coleção particular com acervo de bonecas antigas e brinquedos clássicos.","distance":"aprox. 4,0 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Museu das Bonecas e Brinquedos, Cuiabá MT","sort":25},{"id":"lz_026","parentId":"lz_002","type":"group","name":"Aquários","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":26},{"id":"lz_027","parentId":"lz_026","type":"place","name":"Aquário Municipal Justino Malheiros","description":"situado no bairro Porto (às margens do rio Cuiabá, ao lado do Museu do Rio), abriga dezenas de espécies de peixes nativos dos biomas de Mato Grosso, como o Pantanal e a Amazônia (incluindo espécies como pirarucu, dourado, tucunaré e jaú).","distance":"aprox. 4,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Aquário Municipal Justino Malheiros, Cuiabá MT","sort":27},{"id":"lz_028","parentId":"lz_002","type":"group","name":"Marcos geográficos","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":28},{"id":"lz_029","parentId":"lz_028","type":"place","name":"Centro Geodésico da América do Sul","description":"localizado na Praça Pascoal Moreira Cabral, indica o ponto equidistante entre os oceanos Atlântico e Pacífico, determinado pelo Marechal Cândido Rondon.","distance":"aprox. 2,6 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"https://www.folhamax.com/storage/webdisco/2022/09/20/810x519/47ed7c1ec8e843192b65d1a00e13365b.jpg","mapQuery":"Centro Geodésico da América do Sul, Cuiabá MT","sort":29},{"id":"lz_030","parentId":"lz_028","type":"place","name":"Rio Cuiabá","description":"principal curso d'água que corta a cidade, divisor natural de municípios e via histórica de integração do Pantanal.","distance":"aprox. 4,0 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Rio Cuiabá, Cuiabá MT","sort":30},{"id":"lz_031","parentId":"lz_028","type":"place","name":"Morro da Caixa d'Água","description":"ponto elevado no centro urbano que serviu historicamente como reservatório natural e área de captação de água da cidade.","distance":"aprox. 2,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Morro da Caixa d'Água, Cuiabá MT","sort":31},{"id":"lz_032","parentId":"lz_028","type":"place","name":"Morro do Seminário","description":"elevação natural onde se localiza o antigo Seminário da Conceição (atual Museu de Arte Sacra), oferecendo visão panorâmica do centro histórico.","distance":"aprox. 3,0 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Morro do Seminário, Cuiabá MT","sort":32},{"id":"lz_033","parentId":"lz_028","type":"place","name":"Morro da Luz","description":"área de relevo elevado coberta por mata nativa no coração do perímetro urbano.","distance":"aprox. 2,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Morro da Luz, Cuiabá MT","sort":33},{"id":"lz_034","parentId":"lz_028","type":"place","name":"Morro de Santo Antônio","description":"elevação cônica de grande destaque na paisagem do Vale do Rio Cuiabá (localizada no município vizinho de Santo Antônio de Leverger, a cerca de 25 km do centro).","distance":"aprox. 35 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Morro de Santo Antônio, Cuiabá MT","sort":34},{"id":"lz_035","parentId":"lz_028","type":"place","name":"Paredões da Chapada dos Guimarães","description":"formação de escarpas avermelhadas da bacia do Paraná que delimitam a transição entre o planalto e a depressão cuiabana no horizonte da cidade.","distance":"aprox. 65 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Paredões da Chapada dos Guimarães, Cuiabá MT","sort":35},{"id":"lz_036","parentId":"lz_002","type":"group","name":"Locais turísticos","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":36},{"id":"lz_037","parentId":"lz_036","type":"place","name":"Centro Histórico e Catedral Basílica do Bom Jesus","description":"conjunto de casarios coloniais, praças históricas e o principal cartão-postal religioso da capital.","distance":"aprox. 2,6 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Centro Histórico e Catedral Basílica do Bom Jesus, Cuiabá MT","sort":37},{"id":"lz_038","parentId":"lz_036","type":"place","name":"Mercado do Porto","description":"espaço tradicional de gastronomia regional, venda de pescados, temperos e artesanato mato-grossense.","distance":"aprox. 4,0 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"https://www.gov.br/sudeco/pt-br/assuntos/noticias/2020/mercado-do-porto-em-cuiaba-mt-recebe-r-1-5-milhao-para-sua-ampliacao-e-modernizacao/mercado-do-porto_velho.jpg","mapQuery":"Mercado do Porto, Cuiabá MT","sort":38},{"id":"lz_039","parentId":"lz_036","type":"place","name":"Parque das Águas e Parque Mãe Bonifácia","description":"áreas de lazer urbano com trilhas, fauna local e atrações como o Show das Águas.","distance":"aprox. 1,8 a 4,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Parque das Águas e Parque Mãe Bonifácia, Cuiabá MT","sort":39},{"id":"lz_040","parentId":"lz_036","type":"place","name":"Orla do Porto","description":"calçadão às margens do Rio Cuiabá com restaurantes e museus culturais ao redor.","distance":"aprox. 4,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"https://www.midianews.com.br/storage/webdisco/2017/02/16/886x590/7828c9bf8660987ec3b80ccb8c083e31.jpg","mapQuery":"Orla do Porto, Cuiabá MT","sort":40},{"id":"lz_041","parentId":"lz_036","type":"group","name":"Atrações em Nobres (Vila Bom Jardim e Região)","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":41},{"id":"lz_042","parentId":"lz_041","type":"place","name":"Aquário Encantado e Rio Salobra","description":"lagoa azul-cristalina em meio à mata para flutuação com centenas de peixes.","distance":"aprox. 140 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"https://www.cvc.com.br/dicas-de-viagem/wp-content/uploads/2022/04/Aquario-Encantado-768x512.jpg","mapQuery":"Aquário Encantado e Rio Salobra, Cuiabá MT","sort":42},{"id":"lz_043","parentId":"lz_041","type":"place","name":"Cachoeira da Serra Azul","description":"queda d'água de 45 metros com poço azul para banho e acesso por tirolesa.","distance":"aprox. 45 m","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Cachoeira da Serra Azul, Cuiabá MT","sort":43},{"id":"lz_044","parentId":"lz_041","type":"place","name":"Lagoa das Araras","description":"ponto de observação ao entardecer para contemplar araras, maritacas e tucanos nos buritizeiros.","distance":"aprox. 145 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"https://upack.tur.br/wp-content/uploads/2021/06/upack-nobres-lagoa-das-araras.jpg","mapQuery":"Lagoa das Araras, Cuiabá MT","sort":44},{"id":"lz_045","parentId":"lz_041","type":"place","name":"Reino Encantado e Estância Duto do Quebó","description":"rios cristalinos para flutuação e passeios de bóia-cross por cavernas subterrâneas.","distance":"aprox. 143 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Reino Encantado e Estância Duto do Quebó, Cuiabá MT","sort":45},{"id":"lz_046","parentId":"lz_036","type":"group","name":"Parque Nacional da Chapada dos Guimarães (\\~65 km)","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":46},{"id":"lz_047","parentId":"lz_046","type":"place","name":"Cachoeira Véu de Noiva","description":"imponente queda d'água de 86 metros em meio aos paredões.","distance":"aprox. 86 m","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"https://www.vidadeturista.com/wp-content/uploads/2020/11/parque-nacional-chapada-dos-guimaraes-mt-1.jpg","mapQuery":"Cachoeira Véu de Noiva, Cuiabá MT","sort":47},{"id":"lz_048","parentId":"lz_046","type":"place","name":"Cidade de Pedra e Mirante Morro dos Ventos","description":"vista panorâmica dos paredões de arenito avermelhado.","distance":"aprox. 75 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Cidade de Pedra e Mirante Morro dos Ventos, Cuiabá MT","sort":48},{"id":"lz_049","parentId":"lz_046","type":"place","name":"Circuito das Cachoeiras","description":"trilha que passa por diversas quedas e piscinas naturais cristalinas.","distance":"aprox. 70 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Circuito das Cachoeiras, Cuiabá MT","sort":49},{"id":"lz_050","parentId":"lz_046","type":"place","name":"Complexo Turístico da Salgadeira","description":"área de lazer estruturada para banho de rio no pé da serra.","distance":"aprox. 45 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Complexo Turístico da Salgadeira, Cuiabá MT","sort":50},{"id":"lz_051","parentId":"lz_036","type":"group","name":"Portal do Pantanal Norte — Poconé (\\~100 km)","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":51},{"id":"lz_052","parentId":"lz_051","type":"place","name":"Rodovia Transpantaneira","description":"ponto de partida para safáris fotográficos para observação de jacarés, capivaras, tuiuiús e onças-pintadas.","distance":"aprox. 100 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"https://www.sospantanal.org.br/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-20-at-18.10.03-1024x767.jpeg","mapQuery":"Rodovia Transpantaneira, Cuiabá MT","sort":52},{"id":"lz_053","parentId":"lz_051","type":"place","name":"Pousadas Pantaneiras","description":"focagem noturna, cavalgadas ecológicas e passeios de barco pelos corixos.","distance":"aprox. 110 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Pousadas Pantaneiras, Cuiabá MT","sort":53},{"id":"lz_054","parentId":"lz_036","type":"group","name":"Jaciara (\\~140 km)","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":54},{"id":"lz_055","parentId":"lz_054","type":"place","name":"Esportes de Aventura no Rio Tenente Amaral","description":"polo regional de rafting, cachoeirismo e rapel.","distance":"aprox. 145 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Esportes de Aventura no Rio Tenente Amaral, Cuiabá MT","sort":55},{"id":"lz_056","parentId":"lz_054","type":"place","name":"Cachoeira da Fumaça e Balneário Thermas","description":"quedas d'água volumosas e poços para banho.","distance":"aprox. 140 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Cachoeira da Fumaça e Balneário Thermas, Cuiabá MT","sort":56},{"id":"lz_057","parentId":"lz_036","type":"group","name":"Santo Antônio de Leverger (\\~35 km)","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":57},{"id":"lz_058","parentId":"lz_057","type":"place","name":"Morro de Santo Antônio","description":"elevação cônica tradicional para trilhas e caminhadas ecológicas.","distance":"aprox. 35 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Morro de Santo Antônio, Cuiabá MT","sort":58},{"id":"lz_059","parentId":"lz_057","type":"place","name":"Turismo Fluvial","description":"pesca esportiva e restaurantes de peixe à beira do Rio Cuiabá.","distance":"aprox. 35 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Turismo Fluvial, Cuiabá MT","sort":59},{"id":"lz_060","parentId":"","type":"group","name":"CONVENIÊNCIAS","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":60},{"id":"lz_061","parentId":"lz_060","type":"group","name":"Mercados","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":61},{"id":"lz_062","parentId":"lz_061","type":"place","name":"Mercearia / Mercado Mattozo (Mattozo Prime)","description":"tradicional comércio de bairro focado em hortifrúti, mercearia fina e cortes de carnes nobres, localizado na própria Rua Presidente Afonso Pena, no mesmo quarteirão (~100 m).","distance":"aprox. 100 m","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Mercearia / Mercado Mattozo (Mattozo Prime), Cuiabá MT","sort":62},{"id":"lz_063","parentId":"lz_061","type":"place","name":"Supermercado Big Lar (Unidade Miguel Sutil)","description":"referência no bairro Quilombo para hortifrúti fresco, padaria artesanal e alimentos importados (~600 m).","distance":"aprox. 600 m","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Supermercado Big Lar (Unidade Miguel Sutil), Cuiabá MT","sort":63},{"id":"lz_064","parentId":"lz_061","type":"place","name":"Supermercado América (Unidade Santa Helena)","description":"minimercado vizinho focado nas compras diárias de mercearia e produtos essenciais (~800 m).","distance":"aprox. 800 m","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Supermercado América (Unidade Santa Helena), Cuiabá MT","sort":64},{"id":"lz_065","parentId":"lz_061","type":"place","name":"Comper (Unidade Trevo do Santa Rosa / Av. Miguel Sutil)","description":"supermercado completo com açougue, padaria e grande variedade de itens (~1,2 km).","distance":"aprox. 1,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Comper (Unidade Trevo do Santa Rosa / Av. Miguel Sutil), Cuiabá MT","sort":65},{"id":"lz_066","parentId":"lz_061","type":"place","name":"Supermercado Dia a Dia (Unidade Miguel Sutil)","description":"formato atacarejo para compras de médio e grande porte (~1,5 km).","distance":"aprox. 1,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Supermercado Dia a Dia (Unidade Miguel Sutil), Cuiabá MT","sort":66},{"id":"lz_067","parentId":"lz_061","type":"place","name":"Comper (Unidade Av. Barão de Melgaço)","description":"loja tradicional da rede, muito próxima ao limite entre os bairros Goiabeiras e Centro (~1,8 km).","distance":"aprox. 1,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Comper (Unidade Av. Barão de Melgaço), Cuiabá MT","sort":67},{"id":"lz_068","parentId":"lz_061","type":"place","name":"Assaí Atacadista (Unidade Av. CPA / Historiador Rubens de Mendonça)","description":"hipermercado atacarejo de grande porte (~2,8 km).","distance":"aprox. 2,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Assaí Atacadista (Unidade Av. CPA / Historiador Rubens de Mendonça), Cuiabá MT","sort":68},{"id":"lz_069","parentId":"lz_061","type":"place","name":"Atacadão (Unidade Porto / Av. XV de Novembro)","description":"atacarejo tradicional com ampla variedade e foco em preços de volume (~3,5 km).","distance":"aprox. 3,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Atacadão (Unidade Porto / Av. XV de Novembro), Cuiabá MT","sort":69},{"id":"lz_070","parentId":"lz_061","type":"place","name":"Fort Atacadista (Unidade Miguel Sutil)","description":"grande loja no modelo de atacarejo com preços competitivos (~4,2 km).","distance":"aprox. 4,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Fort Atacadista (Unidade Miguel Sutil), Cuiabá MT","sort":70},{"id":"lz_071","parentId":"lz_060","type":"group","name":"Farmácias","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":71},{"id":"lz_072","parentId":"lz_071","type":"place","name":"Drogaria São Paulo (Unidade Av. Miguel Sutil)","description":"loja ampla com funcionamento 24h, grande variedades de dermocosméticos e estacionamento próprio (~700 m).","distance":"aprox. 700 m","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Drogaria São Paulo (Unidade Av. Miguel Sutil), Cuiabá MT","sort":72},{"id":"lz_073","parentId":"lz_071","type":"place","name":"Farmácia Pague Menos (Unidade Av. Getúlio Vargas / Goiabeiras)","description":"excelente opção com programa de descontos e atendimento rápido em via principal (~1,1 km).","distance":"aprox. 1,1 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Farmácia Pague Menos (Unidade Av. Getúlio Vargas / Goiabeiras), Cuiabá MT","sort":73},{"id":"lz_074","parentId":"lz_071","type":"place","name":"Droga Raia (Unidade Av. José Monteiro de Figueiredo / Goiabeiras)","description":"localizada próxima ao Shopping Goiabeiras, conta com linha completa de medicamentos e produtos de cuidados pessoais (~1,2 km).","distance":"aprox. 1,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Droga Raia (Unidade Av. José Monteiro de Figueiredo / Goiabeiras), Cuiabá MT","sort":74},{"id":"lz_075","parentId":"lz_071","type":"place","name":"Drogasil (Unidade Av. Isaac Póvoas / Centro)","description":"farmácia tradicional em corredor movimentado, com programa de fidelidade e fácil acesso (~1,5 km).","distance":"aprox. 1,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Drogasil (Unidade Av. Isaac Póvoas / Centro), Cuiabá MT","sort":75},{"id":"lz_076","parentId":"lz_071","type":"place","name":"Farmácia Preço Popular (Unidade Centro / Tenente Coronel Duarte)","description":"focada em medicamentos genéricos e preços mais acessíveis (~2,1 km).","distance":"aprox. 2,1 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Farmácia Preço Popular (Unidade Centro / Tenente Coronel Duarte), Cuiabá MT","sort":76},{"id":"lz_077","parentId":"lz_060","type":"group","name":"Posto de combustível","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":77},{"id":"lz_078","parentId":"lz_077","type":"place","name":"Auto Posto Miguel Sutil / Vip","description":"localizado na própria margem da via expressa no limite do bairro Quilombo (~500 m).","distance":"aprox. 500 m","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Auto Posto Miguel Sutil / Vip, Cuiabá MT","sort":78},{"id":"lz_079","parentId":"lz_077","type":"place","name":"Posto Shell / Santa Marta","description":"opção completa com combustível aditivado e loja de conveniência próximo ao trevo do Santa Rosa (~1,1 km).","distance":"aprox. 1,1 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Posto Shell / Santa Marta, Cuiabá MT","sort":79},{"id":"lz_080","parentId":"lz_077","type":"place","name":"Posto Petrobras / Millenium","description":"localizado na Miguel Sutil com estrutura para abastecimento rápido e troca de óleo (~1,8 km).","distance":"aprox. 1,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Posto Petrobras / Millenium, Cuiabá MT","sort":80},{"id":"lz_081","parentId":"lz_077","type":"place","name":"Posto Shell / Rede Conti (Rua Estêvão de Mendonça)","description":"excelente localização no coração do Goiabeiras, servindo a quem transita entre o Quilombo e o Centro (~900 m).","distance":"aprox. 900 m","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Posto Shell / Rede Conti (Rua Estêvão de Mendonça), Cuiabá MT","sort":81},{"id":"lz_082","parentId":"lz_077","type":"place","name":"Posto Ipiranga (Av. Getúlio Vargas)","description":"com loja AmPm e serviços completos em uma das principais vias arteriais da capital (~1,3 km).","distance":"aprox. 1,3 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Posto Ipiranga (Av. Getúlio Vargas), Cuiabá MT","sort":82},{"id":"lz_083","parentId":"lz_077","type":"place","name":"Auto Posto Monte Líbano (Av. República do Líbano)","description":"localizado na saída para o bairro Monte Líbano / Rodoviária (~1,6 km).","distance":"aprox. 1,6 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Auto Posto Monte Líbano (Av. República do Líbano), Cuiabá MT","sort":83},{"id":"lz_084","parentId":"lz_077","type":"place","name":"Posto Petrobras / Papai Auto Posto (Rua Marechal Deodoro)","description":"posto bem estruturado no corredor que liga o centro ao setor norte (~2,2 km).","distance":"aprox. 2,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Posto Petrobras / Papai Auto Posto (Rua Marechal Deodoro), Cuiabá MT","sort":84},{"id":"lz_085","parentId":"lz_060","type":"group","name":"Shoppings","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":85},{"id":"lz_086","parentId":"lz_085","type":"place","name":"Shopping Estação Cuiabá","description":"o mais recente e moderno da capital, localizado na Av. Miguel Sutil; conta com amplo mix de lojas, cinema, alameda gourmet com restaurantes prestigiados e estrutura pet friendly.","distance":"aprox. 3,1 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"https://noticiapositiva.com.br/wp-content/uploads/2023/07/shopping-estacao.jpeg","mapQuery":"Shopping Estação Cuiabá, Cuiabá MT","sort":86},{"id":"lz_087","parentId":"lz_085","type":"place","name":"Goiabeiras Shopping","description":"shopping tradicional e sofisticado localizado no bairro Goiabeiras, focado em marcas de alto padrão, serviços, opções gastronômicas e cinema.","distance":"aprox. 1,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"https://www.midianews.com.br/storage/webdisco/2022/06/07/886x590/58197bde5b422b24e3e4ab575aa5f167.jpg","mapQuery":"Goiabeiras Shopping, Cuiabá MT","sort":87},{"id":"lz_088","parentId":"lz_085","type":"place","name":"Pantanal Shopping","description":"grande centro de compras e lazer localizado na Av. Historiador Rubens de Mendonça (Av. do CPA), com grande variedade de lojas âncoras, praça de alimentação e cinema.","distance":"aprox. 4,6 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"https://www.imagens.cuiaba.mt.gov.br/1_shopping_pantanal.jpg","mapQuery":"Pantanal Shopping, Cuiabá MT","sort":88},{"id":"lz_089","parentId":"lz_085","type":"place","name":"Shopping 3 Américas","description":"localizado no bairro Jardim das Américas, atende a região universitária e conta com cinema, opções de lazer, serviços e praça de alimentação completa.","distance":"aprox. 5,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Shopping 3 Américas, Cuiabá MT","sort":89},{"id":"lz_090","parentId":"lz_060","type":"group","name":"Mecânico","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":90},{"id":"lz_091","parentId":"lz_090","type":"place","name":"Auto Mecânica Quilombo","description":"oficina tradicional de bairro focada em reparos mecânicos gerais, motor e câmbio (~600 m).","distance":"aprox. 600 m","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Auto Mecânica Quilombo, Cuiabá MT","sort":91},{"id":"lz_092","parentId":"lz_090","type":"place","name":"Oficina Auto Técnica (Região Central / Goiabeiras)","description":"especializada em mecânica de veículos nacionais e importados, ar-condicionado e parte elétrica (~1,4 km).","distance":"aprox. 1,4 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Oficina Auto Técnica (Região Central / Goiabeiras), Cuiabá MT","sort":92},{"id":"lz_093","parentId":"lz_090","type":"place","name":"Mecânica Ponto Certo (Jardim América)","description":"atende a região com serviços de suspensão, embreagem, motor e diagnóstico preventivo (~1,7 km).","distance":"aprox. 1,7 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Mecânica Ponto Certo (Jardim América), Cuiabá MT","sort":93},{"id":"lz_094","parentId":"lz_090","type":"place","name":"Bosch Car Service (Unidade Miguel Sutil)","description":"oficina multimarcas especializada em injeção eletrônica, diagnóstico computadorizado, freios e suspensão (~800 m).","distance":"aprox. 800 m","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Bosch Car Service (Unidade Miguel Sutil), Cuiabá MT","sort":94},{"id":"lz_095","parentId":"lz_090","type":"place","name":"Mecânica e Centro Automotivo Goiabeiras","description":"focada em manutenção preventiva, troca de óleo, alinhamento, balanceamento e mecânica geral (~1,1 km).","distance":"aprox. 1,1 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Mecânica e Centro Automotivo Goiabeiras, Cuiabá MT","sort":95},{"id":"lz_096","parentId":"lz_090","type":"place","name":"Bono Pneus (Unidade Miguel Sutil / Santa Rosa)","description":"centro automotivo especializado em pneus, alinhamento, suspensão, freios e amortecedores (~1,3 km).","distance":"aprox. 1,3 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Bono Pneus (Unidade Miguel Sutil / Santa Rosa), Cuiabá MT","sort":96},{"id":"lz_097","parentId":"lz_090","type":"place","name":"Dpaschoal (Unidade Av. Miguel Sutil)","description":"especializada em revisão de freios, suspensão, pneus e troca de óleo em via de fácil acesso (~1,5 km).","distance":"aprox. 1,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Dpaschoal (Unidade Av. Miguel Sutil), Cuiabá MT","sort":97},{"id":"lz_098","parentId":"lz_060","type":"group","name":"Cartório","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":98},{"id":"lz_099","parentId":"lz_098","type":"place","name":"1º Ofício de Cuiabá (Cartório do 1º Serviço Notarial e Registral)","description":"especializado em tabelionató de notas, escrituras, procurações, testamentos e autenticações (localizado no bairro Goiabeiras / Santa Helena, ~1,2 km).","distance":"aprox. 1,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"1º Ofício de Cuiabá (Cartório do 1º Serviço Notarial e Registral), Cuiabá MT","sort":99},{"id":"lz_100","parentId":"lz_098","type":"place","name":"2º Ofício de Cuiabá (Cartório do 2º Serviço Notarial e Registral - Virmondes)","description":"atuante no registro de imóveis, títulos e documentos, escrituras e firmas (localizado no bairro Goiabeiras / Centro, ~1,5 km).","distance":"aprox. 1,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"2º Ofício de Cuiabá (Cartório do 2º Serviço Notarial e Registral - Virmondes), Cuiabá MT","sort":100},{"id":"lz_101","parentId":"lz_098","type":"place","name":"3º Ofício de Cuiabá (Cartório do 3º Serviço Notarial e Registral)","description":"focado em notas, protesto de títulos e documentos (localizado na região central, ~2,2 km).","distance":"aprox. 2,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"3º Ofício de Cuiabá (Cartório do 3º Serviço Notarial e Registral), Cuiabá MT","sort":101},{"id":"lz_102","parentId":"lz_098","type":"place","name":"Cartório do 5º Serviço Notarial e Registral (5º Ofício / Coxipó/Centro)","description":"prestação de serviços notariais, autenticações e reconhecimento de firma (localizado próximo ao perímetro central, ~2,6 km).","distance":"aprox. 2,6 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Cartório do 5º Serviço Notarial e Registral (5º Ofício / Coxipó/Centro), Cuiabá MT","sort":102},{"id":"lz_103","parentId":"lz_098","type":"place","name":"Cartório de Registro Civil das Pessoas Naturais (1ª Circunscrição)","description":"responsável por certidões de nascimento, casamento, óbito e emancipação na região central (~2,8 km).","distance":"aprox. 2,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Cartório de Registro Civil das Pessoas Naturais (1ª Circunscrição), Cuiabá MT","sort":103},{"id":"lz_104","parentId":"","type":"group","name":"ALIMENTAÇÃO","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":104},{"id":"lz_105","parentId":"lz_104","type":"group","name":"Restaurantes","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":105},{"id":"lz_106","parentId":"lz_105","type":"group","name":"Massas","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":106},{"id":"lz_107","parentId":"lz_106","type":"place","name":"re Basili – Cucina Italiana","description":"restaurante especializado em massas artesanais e receitas clássicas da culinária italiana (~1,2 km).","distance":"aprox. 1,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"re Basili – Cucina Italiana, Cuiabá MT","sort":107},{"id":"lz_108","parentId":"lz_106","type":"place","name":"Olga Cozinha Italiana","description":"restaurante focado em massas artesanais e gastronomia autêntica no Centro Norte (~1,8 km).","distance":"aprox. 1,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"https://www.tvmaisnews.com.br/imgsite/noticias/amp-WhatsApp-Image-2023-10-09-at-08.31.02.jpeg","mapQuery":"Olga Cozinha Italiana, Cuiabá MT","sort":108},{"id":"lz_109","parentId":"lz_106","type":"place","name":"Due Ladroni","description":"trattoria e restaurante tradicional de massas e gastronomia italiana fina (~2,2 km).","distance":"aprox. 2,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"https://www.olharconceito.com.br/imgsite/noticias/016768/amp-_RFP9776.jpg","mapQuery":"Due Ladroni, Cuiabá MT","sort":109},{"id":"lz_110","parentId":"lz_106","type":"place","name":"3 Santi Ristorante Italiano","description":"opção dedicada às massas artesanais, molhos clássicos e risotos (~2,8 km).","distance":"aprox. 2,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"3 Santi Ristorante Italiano, Cuiabá MT","sort":110},{"id":"lz_111","parentId":"lz_106","type":"place","name":"Abbraccio Cucina Italiana (Shopping Estação Cuiabá)","description":"rede inspirada nas cantinas italianas, famosa pelas massas e grelhados na Av. Miguel Sutil (~3,1 km).","distance":"aprox. 3,1 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Abbraccio Cucina Italiana (Shopping Estação Cuiabá), Cuiabá MT","sort":111},{"id":"lz_112","parentId":"lz_106","type":"place","name":"Casa Nonna (Jardim das Américas)","description":"focado em massas tradicionais, rotisseria e comida de família estilo cantina (~5,5 km).","distance":"aprox. 5,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Casa Nonna (Jardim das Américas), Cuiabá MT","sort":112},{"id":"lz_113","parentId":"lz_105","type":"group","name":"Peixes","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":113},{"id":"lz_114","parentId":"lz_113","type":"place","name":"Leme de Brasa (Região do Quilombo / Goiabeiras)","description":"oferece cortes de peixes nobres assados na brasa, além de acompanhamentos tradicionais da culinária regional (~1,1 km).","distance":"aprox. 1,1 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Leme de Brasa (Região do Quilombo / Goiabeiras), Cuiabá MT","sort":114},{"id":"lz_115","parentId":"lz_113","type":"place","name":"Peixaria e Restaurante Popular (Região Central)","description":"opção tradicional focada no prato feito de peixe frito, mojica de pintado e ensopados (~1,8 km).","distance":"aprox. 1,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Peixaria e Restaurante Popular (Região Central), Cuiabá MT","sort":115},{"id":"lz_116","parentId":"lz_113","type":"place","name":"Peixaria Leme (Orla do Porto)","description":"uma das mais tradicionais da cidade, famosa pelo rodízio de peixes e pratos típicos como ventrecha de pacu e matrinxã recheada (~3,2 km).","distance":"aprox. 3,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Peixaria Leme (Orla do Porto), Cuiabá MT","sort":116},{"id":"lz_117","parentId":"lz_113","type":"place","name":"Peixaria do Mário (Região do Porto)","description":"especializada na culinária cuiabana com peixes frescos do Rio Cuiabá, servidos fritos, assados e em ensopados (~3,4 km).","distance":"aprox. 3,4 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Peixaria do Mário (Região do Porto), Cuiabá MT","sort":117},{"id":"lz_118","parentId":"lz_113","type":"place","name":"Peixaria Porto das Águas (Orla do Porto)","description":"localizada às margens do rio, com vista panorâmica e cardápio focado em pratos regionais de água doce (~3,6 km).","distance":"aprox. 3,6 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Peixaria Porto das Águas (Orla do Porto), Cuiabá MT","sort":118},{"id":"lz_119","parentId":"lz_113","type":"place","name":"Peixaria Mirante das Águas (Várzea Grande - Ponte Sérgio Motta)","description":"restaurante amplo à beira do rio, muito conhecido pelo rodízio completo de peixes pantaneiros (~6,2 km).","distance":"aprox. 6,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Peixaria Mirante das Águas (Várzea Grande - Ponte Sérgio Motta), Cuiabá MT","sort":119},{"id":"lz_120","parentId":"lz_105","type":"group","name":"Carnes","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":120},{"id":"lz_121","parentId":"lz_120","type":"place","name":"Varadero Bar e Restô","description":"especializado em cortes nobres grelhados na brasa, filés altos e acompanhamentos refinados no bairro Goiabeiras (~1,4 km).","distance":"aprox. 1,4 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Varadero Bar e Restô, Cuiabá MT","sort":121},{"id":"lz_122","parentId":"lz_120","type":"place","name":"Grand Cru Cuiabá","description":"bistrô e vinheria com cardápio focado em carnes nobres grelhadas (como ancho e chorizo) harmonizadas com vinhos (~1,8 km).","distance":"aprox. 1,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Grand Cru Cuiabá, Cuiabá MT","sort":122},{"id":"lz_123","parentId":"lz_120","type":"place","name":"Outback Steakhouse (Shopping Estação Cuiabá)","description":"famoso pelas ribs (costela de porco com molho barbecue), steaks temperados e cortes no estilo australiano (~3,1 km).","distance":"aprox. 3,1 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"https://www.rdnews.com.br/storage/webdisco/2019/02/06/1024x656/e0b8d8912dc0b250e2339d191acedfb5.jpg","mapQuery":"Outback Steakhouse (Shopping Estação Cuiabá), Cuiabá MT","sort":123},{"id":"lz_124","parentId":"lz_120","type":"place","name":"Madero Steakhouse (Shopping Estação Cuiabá)","description":"especializado em carnes na brasa à la carte, como picanha, filé-mignon e hambúrgueres artesanais (~3,1 km).","distance":"aprox. 3,1 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Madero Steakhouse (Shopping Estação Cuiabá), Cuiabá MT","sort":124},{"id":"lz_125","parentId":"lz_120","type":"place","name":"Buteco do Manso / Parrilla","description":"focado no preparo de cortes de carne nobres no estilo parrilla argentina/uruguaia na região central/norte (~3,5 km).","distance":"aprox. 3,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Buteco do Manso / Parrilla, Cuiabá MT","sort":125},{"id":"lz_126","parentId":"lz_120","type":"place","name":"Estância Bahia Steakhouse","description":"focado exclusivamente em pratos à la carte com cortes de carnes de altíssima qualidade (~5,2 km).","distance":"aprox. 5,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Estância Bahia Steakhouse, Cuiabá MT","sort":126},{"id":"lz_127","parentId":"lz_120","type":"place","name":"Casarão 154 / Flagship (Bairro Santa Rosa)","description":"a unidade principal e mais robusta, focada em experiência completa, ambiente rústico-industrial, cortes altos na parrilla, coquetelaria e churrasco de defumação (~3,8 km).","distance":"aprox. 3,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Casarão 154 / Flagship (Bairro Santa Rosa), Cuiabá MT","sort":127},{"id":"lz_128","parentId":"lz_105","type":"group","name":"Orientais","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":128},{"id":"lz_129","parentId":"lz_128","type":"place","name":"Yumê — Cozinha Japonesa (Quilombo)","description":"conceito high-end no coração do Quilombo, focado em alta gastronomia autêntica japonesa, ambiente intimista e insumos refinados (~300 m).","distance":"aprox. 300 m","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Yumê — Cozinha Japonesa (Quilombo), Cuiabá MT","sort":129},{"id":"lz_130","parentId":"lz_128","type":"place","name":"Osaka Cozinha Asiática / Nikkei (Unidade Goiabeiras)","description":"uma das maiores referências de luxo da capital, combinando técnicas japonesas e peruanas em ambiente exclusivo (~1,1 km).","distance":"aprox. 1,1 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Osaka Cozinha Asiática / Nikkei (Unidade Goiabeiras), Cuiabá MT","sort":130},{"id":"lz_131","parentId":"lz_128","type":"place","name":"Haru Cozinha Oriental (Praça Popular)","description":"ícone consagrado da alta gastronomia na cidade, com peixes nobres, iguarias como trufas e foie gras, e coquetelaria autoral (~1,3 km).","distance":"aprox. 1,3 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Haru Cozinha Oriental (Praça Popular), Cuiabá MT","sort":131},{"id":"lz_132","parentId":"lz_128","type":"place","name":"Seu Majestade Sushibar (Goiabeiras)","description":"conceito boutique refinado, focado em omakase (menu degustação do chef), cortes de altíssima precisão e ambiente privativo (~1,7 km).","distance":"aprox. 1,7 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Seu Majestade Sushibar (Goiabeiras), Cuiabá MT","sort":132},{"id":"lz_133","parentId":"lz_128","type":"place","name":"Boraê Sushibar (Santa Rosa)","description":"ambiente contemporâneo voltado ao público premium, conhecido pelas combinações autorais com flor de sal e azeites trufados (~2,5 km).","distance":"aprox. 2,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Boraê Sushibar (Santa Rosa), Cuiabá MT","sort":133},{"id":"lz_134","parentId":"lz_128","type":"place","name":"Mahalo Cozinha Criativa (Seção Fusion Asiática)","description":"embora seja focado em cozinha autoral contemporânea, traz entradas e pratos principais com forte fusão e inspiração técnica asiática ultra-premium (~2,5 km).","distance":"aprox. 2,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Mahalo Cozinha Criativa (Seção Fusion Asiática), Cuiabá MT","sort":134},{"id":"lz_135","parentId":"lz_128","type":"place","name":"Gurumê (Shopping Estação Cuiabá)","description":"marca de alta gastronomia oriental contemporânea, famosa pelo design premiado e pratos com vieiras, trufas e insumos nobres (~3,1 km).","distance":"aprox. 3,1 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Gurumê (Shopping Estação Cuiabá), Cuiabá MT","sort":135},{"id":"lz_136","parentId":"lz_128","type":"place","name":"Ikioi Dubai (Ribeirão do Lipa)","description":"focado em alta gastronomia oriental com inspiração high-end internacional, ambiente suntuoso e apresentações exclusivas (~4,0 km).","distance":"aprox. 4,0 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Ikioi Dubai (Ribeirão do Lipa), Cuiabá MT","sort":136},{"id":"lz_137","parentId":"lz_128","type":"place","name":"Osaka Cozinha Asiática / Nikkei (Unidade Jardim das Américas)","description":"expansão do renomado grupo na zona leste, levando o mesmo padrão de luxo, gastronomia Nikkei e ambiente elitizado para a região nobre próximo ao Alphaville (~6,2 km).","distance":"aprox. 6,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Osaka Cozinha Asiática / Nikkei (Unidade Jardim das Américas), Cuiabá MT","sort":137},{"id":"lz_138","parentId":"lz_128","type":"place","name":"K-BBQ & Korean Fine Dining (Região Central / Goiabeiras)","description":"novo destaque do circuito sofisticado de Cuiabá, trazendo a autêntica experiência do churrasco coreano (Korean BBQ) com cortes nobres de carne bovina, marinadas exclusivas e acompanhamentos refinados (banchan) em ambiente moderno e exclusivo (~1,8 km).","distance":"aprox. 1,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"K-BBQ & Korean Fine Dining (Região Central / Goiabeiras), Cuiabá MT","sort":138},{"id":"lz_139","parentId":"lz_105","type":"group","name":"Rodízios","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":139},{"id":"lz_140","parentId":"lz_139","type":"place","name":"Nativas Grill Cuiabá (Jardim Aclimação / Miguel Sutil)","description":"o rodízio mais luxuoso da capital, com amplo bufê de frios, sushi bar e seleção de carnes nobres como ancho, picanha e cordeiro (~1,2 km).","distance":"aprox. 1,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"https://www.midianews.com.br/storage/webdisco/2025/07/29/886x590/cd39a7884dda40e0f7307e076db5b205.jpg","mapQuery":"Nativas Grill Cuiabá (Jardim Aclimação / Miguel Sutil), Cuiabá MT","sort":140},{"id":"lz_141","parentId":"lz_139","type":"place","name":"Grand Grill Cuiabá (Av. Miguel Sutil / Santa Rosa)","description":"rodízio em estilo clássico focado em cortes bovinos nobres, espeto corrido e bufê quente e frio completo (~2,2 km).","distance":"aprox. 2,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Grand Grill Cuiabá (Av. Miguel Sutil / Santa Rosa), Cuiabá MT","sort":141},{"id":"lz_142","parentId":"lz_139","type":"place","name":"Churrascaria Boi Grill (Parque das Águas)","description":"renomada e ampla churrascaria no espeto corrido gaúcho com vista para o parque (~4,8 km).","distance":"aprox. 4,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Churrascaria Boi Grill (Parque das Águas), Cuiabá MT","sort":142},{"id":"lz_143","parentId":"lz_139","type":"place","name":"Churrascaria Gaúcha (Av. Fernando Corrêa)","description":"uma das casas de carne mais tradicionais da capital, mantendo a tradição do espeto corrido (~5,5 km).","distance":"aprox. 5,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Churrascaria Gaúcha (Av. Fernando Corrêa), Cuiabá MT","sort":143},{"id":"lz_144","parentId":"lz_139","type":"place","name":"O Barbosa Ribs (Barbosa Ribs Costelaria) é outra casa bastante lembrada quando o assunto é costela assada. A marca se destaca pelo preparo de costelas bovinas assadas lentamente, focando em porções à la carte fartas, combos e acompanhamentos clássicos (mandioca, farofa e molhos da casa). Localização / Distância","description":"A unidade em Cuiabá fica situada na região do Bosque da Saúde, a cerca de 3,2 km","distance":"aprox. 3,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"O Barbosa Ribs (Barbosa Ribs Costelaria) é outra casa bastante lembrada quando o assunto é costela assada. A marca se destaca pelo preparo de costelas bovinas assadas lentamente, focando em porções à la carte fartas, combos e acompanhamentos clássicos (mandioca, farofa e molhos da casa). Localização / Distância, Cuiabá MT","sort":144},{"id":"lz_145","parentId":"lz_139","type":"place","name":"Churrascaria Zebu (Av. Fernando Corrêa da Costa)","description":"tradicional casa de espeto corrido focada em cortes seletos (~6,1 km).","distance":"aprox. 6,1 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Churrascaria Zebu (Av. Fernando Corrêa da Costa), Cuiabá MT","sort":145},{"id":"lz_146","parentId":"lz_139","type":"place","name":"Churrascaria Gramado (Várzea Grande / Av. FEB)","description":"rodízio amplo com variedade de carnes e pista de frios completa (~9,2 km).","distance":"aprox. 9,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Churrascaria Gramado (Várzea Grande / Av. FEB), Cuiabá MT","sort":146},{"id":"lz_147","parentId":"lz_139","type":"place","name":"Lélis Peixaria (Bairro Goiabeiras)","description":"a peixaria mais prestigiada, elegante e tradicional de Cuiabá, referência absoluta em rodízio de peixes pantaneiros nobres em ambiente sofisticado (~1,4 km).","distance":"aprox. 1,4 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"https://veja.abril.com.br/wp-content/uploads/2017/05/dsc9264.jpg?quality=70&strip=info&w=919","mapQuery":"Lélis Peixaria (Bairro Goiabeiras), Cuiabá MT","sort":147},{"id":"lz_148","parentId":"lz_139","type":"place","name":"Peixaria Leme (Orla do Porto)","description":"tradicionalíssima no circuito cultural, servindo rodízio completo com ventrecha de pacu, matrinxã e mojica de pintado (~3,2 km).","distance":"aprox. 3,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Peixaria Leme (Orla do Porto), Cuiabá MT","sort":148},{"id":"lz_149","parentId":"lz_139","type":"place","name":"Peixaria do Mário (Região do Porto)","description":"rodízio farto com pratos clássicos da culinária cuiabana (~3,4 km).","distance":"aprox. 3,4 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Peixaria do Mário (Região do Porto), Cuiabá MT","sort":149},{"id":"lz_150","parentId":"lz_139","type":"place","name":"Peixaria Porto das Águas (Orla do Porto)","description":"rodízio de peixes de água doce com vista panorâmica para o Rio Cuiabá (~3,6 km).","distance":"aprox. 3,6 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Peixaria Porto das Águas (Orla do Porto), Cuiabá MT","sort":150},{"id":"lz_151","parentId":"lz_139","type":"place","name":"Peixaria Mirante das Águas (Várzea Grande — Ponte Sérgio Motta)","description":"complexo gastronômico renomado à beira-rio com rodízio completo de peixes do Pantanal (~6,2 km).","distance":"aprox. 6,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Peixaria Mirante das Águas (Várzea Grande — Ponte Sérgio Motta), Cuiabá MT","sort":151},{"id":"lz_152","parentId":"lz_139","type":"place","name":"Pizzaria Ritorna (Av. Miguel Sutil)","description":"rodízio tradicional e muito concorrido na região, com grande variedade de sabores doces e salgados, massas finas e espaço kids (~1,8 km).","distance":"aprox. 1,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Pizzaria Ritorna (Av. Miguel Sutil), Cuiabá MT","sort":152},{"id":"lz_153","parentId":"lz_139","type":"place","name":"Pizzaria San Francisco (Região Central / Goiabeiras)","description":"uma das opções de rodízio mais conhecidas da região central, com foco em pizzas assadas no forno a lenha e bufê de acompanhamentos (~2,1 km).","distance":"aprox. 2,1 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Pizzaria San Francisco (Região Central / Goiabeiras), Cuiabá MT","sort":153},{"id":"lz_154","parentId":"lz_139","type":"place","name":"Gato Mia Pizzaria (Jardim Aclimação / CPA)","description":"rodízio bastante frequentado, com dezenas de opções de sabores salgados, doces especiais e massas recheadas (~3,8 km).","distance":"aprox. 3,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Gato Mia Pizzaria (Jardim Aclimação / CPA), Cuiabá MT","sort":154},{"id":"lz_155","parentId":"lz_139","type":"place","name":"Pizzaria Lugano (Av. Historiador Rubens de Mendonça / CPA)","description":"rodízio amplo em uma das principais avenidas da cidade, focado em variedade de sabores e atendimento ágil (~4,2 km).","distance":"aprox. 4,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Pizzaria Lugano (Av. Historiador Rubens de Mendonça / CPA), Cuiabá MT","sort":155},{"id":"lz_156","parentId":"lz_139","type":"place","name":"Pizzaria Verace (Jardim das Américas)","description":"rodízio de padrão refinado na zona leste, oferecendo ingredientes selecionados, bordas recheadas e ambiente amplo (~5,8 km).","distance":"aprox. 5,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Pizzaria Verace (Jardim das Américas), Cuiabá MT","sort":156},{"id":"lz_157","parentId":"lz_139","type":"place","name":"Pizzaria Tarantella (Av. Fernando Corrêa da Costa)","description":"rodízio tradicional de grande porte na região sul, famoso pela fartura de sabores e bufê de saladas (~6,5 km).","distance":"aprox. 6,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Pizzaria Tarantella (Av. Fernando Corrêa da Costa), Cuiabá MT","sort":157},{"id":"lz_158","parentId":"lz_139","type":"place","name":"Dominó Pizzaria (Várzea Grande / Av. Couto Magalhães)","description":"opção renomada na região metropolitana, servindo rodízio completo de pizzas e massas (~8,2 km).","distance":"aprox. 8,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Dominó Pizzaria (Várzea Grande / Av. Couto Magalhães), Cuiabá MT","sort":158},{"id":"lz_159","parentId":"lz_105","type":"group","name":"Regionais","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":159},{"id":"lz_160","parentId":"lz_159","type":"place","name":"Restaurante Regionalissimo (Praça Popular / Centro)","description":"tradicionalíssimo, focado na autêntica culinária cuiabana no formato bufê, com galinhada com pequi, maria isabel, paçoca de pilão e peixes da terra (~1,8 km).","distance":"aprox. 1,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Restaurante Regionalissimo (Praça Popular / Centro), Cuiabá MT","sort":160},{"id":"lz_161","parentId":"lz_159","type":"place","name":"Mercado do Porto (Bairro do Porto)","description":"o coração da cultura popular cuiabana, repleto de bancas e lanchonetes regionais servindo o autêntico \"cuiabano de raiz\" (revirado cuiabano, peixe frito na hora e caldo de piranha) (~3,0 km).","distance":"aprox. 3,0 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"https://www.gov.br/sudeco/pt-br/assuntos/noticias/2020/mercado-do-porto-em-cuiaba-mt-recebe-r-1-5-milhao-para-sua-ampliacao-e-modernizacao/mercado-do-porto_velho.jpg","mapQuery":"Mercado do Porto (Bairro do Porto), Cuiabá MT","sort":161},{"id":"lz_162","parentId":"lz_159","type":"place","name":"Kuka Fresca (Região Central / Bosque da Saúde)","description":"restaurante tradicional de pratos executivos e à la carte com foco em receitas típicas cuiabanas e mato-grossenses (~3,5 km).","distance":"aprox. 3,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Kuka Fresca (Região Central / Bosque da Saúde), Cuiabá MT","sort":162},{"id":"lz_163","parentId":"lz_159","type":"place","name":"Casa do Parque (Bairro Duque de Caxias)","description":"espaço cultural e gastronômico que mescla pratos contemporâneos com toques e ingredientes regionais nobres (~2,2 km).","distance":"aprox. 2,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Casa do Parque (Bairro Duque de Caxias), Cuiabá MT","sort":163},{"id":"lz_164","parentId":"lz_105","type":"group","name":"Pizzarias","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":164},{"id":"lz_165","parentId":"lz_164","type":"place","name":"Pizzaria Forneria Coriolano (Goiabeiras)","description":"uma das mais tradicionais e refinadas da cidade, focada em pizzas assadas em forno a lenha com ingredientes selecionados e massa de longa fermentação (~1,1 km).","distance":"aprox. 1,1 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Pizzaria Forneria Coriolano (Goiabeiras), Cuiabá MT","sort":165},{"id":"lz_166","parentId":"lz_164","type":"place","name":"Bento Pizza (Goiabeiras)","description":"proposta contemporânea com pizzas de massa artesanal, ingredientes premium e ambiente descontraído (~1,3 km).","distance":"aprox. 1,3 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Bento Pizza (Goiabeiras), Cuiabá MT","sort":166},{"id":"lz_167","parentId":"lz_164","type":"place","name":"Moinho Pizzaria (Região Central / Goiabeiras)","description":"pizzaria de estilo clássico com cardápio diversificado de sabores tradicionais, bordas recheadas e ambiente familiar (~1,7 km).","distance":"aprox. 1,7 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Moinho Pizzaria (Região Central / Goiabeiras), Cuiabá MT","sort":167},{"id":"lz_168","parentId":"lz_164","type":"place","name":"Dom Salles Pizzaria (Jardim Aclimação)","description":"referência em pizzas com bordas bem recheadas, massas crocantes e fartura nos recheios (~2,8 km).","distance":"aprox. 2,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Dom Salles Pizzaria (Jardim Aclimação), Cuiabá MT","sort":168},{"id":"lz_169","parentId":"lz_164","type":"place","name":"Pizzaria Chefe da Pizza (Av. Miguel Sutil)","description":"opção focada em rapidez e custo-benefício, com grande variedade de sabores no cardápio à la carte e delivery (~3,2 km).","distance":"aprox. 3,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Pizzaria Chefe da Pizza (Av. Miguel Sutil), Cuiabá MT","sort":169},{"id":"lz_170","parentId":"lz_164","type":"place","name":"Pizzaria Napoli (Região da Miguel Sutil)","description":"focada em receitas tradicionais italianas com molho de tomate artesanal e massa leve (~3,5 km).","distance":"aprox. 3,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Pizzaria Napoli (Região da Miguel Sutil), Cuiabá MT","sort":170},{"id":"lz_171","parentId":"lz_164","type":"place","name":"Pizza Mestre (Jardim das Américas)","description":"focado em pizzas no estilo napolitano individual e familiar com insumos de altíssima qualidade (~5,2 km).","distance":"aprox. 5,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Pizza Mestre (Jardim das Américas), Cuiabá MT","sort":171},{"id":"lz_172","parentId":"lz_164","type":"place","name":"La Pasta & Pizza (Jardim das Américas)","description":"traz um conceito de cantina que alia pizzas artesanais assadas na pedra a pratos de massa (~5,8 km).","distance":"aprox. 5,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"La Pasta & Pizza (Jardim das Américas), Cuiabá MT","sort":172},{"id":"lz_173","parentId":"lz_105","type":"group","name":"Buffets","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":173},{"id":"lz_174","parentId":"lz_173","type":"place","name":"Pequi Restaurante (Goiabeiras)","description":"uma das maiores referências em self-service executivo de alto padrão na região, focado em bufê variado, ingredientes selecionados, estação de grelhados e receitas regionais refinadas (~1,2 km).","distance":"aprox. 1,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Pequi Restaurante (Goiabeiras), Cuiabá MT","sort":174},{"id":"lz_175","parentId":"lz_173","type":"place","name":"Goiabeiras Gourmet (Goiabeiras)","description":"focado no público executivo exigente do bairro, oferece um bufê por quilo sofisticado com saladas elaboradas, pratos quentes contemporâneos e carnes preparadas na hora. (~1,3 km)","distance":"aprox. 1,3 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Goiabeiras Gourmet (Goiabeiras), Cuiabá MT","sort":175},{"id":"lz_176","parentId":"lz_173","type":"place","name":"Lélis Peixaria — Balcão Executivo (Goiabeiras)","description":"disponibiliza no horário do almoço uma versão por quilo de seu premiado menu, com peixes nobres do Pantanal, farofa de banana, mojica de pintado e acompanhamentos típicos com alto rigor de qualidade (~1,4 km).","distance":"aprox. 1,4 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Lélis Peixaria — Balcão Executivo (Goiabeiras), Cuiabá MT","sort":176},{"id":"lz_177","parentId":"lz_173","type":"place","name":"Restaurante Varanda Quilombo (Quilombo)","description":"excelente opção self-service dentro do próprio bairro, focada em comida caseira refinada, variada seleção de saladas e ambiente climatizado agradável (~600 m).","distance":"aprox. 600 m","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Restaurante Varanda Quilombo (Quilombo), Cuiabá MT","sort":177},{"id":"lz_178","parentId":"lz_173","type":"place","name":"Restaurante Doña Joana (Goiabeiras)","description":"tradicional no bairro, une o conceito por quilo a uma cozinha regional/brasileira de alta qualidade, com destaque para a fartura de pratos quentes e atendimento atencioso. (~1,7 km)","distance":"aprox. 1,7 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Restaurante Doña Joana (Goiabeiras), Cuiabá MT","sort":178},{"id":"lz_179","parentId":"lz_173","type":"place","name":"Restaurante Regionalíssimo (Praça Popular / Centro)","description":"referência em culinária cuiabana por quilo, ideal para quem busca o autêntico sabor regional (maria isabel, paçoca de pilão e peixes) em um ambiente tradicional e estruturado (~1,8 km).","distance":"aprox. 1,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Restaurante Regionalíssimo (Praça Popular / Centro), Cuiabá MT","sort":179},{"id":"lz_180","parentId":"lz_105","type":"group","name":"Feijoadas","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":180},{"id":"lz_181","parentId":"lz_180","type":"place","name":"Toca do Tatu (Goiabeiras)","description":"um dos pontos mais tradicionais para o almoço de sábado na região, servindo uma feijoada farta em ambiente de botequim clássico, acompanhada de torresmo crocante, caipirinha e chorinho ao vivo (~1,1 km).","distance":"aprox. 1,1 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Toca do Tatu (Goiabeiras), Cuiabá MT","sort":181},{"id":"lz_182","parentId":"lz_180","type":"place","name":"Varadero Bar e Restô (Goiabeiras)","description":"referência em feijoada refinada aos sábados, combinando ambiente sofisticado, música ao vivo e estação completa de acompanhamentos (~1,4 km).","distance":"aprox. 1,4 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Varadero Bar e Restô (Goiabeiras), Cuiabá MT","sort":182},{"id":"lz_183","parentId":"lz_180","type":"place","name":"Nativas Grill Cuiabá (Miguel Sutil / Aclimação)","description":"traz feijoada completa no bufê de sábado com carnes nobres e acompanhamentos premium (~1,2 km).","distance":"aprox. 1,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Nativas Grill Cuiabá (Miguel Sutil / Aclimação), Cuiabá MT","sort":183},{"id":"lz_184","parentId":"lz_180","type":"place","name":"Pé de Pequi (Quilombo)","description":"tradicional bufê por quilo que serve feijoada completa às quartas-feiras e sábados no próprio bairro (~200 m).","distance":"aprox. 200 m","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Pé de Pequi (Quilombo), Cuiabá MT","sort":184},{"id":"lz_185","parentId":"lz_180","type":"place","name":"Bar do Chuvisco (Centro / Bairro Popular)","description":"ícone boêmio da cidade, extremamente concorrido aos sábados por sua feijoada bem temperada, farta e servida em ambiente descontraído de raiz (~2,2 km).","distance":"aprox. 2,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Bar do Chuvisco (Centro / Bairro Popular), Cuiabá MT","sort":185},{"id":"lz_186","parentId":"lz_180","type":"place","name":"Confrade (Praça Popular / Centro)","description":"serve bufê livre de feijoada aos sábados com seleção de charcutaria artesanal e acompanhamentos refinados (~1,8 km).","distance":"aprox. 1,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Confrade (Praça Popular / Centro), Cuiabá MT","sort":186},{"id":"lz_187","parentId":"lz_180","type":"place","name":"Bar do Edgare (Bairro Popular / Miguel Sutil)","description":"famoso pelo torresmo de rolo e pela feijoada completa aos sábados em clima de botequim tradicional (~2,5 km).","distance":"aprox. 2,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Bar do Edgare (Bairro Popular / Miguel Sutil), Cuiabá MT","sort":187},{"id":"lz_188","parentId":"lz_180","type":"place","name":"Bar do Jarbas (Bairro Popular)","description":"ponto de encontro tradicional na região central, com feijoada disputada ao som de samba e pagode aos sábados (~2,3 km).","distance":"aprox. 2,3 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Bar do Jarbas (Bairro Popular), Cuiabá MT","sort":188},{"id":"lz_189","parentId":"lz_104","type":"group","name":"BARES","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":189},{"id":"lz_190","parentId":"lz_189","type":"group","name":"Sport","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":190},{"id":"lz_191","parentId":"lz_190","type":"place","name":"Garage 154 (Goiabeiras)","description":"espaço focado na cultura gearhead, automobilismo e esportes a motor, com ambiente temático, chope artesanal, hambúrgueres na brasa e transmissão de eventos esportivos (~1,2 km).","distance":"aprox. 1,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Garage 154 (Goiabeiras), Cuiabá MT","sort":191},{"id":"lz_192","parentId":"lz_190","type":"place","name":"Draft Bar & Grill (Praça Popular)","description":"ambiente estilo pub/sports bar moderno com diversas telas transmitindo futebol, lutas de UFC e NFL, além de boa carta de chopes e porções (~1,8 km).","distance":"aprox. 1,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Draft Bar & Grill (Praça Popular), Cuiabá MT","sort":192},{"id":"lz_193","parentId":"lz_190","type":"place","name":"Mundialito Sports Bar (Região Central / Goiabeiras)","description":"voltado para os apaixonados por esportes variados, com várias TVs dedicadas à transmissão de jogos ao vivo, decoração temática e cardápio de pub (~1,9 km).","distance":"aprox. 1,9 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Mundialito Sports Bar (Região Central / Goiabeiras), Cuiabá MT","sort":193},{"id":"lz_194","parentId":"lz_190","type":"place","name":"Arena Chopp & Esporte (Região do Santa Rosa)","description":"bar e petiscaria com foco em transmissões de futebol (Brasileirão, Libertadores, Champions League) e lutas, servindo porções fartas e chope em ambiente aberto (~3,5 km).","distance":"aprox. 3,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Arena Chopp & Esporte (Região do Santa Rosa), Cuiabá MT","sort":194},{"id":"lz_195","parentId":"lz_190","type":"place","name":"Cuiabá Sports Bar & Petiscaria (Região Central)","description":"ambiente descontraído com temática voltada ao futebol local e nacional, focado em transmissões ao vivo, espetinhos e cerveja gelada (~3,8 km).","distance":"aprox. 3,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Cuiabá Sports Bar & Petiscaria (Região Central), Cuiabá MT","sort":195},{"id":"lz_196","parentId":"lz_190","type":"place","name":"Arena Pantanal Gastrobar / Bares da Arena (Verdão)","description":"localizado no entorno do complexo da Arena Pantanal, atrai o público torcedor com tematização voltada ao Cuiabá EC e ao futebol mato-grossense (~4,5 km).","distance":"aprox. 4,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Arena Pantanal Gastrobar / Bares da Arena (Verdão), Cuiabá MT","sort":196},{"id":"lz_197","parentId":"lz_189","type":"group","name":"Happy hour / jantar","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":197},{"id":"lz_198","parentId":"lz_197","type":"place","name":"Varadero Bar e Restô (Goiabeiras)","description":"perfeito para transitar do happy hour ao jantar, com ambiente sofisticado, luz suave, excelente carta de drinks e menu à la carte de cortes grelhados e frutos do mar (~1,4 km).","distance":"aprox. 1,4 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Varadero Bar e Restô (Goiabeiras), Cuiabá MT","sort":198},{"id":"lz_199","parentId":"lz_197","type":"place","name":"Confrade (Praça Popular / Centro)","description":"referência para quem busca porções refinadas, charcutaria artesanal e pratos de jantar elaborados em uma das regiões boêmias mais tradicionais da cidade (~1,8 km).","distance":"aprox. 1,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Confrade (Praça Popular / Centro), Cuiabá MT","sort":199},{"id":"lz_200","parentId":"lz_197","type":"place","name":"Bar do Jarbas (Praça Popular / Bairro Popular)","description":"opção vibrante para o fim de tarde, famosa pelo chope trincando, ambiente descontraído e cardápio farto de petiscos clássicos e jantares de boteco (~2,3 km).","distance":"aprox. 2,3 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"https://www.rdnews.com.br/storage/webdisco/2018/01/07/1024x656/d6a2f1e91c1af45fabafc1165cb2e213.jpg","mapQuery":"Bar do Jarbas (Praça Popular / Bairro Popular), Cuiabá MT","sort":200},{"id":"lz_201","parentId":"lz_197","type":"place","name":"Garage 154 (Goiabeiras)","description":"une chope artesanal, hambúrgueres gourmet e carnes na brasa em um espaço com temática gearhead e energia de pub para esticar a noite (~1,2 km).","distance":"aprox. 1,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Garage 154 (Goiabeiras), Cuiabá MT","sort":201},{"id":"lz_202","parentId":"lz_197","type":"place","name":"Cupim Bar (Região Central / Bosque da Saúde)","description":"um dos maiores clássicos de Cuiabá para o happy hour estendido para o jantar; famoso pela carne de cupim extremamente suculenta e macia, mandioca derretendo, chope gelado e porções fartas (~2,3 km).","distance":"aprox. 2,3 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Cupim Bar (Região Central / Bosque da Saúde), Cuiabá MT","sort":202},{"id":"lz_203","parentId":"lz_197","type":"place","name":"Bar do Edgare (Bairro Popular / Miguel Sutil)","description":"clássico do happy hour cuiabano, muito procurado pelo tradicional torresmo de rolo, cerveja bem gelada e porções fartas para compartilhar em grupo (~2,5 km).","distance":"aprox. 2,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Bar do Edgare (Bairro Popular / Miguel Sutil), Cuiabá MT","sort":203},{"id":"lz_204","parentId":"lz_197","type":"place","name":"Bar do Chuvisco (Centro / Bairro Popular)","description":"ícone boêmio de raiz na capital, ideal para drinks despretensiosos, petiscos clássicos e pratos caseiros em clima informal (~2,2 km).","distance":"aprox. 2,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Bar do Chuvisco (Centro / Bairro Popular), Cuiabá MT","sort":204},{"id":"lz_205","parentId":"lz_197","type":"place","name":"Outback Steakhouse (Shopping Estação Cuiabá)","description":"um dos pontos de happy hour mais movimentados da cidade, com chope na caneca congelada, pratos para compartilhar (bloomin' onion, ribs) e opções completas para o jantar (~3,1 km).","distance":"aprox. 3,1 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"https://www.rdnews.com.br/storage/webdisco/2019/02/06/1024x656/e0b8d8912dc0b250e2339d191acedfb5.jpg","mapQuery":"Outback Steakhouse (Shopping Estação Cuiabá), Cuiabá MT","sort":205},{"id":"lz_206","parentId":"lz_197","type":"place","name":"Cuiabano Gastrobar (Região do Santa Rosa)","description":"ambiente amplo ao ar livre, combinando chopes de várias torneiras, coquetelaria autoral e cardápio diversificado para o jantar (~3,5 km).","distance":"aprox. 3,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Cuiabano Gastrobar (Região do Santa Rosa), Cuiabá MT","sort":206},{"id":"lz_207","parentId":"lz_197","type":"place","name":"Três Moinhos Bar & Gastronomia (Parque das Águas / CPA)","description":"bar contemporâneo focado em alta coquetelaria, vinhos, porções criativas e ambiente ao ar livre com vista para a região do parque (~4,8 km).","distance":"aprox. 4,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Três Moinhos Bar & Gastronomia (Parque das Águas / CPA), Cuiabá MT","sort":207},{"id":"lz_208","parentId":"lz_189","type":"group","name":"Noite","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":208},{"id":"lz_209","parentId":"lz_208","type":"place","name":"Bar do Jarbas (Praça Popular)","description":"epicentro da boemia na região central, extremamente movimentado à noite, famoso pelas rodas de samba e pagode ao vivo, cerveja trincando e público jovem (~2,3 km).","distance":"aprox. 2,3 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"https://www.rdnews.com.br/storage/webdisco/2018/01/07/1024x656/d6a2f1e91c1af45fabafc1165cb2e213.jpg","mapQuery":"Bar do Jarbas (Praça Popular), Cuiabá MT","sort":209},{"id":"lz_210","parentId":"lz_208","type":"place","name":"Confrade (Praça Popular)","description":"ponto de encontro refinado que estica pela madrugada, unindo coquetelaria autoral, DJs e música ao vivo com ambiente sofisticado ao ar livre (~1,8 km).","distance":"aprox. 1,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Confrade (Praça Popular), Cuiabá MT","sort":210},{"id":"lz_211","parentId":"lz_208","type":"place","name":"Garage 154 (Goiabeiras)","description":"excelente para quem busca a noite ao som de rock, pop e vertentes alternativas, servindo chopes artesanais em clima de pub/garage (~1,2 km).","distance":"aprox. 1,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Garage 154 (Goiabeiras), Cuiabá MT","sort":211},{"id":"lz_212","parentId":"lz_208","type":"place","name":"Garden Pub (Praça Popular / Bairro Popular)","description":"ambiente descolado ao ar livre voltado para música brasileira, brasilidades, samba e MPB, reunindo público diverso em noites bem animadas (~2,1 km).","distance":"aprox. 2,1 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Garden Pub (Praça Popular / Bairro Popular), Cuiabá MT","sort":212},{"id":"lz_213","parentId":"lz_208","type":"place","name":"Mosteiro Bar e Cultura (Região Central / Bairro Popular)","description":"espaço multicultural e noturno reconhecido por suas noites de jazz, blues, brasilidades e discotecagem em vinil em um espaço intimista e estiloso (~2,4 km).","distance":"aprox. 2,4 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Mosteiro Bar e Cultura (Região Central / Bairro Popular), Cuiabá MT","sort":213},{"id":"lz_214","parentId":"lz_208","type":"place","name":"Malcom Pub (Av. Miguel Sutil / Santa Rosa)","description":"o maior e mais tradicional complexo noturno da capital; dividido entre o palco principal (com bandas de rock e pop) e o espaço eletrônico (Club), funcionando até altas horas da madrugada (~3,2 km).","distance":"aprox. 3,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"https://www.folhamax.com/storage/webdisco/2024/12/01/810x519/b2373c065d27b26cd0e853f25ea15014.jpg","mapQuery":"Malcom Pub (Av. Miguel Sutil / Santa Rosa), Cuiabá MT","sort":214},{"id":"lz_215","parentId":"lz_208","type":"place","name":"Nuun Garden (Região Central / Duque de Caxias)","description":"referência absoluta para os amantes de música eletrônica e house music, com ambiente conceitual de jardim noturno, coquetelaria premium e DJs nacionais e internacionais (~2,8 km).","distance":"aprox. 2,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Nuun Garden (Região Central / Duque de Caxias), Cuiabá MT","sort":215},{"id":"lz_216","parentId":"lz_208","type":"place","name":"Bar do Edgare (Bairro Popular / Miguel Sutil)","description":"botequim tradicionalista que ganha ritmo de balada e agito noturno nos fins de semana, com mesas lotadas na calçada e clima descontraído (~2,5 km).","distance":"aprox. 2,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Bar do Edgare (Bairro Popular / Miguel Sutil), Cuiabá MT","sort":216},{"id":"lz_217","parentId":"lz_208","type":"place","name":"Musiva (Av. Beira Rio)","description":"a principal casa de eventos e grandes shows noturnos de Cuiabá, recebendo atrações nacionais de sertanejo, pagode, pop e música eletrônica em estrutura de grande porte (~5,8 km).","distance":"aprox. 5,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"https://photos.wikimapia.org/p/00/04/11/98/04_big.jpg","mapQuery":"Musiva (Av. Beira Rio), Cuiabá MT","sort":217},{"id":"lz_218","parentId":"lz_104","type":"group","name":"LANCHONETES","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":218},{"id":"lz_219","parentId":"lz_218","type":"group","name":"Hamburguerias","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":219},{"id":"lz_220","parentId":"lz_219","type":"place","name":"Garage 154 (Goiabeiras)","description":"hambúrgueres artesanais grelhados na brasa com inspiração na culinária norte-americana, acompanhados de chopes artesanais em ambiente temático gearhead (~1,2 km).","distance":"aprox. 1,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Garage 154 (Goiabeiras), Cuiabá MT","sort":220},{"id":"lz_221","parentId":"lz_219","type":"place","name":"Rock Burger (Goiabeiras / Praça Popular)","description":"uma das hamburguerias artesanais mais tradicionais da região, famosa pelos burgers bem servidos no pão de brioche, molhos autorais e temática do rock (~1,6 km).","distance":"aprox. 1,6 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Rock Burger (Goiabeiras / Praça Popular), Cuiabá MT","sort":221},{"id":"lz_222","parentId":"lz_219","type":"place","name":"Cozinha dos Fundos (Praça Popular / Centro)","description":"referência em puck smash e hambúrgueres artesanais com blens de carnes nobres, maioneses caseiras icônicas e batatas crocantes (~1,8 km).","distance":"aprox. 1,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Cozinha dos Fundos (Praça Popular / Centro), Cuiabá MT","sort":222},{"id":"lz_223","parentId":"lz_219","type":"place","name":"Mundialito Burger (Região Central / Goiabeiras)","description":"opção descontraída focada em hambúrgueres de sabor marcante, porções de pork belly e combos fartos (~1,9 km)","distance":"aprox. 1,9 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Mundialito Burger (Região Central / Goiabeiras), Cuiabá MT","sort":223},{"id":"lz_224","parentId":"lz_219","type":"place","name":"Madero Steakhouse (Shopping Estação Cuiabá)","description":"conhecido por seus hambúrgueres assados na brasa com pão crocante, maionese artesanal e opções gourmet em ambiente confortável (~3,1 km).","distance":"aprox. 3,1 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Madero Steakhouse (Shopping Estação Cuiabá), Cuiabá MT","sort":224},{"id":"lz_225","parentId":"lz_219","type":"place","name":"Barba, Grelha e Bigode (Jardim Aclimação / Miguel Sutil)","description":"hamburgueria focada em cortes de carne altos preparados na grelha, bacon crocante, cheddar inglês e combinação de ingredientes premium (~3,0 km).","distance":"aprox. 3,0 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Barba, Grelha e Bigode (Jardim Aclimação / Miguel Sutil), Cuiabá MT","sort":225},{"id":"lz_226","parentId":"lz_219","type":"place","name":"Santo Smash (Região Central / Bosque da Saúde)","description":"especializada no estilo smash burger (carne prensada na chapa com casquinha crocante), rápida, suculenta e com ótimo custo-benefício (~3,4 km).","distance":"aprox. 3,4 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Santo Smash (Região Central / Bosque da Saúde), Cuiabá MT","sort":226},{"id":"lz_227","parentId":"lz_218","type":"group","name":"Espetinhos","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":227},{"id":"lz_228","parentId":"lz_227","type":"place","name":"Espetinho do Cheba (Goiabeiras)","description":"um dos maiores clássicos e referências absolutas de Cuiabá quando o assunto é espetinho de rua; famoso pelo cupim derretendo, carne macia, mandioca amarela perfeita e maionese temperada em ambiente raiz (~1,1 km).","distance":"aprox. 1,1 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Espetinho do Cheba (Goiabeiras), Cuiabá MT","sort":228},{"id":"lz_229","parentId":"lz_227","type":"place","name":"Espetinho do Bigode (Goiabeiras)","description":"bastante tradicional na região, com espetinhos bem servidos de carne, cupim, medalhão e queijo coalho com acompanhamentos fartos (~1,3 km).","distance":"aprox. 1,3 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Espetinho do Bigode (Goiabeiras), Cuiabá MT","sort":229},{"id":"lz_230","parentId":"lz_227","type":"place","name":"Espetinho da Popular (Praça Popular / Centro)","description":"ponto de encontro no circuito boêmio, combinando espetinhos variados na brasa em ambiente movimentado (~1,8 km).","distance":"aprox. 1,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Espetinho da Popular (Praça Popular / Centro), Cuiabá MT","sort":230},{"id":"lz_231","parentId":"lz_227","type":"place","name":"Espeto & Cia (Região Central / Goiabeiras)","description":"focado em rapidez, com grande variedade de cortes no espeto (carne, frango com bacon, coração e linguiça) (~1,9 km).","distance":"aprox. 1,9 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Espeto & Cia (Região Central / Goiabeiras), Cuiabá MT","sort":231},{"id":"lz_232","parentId":"lz_227","type":"place","name":"Espetinho do Jarbas (Bairro Popular)","description":"focado no atendimento rápido de espetos bem temperados, com destaque para o cupim e o pão de alho recheado (~2,3 km).","distance":"aprox. 2,3 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Espetinho do Jarbas (Bairro Popular), Cuiabá MT","sort":232},{"id":"lz_233","parentId":"lz_227","type":"place","name":"Espetinho do Edgare (Bairro Popular / Miguel Sutil)","description":"estação de espetinhos variados feitos na hora, ideal para um lanche rápido à noite (~2,5 km).","distance":"aprox. 2,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Espetinho do Edgare (Bairro Popular / Miguel Sutil), Cuiabá MT","sort":233},{"id":"lz_234","parentId":"lz_227","type":"place","name":"Gato Mia Espetaria (Bosque da Saúde)","description":"espetaria bem estruturada servindo desde cortes tradicionais até combinações recheadas com jantinha completa (~3,4 km).","distance":"aprox. 3,4 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Gato Mia Espetaria (Bosque da Saúde), Cuiabá MT","sort":234},{"id":"lz_235","parentId":"lz_227","type":"place","name":"Espetinho do Baiano (Av. Fernando Corrêa / Poção)","description":"referência em espetos de rua, popular pelo preço acessível e mandioca cozida sempre no ponto (~4,2 km).","distance":"aprox. 4,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Espetinho do Baiano (Av. Fernando Corrêa / Poção), Cuiabá MT","sort":235},{"id":"lz_236","parentId":"lz_227","type":"place","name":"Avenida do Espeto (Região da Arena Pantanal)","description":"muito movimentada nos fins de semana, oferecendo espetinhos fartos no sistema de jantinha (~4,5 km).","distance":"aprox. 4,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Avenida do Espeto (Região da Arena Pantanal), Cuiabá MT","sort":236},{"id":"lz_237","parentId":"lz_218","type":"group","name":"Cachorro quente (baguncinha & prensados)","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":237},{"id":"lz_238","parentId":"lz_237","type":"place","name":"Lanchonete e Baguncaria Express (Bairro Popular)","description":"opção clássica do \"baguncão cuiabano\" (hambúrguer farto com milho, bacon, ovo, presunto, queijo e maionese temperada) para quem busca lanches tradicionais de rua (~2,1 km).","distance":"aprox. 2,1 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Lanchonete e Baguncaria Express (Bairro Popular), Cuiabá MT","sort":238},{"id":"lz_239","parentId":"lz_237","type":"place","name":"Lanchonete Comilão (Região Central)","description":"tradicionalíssima na capital, famosa pelos lanches prensados imensos e maionese verde artesanal bastante concorrida no fim da noite (~2,6 km).","distance":"aprox. 2,6 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Lanchonete Comilão (Região Central), Cuiabá MT","sort":239},{"id":"lz_240","parentId":"lz_237","type":"place","name":"Gourmet Lanches (Goiabeiras)","description":"lanchonete de bairro tradicionalíssima no circuito de prensados e x-bagunças fartos, muito procurada pelo público da região no fim da noite (~1,5 km).","distance":"aprox. 1,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Gourmet Lanches (Goiabeiras), Cuiabá MT","sort":240},{"id":"lz_241","parentId":"lz_237","type":"place","name":"Baguncinha do Goiabeiras (Entorno do Goiabeiras Shopping)","description":"trailer/lanchonete de rua clássico focado na montagem rápida de prensados gigantes com maionese verde artesanal e pão selado na chapa (~1,6 km).","distance":"aprox. 1,6 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Baguncinha do Goiabeiras (Entorno do Goiabeiras Shopping), Cuiabá MT","sort":241},{"id":"lz_242","parentId":"lz_237","type":"place","name":"X-Bagunça do Baiano (Região Central)","description":"ponto de parada tradicional da madrugada para quem busca o prensadão de raiz com bastante molho, queijo derretido e carnes bem temperadas na chapa (~2,8 km).","distance":"aprox. 2,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"X-Bagunça do Baiano (Região Central), Cuiabá MT","sort":242},{"id":"lz_243","parentId":"lz_237","type":"place","name":"Lanchonete Ponto do Lanche (Bosque da Saúde)","description":"lanchonete de bairro muito frequentada por quem mora na zona norte, especializada em x-saladas, baguncinhas e dogões prensados (~3,2 km).","distance":"aprox. 3,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Lanchonete Ponto do Lanche (Bosque da Saúde), Cuiabá MT","sort":243},{"id":"lz_244","parentId":"","type":"group","name":"ESPAÇOS DE EVENTOS","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":244},{"id":"lz_245","parentId":"lz_244","type":"group","name":"Centros de convenções","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":245},{"id":"lz_246","parentId":"lz_245","type":"place","name":"Espaço Riserva (Buffet Leila Malouf / Av. Miguel Sutil)","description":"um dos centros de eventos e convenções mais modernos e elegantes da capital, voltado para fóruns, congressos corporativos e grandes simpósios (~1,5 km).","distance":"aprox. 1,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Espaço Riserva (Buffet Leila Malouf / Av. Miguel Sutil), Cuiabá MT","sort":246},{"id":"lz_247","parentId":"lz_245","type":"place","name":"Centro de Eventos do Pantanal / Sebrae (Bairro Santa Marta / Miguel Sutil)","description":"o maior, mais tradicional e principal complexo de convenções de Mato Grosso, preparado para grandes feiras nacionais, congressos de milhares de pessoas, exibições e eventos de negócios (~2,8 km).","distance":"aprox. 2,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Centro de Eventos do Pantanal / Sebrae (Bairro Santa Marta / Miguel Sutil), Cuiabá MT","sort":247},{"id":"lz_248","parentId":"lz_245","type":"place","name":"Centro de Eventos do Pantanal Shopping (Terraço do Pan)","description":"estrutura integrada ao complexo comercial, ideal para palestras, seminários e feiras corporativas de médio porte (~1,8 km).","distance":"aprox. 1,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Centro de Eventos do Pantanal Shopping (Terraço do Pan), Cuiabá MT","sort":248},{"id":"lz_249","parentId":"lz_245","type":"place","name":"Centro de Eventos do Hotel Gran Odara (Av. Miguel Sutil)","description":"infraestrutura hoteleira completa com auditórios modulares e salas de apoio de alto padrão para convenções executivas e encontros corporativos de grande escala (~4,2 km).","distance":"aprox. 4,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Centro de Eventos do Hotel Gran Odara (Av. Miguel Sutil), Cuiabá MT","sort":249},{"id":"lz_250","parentId":"lz_245","type":"place","name":"Auditório do Edifício Cloves Vettorato / FIEMT (Av. Historiador Rubens de Mendonça / CPA)","description":"centro de convenções e auditório corporativo focado no setor industrial e institucional (~4,5 km).","distance":"aprox. 4,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Auditório do Edifício Cloves Vettorato / FIEMT (Av. Historiador Rubens de Mendonça / CPA), Cuiabá MT","sort":250},{"id":"lz_251","parentId":"lz_245","type":"place","name":"Auditório da FIEMT (Av. Historiador Rubens de Mendonça / CPA)","description":"centro de convenções e auditório corporativo voltado para eventos institucionais, palestras e encontros do setor produtivo (~4,5 km).","distance":"aprox. 4,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Auditório da FIEMT (Av. Historiador Rubens de Mendonça / CPA), Cuiabá MT","sort":251},{"id":"lz_252","parentId":"lz_245","type":"place","name":"Espaço Musiva (Av. Beira Rio)","description":"embora muito conhecido como casa de shows, possui módulos e infraestrutura interna para convenções, feiras corporativas e grandes convenções de vendas (~5,8 km).","distance":"aprox. 5,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Espaço Musiva (Av. Beira Rio), Cuiabá MT","sort":252},{"id":"lz_253","parentId":"lz_244","type":"group","name":"Festas e buffets","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":253},{"id":"lz_254","parentId":"lz_253","type":"place","name":"Espaço Riserva — Leila Malouf (Av. Miguel Sutil)","description":"referência máxima em sofisticação para casamentos, formaturas e eventos sociais de grande porte, combinando alta gastronomia e arquitetura moderna (~1,5 km).","distance":"aprox. 1,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Espaço Riserva — Leila Malouf (Av. Miguel Sutil), Cuiabá MT","sort":254},{"id":"lz_255","parentId":"lz_253","type":"place","name":"Villa Felici Espaço e Buffet (Goiabeiras / Santa Rosa)","description":"espaço versátil e elegante para festas de aniversário, mini-weddings e recepções sociais, focado em atendimento personalizado e menu contemporâneo (~2,1 km).","distance":"aprox. 2,1 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Villa Felici Espaço e Buffet (Goiabeiras / Santa Rosa), Cuiabá MT","sort":255},{"id":"lz_256","parentId":"lz_253","type":"place","name":"Buffet Leila Malouf — Espaço Jardim Cuiabá","description":"salão clássico e acolhedor na região central, ideal para festas sociais refinadas e recepções mais intimistas (~2,3 km).","distance":"aprox. 2,3 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Buffet Leila Malouf — Espaço Jardim Cuiabá, Cuiabá MT","sort":256},{"id":"lz_257","parentId":"lz_253","type":"place","name":"Espaço Marly Festas (Bosque da Saúde)","description":"salão tradicional da zona norte, muito procurado para festas de 15 anos, aniversários e recepções em geral por sua localização prática e boa estrutura (~3,4 km).","distance":"aprox. 3,4 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Espaço Marly Festas (Bosque da Saúde), Cuiabá MT","sort":257},{"id":"lz_258","parentId":"lz_253","type":"place","name":"Espaço Solares (Região do Santa Rosa / Miguel Sutil)","description":"ambiente amplo com área externa agradável, propício para festas sociais ao ar livre, casamentos e comemorações familiares (~3,8 km).","distance":"aprox. 3,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Espaço Solares (Região do Santa Rosa / Miguel Sutil), Cuiabá MT","sort":258},{"id":"lz_259","parentId":"lz_253","type":"place","name":"Buffet Alphaville Premium (Jardim Itália)","description":"um dos espaços sociais mais requintados da capital, projetado para casamentos e bailes de formatura que exigem grande capacidade de convidados e acabamento de luxo (~5,5 km).","distance":"aprox. 5,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Buffet Alphaville Premium (Jardim Itália), Cuiabá MT","sort":259},{"id":"lz_260","parentId":"lz_253","type":"place","name":"Espaço Meraki (Região do Ribeirão do Lipa)","description":"focado no conceito de eventos ao ar livre, casamentos no estilo boho chic e recepções integradas à natureza (~6,2 km).","distance":"aprox. 6,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Espaço Meraki (Região do Ribeirão do Lipa), Cuiabá MT","sort":260},{"id":"lz_261","parentId":"lz_253","type":"place","name":"Chácara das Flores / Espaço Vitoria (Estrada da Guia / Sucuri)","description":"opções tradicionais para festas sociais em estilo campestre ou diurno, oferecendo amplas áreas verdes e estruturas para grandes recepções (~7,5 km).","distance":"aprox. 7,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Chácara das Flores / Espaço Vitoria (Estrada da Guia / Sucuri), Cuiabá MT","sort":261}],closedDates:[],closedSlots:[],orders:[]};
let db=JSON.parse(localStorage.getItem(KEY)||'null')||structuredClone(seed),session=null,page='catalog',adminPage='dashboard',selectedCat='',cart=[];

if(!Array.isArray(db.leisureGuide)||!db.leisureGuide.length)db.leisureGuide=structuredClone(seed.leisureGuide||[]);

const LEISURE_CLEAN_MIGRATION_V167='versatil_leisure_clean_v167';
if(!localStorage.getItem(LEISURE_CLEAN_MIGRATION_V167)){
  db.leisureGuide=structuredClone(seed.leisureGuide||[]);
  localStorage.setItem(KEY,JSON.stringify(db));
  localStorage.setItem(LEISURE_CLEAN_MIGRATION_V167,'1');
}


let expandedClientProductId='';
let productAdminCategoryFilter='all';
let deferredInstallPrompt=null;
let pwaInstallReady=false;
function save(){
  localStorage.setItem(KEY,JSON.stringify(db));
}
ensureNormasV174();
save();

const V173_CONTENT='versatil_content_v173';
if(!localStorage.getItem(V173_CONTENT)){db.versatilGuide=structuredClone(DEFAULT_VERSATIL_GUIDE_V173);save();localStorage.setItem(V173_CONTENT,'1')}

const V173_CHOPPAO='versatil_choppao_v173';
if(!localStorage.getItem(V173_CHOPPAO)){
  if(!(db.leisureGuide||[]).some(n=>n.id==='choppao_regionais_v173'))db.leisureGuide.push({"id":"choppao_regionais_v173","parentId":"lz_159","type":"place","name":"Restaurante Choppão","description":"Restaurante tradicional de Cuiabá, desde 1974, com culinária regional, carnes, peixes, pizzas, porções e choperia.","distance":"aprox. 1,2 km","phone":"(65) 3623-5005","imageUrl":"https://storage.lucasmendes.dev/site-sp/choppao%20restaurante%2Fimg%2Ffrente-restaurante-noturno-movimentado.webp","mapQuery":"Restaurante Choppão, Praça 8 de Abril, 44, Goiabeiras, Cuiabá MT","sort":1});
  save();localStorage.setItem(V173_CHOPPAO,'1');
}

const LEISURE_EXTRA_V171='versatil_leisure_extra_v171';
if(!localStorage.getItem(LEISURE_EXTRA_V171)){const add=[{"id":"grp_teatros_v171","parentId":"","type":"group","name":"TEATROS","description":"Teatros e artes cênicas em Cuiabá.","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":50},{"id":"cine_teatro_v171","parentId":"grp_teatros_v171","type":"place","name":"Cine Teatro Cuiabá","description":"Cinema, teatro, dança e música.","distance":"aprox. 2,5 km","phone":"(65) 2129-3848","imageUrl":"","mapQuery":"Cine Teatro Cuiabá, Avenida Presidente Getúlio Vargas 247, Cuiabá MT","sort":10},{"id":"zulmira_v171","parentId":"grp_teatros_v171","type":"place","name":"Teatro do Cerrado Zulmira Canavarros","description":"Teatro para eventos e manifestações artísticas.","distance":"aprox. 5 km","phone":"(65) 3313-6876","imageUrl":"","mapQuery":"Teatro Cerrado Zulmira Canavarros Cuiabá","sort":20},{"id":"grp_hospitais_v171","parentId":"","type":"group","name":"HOSPITAIS E UPA","description":"Hospitais e pronto atendimento em Cuiabá.","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":60},{"id":"santarosa_v171","parentId":"grp_hospitais_v171","type":"place","name":"Hospital Santa Rosa","description":"Hospital 24 horas.","distance":"aprox. 1,4 km","phone":"(65) 3618-8000","imageUrl":"","mapQuery":"Hospital Santa Rosa Cuiabá","sort":10},{"id":"hmc_v171","parentId":"grp_hospitais_v171","type":"place","name":"Hospital Municipal de Cuiabá - HMC","description":"Hospital municipal e pronto-socorro 24 horas.","distance":"aprox. 4,2 km","phone":"(65) 3318-6900","imageUrl":"","mapQuery":"Hospital Municipal de Cuiabá HMC","sort":20},{"id":"hujm_v171","parentId":"grp_hospitais_v171","type":"place","name":"Hospital Universitário Júlio Müller","description":"Hospital universitário da UFMT/Ebserh.","distance":"aprox. 2,5 km","phone":"(65) 3615-7249","imageUrl":"","mapQuery":"Hospital Universitário Júlio Müller Cuiabá","sort":30},{"id":"complexo_v171","parentId":"grp_hospitais_v171","type":"place","name":"Complexo Hospitalar de Cuiabá","description":"Hospital 24 horas.","distance":"aprox. 2 km","phone":"(65) 3051-3000","imageUrl":"","mapQuery":"Complexo Hospitalar de Cuiabá","sort":40},{"id":"upa_verdao_v171","parentId":"grp_hospitais_v171","type":"place","name":"UPA Verdão","description":"Unidade de Pronto Atendimento 24 horas.","distance":"aprox. 3,5 km","phone":"(65) 3617-1458","imageUrl":"","mapQuery":"UPA Verdão Cuiabá","sort":50},{"id":"upa_morada_v171","parentId":"grp_hospitais_v171","type":"place","name":"UPA Morada do Ouro","description":"Unidade de Pronto Atendimento 24 horas.","distance":"aprox. 5,3 km","phone":"(65) 3645-5700","imageUrl":"","mapQuery":"UPA Morada do Ouro Cuiabá","sort":60},{"id":"upa_pascoal_v171","parentId":"grp_hospitais_v171","type":"place","name":"UPA Pascoal Ramos","description":"Unidade de Pronto Atendimento 24 horas.","distance":"aprox. 12 km","phone":"(65) 3667-4129","imageUrl":"","mapQuery":"UPA Pascoal Ramos Cuiabá","sort":70},{"id":"upa_leblon_v171","parentId":"grp_hospitais_v171","type":"place","name":"UPA Leblon","description":"Unidade de Pronto Atendimento 24 horas.","distance":"aprox. 2,4 km","phone":"(65) 3318-6542","imageUrl":"","mapQuery":"UPA Leblon Cuiabá","sort":80}];const ids=new Set((db.leisureGuide||[]).map(n=>n.id));add.forEach(n=>{if(!ids.has(n.id))db.leisureGuide.push(n)});save();localStorage.setItem(LEISURE_EXTRA_V171,'1')}

const CONTENT_MIGRATION_V171='versatil_content_migration_v171';
if(!localStorage.getItem(CONTENT_MIGRATION_V171)){db.versatilGuide=structuredClone(DEFAULT_VERSATIL_GUIDE_V171);save();localStorage.setItem(CONTENT_MIGRATION_V171,'1')}


if(!Array.isArray(db.versatilGuide)||!db.versatilGuide.length)db.versatilGuide=structuredClone(DEFAULT_VERSATIL_GUIDE);
if(!Array.isArray(db.starlisGuide)||!db.starlisGuide.length)db.starlisGuide=structuredClone(DEFAULT_STARLIS_GUIDE);
if(!db.postalConfig||typeof db.postalConfig!=='object')db.postalConfig=structuredClone(DEFAULT_POSTAL_CONFIG);
save();

const SESSION_ACTIVITY_KEY='versatil_session_activity';
let sessionActivity={order:false,route:false};
try{sessionActivity=JSON.parse(sessionStorage.getItem(SESSION_ACTIVITY_KEY)||'{"order":false,"route":false}')||{order:false,route:false}}catch(e){}
function setSessionActivity(type){
  if(type==='order')sessionActivity.order=true;
  if(type==='route')sessionActivity.route=true;
  sessionStorage.setItem(SESSION_ACTIVITY_KEY,JSON.stringify(sessionActivity));
}
function resetSessionActivity(){
  sessionActivity={order:false,route:false};
  sessionStorage.removeItem(SESSION_ACTIVITY_KEY);
  sessionStorage.removeItem(POSTAL_SENT_ACCESS_KEY);
}

const LEISURE_RESEARCHED_PHOTOS_V168={"Parque Estadual Mãe Bonifácia":"https://photos.wikimapia.org/p/00/00/81/39/19_big.jpg","Parque das Águas \"Seo Fiote\"":"https://www.midianews.com.br/storage/webdisco/2017/01/02/886x590/7f1ab3a4177923599e0cf1ff7835e5a8.jpg","Parque Tia Nair":"https://str1.lnmimg.net/img/2025/08/14/1f0cefb5a82e11c2b291942077129efc.webp","Museu de História Natural de Mato Grosso (Casa Dom Aquino)":"https://www.secel.mt.gov.br/documents/362998/14597620/Museu%2Bde%2Bhist%C3%B3ria%2Bnatural%2B-%2Bfrente%2Brio%2Bcuiab%C3%A1.jpg/70cbe33e-a4ef-3ae6-70c5-e996e17a8d4c?t=1650471365613","Museu de Arte Sacra de Mato Grosso":"https://stppprod01.blob.core.windows.net/pp-prod-container/2021/11/Museu-da-Arte-Sacra.jpg","Museu do Morro da Caixa d'Água Velha":"https://ihgmt.nyc3.digitaloceanspaces.com/storage/webdisco/2021/08/04/800x600/4960fb9811a9e6e2dc8ba0319d14623d.jpg","Museu da Imagem e do Som de Cuiabá (MISC)":"https://www.cuiaba.mt.gov.br/storage/webdisco/2025/02/27/original/2025-02-27-17-43-088a9399-67c0dc6c328fc.jpg","Centro Geodésico da América do Sul":"https://www.folhamax.com/storage/webdisco/2022/09/20/810x519/47ed7c1ec8e843192b65d1a00e13365b.jpg","Orla do Porto":"https://www.midianews.com.br/storage/webdisco/2017/02/16/886x590/7828c9bf8660987ec3b80ccb8c083e31.jpg","Aquário Encantado e Rio Salobra":"https://www.cvc.com.br/dicas-de-viagem/wp-content/uploads/2022/04/Aquario-Encantado-768x512.jpg","Lagoa das Araras":"https://upack.tur.br/wp-content/uploads/2021/06/upack-nobres-lagoa-das-araras.jpg","Cachoeira Véu de Noiva":"https://www.vidadeturista.com/wp-content/uploads/2020/11/parque-nacional-chapada-dos-guimaraes-mt-1.jpg","Rodovia Transpantaneira":"https://www.sospantanal.org.br/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-20-at-18.10.03-1024x767.jpeg","Mercado do Porto":"https://www.gov.br/sudeco/pt-br/assuntos/noticias/2020/mercado-do-porto-em-cuiaba-mt-recebe-r-1-5-milhao-para-sua-ampliacao-e-modernizacao/mercado-do-porto_velho.jpg","Shopping Estação Cuiabá":"https://noticiapositiva.com.br/wp-content/uploads/2023/07/shopping-estacao.jpeg","Goiabeiras Shopping":"https://www.midianews.com.br/storage/webdisco/2022/06/07/886x590/58197bde5b422b24e3e4ab575aa5f167.jpg","Pantanal Shopping":"https://www.imagens.cuiaba.mt.gov.br/1_shopping_pantanal.jpg","Nativas Grill Cuiabá (Jardim Aclimação / Miguel Sutil)":"https://www.midianews.com.br/storage/webdisco/2025/07/29/886x590/cd39a7884dda40e0f7307e076db5b205.jpg","Lélis Peixaria (Bairro Goiabeiras)":"https://veja.abril.com.br/wp-content/uploads/2017/05/dsc9264.jpg?quality=70&strip=info&w=919","Malcom Pub (Av. Miguel Sutil / Santa Rosa)":"https://www.folhamax.com/storage/webdisco/2024/12/01/810x519/b2373c065d27b26cd0e853f25ea15014.jpg","Musiva (Av. Beira Rio)":"https://photos.wikimapia.org/p/00/04/11/98/04_big.jpg","Due Ladroni":"https://www.olharconceito.com.br/imgsite/noticias/016768/amp-_RFP9776.jpg","Olga Cozinha Italiana":"https://www.tvmaisnews.com.br/imgsite/noticias/amp-WhatsApp-Image-2023-10-09-at-08.31.02.jpeg","Outback Steakhouse (Shopping Estação Cuiabá)":"https://www.rdnews.com.br/storage/webdisco/2019/02/06/1024x656/e0b8d8912dc0b250e2339d191acedfb5.jpg","Bar do Jarbas (Praça Popular / Bairro Popular)":"https://www.rdnews.com.br/storage/webdisco/2018/01/07/1024x656/d6a2f1e91c1af45fabafc1165cb2e213.jpg","Bar do Jarbas (Praça Popular)":"https://www.rdnews.com.br/storage/webdisco/2018/01/07/1024x656/d6a2f1e91c1af45fabafc1165cb2e213.jpg"};
const LEISURE_PHOTO_MIGRATION_V168='versatil_leisure_photos_v168';
if(!localStorage.getItem(LEISURE_PHOTO_MIGRATION_V168)){
  for(const n of db.leisureGuide||[]){
    if(n.type!=='place')continue;
    for(const [k,v] of Object.entries(LEISURE_RESEARCHED_PHOTOS_V168)){
      if(n.name===k||String(n.name||'').startsWith(k)||k.startsWith(String(n.name||''))){n.imageUrl=v;break;}
    }
  }
  save();
  localStorage.setItem(LEISURE_PHOTO_MIGRATION_V168,'1');
}

const id=()=>Math.random().toString(36).slice(2)+Date.now().toString(36);
const money=v=>new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(Number(v)||0);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const today=()=>new Date().toISOString().slice(0,10);
const room=()=>db.rooms.find(r=>r.id===session?.roomId);
const roomNumber=r=>String(r?.number??String(r?.name||'').replace(/^(Quarto|Apartamento)\s*/i,'')).trim();
const roomLabel=r=>`${r?.type==='apartamento'?'Apartamento':'Quarto'} ${roomNumber(r)}`.trim();
const normalizeUnit=s=>String(s||'').trim().toLowerCase().replace(/\s+/g,' ');
function findRegisteredRoom(value){
  const q=normalizeUnit(value);
  return db.rooms.find(r=>{
    const number=normalizeUnit(roomNumber(r));
    const label=normalizeUnit(roomLabel(r));
    return q===number || q===label;
  });
}

const productPrice=p=>room()?.type==='apartamento'?p.a:p.q;

let calendarViewMonth=new Date().getMonth();
let calendarViewYear=new Date().getFullYear();






function ensureCalendarOrders(){
  if(!Array.isArray(db.calendarOrders)) db.calendarOrders=[];

  for(const o of db.orders||[]){
    for(const item of o.items||[]){
      const p=db.products.find(x=>x.id===item.productId);
      const group=capacityGroupForProduct(p);

  if(p.id==='diarista' && (cart||[]).some(i=>i.productId==='diarista')){
    return alert('A Diarista está limitada a 1 solicitação por usuário no carrinho.');
  }
      const uses=item.schedule?.length?item.schedule:[{date:item.date,period:item.period||''}];

      uses.forEach((use,useIndex)=>{
        const existing=db.calendarOrders.find(e=>e.orderId===o.id && e.itemId===item.id && Number(e.useIndex||0)===useIndex);

        if(!existing){
          db.calendarOrders.push({
            id:id(),
            orderId:o.id,
            itemId:item.id,
            useIndex,
            date:use.date,
            period:use.period||'',
            productId:item.productId,
            categoryId:productCategoryId(item.productId),
            capacityGroup:group,
            name:item.name,
            qty:item.qty,
            price:item.price,
            createdAt:o.createdAt
          });
        }else{
          existing.categoryId=productCategoryId(existing.productId);
          existing.capacityGroup=capacityGroupForProduct(db.products.find(x=>x.id===existing.productId));
        }
      });
    }
  }

  const validOrderIds=new Set((db.orders||[]).map(o=>o.id));
  db.calendarOrders=db.calendarOrders.filter(e=>validOrderIds.has(e.orderId));
  save();
}
function addOrderToAppCalendar(order){
  if(!Array.isArray(db.calendarOrders)) db.calendarOrders=[];

  for(const item of order.items||[]){
    const p=db.products.find(x=>x.id===item.productId);
    const group=capacityGroupForProduct(p);
    const uses=item.schedule?.length?item.schedule:[{date:item.date,period:item.period||''}];

    uses.forEach((use,useIndex)=>{
      db.calendarOrders.push({
        id:id(),
        orderId:order.id,
        itemId:item.id,
        useIndex,
        date:use.date,
        period:use.period||'',
        productId:item.productId,
        categoryId:productCategoryId(item.productId),
        capacityGroup:group,
        name:item.name,
        qty:item.qty,
        price:item.price,
        createdAt:order.createdAt
      });
    });
  }
  save();
}
function removeOrderFromAppCalendar(orderId){
  if(!Array.isArray(db.calendarOrders)) db.calendarOrders=[];
  db.calendarOrders=db.calendarOrders.filter(e=>e.orderId!==orderId);
  save();
}






function packageUseCount(p){
  if(!p || p.cat!=='pacotes') return 1;

  const byId={
    'pkg-diarista2':2,
    'pkg-padrao2':2,
    'pkg-padrao4':4,
    'pkg-express2':2,
    'pkg-express4':4,
    'pkg-wc2':2,
    'pkg-wc4':4,
    'pkg-sala2':2,
    'pkg-sala2-serv':2,
    'pkg-sala2-sem':2,
    'pkg-sala5':5,
    'pkg-sala5-serv':5,
    'pkg-sala5-sem':5
  };

  if(byId[p.id])return byId[p.id];

  if(/4\s*x/i.test(p.name||''))return 4;
  if(/2\s*x/i.test(p.name||''))return 2;
  if(/semanal/i.test(p.name||''))return 5;

  return 1;
}

function isRoomPackage(p){
  if(!p || p.cat!=='pacotes')return false;
  return /^pkg-sala/i.test(p.id||'') || /sala/i.test(p.name||'');
}

function productPeriodMode(p){
  if(!p) return 'none';
  if(p.cat==='servicos' || p.cat==='enxoval') return 'service';
  if(p.id==='cafe') return 'rental';
  if(p.halfDay) return 'rental';
  if(p.cat==='pacotes') return isRoomPackage(p)?'rental':'service';
  return 'none';
}
function productRequiresPeriod(p){
  if(p?.id==='diarista')return false;
  return productPeriodMode(p)!=='none';
}

function periodValueForProduct(p,slot){
  const mode=productPeriodMode(p);
  if(mode==='service'){
    return slot==='morning'?'09:00-11:00':'13:00-15:00';
  }
  return slot==='morning'?'06:00-12:00':'13:00-19:00';
}

function periodOptionLabelForProduct(p,slot){
  const mode=productPeriodMode(p);
  if(mode==='service'){
    return slot==='morning'?'Manhã • 09 às 11':'Tarde • 13 às 15';
  }
  return slot==='morning'?'Manhã • 06 às 12':'Tarde • 13 às 19';
}

function packageScheduleFieldId(pid,index,type){
  return `pkg_${type}_${pid}_${index}`;
}

function renderPackageUseRow(p,index,date=today()){
  const slots=availableSlotsForProductDate(p,date);
  return `<div class="package-use-row" data-package-use="${index}">
    <div class="package-use-title">Utilização ${index+1}</div><button class="cat leisure-entry-card" onclick="page='leisure';render()"><div class="ico">📍</div><h3>Lazer e Conveniência</h3><p>Conheça Cuiabá e arredores.<br><span class="leisure-card-soft">Encontre tudo ao seu redor.</span></p></button>
    <div class="field">
      <label>Data</label>
      <input id="${packageScheduleFieldId(p.id,index,'date')}" type="date" min="${today()}" value="${date}" onchange="refreshPackageUseAvailability('${p.id}',${index})">
    </div>
    <div class="field">
      <label>Período</label>
      <select id="${packageScheduleFieldId(p.id,index,'period')}" ${slots.length?'':'disabled'}>
        ${slots.map(slot=>`<option value="${periodValueForProduct(p,slot)}">${periodOptionLabelForProduct(p,slot)}</option>`).join('')}
      </select>
      <div id="${packageScheduleFieldId(p.id,index,'msg')}" class="availability-message ${slots.length?'':'show'}">${slots.length?'':'Lamentamos mas nesta data e período não há disponibilidade, por favor selecione outra data de sua conveniência.'}</div>
    </div>
  </div>`;
}

function refreshPackageUseAvailability(pid,index){
  const p=db.products.find(x=>x.id===pid);
  if(!p)return;
  const date=document.getElementById(packageScheduleFieldId(pid,index,'date'))?.value||'';
  const select=document.getElementById(packageScheduleFieldId(pid,index,'period'));
  const msg=document.getElementById(packageScheduleFieldId(pid,index,'msg'));
  const slots=date?availableSlotsForProductDate(p,date):[];

  if(select){
    select.innerHTML=slots.map(slot=>`<option value="${periodValueForProduct(p,slot)}">${periodOptionLabelForProduct(p,slot)}</option>`).join('');
    select.disabled=!slots.length;
  }
  if(msg){
    msg.textContent=slots.length?'':'Lamentamos mas nesta data e período não há disponibilidade, por favor selecione outra data de sua conveniência.';
    msg.className=`availability-message ${slots.length?'':'show'}`;
  }
}

function packageScheduleFromCard(p){
  const count=packageUseCount(p);
  const schedule=[];
  for(let i=0;i<count;i++){
    const date=document.getElementById(packageScheduleFieldId(p.id,i,'date'))?.value||'';
    const period=document.getElementById(packageScheduleFieldId(p.id,i,'period'))?.value||'';
    schedule.push({date,period});
  }
  return schedule;
}




function validateScheduleAgainstCapacity(p,schedule,includeCart=true){
  const local=[];
  const group=capacityGroupForProduct(p);
  const fullDay=isDailyRentalProduct(p)||isDailyUnitPackage(p);

  for(const use of schedule){
    if(!use.date||!use.period){
      return {ok:false,message:'Lamentamos mas nesta data e período não há disponibilidade, por favor selecione outra data de sua conveniência.'};
    }

    const selectedSlot=bookingSlotFromPeriod(use.period);
    if(!selectedSlot){
      return {ok:false,message:'Período inválido. Selecione novamente.'};
    }

    const slotsToCheck=fullDay?['morning','afternoon']:[selectedSlot];

    for(const slot of slotsToCheck){
      if(productClosedForSelection(p,use.date,slot)||capacityGroupSlotOccupied(use.date,slot,group)){
        return {ok:false,message:fullDay
          ?'Lamentamos, esta diária está indisponível na data selecionada. Por favor selecione outra data.'
          :'Lamentamos mas nesta data e período não há disponibilidade, por favor selecione outra data de sua conveniência.'};
      }

      if(includeCart){
        const busy=(cart||[]).some(i=>{
          const ip=db.products.find(x=>x.id===i.productId);
          if(capacityGroupForProduct(ip)!==group)return false;

          const iFullDay=isDailyRentalProduct(ip)||isDailyUnitPackage(ip);
          const uses=i.schedule?.length?i.schedule:[{date:i.date,period:i.period}];

          return uses.some(u=>{
            if(u.date!==use.date)return false;
            if(iFullDay)return true;
            const cartSlot=bookingSlotFromPeriod(u.period);
            return cartSlot===slot;
          });
        });

        if(busy){
          return {ok:false,message:'Já existe um item incompatível no carrinho para esta data.'};
        }
      }
    }

    if(fullDay){
      if(local.some(x=>x.date===use.date)){
        return {ok:false,message:'As utilizações deste pacote diário não podem usar a mesma data.'};
      }
      local.push({date:use.date,slot:'full-day'});
    }else{
      if(local.some(x=>x.date===use.date&&x.slot===selectedSlot)){
        return {ok:false,message:'As utilizações do mesmo pacote não podem ocupar a mesma data e período.'};
      }
      local.push({date:use.date,slot:selectedSlot});
    }
  }

  return {ok:true};
}

const SERVICE_DAILY_LIMIT=3;

function serviceDailyPublishedCount(date){
  const src=db.serviceDailyCapacity||{};
  return Math.max(0,Number(src[date]||0));
}

function serviceDailyLocalConfirmedCount(date){
  // Adds only orders made on this device that may not yet have reached data.json.
  return (db.orders||[]).filter(o=>!o.status||o.status==='ativo').reduce((sum,o)=>{
    return sum+(o.items||[]).reduce((n,i)=>{
      const p=db.products.find(x=>x.id===i.productId);
      if(p?.cat!=='servicos'||i.date!==date)return n;
      return n+Math.max(1,Number(i.qty||1));
    },0);
  },0);
}

function serviceDailyCartCount(date,ignoreCartId=''){
  return (cart||[]).reduce((sum,i)=>{
    if(ignoreCartId&&i.id===ignoreCartId)return sum;
    const p=db.products.find(x=>x.id===i.productId);
    if(p?.cat!=='servicos'||i.date!==date)return sum;
    return sum+Math.max(1,Number(i.qty||1));
  },0);
}

function serviceDailyUsed(date){
  // Never double-count local confirmed orders that are already reflected publicly:
  // use the larger of published and local confirmed, then add the current cart.
  return Math.max(serviceDailyPublishedCount(date),serviceDailyLocalConfirmedCount(date))
    +serviceDailyCartCount(date);
}

function serviceDailyRemaining(date){
  return Math.max(0,SERVICE_DAILY_LIMIT-serviceDailyUsed(date));
}

function serviceDayHasCapacity(date,requested=1){
  return serviceDailyRemaining(date)>=Math.max(1,Number(requested||1));
}

function capacityGroupForProduct(p){
  if(!p)return '';

  // Serviço de café possui capacidade própria e nunca é bloqueado
  // pela ocupação das salas ou demais locações.
  if(p.id==='cafe')return 'cafe';

  if(p.cat==='servicos')return 'servicos';
  if(p.cat==='enxoval')return 'servicos_enxoval';
  if(p.cat==='locacoes')return 'locacoes';

  if(p.cat==='pacotes'){
    return isRoomPackage(p)?'locacoes':'servicos_enxoval';
  }

  return p.cat||'';
}

function capacityGroupForEntry(e){
  const p=db.products.find(x=>x.id===e.productId);
  return capacityGroupForProduct(p) || e.capacityGroup || '';
}
function productCategoryId(productId){
  return db.products.find(p=>p.id===productId)?.cat||'';
}
function calendarEntryCategory(e){
  return e.categoryId||productCategoryId(e.productId);
}

function normalizedEntrySlots(e){
  const p=db.products.find(x=>x.id===e.productId);

  if(isDailyRentalProduct(p)||isDailyUnitPackage(p)){
    return ['morning','afternoon'];
  }

  if(e.period){
    const s=bookingSlotFromPeriod(e.period);
    return s?[s]:[];
  }

  return ['morning','afternoon'];
}
function capacityGroupSlotOccupied(date,slot,groupId,ignoreOrderId=''){
  return (db.calendarOrders||[]).some(e=>{
    if(e.date!==date)return false;
    if(ignoreOrderId && e.orderId===ignoreOrderId)return false;
    if(capacityGroupForEntry(e)!==groupId)return false;
    return normalizedEntrySlots(e).includes(slot);
  });
}
function categorySlotOccupied(date,slot,categoryId,ignoreOrderId=''){
  const p=db.products.find(x=>x.cat===categoryId);
  const group=p?capacityGroupForProduct(p):categoryId;
  return capacityGroupSlotOccupied(date,slot,group,ignoreOrderId);
}


function cartCategorySlotOccupied(date,slot,categoryId){
  const sourceProduct=db.products.find(x=>x.cat===categoryId);
  const targetGroup=sourceProduct?capacityGroupForProduct(sourceProduct):categoryId;

  return (cart||[]).some(i=>{
    if(i.date!==date && !(i.schedule||[]).some(u=>u.date===date))return false;

    const p=db.products.find(x=>x.id===i.productId);
    if(capacityGroupForProduct(p)!==targetGroup)return false;

    const uses=i.schedule?.length?i.schedule:[{date:i.date,period:i.period}];
    return uses.some(use=>{
      if(use.date!==date)return false;
      if(use.period)return bookingSlotFromPeriod(use.period)===slot;
      return true;
    });
  });
}





function isDailyRentalProduct(product){
  if(!product||product.cat!=='locacoes')return false;

  const dailyIds=[
    'churras-serv',
    'churras-sem',
    'sala-dia-serv',
    'sala-dia-sem',
    'moto-dia'
  ];

  if(dailyIds.includes(product.id))return true;

  return !productRequiresPeriod(product);
}
function isDailyUnitPackage(product){
  if(!product||product.cat!=='pacotes')return false;
  return packageBaseProductIds(product).some(pid=>isDailyRentalProduct(db.products.find(p=>p.id===pid)));
}
function closureForDailyUnit(product,date){
  return isSlotClosed(date,'morning',product)||isSlotClosed(date,'afternoon',product);
}

function productClosedForSelection(product,date,slot){
  if(isDailyRentalProduct(product)||isDailyUnitPackage(product))return closureForDailyUnit(product,date);
  return isSlotClosed(date,slot,product);
}


function availableSlotsForProductDate(product,date){
  const group=capacityGroupForProduct(product);

  // Invisible shared stock: only products in category Serviços.
  // Maximum 3 service requests per calendar day, independent of morning/afternoon.
  if(product?.cat==='servicos'){
    if(!serviceDayHasCapacity(date,1))return [];
    const slots=['morning','afternoon'].filter(slot=>!productClosedForSelection(product,date,slot));
    // Diarista has no period. It remains available while the day has stock and
    // the date was not completely closed by the Admin.
    if(product.id==='diarista')return slots.length?['morning','afternoon']:[];
    return slots;
  }

  const busy=slot=>{
    if(productClosedForSelection(product,date,slot)||capacityGroupSlotOccupied(date,slot,group))return true;
    return (cart||[]).some(i=>{
      const ip=db.products.find(x=>x.id===i.productId);if(capacityGroupForProduct(ip)!==group)return false;
      const uses=i.schedule?.length?i.schedule:[{date:i.date,period:i.period}];
      return uses.some(u=>u.date===date&&(u.period?bookingSlotFromPeriod(u.period)===slot:true));
    });
  };

  if(isDailyRentalProduct(product)||isDailyUnitPackage(product)){
    if(busy('morning')||busy('afternoon'))return [];
    return ['morning','afternoon'];
  }
  return ['morning','afternoon'].filter(s=>!busy(s));
}
function categoryDayUnavailable(product,date){
  return availableSlotsForProductDate(product,date).length===0;
}
function slotLabel(slot){return slot==='morning'?'Manhã':'Tarde'}

function calendarEntriesForDate(date){
  return (db.calendarOrders||[])
    .filter(e=>e.date===date)
    .sort((a,b)=>new Date(b.createdAt||0)-new Date(a.createdAt||0));
}

function openCalendarOrder(orderId){
  const order=db.orders.find(o=>o.id===orderId);
  if(!order)return alert('Pedido não encontrado.');

  document.getElementById('orderCalendarModal')?.remove();
  const modal=document.createElement('div');
  modal.id='orderCalendarModal';
  modal.className='modal-overlay';
  modal.innerHTML=`<div class="modal-card">
    <div class="row between">
      <div>
        <h2 style="margin:0">Pedido completo</h2>
        <p class="muted" style="margin:4px 0 0">${esc(order.client.name)} • ${esc(order.client.roomName)} • ${esc(order.client.email||'')}</p>
      </div>
      <button class="btn" onclick="closeCalendarOrder()">Fechar</button>
    </div>

    <div class="notice">
      <b>Pedido:</b> ${esc(order.id)}<br>
      <b>Data da solicitação:</b> ${new Date(order.createdAt).toLocaleString('pt-BR')}<br>
      <b>Status:</b> ${esc(order.status||'ativo')}
    </div>

    <div style="overflow:auto">
      <table>
        <tr><th>Serviço</th><th>Data</th><th>Período</th><th>Qtd.</th><th>Unit.</th><th>Total</th></tr>
        ${(order.items||[]).map(i=>`<tr>
          <td>${esc(i.name)}</td>
          <td>${formatDateBR(i.date)}</td>
          <td>${i.period?`<b>${esc(periodLabel(i.period))}</b>`:'—'}</td>
          <td>${i.qty}</td>
          <td>${money(i.price)}</td>
          <td>${money(i.qty*i.price)}</td>
        </tr>`).join('')}
      </table>
    </div>

    <div class="total" style="margin-top:14px">Total: ${money(order.total)}</div>
  </div>`;
  document.body.appendChild(modal);
}

function closeCalendarOrder(){
  document.getElementById('orderCalendarModal')?.remove();
}


function ensureCalendarData(){
  if(!Array.isArray(db.closedSlots))db.closedSlots=[];
  if(Array.isArray(db.closedDates)){
    for(const d of db.closedDates){
      const a=d+'|morning',b=d+'|afternoon';
      if(!db.closedSlots.includes(a))db.closedSlots.push(a);
      if(!db.closedSlots.includes(b))db.closedSlots.push(b);
    }
  }
  if(!Array.isArray(db.availabilityClosures))db.availabilityClosures=[];
  if(!db.availabilityClosuresMigratedV132){
    for(const key of db.closedSlots){
      const [date,slot]=String(key).split('|');
      if(!date||!slot)continue;
      const cid=availabilityClosureId(date,slot,'all','all');
      if(!db.availabilityClosures.some(c=>c.id===cid)){
        db.availabilityClosures.push({id:cid,date,slot,scopeType:'all',scopeId:'all',scopeLabel:'Todos os itens',createdAt:new Date().toISOString()});
      }
    }
    db.closedSlots=[];
    db.availabilityClosuresMigratedV132=true;
    save();
  }
}
ensureCalendarData();

function slotKey(date,slot){return `${date}|${slot}`}
function availabilityClosureId(date,slot,scopeType,scopeId){
  return 'close_'+`${date}|${slot}|${scopeType}|${scopeId}`.replace(/[^a-zA-Z0-9_-]/g,'_');
}
function closuresForSlot(date,slot){
  return (db.availabilityClosures||[]).filter(c=>c.date===date&&c.slot===slot);
}

function packageBaseProductIds(product){
  const map={
    'pkg-diarista2':['diarista'],
    'pkg-padrao2':['limpeza-padrao'],
    'pkg-padrao4':['limpeza-padrao'],
    'pkg-express2':['limpeza-express'],
    'pkg-express4':['limpeza-express'],
    'pkg-wc2':['limpeza-wc'],
    'pkg-wc4':['limpeza-wc'],
    'pkg-sala2-serv':['sala-dia-serv'],
    'pkg-sala5-serv':['sala-dia-serv'],
    'pkg-sala2-sem':['sala-dia-sem'],
    'pkg-sala5-sem':['sala-dia-sem']
  };
  return map[product?.id]||[];
}

function packageMatchesClosure(product,closure){
  if(!product||product.cat!=='pacotes')return false;
  const ids=packageBaseProductIds(product);
  if(!ids.length)return false;

  if(closure.scopeType==='product')return ids.includes(closure.scopeId);
  if(closure.scopeType==='category'){
    return ids.some(pid=>db.products.find(p=>p.id===pid)?.cat===closure.scopeId);
  }
  return closure.scopeType==='all';
}



function productMatchesClosure(product,closure){
  if(!closure||!product)return false;

  // Serviço de café mantém disponibilidade própria e nunca é fechado
  // pelos bloqueios manuais do calendário, inclusive "Todos os itens".
  if(product.id==='cafe')return false;

  if(closure.scopeType==='all')return true;

  if(product.cat==='pacotes'&&packageMatchesClosure(product,closure))return true;

  if(closure.scopeType==='category')return product.cat===closure.scopeId;
  if(closure.scopeType==='product')return product.id===closure.scopeId;
  return false;
}
function isSlotClosed(date,slot,product=null){
  const closures=closuresForSlot(date,slot);
  if(product)return closures.some(c=>productMatchesClosure(product,c));
  return closures.some(c=>c.scopeType==='all');
}
function slotClosureStatus(date,slot){
  const closures=closuresForSlot(date,slot);
  if(closures.some(c=>c.scopeType==='all'))return 'closed';
  if(closures.length)return 'partial';
  return 'open';
}
function slotClosureSummary(date,slot){
  const closures=closuresForSlot(date,slot);
  if(!closures.length)return 'Aberto';
  if(closures.some(c=>c.scopeType==='all'))return 'Fechado';
  return `Parcial (${closures.length})`;
}
function isBookingClosed(date,period='',product=null){
  const slot=bookingSlotFromPeriod(period);
  if(slot)return isSlotClosed(date,slot,product);
  return isSlotClosed(date,'morning',product)&&isSlotClosed(date,'afternoon',product);
}

function periodLabel(period){
  if(String(period||'').startsWith('09:00')) return 'Manhã • 09 às 11';
  if(String(period||'').startsWith('06:00')) return 'Manhã • 06 às 12';
  if(String(period||'').startsWith('13:00-15:00')) return 'Tarde • 13 às 15';
  if(String(period||'').startsWith('13:00-19:00')) return 'Tarde • 13 às 19';
  return String(period||'');
}

function bookingSlotFromPeriod(period){
  const p=String(period||'');
  if(p.startsWith('06:00') || p.startsWith('09:00')) return 'morning';
  if(p.startsWith('13:00')) return 'afternoon';
  return '';
}
function migrateCatalogV119(){
  const canonical={
    'diarista':{name:'Diarista'},
    'limpeza-padrao':{name:'Limpeza padrão'},
    'limpeza-express':{name:'Limpeza express'},
    'limpeza-wc':{name:'Limpeza de WCs'},
    'troca-geral':{name:'Troca geral de cama e toalhas'},
    'troca-cama':{name:'Troca de roupa de cama'},
    'troca-toalhas':{name:'Troca de toalhas'},
    'churras-serv':{name:'Locação de churrasqueira com serviço'},
    'churras-sem':{name:'Locação de churrasqueira sem serviço'},
    'sala-dia-serv':{name:'Locação diária de sala de reunião com serviço'},
    'sala-dia-sem':{name:'Locação diária de sala de reunião sem serviço'},
    'sala-meio-serv':{name:'Locação de sala de reunião por meia diária com serviço'},
    'sala-meio-sem':{name:'Locação de sala de reunião por meia diária sem serviço'},
    'cafe':{name:'Serviço de café na sala'},
    'moto-dia':{name:'Locação diária de moto elétrica'},
    'moto-meio':{name:'Locação de moto elétrica por meia diária'},
    'pkg-diarista2':{name:'Pacote de diarista 2x',q:400,a:400},
    'pkg-padrao2':{name:'Pacote de limpeza padrão 2x',q:240,a:240},
    'pkg-padrao4':{name:'Pacote de limpeza padrão 4x',q:400,a:400},
    'pkg-express2':{name:'Pacote de limpeza express 2x',q:200,a:200},
    'pkg-express4':{name:'Pacote de limpeza express 4x',q:380,a:380},
    'pkg-wc2':{name:'Pacote de limpeza de WCs 2x',q:150,a:150},
    'pkg-wc4':{name:'Pacote de limpeza de WCs 4x',q:280,a:280}
  };

  for(const p of db.products||[]){
    const c=canonical[p.id];
    if(c)Object.assign(p,c);
  }

  const requiredPackages=[
    {id:'pkg-sala2-serv',cat:'pacotes',name:'Pacote de locação de sala 2x com serviço',icon:'🎁',desc:'Duas diárias de sala com serviço dentro do período de sua hospedagem.',q:750,a:750},
    {id:'pkg-sala2-sem',cat:'pacotes',name:'Pacote de locação de sala 2x sem serviço',icon:'🎁',desc:'Duas diárias de sala sem serviço dentro do período de sua hospedagem.',q:550,a:550},
    {id:'pkg-sala5-serv',cat:'pacotes',name:'Pacote semanal de locação de sala com serviço',icon:'🎁',desc:'Locação de sala por 5 dias corridos com serviço.',q:1800,a:1800},
    {id:'pkg-sala5-sem',cat:'pacotes',name:'Pacote semanal de locação de sala sem serviço',icon:'🎁',desc:'Locação de sala por 5 dias corridos sem serviço.',q:1250,a:1250}
  ];

  for(const item of requiredPackages){
    const p=db.products.find(x=>x.id===item.id);
    if(p)Object.assign(p,item);
    else db.products.push({...item});
  }

  // Produtos antigos de sala permanecem no banco apenas se já houver pedido histórico
  // referenciando-os; caso contrário, são retirados do catálogo para não duplicar opções.
  const legacyIds=['pkg-sala2','pkg-sala5'];
  for(const legacyId of legacyIds){
    const used=(db.orders||[]).some(o=>(o.items||[]).some(i=>i.productId===legacyId));
    if(!used)db.products=db.products.filter(p=>p.id!==legacyId);
  }

  save();
}
migrateCatalogV119();


function cleanExistingOrdersV121(){
  const CLEAN_KEY='versatil_v121_orders_cleaned';
  if(localStorage.getItem(CLEAN_KEY)==='1')return;

  db.orders=[];
  db.calendarOrders=[];
  save();

  localStorage.removeItem('versatil_last_email');
  localStorage.removeItem('versatil_last_client_email');
  localStorage.removeItem('versatil_last_admin_email');
  localStorage.removeItem('versatil_last_cancel_email');

  localStorage.setItem(CLEAN_KEY,'1');
}
cleanExistingOrdersV121();


function migrateV132(){
  const cafe=db.products.find(p=>p.id==='cafe');
  if(cafe)cafe.name='Serviço de café na sala';
  for(const o of db.orders||[])for(const i of o.items||[])if(i.productId==='cafe')i.name='Serviço de café na sala';
  for(const e of db.calendarOrders||[])if(e.productId==='cafe')e.name='Serviço de café na sala';
  save();
}
migrateV132();








function migrateV148Units(){
  const canonicalRooms=[{"id":"unit_101","name":"Apartamento 101","number":"101","type":"apartamento"},{"id":"unit_102","name":"Apartamento 102","number":"102","type":"apartamento"},{"id":"unit_103","name":"Apartamento 103","number":"103","type":"apartamento"},{"id":"unit_104","name":"Apartamento 104","number":"104","type":"apartamento"},{"id":"unit_105","name":"Apartamento 105","number":"105","type":"apartamento"},{"id":"unit_106","name":"Apartamento 106","number":"106","type":"apartamento"},{"id":"unit_107","name":"Apartamento 107","number":"107","type":"apartamento"},{"id":"unit_108a","name":"Quarto 108A","number":"108A","type":"quarto"},{"id":"unit_108b","name":"Quarto 108B","number":"108B","type":"quarto"},{"id":"unit_201","name":"Apartamento 201","number":"201","type":"apartamento"},{"id":"unit_202","name":"Apartamento 202","number":"202","type":"apartamento"},{"id":"unit_203","name":"Apartamento 203","number":"203","type":"apartamento"},{"id":"unit_204","name":"Apartamento 204","number":"204","type":"apartamento"},{"id":"unit_205","name":"Apartamento 205","number":"205","type":"apartamento"},{"id":"unit_206","name":"Apartamento 206","number":"206","type":"apartamento"},{"id":"unit_207a","name":"Quarto 207A","number":"207A","type":"quarto"},{"id":"unit_207b","name":"Quarto 207B","number":"207B","type":"quarto"},{"id":"unit_208a","name":"Quarto 208A","number":"208A","type":"quarto"},{"id":"unit_208b","name":"Quarto 208B","number":"208B","type":"quarto"},{"id":"unit_301a","name":"Quarto 301A","number":"301A","type":"quarto"},{"id":"unit_301b","name":"Quarto 301B","number":"301B","type":"quarto"},{"id":"unit_302a","name":"Quarto 302A","number":"302A","type":"quarto"},{"id":"unit_302b","name":"Quarto 302B","number":"302B","type":"quarto"},{"id":"unit_303a","name":"Quarto 303A","number":"303A","type":"quarto"},{"id":"unit_303b","name":"Quarto 303B","number":"303B","type":"quarto"},{"id":"unit_304","name":"Apartamento 304","number":"304","type":"apartamento"},{"id":"unit_305a","name":"Quarto 305A","number":"305A","type":"quarto"},{"id":"unit_305b","name":"Quarto 305B","number":"305B","type":"quarto"},{"id":"unit_306a","name":"Quarto 306A","number":"306A","type":"quarto"},{"id":"unit_306b","name":"Quarto 306B","number":"306B","type":"quarto"},{"id":"unit_307a","name":"Quarto 307A","number":"307A","type":"quarto"},{"id":"unit_307b","name":"Quarto 307B","number":"307B","type":"quarto"},{"id":"unit_308a","name":"Quarto 308A","number":"308A","type":"quarto"},{"id":"unit_308b","name":"Quarto 308B","number":"308B","type":"quarto"},{"id":"unit_401a","name":"Quarto 401A","number":"401A","type":"quarto"},{"id":"unit_401b","name":"Quarto 401B","number":"401B","type":"quarto"},{"id":"unit_402a","name":"Quarto 402A","number":"402A","type":"quarto"},{"id":"unit_402b","name":"Quarto 402B","number":"402B","type":"quarto"},{"id":"unit_403a","name":"Quarto 403A","number":"403A","type":"quarto"},{"id":"unit_403b","name":"Quarto 403B","number":"403B","type":"quarto"},{"id":"unit_404a","name":"Quarto 404A","number":"404A","type":"quarto"},{"id":"unit_404b","name":"Quarto 404B","number":"404B","type":"quarto"},{"id":"unit_405a","name":"Quarto 405A","number":"405A","type":"quarto"},{"id":"unit_405b","name":"Quarto 405B","number":"405B","type":"quarto"},{"id":"unit_406a","name":"Quarto 406A","number":"406A","type":"quarto"},{"id":"unit_406b","name":"Quarto 406B","number":"406B","type":"quarto"},{"id":"unit_407a","name":"Quarto 407A","number":"407A","type":"quarto"},{"id":"unit_407b","name":"Quarto 407B","number":"407B","type":"quarto"},{"id":"unit_408a","name":"Quarto 408A","number":"408A","type":"quarto"},{"id":"unit_408b","name":"Quarto 408B","number":"408B","type":"quarto"},{"id":"unit_501a","name":"Quarto 501A","number":"501A","type":"quarto"},{"id":"unit_501b","name":"Quarto 501B","number":"501B","type":"quarto"},{"id":"unit_502a","name":"Quarto 502A","number":"502A","type":"quarto"},{"id":"unit_502b","name":"Quarto 502B","number":"502B","type":"quarto"},{"id":"unit_503a","name":"Quarto 503A","number":"503A","type":"quarto"},{"id":"unit_503b","name":"Quarto 503B","number":"503B","type":"quarto"},{"id":"unit_504a","name":"Quarto 504A","number":"504A","type":"quarto"},{"id":"unit_504b","name":"Quarto 504B","number":"504B","type":"quarto"},{"id":"unit_505a","name":"Quarto 505A","number":"505A","type":"quarto"},{"id":"unit_505b","name":"Quarto 505B","number":"505B","type":"quarto"},{"id":"unit_506a","name":"Quarto 506A","number":"506A","type":"quarto"},{"id":"unit_506b","name":"Quarto 506B","number":"506B","type":"quarto"},{"id":"unit_507a","name":"Quarto 507A","number":"507A","type":"quarto"},{"id":"unit_507b","name":"Quarto 507B","number":"507B","type":"quarto"},{"id":"unit_508","name":"Apartamento 508","number":"508","type":"apartamento"},{"id":"unit_601a","name":"Quarto 601A","number":"601A","type":"quarto"},{"id":"unit_601b","name":"Quarto 601B","number":"601B","type":"quarto"},{"id":"unit_602a","name":"Quarto 602A","number":"602A","type":"quarto"},{"id":"unit_602b","name":"Quarto 602B","number":"602B","type":"quarto"},{"id":"unit_603a","name":"Quarto 603A","number":"603A","type":"quarto"},{"id":"unit_603b","name":"Quarto 603B","number":"603B","type":"quarto"},{"id":"unit_604a","name":"Quarto 604A","number":"604A","type":"quarto"},{"id":"unit_604b","name":"Quarto 604B","number":"604B","type":"quarto"},{"id":"unit_605a","name":"Quarto 605A","number":"605A","type":"quarto"},{"id":"unit_605b","name":"Quarto 605B","number":"605B","type":"quarto"},{"id":"unit_606a","name":"Quarto 606A","number":"606A","type":"quarto"},{"id":"unit_606b","name":"Quarto 606B","number":"606B","type":"quarto"},{"id":"unit_607a","name":"Quarto 607A","number":"607A","type":"quarto"},{"id":"unit_607b","name":"Quarto 607B","number":"607B","type":"quarto"},{"id":"unit_608a","name":"Quarto 608A","number":"608A","type":"quarto"},{"id":"unit_608b","name":"Quarto 608B","number":"608B","type":"quarto"}];

  const existingByNumber=new Map(
    (db.rooms||[]).map(r=>[normalizeUnit(roomNumber(r)),r])
  );

  db.rooms=canonicalRooms.map(r=>{
    const old=existingByNumber.get(normalizeUnit(r.number));
    return {
      id:old?.id||r.id,
      name:r.name,
      number:r.number,
      type:r.type
    };
  });

  const motoDia=(db.products||[]).find(p=>p.id==='moto-dia');
  if(motoDia){motoDia.q=160;motoDia.a=160;}

  const motoMeio=(db.products||[]).find(p=>p.id==='moto-meio');
  if(motoMeio){motoMeio.q=90;motoMeio.a=90;}

  save();
}
migrateV148Units();
// Preserva como padrão local os valores atuais já personalizados do café.
preserveCafeDefaultV149();





async function centralRead(action,params={}){
  if(action!=='bootstrapPublic'&&action!=='centralStatus'){
    throw new Error('Ação de leitura central não suportada.');
  }

  const response=await fetch('./data.json?v='+Date.now(),{
    method:'GET',
    cache:'no-store',
    credentials:'same-origin'
  });

  if(!response.ok)throw new Error('Base pública indisponível: HTTP '+response.status);

  const payload=await response.json();
  if(!payload?.ok)throw new Error(payload?.error||'Base pública inválida.');

  if(action==='centralStatus'){
    return {
      ok:true,
      version:payload.version||'',
      updatedAt:payload.updatedAt||''
    };
  }

  return payload;
}

function publicCentralSnapshot(){return {rooms:db.rooms||[],categories:db.categories||[],products:db.products||[],availabilityClosures:db.availabilityClosures||[],leisureGuide:db.leisureGuide||[],versatilGuide:db.versatilGuide||[],starlisGuide:db.starlisGuide||[],postalConfig:db.postalConfig||{}}}


function setPendingPublicPublication(){
  const marker={at:Date.now(),iso:new Date().toISOString()};
  localStorage.setItem(PENDING_PUBLICATION_KEY,JSON.stringify(marker));
  return marker;
}
function getPendingPublicPublication(){
  try{return JSON.parse(localStorage.getItem(PENDING_PUBLICATION_KEY)||'null')}catch(e){return null}
}
function clearPendingPublicPublication(){localStorage.removeItem(PENDING_PUBLICATION_KEY)}
function remotePublicationIsNewEnough(remoteUpdatedAt,pending){
  if(!pending)return true;
  const remoteMs=Date.parse(remoteUpdatedAt||'');
  if(!Number.isFinite(remoteMs))return false;
  return remoteMs >= (Number(pending.at||0)-2000);
}

async function loadCentralData(options={}){
  const force=!!options.force;
  const quiet=!!options.quiet;
  const leisureOpenBefore=page==='leisure'?leisureOpenIds():[];
  if(!quiet)showVersatilLoading('Sincronizando dados…');

  if(centralSyncInFlight)return;
  if(!force && centralLastSyncAt && Date.now()-centralLastSyncAt<5000)return;

  centralSyncInFlight=true;
  if(!quiet){
    centralDataStatus='carregando';
    updateCentralStatusUI();
  }

  try{
    const p=await centralRead('bootstrapPublic');
    if(!p?.ok)throw new Error(p?.error||'Resposta inválida.');

    const pending=getPendingPublicPublication();
    if(pending && !remotePublicationIsNewEnough(p.updatedAt,pending)){
      centralDataStatus='publicando';
      updateCentralStatusUI();
      setTimeout(()=>loadCentralData({force:true,quiet:true}),3000);
      return;
    }

    const c=p.data||{};
    if(Array.isArray(c.rooms)&&c.rooms.length)db.rooms=c.rooms;
    if(Array.isArray(c.categories)&&c.categories.length)db.categories=c.categories;
    if(Array.isArray(c.products)&&c.products.length)db.products=c.products;
    if(Array.isArray(c.availabilityClosures))db.availabilityClosures=c.availabilityClosures;
    if(Array.isArray(c.leisureGuide)&&c.leisureGuide.length)db.leisureGuide=c.leisureGuide;
    if(c.itineraryStats&&typeof c.itineraryStats==='object')db.itineraryStats=c.itineraryStats;
    if(c.serviceDailyCapacity&&typeof c.serviceDailyCapacity==='object')db.serviceDailyCapacity=c.serviceDailyCapacity;
    if(Array.isArray(c.versatilGuide)&&c.versatilGuide.length)db.versatilGuide=c.versatilGuide;
    ensureNormasV174();
    if(Array.isArray(c.starlisGuide)&&c.starlisGuide.length)db.starlisGuide=c.starlisGuide;
    if(c.postalConfig&&typeof c.postalConfig==='object')db.postalConfig=c.postalConfig;

    db.centralVersion=p.version||'';
    db.centralUpdatedAt=p.publishedAt||p.updatedAt||'';
    save();
    if(pending)clearPendingPublicPublication();

    centralLastSyncAt=Date.now();
    localStorage.setItem('versatil_public_last_sync',String(centralLastSyncAt));
    centralDataStatus='ok';

    if(p.version&&p.version!==APP_VERSION){
      centralDataStatus='atualizacao';
      showMandatoryUpdateNotice(p.version);
      return;
    }

    if(['leisure','versatil','starlis','postal'].includes(page)){updateCentralStatusUI();if(page==='leisure')setTimeout(()=>setupLeisureExclusiveAccordion(),0)}else{render()}
  }catch(err){
    console.warn('Base pública:',err);
    centralDataStatus='offline';
    localStorage.setItem('versatil_central_last_error',String(err?.message||err));
    if(!quiet)render();
    else updateCentralStatusUI();
  }finally{
    centralSyncInFlight=false;
    if(!quiet)hideVersatilLoading();
  }
}

function centralPost(action,payload={}){
  return fetch(GOOGLE_APPS_SCRIPT_URL+'?v='+APP_VERSION+'&t='+Date.now(),{method:'POST',mode:'no-cors',cache:'no-store',keepalive:true,headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify({action,clientVersion:APP_VERSION,...payload})});
}
async function publishPublicDataToCentral(showMessage=true){
  const marker=setPendingPublicPublication();
  centralDataStatus='publicando';
  updateCentralStatusUI();
  try{
    await centralPost('savePublicData',{data:publicCentralSnapshot(),clientPublishedAt:marker.iso});
    if(showMessage)alert('Alteração salva. A publicação está sendo concluída e o novo valor será mantido enquanto o GitHub atualiza.');
    setTimeout(()=>loadCentralData({force:true,quiet:true}),3000);
    return true
  }catch(e){
    console.error(e);
    clearPendingPublicPublication();
    centralDataStatus='offline';
    updateCentralStatusUI();
    if(showMessage)alert('Falha ao enviar alterações para a base pública.');
    return false
  }
}
function saveAndPublishPublicData(showMessage=false){save();publishPublicDataToCentral(showMessage)}

function centralStatusLabel(){
  if(centralDataStatus==='ok'){
    const stamp=db.centralUpdatedAt
      ?new Date(db.centralUpdatedAt).toLocaleString('pt-BR',{day:'2-digit',month:'2-digit',hour:'2-digit',minute:'2-digit'})
      :'';
    return stamp?`Base pública atualizada • ${stamp}`:'Base pública atualizada';
  }
  if(centralDataStatus==='offline')return 'Modo local';
  if(centralDataStatus==='atualizacao')return 'Atualização necessária';
  if(centralDataStatus==='publicando')return 'Publicando alterações…';
  return 'Sincronizando…';
}

function centralStatusHtml(){
  return `<button id="centralStatusBadge" class="central-status ${centralDataStatus}" onclick="loadCentralData({force:true})" title="Clique para atualizar agora">${centralStatusLabel()}</button>`;
}

function updateCentralStatusUI(){
  const el=document.getElementById('centralStatusBadge');
  if(!el)return;
  el.textContent=centralStatusLabel();
  el.className='central-status '+centralDataStatus;

  const text=document.getElementById('centralStatusTextV174');
  if(text)text.textContent=centralStatusLabel();

  const textV175=document.getElementById('centralStatusTextV175');
  if(textV175){
    const label=centralStatusLabel();
    textV175.textContent=label.replace('Base pública atualizada • ','Atualizado ').replace('Base pública atualizada','Atualizado');
  }
}

function showMandatoryUpdateNotice(serverVersion){
  document.getElementById('mandatoryUpdateModal')?.remove();
  const m=document.createElement('div');m.id='mandatoryUpdateModal';m.className='modal-overlay';
  m.innerHTML=`<div class="modal-card" style="max-width:520px"><h2>Atualização disponível</h2><p>Há uma versão mais recente do aplicativo.</p><div class="notice"><b>Instalada:</b> v${esc(APP_VERSION)}<br><b>Atual:</b> v${esc(serverVersion)}</div><button class="btn primary" style="width:100%" onclick="forceAppUpdate()">Atualizar agora</button></div>`;
  document.body.appendChild(m);
}
async function forceAppUpdate(){
  try{
    showVersatilLoading?.('Atualizando aplicativo…');

    if('serviceWorker' in navigator){
      const regs=await navigator.serviceWorker.getRegistrations();
      for(const r of regs){
        try{await r.update()}catch(e){}
        try{await r.unregister()}catch(e){}
      }
    }

    if('caches' in window){
      const keys=await caches.keys();
      await Promise.all(keys.map(k=>caches.delete(k)));
    }

    const u=new URL(location.href);
    u.searchParams.set('update',Date.now());
    location.replace(u.toString());
  }catch(e){
    const u=new URL(location.href);
    u.searchParams.set('update',Date.now());
    location.href=u.toString();
  }
}


function ensureVersatilLoader(){
  if(document.getElementById('versatilLoadingOverlay'))return;

  const overlay=document.createElement('div');
  overlay.id='versatilLoadingOverlay';
  overlay.className='versatil-loading-overlay';
  overlay.innerHTML=`<div class="versatil-loading-card">
    <div class="versatil-tetris-loader">
      <div class="versatil-tetris-base">
        <img class="versatil-tetris-ghost" src="logo-versatil.jpg" alt="">
        <div class="versatil-tetris-grid" id="versatilTetrisGrid"></div>
      </div>
    </div>
    <div id="versatilLoadingText" class="versatil-loading-text">Aguarde…</div>
  </div>`;
  document.body.appendChild(overlay);

  const grid=document.getElementById('versatilTetrisGrid');
  if(grid){
    const order=[
      30,31,32,33,34,35,
      24,25,27,28,26,29,
      18,20,19,23,21,22,
      12,13,17,14,16,15,
      6,11,7,9,10,8,
      0,5,1,4,2,3
    ];
    for(let i=0;i<36;i++){
      const cell=document.createElement('div');
      cell.className='versatil-tetris-piece';
      const row=Math.floor(i/6),col=i%6;
      cell.style.setProperty('--bg-x',`${-col*20}px`);
      cell.style.setProperty('--bg-y',`${-row*20}px`);
      const seq=order.indexOf(i);
      cell.style.animationDelay=`${seq*0.035}s`;
      grid.appendChild(cell);
    }
  }
}

function showVersatilLoading(message='Aguarde…'){
  ensureVersatilLoader();
  const overlay=document.getElementById('versatilLoadingOverlay');
  const txt=document.getElementById('versatilLoadingText');
  if(txt)txt.textContent=message;
  if(overlay)overlay.classList.add('show');
}

function hideVersatilLoading(){
  document.getElementById('versatilLoadingOverlay')?.classList.remove('show');
}

async function withVersatilLoading(message,action){
  showVersatilLoading(message);
  try{
    return await action();
  }finally{
    hideVersatilLoading();
  }
}

async function publishWithLoading(){
  return withVersatilLoading('Publicando alterações…',async()=>{
    await publishPublicDataToCentral(true);
  });
}




const ITINERARY_KEY='versatil_my_itinerary';
let myItinerary=[];
try{myItinerary=JSON.parse(localStorage.getItem(ITINERARY_KEY)||'[]')||[]}catch(e){myItinerary=[]}
function saveMyItinerary(){localStorage.setItem(ITINERARY_KEY,JSON.stringify(myItinerary))}
function itineraryNodeById(id){return (db.leisureGuide||[]).find(n=>n.id===id&&n.type==='place')}
function itineraryHas(id){return myItinerary.some(x=>x.id===id)}
function addToItinerary(id){
  const p=itineraryNodeById(id);if(!p)return;
  if(itineraryHas(id)){showLeisureToast('Este local já está no seu roteiro.');return}
  myItinerary.push({id:p.id,name:p.name,distance:p.distance||'',mapQuery:p.mapQuery||p.name,addedAt:new Date().toISOString()});
  saveMyItinerary();updateItineraryCountUI();showLeisureToast('Adicionado ao MEU ROTEIRO.');
}
function removeFromItinerary(id){myItinerary=myItinerary.filter(x=>x.id!==id);saveMyItinerary();render()}
function clearMyItinerary(){if(myItinerary.length&&confirm('Limpar todos os locais do seu roteiro?')){myItinerary=[];saveMyItinerary();render()}}
function updateItineraryCountUI(){document.querySelectorAll('[data-itinerary-count]').forEach(el=>el.textContent=myItinerary.length?` (${myItinerary.length})`:'')}
function showLeisureToast(text){
  let t=document.getElementById('leisureToast');
  if(!t){t=document.createElement('div');t.id='leisureToast';t.className='leisure-toast';document.body.appendChild(t)}
  t.textContent=text;t.classList.add('show');clearTimeout(window._leisureToastTimer);window._leisureToastTimer=setTimeout(()=>t.classList.remove('show'),1800);
}
function itineraryMapUrl(item){
  const q=item?.mapQuery||item?.name||'';if(/^https?:\/\//i.test(q))return q;
  return 'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(q);
}
function itineraryPage(){
  const items=myItinerary.map(x=>itineraryNodeById(x.id)||x);
  return `<div class="card itinerary-page">
    <div class="row between itinerary-head"><div><h2>MEU ROTEIRO</h2><p class="muted">${items.length?`${items.length} local(is) selecionado(s).`:'Nenhum local selecionado ainda.'}</p></div>${items.length?`<button class="btn red small" onclick="clearMyItinerary()">Limpar roteiro</button>`:''}</div>
    ${items.length?`<div class="itinerary-list">${items.map((p,i)=>`<div class="itinerary-item">
      <div class="itinerary-number">${i+1}</div><div class="itinerary-copy"><b>${esc(p.name)}</b><div class="small muted">${esc(p.distance||'')}</div></div>
      <a class="btn small" href="${esc(itineraryMapUrl(p))}" target="_blank" rel="noopener">Maps</a><button class="btn red small" onclick="removeFromItinerary('${esc(p.id)}')">Excluir</button>
    </div>`).join('')}</div>
    <div class="itinerary-confirm-box"><p><b>Ao confirmar, você receberá o roteiro em seu e-mail. Aproveite sua estada em Cuiabá!</b></p><button class="btn primary" onclick="confirmMyItinerary()">Confirmar roteiro</button></div>`:
    `<div class="notice">Abra <b>Lazer e Conveniências</b> e use o botão <b>Enviar para Roteiro</b> nos locais desejados.</div>`}
  </div>`;
}
async function confirmMyItinerary(){
  if(!myItinerary.length){alert('Seu roteiro está vazio.');return}
  const email=session?.email||'';if(!email){alert('Não foi possível identificar o e-mail deste acesso.');return}
  const items=myItinerary.map(x=>itineraryNodeById(x.id)||x).map(p=>({id:p.id,name:p.name,distance:p.distance||'',mapQuery:p.mapQuery||p.name}));
  showVersatilLoading('Enviando seu roteiro…');
  try{
    await fetch(GOOGLE_APPS_SCRIPT_URL,{method:'POST',mode:'no-cors',cache:'no-store',keepalive:true,headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify({action:'sendItinerary',clientVersion:APP_VERSION,client:{name:session?.name||'',email,roomName:session?.roomName||session?.room||''},items})});
    setSessionActivity('route');alert('Roteiro enviado para o seu e-mail. Aproveite sua estada em Cuiabá!');
    setTimeout(()=>loadCentralData({force:true,quiet:true}),2500);
  }catch(e){alert('Não foi possível enviar o roteiro agora. Tente novamente.')}finally{hideVersatilLoading()}
}


const UI_ICONS={
  book:`<svg viewBox="0 0 82 60" aria-hidden="true"><path d="M41 14C31 7 20 6 8 9v37c13-3 24-2 33 4z" fill="#fff" stroke="#0f4c81" stroke-width="2.5"/><path d="M41 14c10-7 21-8 33-5v37c-13-3-24-2-33 4z" fill="#fff" stroke="#0f4c81" stroke-width="2.5"/><path class="page1" d="M41 17c8-5 17-6 27-4v29c-10-2-19-1-27 3z" fill="#eaf4fb"/><path class="page2" d="M41 17c-8-5-17-6-27-4v29c10-2 19-1 27 3z" fill="#f7fbfe"/><path d="M41 14v36" stroke="#0f4c81" stroke-width="2.3"/></svg>`,
  hiker:`<svg viewBox="0 0 72 72" aria-hidden="true"><g stroke="#263a24" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="39" cy="13" r="7.5" fill="#f2ad69"/><path d="M32 11c2-7 11-9 16-4l7 1-8 3-14 4z" fill="#f3a82d"/><path d="M31 22c5-5 11-4 14 2l6 11-7 3-6-10-4 13-10-4 3-12z" fill="#69a34d"/><path d="M24 21c-7-1-10 3-11 9l-2 15c0 4 2 6 6 7l8-2 2-27z" fill="#e88a22"/><path d="M28 39l13 8 7 16h-9l-8-12-8 10 7 5H18l-6-5 14-18z" fill="#bd6d22"/><path d="M42 34c4 4 8 6 14 5l5-3" fill="none"/><path d="M61 26v38" fill="none"/></g></svg>`,
  map:`<svg viewBox="0 0 72 72" aria-hidden="true"><path d="M9 17l17-7 20 7 17-7v45l-17 7-20-7-17 7z" fill="#eaf4fb" stroke="#0f4c81" stroke-width="2.5"/><path d="M26 10v45M46 17v45" stroke="#0f4c81" stroke-width="2"/><path d="M36 24c-6 0-10 4-10 10 0 8 10 18 10 18s10-10 10-18c0-6-4-10-10-10z" fill="#e47b22"/><circle cx="36" cy="34" r="3.4" fill="#fff"/></svg>`,
  cart:`<svg viewBox="0 0 72 72" aria-hidden="true"><path d="M11 16h8l6 29h28l7-21H24" fill="none" stroke="#0f4c81" stroke-width="4" stroke-linejoin="round"/><circle cx="30" cy="56" r="5" fill="#0f4c81"/><circle cx="52" cy="56" r="5" fill="#0f4c81"/></svg>`,
  check:`<svg viewBox="0 0 72 72" aria-hidden="true"><circle cx="36" cy="36" r="27" fill="#26a844"/><path d="M22 37l9 9 19-21" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  mailbox:`<svg viewBox="0 0 72 72" aria-hidden="true"><path d="M9 31c0-9 7-16 16-16h21c8 0 14 6 14 14v24H9V31z" fill="#fff" stroke="#7c6500" stroke-width="2.4"/><path d="M9 31h20c8 0 14 6 14 14v8H9V31z" fill="#fff"/><path d="M27 53v12" stroke="#7c6500" stroke-width="4.5" stroke-linecap="round"/><path d="M49 16v21" stroke="#c9362e" stroke-width="3.5"/><path d="M49 16h12v9H49z" fill="#e54a3e" stroke="#9d2d25" stroke-width="1.6"/><path d="M13 36h17" stroke="#7c6500" stroke-width="2.3"/></svg>`,
  tree:`<svg viewBox="0 0 72 72"><circle cx="36" cy="27" r="20" fill="#58a64b" stroke="#2f6f38" stroke-width="2.5"/><rect x="32" y="43" width="8" height="20" rx="2" fill="#8a5a2b"/></svg>`,
  museum:`<svg viewBox="0 0 72 72"><path d="M10 25L36 9l26 16z" fill="#eaf4fb" stroke="#183f63" stroke-width="2.5"/><path d="M14 28h44M12 57h48M9 63h54" stroke="#183f63" stroke-width="3"/><path d="M18 29v27M29 29v27M43 29v27M54 29v27" stroke="#183f63" stroke-width="4"/></svg>`,
  fishgold:`<svg viewBox="0 0 72 72"><path d="M15 36c10-15 30-18 43-5-13 17-33 17-43 5z" fill="#f0a51f" stroke="#a9680b" stroke-width="2.5"/><path d="M15 36L5 25v22z" fill="#f0a51f" stroke="#a9680b" stroke-width="2.5"/><circle cx="50" cy="31" r="2.5"/></svg>`,
  pin:`<svg viewBox="0 0 72 72"><path d="M36 7c-13 0-23 10-23 23 0 17 23 35 23 35s23-18 23-35C59 17 49 7 36 7z" fill="#e54a3e" stroke="#9c2c25" stroke-width="2.5"/><circle cx="36" cy="30" r="9" fill="#fff"/><circle cx="36" cy="30" r="4" fill="#0f4c81"/></svg>`,
  convenience:`<svg viewBox="0 0 72 72"><g fill="none" stroke="#20262c" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M28 17h17l2 25H25z" fill="#fff"/><path d="M31 17c0-6 3-9 7-9s7 3 7 9"/><path d="M11 47l11-6c3-2 7-1 9 1l4 4 9-3c4-1 7 1 8 4 1 3-1 5-4 6l-15 6c-3 1-6 1-9-1l-9-5"/><path d="M8 45l8 12-7 5-8-12z" fill="#eaf4fb"/></g></svg>`,
  food:`<svg viewBox="0 0 72 72"><circle cx="36" cy="37" r="20" fill="#fff" stroke="#0f4c81" stroke-width="3"/><circle cx="36" cy="37" r="10" fill="#eef5fa" stroke="#0f4c81" stroke-width="2"/><path d="M12 13v20M17 13v20M22 13v20M17 33v26" stroke="#20262c" stroke-width="3"/><path d="M55 13c5 8 5 15 0 21v25" fill="none" stroke="#20262c" stroke-width="3"/></svg>`,
  event:`<svg viewBox="0 0 72 72"><g fill="#202124"><path d="M8 34c0-6 5-11 11-13 10-4 24-5 34-2 7 2 11 6 11 12v7H8z"/><path d="M12 38h48v24H12z"/><rect x="17" y="43" width="9" height="15" rx="4" fill="#fff"/><rect x="31" y="43" width="9" height="15" rx="4" fill="#fff"/><rect x="45" y="43" width="9" height="15" rx="4" fill="#fff"/><rect x="6" y="58" width="60" height="7"/><rect x="18" y="10" width="2.5" height="12"/><path d="M20.5 10l10 5-10 5z"/><rect x="34.5" y="4" width="2.5" height="15"/><path d="M37 4l12 6-12 6z"/><rect x="52" y="10" width="2.5" height="12"/><path d="M54.5 10l10 5-10 5z"/></g></svg>`,
  restaurant:`<svg viewBox="0 0 72 72"><g stroke="#2d3d46" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><rect x="25" y="27" width="22" height="10" rx="4" fill="#ef4a3c" stroke="#c52f27"/><path d="M36 37v23M30 60h12"/><path d="M10 15l5 31h13M12 15h10l4 22H15" fill="#8fa6b2"/><path d="M62 15l-5 31H44M60 15H50l-4 22h11" fill="#8fa6b2"/><path d="M18 46l-3 16M25 46l3 16M54 46l3 16M47 46l-3 16"/></g></svg>`,
  pizza:`<svg viewBox="0 0 72 72"><path d="M13 18c16-7 31-2 44 13L22 58z" fill="#f4c247" stroke="#a66d14" stroke-width="2.5"/><path d="M17 20c14-5 27-1 37 11" fill="none" stroke="#d99a28" stroke-width="5"/><circle cx="31" cy="33" r="4" fill="#d64a37"/><circle cx="42" cy="38" r="4" fill="#d64a37"/></svg>`,
  skewer:`<svg viewBox="0 0 72 72"><path d="M14 60L58 16" stroke="#9b6a37" stroke-width="3.2"/><rect x="19" y="43" width="13" height="9" rx="2" transform="rotate(-45 25.5 47.5)" fill="#a64d30"/><rect x="31" y="31" width="13" height="9" rx="2" transform="rotate(-45 37.5 35.5)" fill="#cf8732"/><rect x="43" y="19" width="13" height="9" rx="2" transform="rotate(-45 49.5 23.5)" fill="#a64d30"/></svg>`,
  cloche:`<svg viewBox="0 0 72 72"><path d="M13 46c2-15 12-24 23-24s21 9 23 24z" fill="#d8dee2" stroke="#69757c" stroke-width="2.5"/><path d="M10 48h52" stroke="#69757c" stroke-width="4"/><circle cx="36" cy="18" r="4" fill="#69757c"/></svg>`,
  football:`<svg viewBox="0 0 72 72"><circle cx="36" cy="36" r="24" fill="#fff" stroke="#202124" stroke-width="2.5"/><path d="M36 23l8 6-3 10H31l-3-10z" fill="#202124"/><path d="M18 31l10-2M54 31l-10-2M23 52l8-13M49 52l-8-13" stroke="#202124" stroke-width="2"/></svg>`
};


UI_ICONS.drink=`<svg viewBox="0 0 72 72"><path d="M16 14h40L39 38v18h11v5H22v-5h11V38z" fill="#eaf4fb" stroke="#0f4c81" stroke-width="2.5"/><path d="M22 20h28L39 35H33z" fill="#e47b22"/><circle cx="48" cy="17" r="5" fill="#d9473f"/></svg>`;
UI_ICONS.burger=`<svg viewBox="0 0 72 72"><path d="M13 31c1-12 11-20 23-20s22 8 23 20z" fill="#e9a43b" stroke="#8d5b18" stroke-width="2.5"/><path d="M12 35h48" stroke="#2f7b3f" stroke-width="5"/><path d="M14 41h44l-5 9H19z" fill="#8b4b25"/><path d="M13 53h46c0 6-5 9-11 9H24c-6 0-11-3-11-9z" fill="#e9a43b" stroke="#8d5b18" stroke-width="2.5"/></svg>`;
UI_ICONS.pharmacyGreen=`<svg viewBox="0 0 72 72"><rect x="29" y="9" width="14" height="54" rx="3" fill="#19a84b"/><rect x="9" y="29" width="54" height="14" rx="3" fill="#19a84b"/></svg>`;
UI_ICONS.hospitalRed=`<svg viewBox="0 0 72 72"><rect x="29" y="9" width="14" height="54" rx="3" fill="#d93636"/><rect x="9" y="29" width="54" height="14" rx="3" fill="#d93636"/></svg>`;


UI_ICONS.feijoadaClay=`<svg viewBox="0 0 72 72" aria-hidden="true"><path d="M14 29h44l-5 27H19z" fill="#9f5a36" stroke="#60351f" stroke-width="3"/><path d="M12 28c2-8 46-8 48 0z" fill="#b86d43" stroke="#60351f" stroke-width="3"/><path d="M20 31h32" stroke="#6b3a22" stroke-width="2"/><path d="M25 21c3-5 3-9 0-13M36 21c3-5 3-9 0-13M47 21c3-5 3-9 0-13" fill="none" stroke="#929b9f" stroke-width="2.5" stroke-linecap="round"/></svg>`;
UI_ICONS.americanFootball=`<svg viewBox="0 0 72 72" aria-hidden="true"><ellipse cx="36" cy="36" rx="27" ry="17" transform="rotate(-18 36 36)" fill="#8b542e" stroke="#54321c" stroke-width="3"/><path d="M27 30l18 12M31 28l-7 10M36 32l-7 10M41 36l-7 10M46 40l-7 10" stroke="#fff" stroke-width="2.3" stroke-linecap="round"/></svg>`;
UI_ICONS.discoBall=`<svg viewBox="0 0 72 72" aria-hidden="true"><path d="M36 6v10" stroke="#6b7078" stroke-width="3"/><circle cx="36" cy="38" r="23" fill="#d9dce3" stroke="#727780" stroke-width="2.5"/><path d="M14 32h44M14 43h44M24 18v40M36 15v46M48 18v40" stroke="#fff" stroke-width="2" opacity=".95"/></svg>`;

function leisureDisplayNameV170(node,depth){
  const raw=String(node?.name||'');
  const low=raw.toLowerCase();
  if(depth===1){
    if(low.includes('turismo'))return 'TURISMO';
    if(low.includes('conveni'))return 'CONVENIÊNCIAS';
    if(low.includes('alimenta'))return 'ALIMENTAÇÃO';
    if(low.includes('espa')&&low.includes('evento'))return 'ESPAÇOS DE EVENTOS';
    if(low.includes('teatro'))return 'TEATROS';
    if(low.includes('hospital')||low.includes('upa'))return 'HOSPITAIS E UPA';
  }
  const map={
    'museus':'Museus','bares':'Bares','lanchonetes':'Lanchonetes','shoppings':'Shopping',
    'happy hour / jantar':'Happy hour','cachorro quente (baguncinha & prensados)':'Cachorro quente',
    'centros de convenções':'Centro de eventos'
  };
  return map[low]||raw;
}
function leisureGroupIconV170(node,depth){
  const n=leisureDisplayNameV170(node,depth).toLowerCase();
  if(depth===1){
    if(n==='turismo')return UI_ICONS.map;
    if(n==='conveniências')return UI_ICONS.convenience;
    if(n==='alimentação')return UI_ICONS.food;
    if(n==='espaços de eventos')return UI_ICONS.event;
    if(n==='teatros')return `<span class="emoji-group-icon">🎭</span>`;
    if(n==='hospitais e upa')return UI_ICONS.hospitalRed;
  }
  if(n==='parques')return UI_ICONS.tree;
  if(n==='museus')return UI_ICONS.museum;
  if(n==='aquários')return UI_ICONS.fishgold;
  if(n==='marcos geográficos')return UI_ICONS.pin;
  if(n==='locais turísticos')return UI_ICONS.map;
  if(n==='restaurantes')return UI_ICONS.restaurant;
  if(n==='bares')return UI_ICONS.drink;
  if(n==='lanchonetes')return UI_ICONS.burger;
  if(n==='pizzarias')return UI_ICONS.pizza;
  if(n==='rodízios')return UI_ICONS.skewer;
  if(n==='buffets')return UI_ICONS.cloche;
  if(n==='sport')return UI_ICONS.americanFootball;
  const symbol={
    'massas':'🍝','peixes':'🐟','carnes':'🥩','orientais':'🍣','regionais':'🍗','feijoadas':UI_ICONS.feijoadaClay,
    'happy hour':'🍻','noite':UI_ICONS.discoBall,'hamburguerias':'🍔🍟','espetinhos':'🍢','cachorro quente':'🌭',
    'mercados':'🛒','farmácias':UI_ICONS.pharmacyGreen,'posto de combustível':'⛽','shopping':'🛍️','mecânico':'🔧','cartório':'📄',
    'centro de eventos':'🏟️','festas e buffets':'🎈'
  }[n];
  return symbol?(String(symbol).startsWith('<svg')?symbol:`<span class="emoji-group-icon">${symbol}</span>`):'';
}
function leisureGroupSubtitleV170(node,depth){
  return leisureDisplayNameV170(node,depth)==='Rodízios'?'Carnes / Peixes / Orientais / Pizzarias':'';
}


function leisureDistanceKmV173(value){
  const s=String(value||'').toLowerCase().replace(',','.');
  const m=s.match(/(\d+(?:\.\d+)?)\s*km/);
  if(m)return Number(m[1]);
  const meters=s.match(/(\d+(?:\.\d+)?)\s*m(?:\b|etros)/);
  if(meters)return Number(meters[1])/1000;
  return Number.POSITIVE_INFINITY;
}
function leisureChildren(parentId=''){
  const arr=(db.leisureGuide||[]).filter(n=>String(n.parentId||'')===String(parentId||''));
  return arr.sort((a,b)=>{
    const ag=a.type==='group', bg=b.type==='group';
    if(ag&&bg)return String(leisureDisplayNameV170(a,2)||a.name||'').localeCompare(String(leisureDisplayNameV170(b,2)||b.name||''),'pt-BR',{sensitivity:'base'});
    if(!ag&&!bg){
      const d=leisureDistanceKmV173(a.distance)-leisureDistanceKmV173(b.distance);
      return Number.isFinite(d)&&d!==0?d:String(a.name||'').localeCompare(String(b.name||''),'pt-BR',{sensitivity:'base'});
    }
    return ag?-1:1;
  });
}
function leisureMapUrl(node){
  const q=node?.mapQuery||node?.name||'';
  if(/^https?:\/\//i.test(q))return q;
  return 'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(q);
}

function leisureFallbackImage(node){
  const path=(leisureBreadcrumbForClient(node)||'').toLowerCase();
  const name=String(node?.name||'').toLowerCase();
  const all=path+' '+name;
  const pairs=[
    ['parque','leisure-assets/parques.svg'],['museu','leisure-assets/museus.svg'],['aquário','leisure-assets/aquarios.svg'],
    ['marco','leisure-assets/marcos.svg'],['mercado','leisure-assets/mercados.svg'],['farmácia','leisure-assets/farmacias.svg'],
    ['posto','leisure-assets/postos.svg'],['shopping','leisure-assets/shoppings.svg'],['mecân','leisure-assets/mecanicos.svg'],
    ['cartório','leisure-assets/cartorios.svg'],['massa','leisure-assets/massas.svg'],['peix','leisure-assets/peixes.svg'],
    ['carne','leisure-assets/carnes.svg'],['orienta','leisure-assets/orientais.svg'],['rodíz','leisure-assets/rodizios.svg'],
    ['regional','leisure-assets/regionais.svg'],['pizza','leisure-assets/pizzarias.svg'],['buffet','leisure-assets/buffets.svg'],
    ['feijo','leisure-assets/feijoadas.svg'],['bar','leisure-assets/bares.svg'],['hamburg','leisure-assets/hamburguerias.svg'],
    ['espeto','leisure-assets/espetinhos.svg'],['cachorro','leisure-assets/cachorro-quente.svg'],['evento','leisure-assets/eventos.svg']
  ];
  for(const [needle,url] of pairs)if(all.includes(needle))return url;
  return 'leisure-assets/default.svg';
}
function leisureBreadcrumbForClient(node){
  const byId=new Map((db.leisureGuide||[]).map(n=>[n.id,n]));
  const parts=[]; let cur=node,guard=0;
  while(cur&&guard++<20){parts.unshift(cur.name||'');cur=byId.get(cur.parentId)}
  return parts.join(' › ');
}


const LEISURE_EMBEDDED_IMAGES={"parque": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22720%22%20height%3D%22480%22%3E%0A%3Crect%20width%3D%22720%22%20height%3D%22480%22%20fill%3D%22%23eaf2f7%22/%3E%0A%3Crect%20x%3D%2212%22%20y%3D%2212%22%20width%3D%22696%22%20height%3D%22456%22%20rx%3D%220%22%20fill%3D%22%23ffffff%22%20stroke%3D%22%230f4c81%22%20stroke-width%3D%224%22/%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22210%22%20font-size%3D%22112%22%20text-anchor%3D%22middle%22%3E%F0%9F%8C%B3%3C/text%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22315%22%20font-family%3D%22Arial%22%20font-size%3D%2234%22%20font-weight%3D%22700%22%20fill%3D%22%230f4c81%22%20text-anchor%3D%22middle%22%3EParques%3C/text%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22365%22%20font-family%3D%22Arial%22%20font-size%3D%2221%22%20fill%3D%22%23647988%22%20text-anchor%3D%22middle%22%3ECuiab%C3%A1%20e%20arredores%3C/text%3E%0A%3C/svg%3E", "museu": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22720%22%20height%3D%22480%22%3E%0A%3Crect%20width%3D%22720%22%20height%3D%22480%22%20fill%3D%22%23eaf2f7%22/%3E%0A%3Crect%20x%3D%2212%22%20y%3D%2212%22%20width%3D%22696%22%20height%3D%22456%22%20rx%3D%220%22%20fill%3D%22%23ffffff%22%20stroke%3D%22%230f4c81%22%20stroke-width%3D%224%22/%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22210%22%20font-size%3D%22112%22%20text-anchor%3D%22middle%22%3E%F0%9F%8F%9B%EF%B8%8F%3C/text%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22315%22%20font-family%3D%22Arial%22%20font-size%3D%2234%22%20font-weight%3D%22700%22%20fill%3D%22%230f4c81%22%20text-anchor%3D%22middle%22%3EMuseus%3C/text%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22365%22%20font-family%3D%22Arial%22%20font-size%3D%2221%22%20fill%3D%22%23647988%22%20text-anchor%3D%22middle%22%3ECuiab%C3%A1%20e%20arredores%3C/text%3E%0A%3C/svg%3E", "aqu": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22720%22%20height%3D%22480%22%3E%0A%3Crect%20width%3D%22720%22%20height%3D%22480%22%20fill%3D%22%23eaf2f7%22/%3E%0A%3Crect%20x%3D%2212%22%20y%3D%2212%22%20width%3D%22696%22%20height%3D%22456%22%20rx%3D%220%22%20fill%3D%22%23ffffff%22%20stroke%3D%22%230f4c81%22%20stroke-width%3D%224%22/%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22210%22%20font-size%3D%22112%22%20text-anchor%3D%22middle%22%3E%F0%9F%90%9F%3C/text%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22315%22%20font-family%3D%22Arial%22%20font-size%3D%2234%22%20font-weight%3D%22700%22%20fill%3D%22%230f4c81%22%20text-anchor%3D%22middle%22%3EAqu%C3%A1rios%3C/text%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22365%22%20font-family%3D%22Arial%22%20font-size%3D%2221%22%20fill%3D%22%23647988%22%20text-anchor%3D%22middle%22%3ECuiab%C3%A1%20e%20arredores%3C/text%3E%0A%3C/svg%3E", "merc": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22720%22%20height%3D%22480%22%3E%0A%3Crect%20width%3D%22720%22%20height%3D%22480%22%20fill%3D%22%23eaf2f7%22/%3E%0A%3Crect%20x%3D%2212%22%20y%3D%2212%22%20width%3D%22696%22%20height%3D%22456%22%20rx%3D%220%22%20fill%3D%22%23ffffff%22%20stroke%3D%22%230f4c81%22%20stroke-width%3D%224%22/%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22210%22%20font-size%3D%22112%22%20text-anchor%3D%22middle%22%3E%F0%9F%9B%92%3C/text%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22315%22%20font-family%3D%22Arial%22%20font-size%3D%2234%22%20font-weight%3D%22700%22%20fill%3D%22%230f4c81%22%20text-anchor%3D%22middle%22%3EMercados%3C/text%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22365%22%20font-family%3D%22Arial%22%20font-size%3D%2221%22%20fill%3D%22%23647988%22%20text-anchor%3D%22middle%22%3ECuiab%C3%A1%20e%20arredores%3C/text%3E%0A%3C/svg%3E", "farm": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22720%22%20height%3D%22480%22%3E%0A%3Crect%20width%3D%22720%22%20height%3D%22480%22%20fill%3D%22%23eaf2f7%22/%3E%0A%3Crect%20x%3D%2212%22%20y%3D%2212%22%20width%3D%22696%22%20height%3D%22456%22%20rx%3D%220%22%20fill%3D%22%23ffffff%22%20stroke%3D%22%230f4c81%22%20stroke-width%3D%224%22/%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22210%22%20font-size%3D%22112%22%20text-anchor%3D%22middle%22%3E%E2%9C%9A%3C/text%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22315%22%20font-family%3D%22Arial%22%20font-size%3D%2234%22%20font-weight%3D%22700%22%20fill%3D%22%230f4c81%22%20text-anchor%3D%22middle%22%3EFarm%C3%A1cias%3C/text%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22365%22%20font-family%3D%22Arial%22%20font-size%3D%2221%22%20fill%3D%22%23647988%22%20text-anchor%3D%22middle%22%3ECuiab%C3%A1%20e%20arredores%3C/text%3E%0A%3C/svg%3E", "posto": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22720%22%20height%3D%22480%22%3E%0A%3Crect%20width%3D%22720%22%20height%3D%22480%22%20fill%3D%22%23eaf2f7%22/%3E%0A%3Crect%20x%3D%2212%22%20y%3D%2212%22%20width%3D%22696%22%20height%3D%22456%22%20rx%3D%220%22%20fill%3D%22%23ffffff%22%20stroke%3D%22%230f4c81%22%20stroke-width%3D%224%22/%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22210%22%20font-size%3D%22112%22%20text-anchor%3D%22middle%22%3E%E2%9B%BD%3C/text%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22315%22%20font-family%3D%22Arial%22%20font-size%3D%2234%22%20font-weight%3D%22700%22%20fill%3D%22%230f4c81%22%20text-anchor%3D%22middle%22%3EPostos%3C/text%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22365%22%20font-family%3D%22Arial%22%20font-size%3D%2221%22%20fill%3D%22%23647988%22%20text-anchor%3D%22middle%22%3ECuiab%C3%A1%20e%20arredores%3C/text%3E%0A%3C/svg%3E", "shopping": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22720%22%20height%3D%22480%22%3E%0A%3Crect%20width%3D%22720%22%20height%3D%22480%22%20fill%3D%22%23eaf2f7%22/%3E%0A%3Crect%20x%3D%2212%22%20y%3D%2212%22%20width%3D%22696%22%20height%3D%22456%22%20rx%3D%220%22%20fill%3D%22%23ffffff%22%20stroke%3D%22%230f4c81%22%20stroke-width%3D%224%22/%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22210%22%20font-size%3D%22112%22%20text-anchor%3D%22middle%22%3E%F0%9F%9B%8D%EF%B8%8F%3C/text%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22315%22%20font-family%3D%22Arial%22%20font-size%3D%2234%22%20font-weight%3D%22700%22%20fill%3D%22%230f4c81%22%20text-anchor%3D%22middle%22%3EShoppings%3C/text%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22365%22%20font-family%3D%22Arial%22%20font-size%3D%2221%22%20fill%3D%22%23647988%22%20text-anchor%3D%22middle%22%3ECuiab%C3%A1%20e%20arredores%3C/text%3E%0A%3C/svg%3E", "mec": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22720%22%20height%3D%22480%22%3E%0A%3Crect%20width%3D%22720%22%20height%3D%22480%22%20fill%3D%22%23eaf2f7%22/%3E%0A%3Crect%20x%3D%2212%22%20y%3D%2212%22%20width%3D%22696%22%20height%3D%22456%22%20rx%3D%220%22%20fill%3D%22%23ffffff%22%20stroke%3D%22%230f4c81%22%20stroke-width%3D%224%22/%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22210%22%20font-size%3D%22112%22%20text-anchor%3D%22middle%22%3E%F0%9F%94%A7%3C/text%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22315%22%20font-family%3D%22Arial%22%20font-size%3D%2234%22%20font-weight%3D%22700%22%20fill%3D%22%230f4c81%22%20text-anchor%3D%22middle%22%3EMec%C3%A2nicos%3C/text%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22365%22%20font-family%3D%22Arial%22%20font-size%3D%2221%22%20fill%3D%22%23647988%22%20text-anchor%3D%22middle%22%3ECuiab%C3%A1%20e%20arredores%3C/text%3E%0A%3C/svg%3E", "cart": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22720%22%20height%3D%22480%22%3E%0A%3Crect%20width%3D%22720%22%20height%3D%22480%22%20fill%3D%22%23eaf2f7%22/%3E%0A%3Crect%20x%3D%2212%22%20y%3D%2212%22%20width%3D%22696%22%20height%3D%22456%22%20rx%3D%220%22%20fill%3D%22%23ffffff%22%20stroke%3D%22%230f4c81%22%20stroke-width%3D%224%22/%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22210%22%20font-size%3D%22112%22%20text-anchor%3D%22middle%22%3E%F0%9F%93%84%3C/text%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22315%22%20font-family%3D%22Arial%22%20font-size%3D%2234%22%20font-weight%3D%22700%22%20fill%3D%22%230f4c81%22%20text-anchor%3D%22middle%22%3ECart%C3%B3rios%3C/text%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22365%22%20font-family%3D%22Arial%22%20font-size%3D%2221%22%20fill%3D%22%23647988%22%20text-anchor%3D%22middle%22%3ECuiab%C3%A1%20e%20arredores%3C/text%3E%0A%3C/svg%3E", "massa": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22720%22%20height%3D%22480%22%3E%0A%3Crect%20width%3D%22720%22%20height%3D%22480%22%20fill%3D%22%23eaf2f7%22/%3E%0A%3Crect%20x%3D%2212%22%20y%3D%2212%22%20width%3D%22696%22%20height%3D%22456%22%20rx%3D%220%22%20fill%3D%22%23ffffff%22%20stroke%3D%22%230f4c81%22%20stroke-width%3D%224%22/%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22210%22%20font-size%3D%22112%22%20text-anchor%3D%22middle%22%3E%F0%9F%8D%9D%3C/text%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22315%22%20font-family%3D%22Arial%22%20font-size%3D%2234%22%20font-weight%3D%22700%22%20fill%3D%22%230f4c81%22%20text-anchor%3D%22middle%22%3EMassas%3C/text%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22365%22%20font-family%3D%22Arial%22%20font-size%3D%2221%22%20fill%3D%22%23647988%22%20text-anchor%3D%22middle%22%3ECuiab%C3%A1%20e%20arredores%3C/text%3E%0A%3C/svg%3E", "peix": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22720%22%20height%3D%22480%22%3E%0A%3Crect%20width%3D%22720%22%20height%3D%22480%22%20fill%3D%22%23eaf2f7%22/%3E%0A%3Crect%20x%3D%2212%22%20y%3D%2212%22%20width%3D%22696%22%20height%3D%22456%22%20rx%3D%220%22%20fill%3D%22%23ffffff%22%20stroke%3D%22%230f4c81%22%20stroke-width%3D%224%22/%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22210%22%20font-size%3D%22112%22%20text-anchor%3D%22middle%22%3E%F0%9F%90%9F%3C/text%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22315%22%20font-family%3D%22Arial%22%20font-size%3D%2234%22%20font-weight%3D%22700%22%20fill%3D%22%230f4c81%22%20text-anchor%3D%22middle%22%3EPeixes%3C/text%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22365%22%20font-family%3D%22Arial%22%20font-size%3D%2221%22%20fill%3D%22%23647988%22%20text-anchor%3D%22middle%22%3ECuiab%C3%A1%20e%20arredores%3C/text%3E%0A%3C/svg%3E", "carne": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22720%22%20height%3D%22480%22%3E%0A%3Crect%20width%3D%22720%22%20height%3D%22480%22%20fill%3D%22%23eaf2f7%22/%3E%0A%3Crect%20x%3D%2212%22%20y%3D%2212%22%20width%3D%22696%22%20height%3D%22456%22%20rx%3D%220%22%20fill%3D%22%23ffffff%22%20stroke%3D%22%230f4c81%22%20stroke-width%3D%224%22/%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22210%22%20font-size%3D%22112%22%20text-anchor%3D%22middle%22%3E%F0%9F%A5%A9%3C/text%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22315%22%20font-family%3D%22Arial%22%20font-size%3D%2234%22%20font-weight%3D%22700%22%20fill%3D%22%230f4c81%22%20text-anchor%3D%22middle%22%3ECarnes%3C/text%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22365%22%20font-family%3D%22Arial%22%20font-size%3D%2221%22%20fill%3D%22%23647988%22%20text-anchor%3D%22middle%22%3ECuiab%C3%A1%20e%20arredores%3C/text%3E%0A%3C/svg%3E", "orient": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22720%22%20height%3D%22480%22%3E%0A%3Crect%20width%3D%22720%22%20height%3D%22480%22%20fill%3D%22%23eaf2f7%22/%3E%0A%3Crect%20x%3D%2212%22%20y%3D%2212%22%20width%3D%22696%22%20height%3D%22456%22%20rx%3D%220%22%20fill%3D%22%23ffffff%22%20stroke%3D%22%230f4c81%22%20stroke-width%3D%224%22/%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22210%22%20font-size%3D%22112%22%20text-anchor%3D%22middle%22%3E%F0%9F%8D%A3%3C/text%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22315%22%20font-family%3D%22Arial%22%20font-size%3D%2234%22%20font-weight%3D%22700%22%20fill%3D%22%230f4c81%22%20text-anchor%3D%22middle%22%3EOrientais%3C/text%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22365%22%20font-family%3D%22Arial%22%20font-size%3D%2221%22%20fill%3D%22%23647988%22%20text-anchor%3D%22middle%22%3ECuiab%C3%A1%20e%20arredores%3C/text%3E%0A%3C/svg%3E", "rod": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22720%22%20height%3D%22480%22%3E%0A%3Crect%20width%3D%22720%22%20height%3D%22480%22%20fill%3D%22%23eaf2f7%22/%3E%0A%3Crect%20x%3D%2212%22%20y%3D%2212%22%20width%3D%22696%22%20height%3D%22456%22%20rx%3D%220%22%20fill%3D%22%23ffffff%22%20stroke%3D%22%230f4c81%22%20stroke-width%3D%224%22/%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22210%22%20font-size%3D%22112%22%20text-anchor%3D%22middle%22%3E%F0%9F%8D%BD%EF%B8%8F%3C/text%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22315%22%20font-family%3D%22Arial%22%20font-size%3D%2234%22%20font-weight%3D%22700%22%20fill%3D%22%230f4c81%22%20text-anchor%3D%22middle%22%3ERod%C3%ADzios%3C/text%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22365%22%20font-family%3D%22Arial%22%20font-size%3D%2221%22%20fill%3D%22%23647988%22%20text-anchor%3D%22middle%22%3ECuiab%C3%A1%20e%20arredores%3C/text%3E%0A%3C/svg%3E", "regional": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22720%22%20height%3D%22480%22%3E%0A%3Crect%20width%3D%22720%22%20height%3D%22480%22%20fill%3D%22%23eaf2f7%22/%3E%0A%3Crect%20x%3D%2212%22%20y%3D%2212%22%20width%3D%22696%22%20height%3D%22456%22%20rx%3D%220%22%20fill%3D%22%23ffffff%22%20stroke%3D%22%230f4c81%22%20stroke-width%3D%224%22/%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22210%22%20font-size%3D%22112%22%20text-anchor%3D%22middle%22%3E%F0%9F%A5%98%3C/text%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22315%22%20font-family%3D%22Arial%22%20font-size%3D%2234%22%20font-weight%3D%22700%22%20fill%3D%22%230f4c81%22%20text-anchor%3D%22middle%22%3ERegionais%3C/text%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22365%22%20font-family%3D%22Arial%22%20font-size%3D%2221%22%20fill%3D%22%23647988%22%20text-anchor%3D%22middle%22%3ECuiab%C3%A1%20e%20arredores%3C/text%3E%0A%3C/svg%3E", "pizza": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22720%22%20height%3D%22480%22%3E%0A%3Crect%20width%3D%22720%22%20height%3D%22480%22%20fill%3D%22%23eaf2f7%22/%3E%0A%3Crect%20x%3D%2212%22%20y%3D%2212%22%20width%3D%22696%22%20height%3D%22456%22%20rx%3D%220%22%20fill%3D%22%23ffffff%22%20stroke%3D%22%230f4c81%22%20stroke-width%3D%224%22/%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22210%22%20font-size%3D%22112%22%20text-anchor%3D%22middle%22%3E%F0%9F%8D%95%3C/text%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22315%22%20font-family%3D%22Arial%22%20font-size%3D%2234%22%20font-weight%3D%22700%22%20fill%3D%22%230f4c81%22%20text-anchor%3D%22middle%22%3EPizzarias%3C/text%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22365%22%20font-family%3D%22Arial%22%20font-size%3D%2221%22%20fill%3D%22%23647988%22%20text-anchor%3D%22middle%22%3ECuiab%C3%A1%20e%20arredores%3C/text%3E%0A%3C/svg%3E", "buffet": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22720%22%20height%3D%22480%22%3E%0A%3Crect%20width%3D%22720%22%20height%3D%22480%22%20fill%3D%22%23eaf2f7%22/%3E%0A%3Crect%20x%3D%2212%22%20y%3D%2212%22%20width%3D%22696%22%20height%3D%22456%22%20rx%3D%220%22%20fill%3D%22%23ffffff%22%20stroke%3D%22%230f4c81%22%20stroke-width%3D%224%22/%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22210%22%20font-size%3D%22112%22%20text-anchor%3D%22middle%22%3E%F0%9F%8D%BD%EF%B8%8F%3C/text%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22315%22%20font-family%3D%22Arial%22%20font-size%3D%2234%22%20font-weight%3D%22700%22%20fill%3D%22%230f4c81%22%20text-anchor%3D%22middle%22%3EBuffets%3C/text%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22365%22%20font-family%3D%22Arial%22%20font-size%3D%2221%22%20fill%3D%22%23647988%22%20text-anchor%3D%22middle%22%3ECuiab%C3%A1%20e%20arredores%3C/text%3E%0A%3C/svg%3E", "feijo": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22720%22%20height%3D%22480%22%3E%0A%3Crect%20width%3D%22720%22%20height%3D%22480%22%20fill%3D%22%23eaf2f7%22/%3E%0A%3Crect%20x%3D%2212%22%20y%3D%2212%22%20width%3D%22696%22%20height%3D%22456%22%20rx%3D%220%22%20fill%3D%22%23ffffff%22%20stroke%3D%22%230f4c81%22%20stroke-width%3D%224%22/%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22210%22%20font-size%3D%22112%22%20text-anchor%3D%22middle%22%3E%F0%9F%A5%98%3C/text%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22315%22%20font-family%3D%22Arial%22%20font-size%3D%2234%22%20font-weight%3D%22700%22%20fill%3D%22%230f4c81%22%20text-anchor%3D%22middle%22%3EFeijoadas%3C/text%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22365%22%20font-family%3D%22Arial%22%20font-size%3D%2221%22%20fill%3D%22%23647988%22%20text-anchor%3D%22middle%22%3ECuiab%C3%A1%20e%20arredores%3C/text%3E%0A%3C/svg%3E", "bar": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22720%22%20height%3D%22480%22%3E%0A%3Crect%20width%3D%22720%22%20height%3D%22480%22%20fill%3D%22%23eaf2f7%22/%3E%0A%3Crect%20x%3D%2212%22%20y%3D%2212%22%20width%3D%22696%22%20height%3D%22456%22%20rx%3D%220%22%20fill%3D%22%23ffffff%22%20stroke%3D%22%230f4c81%22%20stroke-width%3D%224%22/%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22210%22%20font-size%3D%22112%22%20text-anchor%3D%22middle%22%3E%F0%9F%8D%BB%3C/text%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22315%22%20font-family%3D%22Arial%22%20font-size%3D%2234%22%20font-weight%3D%22700%22%20fill%3D%22%230f4c81%22%20text-anchor%3D%22middle%22%3EBares%3C/text%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22365%22%20font-family%3D%22Arial%22%20font-size%3D%2221%22%20fill%3D%22%23647988%22%20text-anchor%3D%22middle%22%3ECuiab%C3%A1%20e%20arredores%3C/text%3E%0A%3C/svg%3E", "hamb": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22720%22%20height%3D%22480%22%3E%0A%3Crect%20width%3D%22720%22%20height%3D%22480%22%20fill%3D%22%23eaf2f7%22/%3E%0A%3Crect%20x%3D%2212%22%20y%3D%2212%22%20width%3D%22696%22%20height%3D%22456%22%20rx%3D%220%22%20fill%3D%22%23ffffff%22%20stroke%3D%22%230f4c81%22%20stroke-width%3D%224%22/%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22210%22%20font-size%3D%22112%22%20text-anchor%3D%22middle%22%3E%F0%9F%8D%94%3C/text%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22315%22%20font-family%3D%22Arial%22%20font-size%3D%2234%22%20font-weight%3D%22700%22%20fill%3D%22%230f4c81%22%20text-anchor%3D%22middle%22%3EHamburguerias%3C/text%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22365%22%20font-family%3D%22Arial%22%20font-size%3D%2221%22%20fill%3D%22%23647988%22%20text-anchor%3D%22middle%22%3ECuiab%C3%A1%20e%20arredores%3C/text%3E%0A%3C/svg%3E", "espeto": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22720%22%20height%3D%22480%22%3E%0A%3Crect%20width%3D%22720%22%20height%3D%22480%22%20fill%3D%22%23eaf2f7%22/%3E%0A%3Crect%20x%3D%2212%22%20y%3D%2212%22%20width%3D%22696%22%20height%3D%22456%22%20rx%3D%220%22%20fill%3D%22%23ffffff%22%20stroke%3D%22%230f4c81%22%20stroke-width%3D%224%22/%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22210%22%20font-size%3D%22112%22%20text-anchor%3D%22middle%22%3E%F0%9F%8D%A2%3C/text%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22315%22%20font-family%3D%22Arial%22%20font-size%3D%2234%22%20font-weight%3D%22700%22%20fill%3D%22%230f4c81%22%20text-anchor%3D%22middle%22%3EEspetinhos%3C/text%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22365%22%20font-family%3D%22Arial%22%20font-size%3D%2221%22%20fill%3D%22%23647988%22%20text-anchor%3D%22middle%22%3ECuiab%C3%A1%20e%20arredores%3C/text%3E%0A%3C/svg%3E", "cachorro": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22720%22%20height%3D%22480%22%3E%0A%3Crect%20width%3D%22720%22%20height%3D%22480%22%20fill%3D%22%23eaf2f7%22/%3E%0A%3Crect%20x%3D%2212%22%20y%3D%2212%22%20width%3D%22696%22%20height%3D%22456%22%20rx%3D%220%22%20fill%3D%22%23ffffff%22%20stroke%3D%22%230f4c81%22%20stroke-width%3D%224%22/%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22210%22%20font-size%3D%22112%22%20text-anchor%3D%22middle%22%3E%F0%9F%8C%AD%3C/text%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22315%22%20font-family%3D%22Arial%22%20font-size%3D%2234%22%20font-weight%3D%22700%22%20fill%3D%22%230f4c81%22%20text-anchor%3D%22middle%22%3ECachorro%20quente%3C/text%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22365%22%20font-family%3D%22Arial%22%20font-size%3D%2221%22%20fill%3D%22%23647988%22%20text-anchor%3D%22middle%22%3ECuiab%C3%A1%20e%20arredores%3C/text%3E%0A%3C/svg%3E", "evento": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22720%22%20height%3D%22480%22%3E%0A%3Crect%20width%3D%22720%22%20height%3D%22480%22%20fill%3D%22%23eaf2f7%22/%3E%0A%3Crect%20x%3D%2212%22%20y%3D%2212%22%20width%3D%22696%22%20height%3D%22456%22%20rx%3D%220%22%20fill%3D%22%23ffffff%22%20stroke%3D%22%230f4c81%22%20stroke-width%3D%224%22/%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22210%22%20font-size%3D%22112%22%20text-anchor%3D%22middle%22%3E%F0%9F%8E%89%3C/text%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22315%22%20font-family%3D%22Arial%22%20font-size%3D%2234%22%20font-weight%3D%22700%22%20fill%3D%22%230f4c81%22%20text-anchor%3D%22middle%22%3EEventos%3C/text%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22365%22%20font-family%3D%22Arial%22%20font-size%3D%2221%22%20fill%3D%22%23647988%22%20text-anchor%3D%22middle%22%3ECuiab%C3%A1%20e%20arredores%3C/text%3E%0A%3C/svg%3E", "default": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22720%22%20height%3D%22480%22%3E%0A%3Crect%20width%3D%22720%22%20height%3D%22480%22%20fill%3D%22%23eaf2f7%22/%3E%0A%3Crect%20x%3D%2212%22%20y%3D%2212%22%20width%3D%22696%22%20height%3D%22456%22%20rx%3D%220%22%20fill%3D%22%23ffffff%22%20stroke%3D%22%230f4c81%22%20stroke-width%3D%224%22/%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22210%22%20font-size%3D%22112%22%20text-anchor%3D%22middle%22%3E%F0%9F%93%8D%3C/text%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22315%22%20font-family%3D%22Arial%22%20font-size%3D%2234%22%20font-weight%3D%22700%22%20fill%3D%22%230f4c81%22%20text-anchor%3D%22middle%22%3EConhe%C3%A7a%20Cuiab%C3%A1%3C/text%3E%0A%3Ctext%20x%3D%22360%22%20y%3D%22365%22%20font-family%3D%22Arial%22%20font-size%3D%2221%22%20fill%3D%22%23647988%22%20text-anchor%3D%22middle%22%3ECuiab%C3%A1%20e%20arredores%3C/text%3E%0A%3C/svg%3E"};
function leisureEmbeddedImage(node){
  const path=(leisureBreadcrumbForClient(node)||'').toLowerCase()+' '+String(node?.name||'').toLowerCase();
  const tests=[
    ['parque','parque'],['museu','museu'],['aqu','aqu'],['merc','merc'],['farm','farm'],['posto','posto'],
    ['shopping','shopping'],['mec','mec'],['cart','cart'],['massa','massa'],['peix','peix'],['carne','carne'],
    ['orient','orient'],['rodíz','rod'],['regional','regional'],['pizza','pizza'],['buffet','buffet'],['feijo','feijo'],
    ['bar','bar'],['hamb','hamb'],['espeto','espeto'],['cachorro','cachorro'],['evento','evento']
  ];
  for(const [term,key] of tests)if(path.includes(term))return LEISURE_EMBEDDED_IMAGES[key];
  return LEISURE_EMBEDDED_IMAGES.default;
}


function leisurePlaceHtml(p){
  const fallback=leisureEmbeddedImage(p),external=String(p.imageUrl||'').trim();
  const photo=`<img class="leisure-place-img" src="${esc(external||fallback)}" alt="${esc(p.name)}" onerror="this.onerror=null;this.src='${fallback}'">`;
  const parent=(db.leisureGuide||[]).find(n=>n.id===p.parentId),normal=String(parent?.name||'').toLowerCase().includes('locais turísticos');
  return `<details class="leisure-place ${normal?'leisure-place-normal':''}" data-leisure-id="${esc(p.id)}"><summary><span>${esc(p.name)}</span><span>›</span></summary>
    <div class="leisure-place-body"><div class="leisure-place-grid">${photo}<div>
      ${p.description?`<div class="leisure-desc">${esc(p.description)}</div>`:''}
      <div class="leisure-meta leisure-meta-v182">
        <div class="leisure-meta-row-v182 leisure-distance-row-v182">
          <div class="leisure-meta-label-v182"><b>Distância do Versátil:</b></div>
          <div class="leisure-meta-value-v182">${esc(p.distance||'aprox. não informado')}</div>
        </div>
        <div class="leisure-meta-row-v182">
          <div class="leisure-meta-label-v182"><b>Telefone:</b></div>
          <div class="leisure-meta-value-v182">${esc(p.phone||'(65) 3313-0050 (Sec. de Turismo)')}</div>
        </div>
      </div>
      <div class="leisure-place-actions"><a class="btn primary leisure-map-btn" href="${esc(leisureMapUrl(p))}" target="_blank" rel="noopener">Abrir no Google Maps</a><button class="btn itinerary-send-btn" onclick="addToItinerary('${esc(p.id)}')">Enviar para Roteiro</button></div>
    </div></div></div></details>`;
}
function setupLeisureExclusiveAccordion(){
  const root=document.querySelector('.leisure-guide-card');
  if(!root||root.dataset.exclusiveReady==='1')return;
  root.dataset.exclusiveReady='1';
  root.addEventListener('toggle',ev=>{
    const target=ev.target;
    if(!(target instanceof HTMLDetailsElement)||!target.open)return;
    root.querySelectorAll('details[open]').forEach(other=>{
      if(other===target||other.contains(target))return;
      other.open=false;
    });
  },true);
}

function leisureOpenIds(){
  return Array.from(document.querySelectorAll('#app details[open][data-leisure-id]')).map(d=>d.dataset.leisureId);
}
function restoreLeisureOpenIds(ids=[]){
  const set=new Set(ids);
  document.querySelectorAll('#app details[data-leisure-id]').forEach(d=>{if(set.has(d.dataset.leisureId))d.open=true});
}

function leisureDisplayName(node,depth){
  if(depth===1){
    const v=String(node?.name||'').toUpperCase();
    if(v.includes('TURISMO'))return 'TURISMO';
    if(v.includes('CONVENI'))return 'CONVENIÊNCIAS';
    if(v.includes('ALIMENTA'))return 'ALIMENTAÇÃO';
    if(v.includes('ESPA')&&v.includes('EVENT'))return 'ESPAÇOS DE EVENTOS';
  }
  return String(node?.name||'');
}

function leisureNodeHtml(node,depth=1){
  if(node.type==='place')return leisurePlaceHtml(node);
  const children=leisureChildren(node.id);
  const label=leisureDisplayNameV170(node,depth);
  const icon=leisureGroupIconV170(node,depth);
  const subtitle=leisureGroupSubtitleV170(node,depth);
  return `<details class="leisure-level-${Math.min(depth,5)}" data-leisure-id="${esc(node.id)}">
    <summary>
      <span class="leisure-group-summary">
        ${icon?`<span class="leisure-group-icon">${icon}</span>`:''}
        <span><b>${esc(label)}</b>${subtitle?`<small>${esc(subtitle)}</small>`:''}</span>
      </span>
      <span>⌄</span>
    </summary>
    <div class="leisure-inside">${children.map(n=>leisureNodeHtml(n,depth+1)).join('')}</div>
  </details>`;
}

function leisureGuidePage(){
  const roots=leisureChildren('');
  return `<div class="card leisure-guide-card">
    <div class="row between leisure-guide-head"><div><h2>Lazer e Conveniência</h2><div class="leisure-page-line1">Conheça Cuiabá e arredores.</div><div class="leisure-page-line2">Encontre tudo ao seu redor.</div></div>
    <button class="btn" onclick="page='catalog';render()">Voltar ao catálogo</button></div>
    ${roots.map(n=>leisureNodeHtml(n,1)).join('')}
  </div>`;
}

function adjustScrollBelowHeaderV177(forceTop=false){
  requestAnimationFrame(()=>{
    const header=document.querySelector('.top-v175');
    const wrap=document.querySelector('.wrap');
    if(!header||!wrap)return;
    const headerH=Math.ceil(header.getBoundingClientRect().height);
    document.documentElement.style.setProperty('--app-header-height',headerH+'px');

    // Browsers/PWA can restore the previous scroll position before the sticky header settles.
    // When opening near the top, normalize to the document top so the first menu row is never hidden.
    if(forceTop || window.scrollY < headerH + 80){
      window.scrollTo({top:0,left:0,behavior:'auto'});
    }
  });
}


function setupExclusiveDetailsV179(){
  const app=document.getElementById('app');
  if(!app||app.dataset.exclusiveV179==='1')return;
  app.dataset.exclusiveV179='1';
  app.addEventListener('toggle',ev=>{
    const target=ev.target;
    if(!(target instanceof HTMLDetailsElement)||!target.open)return;
    const parent=target.parentElement;
    if(!parent)return;
    Array.from(parent.children).forEach(other=>{
      if(other instanceof HTMLDetailsElement&&other!==target&&other.open)other.open=false;
    });
  },true);
}

function render(){
  document.getElementById('app').innerHTML=session?appView():loginView();
  renderVersionBadge();
  setTimeout(()=>{updatePwaInstallUI();updateCentralStatusUI();updateItineraryCountUI();setupExclusiveDetailsV179();if(page==='postal')bindPostalValidation();adjustScrollBelowHeaderV177(false);},0);
}

function renderVersionBadge(){
  let badge=document.getElementById('appVersionBadge');
  if(!badge){
    badge=document.createElement('div');
    badge.id='appVersionBadge';
    document.body.appendChild(badge);
  }
  badge.textContent='v1.82';
}

function isPwaStandalone(){
  return window.matchMedia?.('(display-mode: standalone)').matches ||
         window.navigator.standalone===true ||
         document.referrer.startsWith('android-app://');
}

function isIosDevice(){
  return /iphone|ipad|ipod/i.test(navigator.userAgent||'');
}

function pwaInstallButtonHtml(){
  if(isPwaStandalone())return '';
  return `<button id="pwaInstallBtn" class="btn pwa-install-btn" onclick="installVersatilApp()" style="display:none">
    📲 Instalar aplicativo
  </button>`;
}

function updatePwaInstallUI(){
  const btn=document.getElementById('pwaInstallBtn');
  if(!btn)return;

  if(isPwaStandalone()){
    btn.style.display='none';
    return;
  }

  const canPrompt=!!deferredInstallPrompt;
  const ios=isIosDevice();

  // No iPhone/iPad o navegador não fornece beforeinstallprompt;
  // exibimos instruções próprias.
  btn.style.display=(canPrompt||ios)?'inline-flex':'none';
}

async function installVersatilApp(){
  if(isPwaStandalone()){
    alert('O APP SERVIÇOS VERSÁTIL já está instalado neste aparelho.');
    return;
  }

  if(deferredInstallPrompt){
    const promptEvent=deferredInstallPrompt;
    deferredInstallPrompt=null;
    await promptEvent.prompt();

    try{
      const choice=await promptEvent.userChoice;
      if(choice?.outcome==='accepted'){
        localStorage.setItem('versatil_pwa_installed_or_accepted','1');
      }
    }catch(e){}

    updatePwaInstallUI();
    return;
  }

  if(isIosDevice()){
    showIosInstallInstructions();
    return;
  }

  alert('A instalação ficará disponível quando o navegador concluir a preparação do aplicativo. Se necessário, use o menu do navegador e escolha “Instalar app” ou “Adicionar à tela inicial”.');
}

function showIosInstallInstructions(){
  document.getElementById('pwaInstallModal')?.remove();

  const modal=document.createElement('div');
  modal.id='pwaInstallModal';
  modal.className='modal-overlay';
  modal.innerHTML=`<div class="modal-card pwa-install-modal">
    <div class="row between">
      <h2 style="margin:0">Instalar APP SERVIÇOS VERSÁTIL</h2>
      <button class="btn" onclick="document.getElementById('pwaInstallModal')?.remove()">Fechar</button>
    </div>
    <div class="pwa-install-steps">
      <p><b>No iPhone/iPad:</b></p>
      <p>1. Abra esta página no <b>Safari</b>.</p>
      <p>2. Toque no botão <b>Compartilhar</b> (quadrado com seta para cima).</p>
      <p>3. Escolha <b>Adicionar à Tela de Início</b>.</p>
      <p>4. Confirme em <b>Adicionar</b>.</p>
    </div>
    <div class="notice">Depois disso, o ícone Versátil ficará na tela inicial e abrirá como aplicativo.</div>
  </div>`;
  document.body.appendChild(modal);
}

window.addEventListener('beforeinstallprompt',event=>{
  event.preventDefault();
  deferredInstallPrompt=event;
  pwaInstallReady=true;
  updatePwaInstallUI();
});

window.addEventListener('appinstalled',()=>{
  deferredInstallPrompt=null;
  pwaInstallReady=false;
  localStorage.setItem('versatil_pwa_installed_or_accepted','1');
  updatePwaInstallUI();
});

function loginView(){return `<div class="login"><div class="loginbox"><img src="logo-versatil.jpg" class="login-logo"><h2 style="text-align:center;margin:0">APP SERVIÇOS VERSÁTIL</h2><p class="muted" style="text-align:center">Contratação de serviços</p>${centralStatusHtml()}<div class="tabs"><button id="tabClient" class="btn access-tab selected" aria-pressed="true" onclick="showLogin('client')">Área do Cliente</button><button id="tabAdmin" class="btn access-tab" aria-pressed="false" onclick="showLogin('admin')">Área do Admin</button></div><div id="clientLogin"><div class="field"><label>E-mail</label><input id="c_email" type="email"></div><div class="field"><label>Nome</label><input id="c_name"></div><div class="field"><label>Quarto / Apartamento</label><input id="c_room" placeholder="Digite a unidade cadastrada, ex.: 101A"></div><button class="btn primary" style="width:100%" onclick="clientLogin()">Entrar como Cliente</button></div><div id="adminLogin" style="display:none"><div class="field"><label>Login do ADMIN</label><input id="a_name" autocomplete="username" placeholder="Login"></div><div class="field"><label>Senha do ADMIN</label><input id="a_pass" type="password" autocomplete="current-password" placeholder="Senha"></div><div class="row"><button class="btn primary" onclick="adminLogin()">Entrar como Admin</button><button class="btn" onclick="recoverAdmin()">Recuperar senha</button></div></div><div class="login-install-area">${pwaInstallButtonHtml()}</div></div></div>`}

function showLogin(t){
  const clientBox=document.getElementById("clientLogin");
  const adminBox=document.getElementById("adminLogin");
  const clientTab=document.getElementById("tabClient");
  const adminTab=document.getElementById("tabAdmin");
  const isClient=t==="client";

  clientBox.style.display=isClient?"block":"none";
  adminBox.style.display=isClient?"none":"block";

  clientTab.className=isClient?"btn access-tab selected":"btn access-tab";
  adminTab.className=isClient?"btn access-tab":"btn access-tab selected";
}


function clientLogin(){
  const email=document.getElementById("c_email").value.trim();
  const name=document.getElementById("c_name").value.trim();
  const unitValue=document.getElementById("c_room").value.trim();

  if(!email||!name||!unitValue){
    alert("Preencha e-mail, nome e quarto/apartamento.");
    return;
  }

  const registered=findRegisteredRoom(unitValue);
  if(!registered){
    alert("Unidade não existente");
    return;
  }

  session={
    role:"client",
    email,
    name,
    roomId:registered.id,
    roomName:roomLabel(registered)
  };
  cart=[];
  selectedCat="";
  expandedClientProductId="";
  page="catalog";
  render();
}
function adminLogin(){
  const n=document.getElementById("a_name").value.trim();
  const p=document.getElementById("a_pass").value;
  if(n===db.account.adminName && p===db.account.adminPassword){
    session={role:"admin",name:n};
    adminPage="dashboard";
    render();
  }else{
    alert("Acesso administrativo inválido.");
  }
}


function recoverAdmin(){
  const primary=(db.account.recoveryEmail||'anibal@starlis.com.br').trim();
  if(!primary)return alert('Cadastre o e-mail principal de recuperação da conta.');

  const btn=document.activeElement;
  if(btn)btn.disabled=true;

  fetch(GOOGLE_APPS_SCRIPT_URL,{
    method:'POST',
    mode:'no-cors',
    cache:'no-store',
    headers:{'Content-Type':'text/plain;charset=UTF-8'},
    body:JSON.stringify({
      action:'recoverAdminPassword',
      email:primary,
      password:db.account.adminPassword,
      adminName:db.account.adminName||'Admin',
      clientVersion:'1.37'
    })
  }).then(()=>{
    alert(`Solicitação enviada. A recuperação de senha foi encaminhada somente para o e-mail principal: ${primary}`);
  }).catch(err=>{
    console.error(err);
    alert('Não foi possível solicitar a recuperação de senha. Tente novamente.');
  }).finally(()=>{if(btn)btn.disabled=false});
}


function appMenuButton(pageId,label,iconHtml,extra=''){
  return `<button class="app-menu-btn ${page===pageId?'active':''} ${extra}" onclick="page='${pageId}';render()">
    <span class="app-menu-icon">${iconHtml}</span><span class="app-menu-text">${label}</span>
  </button>`;
}
function starlisStarsIcon(){
  return `<img src="starlis-stars.png" alt="Starlis" onerror="this.style.display='none';this.nextElementSibling.style.display='inline-block'"><span style="display:none;font-size:30px;color:#1898d0">☆彡</span>`;
}
function versatilIcon(){return `<img src="logo-versatil.jpg" alt="Versátil">`}



const VERSATIL_ICON_V173={
  walking:`<svg viewBox="0 0 72 72"><circle cx="39" cy="11" r="6" fill="#f2ad69" stroke="#263a24" stroke-width="2"/><path d="M34 19c6-4 12-2 15 4l5 9-7 3-5-8-4 11 9 10-6 5-10-12-7 18-7-3 9-27-8 6-5-6 12-8z" fill="#4b89a8" stroke="#263a24" stroke-width="2.5" stroke-linejoin="round"/><path d="M31 53l-9 10M42 51l10 10" stroke="#263a24" stroke-width="4" stroke-linecap="round"/></svg>`,
  bedSingle:`<svg viewBox="0 0 82 92" aria-hidden="true">
      <g fill="none" stroke="#3f3f3f" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M16 26v47c0 8 5 13 13 13h38V40z"/>
        <path d="M16 41h51"/>
        <rect x="30" y="12" width="28" height="24" rx="6" fill="#f7f7f7"/>
        <path d="M16 26V17c0-5 3-8 8-8h12"/>
        <path d="M67 40V21c0-5-3-8-8-8h-1"/>
        <path d="M16 44l51-13"/>
      </g>
    </svg>`,
  bedDouble:`<svg viewBox="0 0 110 92" aria-hidden="true">
      <g fill="none" stroke="#111" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 25v45c0 10 6 16 16 16h66V38H12z"/>
        <path d="M12 40h82"/>
        <rect x="24" y="8" width="31" height="25" rx="7" fill="#fff"/>
        <rect x="58" y="8" width="31" height="25" rx="7" fill="#fff"/>
        <path d="M12 25V17c0-5 3-8 8-8h7"/>
        <path d="M94 38V18c0-6-4-9-9-9h-2"/>
        <path d="M12 44l82-17"/>
      </g>
    </svg>`,
  bedMaster:`<svg viewBox="0 0 118 96" aria-hidden="true">
      <g fill="none" stroke="#111" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M10 25v48c0 10 7 17 17 17h81V38H10z"/>
        <path d="M10 41h98"/>
        <rect x="23" y="7" width="35" height="27" rx="7" fill="#fff"/>
        <rect x="61" y="7" width="35" height="27" rx="7" fill="#fff"/>
        <path d="M10 25V17c0-5 3-8 8-8h8"/>
        <path d="M108 38V18c0-6-4-9-9-9h-3"/>
        <path d="M10 45l98-19"/>
      </g>
    </svg>`,
  tableSide:`<svg viewBox="0 0 88 60"><rect x="31" y="20" width="27" height="10" rx="4" fill="#e75a45"/><path d="M44 30v25M36 55h16" stroke="#5a707b" stroke-width="4"/><path d="M7 12l4 34h19M10 12h12l5 26H11M81 12l-4 34H58M78 12H66l-5 26h16" fill="#9fb0b8" stroke="#5a707b" stroke-width="3"/><path d="M15 46l-3 11M26 46l3 11M73 46l3 11M62 46l-3 11" stroke="#5a707b" stroke-width="4"/></svg>`,
  sofaPastel:`<svg viewBox="0 0 88 58"><rect x="17" y="25" width="54" height="24" rx="8" fill="#b7cbbd" stroke="#61756a" stroke-width="2.5"/><rect x="8" y="29" width="15" height="18" rx="6" fill="#d7c3ae" stroke="#806b57" stroke-width="2"/><rect x="65" y="29" width="15" height="18" rx="6" fill="#d7c3ae" stroke="#806b57" stroke-width="2"/><path d="M24 50v5M64 50v5" stroke="#61756a" stroke-width="4"/></svg>`,
  smartTv:`<svg viewBox="0 0 82 58"><rect x="8" y="7" width="66" height="39" rx="5" fill="#171b1f" stroke="#5b6870" stroke-width="3"/><rect x="13" y="12" width="56" height="29" rx="2" fill="#97cfe1"/><path d="M41 46v7M28 54h26" stroke="#5b6870" stroke-width="3"/></svg>`,
  parking:`<svg viewBox="0 0 62 62"><rect x="8" y="5" width="46" height="49" rx="6" fill="#2d72b8"/><path d="M23 45V15h13c9 0 14 5 14 13s-5 13-14 13h-6v4zM30 22v12h6c4 0 7-2 7-6s-3-6-7-6z" fill="#fff"/></svg>`,
  umbrella:`<svg viewBox="0 0 78 60"><path d="M11 27c8-17 46-17 56 0z" fill="#f2b23d" stroke="#bb7820" stroke-width="2.5"/><path d="M39 27v26" stroke="#76502f" stroke-width="3"/><path d="M28 54h22" stroke="#76502f" stroke-width="3"/></svg>`,
  weights:`<svg viewBox="0 0 82 52"><path d="M16 26h50" stroke="#4e5960" stroke-width="5"/><rect x="8" y="17" width="8" height="18" rx="2" fill="#6d777d"/><rect x="16" y="14" width="8" height="24" rx="2" fill="#4f5960"/><rect x="58" y="14" width="8" height="24" rx="2" fill="#4f5960"/><rect x="66" y="17" width="8" height="18" rx="2" fill="#6d777d"/></svg>`,
  pool:`<svg viewBox="0 0 82 58"><path d="M8 38c8-5 14 5 22 0s14 5 22 0 14 5 22 0v12H8z" fill="#65bee0"/><path d="M54 10v28M66 10v28M54 15h12M54 25h12" stroke="#667982" stroke-width="3"/><path d="M8 50h66" stroke="#377fa1" stroke-width="3"/></svg>`,
  skewer:`<svg viewBox="0 0 72 72"><path d="M14 60L58 16" stroke="#9b6a37" stroke-width="3.2"/><rect x="19" y="43" width="13" height="9" rx="2" transform="rotate(-45 25.5 47.5)" fill="#a64d30"/><rect x="31" y="31" width="13" height="9" rx="2" transform="rotate(-45 37.5 35.5)" fill="#cf8732"/><rect x="43" y="19" width="13" height="9" rx="2" transform="rotate(-45 49.5 23.5)" fill="#a64d30"/></svg>`,
  store24:`<svg viewBox="0 0 76 62"><path d="M8 12h9l7 31h34l8-24H22" fill="none" stroke="#111" stroke-width="4"/><circle cx="30" cy="53" r="5" fill="#111"/><circle cx="55" cy="53" r="5" fill="#111"/><text x="40" y="36" text-anchor="middle" font-size="15" font-weight="800" fill="#111">24h</text></svg>`,
  iron:`<svg viewBox="0 0 82 52"><path d="M8 42h66L63 16H35c-12 0-20 8-27 26z" fill="#fff" stroke="#111" stroke-width="4"/><path d="M35 16c2-8 10-10 18-6l8 6M59 16h8" fill="none" stroke="#111" stroke-width="4"/><circle cx="58" cy="29" r="4" fill="#111"/></svg>`,
  elevator:`<svg viewBox="0 0 60 72"><rect x="10" y="5" width="40" height="62" rx="4" fill="#f7f7f7" stroke="#263b4a" stroke-width="3"/><path d="M23 30l7-9 7 9M37 42l-7 9-7-9" fill="none" stroke="#263b4a" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  noCar:`<svg viewBox="0 0 72 72"><path d="M17 38l5-13h28l5 13" fill="#222"/><rect x="12" y="36" width="48" height="17" rx="5" fill="#111"/><circle cx="22" cy="54" r="5"/><circle cx="50" cy="54" r="5"/><circle cx="36" cy="36" r="29" fill="none" stroke="#d93636" stroke-width="6"/><path d="M16 16l40 40" stroke="#d93636" stroke-width="6"/></svg>`,
  noDog:`<svg viewBox="0 0 72 72"><path d="M19 31l8-10 8 7 9-4 8 8-4 19H25z" fill="#8a5f3c"/><circle cx="32" cy="33" r="2"/><path d="M24 49l-5 10M45 49l5 10" stroke="#8a5f3c" stroke-width="4"/><circle cx="36" cy="36" r="29" fill="none" stroke="#d93636" stroke-width="6"/><path d="M16 16l40 40" stroke="#d93636" stroke-width="6"/></svg>`,
  noMegaphone:`<svg viewBox="0 0 72 72"><path d="M13 34l30-12v28L13 40z" fill="#d9e5eb" stroke="#394a54" stroke-width="3"/><path d="M18 40l5 15h10l-5-17" fill="#d9e5eb" stroke="#394a54" stroke-width="3"/><circle cx="36" cy="36" r="29" fill="none" stroke="#d93636" stroke-width="6"/><path d="M16 16l40 40" stroke="#d93636" stroke-width="6"/></svg>`
};
function versatilIconHtmlV173(item){
  const key=item?.iconKey||'';
  const v=VERSATIL_ICON_V173[key];
  return v?`<span class="institution-item-ico-svg">${v}</span>`:`<span class="institution-item-ico">${esc(item?.icon||'•')}</span>`;
}

function versatilGuideIcon(name){
  const map={'Acomodações':'🛏️','Áreas comuns':'🛋️','Garagem':'🅿️','Lazer':'🏖️','Comodidades':'🛎️','Normas gerais':'📖','Morador mensalista':'🏠'};
  return map[name]||'•';
}



function ensureNormasV174(){
  if(!Array.isArray(db.versatilGuide))db.versatilGuide=[];
  let normas=db.versatilGuide.find(s=>String(s.name||'').toLowerCase()==='normas gerais');
  if(!normas){
    normas={id:'normas',name:'Normas gerais',icon:'📖',type:'text',items:[]};
    db.versatilGuide.push(normas);
  }
  if(!Array.isArray(normas.items))normas.items=[];
  const item={"id":"n10","name":"Check-in / Check-out","description":"Nosso check-in se dá a partir das 14h.\nNosso check-out é até as 12h.\nPara qualquer alteração ou necessidade contate a portaria o quanto antes.","iconKey":"walking"};
  const existing=normas.items.find(x=>x.id===item.id||String(x.name||'').toLowerCase()==='check-in / check-out');
  if(existing)Object.assign(existing,item); else normas.items.push(item);
}


const UI_ICON_ASSETS_V180={
  checkin:'data:image/png;base64,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',
  noVisitorParking:'data:image/png;base64,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',
  noPets:'data:image/png;base64,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',
  loftSolo:'data:image/png;base64,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',
  loftSolteiro:'data:image/png;base64,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',
  casalStudio:'data:image/png;base64,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',
  master:'data:image/png;base64,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',
  studioTriplo:'data:image/png;base64,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'
};
function assetIconV180(src,extra=''){
  return `<span class="institution-reference-icon ${extra}"><img src="${src}" alt="" aria-hidden="true"></span>`;
}
function versatilCategoryIconV179(sec){
  const name=String(sec?.name||'').toLowerCase();
  if(name==='áreas comuns')return `<span class="institution-category-svg">${VERSATIL_ICON_V173.sofaPastel}</span>`;
  if(name==='acomodações')return `<span class="institution-category-svg accommodation-title-bed">${VERSATIL_ICON_V173.bedDouble}</span>`;
  return `<span class="institution-category-icon">${esc(sec?.icon||versatilGuideIcon(sec?.name))}</span>`;
}
function versatilItemIconV179(item){
  const id=String(item?.id||'');
  if(id==='loft-solo')return assetIconV180(UI_ICON_ASSETS_V180.loftSolo,'bed-ref');
  if(id==='loft-solteiro')return assetIconV180(UI_ICON_ASSETS_V180.loftSolteiro,'bed-ref');
  if(id==='loft-casal'||id==='studio-casal')return assetIconV180(UI_ICON_ASSETS_V180.casalStudio,'bed-ref');
  if(id==='studio-triplo')return assetIconV180(UI_ICON_ASSETS_V180.studioTriplo,'bed-ref');
  if(id==='master')return assetIconV180(UI_ICON_ASSETS_V180.master,'bed-ref master-ref');
  if(id==='n10'||String(item?.name||'').toLowerCase()==='check-in / check-out')return assetIconV180(UI_ICON_ASSETS_V180.checkin,'rule-ref');
  if(id==='n4'||String(item?.name||'').toLowerCase().includes('vagas para visitantes'))return assetIconV180(UI_ICON_ASSETS_V180.noVisitorParking,'rule-ref');
  if(id==='n5'||String(item?.name||'').toLowerCase().includes('aceitamos pets'))return assetIconV180(UI_ICON_ASSETS_V180.noPets,'rule-ref');
  if(id==='n7'||String(item?.name||'').toLowerCase()==='lixos e resíduos')return `<span class="institution-item-ico-svg trash-bin-v179"><svg viewBox="0 0 72 72" aria-hidden="true"><path d="M22 21h28l-3 39H25z" fill="#6f7c84" stroke="#263b45" stroke-width="3"/><path d="M18 18h36M29 13h14" stroke="#263b45" stroke-width="4" stroke-linecap="round"/><path d="M31 29v22M41 29v22" stroke="#dfe6ea" stroke-width="3"/></svg></span>`;
  return versatilIconHtmlV173(item);
}
function versatilItemsOrderedV179(sec){
  const items=(sec?.items||[]).slice();
  if(String(sec?.id||'')==='acomodacoes'||String(sec?.name||'').toLowerCase()==='acomodações'){
    const order=['loft-solo','loft-solteiro','loft-casal','studio-casal','studio-triplo','master','apto-2q'];
    return items.sort((a,b)=>{
      const ai=order.indexOf(String(a.id||'')),bi=order.indexOf(String(b.id||''));
      return (ai<0?999:ai)-(bi<0?999:bi);
    });
  }
  return items.sort((a,b)=>String(a.name||'').localeCompare(String(b.name||''),'pt-BR',{sensitivity:'base'}));
}


function versatilGuidePage(){
  const sections=(db.versatilGuide||[]).slice().sort((a,b)=>String(a.name||'').localeCompare(String(b.name||''),'pt-BR',{sensitivity:'base'}));
  return `<div class="card institutional-page"><h2>Conheça o Versátil</h2><p class="muted">Estrutura, acomodações e informações úteis durante a sua estada.</p></div>
    ${sections.map(sec=>`<details class="institution-detail"><summary>${versatilCategoryIconV179(sec)}<span>${esc(sec.name)}</span><span>⌄</span></summary>
      <div class="institution-inside">${versatilItemsOrderedV179(sec).map(item=>`<details class="institution-item"><summary>${versatilItemIconV179(item)}<span class="institution-item-title">${esc(item.name)}</span><span>⌄</span></summary><div class="institution-item-body">
        ${Array.isArray(item.images)&&item.images.length?`<div class="institution-photos">${item.images.slice(0,2).map(u=>`<img src="${esc(u)}" alt="${esc(item.name)}" onerror="this.classList.add('img-failed')">`).join('')}</div>`:''}
        <p>${esc(item.description||item.name).replace(/\n/g,'<br>')}</p></div></details>`).join('')}</div>
    </details>`).join('')}`;
}
function starlisGuidePage(){
  return `<div class="card institutional-page"><h2>Conheça a Starlis</h2><div class="starlis-page-brand">${starlisStarsIcon()}<b>STARLIS GROUP HOTELS</b></div></div>
  <div class="starlis-grid">${(db.starlisGuide||[]).map(h=>`<div class="starlis-hotel-card">
    <img src="${esc(h.image||'')}" alt="${esc(h.name)}" onerror="this.classList.add('img-failed')">
    <div class="starlis-hotel-body"><h3>${esc(h.name)}</h3><p>${esc(h.description||'')}</p>
      ${h.id==='versatil'?'':`<div class="equal-external-actions">
        <a class="btn primary" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(h.map||h.name)}">Google Maps</a>
        <a class="btn itinerary-send-btn" target="_blank" rel="noopener" href="${esc(h.reserve||'https://www.starlis.com.br')}">Reservar</a>
      </div>`}
    </div></div>`).join('')}</div>`;
}


const POSTAL_SENT_ACCESS_KEY='versatil_postal_sent_access';
function postalAlreadySentV171(){return sessionStorage.getItem(POSTAL_SENT_ACCESS_KEY)==='1'}
function postalSentScreenV171(){return `<div class="postal-sent-screen"><div class="postal-sent-popup"><div style="font-size:46px">✉️</div><h2>Seu postal foi enviado!</h2></div></div>`}

function stableCouponFor(email){
  let h=2166136261;for(const c of String(email||'')){h^=c.charCodeAt(0);h=Math.imul(h,16777619)}
  return 'VST-'+(Math.abs(h)>>>0).toString(36).toUpperCase().slice(0,7);
}
function postalTourismItem(){
  const semester=(()=>{const d=new Date();return d.getFullYear()+'-'+(d.getMonth()<6?'H1':'H2')})();
  const key='versatil_postal_tour_'+semester;
  const tourismRoot=(db.leisureGuide||[]).find(n=>n.parentId===''&&String(n.name).toUpperCase().includes('TURISMO'));
  const all=[];const walk=id=>{for(const n of leisureChildren(id)){if(n.type==='place'&&n.imageUrl)all.push(n);else if(n.type==='group')walk(n.id)}};if(tourismRoot)walk(tourismRoot.id);
  if(!all.length)return {name:'Cuiabá',imageUrl:'leisure-assets/turismo.svg',mapQuery:'Cuiabá MT'};
  let idx=Number(localStorage.getItem(key)||0)%all.length;
  const item=all[idx];localStorage.setItem(key,String((idx+1)%all.length));return item;
}

const POSTAL_FIXED_PHOTOS_V173={park:"https://hotelmt.com.br/wp-content/uploads/2020/03/original-ff169b7274cfb6259fe8c25c3c29ac1e.jpeg",facade:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/527400490.jpg?k=601e3832271bf87f77452863c49ee6daf8c1cd63020105c24ada5f36f35a6777&o=",pool:"https://images.trvl-media.com/lodging/38000000/37200000/37198900/37198826/ff5edf34_edited_0d15.jpg?impolicy=resizecrop&ra=fit&rw=598"};


const POSTAL_TEXT_V180={
  intro:'Envie um postal para quem você gosta e dê um brinde de presente!',
  message:'Caro amigo(a) estou em Cuiabá, ficando no Versátil e estou adorando o lugar. Envio este postal pois lembrei de você durante minha viagem. Espero que estejas bem, mande notícias!',
  couponText:'Use meu cupom de desconto e ganhe um up-grade na sua reserva'
};
function postalConfigV180(){
  const src=(db.postalConfig&&typeof db.postalConfig==='object')?db.postalConfig:{};
  return {
    ...DEFAULT_POSTAL_CONFIG,
    ...src,
    message:String(src.message||'').trim()||POSTAL_TEXT_V180.message,
    couponText:String(src.couponText||'').trim()||POSTAL_TEXT_V180.couponText,
    address:String(src.address||'').trim()||DEFAULT_POSTAL_CONFIG.address,
    phone:String(src.phone||'').trim()||DEFAULT_POSTAL_CONFIG.phone,
    site:String(src.site||'').trim()||'https://www.starlis.com.br'
  };
}

function postalPage(){
  if(postalAlreadySentV171())return postalSentScreenV171();
  const cfg=postalConfigV180();
  const tour=postalTourismItem();
  const accessEmail=String(session?.email||'');
  const accessName=String(session?.name||'');
  return `<div class="card"><h2>Correio Versátil</h2><p class="postal-page-intro">${esc(POSTAL_TEXT_V180.intro)}</p></div>
  <div class="postal-stage"><div id="postalCard" class="postal-card">
    <button id="postalFlipBtn" class="postal-center-btn postal-flip-btn" style="display:none" onclick="flipPostalV170()">Vire</button>
    <div class="postal-face postal-back">
      <div class="postal-message-column">
        <div class="postal-hand">Caro(a) <input id="postalRecipientName" class="postal-input" placeholder="nome do destinatário"></div>
        <input id="postalRecipientEmail" class="postal-input full" placeholder="e-mail do destinatário">
        <p class="postal-hand postal-main-message">${esc(cfg.message||'')}</p>
        <div class="postal-hand">Abraços, <input id="postalSenderName" class="postal-input" value="${esc(accessName)}"></div>
        <div id="postalError" class="postal-error"></div>
      </div>
      <div class="postal-address-column">
        <div class="postal-stamp-zone"><div class="postal-cancel-lines">${'<span></span>'.repeat(5)}</div><div class="postal-cancel-circle"></div>
          <div class="postal-stamp"><img src="logo-versatil.jpg" alt="Versátil"></div></div>
        <div class="postal-address"><b>Starlis Home Versátil</b><br><br>${esc(cfg.address||'')}<br><br>Reservas: ${esc(cfg.phone||'')}</div>
        <div class="postal-coupon">${esc(cfg.couponText||'')}:<br><b>${stableCouponFor(accessEmail)}</b></div>
      </div>
    </div>
    <div class="postal-face postal-front">
      <button id="postalSendBtn" class="postal-center-btn postal-send-btn" style="display:none" onclick="sendPostalV170()">Enviar</button>
      <div class="postal-front-grid">
        <div class="postal-tourism"><img src="${POSTAL_FIXED_PHOTOS_V173.park}" alt="Parque das Águas"><div class="postal-tourism-caption"><b>Parque das Águas</b><br><a target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=Parque+das+Aguas+Cuiaba">Cuiabá • Google Maps</a></div></div>
        <div class="postal-versatil-stack">
          <div class="postal-facade"><img src="${POSTAL_FIXED_PHOTOS_V173.facade}" alt="Fachada Starlis Home Versátil"><div class="postal-facade-footer"><b>Reserve já.</b> • Starlis Home Versátil • www.starlis.com.br</div></div>
          <div class="postal-pool-photo"><img src="${POSTAL_FIXED_PHOTOS_V173.pool}" alt="Piscina Starlis Home Versátil"></div>
        </div>
      </div>
    </div>
  </div></div><div id="postalStatus" class="postal-status">Preencha nome, e-mail e assinatura.</div>`;
}
function bindPostalValidation(){
  const name=document.getElementById('postalRecipientName'),email=document.getElementById('postalRecipientEmail'),sender=document.getElementById('postalSenderName');
  if(!name||!email||!sender)return;
  [name,email,sender].forEach(el=>el.addEventListener('input',updatePostalFlipV170));
  updatePostalFlipV170();
}
function updatePostalFlipV170(){
  const name=document.getElementById('postalRecipientName'),email=document.getElementById('postalRecipientEmail'),sender=document.getElementById('postalSenderName'),btn=document.getElementById('postalFlipBtn'),err=document.getElementById('postalError');
  if(!name||!email||!sender||!btn)return;
  const em=email.value.trim().toLowerCase(),valid=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em),self=em===String(session?.email||'').toLowerCase();
  if(err)err.textContent=self?'Você não pode enviar o postal para o mesmo e-mail do acesso.':'';
  btn.style.display=(name.value.trim()&&valid&&sender.value.trim()&&!self&&!document.getElementById('postalCard')?.classList.contains('flipped'))?'block':'none';
}
function flipPostalV170(){
  updatePostalFlipV170();const btn=document.getElementById('postalFlipBtn');if(!btn||btn.style.display==='none')return;
  const card=document.getElementById('postalCard');card?.classList.add('flipped');btn.style.display='none';
  const status=document.getElementById('postalStatus');if(status)status.textContent='Postal virado. O botão “Enviar” aparecerá em 7 segundos.';
  setTimeout(()=>{const s=document.getElementById('postalSendBtn');if(s)s.style.display='block';if(status)status.textContent='Pronto para enviar.'},7000);
}
async function sendPostalV170(){
  const card=document.getElementById('postalCard'),btn=document.getElementById('postalSendBtn'),status=document.getElementById('postalStatus');
  if(!card||card.classList.contains('sending')||postalAlreadySentV171())return;
  const payload={action:'sendPostcard',clientVersion:APP_VERSION,sender:{name:document.getElementById('postalSenderName')?.value.trim()||session?.name||'',email:session?.email||'',roomName:session?.roomName||room()?.name||''},recipient:{name:document.getElementById('postalRecipientName')?.value.trim()||'',email:document.getElementById('postalRecipientEmail')?.value.trim()||''},coupon:stableCouponFor(session?.email||''),config:postalConfigV180()};
  btn.style.display='none';card.classList.add('sending');if(status)status.textContent='Enviando seu postal…';
  try{await centralPost('sendPostcard',payload);sessionStorage.setItem(POSTAL_SENT_ACCESS_KEY,'1');setTimeout(()=>{page='postal';render()},2100)}
  catch(e){console.warn(e);card.classList.remove('sending');if(status)status.textContent='Não foi possível enviar. Tente novamente.'}
}
function signoutMessageV170(name){
  if(sessionActivity.order&&sessionActivity.route)return `Obrigado por seu pedido e aproveite seu passeio, até breve ${name}!`;
  if(sessionActivity.route)return `Maravilha ${name}, esperamos que aproveite seu passeio e curta Cuiabá!`;
  if(sessionActivity.order)return `Obrigado por seu pedido, até breve ${name}!`;
  return `Até breve ${name}!`;
}
function completeSignoutV170(){
  const role=session?.role||'';
  if(role==='client'&&page!=='confirmation')cart=[];
  session=null;selectedCat='';expandedClientProductId='';page='catalog';resetSessionActivity();render();
}
function showSignoutPopupV170(){
  const name=session?.name||session?.email||'';
  const msg=session?.role==='admin'?`Até breve ${name}!`:signoutMessageV170(name);
  document.getElementById('signoutReadModal')?.remove();
  const m=document.createElement('div');m.id='signoutReadModal';m.className='signout-read-modal';
  m.innerHTML=`<div class="signout-read-box"><div class="signout-thumb">👍</div><h3>${esc(msg)}</h3><button class="btn primary signout-valeu" onclick="document.getElementById('signoutReadModal')?.remove();completeSignoutV170()">👍 Valeu!</button></div>`;
  document.body.appendChild(m);
}




function openNormasFromHeaderV176(btn){
  try{sessionStorage.setItem('normas_header_animation_stopped','1')}catch(e){}
  if(btn)btn.classList.add('normas-animation-stopped');
  page='normas';
  render();
  setTimeout(()=>adjustScrollBelowHeaderV177(true),0);
}
function normasHeaderAnimationStoppedV176(){
  try{return sessionStorage.getItem('normas_header_animation_stopped')==='1'}catch(e){return false}
}

function appView(){
  const admin=session.role==='admin';
  const userName=esc(session?.name||session?.email||'');
  const unitText=admin?'ADMIN':esc(room()?.name||'');
  const updatedText=centralStatusLabel().replace('Base pública atualizada • ','Atualizado ').replace('Base pública atualizada','Atualizado');

  return `<header class="top top-v175">
    <div class="header-col header-col-brand">
      <img class="header-logo-v175" src="logo-versatil.jpg" alt="Versátil">
      <div class="header-brand-text-v175">
        <div class="header-app-name-v175">SERVIÇOS VERSÁTIL</div>
        <div class="header-unit-v175">${unitText}</div>
        <div id="centralStatusTextV175" class="header-updated-v175">${esc(updatedText)}</div>
      </div>
    </div>

    <div class="header-col header-col-welcome">
      <div class="app-welcome-v175">
        <span>Seja bem vindo</span><br>
        <b>${userName}</b>!
      </div>
    </div>

    <div class="header-col header-col-actions">
      ${admin?`<button class="btn header-publish-btn header-action-v175" onclick="publishWithLoading()">Publicar alterações</button>`:''}
      <button class="btn header-signout-btn header-action-v175" onclick="signout()">Sair</button>
      ${admin?centralStatusHtml():`<button class="header-normas-btn header-action-v175 ${normasHeaderAnimationStoppedV176()?'normas-animation-stopped':''}" onclick="openNormasFromHeaderV176(this)">Normas gerais</button>`}
    </div>
  </header><div class="wrap">${admin?adminView():clientView()}</div>`;
}
function signout(){
  showSignoutPopupV170();
}



function normasGeraisPage(){
  ensureNormasV174();
  const sec=(db.versatilGuide||[]).find(s=>String(s.name||'').toLowerCase()==='normas gerais');
  const items=(sec?.items||[]).slice().sort((a,b)=>String(a.name||'').localeCompare(String(b.name||''),'pt-BR',{sensitivity:'base'}));
  return `<div class="card institutional-page normas-page-head"><div class="row between"><div><h2>Normas gerais</h2><p class="muted">Informações importantes para uma boa convivência durante sua estada.</p></div><button class="btn" onclick="page='catalog';render()">Voltar</button></div></div>
  <div class="normas-page-list">${items.map(item=>`<details class="institution-item normas-direct-item"><summary>${versatilItemIconV179(item)}<span class="institution-item-title">${esc(item.name)}</span><span>⌄</span></summary><div class="institution-item-body"><p>${esc(item.description||item.name).replace(/\n/g,'<br>')}</p></div></details>`).join('')}</div>`;
}
function clientView(){
  const menu=`<nav class="app-menu-grid">
    ${appMenuButton('catalog','Catálogo',UI_ICONS.book)}
    ${appMenuButton('leisure','Lazer e Conveniência',UI_ICONS.pin)}
    ${appMenuButton('itinerary',`Meu Roteiro${myItinerary.length?` (${myItinerary.length})`:''}`,UI_ICONS.map)}
    ${appMenuButton('cart',`Carrinho${cart.length?` (${cart.length})`:''}`,UI_ICONS.cart)}
    ${appMenuButton('confirmation','Confirmação',UI_ICONS.check)}
    ${appMenuButton('versatil','Conheça o Versátil',versatilIcon())}
    ${appMenuButton('starlis','Conheça a Starlis',starlisStarsIcon())}
    ${appMenuButton('postal','Correio Versátil',UI_ICONS.mailbox,'postal-menu-btn')}
  </nav>`;
  if(page==='leisure')return menu+leisureGuidePage();
  if(page==='itinerary')return menu+itineraryPage();
  if(page==='versatil')return menu+versatilGuidePage();
  if(page==='starlis')return menu+starlisGuidePage();
  if(page==='postal')return menu+postalPage();
  if(page==='normas')return menu+normasGeraisPage();
  return menu+(page==='catalog'?catalogPage():page==='cart'?cartPage():confirmationPage());
}
function selectClientCategory(cid){
  selectedCat=cid;
  expandedClientProductId='';
  render();
}

function changeClientCategory(){
  selectedCat='';
  expandedClientProductId='';
  render();
  window.scrollTo({top:0,behavior:'smooth'});
}

function toggleClientProduct(pid){
  expandedClientProductId=expandedClientProductId===pid?'':pid;
  render();
  if(expandedClientProductId){
    setTimeout(()=>{
      document.getElementById('client_product_'+pid)?.scrollIntoView({behavior:'smooth',block:'nearest'});
    },0);
  }
}

function clientCategoryChangeButton(){
  return `<button class="client-change-category-btn" onclick="changeClientCategory()">↔&nbsp; Trocar de categoria</button>`;
}


function catalogPage(){
  const cats=db.categories||[];

  if(!selectedCat){
    return `<section class="client-category-home">
      <div class="client-catalog-intro">
        <h2>O que você precisa?</h2>
        <div class="guest-today-notice">Prezado Hóspede para solicitações, para o dia de hoje, contate nossa portaria, para avaliarmos a possibilidade.</div>
        <p class="muted">Escolha uma categoria para ver os produtos disponíveis.</p>
      </div>

      <div class="client-category-grid">
        ${cats.map(c=>`<button class="client-category-card" onclick="selectClientCategory('${c.id}')">
          <div class="client-category-icon">${c.icon||''}</div>
          <div class="client-category-copy">
            <h3>${esc(c.name)}</h3>
            <p>${esc(c.description||'')}</p>
          </div>
        </button>`).join('')}
      </div>
    </section>`;
  }

  const cat=cats.find(c=>c.id===selectedCat);
  if(!cat){
    selectedCat='';
    return catalogPage();
  }

  const products=(db.products||[]).filter(p=>p.cat===selectedCat);

  return `<section class="client-category-products">
    <div class="client-category-toolbar">
      <div class="client-selected-category">
        <span class="client-category-icon small">${cat.icon||''}</span>
        <strong>${esc(cat.name)}</strong>
      </div>
      ${clientCategoryChangeButton()}
    </div>

    <div class="client-products-list">
      ${products.map(clientProductAccordion).join('')}
    </div>

    <div class="client-category-bottom-action">
      ${clientCategoryChangeButton()}
    </div>
  </section>`;
}
function packageSavingsValue(product){
  if(!product||product.cat!=='pacotes')return 0;

  const baseIds=packageBaseProductIds(product);
  if(!baseIds.length)return 0;

  const uses=Math.max(1,Number(packageUseCount(product)||1));
  const packagePrice=Number(productPrice(product)||0);

  // Os pacotes atuais são vinculados a um produto-base.
  // Se futuramente houver mais de um produto-base, soma-se o valor
  // de uma unidade de cada base e aplica-se o número de utilizações.
  const baseUnitTotal=baseIds.reduce((sum,id)=>{
    const base=db.products.find(p=>p.id===id);
    return sum+Number(base?productPrice(base):0);
  },0);

  return Math.max(0,(baseUnitTotal*uses)-packagePrice);
}

function packageSavingsHtml(product){
  const saving=packageSavingsValue(product);
  if(product?.cat!=='pacotes'||saving<=0)return '';
  return `<div class="client-package-savings">Você poupará ${money(saving)}</div>`;
}


function packageColorV181(p){
  const id=String(p?.id||'').toLowerCase(),name=String(p?.name||'').toLowerCase();
  if(id.includes('diarista')||name.includes('diarista'))return '#f2cc2f';      // amarelo
  if(id.includes('padrao')||name.includes('padrão')||name.includes('padrao'))return '#36a852'; // verde
  if(id.includes('express')||name.includes('express'))return '#ef7c23';       // laranja
  if(id.includes('wc')||name.includes('wc'))return '#2d78c5';                // azul
  return '#8b62b5'; // demais pacotes continuam diferenciados, sem conflitar
}
function packageIconV181(p){
  const color=packageColorV181(p);
  return `<span class="package-icon-v181" style="--package-color:${color}" aria-hidden="true">
    <svg viewBox="0 0 64 64">
      <path d="M14 24h36v31H14z" fill="${color}" stroke="#263b45" stroke-width="2.5"/>
      <path d="M10 18h44v12H10z" fill="${color}" stroke="#263b45" stroke-width="2.5"/>
      <path d="M29 18h6v37h-6z" fill="#fff" opacity=".88"/>
      <path d="M19 18c-5-8 7-13 13 0M45 18c5-8-7-13-13 0" fill="none" stroke="#263b45" stroke-width="3" stroke-linecap="round"/>
    </svg>
  </span>`;
}
function productIconV181(p){
  return p?.cat==='pacotes'?packageIconV181(p):(p?.icon||'');
}

function clientProductAccordion(p){
  const price=productPrice(p);
  const unavailable=price<=0;
  const defaultDate=firstAllowedDate24h(p);
  const requiresPeriod=productRequiresPeriod(p);
  const isPackage=p.cat==='pacotes';
  const daily=isDailyRentalProduct(p);
  const slots=(requiresPeriod||daily)?availableSlotsForProductDate(p,defaultDate):[];
  const noAvailability=(requiresPeriod||daily)&&!slots.length;
  const lockQty=isPackage||requiresPeriod||daily||p.id==='diarista';
  const open=expandedClientProductId===p.id;

  return `<article id="client_product_${p.id}" class="client-product-accordion${open?' open':''}">
    <button class="client-product-summary" onclick="toggleClientProduct('${p.id}')" aria-expanded="${open?'true':'false'}">
      <div class="client-product-summary-left">
        <div class="client-product-icon">${productIconV181(p)}</div>
        <div class="client-product-summary-copy">
          <div class="client-product-name">${esc(p.name)}</div>
          <div class="client-product-price">${unavailable?'Preço a cadastrar':money(price)}</div>
          ${packageSavingsHtml(p)}
          <div class="client-product-hint">Clique para ver a composição</div>
        </div>
      </div>
      <span class="client-product-chevron" aria-hidden="true"></span>
    </button>

    ${open?`<div class="client-product-details">
      <p class="client-product-description">${esc(p.desc||'')}</p>

      ${isPackage
        ?`<div class="package-schedule">
            <div class="notice"><b>Este pacote possui ${packageUseCount(p)} utilização(ões).</b> Selecione a data e o período de cada utilização.</div>
            ${Array.from({length:packageUseCount(p)},(_,i)=>renderPackageUseRow(p,i,defaultDate)).join('')}
          </div>`
        :`<div class="client-product-form">
            <div class="field">
              <label>Quantidade</label>
              <input id="qty_${p.id}" type="number" min="1" max="${lockQty?1:''}" value="1" ${lockQty?'disabled':''}>
            </div>

            <div class="field">
              <label>Data</label>
              <input id="date_${p.id}" type="date" min="${today()}" value="${defaultDate}" onchange="refreshProductAvailability('${p.id}')">
            </div>

            ${requiresPeriod
              ?`<div class="field">
                  <label>Período</label>
                  <select id="period_${p.id}" ${noAvailability?'disabled':''}>
                    ${slots.map(s=>`<option value="${periodValueForProduct(p,s)}">${periodOptionLabelForProduct(p,s)}</option>`).join('')}
                  </select>
                </div>`
              :`<div class="field">
                  <label>Período</label>
                  <input value="${daily?'Diária':'Dia selecionado'}" disabled>
                </div>`}
          </div>

          <div id="period_msg_${p.id}" class="availability-message ${noAvailability?'show':''}">
            ${noAvailability
              ?(daily?'Lamentamos mas nesta data não há disponibilidade para esta locação diária.':'Lamentamos mas nesta data e período não há disponibilidade, por favor selecione outra data de sua conveniência.')
              :''}
          </div>`}

      ${isPackage?`<div class="client-package-qty-note">Quantidade do pacote: <b>1</b></div>`:''}

      <button id="addbtn_${p.id}" class="btn primary client-add-cart-btn"
        ${(unavailable||(!isPackage&&noAvailability))?'disabled':''}
        onclick="addToCart('${p.id}')">Enviar para o carrinho</button>
    </div>`:''}
  </article>`;
}

// Mantido como alias para outras referências internas, se existirem.
function productCard(p){return clientProductAccordion(p)}
function refreshProductAvailability(pid){
  const p=db.products.find(x=>x.id===pid);if(!p)return;
  const date=document.getElementById('date_'+pid)?.value||'',addBtn=document.getElementById('addbtn_'+pid),qty=document.getElementById('qty_'+pid),requiresPeriod=productRequiresPeriod(p),daily=isDailyRentalProduct(p);
  if(requiresPeriod){
    const select=document.getElementById('period_'+pid),msg=document.getElementById('period_msg_'+pid),slots=date?availableSlotsForProductDate(p,date):[],none=!slots.length;
    if(select){select.innerHTML=slots.map(s=>`<option value="${periodValueForProduct(p,s)}">${periodOptionLabelForProduct(p,s)}</option>`).join('');select.disabled=none}
    if(qty){qty.value=1;qty.disabled=true}
    if(msg){msg.textContent=none?'Lamentamos mas nesta data e período não há disponibilidade, por favor selecione outra data de sua conveniência.':'';msg.className=`availability-message ${none?'show':''}`}
    if(addBtn)addBtn.disabled=none||productPrice(p)<=0;return;
  }
  const none=date?availableSlotsForProductDate(p,date).length===0:true,msg=document.getElementById('period_msg_'+pid);
  if(qty){if(daily)qty.value=1;qty.disabled=daily||none}
  if(msg&&daily){msg.textContent=none?'Lamentamos mas nesta data não há disponibilidade para esta locação diária.':'';msg.className=`availability-message ${none?'show':''}`}
  if(addBtn)addBtn.disabled=none||productPrice(p)<=0;
}
function addToCart(pid){
  const _p24=db.products.find(x=>x.id===pid);
  const _date24=document.getElementById(`date_${pid}`)?.value||'';
  const _period24=document.getElementById(`period_${pid}`)?.value||'';
  if(_date24 && !bookingMeets24h(_p24,_date24,_period24)){
    alert('Esta solicitação precisa ser feita com no mínimo 24 horas de antecedência. Para solicitações para o dia de hoje, contate nossa portaria para avaliarmos a possibilidade.');
    return;
  }

  const p=db.products.find(x=>x.id===pid);
  const daily=isDailyRentalProduct(p);
  const qty=(daily||p?.id==='diarista')?1:Number(document.getElementById('qty_'+pid)?.value||1);
  if(!p)return alert('Produto não encontrado.');

  const group=capacityGroupForProduct(p);

  if(p.cat==='pacotes'){
    const schedule=packageScheduleFromCard(p);
    const validation=validateScheduleAgainstCapacity(p,schedule,true);
    if(!validation.ok)return alert(validation.message);

    cart.push({
      id:id(),
      productId:pid,
      categoryId:p.cat,
      capacityGroup:group,
      name:p.name,
      qty:1,
      price:productPrice(p),
      date:schedule[0]?.date||'',
      period:schedule[0]?.period||'',
      schedule
    });

    expandedClientProductId='';
    page='catalog';
    render();
    showClientCartToast();
    return;
  }

  const date=document.getElementById('date_'+pid)?.value||'';
  const period=document.getElementById('period_'+pid)?.value||'';
  const requiresPeriod=productRequiresPeriod(p);

  if(qty<1||!date)return alert('Revise quantidade e data.');

  if(p.cat==='servicos'&&!serviceDayHasCapacity(date,1)){
    refreshProductAvailability(pid);
    return alert('Lamentamos, o limite de solicitações de serviços para esta data foi atingido. Selecione outra data.');
  }

  if(requiresPeriod){
    const slots=availableSlotsForProductDate(p,date);
    if(!slots.length || !period){
      refreshProductAvailability(pid);
      return alert('Lamentamos mas nesta data e período não há disponibilidade, por favor selecione outra data de sua conveniência.');
    }

    const slot=bookingSlotFromPeriod(period);
    if(!slots.includes(slot)){
      refreshProductAvailability(pid);
      return alert('Este período não está mais disponível. Selecione outro período ou outra data.');
    }

    const sameGroupInCart=(cart||[]).some(i=>{
      const ip=db.products.find(x=>x.id===i.productId);
      if(capacityGroupForProduct(ip)!==group)return false;
      const uses=i.schedule?.length?i.schedule:[{date:i.date,period:i.period}];
      return uses.some(u=>u.date===date && bookingSlotFromPeriod(u.period)===slot);
    });

    if(sameGroupInCart && p.cat!=='servicos'){
      return alert('Já existe um item deste mesmo grupo de capacidade no carrinho para esta data e período.');
    }
  }else{
    const free=availableSlotsForProductDate(p,date);
    const unavailable=p.cat==='servicos' ? !free.length : free.length<2;
    if(unavailable){
      refreshProductAvailability(pid);
      return alert(p.cat==='servicos'
        ?'Lamentamos, o limite de solicitações de serviços para esta data foi atingido ou a data está fechada. Selecione outra data.'
        :'Lamentamos mas nesta data e período não há disponibilidade, por favor selecione outra data de sua conveniência.');
    }
  }

  cart.push({
    id:id(),
    productId:pid,
    categoryId:p.cat,
    capacityGroup:group,
    name:p.name,
    qty:(daily||p.id==='diarista')?1:qty,
    price:productPrice(p),
    date,
    period
  });

  expandedClientProductId='';
  page='catalog';
  render();
  showClientCartToast();
}


function showClientCartToast(){
  document.getElementById('clientCartToast')?.remove();
  const el=document.createElement('div');
  el.id='clientCartToast';
  el.className='client-cart-toast';
  el.textContent='Item adicionado ao carrinho';
  document.body.appendChild(el);
  requestAnimationFrame(()=>el.classList.add('show'));
  setTimeout(()=>{
    el.classList.remove('show');
    setTimeout(()=>el.remove(),220);
  },1400);
}


function confirmClearCart(){
  if(!cart.length)return;
  if(confirm('Deseja excluir todos os itens do carrinho?')){
    cart=[];
    render();
  }
}


function cartPage(){
  if(!cart.length){
    return `<div class="card">
      <h2>Carrinho</h2>
      <div class="muted">Nenhum item selecionado.</div>
      <button class="btn primary" onclick="page='catalog';render()">Voltar ao catálogo</button>
    </div>`;
  }

  const total=cart.reduce((a,i)=>a+i.price*i.qty,0);

  return `<div class="card cart-card-v158">
    <div class="row between">
      <h2>Carrinho</h2>
    </div>

    <div class="cart-mobile-scroll-hint">← Deslize para ver todos os dados →</div>

    <div class="cart-scroll-shell">
      <table class="cart-table-v158">
        <tr>
          <th>Serviço / pacote</th>
          <th>Datas e períodos</th>
          <th>Qtd.</th>
          <th>Unit.</th>
          <th>Total</th>
          <th class="cart-action-col">
            <button class="btn red cart-delete-small" onclick="clearCart()">Excluir tudo</button>
          </th>
        </tr>

        ${cart.map((i,idx)=>{
          const p=db.products.find(x=>x.id===i.productId);
          const locked=!!i.schedule?.length || productRequiresPeriod(p) || isDailyRentalProduct(p) || p?.id==='diarista';

          return `<tr>
            <td>${esc(i.name)}</td>

            <td>${i.schedule?.length
              ?i.schedule.map((u,n)=>`<div><b>${n+1}.</b> ${formatDateBR(u.date)} • ${esc(periodLabel(u.period))}</div>`).join('')
              :`${formatDateBR(i.date)}${i.period?` • ${esc(periodLabel(i.period))}`:''}`}
            </td>

            <td>${locked
              ?`<b>${i.qty}</b><br><span class="small muted">Quantidade definida na seleção</span>`
              :`<input type="number" min="1" value="${i.qty}" style="width:80px" onchange="cart[${idx}].qty=Math.max(1,Number(this.value));render()">`}
            </td>

            <td>${money(i.price)}</td>
            <td>${money(i.price*i.qty)}</td>

            <td class="cart-action-col">
              <button class="btn red cart-delete-small" onclick="cart.splice(${idx},1);render()">Excluir</button>
            </td>
          </tr>`;
        }).join('')}
      </table>
    </div>

    <div class="notice">
      Itens que dependem de disponibilidade de data/período não podem ter sua quantidade alterada dentro do carrinho. Para mudar a quantidade, exclua o item e faça uma nova seleção no catálogo.
    </div>

    <div class="row between" style="margin-top:16px">
      <div class="total">Total: ${money(total)}</div>
      <div class="row">
        <button class="btn" onclick="page='catalog';render()">Continuar escolhendo</button>
        <button class="btn green" onclick="confirmOrder()">Confirmar</button>
      </div>
    </div>
  </div>`;
}

function clearCart(){
  if(!cart.length)return;
  if(confirm('Deseja excluir todos os itens do carrinho?')){
    cart=[];
    render();
  }
}
function confirmOrder(){
  if(!cart.length)return;

  const reservations=[];

  const serviceCartByDate={};
  for(const item of cart){
    const prod=db.products.find(x=>x.id===item.productId);
    if(prod?.cat==='servicos'){
      serviceCartByDate[item.date]=(serviceCartByDate[item.date]||0)+Math.max(1,Number(item.qty||1));
    }
  }
  for(const [date,count] of Object.entries(serviceCartByDate)){
    const already=Math.max(serviceDailyPublishedCount(date),serviceDailyLocalConfirmedCount(date));
    if(already+count>SERVICE_DAILY_LIMIT){
      return alert(`O limite diário de ${SERVICE_DAILY_LIMIT} solicitações de serviços foi atingido para ${formatDateBR(date)}. Escolha outra data.`);
    }
  }

  for(const i of cart){
    const p=db.products.find(x=>x.id===i.productId);
    if(!p)return alert('Produto não encontrado.');

    const group=capacityGroupForProduct(p);
    const fullDay=isDailyRentalProduct(p)||isDailyUnitPackage(p);

    if(p.id==='diarista'&&Number(i.qty||1)!==1){
      return alert('A Diarista permite apenas 1 solicitação por usuário.');
    }

    if(p.cat==='servicos'&&!serviceDayHasCapacity(i.date,0)){
      return alert('O limite diário de 3 solicitações de serviços foi atingido para esta data. Escolha outra data.');
    }
    const uses=i.schedule?.length?i.schedule:[{date:i.date,period:i.period}];

    for(const use of uses){
      if(productRequiresPeriod(p)&&!use.period){
        return alert('Lamentamos mas nesta data e período não há disponibilidade, por favor selecione outra data de sua conveniência.');
      }

      const selected=use.period?bookingSlotFromPeriod(use.period):'';
      const slots=fullDay
        ?['morning','afternoon']
        :productRequiresPeriod(p)
          ?[selected]
          :['morning','afternoon'];

      for(const slot of slots){
        if(!slot||productClosedForSelection(p,use.date,slot)||(p.cat!=='servicos'&&capacityGroupSlotOccupied(use.date,slot,group))){
          return alert(fullDay
            ?'Esta diária não está mais disponível na data selecionada. Escolha outra data.'
            :'Lamentamos mas nesta data e período não há disponibilidade, por favor selecione outra data de sua conveniência.');
        }

        if(p.cat!=='servicos'&&reservations.some(r=>r.date===use.date&&r.slot===slot&&r.group===group)){
          return alert('Não é permitido mais de um item do mesmo grupo de capacidade nesta data e período.');
        }

        reservations.push({date:use.date,slot,group});
      }
    }
  }

  const order={
    id:id(),
    client:{
      email:session.email,
      name:session.name,
      roomId:session.roomId,
      roomName:room()?.name||session.roomName||''
    },
    items:structuredClone(cart),
    total:cart.reduce((a,i)=>a+i.price*i.qty,0),
    createdAt:new Date().toISOString(),
    status:'ativo'
  };

  db.orders.push(order);
  addOrderToAppCalendar(order);
  save();

  session.lastOrderId=order.id;
  cart=[];
  setSessionActivity('order');page='confirmation';

  sendConfirmationEmails(order);
  render();
}
function confirmationPage(){
  let o=db.orders.find(x=>x.id===session.lastOrderId);
  if(!o)return `<div class="card"><h2>Confirmação</h2><div class="muted">Nenhum pedido confirmado nesta sessão.</div></div>`;

  return `<div class="card">
    <div class="success"><b>Solicitação registrada.</b><br>Os e-mails e os dados de agenda foram preparados automaticamente.</div>
    <h2>Confirmação do pedido</h2>
    <p><b>Cliente:</b> ${esc(o.client.name)} • ${esc(o.client.roomName)}</p>

    <table>
      <tr><th>Serviço</th><th>Datas e períodos</th><th>Qtd.</th><th>Unit.</th><th>Total</th></tr>
      ${o.items.map(i=>`<tr>
        <td>${esc(i.name)}</td>
        <td>${i.schedule?.length
          ?i.schedule.map((u,n)=>`<div><b>${n+1}.</b> ${formatDateBR(u.date)} • ${esc(periodLabel(u.period))}</div>`).join('')
          :`${formatDateBR(i.date)}${i.period?` • ${esc(periodLabel(i.period))}`:''}`}
        </td>
        <td>${i.qty}</td>
        <td>${money(i.price)}</td>
        <td>${money(i.price*i.qty)}</td>
      </tr>`).join('')}
    </table>

    <div class="total" style="margin-top:12px">${money(o.total)}</div>
    <div class="notice">Prezado Cliente obrigado por sua solicitação. Sua solicitação está sendo revisada para disponibilidade de equipe. Caso confirmada, nossa recepção entrará em contato para o pagamento e confirmação dos serviços. Obrigado!<br><br><b>ATENÇÃO, A CONFIRMAÇÃO SÓ SE DARÁ MEDIANTE O PAGAMENTO ANTECIPADO DO PEDIDO!</b></div>
    <div class="row"><button class="btn" onclick="signout()">Sair</button></div>
  </div>`;
}

function emailBody(o,client=true){
  let lines=o.items.map((i,index)=>{
    const uses=i.schedule?.length
      ?i.schedule.map((u,n)=>`${n+1}. Data: ${formatDateBR(u.date)} | Período: ${periodLabel(u.period)}`).join('\n')
      :`Data: ${formatDateBR(i.date)}${i.period?` | Período: ${periodLabel(i.period)}`:''}`;

    return `${index+1}. ${i.name}
${uses}
Quantidade: ${i.qty}
Valor unitário: ${money(i.price)}
Valor total do item: ${money(i.qty*i.price)}`;
  }).join('\n\n');

  let msg=client?`\n\nPrezado Cliente obrigado por sua solicitação. Sua solicitação está sendo revisada para disponibilidade de equipe. Caso confirmada, nossa recepção entrará em contato para o pagamento e confirmação dos serviços. Obrigado!

ATENÇÃO, A CONFIRMAÇÃO SÓ SE DARÁ MEDIANTE O PAGAMENTO ANTECIPADO DO PEDIDO!`:'';

  return `Solicitação ${o.id}
Cliente: ${o.client.name}
Unidade: ${o.client.roomName}

${lines}

VALOR CONSOLIDADO: ${money(o.total)}${msg}`;
}



function testGoogleEmailConnection(){
  const target=(db.account.recoveryEmail||db.account.adminEmails?.[0]||'').trim();

  if(!target){
    alert('Cadastre primeiro um e-mail de recuperação ou um e-mail Admin.');
    return;
  }

  const payload={
    action:'sendOrderEmail',
    orderId:'TESTE-'+Date.now(),
    client:{
      name:'Teste APP SERVIÇOS VERSÁTIL',
      email:target,
      roomName:'Teste'
    },
    items:[{
      id:'teste',
      productId:'teste',
      name:'Teste de integração de e-mail',
      qty:1,
      price:0,
      date:today(),
      period:'09:00-11:00'
    }],
    total:0,
    createdAt:new Date().toISOString()
  };

  const button=[...document.querySelectorAll('button')]
    .find(b=>b.textContent.includes('Testar envio de e-mail'));

  if(button){
    button.disabled=true;
    button.textContent='Enviando teste...';
  }

  fetch(GOOGLE_APPS_SCRIPT_URL,{
    method:'POST',
    mode:'no-cors',
    cache:'no-store',
    headers:{'Content-Type':'text/plain;charset=UTF-8'},
    body:JSON.stringify(payload)
  }).then(()=>{
    alert(`Solicitação de teste enviada para ${target}. Verifique a caixa de entrada e a pasta de spam.`);
  }).catch(err=>{
    alert('Falha ao enviar o teste: '+err);
  }).finally(()=>{
    if(button){
      button.disabled=false;
      button.textContent='Testar envio de e-mail';
    }
  });
}
function sendConfirmationEmails(o){
  const adminRecipients=db.account.adminEmails.filter(Boolean);
  const clientRecipient=o.client.email;

  const clientEmail={
    to:[clientRecipient],
    subject:'Solicitação recebida - Serviços Versátil',
    body:emailBody(o,true)
  };

  const adminEmail={
    to:adminRecipients,
    subject:'Nova solicitação - Serviços Versátil',
    body:emailBody(o,false)
  };

  o.emailData={client:clientEmail,admin:adminEmail};
  o.emailDelivery={status:'enviando',sentAt:null,error:null};
  o.googleCalendarDelivery={status:'enviando',sentAt:null,error:null};
  save();

  localStorage.setItem('versatil_last_client_email',JSON.stringify(clientEmail));
  localStorage.setItem('versatil_last_admin_email',JSON.stringify(adminEmail));

  const payload={
    action:'sendOrderEmail',
    orderId:o.id,
    client:o.client,
    items:o.items,
    total:o.total,
    createdAt:o.createdAt
  };

  fetch(GOOGLE_APPS_SCRIPT_URL,{
    method:'POST',
    mode:'no-cors',
    cache:'no-store',
    headers:{'Content-Type':'text/plain;charset=UTF-8'},
    body:JSON.stringify(payload),
    keepalive:true
  }).then(()=>{
    const order=db.orders.find(x=>x.id===o.id);
    if(order){
      order.emailDelivery={status:'enviado',sentAt:new Date().toISOString(),error:null};
      order.googleCalendarDelivery={status:'enviado',sentAt:new Date().toISOString(),error:null};
      save();
    }
  }).catch(err=>{
    const order=db.orders.find(x=>x.id===o.id);
    if(order){
      order.emailDelivery={status:'erro',sentAt:null,error:String(err)};
      order.googleCalendarDelivery={status:'erro',sentAt:null,error:String(err)};
      save();
    }
    console.error('Falha ao enviar e-mail pelo Google Apps Script:',err);
  });
}
function buildOrderICS(o){
  let eventIndex=0;
  const events=[];

  for(const item of o.items||[]){
    const uses=item.schedule?.length?item.schedule:[{date:item.date,period:item.period||''}];

    for(const use of uses){
      let d=use.date.replaceAll('-','');
      let start='090000',end='100000';

      if(use.period){
        if(String(use.period).startsWith('06:00')){start='060000';end='120000';}
        else if(String(use.period).startsWith('09:00')){start='090000';end='110000';}
        else if(String(use.period).startsWith('13:00-15:00')){start='130000';end='150000';}
        else if(String(use.period).startsWith('13:00-19:00')){start='130000';end='190000';}
      }

      events.push(`BEGIN:VEVENT
UID:${o.id}-${eventIndex++}@versatil
DTSTART:${d}T${start}
DTEND:${d}T${end}
SUMMARY:${item.name} - ${o.client.roomName}
DESCRIPTION:${o.client.name}${use.period?' - '+periodLabel(use.period):''}
END:VEVENT`);
    }
  }

  return `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Versatil//Servicos//PT-BR
${events.join('\n')}
END:VCALENDAR`;
}
function autoPrepareCalendar(o){
  const ics=buildOrderICS(o);
  o.calendarICS=ics;
  o.calendarRecipients=[...db.account.adminEmails.filter(Boolean),o.client.email];
  save();
  try{
    const blob=new Blob([ics],{type:'text/calendar'});
    const a=document.createElement('a');
    a.href=URL.createObjectURL(blob);
    a.download=`pedido-${o.id}.ics`;
    document.body.appendChild(a);
    a.click();
    setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove();},500);
  }catch(e){
    console.warn('Não foi possível iniciar automaticamente o arquivo de agenda.',e);
  }
}

function downloadICS(oid){
  let o=db.orders.find(x=>x.id===oid);
  if(!o)return;
  let ics=buildOrderICS(o);
  let a=document.createElement('a');
  a.href=URL.createObjectURL(new Blob([ics],{type:'text/calendar'}));
  a.download=`pedido-${o.id}.ics`;
  a.click();
}

function adminPublishChangesButton(){
  return `<button class="btn primary admin-publish-repeat" onclick="publishPublicDataToCentral(true)">Publicar alterações</button>`;
}

function leisureBreadcrumb(id){
  const byId=new Map((db.leisureGuide||[]).map(n=>[n.id,n]));
  const parts=[]; let cur=byId.get(id),guard=0;
  while(cur&&guard++<20){parts.unshift(cur.name);cur=byId.get(cur.parentId)}
  return parts.join(' › ');
}
function leisureAdminParentOptions(selected='',excludeId=''){
  const forbidden=new Set();
  const walk=id=>{forbidden.add(id);leisureChildren(id).filter(n=>n.type==='group').forEach(n=>walk(n.id))};
  if(excludeId)walk(excludeId);
  return `<option value="">Nível principal</option>`+
    (db.leisureGuide||[]).filter(n=>n.type==='group'&&!forbidden.has(n.id))
      .map(n=>`<option value="${esc(n.id)}" ${n.id===selected?'selected':''}>${esc(leisureBreadcrumb(n.id))}</option>`).join('');
}
function leisureAdminRows(parentId='',depth=0){
  return leisureChildren(parentId).map(n=>`<div class="leisure-admin-node" style="--depth:${depth}">
    <div class="leisure-admin-node-main">
      <div class="leisure-admin-node-title"><span class="leisure-admin-type">${n.type==='group'?'MENU':'LOCAL'}</span><b>${esc(n.name)}</b>${n.type==='place'&&n.distance?`<span class="small muted">${esc(n.distance)}</span>`:''}</div>
      <div class="row leisure-admin-actions">
        <button class="btn small" onclick="openLeisureEditor('${n.id}')">Editar</button>
        ${n.type==='group'?`<button class="btn small" onclick="openLeisureEditor('', '${n.id}')">+ Dentro</button>`:''}
        <button class="btn red small" onclick="deleteLeisureNode('${n.id}')">Excluir</button>
      </div>
    </div>${n.type==='group'?leisureAdminRows(n.id,depth+1):''}
  </div>`).join('');
}
function leisureAdmin(){
  const total=(db.leisureGuide||[]).filter(n=>n.type==='place').length;
  return `<div class="card"><div class="row between">
    <div><h2 style="margin:0">Lazer e Conveniências</h2><p class="muted">${total} locais finais cadastrados. Edite menus, especialidades e estabelecimentos.</p></div>
    <button class="btn primary" onclick="openLeisureEditor()">+ Adicionar</button>
  </div>
  <div class="notice">Use o botão <b>Publicar alterações</b> no cabeçalho após concluir as mudanças.</div>
  <div class="leisure-admin-tree">${leisureAdminRows()}</div></div>`;
}
function openLeisureEditor(nodeId='',presetParent=''){
  document.getElementById('leisureEditorModal')?.remove();
  const old=(db.leisureGuide||[]).find(n=>n.id===nodeId)||{id:'',parentId:presetParent,type:'place',name:'',description:'',distance:'',phone:'',imageUrl:'',mapQuery:'',sort:(db.leisureGuide||[]).length+1};
  const modal=document.createElement('div');
  modal.id='leisureEditorModal'; modal.className='modal-overlay';
  modal.innerHTML=`<div class="modal-card leisure-editor-modal">
    <div class="row between"><h2 style="margin:0">${old.id?'Editar':'Adicionar'} item</h2><button class="btn" onclick="document.getElementById('leisureEditorModal')?.remove()">Fechar</button></div>
    <div class="grid" style="margin-top:14px">
      <div class="field"><label>Tipo</label><select id="lz_type" onchange="updateLeisureEditorType()"><option value="group" ${old.type==='group'?'selected':''}>Menu / Submenu</option><option value="place" ${old.type==='place'?'selected':''}>Local / Estabelecimento</option></select></div>
      <div class="field"><label>Dentro de</label><select id="lz_parent">${leisureAdminParentOptions(old.parentId,old.id)}</select></div>
      <div class="field"><label>Título / Nome</label><input id="lz_name" value="${esc(old.name)}"></div>
      <div class="field"><label>Ordem</label><input id="lz_sort" type="number" value="${Number(old.sort||1)}"></div>
    </div>
    <div id="lz_place_fields">
      <div class="field"><label>Descrição</label><textarea id="lz_description" rows="4">${esc(old.description||'')}</textarea></div>
      <div class="grid">
        <div class="field"><label>Distância do Versátil</label><input id="lz_distance" value="${esc(old.distance||'')}"></div>
        <div class="field"><label>Telefone</label><input id="lz_phone" value="${esc(old.phone||'')}"></div>
      </div>
      <div class="field"><label>Foto — URL</label><input id="lz_image" value="${esc(old.imageUrl||'')}"></div>
      <div class="field"><label>Google Maps — busca ou link</label><input id="lz_map" value="${esc(old.mapQuery||old.name||'')}"></div>
    </div>
    <div class="row between" style="margin-top:16px"><span class="small muted">Salve e depois publique pelo cabeçalho.</span><button class="btn primary" onclick="saveLeisureNode('${old.id}')">Salvar</button></div>
  </div>`;
  document.body.appendChild(modal);updateLeisureEditorType();
}
function updateLeisureEditorType(){
  const b=document.getElementById('lz_place_fields');
  if(b)b.style.display=document.getElementById('lz_type')?.value==='place'?'block':'none';
}
function saveLeisureNode(nodeId=''){
  const type=document.getElementById('lz_type')?.value||'place';
  const name=document.getElementById('lz_name')?.value.trim()||'';
  if(!name){alert('Informe o nome.');return}
  const node={id:nodeId||id(),parentId:document.getElementById('lz_parent')?.value||'',type,name,
    description:type==='place'?(document.getElementById('lz_description')?.value.trim()||''):'',
    distance:type==='place'?(document.getElementById('lz_distance')?.value.trim()||''):'',
    phone:type==='place'?(document.getElementById('lz_phone')?.value.trim()||''):'',
    imageUrl:type==='place'?(document.getElementById('lz_image')?.value.trim()||''):'',
    mapQuery:type==='place'?(document.getElementById('lz_map')?.value.trim()||name):'',
    sort:Number(document.getElementById('lz_sort')?.value||1)};
  if(!Array.isArray(db.leisureGuide))db.leisureGuide=[];
  const i=db.leisureGuide.findIndex(n=>n.id===nodeId);
  if(i>=0)db.leisureGuide[i]=node;else db.leisureGuide.push(node);
  save();document.getElementById('leisureEditorModal')?.remove();render();
}
function leisureDescendantIds(nodeId){
  const set=new Set([nodeId]);let changed=true;
  while(changed){changed=false;for(const n of db.leisureGuide||[]){if(set.has(n.parentId)&&!set.has(n.id)){set.add(n.id);changed=true}}}
  return set;
}
function deleteLeisureNode(nodeId){
  const n=(db.leisureGuide||[]).find(x=>x.id===nodeId);if(!n)return;
  const ids=leisureDescendantIds(nodeId);
  if(!confirm(`Excluir "${n.name}"${ids.size>1?` e ${ids.size-1} item(ns) dentro dele`:''}?`))return;
  db.leisureGuide=(db.leisureGuide||[]).filter(x=>!ids.has(x.id));save();render();
}




function contentAdminPage(kind){
  const cfg={
    versatil:{title:'Conheça o Versátil',data:db.versatilGuide||[]},
    starlis:{title:'Conheça a Starlis',data:db.starlisGuide||[]},
    postal:{title:'Correio Versátil',data:[db.postalConfig||{}]}
  }[kind];
  if(kind==='postal')return `<div class="card"><h2>${cfg.title}</h2><p class="muted">Edite os textos e imagens do postal. Depois use “Publicar alterações” no cabeçalho.</p>
    <div class="field"><label>Endereço</label><input id="postal_admin_address" value="${esc(db.postalConfig?.address||'')}"></div>
    <div class="field"><label>Telefone</label><input id="postal_admin_phone" value="${esc(db.postalConfig?.phone||'')}"></div>
    <div class="field"><label>Mensagem</label><textarea id="postal_admin_message" rows="5">${esc(db.postalConfig?.message||'')}</textarea></div>
    <div class="field"><label>Texto do cupom</label><input id="postal_admin_coupon" value="${esc(db.postalConfig?.couponText||'')}"></div>
    <div class="field"><label>Foto fachada</label><input id="postal_admin_facade" value="${esc(db.postalConfig?.['frontFaçade']||db.postalConfig?.frontFacade||'')}"></div>
    <div class="field"><label>Foto quarto</label><input id="postal_admin_room" value="${esc(db.postalConfig?.frontRoom||'')}"></div>
    <div class="field"><label>Foto piscina</label><input id="postal_admin_pool" value="${esc(db.postalConfig?.frontPool||'')}"></div>
    <button class="btn primary" onclick="savePostalAdminV170()">Salvar</button></div>`;
  return `<div class="card"><div class="row between"><div><h2>${cfg.title}</h2><p class="muted">Inclua, altere ou exclua itens. Depois publique pelo cabeçalho.</p></div><button class="btn primary" onclick="openContentEditorV170('${kind}')">+ Adicionar</button></div>
    <div class="content-admin-list">${cfg.data.map((x,i)=>`<div class="content-admin-row"><div><b>${esc(x.name||x.id||'Item')}</b><div class="small muted">${esc(x.description||x.type||'')}</div></div><div class="row"><button class="btn small" onclick="openContentEditorV170('${kind}',${i})">Editar</button><button class="btn red small" onclick="deleteContentV170('${kind}',${i})">Excluir</button></div></div>`).join('')}</div></div>`;
}
function openContentEditorV170(kind,index=-1){
  const arr=kind==='versatil'?(db.versatilGuide||[]):(db.starlisGuide||[]);
  const x=index>=0?arr[index]:{};
  document.getElementById('contentV170Modal')?.remove();
  const m=document.createElement('div');m.id='contentV170Modal';m.className='modal-overlay';
  m.innerHTML=`<div class="modal-card leisure-editor-modal"><div class="row between"><h2>${index>=0?'Editar':'Adicionar'} item</h2><button class="btn" onclick="document.getElementById('contentV170Modal')?.remove()">Fechar</button></div>
    <div class="field"><label>Nome</label><input id="cv_name" value="${esc(x.name||'')}"></div>
    <div class="field"><label>Descrição</label><textarea id="cv_desc" rows="4">${esc(x.description||'')}</textarea></div>
    ${kind==='starlis'?`<div class="field"><label>Imagem</label><input id="cv_image" value="${esc(x.image||'')}"></div><div class="field"><label>Busca Google Maps</label><input id="cv_map" value="${esc(x.map||'')}"></div><div class="field"><label>Link reservar</label><input id="cv_reserve" value="${esc(x.reserve||'')}"></div>`:`<div class="field"><label>Tipo</label><select id="cv_type"><option value="gallery" ${x.type==='gallery'?'selected':''}>Galeria</option><option value="text" ${x.type==='text'?'selected':''}>Texto</option></select></div>`}
    <button class="btn primary" onclick="saveContentV170('${kind}',${index})">Salvar</button></div>`;
  document.body.appendChild(m);
}
function saveContentV170(kind,index){
  const arr=kind==='versatil'?(db.versatilGuide||[]):(db.starlisGuide||[]);
  const old=index>=0?arr[index]:{};
  const obj={...old,id:old.id||id(),name:document.getElementById('cv_name')?.value.trim()||'',description:document.getElementById('cv_desc')?.value.trim()||''};
  if(kind==='starlis'){obj.image=document.getElementById('cv_image')?.value.trim()||'';obj.map=document.getElementById('cv_map')?.value.trim()||'';obj.reserve=document.getElementById('cv_reserve')?.value.trim()||''}
  else{obj.type=document.getElementById('cv_type')?.value||'text';if(!Array.isArray(obj.items))obj.items=[]}
  if(!obj.name)return alert('Informe o nome.');
  if(index>=0)arr[index]=obj;else arr.push(obj);
  if(kind==='versatil')db.versatilGuide=arr;else db.starlisGuide=arr;
  save();document.getElementById('contentV170Modal')?.remove();render();
}
function deleteContentV170(kind,index){
  const arr=kind==='versatil'?(db.versatilGuide||[]):(db.starlisGuide||[]);
  if(!confirm('Excluir este item?'))return;arr.splice(index,1);if(kind==='versatil')db.versatilGuide=arr;else db.starlisGuide=arr;save();render();
}
function savePostalAdminV170(){
  db.postalConfig={...(db.postalConfig||{}),address:document.getElementById('postal_admin_address')?.value.trim()||'',phone:document.getElementById('postal_admin_phone')?.value.trim()||'',message:document.getElementById('postal_admin_message')?.value.trim()||'',couponText:document.getElementById('postal_admin_coupon')?.value.trim()||'',frontFaçade:document.getElementById('postal_admin_facade')?.value.trim()||'',frontRoom:document.getElementById('postal_admin_room')?.value.trim()||'',frontPool:document.getElementById('postal_admin_pool')?.value.trim()||''};save();alert('Configuração salva. Use Publicar alterações no cabeçalho.');render();
}
let adminItinerariesTodayData=[];
async function loadAdminItinerariesTodayV170(){
  const box=document.getElementById('todayRoutesBox');if(box)box.innerHTML='<div class="muted">Carregando…</div>';
  try{
    const url=GOOGLE_APPS_SCRIPT_URL+'?action=adminItinerariesToday&adminPassword='+encodeURIComponent(db.account?.adminPassword||'')+'&t='+Date.now();
    const r=await fetch(url,{cache:'no-store'}),p=await r.json();adminItinerariesTodayData=Array.isArray(p.items)?p.items:[];render();
  }catch(e){if(box)box.innerHTML='<div class="danger">Não foi possível carregar os roteiros de hoje.</div>'}
}

function itineraryStatsData(){return db.itineraryStats||{total:0,today:0,month:0,byMonth:[],topPlaces:[]}}

function itinerariesAdmin(){
  return `<div class="row between"><div><h2>Roteiros de hoje</h2><p class="muted">Somente roteiros confirmados hoje, com os dados do usuário.</p></div><button class="btn" onclick="loadAdminItinerariesTodayV170()">↻ Atualizar</button></div>
  <div id="todayRoutesBox" class="card" style="margin-top:12px">
    ${adminItinerariesTodayData.length?`<div class="tablewrap"><table class="table"><thead><tr><th>Horário</th><th>Usuário</th><th>E-mail</th><th>Quarto</th><th>Locais</th></tr></thead><tbody>${adminItinerariesTodayData.map(x=>`<tr><td>${esc(x.time||'')}</td><td>${esc(x.clientName||'')}</td><td>${esc(x.clientEmail||'')}</td><td>${esc(x.roomName||'')}</td><td>${Number(x.itemCount||0)}</td></tr>`).join('')}</tbody></table></div>`:'<div class="muted">Clique em Atualizar para carregar os roteiros confirmados hoje.</div>'}
  </div>`;
}
function adminView(){let menus=[
  ['dashboard','Visão geral'],
  ['rooms','Quartos/Apartamentos'],
  ['categories','Categorias'],
  ['products','Produtos/Preços'],
  ['leisure','Lazer e Conveniência'],
  ['versatilContent','Conheça o Versátil'],
  ['starlisContent','Conheça a Starlis'],
  ['postalContent','Correio Versátil'],
  ['itineraries','Roteiros'],
  ['calendar','Calendário'],
  ['orders','Pedidos'],
  ['todo','Pedidos a executar'],
  ['reports','Relatórios'],
  ['account','Conta']
];return `<div class="admin-menu">${menus.map(([k,v])=>`<button class="${adminPage===k?'active':''}" onclick="adminPage='${k}';render()">${v}</button>`).join('')}</div>${adminPageContent()}`}

function adminPageContent(){
  return adminPage==='dashboard'?dashboard():
         adminPage==='rooms'?roomsAdmin():
         adminPage==='categories'?categoriesAdmin():
         adminPage==='products'?productsAdmin():
         adminPage==='leisure'?leisureAdmin():
         adminPage==='versatilContent'?contentAdminPage('versatil'):
         adminPage==='starlisContent'?contentAdminPage('starlis'):
         adminPage==='postalContent'?contentAdminPage('postal'):
         adminPage==='itineraries'?itinerariesAdmin():
         adminPage==='calendar'?calendarAdmin():
         adminPage==='orders'?ordersAdmin():
         adminPage==='todo'?ordersToExecuteAdmin():
         adminPage==='reports'?reportsAdmin():
         accountAdmin();
}
function dashboard(){
  let active=db.orders.filter(o=>o.status==='ativo'),total=active.reduce((a,o)=>a+o.total,0);
  return `<div class="grid"><div class="card"><div class="muted">Pedidos ativos</div><div class="kpi">${active.length}</div></div><div class="card"><div class="muted">Vendas consolidadas</div><div class="kpi">${money(total)}</div></div><div class="card"><div class="muted">Unidades cadastradas</div><div class="kpi">${db.rooms.length}</div></div><div class="card"><div class="muted">Produtos</div><div class="kpi">${db.products.length}</div></div></div>
  <div class="card" style="margin-top:14px"><div class="row between"><div><h3 style="margin:0">Base pública</h3><p class="muted">Produtos, categorias, unidades e disponibilidade compartilhados entre todos os usuários.</p></div><div class="row"><button class="btn" onclick="loadCentralData()">↻ Baixar base pública</button><button class="btn primary" onclick="publishPublicDataToCentral(true)">Publicar alterações</button></div></div>${centralStatusHtml()}</div>`;
}
function focusNewRoomNumber(){
  setTimeout(()=>{
    const el=document.getElementById('new_room_number');
    if(el){
      el.focus();
      el.select();
    }
  },0);
}
function roomsAdmin(){
  focusNewRoomNumber();
  return `<div class="card">
    <h2>Quartos e apartamentos</h2>
    <p class="muted">Informe primeiro a identificação da unidade, depois selecione o tipo e confirme.</p>
    <div class="unit-form unit-form-v18">
      <div class="field">
        <label>Número / Identificação</label>
        <input id="new_room_number" placeholder="Ex.: 101A">
      </div>
      <div class="field">
        <label>Tipo</label>
        <select id="new_room_type">
          <option value="quarto">Quarto</option>
          <option value="apartamento">Apartamento</option>
        </select>
      </div>
      <button class="btn primary" onclick="addRoom()">Confirmar cadastro</button>
    </div>
    <table>
      <tr><th>Número / Identificação</th><th>Tipo</th><th>Confirmação</th><th>Excluir</th></tr>
      ${db.rooms.map(r=>`<tr>
        <td><input id="room_number_${r.id}" value="${esc(roomNumber(r))}"></td>
        <td>
          <select id="room_type_${r.id}">
            <option value="quarto" ${r.type==='quarto'?'selected':''}>Quarto</option>
            <option value="apartamento" ${r.type==='apartamento'?'selected':''}>Apartamento</option>
          </select>
        </td>
        <td><button class="btn green" onclick="editRoom('${r.id}')">Confirmar alteração</button></td>
        <td><button class="btn red" onclick="deleteRoom('${r.id}')">Excluir</button></td>
      </tr>`).join('')}
    </table>
  </div>`;
}
function addRoom(){
  const type=document.getElementById('new_room_type')?.value;
  const number=(document.getElementById('new_room_number')?.value||'').trim();

  if(!['quarto','apartamento'].includes(type)){
    alert('Selecione o tipo da unidade.');
    return;
  }
  if(!number){
    alert('Informe a identificação da unidade.');
    return;
  }
  if(!/^[A-Za-zÀ-ÿ0-9._/-]+(?:\s+[A-Za-zÀ-ÿ0-9._/-]+)*$/.test(number)){
    alert('Use somente letras, números, espaço, ponto, hífen, barra ou sublinhado.');
    return;
  }
  if(db.rooms.some(r=>normalizeUnit(roomNumber(r))===normalizeUnit(number))){
    alert('Esta unidade já está cadastrada.');
    return;
  }

  db.rooms.push({
    id:id(),
    type,
    number,
    name:`${type==='apartamento'?'Apartamento':'Quarto'} ${number}`
  });
  save();
  render();
}

function editRoom(rid){
  const r=db.rooms.find(x=>x.id===rid);
  if(!r)return;

  const type=document.getElementById('room_type_'+rid)?.value;
  const number=(document.getElementById('room_number_'+rid)?.value||'').trim();

  if(!['quarto','apartamento'].includes(type)){
    alert('Selecione o tipo da unidade.');
    return;
  }
  if(!number){
    alert('Informe a identificação da unidade.');
    return;
  }
  if(!/^[A-Za-zÀ-ÿ0-9._/-]+(?:\s+[A-Za-zÀ-ÿ0-9._/-]+)*$/.test(number)){
    alert('Use somente letras, números, espaço, ponto, hífen, barra ou sublinhado.');
    return;
  }
  if(db.rooms.some(x=>x.id!==rid && normalizeUnit(roomNumber(x))===normalizeUnit(number))){
    alert('Esta unidade já está cadastrada.');
    return;
  }

  r.type=type;
  r.number=number;
  r.name=`${type==='apartamento'?'Apartamento':'Quarto'} ${number}`;
  saveAndPublishPublicData();
  render();
}
function deleteRoom(rid){if(confirm('Excluir unidade?')){db.rooms=db.rooms.filter(r=>r.id!==rid);saveAndPublishPublicData();render()}}
function categoriesAdmin(){return `<div class="card"><div class="row between"><h2>Categorias</h2><button class="btn primary" onclick="addCategory()">+ Categoria</button></div><table><tr><th>Ícone</th><th>Nome</th><th>Descritivo</th><th></th></tr>${db.categories.map(c=>`<tr><td>${c.icon}</td><td>${esc(c.name)}</td><td>${esc(c.description)}</td><td><button class="btn" onclick="editCategory('${c.id}')">Editar</button> <button class="btn red" onclick="deleteCategory('${c.id}')">Excluir</button></td></tr>`).join('')}</table></div>`}
function addCategory(){let name=prompt('Nome da categoria:');if(!name)return;db.categories.push({id:id(),name,icon:prompt('Ícone/emoji:','📌')||'📌',description:prompt('Descritivo:','')||''});saveAndPublishPublicData();render()}
function editCategory(cid){let c=db.categories.find(x=>x.id===cid);if(!c)return;c.name=prompt('Nome:',c.name)||c.name;c.icon=prompt('Ícone:',c.icon)||c.icon;c.description=prompt('Descritivo:',c.description)||c.description;saveAndPublishPublicData();render()}
function deleteCategory(cid){if(db.products.some(p=>p.cat===cid))return alert('Existem produtos vinculados.');if(confirm('Excluir categoria?')){db.categories=db.categories.filter(c=>c.id!==cid);saveAndPublishPublicData();render()}}

function productsAdmin(){
  const cats=[...db.categories];
  const filtered=productAdminCategoryFilter==='all'
    ?db.products
    :db.products.filter(p=>p.cat===productAdminCategoryFilter);

  return `<div class="card">
    <div class="row between">
      <div>
        <h2>Produtos, preços e descritivos</h2>
        <p class="muted">Clique diretamente no título de qualquer produto para alterá-lo.</p>
      </div>
      <button class="btn primary" onclick="addProductAdmin()">+ Produto</button>
    </div>

    <div class="product-admin-filter">
      <div class="field">
        <label>Filtrar por categoria</label>
        <select onchange="productAdminCategoryFilter=this.value;render()">
          <option value="all" ${productAdminCategoryFilter==='all'?'selected':''}>Todas as categorias</option>
          ${cats.map(c=>`<option value="${c.id}" ${productAdminCategoryFilter===c.id?'selected':''}>${esc(c.name)}</option>`).join('')}
        </select>
      </div>
      <div class="muted">${filtered.length} produto(s) exibido(s)</div>
    </div>

    <table>
      <tr><th>Produto</th><th>Categoria</th><th>Quarto</th><th>Apartamento</th><th></th></tr>
      ${filtered.map(p=>`<tr>
        <td>
          ${p.icon}
          <span class="product-title-inline" title="Clique para editar o título" onclick="editProductTitleInline('${p.id}',this)">${esc(p.name)}</span>
          <br><span class="small muted">${esc(p.desc)}</span>
        </td>
        <td>${esc(db.categories.find(c=>c.id===p.cat)?.name||'')}</td>
        <td>${money(p.q)}</td>
        <td>${money(p.a)}</td>
        <td><button class="btn" onclick="editProductAdmin('${p.id}')">Editar detalhes</button> <button class="btn red" onclick="deleteProductAdmin('${p.id}')">Excluir</button></td>
      </tr>`).join('')}
    </table>
  </div>`;
}

function editProductTitleInline(pid,el){
  const p=db.products.find(x=>x.id===pid);
  if(!p||!el)return;

  const original=p.name;
  el.contentEditable='true';
  el.classList.add('editing');
  el.focus();

  try{
    const range=document.createRange();
    range.selectNodeContents(el);
    const sel=window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  }catch(e){}

  const finish=(saveChange=true)=>{
    el.contentEditable='false';
    el.classList.remove('editing');
    const value=String(el.textContent||'').trim();
    if(saveChange&&value){
      p.name=value;
      saveAndPublishPublicData();
      el.textContent=value;
    }else{
      el.textContent=original;
    }
  };

  el.onkeydown=(ev)=>{
    if(ev.key==='Enter'){
      ev.preventDefault();
      el.blur();
    }else if(ev.key==='Escape'){
      ev.preventDefault();
      finish(false);
    }
  };
  el.onblur=()=>finish(true);
}

function preserveCafeDefaultV149(){
  const cafe=db.products.find(p=>p.id==='cafe');
  if(!cafe)return;
  const snapshot={
    name:cafe.name,
    desc:cafe.desc,
    q:cafe.q,
    a:cafe.a,
    icon:cafe.icon
  };
  localStorage.setItem('versatil_cafe_default',JSON.stringify(snapshot));
}

function addProductAdmin(){let name=prompt('Nome:');if(!name)return;let cat=prompt('ID da categoria:\n'+db.categories.map(c=>`${c.id} = ${c.name}`).join('\n'));if(!db.categories.some(c=>c.id===cat))return alert('Categoria inválida.');db.products.push({id:id(),cat,name,icon:prompt('Ícone/emoji:','🧰')||'🧰',desc:prompt('Descritivo:','')||'',q:Number(prompt('Preço quarto:','0')),a:Number(prompt('Preço apartamento:','0'))});save();render()}

function editProductAdmin(pid){
  const p=db.products.find(x=>x.id===pid);
  if(!p)return;

  p.name=prompt('Nome:',p.name)||p.name;
  p.desc=prompt('Descritivo:',p.desc)??p.desc;

  const q=Number(prompt('Preço para quarto:',p.q));
  const a=Number(prompt('Preço para apartamento:',p.a));
  if(Number.isFinite(q))p.q=q;
  if(Number.isFinite(a))p.a=a;

  p.icon=prompt('Ícone:',p.icon)||p.icon;

  saveAndPublishPublicData();
  if(p.id==='cafe')preserveCafeDefaultV149();
  render();
}
function deleteProductAdmin(pid){if(confirm('Excluir produto?')){db.products=db.products.filter(p=>p.id!==pid);saveAndPublishPublicData();render()}}





function tomorrowISO(){
  const d=new Date();d.setHours(12,0,0,0);d.setDate(d.getDate()+1);
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}
function isFutureDateISO(date){
  if(!date)return false;
  return new Date(date+'T12:00:00')>=new Date(tomorrowISO()+'T12:00:00');
}


function availabilityRulesSummary(){
  const daily=['churras-serv','churras-sem','sala-dia-serv','sala-dia-sem','moto-dia']
    .map(id=>db.products.find(p=>p.id===id)?.name)
    .filter(Boolean);

  const dailyPackages=db.products
    .filter(p=>p.cat==='pacotes'&&isDailyUnitPackage(p))
    .map(p=>p.name);

  alert(
    'REGRAS ATIVAS DE DISPONIBILIDADE\n\n'+
    'Locações diárias (ocupam o dia inteiro):\n• '+daily.join('\n• ')+
    '\n\nPacotes com utilização diária:\n• '+dailyPackages.join('\n• ')+
    '\n\nQualquer fechamento ou ocupação em Manhã ou Tarde torna a diária inteira indisponível.'
  );
}

function calendarAdmin(){
  const months=['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
  const currentYear=new Date().getFullYear(),years=Array.from({length:9},(_,i)=>currentYear-2+i);
  if(!years.includes(calendarViewYear))years.push(calendarViewYear);years.sort((a,b)=>a-b);
  const days=new Date(calendarViewYear,calendarViewMonth+1,0).getDate(),firstDay=new Date(calendarViewYear,calendarViewMonth,1).getDay();
  const minDate=tomorrowISO();
  return `<div class="card">
    <div class="row between"><div><h2>Calendário</h2><p class="muted">Fechamentos somente em datas futuras.</p></div><div class="row"><button class="btn" onclick="refreshCalendarAdmin()">↻ Atualizar</button><button class="btn" onclick="availabilityRulesSummary()">Verificar regras</button><button class="btn" onclick="syncAllAvailabilityToGoogle()">Sincronizar Google Calendar</button><button class="btn" onclick="retryGoogleAvailabilityQueue()">Reenviar pendências</button><button class="btn primary" onclick="openAvailabilityBatchModal()">Gerenciar datas / lote</button></div></div>
    <div class="calendar-batch-filter">
      <div class="field"><label>Data inicial</label><input id="calendar_filter_start" type="date" min="${minDate}" value="${minDate}"></div>
      <div class="field"><label>Data final</label><input id="calendar_filter_end" type="date" min="${minDate}" value="${minDate}"></div>
      <div class="field"><label>Período</label><select id="calendar_filter_slot"><option value="morning">Manhã</option><option value="afternoon">Tarde</option><option value="both">Manhã e tarde</option></select></div>
      <button class="btn primary" onclick="openAvailabilityBatchModalFromFilters()">Selecionar itens</button>
    </div>
    <div class="calendar-selectors"><div class="field"><label>Mês</label><select onchange="calendarViewMonth=Number(this.value);render()">${months.map((n,i)=>`<option value="${i}" ${calendarViewMonth===i?'selected':''}>${n}</option>`).join('')}</select></div><div class="field"><label>Ano</label><select onchange="calendarViewYear=Number(this.value);render()">${years.map(y=>`<option value="${y}" ${calendarViewYear===y?'selected':''}>${y}</option>`).join('')}</select></div></div>
    <div class="calendar-legend"><span><i class="legend-dot open"></i> Aberto</span><span><i class="legend-dot partial"></i> Parcial</span><span><i class="legend-dot closed"></i> Fechado</span><span><i class="legend-dot past"></i> Não editável</span></div>
    <div class="calendar-weekdays">${['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'].map(x=>`<div>${x}</div>`).join('')}</div>
    <div class="calendar-period-grid">
      ${Array.from({length:firstDay},()=>`<div class="calendar-empty"></div>`).join('')}
      ${Array.from({length:days},(_,i)=>{
        const day=i+1,date=`${calendarViewYear}-${String(calendarViewMonth+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`,editable=isFutureDateISO(date);
        const entries=calendarEntriesForDate(date),morning=entries.filter(e=>normalizedEntrySlots(e).includes('morning')),afternoon=entries.filter(e=>normalizedEntrySlots(e).includes('afternoon'));
        const renderEntries=list=>list.length?`<div class="calendar-orders">${list.map(e=>{const o=db.orders.find(x=>x.id===e.orderId),c=db.categories.find(x=>x.id===calendarEntryCategory(e));return o?`<button class="calendar-order-marker" onclick="openCalendarOrder('${o.id}')"><b>${esc(c?.name||'Categoria')}</b><span>${esc(o.client.roomName)} • ${esc(e.name)}</span></button>`:''}).join('')}</div>`:`<div class="calendar-free">Sem pedidos</div>`;
        const b=(slot,label)=>editable?`<button class="period-btn ${slotClosureStatus(date,slot)}" onclick="openAvailabilityModal('${date}','${slot}')">${label}<br><span>${slotClosureSummary(date,slot)}</span></button>`:`<button class="period-btn past" disabled>${label}<br><span>Não editável</span></button>`;
        return `<div class="calendar-day-card ${editable?'':'past-day'}"><div class="calendar-day-number">${day}</div><div class="calendar-slot-block">${b('morning','Manhã')}${renderEntries(morning)}</div><div class="calendar-slot-block">${b('afternoon','Tarde')}${renderEntries(afternoon)}</div></div>`;
      }).join('')}
    </div>
  </div>`;
}

function refreshCalendarAdmin(){
  ensureCalendarOrders();ensureCalendarData();save();render();
  setTimeout(()=>alert('Calendário atualizado. Pedidos e disponibilidades foram recalculados.'),30);
}
function dateRange(start,end){
  const out=[]; if(!start||!end)return out;
  let a=new Date(start+'T12:00:00'),b=new Date(end+'T12:00:00');
  if(a>b){const t=a;a=b;b=t}
  while(a<=b){out.push(`${a.getFullYear()}-${String(a.getMonth()+1).padStart(2,'0')}-${String(a.getDate()).padStart(2,'0')}`);a.setDate(a.getDate()+1)}
  return out;
}

function availabilityScopeRows(){
  return db.categories.map(cat=>`<div class="availability-category-group">
    <label class="availability-category-title">
      <input type="checkbox" class="availability-category-check" value="${cat.id}">
      ${cat.icon||''} ${esc(cat.name)}
    </label>
    <div class="availability-products">
      ${db.products.filter(p=>p.cat===cat.id).map(p=>p.id==='cafe'
        ?`<label class="availability-exempt"><input type="checkbox" disabled> ${p.icon||''} ${esc(p.name)} <small>— não fecha pelo calendário</small></label>`
        :`<label><input type="checkbox" class="availability-product-check" value="${p.id}"> ${p.icon||''} ${esc(p.name)}</label>`
      ).join('')}
    </div>
  </div>`).join('');
}
function openAvailabilityModal(date,slot){
  const closures=closuresForSlot(date,slot);
  if(closures.length){
    openReopenAvailabilityModal(date,slot,closures);
    return;
  }
  openAvailabilityManager({startDate:date,endDate:date,slot});
}

function openReopenAvailabilityModal(date,slot,closures){
  document.getElementById('availabilityModal')?.remove();

  const modal=document.createElement('div');
  modal.id='availabilityModal';
  modal.className='modal-overlay';

  modal.innerHTML=`<div class="modal-card availability-modal-card">
    <div class="row between">
      <div>
        <h2 style="margin:0">Disponibilidade fechada</h2>
        <p class="muted">${formatDateBR(date)} • ${slotLabel(slot)}. Selecione somente os bloqueios que deseja reabrir.</p>
      </div>
      <button class="btn" onclick="closeAvailabilityModal()">Fechar</button>
    </div>

    <div class="availability-reopen-list">
      ${closures.map(c=>`<label class="availability-reopen-item">
        <input type="checkbox" class="availability-reopen-check" value="${esc(c.id)}">
        <span>
          <b>${esc(c.scopeLabel||scopeLabel(c.scopeType,c.scopeId))}</b>
          <small>${c.scopeType==='category'?'Categoria':c.scopeType==='product'?'Produto':'Todos os itens'}</small>
        </span>
      </label>`).join('')}
    </div>

    <div class="row between" style="margin-top:14px">
      <button class="btn" onclick="document.querySelectorAll('.availability-reopen-check').forEach(x=>x.checked=true)">Selecionar tudo</button>
      <button class="btn green" onclick="reopenSelectedClosures('${date}','${slot}')">Abrir selecionados</button>
    </div>
  </div>`;

  document.body.appendChild(modal);
}

function reopenSelectedClosures(date,slot){
  const ids=[...document.querySelectorAll('.availability-reopen-check:checked')].map(x=>x.value);
  if(!ids.length)return alert('Selecione ao menos um item para reabrir.');

  const removed=db.availabilityClosures.filter(c=>ids.includes(c.id));
  db.availabilityClosures=db.availabilityClosures.filter(c=>!ids.includes(c.id));

  saveAndPublishPublicData();
  syncAvailabilityToGoogle('open',removed);
  closeAvailabilityModal();
  render();

  alert(`${removed.length} bloqueio(s) reaberto(s). A atualização do Google Calendar foi solicitada.`);
}


function openAvailabilityBatchModal(){
  const t=tomorrowISO();openAvailabilityManager({startDate:t,endDate:t,slot:'morning'});
}

function openAvailabilityBatchModalFromFilters(){
  const t=tomorrowISO(),startDate=document.getElementById('calendar_filter_start')?.value||t,endDate=document.getElementById('calendar_filter_end')?.value||t,slot=document.getElementById('calendar_filter_slot')?.value||'morning';
  if(!isFutureDateISO(startDate)||!isFutureDateISO(endDate))return alert('Somente datas futuras podem ser alteradas.');
  openAvailabilityManager({startDate,endDate,slot});
}
function openAvailabilityManager({startDate,endDate,slot}){
  document.getElementById('availabilityModal')?.remove();
  const modal=document.createElement('div');
  modal.id='availabilityModal'; modal.className='modal-overlay';
  modal.innerHTML=`<div class="modal-card availability-modal-card">
    <div class="row between"><div><h2 style="margin:0">Gerenciar disponibilidade</h2><p class="muted">Feche ou abra somente os itens desejados. As alterações também serão enviadas ao Google Calendar.</p></div><button class="btn" onclick="closeAvailabilityModal()">Fechar</button></div>
    <div class="availability-manager-grid">
      <div class="field"><label>Data inicial</label><input id="avail_start" type="date" min="${tomorrowISO()}" value="${startDate}"></div>
      <div class="field"><label>Data final</label><input id="avail_end" type="date" min="${tomorrowISO()}" value="${endDate}"></div>
      <div class="field"><label>Período</label><select id="avail_slot"><option value="morning" ${slot==='morning'?'selected':''}>Manhã</option><option value="afternoon" ${slot==='afternoon'?'selected':''}>Tarde</option><option value="both" ${slot==='both'?'selected':''}>Manhã e tarde</option></select></div>
      <div class="field"><label>Ação</label><select id="avail_action"><option value="close">Fechar disponibilidade</option><option value="open">Abrir disponibilidade</option></select></div>
    </div>
    <div class="availability-all-row"><label><input id="avail_all" type="checkbox" onchange="toggleAvailabilityAll(this.checked)"> <b>Todos os itens</b></label></div>
    <div class="availability-scope-list">${availabilityScopeRows()}</div>
    <div class="row between" style="margin-top:14px"><span class="muted">Selecione categorias inteiras, produtos específicos ou todos os itens.</span><button class="btn primary" onclick="applyAvailabilityChanges()">Aplicar alterações</button></div>
  </div>`;
  document.body.appendChild(modal);
}
function toggleAvailabilityAll(checked){
  document.querySelectorAll('.availability-category-check,.availability-product-check').forEach(el=>{el.disabled=checked;if(checked)el.checked=false});
}
function closeAvailabilityModal(){document.getElementById('availabilityModal')?.remove()}
function scopeLabel(type,id){
  if(type==='all')return 'Todos os itens';
  if(type==='category')return db.categories.find(c=>c.id===id)?.name||id;
  return db.products.find(p=>p.id===id)?.name||id;
}
function calendarTimesForScope(slot,scopeType,scopeId){
  let mode='rental';
  if(scopeType==='category'&&(scopeId==='servicos'||scopeId==='enxoval'))mode='service';
  if(scopeType==='product')mode=productPeriodMode(db.products.find(p=>p.id===scopeId));
  if(mode==='service')return slot==='morning'?{start:'09:00',end:'11:00'}:{start:'13:00',end:'15:00'};
  return slot==='morning'?{start:'06:00',end:'12:00'}:{start:'13:00',end:'19:00'};
}

function googleAvailabilityPayload(operation,closures){
  return {
    action:'setAvailability',
    operation,
    closures,
    clientVersion:'1.49',
    sentAt:new Date().toISOString()
  };
}

function queueGoogleAvailabilitySync(operation,closures){
  const queue=JSON.parse(localStorage.getItem('versatil_google_sync_queue')||'[]');
  queue.push({
    id:'sync_'+Date.now()+'_'+Math.random().toString(36).slice(2),
    operation,
    closures,
    createdAt:new Date().toISOString()
  });
  localStorage.setItem('versatil_google_sync_queue',JSON.stringify(queue.slice(-50)));
}

function clearGoogleAvailabilityQueue(){
  localStorage.removeItem('versatil_google_sync_queue');
}

function syncAllAvailabilityToGoogle(){
  const closures=structuredClone(db.availabilityClosures||[]);
  if(!closures.length){
    alert('Não há fechamentos atuais para sincronizar com o Google Calendar.');
    return;
  }

  queueGoogleAvailabilitySync('close',closures);

  fetch(GOOGLE_APPS_SCRIPT_URL,{
    method:'POST',
    mode:'no-cors',
    cache:'no-store',
    body:JSON.stringify(googleAvailabilityPayload('close',closures)),
    keepalive:true
  }).then(()=>{
    localStorage.setItem('versatil_last_google_sync_attempt',new Date().toISOString());
    alert(`${closures.length} fechamento(s) reenviado(s) ao Google Calendar. Verifique a agenda em alguns segundos.`);
  }).catch(err=>{
    console.error('Falha ao reenviar fechamentos ao Google Calendar:',err);
    alert('Não foi possível solicitar a sincronização. O envio ficou registrado para nova tentativa.');
  });
}

function retryGoogleAvailabilityQueue(){
  const queue=JSON.parse(localStorage.getItem('versatil_google_sync_queue')||'[]');
  if(!queue.length){
    alert('Não há sincronizações pendentes.');
    return;
  }

  Promise.all(queue.map(item=>
    fetch(GOOGLE_APPS_SCRIPT_URL,{
      method:'POST',
      mode:'no-cors',
      cache:'no-store',
      body:JSON.stringify(googleAvailabilityPayload(item.operation,item.closures)),
      keepalive:true
    })
  )).then(()=>{
    clearGoogleAvailabilityQueue();
    localStorage.setItem('versatil_last_google_sync_attempt',new Date().toISOString());
    alert('Sincronizações pendentes foram reenviadas ao Google Calendar.');
  }).catch(err=>{
    console.error(err);
    alert('Ainda há sincronizações pendentes. Tente novamente.');
  });
}



function syncAvailabilityToGoogle(operation,closures){
  if(!closures?.length)return;
  queueGoogleAvailabilitySync(operation,closures);
  const url=GOOGLE_APPS_SCRIPT_URL+'?v=137&t='+Date.now();
  fetch(url,{
    method:'POST',
    mode:'no-cors',
    cache:'no-store',
    body:JSON.stringify(googleAvailabilityPayload(operation,closures)),
    keepalive:true
  }).then(()=>localStorage.setItem('versatil_last_google_sync_attempt',new Date().toISOString()))
    .catch(err=>console.error('Falha ao sincronizar disponibilidade com Google Calendar:',err));
}
function applyAvailabilityChanges(){
  const start=document.getElementById('avail_start')?.value||'',end=document.getElementById('avail_end')?.value||start;
  const slotValue=document.getElementById('avail_slot')?.value||'morning',action=document.getElementById('avail_action')?.value||'close';
  const all=document.getElementById('avail_all')?.checked;
  const categories=[...document.querySelectorAll('.availability-category-check:checked')].map(x=>x.value);
  const products=[...document.querySelectorAll('.availability-product-check:checked')].map(x=>x.value);
  if(!start||!end)return alert('Selecione a data inicial e final.');
  if(!isFutureDateISO(start)||!isFutureDateISO(end))return alert('Somente datas futuras podem ser fechadas ou reabertas.');
  if(!all&&!categories.length&&!products.length)return alert('Selecione ao menos uma categoria, produto ou Todos os itens.');
  const scopes=all?[{scopeType:'all',scopeId:'all'}]:[...categories.map(scopeId=>({scopeType:'category',scopeId})),...products.map(scopeId=>({scopeType:'product',scopeId}))];
  const slots=slotValue==='both'?['morning','afternoon']:[slotValue],dates=dateRange(start,end),changed=[];
  for(const date of dates)for(const slot of slots)for(const scope of scopes){
    if(action==='close'){
      const cid=availabilityClosureId(date,slot,scope.scopeType,scope.scopeId);
      if(db.availabilityClosures.some(c=>c.id===cid))continue;
      const times=calendarTimesForScope(slot,scope.scopeType,scope.scopeId);
      const c={id:cid,date,slot,scopeType:scope.scopeType,scopeId:scope.scopeId,scopeLabel:scopeLabel(scope.scopeType,scope.scopeId),periodLabel:slotLabel(slot),calendarStart:times.start,calendarEnd:times.end,createdAt:new Date().toISOString()};
      db.availabilityClosures.push(c);changed.push(c);
    }else{
      const removed=scope.scopeType==='all'
        ?db.availabilityClosures.filter(c=>c.date===date&&c.slot===slot)
        :db.availabilityClosures.filter(c=>c.date===date&&c.slot===slot&&c.scopeType===scope.scopeType&&c.scopeId===scope.scopeId);
      db.availabilityClosures=db.availabilityClosures.filter(c=>!removed.some(r=>r.id===c.id));
      changed.push(...removed);
    }
  }
  saveAndPublishPublicData(); if(changed.length)syncAvailabilityToGoogle(action,changed); closeAvailabilityModal(); render();
  alert(changed.length?`${changed.length} alteração(ões) aplicada(s). O envio ao Google Calendar foi solicitado. Se não aparecer na agenda, use “Sincronizar Google Calendar”.`:'Nenhuma alteração foi necessária.');
}
function togglePeriod(date,slot){openAvailabilityModal(date,slot)}
function toggleDate(date){openAvailabilityManager({startDate:date,endDate:date,slot:'both'})}

function orderUsesForDate(order,date){
  const rows=[];

  for(const item of order.items||[]){
    const uses=item.schedule?.length
      ?item.schedule
      :[{date:item.date,period:item.period||''}];

    uses.forEach((use,useIndex)=>{
      if(use.date!==date)return;
      rows.push({
        orderId:order.id,
        createdAt:order.createdAt,
        client:order.client,
        item,
        use,
        useIndex
      });
    });
  }

  return rows;
}


const PDF_LOGO_DATA='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAgACAADASIAAhEBAxEB/8QAHQABAAEFAQEBAAAAAAAAAAAAAAkBBAYHCAUCA//EAF0QAQAAAwQCCwwGBgkCBAUCBwABAgMEBQYHCFYRGDE3dHWSlLGy0RIUFyE0NlRVcXOTsxMWNYGR0iJBUVdhchUZMjNSU5WhwUKDI0Ph4wkkYoKiw0QmJ2NkwkWj/8QAHAEBAAEFAQEAAAAAAAAAAAAAAAcBBAUGCAID/8QASBEBAAEBAwUMCAUDBAICAgMBAAECAwQFBhFysdESFhcxMzVRUlNxkaEHEyEyNFSSwRQVIkGBYaLhQoKy0mLwI8JD4iRE8XP/2gAMAwEAAhEDEQA/AMbt9vtvfteHfVX+8m/6o/tfh3/bfSqvKiXh5bX95N0rdBMzOd1fTTTuY9i47/tvpVXlRO/7b6VV5UVuKZ5etzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVE7/tvpVXlRW4Z5NzT0Ljv+2+lVeVF6GHrdbI35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0r8Y2JLdtNkfrpQ5ETbTZH66UORFGkG/K+dSnz2nBrhnaV+MbElu2myP10ociJtpsj9dKHIijSDflfOpT57Tg1wztK/GNiS3bTZH66UORE202R+ulDkRRpBvyvnUp89pwa4Z2lfjGxJbtpsj9dKHIibabI/XShyIo0g35XzqU+e04NcM7SvxjYkt202R+ulDkRNtNkfrpQ5EUaQb8r51KfPacGuGdpX4xsSW7abI/XShyIm2myP10ociKNIN+V86lPntODXDO0r8Y2JLdtNkfrpQ5ETbTZH66UORFGkG/K+dSnz2nBrhnaV+MbElu2myP10ociJtpsj9dKHIijSDflfOpT57Tg1wztK/GNiS3bTZH66UORE202R+ulDkRRpBvyvnUp89pwa4Z2lfjGxJbtpsj9dKHIibabI/XShyIo0g35XzqU+e04NcM7SvxjYkt202R+ulDkRNtNkfrpQ5EUaQb8r51KfPacGuGdpX4xsSW7abI/XShyIm2myP10ociKNIN+V86lPntODXDO0r8Y2JLdtNkfrpQ5ETbTZH66UORFGkG/K+dSnz2nBrhnaV+MbElu2myP10ociJtpsj9dKHIijSDflfOpT57Tg1wztK/GNiS3bTZH66UORE202R+ulDkRRpBvyvnUp89pwa4Z2lfjGxJbtpsj9dKHIibabI/XShyIo0g35XzqU+e04NcM7SvxjYkt202R+ulDkRNtNkfrpQ5EUaQb8r51KfPacGuGdpX4xsSW7abI/XShyIm2myP10ociKNIN+V86lPntODXDO0r8Y2JLdtNkfrpQ5ETbTZH66UORFGkG/K+dSnz2nBrhnaV+MbElu2myP10ociJtpsj9dKHIijSDflfOpT57Tg1wztK/GNiS3bTZH66UORE202R+ulDkRRpBvyvnUp89pwa4Z2lfjGxJbtpsj9dKHIibabI/XShyIo0g35XzqU+e04NcM7SvxjYkt202R+ulDkRNtNkfrpQ5EUaQb8r51KfPacGuGdpX4xsSW7abI/XShyIm2myP10ociKNIN+V86lPntODXDO0r8Y2JLdtNkfrpQ5ETbTZH66UORFGkG/K+dSnz2nBrhnaV+MbElu2myP10ociJtpsj9dKHIijSDflfOpT57Tg1wztK/GNiS3bTZH66UORE202R+ulDkRRpBvyvnUp89pwa4Z2lfjGxJbtpsj9dKHIibabI/XShyIo0g35XzqU+e04NcM7SvxjYkt202R+ulDkRNtNkfrpQ5EUaQb8r51KfPacGuGdpX4xsSW7abI/XShyIm2myP10ociKNIN+V86lPntODXDO0r8Y2JLdtNkfrpQ5ETbTZH66UORFGkG/K+dSnz2nBrhnaV+MbElu2myP10ociJtpsj9dKHIijSDflfOpT57Tg1wztK/GNiS3bTZH66UORE202R+ulDkRRpBvyvnUp89pwa4Z2lfjGxJbtpsj9dKHIibabI/XShyIo0g35XzqU+e04NcM7SvxjYkt202R+ulDkRNtNkfrpQ5EUaQb8r51KfPacGuGdpX4xsSW7abI/XShyIm2myP10ociKNIN+V86lPntODXDO0r8Y2JLdtNkfrpQ5ETbTZH66UORFGkG/K+dSnz2nBrhnaV+MbElu2myP10ociJtpsj9dKHIijSDflfOpT57Tg1wztK/GNiS3bTZH66UORE202R+ulDkRRpBvyvnUp89pwa4Z2lfjGxJbtpsj9dKHIibabI/XShyIo0g35XzqU+e04NcM7SvxjYkt202R+ulDkRNtNkfrpQ5EUaQb8r51KfPacGuGdpX4xsSW7abI/XShyIm2myP10ociKNIN+V86lPntODXDO0r8Y2JLdtNkfrpQ5ETbTZH66UORFGkG/K+dSnz2nBrhnaV+MbElu2myP10ociJtpsj9dKHIijSDflfOpT57Tg1wztK/GNiS3bTZH66UORE202R+ulDkRRpBvyvnUp89pwa4Z2lfjGxJbtpsj9dKHIibabI/XShyIo0g35XzqU+e04NcM7SvxjYkt202R+ulDkRNtNkfrpQ5EUaQb8r51KfPacGuGdpX4xsSW7abI/XShyIm2myP10ociKNIN+V86lPntODXDO0r8Y2JLdtNkfrpQ5ETbTZH66UORFGkG/K+dSnz2nBrhnaV+MbElu2myP10ociJtpsj9dKHIijSDflfOpT57Tg1wztK/GNiS3bTZH66UORE202R+ulDkRRpBvyvnUp89pwa4Z2lfjGxJbtpsj9dKHIibabI/XShyIo0g35XzqU+e04NcM7SvxjYkt202R+ulDkRNtNkfrpQ5EUaQb8r51KfPacGuGdpX4xsSW7abI/XShyIm2myP10ociKNIN+V86lPntODXDO0r8Y2JLdtNkfrpQ5ETbTZH66UORFGkG/K+dSnz2nBrhnaV+MbElu2myP10ociJtpsj9dKHIijSDflfOpT57Tg1wztK/GNiS3bTZH66UORE202R+ulDkRRpBvyvnUp89pwa4Z2lfjGxJbtpsj9dKHIibabI/XShyIo0g35XzqU+e04NcM7SvxjYkt202R+ulDkRNtNkfrpQ5EUaQb8r51KfPacGuGdpX4xsSW7abI/XShyIm2myP10ociKNIN+V86lPntODXDO0r8Y2JLdtNkfrpQ5ETbTZH66UORFGkG/K+dSnz2nBrhnaV+MbElu2myP10ociJtpsj9dKHIijSDflfOpT57Tg1wztK/GNiS3bTZH66UORE202R+ulDkRRpBvyvnUp89pwa4Z2lfjGxJbtpsj9dKHIibabI/XShyIo0g35XzqU+e04NcM7SvxjYkt202R+ulDkRNtNkfrpQ5EUaQb8r51KfPacGuGdpX4xsSW7abI/XShyIm2myP10ociKNIN+V86lPntODXDO0r8Y2JLdtNkfrpQ5ETbTZH66UORFGkG/K+dSnz2nBrhnaV+MbElu2myP10ociJtpsj9dKHIijSDflfOpT57Tg1wztK/GNiS3bTZH66UORE202R+ulDkRRpBvyvnUp89pwa4Z2lfjGxJbtpsj9dKHIibabI/XShyIo0g35XzqU+e04NcM7SvxjYkt202R+ulDkRNtNkfrpQ5EUaQb8r51KfPacGuGdpX4xsSW7abI/XShyIm2myP10ociKNIN+V86lPntODXDO0r8Y2JLdtNkfrpQ5ETbTZH66UORFGkG/K+dSnz2nBrhnaV+MbElu2myP10ociJtpsj9dKHIijSDflfOpT57Tg1wztK/GNiS3bTZH66UORE202R+ulDkRRpBvyvnUp89pwa4Z2lfjGxJbtpsj9dKHIibabI/XShyIo0g35XzqU+e04NcM7SvxjYkt202R+ulDkRNtNkfrpQ5EUaQb8r51KfPacGuGdpX4xsSW7abI/XShyIm2myP10ociKNIN+V86lPntODXDO0r8Y2JLdtNkfrpQ5ETbTZH66UORFGkG/K+dSnz2nBrhnaV+MbElu2myP10ociJtpsj9dKHIijSDflfOpT57Tg1wztK/GNiS3bTZH66UORE202R+ulDkRRpBvyvnUp89pwa4Z2lfjGxJbtpsj9dKHIibabI/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AA7R0Ws8csMCZV2e4MVYooWG3SWqtUmpTyzRjCWabZhHxQbf20eRmvdk5E/YjPGz3XKq93SxpsKKKc1MZv32tEv+QGH4hea71aWlcTXMzOaYze3+EmG2jyN17snIn7DbR5G692TkT9iM8ffflfepT57VpwaYZ2lfjTsSYbaPI3XuycifsNtHkbr3ZORP2Izw35X3qU+e04NMM7Svxp2JMNtHkbr3ZORP2G2jyN17snIn7EZ4b8r71KfPacGmGdpX407EmG2jyN17snIn7DbR5G692TkT9iM8N+V96lPntODTDO0r8adiTDbR5G692TkT9hto8jde7JyJ+xGeG/K+9Snz2nBphnaV+NOxJhto8jde7JyJ+w20eRuvdk5E/YjPDflfepT57Tg0wztK/GnYkw20eRuvdk5E/YbaPI3XuycifsRnhvyvvUp89pwaYZ2lfjTsSYbaPI3XuycifsNtHkbr3ZORP2Izw35X3qU+e04NMM7Svxp2JMNtHkbr3ZORP2G2jyN17snIn7EZ4b8r71KfPacGmGdpX407EmG2jyN17snIn7DbR5G692TkT9iM8N+V96lPntODTDO0r8adiTDbR5G692TkT9hto8jde7JyJ+xGeG/K+9Snz2nBphnaV+NOxJhto8jde7JyJ+w20eRuvdk5E/YjPDflfepT57Tg0wztK/GnYkw20eRuvdk5E/YbaPI3XuycifsRnhvyvvUp89pwaYZ2lfjTsSYbaPI3XuycifsNtHkbr3ZORP2Izw35X3qU+e04NMM7Svxp2JMNtHkbr3ZORP2G2jyN17snIn7EZ4b8r71KfPacGmGdpX407EmG2jyN17snIn7DbR5G692TkT9iM8N+V96lPntODTDO0r8adiTDbR5G692TkT9hto8jde7JyJ+xGeG/K+9Snz2nBphnaV+NOxJhto8jde7JyJ+w20eRuvdk5E/YjPDflfepT57Tg0wztK/GnYkw20eRuvdk5E/YbaPI3XuycifsRnhvyvvUp89pwaYZ2lfjTsSYbaPI3XuycifsNtHkbr3ZORP2Izw35X3qU+e04NMM7Svxp2JMNtHkbr3ZORP2G2jyN17snIn7EZ4b8r71KfPacGmGdpX407EmG2jyN17snIn7DbR5G692TkT9iM8N+V96lPntODTDO0r8adiTDbR5G692TkT9hto8jde7JyJ+xGeG/K+9Snz2nBphnaV+NOxJhto8jde7JyJ+w20eRuvdk5E/YjPDflfepT57Tg0wztK/GnYkw20eRuvdk5E/YbaPI3XuycifsRnhvyvvUp89pwaYZ2lfjTsSYbaPI3XuycifsNtHkbr3ZORP2Izw35X3qU+e04NMM7Svxp2JMNtHkbr3ZORP2G2jyN17snIn7EZ4b8r71KfPacGmGdpX407EmG2jyN17snIn7DbR5G692TkT9iM8N+V96lPntODTDO0r8adiTDbR5G692TkT9hto8jde7JyJ+xGeG/K+9Snz2nBphnaV+NOxJhto8jde7JyJ+w20eRuvdk5E/YjPDflfepT57Tg0wztK/GnYkw20eRuvdk5E/YbaPI3XuycifsRnhvyvvUp89pwaYZ2lfjTsSYbaPI3XuycifsNtHkbr3ZORP2Izw35X3qU+e04NMM7Svxp2JMNtHkbr3ZORP2G2jyN17snIn7EZ4b8r71KfPacGmGdpX407EmG2jyN17snIn7DbR5G692TkT9iM8N+V96lPntODTDO0r8adiTDbR5G692TkT9hto8jde7JyJ+xGeG/K+9Snz2nBphnaV+NOxJhto8jde7JyJ+w20eRuvdk5E/YjPDflfepT57Tg0wztK/GnYkw20eRuvdk5E/YbaPI3XuycifsRnhvyvvUp89pwaYZ2lfjTsSYbaPI3XuycifsNtHkbr3ZORP2Izw35X3qU+e04NMM7Svxp2JMNtHkbr3ZORP2G2jyN17snIn7EZ4b8r71KfPacGmGdpX407EmG2jyN17snIn7DbR5G692TkT9iM8N+V96lPntODTDO0r8adiTDbR5G692TkT9hto8jde7JyJ+xGeG/K+9Snz2nBphnaV+NOxJhto8jde7JyJ+w20eRuvdk5E/YjPDflfepT57Tg0wztK/GnYkw20eRuvdk5E/YbaPI3XuycifsRnhvyvvUp89pwaYZ2lfjTsSYbaPI3XuycifsNtHkbr3ZORP2Izw35X3qU+e04NMM7Svxp2JMNtHkbr3ZORP2G2jyN17snIn7EZ4b8r71KfPacGmGdpX407EmG2jyN17snIn7DbR5G692TkT9iM8N+V96lPntODTDO0r8adiTDbR5G692TkT9hto8jde7JyJ+xGeG/K+9Snz2nBphnaV+NOxJhto8jde7JyJ+w20eRuvdk5E/YjPDflfepT57Tg0wztK/GnYkw20eRuvdk5E/YbaPI3XuycifsRnhvyvvUp89pwaYZ2lfjTsSYbaPI3XuycifsNtHkbr3ZORP2Izw35X3qU+e04NMM7Svxp2JMNtHkbr3ZORP2G2jyN17snIn7EZ4b8r71KfPacGmGdpX407EmG2jyN17snIn7DbR5G692TkT9iM8N+V96lPntODTDO0r8adiTDbR5G692TkT9hto8jde7JyJ+xGeG/K+9Snz2nBphnaV+NOxJhto8jde7JyJ+w20eRuvdk5E/YjPDflfepT57Tg0wztK/GnYkw20eRuvdk5E/YbaPI3XuycifsRnhvyvvUp89pwaYZ2lfjTsSYbaPI3XuycifsNtHkbr3ZORP2Izw35X3qU+e04NMM7Svxp2JMNtHkbr3ZORP2G2jyN17snIn7EZ4b8r71KfPacGmGdpX407EmG2jyN17snIn7DbR5G692TkT9iM8N+V96lPntODTDO0r8adiTDbR5G692TkT9hto8jde7JyJ+xGeG/K+9Snz2nBphnaV+NOxJhto8jde7JyJ+w20eRuvdk5E/YjPDflfepT57Tg0wztK/GnYkw20eRuvdk5E/YbaPI3XuycifsRnhvyvvUp89pwaYZ2lfjTsSYbaPI3XuycifsNtHkbr3ZORP2Izw35X3qU+e04NMM7Svxp2JMNtHkbr3ZORP2G2jyN17snIn7EZ4b8r71KfPacGmGdpX407EmG2jyN17snIn7DbR5G692TkT9iM8N+V96lPntODTDO0r8adiTDbR5G692TkT9hto8jde7JyJ+xGeG/K+9Snz2nBphnaV+NOxJhto8jde7JyJ+w20eRuvdk5E/YjPDflfepT57Tg0wztK/GnYkw20eRuvdk5E/YbaPI3XuycifsRnhvyvvUp89pwaYZ2lfjTsSYbaPI3XuycifsNtHkbr3ZORP2Izw35X3qU+e04NMM7Svxp2JMNtHkbr3ZORP2G2jyN17snIn7EZ4b8r71KfPacGmGdpX407EmG2jyN17snIn7DbR5G692TkT9iM8N+V96lPntODTDO0r8adiTDbR5G692TkT9hto8jde7JyJ+xGeG/K+9Snz2nBphnaV+NOxJhto8jde7JyJ+w20eRuvdk5E/YjPDflfepT57Tg0wztK/GnYkw20eRuvdk5E/YbaPI3XuycifsRnhvyvvUp89pwaYZ2lfjTsSYbaPI3XuycifsNtHkbr3ZORP2Izw35X3qU+e04NMM7Svxp2JMNtHkbr3ZORP2G2jyN17snIn7EZ4b8r71KfPacGmGdpX407EmG2jyN17snIn7DbR5G692TkT9iM8N+V96lPntODTDO0r8adiTDbR5G692TkT9hto8jde7JyJ+xGeG/K+9Snz2nBphnaV+NOxJhto8jde7JyJ+w20eRuvdk5E/YjPDflfepT57Tg0wztK/GnYkw20eRuvdk5E/YbaPI3XuycifsRnhvyvvUp89pwaYZ2lfjTsSYbaPI3XuycifsNtHkbr3ZORP2Izw35X3qU+e04NMM7Svxp2JMNtHkbr3ZORP2G2jyN17snIn7EZ4b8r71KfPacGmGdpX407EmG2jyN17snIn7DbR5G692TkT9iM8N+V96lPntODTDO0r8adiTDbR5G692TkT9hto8jde7JyJ+xGeG/K+9Snz2nBphnaV+NOxJhto8jde7JyJ+w20eRuvdk5E/YjPDflfepT57Tg0wztK/GnYkw20eRuvdk5E/YbaPI3XuycifsRnhvyvvUp89pwaYZ2lfjTsSYbaPI3XuycifsNtHkbr3ZORP2Izw35X3qU+e04NMM7Svxp2JMNtHkbr3ZORP2G2jyN17snIn7EZ4b8r71KfPacGmGdpX407EmG2jyN17snIn7DbR5G692TkT9iM8N+V96lPntODTDO0r8adiTDbR5G692TkT9hto8jde7JyJ+xGeG/K+9Snz2nBphnaV+NOxJhto8jde7JyJ+w20eRuvdk5E/YjPDflfepT57Tg0wztK/GnYkw20eRuvdk5E/YbaPI3XuycifsRnhvyvvUp89pwaYZ2lfjTsSYbaPI3XuycifsNtHkbr3ZORP2Izw35X3qU+e04NMM7Svxp2JMNtHkbr3ZORP2G2jyN17snIn7EZ4b8r71KfPacGmGdpX407EmG2jyN17snIn7DbR5G692TkT9iM8N+V96lPntODTDO0r8adiTDbR5G692TkT9hto8jde7JyJ+xGeG/K+9Snz2nBphnaV+NOxJhto8jde7JyJ+w20eRuvdk5E/YjPDflfepT57Tg0wztK/GnYkw20eRuvdk5E/YbaPI3XuycifsRnhvyvvUp89pwaYZ2lfjTsSYbaPI3Xuycif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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHo4e+3bBwiTpec9HD327YOESdL1R70Pna8nV3Strw8ur+8m6Vu9e33BfcbbXj/RVq/vI/wDlx/a/D6v336qtXw4qzRVn4lKbWjcx7YeePQ+r99+qrV8OJ9X779VWr4cVNxV0K+to6YeePQ+r99+qrV8OJ9X779VWr4cTcVdB62jph549D6v336qtXw4n1fvv1VavhxNxV0HraOmHnj0Pq/ffqq1fDifV++/VVq+HE3FXQeto6YeePQ+r99+qrV8OJ9X779VWr4cTcVdB62jph549D6v336qtXw4n1fvv1VavhxNxV0HraOmHnj0Pq/ffqq1fDifV++/VVq+HE3FXQeto6YeePQ+r99+qrV8OJ9X779VWr4cTcVdB62jph549D6v336qtXw4n1fvv1VavhxNxV0HraOmHnj0Pq/ffqq1fDifV++/VVq+HE3FXQeto6YeePQ+r99+qrV8OJ9X779VWr4cTcVdB62jph549D6v336qtXw4n1fvv1VavhxNxV0HraOmHnj0Pq/ffqq1fDifV++/VVq+HE3FXQeto6YeePQ+r99+qrV8OJ9X779VWr4cTcVdB62jph549D6v336qtXw4n1fvv1VavhxNxV0HraOmHnj0Pq/ffqq1fDifV++/VVq+HE3FXQeto6YeePQ+r99+qrV8OJ9X779VWr4cTcVdB62jph549D6v336qtXw4n1fvv1VavhxNxV0HraOmHnj0Pq/ffqq1fDifV++/VVq+HE3FXQeto6YeePQ+r99+qrV8OJ9X779VWr4cTcVdB62jph549D6v336qtXw4n1fvv1VavhxNxV0HraOmHnj0Pq/ffqq1fDifV++/VVq+HE3FXQeto6YeePQ+r99+qrV8OJ9X779VWr4cTcVdB62jph549D6v336qtXw4n1fvv1VavhxNxV0HraOmHnj0Pq/ffqq1fDifV++/VVq+HE3FXQeto6YeePQ+r99+qrV8OJ9X779VWr4cTcVdB62jph549D6v336qtXw4n1fvv1VavhxNxV0HraOmHnj0Pq/ffqq1fDifV++/VVq+HE3FXQeto6YeePQ+r99+qrV8OJ9X779VWr4cTcVdB62jph549D6v336qtXw4n1fvv1VavhxNxV0HraOmHnj0Pq/ffqq1fDifV++/VVq+HE3FXQeto6YeePQ+r99+qrV8OJ9X779VWr4cTcVdB62jph549D6v336qtXw4n1fvv1VavhxNxV0HraOmHnj0Pq/ffqq1fDifV++/VVq+HE3FXQeto6YeePQ+r99+qrV8OJ9X779VWr4cTcVdB62jph549D6v336qtXw4n1fvv1VavhxNxV0HraOmHnj0Pq/ffqq1fDifV++/VVq+HE3FXQeto6YeePQ+r99+qrV8OJ9X779VWr4cTcVdB62jph549D6v336qtXw4n1fvv1VavhxNxV0HraOmHnj0Pq/ffqq1fDifV++/VVq+HE3FXQeto6YeePQ+r99+qrV8OJ9X779VWr4cTcVdB62jph549D6v336qtXw4n1fvv1VavhxNxV0HraOmHnj0Pq/ffqq1fDifV++/VVq+HE3FXQeto6YeePQ+r99+qrV8OJ9X779VWr4cTcVdB62jph549D6v336qtXw4n1fvv1VavhxNxV0HraOmHnj0Pq/ffqq1fDifV++/VVq+HE3FXQeto6YeePQ+r99+qrV8OJ9X779VWr4cTcVdB62jph549D6v336qtXw4n1fvv1VavhxNxV0HraOmHnj0Pq/ffqq1fDifV++/VVq+HE3FXQeto6YeePQ+r99+qrV8OJ9X779VWr4cTcVdB62jph549D6v336qtXw4n1fvv1VavhxNxV0HraOmHnj0Pq/ffqq1fDifV++/VVq+HE3FXQeto6YeePQ+r99+qrV8OJ9X779VWr4cTcVdB62jph549D6v336qtXw4n1fvv1VavhxNxV0HraOmHnj0Pq/ffqq1fDifV++/VVq+HE3FXQeto6YeePQ+r99+qrV8OJ9X779VWr4cTcVdB62jph549D6v336qtXw4n1fvv1VavhxNxV0HraOmHnj0Pq/ffqq1fDifV++/VVq+HE3FXQeto6YeePQ+r99+qrV8OJ9X779VWr4cTcVdB62jph549D6v336qtXw4n1fvv1VavhxNxV0HraOmHnj0Pq/ffqq1fDifV++/VVq+HE3FXQeto6YeePQ+r99+qrV8OJ9X779VWr4cTcVdB62jph549D6v336qtXw4n1fvv1VavhxNxV0HraOmHnj0Pq/ffqq1fDifV++/VVq+HE3FXQeto6YeePQ+r99+qrV8OJ9X779VWr4cTcVdB62jph549D6v336qtXw4n1fvv1VavhxNxV0HraOmHnj0Pq/ffqq1fDifV++/VVq+HE3FXQeto6YeePQ+r99+qrV8OJ9X779VWr4cTcVdB62jph549D6v336qtXw4n1fvv1VavhxNxV0HraOmHnj0Pq/ffqq1fDifV++/VVq+HE3FXQeto6YeePQ+r99+qrV8OJ9X779VWr4cTcVdB62jph549D6v336qtXw4n1fvv1VavhxNxV0HraOmHnj0Pq/ffqq1fDifV++/VVq+HE3FXQeto6YeePQ+r99+qrV8OJ9X779VWr4cTcVdB62jph549D6v336qtXw4n1fvv1VavhxNxV0HraOmHnj0Pq/ffqq1fDifV++/VVq+HE3FXQeto6YeePQ+r99+qrV8OJ9X779VWr4cTcVdB62jph549D6v336qtXw4n1fvv1VavhxNxV0HraOmHnj0Pq/ffqq1fDifV++/VVq+HE3FXQeto6YeePQ+r99+qrV8OJ9X779VWr4cTcVdB62jph549D6v336qtXw4n1fvv1VavhxNxV0HraOmHnj0Pq/ffqq1fDifV++/VVq+HE3FXQeto6YeePQ+r99+qrV8OJ9X779VWr4cTcVdB62jph549D6v336qtXw4n1fvv1VavhxNxV0HraOmHnj0Pq/ffqq1fDifV++/VVq+HE3FXQeto6YeePQ+r99+qrV8OJ9X779VWr4cTcVdB62jph549D6v336qtXw4n1fvv1VavhxNxV0HraOmHnj0Pq/ffqq1fDifV++/VVq+HE3FXQeto6YeePQ+r99+qrV8OJ9X779VWr4cTcVdB62jph549D6v336qtXw4n1fvv1VavhxNxV0HraOmHnj0Pq/ffqq1fDifV++/VVq+HE3FXQeto6YeePQ+r99+qrV8OJ9X779VWr4cTcVdB62jph549D6v336qtXw4n1fvv1VavhxNxV0HraOmHnj0Pq/ffqq1fDifV++/VVq+HE3FXQeto6YeePQ+r99+qrV8OJ9X779VWr4cTcVdB62jph549D6v336qtXw4n1fvv1VavhxNxV0HraOmHnj0Pq/ffqq1fDifV++/VVq+HE3FXQeto6YeePQ+r99+qrV8OJ9X779VWr4cTcVdB62jph549D6v336qtXw4n1fvv1VavhxNxV0HraOmHnj0Pq/ffqq1fDifV++/VVq+HE3FXQeto6YeePQ+r99+qrV8OJ9X779VWr4cTcVdB62jph549D6v336qtXw4n1fvv1VavhxNxV0HraOmHnj0Pq/ffqq1fDifV++/VVq+HE3FXQeto6YeePQ+r99+qrV8OJ9X779VWr4cTcVdB62jph549D6v336qtXw4n1fvv1VavhxNxV0HraOmHnj0Pq/ffqq1fDifV++/VVq+HE3FXQeto6YeePQ+r99+qrV8OJ9X779VWr4cTcVdB62jph549D6v336qtXw4n1fvv1VavhxNxV0HraOmHnj0Pq/ffqq1fDifV++/VVq+HE3FXQeto6YeePQ+r99+qrV8OJ9X779VWr4cTcVdB62jph549D6v336qtXw4n1fvv1VavhxNxV0HraOmHnj0Pq/ffqq1fDifV++/VVq+HE3FXQeto6YeePQ+r99+qrV8OJ9X779VWr4cTcVdB62jph549D6v336qtXw4n1fvv1VavhxNxV0HraOmHnj0Pq/ffqq1fDifV++/VVq+HE3FXQeto6YeePQ+r99+qrV8OJ9X779VWr4cTcVdB62jph549D6v336qtXw4n1fvv1VavhxNxV0HraOmHnj0Pq/ffqq1fDifV++/VVq+HE3FXQeto6YeePQ+r99+qrV8OJ9X779VWr4cTcVdB62jph549D6v336qtXw4n1fvv1VavhxNxV0HraOmHnj0Pq/ffqq1fDifV++/VVq+HE3FXQeto6YeePQ+r99+qrV8OJ9X779VWr4cTcVdB62jph549D6v336qtXw4n1fvv1VavhxNxV0HraOmHnj0Pq/ffqq1fDifV++/VVq+HE3FXQeto6YeePQ+r99+qrV8OJ9X779VWr4cTcVdB62jph549D6v336qtXw4n1fvv1VavhxNxV0HraOmHnvRw99u2DhEnSp9X779VWr4cXoYfuG+pb8sMY3XaYQhaJNn/AMOP7XqiirdR7Hi1taPV1e2OKX//2Q==';
function getJsPDF(){
  if(window.jspdf?.jsPDF)return window.jspdf.jsPDF;
  alert('O gerador de PDF não foi carregado. Verifique sua conexão e tente novamente.');
  return null;
}

function pdfSafeFileName(s){
  return String(s||'relatorio')
    .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
    .replace(/[^a-zA-Z0-9_-]+/g,'-')
    .replace(/-+/g,'-')
    .replace(/^-|-$/g,'')
    .toLowerCase();
}


function pdfAddTitle(doc,title,subtitle=''){
  try{
    doc.addImage(PDF_LOGO_DATA,'JPEG',14,8,20,20);
  }catch(e){
    console.warn('Não foi possível inserir a logo no PDF.',e);
  }

  doc.setFont('helvetica','bold');
  doc.setFontSize(15);
  doc.text('APP SERVIÇOS VERSÁTIL',40,14);

  doc.setFontSize(13);
  doc.text(title,40,21);

  if(subtitle){
    doc.setFont('helvetica','normal');
    doc.setFontSize(9);
    doc.text(subtitle,40,27);
  }

  doc.setDrawColor(30,105,170);
  doc.line(14,32,196,32);
  return 39;
}
function pdfAddLines(doc,lines,y=34){
  doc.setFont('helvetica','normal');
  doc.setFontSize(10);
  for(const raw of lines){
    const line=String(raw??'');
    const wrapped=doc.splitTextToSize(line,180);
    for(const part of wrapped){
      if(y>282){
        doc.addPage();
        y=18;
      }
      doc.text(part,14,y);
      y+=5.5;
    }
  }
  return y;
}

function saveTextPdf(title,subtitle,lines,fileName){
  const JsPDF=getJsPDF();
  if(!JsPDF)return;
  const doc=new JsPDF({unit:'mm',format:'a4',orientation:'portrait'});
  let y=pdfAddTitle(doc,title,subtitle);
  pdfAddLines(doc,lines,y);
  doc.save(pdfSafeFileName(fileName||title)+'.pdf');
}


function reportSectionChartData(section,data){
  if(section==='summary'){
    return [
      {label:'Vendas no período',value:data.filteredTotal},
      {label:'Total no ano',value:data.annualTotal},
      {label:'Período anterior',value:data.prevTotal}
    ];
  }
  if(section==='categories'){
    return Object.entries(data.byCat).sort((a,b)=>b[1]-a[1]).map(([label,value])=>({label,value}));
  }
  if(section==='products'){
    return Object.entries(data.byProduct).sort((a,b)=>b[1]-a[1]).map(([label,value])=>({label,value}));
  }
  if(section==='last3')return data.last3.map(x=>({label:x.label,value:x.value}));
  if(section==='annual')return data.annual.map(x=>({label:x.label,value:x.value}));
  if(section==='previous'){
    return [
      {label:data.previousLabel,value:data.prevTotal},
      {label:data.currentLabel,value:data.filteredTotal}
    ];
  }
  return [];
}

function pdfAddColumnChart(doc,items,y,title='Gráfico de colunas'){
  const data=(items||[]).filter(x=>Number.isFinite(Number(x.value)));
  if(!data.length)return y;

  if(y>205){
    doc.addPage();
    y=18;
  }

  doc.setFont('helvetica','bold');
  doc.setFontSize(10);
  doc.text(title,14,y);
  y+=7;

  const max=Math.max(...data.map(x=>Number(x.value)),0);
  const chartX=18;
  const chartY=y;
  const chartW=174;
  const chartH=58;
  const gap=3;
  const barW=Math.max(5,Math.min(18,(chartW-gap*(data.length-1))/Math.max(1,data.length)));

  doc.setDrawColor(180,190,200);
  doc.line(chartX,chartY+chartH,chartX+chartW,chartY+chartH);

  data.forEach((item,index)=>{
    const v=Number(item.value)||0;
    const h=max>0?(v/max)*(chartH-14):2;
    const x=chartX+index*(barW+gap);
    const barY=chartY+chartH-h;

    doc.setFillColor(15,76,129);
    doc.rect(x,barY,barW,h,'F');

    doc.setFont('helvetica','normal');
    doc.setFontSize(6.5);
    const valueText=money(v);
    doc.text(valueText,x+barW/2,Math.max(chartY+4,barY-2),{align:'center'});

    const label=String(item.label||'');
    const short=label.length>16?label.slice(0,15)+'…':label;
    doc.text(short,x+barW/2,chartY+chartH+4,{align:'center',angle:25});
  });

  return chartY+chartH+16;
}


function pdfDrawColumnChart(doc,items,x,y,w,h){
  const data=(items||[]).filter(x=>Number.isFinite(Number(x.value)));
  if(!data.length){
    doc.setFont('helvetica','italic');
    doc.setFontSize(8);
    doc.text('Sem dados para o gráfico.',x,y+8);
    return;
  }

  const max=Math.max(...data.map(x=>Number(x.value)),0);
  const baseY=y+h-10;
  const chartH=h-22;
  const gap=2.5;
  const barW=Math.max(4,Math.min(12,(w-gap*(data.length-1))/Math.max(1,data.length)));

  doc.setDrawColor(220,226,232);
  doc.setLineWidth(.2);

  for(let g=0;g<4;g++){
    const gy=y+6+(chartH/3)*g;
    doc.line(x,gy,x+w,gy);
  }

  data.forEach((item,index)=>{
    const v=Number(item.value)||0;
    const bh=max>0?Math.max(2,(v/max)*(chartH-8)):2;
    const bx=x+index*(barW+gap);
    const by=baseY-bh;

    doc.setFillColor(31,111,177);
    doc.roundedRect(bx,by,barW,bh,1.5,1.5,'F');

    doc.setFont('helvetica','bold');
    doc.setFontSize(6);
    const val=money(v);
    doc.text(val,bx+barW/2,Math.max(y+4,by-1.5),{align:'center'});

    doc.setFont('helvetica','normal');
    doc.setFontSize(5.5);
    const short=String(item.label||'').length>14
      ?String(item.label).slice(0,13)+'…'
      :String(item.label||'');
    doc.text(short,bx+barW/2,baseY+4,{align:'center',angle:25});
  });
}

function pdfAddReportSection(doc,section,data,y){
  const lines=reportSectionLines(section,data);
  if(!lines.length)return y;

  const sectionHeight=92;
  if(y+sectionHeight>282){
    doc.addPage();
    y=18;
  }

  const leftX=14;
  const leftW=86;
  const rightX=108;
  const rightW=88;

  doc.setDrawColor(220,226,232);
  doc.roundedRect(12,y-5,186,sectionHeight,3,3);

  doc.setFont('helvetica','bold');
  doc.setFontSize(11);
  doc.text(lines[0],leftX,y+2);

  doc.setFont('helvetica','normal');
  doc.setFontSize(8.2);

  let textY=y+10;
  const detailLines=lines.slice(2);
  for(const raw of detailLines){
    const wrapped=doc.splitTextToSize(String(raw??''),leftW);
    for(const part of wrapped){
      if(textY>y+sectionHeight-10)break;
      doc.text(part,leftX,textY);
      textY+=4.6;
    }
  }

  doc.setFont('helvetica','bold');
  doc.setFontSize(9);
  doc.text('Gráfico',rightX,y+2);

  pdfDrawColumnChart(
    doc,
    reportSectionChartData(section,data),
    rightX,
    y+7,
    rightW,
    sectionHeight-18
  );

  return y+sectionHeight+7;
}
function selectAllReportBoxes(){
  document.querySelectorAll('.report-pdf-check').forEach(el=>el.checked=true);
}

function clearAllReportBoxes(){
  document.querySelectorAll('.report-pdf-check').forEach(el=>el.checked=false);
}


function reportSectionLines(section,data){
  if(section==='categories'){
    return ['TOTAL DE VENDAS POR CATEGORIA','',...Object.entries(data.byCat).sort((a,b)=>b[1]-a[1]).map(([k,v])=>`${k}: ${money(v)}`)];
  }
  if(section==='products'){
    return ['TOTAL DE VENDAS POR PRODUTO','',...Object.entries(data.byProduct).sort((a,b)=>b[1]-a[1]).map(([k,v])=>`${k}: ${money(v)}`)];
  }
  if(section==='last3'){
    return ['COMPARATIVO DOS ÚLTIMOS 3 MESES','',...data.last3.map(x=>`${x.label}: ${money(x.value)}`)];
  }
  if(section==='annual'){
    return [`COMPARATIVO ANUAL - ${data.year}`,'',...data.annual.map(x=>`${x.label}: ${money(x.value)}`),`Total do ano: ${money(data.annualTotal)}`];
  }
  if(section==='previous'){
    return ['COMPARATIVO COM O MESMO PERÍODO DO ANO ANTERIOR','',
      `${data.previousLabel}: ${money(data.prevTotal)}`,
      `${data.currentLabel}: ${money(data.filteredTotal)}`,
      `Diferença: ${money(data.diff)}`,
      data.pct===null?'Variação: sem base anterior':`Variação: ${data.pct.toFixed(1)}%`
    ];
  }
  if(section==='summary'){
    return ['RESUMO DO PERÍODO','',
      `Filtro: ${data.currentLabel}`,
      `Total consolidado: ${money(data.filteredTotal)}`,
      `Pedidos no período: ${data.filteredOrdersCount}`,
      `Total no ano de referência: ${money(data.annualTotal)}`,
      `Mesmo período no ano anterior: ${money(data.prevTotal)}`
    ];
  }
  return [];
}

function exportSingleReportSection(section){
  const data=buildReportsData();
  const labels={
    summary:'Resumo do período',
    categories:'Vendas por categoria',
    products:'Vendas por produto',
    last3:'Comparativo dos últimos 3 meses',
    annual:'Comparativo anual',
    previous:'Comparativo com o ano anterior'
  };

  const JsPDF=getJsPDF();
  if(!JsPDF)return;

  const doc=new JsPDF({unit:'mm',format:'a4',orientation:'portrait'});
  let y=pdfAddTitle(doc,labels[section]||'Relatório',data.currentLabel);
  y=pdfAddReportSection(doc,section,data,y);

  doc.save(
    pdfSafeFileName(`versatil-${section}-${data.currentLabel}`)+'.pdf'
  );
}

function exportSelectedReportSections(){
  const selected=[...document.querySelectorAll('.report-pdf-check:checked')].map(el=>el.value);
  if(!selected.length){
    alert('Selecione ao menos um quadro para gerar o PDF.');
    return;
  }

  const JsPDF=getJsPDF();
  if(!JsPDF)return;

  const data=buildReportsData();
  const doc=new JsPDF({unit:'mm',format:'a4',orientation:'portrait'});
  let y=pdfAddTitle(doc,'Relatórios - APP SERVIÇOS VERSÁTIL',data.currentLabel);

  selected.forEach((section,index)=>{
    if(index)y+=5;
    y=pdfAddReportSection(doc,section,data,y);
  });

  doc.save(
    pdfSafeFileName(`versatil-relatorios-${data.currentLabel}`)+'.pdf'
  );
}
function ordersToExecuteAdmin(){
  const selected=window.executeReportDate||today();
  const rows=[];

  for(const order of db.orders||[]){
    if(order.status && order.status!=='ativo')continue;
    rows.push(...orderUsesForDate(order,selected));
  }

  rows.sort((a,b)=>{
    const pa=bookingSlotFromPeriod(a.use.period);
    const pb=bookingSlotFromPeriod(b.use.period);
    const orderSlot=s=>s==='morning'?0:s==='afternoon'?1:2;
    const slotDiff=orderSlot(pa)-orderSlot(pb);
    if(slotDiff!==0)return slotDiff;
    return new Date(b.createdAt||0)-new Date(a.createdAt||0);
  });

  const total=rows.reduce((sum,r)=>{
    const uses=r.item.schedule?.length||1;
    return sum + ((Number(r.item.price)||0)*Number(r.item.qty||1))/uses;
  },0);

  window.lastExecuteReport={date:selected,rows,total};

  return `<div class="card">
    <div class="row between">
      <div>
        <h2>Pedidos a executar</h2>
        <p class="muted">Exibe somente as execuções previstas para a data selecionada, mesmo quando o pedido possui outras datas.</p>
      </div>
      <div class="row">
        <div class="field" style="margin:0;min-width:190px">
          <label>Data</label>
          <input type="date" value="${esc(selected)}" onchange="window.executeReportDate=this.value;render()">
        </div>
        <button class="btn primary" onclick="exportExecuteReportPdf()">Exportar PDF</button>
      </div>
    </div>

    <div class="row" style="margin:14px 0">
      <span class="badge">${rows.length} execução(ões)</span>
      <span class="badge green">Valor proporcional: ${money(total)}</span>
    </div>

    ${rows.length?`<table>
      <tr>
        <th>Período</th>
        <th>Cliente</th>
        <th>Unidade</th>
        <th>Produto / Serviço</th>
        <th>Utilização</th>
        <th>Qtd.</th>
        <th>Pedido</th>
      </tr>
      ${rows.map(r=>`<tr>
        <td>${r.use.period?`<b>${esc(periodLabel(r.use.period))}</b>`:'—'}</td>
        <td>${esc(r.client?.name||'')}<br><span class="small">${esc(r.client?.email||'')}</span></td>
        <td>${esc(r.client?.roomName||'')}</td>
        <td>${esc(r.item.name)}</td>
        <td>${r.item.schedule?.length?`${r.useIndex+1} de ${r.item.schedule.length}`:'Única'}</td>
        <td>${r.item.qty||1}</td>
        <td><button class="btn" onclick="openCalendarOrder('${r.orderId}')">Ver pedido completo</button></td>
      </tr>`).join('')}
    </table>`:`<div class="empty">Não há pedidos para executar nesta data.</div>`}
  </div>`;
}

function exportExecuteReportPdf(){
  const report=window.lastExecuteReport;
  if(!report)return alert('Abra o relatório antes de exportar.');

  const lines=[
    `Data selecionada: ${formatDateBR(report.date)}`,
    `Execuções: ${report.rows.length}`,
    `Valor proporcional: ${money(report.total)}`,
    ''
  ];

  if(!report.rows.length){
    lines.push('Não há pedidos para executar nesta data.');
  }else{
    report.rows.forEach((r,index)=>{
      lines.push(
        `${index+1}. ${r.item.name}`,
        `Cliente: ${r.client?.name||''}`,
        `Unidade: ${r.client?.roomName||''}`,
        `Período: ${r.use.period?periodLabel(r.use.period):'Sem período'}`,
        `Utilização: ${r.item.schedule?.length?`${r.useIndex+1} de ${r.item.schedule.length}`:'Única'}`,
        `Quantidade: ${r.item.qty||1}`,
        `Pedido: ${r.orderId}`,
        ''
      );
    });
  }

  saveTextPdf(
    'Pedidos a executar',
    `Data: ${formatDateBR(report.date)}`,
    lines,
    `pedidos-a-executar-${report.date}`
  );
}

function ordersAdmin(){
  let os=[...db.orders].sort((a,b)=>new Date(b.createdAt||0)-new Date(a.createdAt||0));

  return `<div class="card">
    <div class="row between"><div><h2>Pedidos</h2><p class="muted">Do mais recente para o mais antigo.</p></div></div>
    ${os.length?`<table>
      <tr><th>Cliente</th><th>Serviço</th><th>Datas e períodos</th><th>Qtd.</th><th>Total</th><th>Status</th><th>Ação</th></tr>
      ${os.map(o=>o.items.map((i,index)=>`<tr>
        ${index===0?`<td rowspan="${o.items.length}">${esc(o.client.name)}<br>${esc(o.client.roomName)}<br><span class="small">${esc(o.client.email||'')}</span><br><span class="small muted">${new Date(o.createdAt).toLocaleString('pt-BR')}</span></td>`:''}
        <td>${esc(i.name)}</td>
        <td>${i.schedule?.length
          ?i.schedule.map((u,n)=>`<div><b>${n+1}.</b> ${formatDateBR(u.date)} • ${esc(periodLabel(u.period))}</div>`).join('')
          :`${formatDateBR(i.date)}${i.period?` • ${esc(periodLabel(i.period))}`:''}`}
        </td>
        <td>${i.qty}</td>
        ${index===0?`<td rowspan="${o.items.length}"><b>${money(o.total)}</b></td>
        <td rowspan="${o.items.length}"><span class="badge ${o.status==='cancelado'?'red':'green'}">${o.status}</span></td>
        <td rowspan="${o.items.length}"><button class="btn red" onclick="deleteOrderAdmin('${o.id}')">Excluir pedido</button></td>`:''}
      </tr>`).join('')).join('')}
    </table>`:`<div class="muted">Nenhum pedido.</div>`}
  </div>`;
}
function cancelOrder(oid){let o=db.orders.find(x=>x.id===oid);if(!o||!confirm('Cancelar este pedido?'))return;o.status='cancelado';o.cancelledAt=new Date().toISOString();save();let recipients=[...db.account.adminEmails.filter(Boolean),o.client.email];localStorage.setItem('versatil_last_cancel_email',JSON.stringify({recipients,subject:'Cancelamento de solicitação - Versátil',body:'Prezado cliente, sua solicitação foi cancelada. Obrigado!'}));render()}


function deleteOrderFromGoogleCalendar(orderId){
  if(!orderId)return Promise.resolve();
  return fetch(GOOGLE_APPS_SCRIPT_URL,{
    method:'POST',
    mode:'no-cors',
    cache:'no-store',
    headers:{'Content-Type':'text/plain;charset=UTF-8'},
    body:JSON.stringify({action:'deleteOrder',orderId}),
    keepalive:true
  }).catch(err=>console.error('Falha ao solicitar exclusão do Google Calendar:',err));
}

function deleteOrderAdmin(oid){
  const o=db.orders.find(x=>x.id===oid);
  if(!o)return;
  if(!confirm('Excluir este pedido definitivamente? Ele também será removido do calendário do APP, do Google Calendar e dos relatórios.'))return;
  deleteOrderFromGoogleCalendar(oid);
  removeOrderFromAppCalendar(oid);
  db.orders=db.orders.filter(x=>x.id!==oid);
  save();
  render();
}
function activeOrders(){
  return (db.orders||[]).filter(o=>!o.status || o.status==='ativo');
}

function formatDateBR(value){
  if(!value)return '';
  const s=String(value);
  const m=s.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if(m)return `${m[3]}/${m[2]}/${m[1]}`;
  const d=new Date(value);
  if(Number.isNaN(d.getTime()))return s;
  return d.toLocaleDateString('pt-BR');
}




function getReportFilter(){
  const now=new Date();

  const day=String(window.reportFilterDay||'').trim();
  const month=String(window.reportFilterMonth||'').trim();
  const year=String(window.reportFilterYear||'').trim();

  return {day,month,year,now};
}

function reportFilterLabel(filter){
  const parts=[];
  if(filter.day)parts.push(`Dia ${filter.day}`);
  if(filter.month){
    const monthName=new Date(2000,Number(filter.month)-1,1)
      .toLocaleDateString('pt-BR',{month:'long'});
    parts.push(`Mês ${monthName}`);
  }
  if(filter.year)parts.push(`Ano ${filter.year}`);

  return parts.length?parts.join(' • '):'Todos os períodos';
}

function orderMatchesReportFilter(order,filter){
  const d=new Date(order.createdAt);
  if(Number.isNaN(d.getTime()))return false;

  if(filter.day && d.getDate()!==Number(filter.day))return false;
  if(filter.month && d.getMonth()+1!==Number(filter.month))return false;
  if(filter.year && d.getFullYear()!==Number(filter.year))return false;

  return true;
}

function previousPeriodFilter(filter){
  if(filter.year){
    return {...filter,year:String(Number(filter.year)-1)};
  }

  // Sem ano explícito, a comparação anterior usa o ano civil anterior,
  // mantendo dia e/ou mês se selecionados.
  return {...filter,year:String(new Date().getFullYear()-1)};
}


function buildReportsData(){
  const now=new Date();
  const filter=getReportFilter();
  const orders=activeOrders();

  const filteredOrders=orders.filter(o=>orderMatchesReportFilter(o,filter));
  const filteredTotal=filteredOrders.reduce((a,o)=>a+Number(o.total||0),0);

  const byCat={},byProduct={};
  filteredOrders.forEach(o=>(o.items||[]).forEach(i=>{
    const p=db.products.find(x=>x.id===i.productId);
    const cat=db.categories.find(c=>c.id===p?.cat)?.name||'Sem categoria';
    const v=Number(i.price||0)*Number(i.qty||1);
    byCat[cat]=(byCat[cat]||0)+v;
    byProduct[i.name]=(byProduct[i.name]||0)+v;
  }));

  const refYear=filter.year?Number(filter.year):now.getFullYear();
  const refMonth=filter.month?Number(filter.month)-1:now.getMonth();

  const last3=[];
  for(let k=2;k>=0;k--){
    const ref=new Date(refYear,refMonth-k,1);
    const value=orders.filter(o=>{
      const d=new Date(o.createdAt);
      return d.getFullYear()===ref.getFullYear() && d.getMonth()===ref.getMonth();
    }).reduce((a,o)=>a+Number(o.total||0),0);

    last3.push({
      label:ref.toLocaleDateString('pt-BR',{month:'short',year:'numeric'}),
      value
    });
  }

  const annual=[];
  for(let mm=0;mm<12;mm++){
    const value=orders.filter(o=>{
      const d=new Date(o.createdAt);
      return d.getFullYear()===refYear && d.getMonth()===mm;
    }).reduce((a,o)=>a+Number(o.total||0),0);

    annual.push({
      label:new Date(refYear,mm,1).toLocaleDateString('pt-BR',{month:'short'}),
      value
    });
  }

  const annualTotal=annual.reduce((a,x)=>a+x.value,0);

  const prevFilter=previousPeriodFilter(filter);
  const prevOrders=orders.filter(o=>orderMatchesReportFilter(o,prevFilter));
  const prevTotal=prevOrders.reduce((a,o)=>a+Number(o.total||0),0);
  const diff=filteredTotal-prevTotal;
  const pct=prevTotal>0?(diff/prevTotal)*100:null;

  return {
    now,
    filter,
    year:refYear,
    month:refMonth,
    orders,
    filteredOrders,
    filteredOrdersCount:filteredOrders.length,
    filteredTotal,
    byCat,
    byProduct,
    last3,
    annual,
    annualTotal,
    prevTotal,
    diff,
    pct,
    currentLabel:reportFilterLabel(filter),
    previousLabel:reportFilterLabel(prevFilter)
  };
}

function reportColumnChart(items,valueFormatter=money){
  const safe=(items||[]).map(x=>({
    label:String(x.label??''),
    value:Number(x.value)||0
  }));

  const max=Math.max(0,...safe.map(x=>x.value));

  if(!safe.length){
    return `<div class="report-chart-empty">Sem dados para o gráfico.</div>`;
  }

  return `<div class="modern-chart-wrap">
    <div class="modern-chart-grid">
      <span></span><span></span><span></span><span></span>
    </div>
    <div class="modern-column-chart">
      ${safe.map((x,index)=>{
        const height=max>0?Math.max(5,(x.value/max)*100):5;
        return `<div class="modern-column-item">
          <div class="modern-column-value">${esc(valueFormatter(x.value))}</div>
          <div class="modern-column-track">
            <div class="modern-column-bar" style="height:${height}%">
              <div class="modern-column-glow"></div>
            </div>
          </div>
          <div class="modern-column-label" title="${esc(x.label)}">${esc(x.label)}</div>
        </div>`;
      }).join('')}
    </div>
  </div>`;
}
function reportSummaryChart(d){
  return reportColumnChart([
    {label:'Vendas no mês',value:d.monthTotal},
    {label:'Pedidos no mês',value:d.monthOrdersCount},
    {label:'Total no ano',value:d.annualTotal},
    {label:'Mesmo mês ano anterior',value:d.prevTotal}
  ],v=>money(v));
}




function reportsAdmin(){
  const d=buildReportsData();
  const itineraryStats=itineraryStatsData();
  const itineraryMonthItems=(itineraryStats.byMonth||[]).map(x=>({label:x.label||x.month||'',value:Number(x.value||x.count||0)}));

  const pdfHeader=(value)=>`<div class="report-export-row">
    <label class="report-select">
      <input class="report-pdf-check" type="checkbox" value="${value}">
      Selecionar para PDF
    </label>
    <button class="btn" onclick="exportSingleReportSection('${value}')">PDF deste quadro</button>
  </div>`;

  const catItems=Object.entries(d.byCat).sort((a,b)=>b[1]-a[1]).map(([label,value])=>({label,value}));
  const productItems=Object.entries(d.byProduct).sort((a,b)=>b[1]-a[1]).map(([label,value])=>({label,value}));
  const last3Items=d.last3.map(x=>({label:x.label,value:x.value}));
  const annualItems=d.annual.map(x=>({label:x.label,value:x.value}));
  const previousItems=[
    {label:d.previousLabel,value:d.prevTotal},
    {label:d.currentLabel,value:d.filteredTotal}
  ];

  const f=d.filter;
  const months=[
    ['','Todos'],
    ['1','Janeiro'],['2','Fevereiro'],['3','Março'],['4','Abril'],
    ['5','Maio'],['6','Junho'],['7','Julho'],['8','Agosto'],
    ['9','Setembro'],['10','Outubro'],['11','Novembro'],['12','Dezembro']
  ];

  return `<div class="row between">
    <div>
      <h2>Relatórios</h2>
      <p class="muted">Filtro aplicado: ${esc(d.currentLabel)}</p>
    </div>
    <div class="row">
      <button class="btn" onclick="exportReport()">Exportar CSV</button>
      <button class="btn primary" onclick="exportSelectedReportSections()">Gerar PDF dos selecionados</button>
    </div>
  </div>

  <div class="card report-filter-box">
    <div class="report-filter-grid">
      <div class="field">
        <label>Dia</label>
        <select onchange="window.reportFilterDay=this.value;render()">
          <option value="">Todos</option>
          ${Array.from({length:31},(_,i)=>i+1).map(day=>`<option value="${day}" ${String(day)===f.day?'selected':''}>${day}</option>`).join('')}
        </select>
      </div>

      <div class="field">
        <label>Mês</label>
        <select onchange="window.reportFilterMonth=this.value;render()">
          ${months.map(([value,label])=>`<option value="${value}" ${value===f.month?'selected':''}>${label}</option>`).join('')}
        </select>
      </div>

      <div class="field">
        <label>Ano</label>
        <input type="number" min="2000" max="2100" placeholder="Todos"
          value="${esc(f.year)}"
          onchange="window.reportFilterYear=this.value;render()">
      </div>
    </div>

    <div class="row between" style="margin-top:10px">
      <div class="muted">Os três filtros podem ser combinados ou usados isoladamente.</div>
      <div class="row">
        <button class="btn" onclick="window.reportFilterDay='';window.reportFilterMonth='';window.reportFilterYear='';render()">Limpar filtros</button>
        <button class="btn" onclick="selectAllReportBoxes()">Selecionar tudo</button>
        <button class="btn" onclick="clearAllReportBoxes()">Desmarcar tudo</button>
      </div>
    </div>
  </div>

  <div class="card report-box" style="margin-bottom:14px">
    ${pdfHeader('summary')}
    <h3>Resumo do período</h3>
    <div class="grid">
      <div><div class="muted">Total consolidado</div><div class="kpi">${money(d.filteredTotal)}</div></div>
      <div><div class="muted">Pedidos no período</div><div class="kpi">${d.filteredOrdersCount}</div></div>
      <div><div class="muted">Total no ano de referência</div><div class="kpi">${money(d.annualTotal)}</div></div>
      <div><div class="muted">Mesmo período no ano anterior</div><div class="kpi">${money(d.prevTotal)}</div></div>
    </div>
    <h4 class="chart-title">Gráfico de colunas</h4>
    ${reportColumnChart([
      {label:'Vendas no período',value:d.filteredTotal},
      {label:'Total no ano',value:d.annualTotal},
      {label:'Ano anterior',value:d.prevTotal}
    ])}
  </div>

  <div class="grid">
    <div class="card report-box">
      ${pdfHeader('categories')}
      <h3>Total de vendas por categoria</h3>
      ${catItems.length
        ?catItems.map(x=>`<div class="row between"><span>${esc(x.label)}</span><b>${money(x.value)}</b></div>`).join('')
        :'<p class="muted">Sem vendas no período.</p>'}
      <h4 class="chart-title">Gráfico de colunas</h4>
      ${reportColumnChart(catItems)}
    </div>

    <div class="card report-box">
      ${pdfHeader('products')}
      <h3>Total de vendas por produto</h3>
      ${productItems.length
        ?productItems.map(x=>`<div class="row between"><span>${esc(x.label)}</span><b>${money(x.value)}</b></div>`).join('')
        :'<p class="muted">Sem vendas no período.</p>'}
      <h4 class="chart-title">Gráfico de colunas</h4>
      ${reportColumnChart(productItems)}
    </div>
  </div>

  <div class="card report-box" style="margin-top:14px">
    ${pdfHeader('last3')}
    <h3>Comparativo dos últimos 3 meses</h3>
    <table>
      <tr><th>Mês</th><th>Total vendido</th></tr>
      ${d.last3.map(x=>`<tr><td>${esc(x.label)}</td><td><b>${money(x.value)}</b></td></tr>`).join('')}
    </table>
    <h4 class="chart-title">Gráfico de colunas</h4>
    ${reportColumnChart(last3Items)}
  </div>

  <div class="card report-box" style="margin-top:14px">
    ${pdfHeader('annual')}
    <h3>Comparativo anual - ${d.year}</h3>
    <table>
      <tr><th>Mês</th><th>Total vendido</th></tr>
      ${d.annual.map(x=>`<tr><td>${esc(x.label)}</td><td>${money(x.value)}</td></tr>`).join('')}
      <tr><th>Total do ano</th><th>${money(d.annualTotal)}</th></tr>
    </table>
    <h4 class="chart-title">Gráfico de colunas</h4>
    ${reportColumnChart(annualItems)}
  </div>

  <div class="card report-box" style="margin-top:14px">
    ${pdfHeader('previous')}
    <h3>Comparativo com o mesmo período do ano anterior</h3>
    <table>
      <tr><th>Período</th><th>Vendas</th></tr>
      <tr><td>${esc(d.previousLabel)}</td><td>${money(d.prevTotal)}</td></tr>
      <tr><td>${esc(d.currentLabel)}</td><td>${money(d.filteredTotal)}</td></tr>
    </table>
    <div class="${d.diff>=0?'success':'danger'}" style="margin-top:12px">
      Diferença: <b>${money(d.diff)}</b>${d.pct===null?'':` • Variação: <b>${d.pct.toFixed(1)}%</b>`}
    </div>
    <h4 class="chart-title">Gráfico de colunas</h4>
    ${reportColumnChart(previousItems)}
  </div>
  <div class="card report-box" style="margin-top:14px">
    ${pdfHeader('itineraryMonthly')}
    <h3>Roteiros criados</h3>
    <div class="muted">Total: ${Number(itineraryStats.total||0)} • Mês atual: ${Number(itineraryStats.month||0)}</div>
    ${itineraryMonthItems.length?reportColumnChart(itineraryMonthItems,v=>String(v)):'<div class="muted">Ainda não há dados de roteiros.</div>'}
  </div>
  <div class="card report-box" style="margin-top:14px">
    ${pdfHeader('itineraryPlaces')}
    <h3>Locais mais escolhidos nos roteiros</h3>
    ${(itineraryStats.topPlaces||[]).length?reportColumnChart((itineraryStats.topPlaces||[]).slice(0,10).map(x=>({label:x.name||x.label||'',value:Number(x.count||x.value||0)})),v=>String(v)):'<div class="muted">Ainda não há dados de roteiros.</div>'}
  </div>`;
}
function exportReport(){let rows=[['Pedido','Cliente','Unidade','Data','Total','Status'],...db.orders.map(o=>[o.id,o.client.name,o.client.roomName,new Date(o.createdAt).toLocaleDateString('pt-BR'),o.total,o.status])],csv=rows.map(r=>r.map(v=>`"${String(v).replaceAll('"','""')}"`).join(';')).join('\n'),a=document.createElement('a');a.href=URL.createObjectURL(new Blob(['\ufeff'+csv],{type:'text/csv'}));a.download='relatorio-versatil.csv';a.click()}


function toggleAdminPasswordVisibility(){
  const input=document.getElementById('adminAccountPassword');
  const btn=document.getElementById('adminAccountEye');
  if(!input||!btn)return;
  const show=input.type==='password';
  input.type=show?'text':'password';
  btn.textContent=show?'🙈':'👁';
}

async function saveAdminAccount(){
  const name=document.getElementById('adminAccountName')?.value.trim()||db.account?.name||'Admin';
  const password=document.getElementById('adminAccountPassword')?.value||db.account?.password||'';
  const recoveryEmail=document.getElementById('adminAccountRecovery')?.value.trim()||'';
  const purchaseEmails=Array.from(document.querySelectorAll('.adminPurchaseEmail'))
    .map(x=>x.value.trim())
    .filter(Boolean);

  db.account=db.account||{};
  db.account.name=name;
  db.account.password=password;
  db.account.recoveryEmail=recoveryEmail;
  db.account.purchaseEmails=purchaseEmails;

  save();
  await publishPublicDataToCentral(false);

  const status=document.getElementById('adminAccountSavedStatus');
  if(status){
    status.textContent='Conta salva com sucesso.';
    status.classList.add('show');
    setTimeout(()=>status.classList.remove('show'),2200);
  }
}

function accountAdmin(){
  const a=db.account||{};
  const emails=(a.purchaseEmails&&a.purchaseEmails.length?a.purchaseEmails:['anibal@starlis.com.br','versatil@starlis.com.br']);

  return `<div class="card">
    <h2>Conta</h2>

    <div class="grid">
      <div class="field">
        <label>Nome</label>
        <input id="adminAccountName" value="${esc(a.name||'Admin')}">
      </div>

      <div class="field">
        <label>Senha</label>
        <div class="account-password-wrap">
          <input id="adminAccountPassword" type="password" value="${esc(a.password||'')}">
          <button id="adminAccountEye" class="account-eye-btn" type="button" onclick="toggleAdminPasswordVisibility()" title="Mostrar/ocultar senha">👁</button>
        </div>
      </div>

      <div class="field">
        <label>E-mail de recuperação</label>
        <input id="adminAccountRecovery" type="email" value="${esc(a.recoveryEmail||'anibal@starlis.com.br')}">
      </div>

      <div class="field">
        <label>E-mails para recebimento de pedidos</label>
        <div class="admin-purchase-emails">
          ${emails.map(email=>`<input class="adminPurchaseEmail" type="email" value="${esc(email)}" style="margin-bottom:6px">`).join('')}
          <button class="btn small" type="button" onclick="addAdminPurchaseEmailField()">+ E-mail</button>
        </div>
      </div>
    </div>

    <div class="row between" style="margin-top:16px">
      <button class="btn" onclick="recoverAdmin()">Recuperar senha</button>
      <button class="btn primary" onclick="withVersatilLoading('Salvando conta…',saveAdminAccount)">Salvar</button>
    </div>

    <div id="adminAccountSavedStatus" class="account-saved-status">Conta salva com sucesso.</div>
  </div>`;
}

function addAdminPurchaseEmailField(){
  const box=document.querySelector('.admin-purchase-emails');
  if(!box)return;
  const input=document.createElement('input');
  input.className='adminPurchaseEmail';
  input.type='email';
  input.placeholder='novo@email.com';
  input.style.marginBottom='6px';
  box.insertBefore(input,box.lastElementChild);
}
function saveAccount(){
  db.account.adminName=acc_name.value.trim()||'Anibal';
  db.account.adminPassword=acc_pass.value||db.account.adminPassword;
  db.account.recoveryEmail='anibal@starlis.com.br';
  db.account.adminEmails=['anibal@starlis.com.br','versatil@starlis.com.br'];
  save();alert('Conta atualizada. E-mail principal: anibal@starlis.com.br. E-mail secundário: versatil@starlis.com.br.');render();
}



function startPublicDataAutoSync(){
  // Atualiza quando a aba/app volta ao primeiro plano.
  document.addEventListener('visibilitychange',()=>{
    if(document.visibilityState==='visible')loadCentralData({force:true,quiet:true});
  });

  window.addEventListener('focus',()=>{
    loadCentralData({force:true,quiet:true});
  });

  window.addEventListener('online',()=>{
    loadCentralData({force:true});
  });

  // Mantém computador, navegador e PWA alinhados sem exigir recarga manual.
  setInterval(()=>{
    if(document.visibilityState==='visible'&&navigator.onLine){
      loadCentralData({force:true,quiet:true});
    }
  },60000);
}

function bootVersatilV140(){
  const mount=document.getElementById('app');

  if(!mount){
    console.error('APP SERVIÇOS VERSÁTIL: elemento #app não encontrado.');
    return;
  }

  try{
    render();
    loadCentralData({force:true});
    startPublicDataAutoSync();
    console.info('APP SERVIÇOS VERSÁTIL - Versão 1.70 carregada.');
  }catch(err){
    console.error('Falha ao iniciar APP SERVIÇOS VERSÁTIL:',err);

    mount.innerHTML=`
      <div style="max-width:620px;margin:40px auto;padding:20px;font-family:Arial,sans-serif;background:#fff;border:1px solid #d7e1ea;border-radius:14px">
        <h2 style="margin-top:0">APP SERVIÇOS VERSÁTIL</h2>
        <p>O aplicativo encontrou um erro durante a inicialização.</p>
        <p style="font-size:12px;color:#66788a;overflow-wrap:anywhere">${String(err&&err.message?err.message:err)}</p>
        <button onclick="location.reload()" style="padding:10px 16px;border:0;border-radius:8px;background:#0f4c81;color:#fff;cursor:pointer">Tentar novamente</button>
      </div>`;
  }
}

if(document.readyState==='loading'){
  document.addEventListener('DOMContentLoaded',bootVersatilV140,{once:true});
}else{
  bootVersatilV140();
}

function cuiabaLocalEpoch(date,time='00:00'){
  const [y,m,d]=String(date).split('-').map(Number);
  const [hh,mm]=String(time).split(':').map(Number);
  let guess=Date.UTC(y,m-1,d,hh,mm,0);
  for(let k=0;k<3;k++){
    const parts=new Intl.DateTimeFormat('en-CA',{
      timeZone:'America/Cuiaba',year:'numeric',month:'2-digit',day:'2-digit',
      hour:'2-digit',minute:'2-digit',hour12:false
    }).formatToParts(new Date(guess));
    const n=t=>Number(parts.find(p=>p.type===t)?.value||0);
    const represented=Date.UTC(n('year'),n('month')-1,n('day'),n('hour'),n('minute'),0);
    const desired=Date.UTC(y,m-1,d,hh,mm,0);
    guess+=desired-represented;
  }
  return guess;
}
function periodStartTimeFor24h(p,period=''){
  if(p?.id==='diarista')return '09:00';
  const v=String(period||'').toLowerCase();
  if(v.includes('tarde')||v.includes('afternoon'))return '13:00';
  if(v.includes('manha')||v.includes('manhã')||v.includes('morning'))return '06:00';
  return '09:00';
}
function bookingMeets24h(p,date,period=''){
  if(!date)return false;
  return cuiabaLocalEpoch(date,periodStartTimeFor24h(p,period)) >= Date.now()+24*60*60*1000;
}
function firstAllowedDate24h(p){
  let d=today();
  for(let i=0;i<4;i++){
    if(bookingMeets24h(p,d,''))return d;
    const x=new Date(d+'T12:00:00');x.setDate(x.getDate()+1);d=x.toISOString().slice(0,10);
  }
  return d;
}

