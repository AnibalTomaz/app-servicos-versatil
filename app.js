const KEY='versatil_services_v1_8';
const GOOGLE_APPS_SCRIPT_URL="https://script.google.com/macros/s/AKfycbxxn_Oo355Xlel9W6Oc3SKNFIJeesZc0jyTVesvUDdv8LSEDtFq8p-IlHjRvL_JFCvREw/exec";
const APP_VERSION='1.67';
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
 ],leisureGuide:[{"id":"lz_002","parentId":"","type":"group","name":"TURISMO","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":2},{"id":"lz_003","parentId":"lz_002","type":"group","name":"Parques","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":3},{"id":"lz_004","parentId":"lz_003","type":"place","name":"Parque Estadual Mãe Bonifácia","description":"","distance":"aprox. 1,8 km","phone":"(65) 3623-4965","imageUrl":"","mapQuery":"Parque Estadual Mãe Bonifácia, Cuiabá MT","sort":4},{"id":"lz_005","parentId":"lz_003","type":"place","name":"Parque das Águas \"Seo Fiote\"","description":"","distance":"aprox. 4,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Parque das Águas \"Seo Fiote\", Cuiabá MT","sort":5},{"id":"lz_006","parentId":"lz_003","type":"place","name":"Parque Tia Nair","description":"","distance":"aprox. 6,5 km","phone":"(65) 3645-6279","imageUrl":"","mapQuery":"Parque Tia Nair, Cuiabá MT","sort":6},{"id":"lz_007","parentId":"lz_003","type":"place","name":"Parque Estadual Zé Bolo Flô","description":"","distance":"aprox. 8,5 km","phone":"(65) 98464-8416","imageUrl":"","mapQuery":"Parque Estadual Zé Bolo Flô, Cuiabá MT","sort":7},{"id":"lz_008","parentId":"lz_003","type":"place","name":"Parque Estadual Massairo Okamura","description":"","distance":"aprox. 5,2 km","phone":"(65) 99328-0670","imageUrl":"","mapQuery":"Parque Estadual Massairo Okamura, Cuiabá MT","sort":8},{"id":"lz_009","parentId":"lz_003","type":"place","name":"Parque da Família","description":"","distance":"aprox. 6,0 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Parque da Família, Cuiabá MT","sort":9},{"id":"lz_010","parentId":"lz_003","type":"place","name":"Parque Morro da Luz","description":"","distance":"aprox. 2,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Parque Morro da Luz, Cuiabá MT","sort":10},{"id":"lz_011","parentId":"lz_003","type":"place","name":"Horto Florestal Tote Garcia","description":"","distance":"aprox. 7,2 km","phone":"(65) 3313-3157","imageUrl":"","mapQuery":"Horto Florestal Tote Garcia, Cuiabá MT","sort":11},{"id":"lz_012","parentId":"lz_003","type":"place","name":"Parque da Nascente","description":"","distance":"aprox. 5,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Parque da Nascente, Cuiabá MT","sort":12},{"id":"lz_013","parentId":"lz_003","type":"place","name":"Parque de Exposições Senador Jonas Pinheiro","description":"","distance":"aprox. 4,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Parque de Exposições Senador Jonas Pinheiro, Cuiabá MT","sort":13},{"id":"lz_014","parentId":"lz_002","type":"group","name":"museus","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":14},{"id":"lz_015","parentId":"lz_014","type":"place","name":"Museu de História Natural de Mato Grosso (Casa Dom Aquino)","description":"focado em paleontologia, arqueologia e etnologia, exibindo fósseis e acervos pré-históricos da região.","distance":"aprox. 5,2 km","phone":"(65) 3634-4858","imageUrl":"","mapQuery":"Museu de História Natural de Mato Grosso (Casa Dom Aquino), Cuiabá MT","sort":15},{"id":"lz_016","parentId":"lz_014","type":"place","name":"Museu de Arte Sacra de Mato Grosso","description":"localizado no antigo Seminário da Conceição, reúne acervo religioso do século XVIII em diante.","distance":"aprox. 3,0 km","phone":"(65) 3056-1373","imageUrl":"","mapQuery":"Museu de Arte Sacra de Mato Grosso, Cuiabá MT","sort":16},{"id":"lz_017","parentId":"lz_014","type":"place","name":"Museu do Morro da Caixa d'Água Velha","description":"ocupa os antigos reservatórios subterrâneos do século XIX e abriga exposições de arte e acervos históricos.","distance":"aprox. 2,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Museu do Morro da Caixa d'Água Velha, Cuiabá MT","sort":17},{"id":"lz_018","parentId":"lz_014","type":"place","name":"Museu da Imagem e do Som de Cuiabá (MISC)","description":"dedicado à preservação do patrimônio audiovisual e fotográfico da cidade.","distance":"aprox. 2,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Museu da Imagem e do Som de Cuiabá (MISC), Cuiabá MT","sort":18},{"id":"lz_019","parentId":"lz_014","type":"place","name":"Museu Histórico de Mato Grosso","description":"resgata a história política, social e cultural do estado através de documentos e objetos históricos.","distance":"aprox. 2,6 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Museu Histórico de Mato Grosso, Cuiabá MT","sort":19},{"id":"lz_020","parentId":"lz_014","type":"place","name":"Museu Rondon de Etnologia e Arqueologia (UFMT)","description":"voltado para a preservação e estudo das culturas e povos indígenas.","distance":"aprox. 5,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Museu Rondon de Etnologia e Arqueologia (UFMT), Cuiabá MT","sort":20},{"id":"lz_021","parentId":"lz_014","type":"place","name":"Museu de Arte e Cultura Popular (MACP/UFMT)","description":"reúne um rico acervo de obras plásticas e artesanato da cultura popular mato-grossense.","distance":"aprox. 5,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Museu de Arte e Cultura Popular (MACP/UFMT), Cuiabá MT","sort":21},{"id":"lz_022","parentId":"lz_014","type":"place","name":"Museu do Rio Cuiabá \"Hid Alfredo Scaff\"","description":"situado no antigo Mercado do Peixe, às margens do rio, com acervo sobre a história do bairro do Porto e do rio Cuiabá.","distance":"aprox. 4,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Museu do Rio Cuiabá \"Hid Alfredo Scaff\", Cuiabá MT","sort":22},{"id":"lz_023","parentId":"lz_014","type":"place","name":"Museu Residência dos Governadores","description":"casarão histórico que foi moradia oficial de ex-governadores e hoje expõe mobiliário e acervo da época.","distance":"aprox. 3,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Museu Residência dos Governadores, Cuiabá MT","sort":23},{"id":"lz_024","parentId":"lz_014","type":"place","name":"Museu de Minerais, Rochas e Fósseis (UFMT)","description":"voltado ao estudo geocientífico com amostras registradas de minerais e fósseis.","distance":"aprox. 5,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Museu de Minerais, Rochas e Fósseis (UFMT), Cuiabá MT","sort":24},{"id":"lz_025","parentId":"lz_014","type":"place","name":"Museu das Bonecas e Brinquedos","description":"coleção particular com acervo de bonecas antigas e brinquedos clássicos.","distance":"aprox. 4,0 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Museu das Bonecas e Brinquedos, Cuiabá MT","sort":25},{"id":"lz_026","parentId":"lz_002","type":"group","name":"Aquários","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":26},{"id":"lz_027","parentId":"lz_026","type":"place","name":"Aquário Municipal Justino Malheiros","description":"situado no bairro Porto (às margens do rio Cuiabá, ao lado do Museu do Rio), abriga dezenas de espécies de peixes nativos dos biomas de Mato Grosso, como o Pantanal e a Amazônia (incluindo espécies como pirarucu, dourado, tucunaré e jaú).","distance":"aprox. 4,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Aquário Municipal Justino Malheiros, Cuiabá MT","sort":27},{"id":"lz_028","parentId":"lz_002","type":"group","name":"Marcos geográficos","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":28},{"id":"lz_029","parentId":"lz_028","type":"place","name":"Centro Geodésico da América do Sul","description":"localizado na Praça Pascoal Moreira Cabral, indica o ponto equidistante entre os oceanos Atlântico e Pacífico, determinado pelo Marechal Cândido Rondon.","distance":"aprox. 2,6 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Centro Geodésico da América do Sul, Cuiabá MT","sort":29},{"id":"lz_030","parentId":"lz_028","type":"place","name":"Rio Cuiabá","description":"principal curso d'água que corta a cidade, divisor natural de municípios e via histórica de integração do Pantanal.","distance":"aprox. 4,0 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Rio Cuiabá, Cuiabá MT","sort":30},{"id":"lz_031","parentId":"lz_028","type":"place","name":"Morro da Caixa d'Água","description":"ponto elevado no centro urbano que serviu historicamente como reservatório natural e área de captação de água da cidade.","distance":"aprox. 2,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Morro da Caixa d'Água, Cuiabá MT","sort":31},{"id":"lz_032","parentId":"lz_028","type":"place","name":"Morro do Seminário","description":"elevação natural onde se localiza o antigo Seminário da Conceição (atual Museu de Arte Sacra), oferecendo visão panorâmica do centro histórico.","distance":"aprox. 3,0 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Morro do Seminário, Cuiabá MT","sort":32},{"id":"lz_033","parentId":"lz_028","type":"place","name":"Morro da Luz","description":"área de relevo elevado coberta por mata nativa no coração do perímetro urbano.","distance":"aprox. 2,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Morro da Luz, Cuiabá MT","sort":33},{"id":"lz_034","parentId":"lz_028","type":"place","name":"Morro de Santo Antônio","description":"elevação cônica de grande destaque na paisagem do Vale do Rio Cuiabá (localizada no município vizinho de Santo Antônio de Leverger, a cerca de 25 km do centro).","distance":"aprox. 35 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Morro de Santo Antônio, Cuiabá MT","sort":34},{"id":"lz_035","parentId":"lz_028","type":"place","name":"Paredões da Chapada dos Guimarães","description":"formação de escarpas avermelhadas da bacia do Paraná que delimitam a transição entre o planalto e a depressão cuiabana no horizonte da cidade.","distance":"aprox. 65 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Paredões da Chapada dos Guimarães, Cuiabá MT","sort":35},{"id":"lz_036","parentId":"lz_002","type":"group","name":"Locais turísticos","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":36},{"id":"lz_037","parentId":"lz_036","type":"place","name":"Centro Histórico e Catedral Basílica do Bom Jesus","description":"conjunto de casarios coloniais, praças históricas e o principal cartão-postal religioso da capital.","distance":"aprox. 2,6 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Centro Histórico e Catedral Basílica do Bom Jesus, Cuiabá MT","sort":37},{"id":"lz_038","parentId":"lz_036","type":"place","name":"Mercado do Porto","description":"espaço tradicional de gastronomia regional, venda de pescados, temperos e artesanato mato-grossense.","distance":"aprox. 4,0 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Mercado do Porto, Cuiabá MT","sort":38},{"id":"lz_039","parentId":"lz_036","type":"place","name":"Parque das Águas e Parque Mãe Bonifácia","description":"áreas de lazer urbano com trilhas, fauna local e atrações como o Show das Águas.","distance":"aprox. 1,8 a 4,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Parque das Águas e Parque Mãe Bonifácia, Cuiabá MT","sort":39},{"id":"lz_040","parentId":"lz_036","type":"place","name":"Orla do Porto","description":"calçadão às margens do Rio Cuiabá com restaurantes e museus culturais ao redor.","distance":"aprox. 4,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Orla do Porto, Cuiabá MT","sort":40},{"id":"lz_041","parentId":"lz_036","type":"group","name":"Atrações em Nobres (Vila Bom Jardim e Região)","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":41},{"id":"lz_042","parentId":"lz_041","type":"place","name":"Aquário Encantado e Rio Salobra","description":"lagoa azul-cristalina em meio à mata para flutuação com centenas de peixes.","distance":"aprox. 140 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Aquário Encantado e Rio Salobra, Cuiabá MT","sort":42},{"id":"lz_043","parentId":"lz_041","type":"place","name":"Cachoeira da Serra Azul","description":"queda d'água de 45 metros com poço azul para banho e acesso por tirolesa.","distance":"aprox. 45 m","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Cachoeira da Serra Azul, Cuiabá MT","sort":43},{"id":"lz_044","parentId":"lz_041","type":"place","name":"Lagoa das Araras","description":"ponto de observação ao entardecer para contemplar araras, maritacas e tucanos nos buritizeiros.","distance":"aprox. 145 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Lagoa das Araras, Cuiabá MT","sort":44},{"id":"lz_045","parentId":"lz_041","type":"place","name":"Reino Encantado e Estância Duto do Quebó","description":"rios cristalinos para flutuação e passeios de bóia-cross por cavernas subterrâneas.","distance":"aprox. 143 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Reino Encantado e Estância Duto do Quebó, Cuiabá MT","sort":45},{"id":"lz_046","parentId":"lz_036","type":"group","name":"Parque Nacional da Chapada dos Guimarães (\\~65 km)","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":46},{"id":"lz_047","parentId":"lz_046","type":"place","name":"Cachoeira Véu de Noiva","description":"imponente queda d'água de 86 metros em meio aos paredões.","distance":"aprox. 86 m","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Cachoeira Véu de Noiva, Cuiabá MT","sort":47},{"id":"lz_048","parentId":"lz_046","type":"place","name":"Cidade de Pedra e Mirante Morro dos Ventos","description":"vista panorâmica dos paredões de arenito avermelhado.","distance":"aprox. 75 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Cidade de Pedra e Mirante Morro dos Ventos, Cuiabá MT","sort":48},{"id":"lz_049","parentId":"lz_046","type":"place","name":"Circuito das Cachoeiras","description":"trilha que passa por diversas quedas e piscinas naturais cristalinas.","distance":"aprox. 70 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Circuito das Cachoeiras, Cuiabá MT","sort":49},{"id":"lz_050","parentId":"lz_046","type":"place","name":"Complexo Turístico da Salgadeira","description":"área de lazer estruturada para banho de rio no pé da serra.","distance":"aprox. 45 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Complexo Turístico da Salgadeira, Cuiabá MT","sort":50},{"id":"lz_051","parentId":"lz_036","type":"group","name":"Portal do Pantanal Norte — Poconé (\\~100 km)","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":51},{"id":"lz_052","parentId":"lz_051","type":"place","name":"Rodovia Transpantaneira","description":"ponto de partida para safáris fotográficos para observação de jacarés, capivaras, tuiuiús e onças-pintadas.","distance":"aprox. 100 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Rodovia Transpantaneira, Cuiabá MT","sort":52},{"id":"lz_053","parentId":"lz_051","type":"place","name":"Pousadas Pantaneiras","description":"focagem noturna, cavalgadas ecológicas e passeios de barco pelos corixos.","distance":"aprox. 110 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Pousadas Pantaneiras, Cuiabá MT","sort":53},{"id":"lz_054","parentId":"lz_036","type":"group","name":"Jaciara (\\~140 km)","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":54},{"id":"lz_055","parentId":"lz_054","type":"place","name":"Esportes de Aventura no Rio Tenente Amaral","description":"polo regional de rafting, cachoeirismo e rapel.","distance":"aprox. 145 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Esportes de Aventura no Rio Tenente Amaral, Cuiabá MT","sort":55},{"id":"lz_056","parentId":"lz_054","type":"place","name":"Cachoeira da Fumaça e Balneário Thermas","description":"quedas d'água volumosas e poços para banho.","distance":"aprox. 140 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Cachoeira da Fumaça e Balneário Thermas, Cuiabá MT","sort":56},{"id":"lz_057","parentId":"lz_036","type":"group","name":"Santo Antônio de Leverger (\\~35 km)","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":57},{"id":"lz_058","parentId":"lz_057","type":"place","name":"Morro de Santo Antônio","description":"elevação cônica tradicional para trilhas e caminhadas ecológicas.","distance":"aprox. 35 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Morro de Santo Antônio, Cuiabá MT","sort":58},{"id":"lz_059","parentId":"lz_057","type":"place","name":"Turismo Fluvial","description":"pesca esportiva e restaurantes de peixe à beira do Rio Cuiabá.","distance":"aprox. 35 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Turismo Fluvial, Cuiabá MT","sort":59},{"id":"lz_060","parentId":"","type":"group","name":"CONVENIÊNCIAS","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":60},{"id":"lz_061","parentId":"lz_060","type":"group","name":"Mercados","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":61},{"id":"lz_062","parentId":"lz_061","type":"place","name":"Mercearia / Mercado Mattozo (Mattozo Prime)","description":"tradicional comércio de bairro focado em hortifrúti, mercearia fina e cortes de carnes nobres, localizado na própria Rua Presidente Afonso Pena, no mesmo quarteirão (~100 m).","distance":"aprox. 100 m","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Mercearia / Mercado Mattozo (Mattozo Prime), Cuiabá MT","sort":62},{"id":"lz_063","parentId":"lz_061","type":"place","name":"Supermercado Big Lar (Unidade Miguel Sutil)","description":"referência no bairro Quilombo para hortifrúti fresco, padaria artesanal e alimentos importados (~600 m).","distance":"aprox. 600 m","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Supermercado Big Lar (Unidade Miguel Sutil), Cuiabá MT","sort":63},{"id":"lz_064","parentId":"lz_061","type":"place","name":"Supermercado América (Unidade Santa Helena)","description":"minimercado vizinho focado nas compras diárias de mercearia e produtos essenciais (~800 m).","distance":"aprox. 800 m","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Supermercado América (Unidade Santa Helena), Cuiabá MT","sort":64},{"id":"lz_065","parentId":"lz_061","type":"place","name":"Comper (Unidade Trevo do Santa Rosa / Av. Miguel Sutil)","description":"supermercado completo com açougue, padaria e grande variedade de itens (~1,2 km).","distance":"aprox. 1,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Comper (Unidade Trevo do Santa Rosa / Av. Miguel Sutil), Cuiabá MT","sort":65},{"id":"lz_066","parentId":"lz_061","type":"place","name":"Supermercado Dia a Dia (Unidade Miguel Sutil)","description":"formato atacarejo para compras de médio e grande porte (~1,5 km).","distance":"aprox. 1,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Supermercado Dia a Dia (Unidade Miguel Sutil), Cuiabá MT","sort":66},{"id":"lz_067","parentId":"lz_061","type":"place","name":"Comper (Unidade Av. Barão de Melgaço)","description":"loja tradicional da rede, muito próxima ao limite entre os bairros Goiabeiras e Centro (~1,8 km).","distance":"aprox. 1,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Comper (Unidade Av. Barão de Melgaço), Cuiabá MT","sort":67},{"id":"lz_068","parentId":"lz_061","type":"place","name":"Assaí Atacadista (Unidade Av. CPA / Historiador Rubens de Mendonça)","description":"hipermercado atacarejo de grande porte (~2,8 km).","distance":"aprox. 2,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Assaí Atacadista (Unidade Av. CPA / Historiador Rubens de Mendonça), Cuiabá MT","sort":68},{"id":"lz_069","parentId":"lz_061","type":"place","name":"Atacadão (Unidade Porto / Av. XV de Novembro)","description":"atacarejo tradicional com ampla variedade e foco em preços de volume (~3,5 km).","distance":"aprox. 3,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Atacadão (Unidade Porto / Av. XV de Novembro), Cuiabá MT","sort":69},{"id":"lz_070","parentId":"lz_061","type":"place","name":"Fort Atacadista (Unidade Miguel Sutil)","description":"grande loja no modelo de atacarejo com preços competitivos (~4,2 km).","distance":"aprox. 4,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Fort Atacadista (Unidade Miguel Sutil), Cuiabá MT","sort":70},{"id":"lz_071","parentId":"lz_060","type":"group","name":"Farmácias","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":71},{"id":"lz_072","parentId":"lz_071","type":"place","name":"Drogaria São Paulo (Unidade Av. Miguel Sutil)","description":"loja ampla com funcionamento 24h, grande variedades de dermocosméticos e estacionamento próprio (~700 m).","distance":"aprox. 700 m","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Drogaria São Paulo (Unidade Av. Miguel Sutil), Cuiabá MT","sort":72},{"id":"lz_073","parentId":"lz_071","type":"place","name":"Farmácia Pague Menos (Unidade Av. Getúlio Vargas / Goiabeiras)","description":"excelente opção com programa de descontos e atendimento rápido em via principal (~1,1 km).","distance":"aprox. 1,1 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Farmácia Pague Menos (Unidade Av. Getúlio Vargas / Goiabeiras), Cuiabá MT","sort":73},{"id":"lz_074","parentId":"lz_071","type":"place","name":"Droga Raia (Unidade Av. José Monteiro de Figueiredo / Goiabeiras)","description":"localizada próxima ao Shopping Goiabeiras, conta com linha completa de medicamentos e produtos de cuidados pessoais (~1,2 km).","distance":"aprox. 1,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Droga Raia (Unidade Av. José Monteiro de Figueiredo / Goiabeiras), Cuiabá MT","sort":74},{"id":"lz_075","parentId":"lz_071","type":"place","name":"Drogasil (Unidade Av. Isaac Póvoas / Centro)","description":"farmácia tradicional em corredor movimentado, com programa de fidelidade e fácil acesso (~1,5 km).","distance":"aprox. 1,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Drogasil (Unidade Av. Isaac Póvoas / Centro), Cuiabá MT","sort":75},{"id":"lz_076","parentId":"lz_071","type":"place","name":"Farmácia Preço Popular (Unidade Centro / Tenente Coronel Duarte)","description":"focada em medicamentos genéricos e preços mais acessíveis (~2,1 km).","distance":"aprox. 2,1 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Farmácia Preço Popular (Unidade Centro / Tenente Coronel Duarte), Cuiabá MT","sort":76},{"id":"lz_077","parentId":"lz_060","type":"group","name":"Posto de combustível","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":77},{"id":"lz_078","parentId":"lz_077","type":"place","name":"Auto Posto Miguel Sutil / Vip","description":"localizado na própria margem da via expressa no limite do bairro Quilombo (~500 m).","distance":"aprox. 500 m","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Auto Posto Miguel Sutil / Vip, Cuiabá MT","sort":78},{"id":"lz_079","parentId":"lz_077","type":"place","name":"Posto Shell / Santa Marta","description":"opção completa com combustível aditivado e loja de conveniência próximo ao trevo do Santa Rosa (~1,1 km).","distance":"aprox. 1,1 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Posto Shell / Santa Marta, Cuiabá MT","sort":79},{"id":"lz_080","parentId":"lz_077","type":"place","name":"Posto Petrobras / Millenium","description":"localizado na Miguel Sutil com estrutura para abastecimento rápido e troca de óleo (~1,8 km).","distance":"aprox. 1,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Posto Petrobras / Millenium, Cuiabá MT","sort":80},{"id":"lz_081","parentId":"lz_077","type":"place","name":"Posto Shell / Rede Conti (Rua Estêvão de Mendonça)","description":"excelente localização no coração do Goiabeiras, servindo a quem transita entre o Quilombo e o Centro (~900 m).","distance":"aprox. 900 m","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Posto Shell / Rede Conti (Rua Estêvão de Mendonça), Cuiabá MT","sort":81},{"id":"lz_082","parentId":"lz_077","type":"place","name":"Posto Ipiranga (Av. Getúlio Vargas)","description":"com loja AmPm e serviços completos em uma das principais vias arteriais da capital (~1,3 km).","distance":"aprox. 1,3 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Posto Ipiranga (Av. Getúlio Vargas), Cuiabá MT","sort":82},{"id":"lz_083","parentId":"lz_077","type":"place","name":"Auto Posto Monte Líbano (Av. República do Líbano)","description":"localizado na saída para o bairro Monte Líbano / Rodoviária (~1,6 km).","distance":"aprox. 1,6 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Auto Posto Monte Líbano (Av. República do Líbano), Cuiabá MT","sort":83},{"id":"lz_084","parentId":"lz_077","type":"place","name":"Posto Petrobras / Papai Auto Posto (Rua Marechal Deodoro)","description":"posto bem estruturado no corredor que liga o centro ao setor norte (~2,2 km).","distance":"aprox. 2,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Posto Petrobras / Papai Auto Posto (Rua Marechal Deodoro), Cuiabá MT","sort":84},{"id":"lz_085","parentId":"lz_060","type":"group","name":"Shoppings","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":85},{"id":"lz_086","parentId":"lz_085","type":"place","name":"Shopping Estação Cuiabá","description":"o mais recente e moderno da capital, localizado na Av. Miguel Sutil; conta com amplo mix de lojas, cinema, alameda gourmet com restaurantes prestigiados e estrutura pet friendly.","distance":"aprox. 3,1 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Shopping Estação Cuiabá, Cuiabá MT","sort":86},{"id":"lz_087","parentId":"lz_085","type":"place","name":"Goiabeiras Shopping","description":"shopping tradicional e sofisticado localizado no bairro Goiabeiras, focado em marcas de alto padrão, serviços, opções gastronômicas e cinema.","distance":"aprox. 1,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Goiabeiras Shopping, Cuiabá MT","sort":87},{"id":"lz_088","parentId":"lz_085","type":"place","name":"Pantanal Shopping","description":"grande centro de compras e lazer localizado na Av. Historiador Rubens de Mendonça (Av. do CPA), com grande variedade de lojas âncoras, praça de alimentação e cinema.","distance":"aprox. 4,6 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Pantanal Shopping, Cuiabá MT","sort":88},{"id":"lz_089","parentId":"lz_085","type":"place","name":"Shopping 3 Américas","description":"localizado no bairro Jardim das Américas, atende a região universitária e conta com cinema, opções de lazer, serviços e praça de alimentação completa.","distance":"aprox. 5,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Shopping 3 Américas, Cuiabá MT","sort":89},{"id":"lz_090","parentId":"lz_060","type":"group","name":"Mecânico","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":90},{"id":"lz_091","parentId":"lz_090","type":"place","name":"Auto Mecânica Quilombo","description":"oficina tradicional de bairro focada em reparos mecânicos gerais, motor e câmbio (~600 m).","distance":"aprox. 600 m","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Auto Mecânica Quilombo, Cuiabá MT","sort":91},{"id":"lz_092","parentId":"lz_090","type":"place","name":"Oficina Auto Técnica (Região Central / Goiabeiras)","description":"especializada em mecânica de veículos nacionais e importados, ar-condicionado e parte elétrica (~1,4 km).","distance":"aprox. 1,4 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Oficina Auto Técnica (Região Central / Goiabeiras), Cuiabá MT","sort":92},{"id":"lz_093","parentId":"lz_090","type":"place","name":"Mecânica Ponto Certo (Jardim América)","description":"atende a região com serviços de suspensão, embreagem, motor e diagnóstico preventivo (~1,7 km).","distance":"aprox. 1,7 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Mecânica Ponto Certo (Jardim América), Cuiabá MT","sort":93},{"id":"lz_094","parentId":"lz_090","type":"place","name":"Bosch Car Service (Unidade Miguel Sutil)","description":"oficina multimarcas especializada em injeção eletrônica, diagnóstico computadorizado, freios e suspensão (~800 m).","distance":"aprox. 800 m","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Bosch Car Service (Unidade Miguel Sutil), Cuiabá MT","sort":94},{"id":"lz_095","parentId":"lz_090","type":"place","name":"Mecânica e Centro Automotivo Goiabeiras","description":"focada em manutenção preventiva, troca de óleo, alinhamento, balanceamento e mecânica geral (~1,1 km).","distance":"aprox. 1,1 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Mecânica e Centro Automotivo Goiabeiras, Cuiabá MT","sort":95},{"id":"lz_096","parentId":"lz_090","type":"place","name":"Bono Pneus (Unidade Miguel Sutil / Santa Rosa)","description":"centro automotivo especializado em pneus, alinhamento, suspensão, freios e amortecedores (~1,3 km).","distance":"aprox. 1,3 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Bono Pneus (Unidade Miguel Sutil / Santa Rosa), Cuiabá MT","sort":96},{"id":"lz_097","parentId":"lz_090","type":"place","name":"Dpaschoal (Unidade Av. Miguel Sutil)","description":"especializada em revisão de freios, suspensão, pneus e troca de óleo em via de fácil acesso (~1,5 km).","distance":"aprox. 1,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Dpaschoal (Unidade Av. Miguel Sutil), Cuiabá MT","sort":97},{"id":"lz_098","parentId":"lz_060","type":"group","name":"Cartório","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":98},{"id":"lz_099","parentId":"lz_098","type":"place","name":"1º Ofício de Cuiabá (Cartório do 1º Serviço Notarial e Registral)","description":"especializado em tabelionató de notas, escrituras, procurações, testamentos e autenticações (localizado no bairro Goiabeiras / Santa Helena, ~1,2 km).","distance":"aprox. 1,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"1º Ofício de Cuiabá (Cartório do 1º Serviço Notarial e Registral), Cuiabá MT","sort":99},{"id":"lz_100","parentId":"lz_098","type":"place","name":"2º Ofício de Cuiabá (Cartório do 2º Serviço Notarial e Registral - Virmondes)","description":"atuante no registro de imóveis, títulos e documentos, escrituras e firmas (localizado no bairro Goiabeiras / Centro, ~1,5 km).","distance":"aprox. 1,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"2º Ofício de Cuiabá (Cartório do 2º Serviço Notarial e Registral - Virmondes), Cuiabá MT","sort":100},{"id":"lz_101","parentId":"lz_098","type":"place","name":"3º Ofício de Cuiabá (Cartório do 3º Serviço Notarial e Registral)","description":"focado em notas, protesto de títulos e documentos (localizado na região central, ~2,2 km).","distance":"aprox. 2,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"3º Ofício de Cuiabá (Cartório do 3º Serviço Notarial e Registral), Cuiabá MT","sort":101},{"id":"lz_102","parentId":"lz_098","type":"place","name":"Cartório do 5º Serviço Notarial e Registral (5º Ofício / Coxipó/Centro)","description":"prestação de serviços notariais, autenticações e reconhecimento de firma (localizado próximo ao perímetro central, ~2,6 km).","distance":"aprox. 2,6 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Cartório do 5º Serviço Notarial e Registral (5º Ofício / Coxipó/Centro), Cuiabá MT","sort":102},{"id":"lz_103","parentId":"lz_098","type":"place","name":"Cartório de Registro Civil das Pessoas Naturais (1ª Circunscrição)","description":"responsável por certidões de nascimento, casamento, óbito e emancipação na região central (~2,8 km).","distance":"aprox. 2,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Cartório de Registro Civil das Pessoas Naturais (1ª Circunscrição), Cuiabá MT","sort":103},{"id":"lz_104","parentId":"","type":"group","name":"ALIMENTAÇÃO","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":104},{"id":"lz_105","parentId":"lz_104","type":"group","name":"Restaurantes","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":105},{"id":"lz_106","parentId":"lz_105","type":"group","name":"Massas","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":106},{"id":"lz_107","parentId":"lz_106","type":"place","name":"re Basili – Cucina Italiana","description":"restaurante especializado em massas artesanais e receitas clássicas da culinária italiana (~1,2 km).","distance":"aprox. 1,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"re Basili – Cucina Italiana, Cuiabá MT","sort":107},{"id":"lz_108","parentId":"lz_106","type":"place","name":"Olga Cozinha Italiana","description":"restaurante focado em massas artesanais e gastronomia autêntica no Centro Norte (~1,8 km).","distance":"aprox. 1,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Olga Cozinha Italiana, Cuiabá MT","sort":108},{"id":"lz_109","parentId":"lz_106","type":"place","name":"Due Ladroni","description":"trattoria e restaurante tradicional de massas e gastronomia italiana fina (~2,2 km).","distance":"aprox. 2,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Due Ladroni, Cuiabá MT","sort":109},{"id":"lz_110","parentId":"lz_106","type":"place","name":"3 Santi Ristorante Italiano","description":"opção dedicada às massas artesanais, molhos clássicos e risotos (~2,8 km).","distance":"aprox. 2,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"3 Santi Ristorante Italiano, Cuiabá MT","sort":110},{"id":"lz_111","parentId":"lz_106","type":"place","name":"Abbraccio Cucina Italiana (Shopping Estação Cuiabá)","description":"rede inspirada nas cantinas italianas, famosa pelas massas e grelhados na Av. Miguel Sutil (~3,1 km).","distance":"aprox. 3,1 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Abbraccio Cucina Italiana (Shopping Estação Cuiabá), Cuiabá MT","sort":111},{"id":"lz_112","parentId":"lz_106","type":"place","name":"Casa Nonna (Jardim das Américas)","description":"focado em massas tradicionais, rotisseria e comida de família estilo cantina (~5,5 km).","distance":"aprox. 5,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Casa Nonna (Jardim das Américas), Cuiabá MT","sort":112},{"id":"lz_113","parentId":"lz_105","type":"group","name":"Peixes","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":113},{"id":"lz_114","parentId":"lz_113","type":"place","name":"Leme de Brasa (Região do Quilombo / Goiabeiras)","description":"oferece cortes de peixes nobres assados na brasa, além de acompanhamentos tradicionais da culinária regional (~1,1 km).","distance":"aprox. 1,1 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Leme de Brasa (Região do Quilombo / Goiabeiras), Cuiabá MT","sort":114},{"id":"lz_115","parentId":"lz_113","type":"place","name":"Peixaria e Restaurante Popular (Região Central)","description":"opção tradicional focada no prato feito de peixe frito, mojica de pintado e ensopados (~1,8 km).","distance":"aprox. 1,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Peixaria e Restaurante Popular (Região Central), Cuiabá MT","sort":115},{"id":"lz_116","parentId":"lz_113","type":"place","name":"Peixaria Leme (Orla do Porto)","description":"uma das mais tradicionais da cidade, famosa pelo rodízio de peixes e pratos típicos como ventrecha de pacu e matrinxã recheada (~3,2 km).","distance":"aprox. 3,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Peixaria Leme (Orla do Porto), Cuiabá MT","sort":116},{"id":"lz_117","parentId":"lz_113","type":"place","name":"Peixaria do Mário (Região do Porto)","description":"especializada na culinária cuiabana com peixes frescos do Rio Cuiabá, servidos fritos, assados e em ensopados (~3,4 km).","distance":"aprox. 3,4 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Peixaria do Mário (Região do Porto), Cuiabá MT","sort":117},{"id":"lz_118","parentId":"lz_113","type":"place","name":"Peixaria Porto das Águas (Orla do Porto)","description":"localizada às margens do rio, com vista panorâmica e cardápio focado em pratos regionais de água doce (~3,6 km).","distance":"aprox. 3,6 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Peixaria Porto das Águas (Orla do Porto), Cuiabá MT","sort":118},{"id":"lz_119","parentId":"lz_113","type":"place","name":"Peixaria Mirante das Águas (Várzea Grande - Ponte Sérgio Motta)","description":"restaurante amplo à beira do rio, muito conhecido pelo rodízio completo de peixes pantaneiros (~6,2 km).","distance":"aprox. 6,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Peixaria Mirante das Águas (Várzea Grande - Ponte Sérgio Motta), Cuiabá MT","sort":119},{"id":"lz_120","parentId":"lz_105","type":"group","name":"Carnes","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":120},{"id":"lz_121","parentId":"lz_120","type":"place","name":"Varadero Bar e Restô","description":"especializado em cortes nobres grelhados na brasa, filés altos e acompanhamentos refinados no bairro Goiabeiras (~1,4 km).","distance":"aprox. 1,4 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Varadero Bar e Restô, Cuiabá MT","sort":121},{"id":"lz_122","parentId":"lz_120","type":"place","name":"Grand Cru Cuiabá","description":"bistrô e vinheria com cardápio focado em carnes nobres grelhadas (como ancho e chorizo) harmonizadas com vinhos (~1,8 km).","distance":"aprox. 1,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Grand Cru Cuiabá, Cuiabá MT","sort":122},{"id":"lz_123","parentId":"lz_120","type":"place","name":"Outback Steakhouse (Shopping Estação Cuiabá)","description":"famoso pelas ribs (costela de porco com molho barbecue), steaks temperados e cortes no estilo australiano (~3,1 km).","distance":"aprox. 3,1 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Outback Steakhouse (Shopping Estação Cuiabá), Cuiabá MT","sort":123},{"id":"lz_124","parentId":"lz_120","type":"place","name":"Madero Steakhouse (Shopping Estação Cuiabá)","description":"especializado em carnes na brasa à la carte, como picanha, filé-mignon e hambúrgueres artesanais (~3,1 km).","distance":"aprox. 3,1 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Madero Steakhouse (Shopping Estação Cuiabá), Cuiabá MT","sort":124},{"id":"lz_125","parentId":"lz_120","type":"place","name":"Buteco do Manso / Parrilla","description":"focado no preparo de cortes de carne nobres no estilo parrilla argentina/uruguaia na região central/norte (~3,5 km).","distance":"aprox. 3,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Buteco do Manso / Parrilla, Cuiabá MT","sort":125},{"id":"lz_126","parentId":"lz_120","type":"place","name":"Estância Bahia Steakhouse","description":"focado exclusivamente em pratos à la carte com cortes de carnes de altíssima qualidade (~5,2 km).","distance":"aprox. 5,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Estância Bahia Steakhouse, Cuiabá MT","sort":126},{"id":"lz_127","parentId":"lz_120","type":"place","name":"Casarão 154 / Flagship (Bairro Santa Rosa)","description":"a unidade principal e mais robusta, focada em experiência completa, ambiente rústico-industrial, cortes altos na parrilla, coquetelaria e churrasco de defumação (~3,8 km).","distance":"aprox. 3,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Casarão 154 / Flagship (Bairro Santa Rosa), Cuiabá MT","sort":127},{"id":"lz_128","parentId":"lz_105","type":"group","name":"Orientais","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":128},{"id":"lz_129","parentId":"lz_128","type":"place","name":"Yumê — Cozinha Japonesa (Quilombo)","description":"conceito high-end no coração do Quilombo, focado em alta gastronomia autêntica japonesa, ambiente intimista e insumos refinados (~300 m).","distance":"aprox. 300 m","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Yumê — Cozinha Japonesa (Quilombo), Cuiabá MT","sort":129},{"id":"lz_130","parentId":"lz_128","type":"place","name":"Osaka Cozinha Asiática / Nikkei (Unidade Goiabeiras)","description":"uma das maiores referências de luxo da capital, combinando técnicas japonesas e peruanas em ambiente exclusivo (~1,1 km).","distance":"aprox. 1,1 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Osaka Cozinha Asiática / Nikkei (Unidade Goiabeiras), Cuiabá MT","sort":130},{"id":"lz_131","parentId":"lz_128","type":"place","name":"Haru Cozinha Oriental (Praça Popular)","description":"ícone consagrado da alta gastronomia na cidade, com peixes nobres, iguarias como trufas e foie gras, e coquetelaria autoral (~1,3 km).","distance":"aprox. 1,3 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Haru Cozinha Oriental (Praça Popular), Cuiabá MT","sort":131},{"id":"lz_132","parentId":"lz_128","type":"place","name":"Seu Majestade Sushibar (Goiabeiras)","description":"conceito boutique refinado, focado em omakase (menu degustação do chef), cortes de altíssima precisão e ambiente privativo (~1,7 km).","distance":"aprox. 1,7 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Seu Majestade Sushibar (Goiabeiras), Cuiabá MT","sort":132},{"id":"lz_133","parentId":"lz_128","type":"place","name":"Boraê Sushibar (Santa Rosa)","description":"ambiente contemporâneo voltado ao público premium, conhecido pelas combinações autorais com flor de sal e azeites trufados (~2,5 km).","distance":"aprox. 2,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Boraê Sushibar (Santa Rosa), Cuiabá MT","sort":133},{"id":"lz_134","parentId":"lz_128","type":"place","name":"Mahalo Cozinha Criativa (Seção Fusion Asiática)","description":"embora seja focado em cozinha autoral contemporânea, traz entradas e pratos principais com forte fusão e inspiração técnica asiática ultra-premium (~2,5 km).","distance":"aprox. 2,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Mahalo Cozinha Criativa (Seção Fusion Asiática), Cuiabá MT","sort":134},{"id":"lz_135","parentId":"lz_128","type":"place","name":"Gurumê (Shopping Estação Cuiabá)","description":"marca de alta gastronomia oriental contemporânea, famosa pelo design premiado e pratos com vieiras, trufas e insumos nobres (~3,1 km).","distance":"aprox. 3,1 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Gurumê (Shopping Estação Cuiabá), Cuiabá MT","sort":135},{"id":"lz_136","parentId":"lz_128","type":"place","name":"Ikioi Dubai (Ribeirão do Lipa)","description":"focado em alta gastronomia oriental com inspiração high-end internacional, ambiente suntuoso e apresentações exclusivas (~4,0 km).","distance":"aprox. 4,0 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Ikioi Dubai (Ribeirão do Lipa), Cuiabá MT","sort":136},{"id":"lz_137","parentId":"lz_128","type":"place","name":"Osaka Cozinha Asiática / Nikkei (Unidade Jardim das Américas)","description":"expansão do renomado grupo na zona leste, levando o mesmo padrão de luxo, gastronomia Nikkei e ambiente elitizado para a região nobre próximo ao Alphaville (~6,2 km).","distance":"aprox. 6,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Osaka Cozinha Asiática / Nikkei (Unidade Jardim das Américas), Cuiabá MT","sort":137},{"id":"lz_138","parentId":"lz_128","type":"place","name":"K-BBQ & Korean Fine Dining (Região Central / Goiabeiras)","description":"novo destaque do circuito sofisticado de Cuiabá, trazendo a autêntica experiência do churrasco coreano (Korean BBQ) com cortes nobres de carne bovina, marinadas exclusivas e acompanhamentos refinados (banchan) em ambiente moderno e exclusivo (~1,8 km).","distance":"aprox. 1,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"K-BBQ & Korean Fine Dining (Região Central / Goiabeiras), Cuiabá MT","sort":138},{"id":"lz_139","parentId":"lz_105","type":"group","name":"Rodízios","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":139},{"id":"lz_140","parentId":"lz_139","type":"place","name":"Nativas Grill Cuiabá (Jardim Aclimação / Miguel Sutil)","description":"o rodízio mais luxuoso da capital, com amplo bufê de frios, sushi bar e seleção de carnes nobres como ancho, picanha e cordeiro (~1,2 km).","distance":"aprox. 1,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Nativas Grill Cuiabá (Jardim Aclimação / Miguel Sutil), Cuiabá MT","sort":140},{"id":"lz_141","parentId":"lz_139","type":"place","name":"Grand Grill Cuiabá (Av. Miguel Sutil / Santa Rosa)","description":"rodízio em estilo clássico focado em cortes bovinos nobres, espeto corrido e bufê quente e frio completo (~2,2 km).","distance":"aprox. 2,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Grand Grill Cuiabá (Av. Miguel Sutil / Santa Rosa), Cuiabá MT","sort":141},{"id":"lz_142","parentId":"lz_139","type":"place","name":"Churrascaria Boi Grill (Parque das Águas)","description":"renomada e ampla churrascaria no espeto corrido gaúcho com vista para o parque (~4,8 km).","distance":"aprox. 4,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Churrascaria Boi Grill (Parque das Águas), Cuiabá MT","sort":142},{"id":"lz_143","parentId":"lz_139","type":"place","name":"Churrascaria Gaúcha (Av. Fernando Corrêa)","description":"uma das casas de carne mais tradicionais da capital, mantendo a tradição do espeto corrido (~5,5 km).","distance":"aprox. 5,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Churrascaria Gaúcha (Av. Fernando Corrêa), Cuiabá MT","sort":143},{"id":"lz_144","parentId":"lz_139","type":"place","name":"O Barbosa Ribs (Barbosa Ribs Costelaria) é outra casa bastante lembrada quando o assunto é costela assada. A marca se destaca pelo preparo de costelas bovinas assadas lentamente, focando em porções à la carte fartas, combos e acompanhamentos clássicos (mandioca, farofa e molhos da casa). Localização / Distância","description":"A unidade em Cuiabá fica situada na região do Bosque da Saúde, a cerca de 3,2 km","distance":"aprox. 3,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"O Barbosa Ribs (Barbosa Ribs Costelaria) é outra casa bastante lembrada quando o assunto é costela assada. A marca se destaca pelo preparo de costelas bovinas assadas lentamente, focando em porções à la carte fartas, combos e acompanhamentos clássicos (mandioca, farofa e molhos da casa). Localização / Distância, Cuiabá MT","sort":144},{"id":"lz_145","parentId":"lz_139","type":"place","name":"Churrascaria Zebu (Av. Fernando Corrêa da Costa)","description":"tradicional casa de espeto corrido focada em cortes seletos (~6,1 km).","distance":"aprox. 6,1 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Churrascaria Zebu (Av. Fernando Corrêa da Costa), Cuiabá MT","sort":145},{"id":"lz_146","parentId":"lz_139","type":"place","name":"Churrascaria Gramado (Várzea Grande / Av. FEB)","description":"rodízio amplo com variedade de carnes e pista de frios completa (~9,2 km).","distance":"aprox. 9,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Churrascaria Gramado (Várzea Grande / Av. FEB), Cuiabá MT","sort":146},{"id":"lz_147","parentId":"lz_139","type":"place","name":"Lélis Peixaria (Bairro Goiabeiras)","description":"a peixaria mais prestigiada, elegante e tradicional de Cuiabá, referência absoluta em rodízio de peixes pantaneiros nobres em ambiente sofisticado (~1,4 km).","distance":"aprox. 1,4 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Lélis Peixaria (Bairro Goiabeiras), Cuiabá MT","sort":147},{"id":"lz_148","parentId":"lz_139","type":"place","name":"Peixaria Leme (Orla do Porto)","description":"tradicionalíssima no circuito cultural, servindo rodízio completo com ventrecha de pacu, matrinxã e mojica de pintado (~3,2 km).","distance":"aprox. 3,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Peixaria Leme (Orla do Porto), Cuiabá MT","sort":148},{"id":"lz_149","parentId":"lz_139","type":"place","name":"Peixaria do Mário (Região do Porto)","description":"rodízio farto com pratos clássicos da culinária cuiabana (~3,4 km).","distance":"aprox. 3,4 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Peixaria do Mário (Região do Porto), Cuiabá MT","sort":149},{"id":"lz_150","parentId":"lz_139","type":"place","name":"Peixaria Porto das Águas (Orla do Porto)","description":"rodízio de peixes de água doce com vista panorâmica para o Rio Cuiabá (~3,6 km).","distance":"aprox. 3,6 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Peixaria Porto das Águas (Orla do Porto), Cuiabá MT","sort":150},{"id":"lz_151","parentId":"lz_139","type":"place","name":"Peixaria Mirante das Águas (Várzea Grande — Ponte Sérgio Motta)","description":"complexo gastronômico renomado à beira-rio com rodízio completo de peixes do Pantanal (~6,2 km).","distance":"aprox. 6,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Peixaria Mirante das Águas (Várzea Grande — Ponte Sérgio Motta), Cuiabá MT","sort":151},{"id":"lz_152","parentId":"lz_139","type":"place","name":"Pizzaria Ritorna (Av. Miguel Sutil)","description":"rodízio tradicional e muito concorrido na região, com grande variedade de sabores doces e salgados, massas finas e espaço kids (~1,8 km).","distance":"aprox. 1,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Pizzaria Ritorna (Av. Miguel Sutil), Cuiabá MT","sort":152},{"id":"lz_153","parentId":"lz_139","type":"place","name":"Pizzaria San Francisco (Região Central / Goiabeiras)","description":"uma das opções de rodízio mais conhecidas da região central, com foco em pizzas assadas no forno a lenha e bufê de acompanhamentos (~2,1 km).","distance":"aprox. 2,1 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Pizzaria San Francisco (Região Central / Goiabeiras), Cuiabá MT","sort":153},{"id":"lz_154","parentId":"lz_139","type":"place","name":"Gato Mia Pizzaria (Jardim Aclimação / CPA)","description":"rodízio bastante frequentado, com dezenas de opções de sabores salgados, doces especiais e massas recheadas (~3,8 km).","distance":"aprox. 3,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Gato Mia Pizzaria (Jardim Aclimação / CPA), Cuiabá MT","sort":154},{"id":"lz_155","parentId":"lz_139","type":"place","name":"Pizzaria Lugano (Av. Historiador Rubens de Mendonça / CPA)","description":"rodízio amplo em uma das principais avenidas da cidade, focado em variedade de sabores e atendimento ágil (~4,2 km).","distance":"aprox. 4,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Pizzaria Lugano (Av. Historiador Rubens de Mendonça / CPA), Cuiabá MT","sort":155},{"id":"lz_156","parentId":"lz_139","type":"place","name":"Pizzaria Verace (Jardim das Américas)","description":"rodízio de padrão refinado na zona leste, oferecendo ingredientes selecionados, bordas recheadas e ambiente amplo (~5,8 km).","distance":"aprox. 5,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Pizzaria Verace (Jardim das Américas), Cuiabá MT","sort":156},{"id":"lz_157","parentId":"lz_139","type":"place","name":"Pizzaria Tarantella (Av. Fernando Corrêa da Costa)","description":"rodízio tradicional de grande porte na região sul, famoso pela fartura de sabores e bufê de saladas (~6,5 km).","distance":"aprox. 6,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Pizzaria Tarantella (Av. Fernando Corrêa da Costa), Cuiabá MT","sort":157},{"id":"lz_158","parentId":"lz_139","type":"place","name":"Dominó Pizzaria (Várzea Grande / Av. Couto Magalhães)","description":"opção renomada na região metropolitana, servindo rodízio completo de pizzas e massas (~8,2 km).","distance":"aprox. 8,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Dominó Pizzaria (Várzea Grande / Av. Couto Magalhães), Cuiabá MT","sort":158},{"id":"lz_159","parentId":"lz_105","type":"group","name":"Regionais","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":159},{"id":"lz_160","parentId":"lz_159","type":"place","name":"Restaurante Regionalissimo (Praça Popular / Centro)","description":"tradicionalíssimo, focado na autêntica culinária cuiabana no formato bufê, com galinhada com pequi, maria isabel, paçoca de pilão e peixes da terra (~1,8 km).","distance":"aprox. 1,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Restaurante Regionalissimo (Praça Popular / Centro), Cuiabá MT","sort":160},{"id":"lz_161","parentId":"lz_159","type":"place","name":"Mercado do Porto (Bairro do Porto)","description":"o coração da cultura popular cuiabana, repleto de bancas e lanchonetes regionais servindo o autêntico \"cuiabano de raiz\" (revirado cuiabano, peixe frito na hora e caldo de piranha) (~3,0 km).","distance":"aprox. 3,0 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Mercado do Porto (Bairro do Porto), Cuiabá MT","sort":161},{"id":"lz_162","parentId":"lz_159","type":"place","name":"Kuka Fresca (Região Central / Bosque da Saúde)","description":"restaurante tradicional de pratos executivos e à la carte com foco em receitas típicas cuiabanas e mato-grossenses (~3,5 km).","distance":"aprox. 3,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Kuka Fresca (Região Central / Bosque da Saúde), Cuiabá MT","sort":162},{"id":"lz_163","parentId":"lz_159","type":"place","name":"Casa do Parque (Bairro Duque de Caxias)","description":"espaço cultural e gastronômico que mescla pratos contemporâneos com toques e ingredientes regionais nobres (~2,2 km).","distance":"aprox. 2,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Casa do Parque (Bairro Duque de Caxias), Cuiabá MT","sort":163},{"id":"lz_164","parentId":"lz_105","type":"group","name":"Pizzarias","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":164},{"id":"lz_165","parentId":"lz_164","type":"place","name":"Pizzaria Forneria Coriolano (Goiabeiras)","description":"uma das mais tradicionais e refinadas da cidade, focada em pizzas assadas em forno a lenha com ingredientes selecionados e massa de longa fermentação (~1,1 km).","distance":"aprox. 1,1 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Pizzaria Forneria Coriolano (Goiabeiras), Cuiabá MT","sort":165},{"id":"lz_166","parentId":"lz_164","type":"place","name":"Bento Pizza (Goiabeiras)","description":"proposta contemporânea com pizzas de massa artesanal, ingredientes premium e ambiente descontraído (~1,3 km).","distance":"aprox. 1,3 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Bento Pizza (Goiabeiras), Cuiabá MT","sort":166},{"id":"lz_167","parentId":"lz_164","type":"place","name":"Moinho Pizzaria (Região Central / Goiabeiras)","description":"pizzaria de estilo clássico com cardápio diversificado de sabores tradicionais, bordas recheadas e ambiente familiar (~1,7 km).","distance":"aprox. 1,7 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Moinho Pizzaria (Região Central / Goiabeiras), Cuiabá MT","sort":167},{"id":"lz_168","parentId":"lz_164","type":"place","name":"Dom Salles Pizzaria (Jardim Aclimação)","description":"referência em pizzas com bordas bem recheadas, massas crocantes e fartura nos recheios (~2,8 km).","distance":"aprox. 2,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Dom Salles Pizzaria (Jardim Aclimação), Cuiabá MT","sort":168},{"id":"lz_169","parentId":"lz_164","type":"place","name":"Pizzaria Chefe da Pizza (Av. Miguel Sutil)","description":"opção focada em rapidez e custo-benefício, com grande variedade de sabores no cardápio à la carte e delivery (~3,2 km).","distance":"aprox. 3,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Pizzaria Chefe da Pizza (Av. Miguel Sutil), Cuiabá MT","sort":169},{"id":"lz_170","parentId":"lz_164","type":"place","name":"Pizzaria Napoli (Região da Miguel Sutil)","description":"focada em receitas tradicionais italianas com molho de tomate artesanal e massa leve (~3,5 km).","distance":"aprox. 3,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Pizzaria Napoli (Região da Miguel Sutil), Cuiabá MT","sort":170},{"id":"lz_171","parentId":"lz_164","type":"place","name":"Pizza Mestre (Jardim das Américas)","description":"focado em pizzas no estilo napolitano individual e familiar com insumos de altíssima qualidade (~5,2 km).","distance":"aprox. 5,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Pizza Mestre (Jardim das Américas), Cuiabá MT","sort":171},{"id":"lz_172","parentId":"lz_164","type":"place","name":"La Pasta & Pizza (Jardim das Américas)","description":"traz um conceito de cantina que alia pizzas artesanais assadas na pedra a pratos de massa (~5,8 km).","distance":"aprox. 5,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"La Pasta & Pizza (Jardim das Américas), Cuiabá MT","sort":172},{"id":"lz_173","parentId":"lz_105","type":"group","name":"Buffets","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":173},{"id":"lz_174","parentId":"lz_173","type":"place","name":"Pequi Restaurante (Goiabeiras)","description":"uma das maiores referências em self-service executivo de alto padrão na região, focado em bufê variado, ingredientes selecionados, estação de grelhados e receitas regionais refinadas (~1,2 km).","distance":"aprox. 1,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Pequi Restaurante (Goiabeiras), Cuiabá MT","sort":174},{"id":"lz_175","parentId":"lz_173","type":"place","name":"Goiabeiras Gourmet (Goiabeiras)","description":"focado no público executivo exigente do bairro, oferece um bufê por quilo sofisticado com saladas elaboradas, pratos quentes contemporâneos e carnes preparadas na hora. (~1,3 km)","distance":"aprox. 1,3 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Goiabeiras Gourmet (Goiabeiras), Cuiabá MT","sort":175},{"id":"lz_176","parentId":"lz_173","type":"place","name":"Lélis Peixaria — Balcão Executivo (Goiabeiras)","description":"disponibiliza no horário do almoço uma versão por quilo de seu premiado menu, com peixes nobres do Pantanal, farofa de banana, mojica de pintado e acompanhamentos típicos com alto rigor de qualidade (~1,4 km).","distance":"aprox. 1,4 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Lélis Peixaria — Balcão Executivo (Goiabeiras), Cuiabá MT","sort":176},{"id":"lz_177","parentId":"lz_173","type":"place","name":"Restaurante Varanda Quilombo (Quilombo)","description":"excelente opção self-service dentro do próprio bairro, focada em comida caseira refinada, variada seleção de saladas e ambiente climatizado agradável (~600 m).","distance":"aprox. 600 m","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Restaurante Varanda Quilombo (Quilombo), Cuiabá MT","sort":177},{"id":"lz_178","parentId":"lz_173","type":"place","name":"Restaurante Doña Joana (Goiabeiras)","description":"tradicional no bairro, une o conceito por quilo a uma cozinha regional/brasileira de alta qualidade, com destaque para a fartura de pratos quentes e atendimento atencioso. (~1,7 km)","distance":"aprox. 1,7 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Restaurante Doña Joana (Goiabeiras), Cuiabá MT","sort":178},{"id":"lz_179","parentId":"lz_173","type":"place","name":"Restaurante Regionalíssimo (Praça Popular / Centro)","description":"referência em culinária cuiabana por quilo, ideal para quem busca o autêntico sabor regional (maria isabel, paçoca de pilão e peixes) em um ambiente tradicional e estruturado (~1,8 km).","distance":"aprox. 1,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Restaurante Regionalíssimo (Praça Popular / Centro), Cuiabá MT","sort":179},{"id":"lz_180","parentId":"lz_105","type":"group","name":"Feijoadas","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":180},{"id":"lz_181","parentId":"lz_180","type":"place","name":"Toca do Tatu (Goiabeiras)","description":"um dos pontos mais tradicionais para o almoço de sábado na região, servindo uma feijoada farta em ambiente de botequim clássico, acompanhada de torresmo crocante, caipirinha e chorinho ao vivo (~1,1 km).","distance":"aprox. 1,1 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Toca do Tatu (Goiabeiras), Cuiabá MT","sort":181},{"id":"lz_182","parentId":"lz_180","type":"place","name":"Varadero Bar e Restô (Goiabeiras)","description":"referência em feijoada refinada aos sábados, combinando ambiente sofisticado, música ao vivo e estação completa de acompanhamentos (~1,4 km).","distance":"aprox. 1,4 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Varadero Bar e Restô (Goiabeiras), Cuiabá MT","sort":182},{"id":"lz_183","parentId":"lz_180","type":"place","name":"Nativas Grill Cuiabá (Miguel Sutil / Aclimação)","description":"traz feijoada completa no bufê de sábado com carnes nobres e acompanhamentos premium (~1,2 km).","distance":"aprox. 1,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Nativas Grill Cuiabá (Miguel Sutil / Aclimação), Cuiabá MT","sort":183},{"id":"lz_184","parentId":"lz_180","type":"place","name":"Pé de Pequi (Quilombo)","description":"tradicional bufê por quilo que serve feijoada completa às quartas-feiras e sábados no próprio bairro (~200 m).","distance":"aprox. 200 m","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Pé de Pequi (Quilombo), Cuiabá MT","sort":184},{"id":"lz_185","parentId":"lz_180","type":"place","name":"Bar do Chuvisco (Centro / Bairro Popular)","description":"ícone boêmio da cidade, extremamente concorrido aos sábados por sua feijoada bem temperada, farta e servida em ambiente descontraído de raiz (~2,2 km).","distance":"aprox. 2,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Bar do Chuvisco (Centro / Bairro Popular), Cuiabá MT","sort":185},{"id":"lz_186","parentId":"lz_180","type":"place","name":"Confrade (Praça Popular / Centro)","description":"serve bufê livre de feijoada aos sábados com seleção de charcutaria artesanal e acompanhamentos refinados (~1,8 km).","distance":"aprox. 1,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Confrade (Praça Popular / Centro), Cuiabá MT","sort":186},{"id":"lz_187","parentId":"lz_180","type":"place","name":"Bar do Edgare (Bairro Popular / Miguel Sutil)","description":"famoso pelo torresmo de rolo e pela feijoada completa aos sábados em clima de botequim tradicional (~2,5 km).","distance":"aprox. 2,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Bar do Edgare (Bairro Popular / Miguel Sutil), Cuiabá MT","sort":187},{"id":"lz_188","parentId":"lz_180","type":"place","name":"Bar do Jarbas (Bairro Popular)","description":"ponto de encontro tradicional na região central, com feijoada disputada ao som de samba e pagode aos sábados (~2,3 km).","distance":"aprox. 2,3 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Bar do Jarbas (Bairro Popular), Cuiabá MT","sort":188},{"id":"lz_189","parentId":"lz_104","type":"group","name":"BARES","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":189},{"id":"lz_190","parentId":"lz_189","type":"group","name":"Sport","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":190},{"id":"lz_191","parentId":"lz_190","type":"place","name":"Garage 154 (Goiabeiras)","description":"espaço focado na cultura gearhead, automobilismo e esportes a motor, com ambiente temático, chope artesanal, hambúrgueres na brasa e transmissão de eventos esportivos (~1,2 km).","distance":"aprox. 1,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Garage 154 (Goiabeiras), Cuiabá MT","sort":191},{"id":"lz_192","parentId":"lz_190","type":"place","name":"Draft Bar & Grill (Praça Popular)","description":"ambiente estilo pub/sports bar moderno com diversas telas transmitindo futebol, lutas de UFC e NFL, além de boa carta de chopes e porções (~1,8 km).","distance":"aprox. 1,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Draft Bar & Grill (Praça Popular), Cuiabá MT","sort":192},{"id":"lz_193","parentId":"lz_190","type":"place","name":"Mundialito Sports Bar (Região Central / Goiabeiras)","description":"voltado para os apaixonados por esportes variados, com várias TVs dedicadas à transmissão de jogos ao vivo, decoração temática e cardápio de pub (~1,9 km).","distance":"aprox. 1,9 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Mundialito Sports Bar (Região Central / Goiabeiras), Cuiabá MT","sort":193},{"id":"lz_194","parentId":"lz_190","type":"place","name":"Arena Chopp & Esporte (Região do Santa Rosa)","description":"bar e petiscaria com foco em transmissões de futebol (Brasileirão, Libertadores, Champions League) e lutas, servindo porções fartas e chope em ambiente aberto (~3,5 km).","distance":"aprox. 3,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Arena Chopp & Esporte (Região do Santa Rosa), Cuiabá MT","sort":194},{"id":"lz_195","parentId":"lz_190","type":"place","name":"Cuiabá Sports Bar & Petiscaria (Região Central)","description":"ambiente descontraído com temática voltada ao futebol local e nacional, focado em transmissões ao vivo, espetinhos e cerveja gelada (~3,8 km).","distance":"aprox. 3,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Cuiabá Sports Bar & Petiscaria (Região Central), Cuiabá MT","sort":195},{"id":"lz_196","parentId":"lz_190","type":"place","name":"Arena Pantanal Gastrobar / Bares da Arena (Verdão)","description":"localizado no entorno do complexo da Arena Pantanal, atrai o público torcedor com tematização voltada ao Cuiabá EC e ao futebol mato-grossense (~4,5 km).","distance":"aprox. 4,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Arena Pantanal Gastrobar / Bares da Arena (Verdão), Cuiabá MT","sort":196},{"id":"lz_197","parentId":"lz_189","type":"group","name":"Happy hour / jantar","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":197},{"id":"lz_198","parentId":"lz_197","type":"place","name":"Varadero Bar e Restô (Goiabeiras)","description":"perfeito para transitar do happy hour ao jantar, com ambiente sofisticado, luz suave, excelente carta de drinks e menu à la carte de cortes grelhados e frutos do mar (~1,4 km).","distance":"aprox. 1,4 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Varadero Bar e Restô (Goiabeiras), Cuiabá MT","sort":198},{"id":"lz_199","parentId":"lz_197","type":"place","name":"Confrade (Praça Popular / Centro)","description":"referência para quem busca porções refinadas, charcutaria artesanal e pratos de jantar elaborados em uma das regiões boêmias mais tradicionais da cidade (~1,8 km).","distance":"aprox. 1,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Confrade (Praça Popular / Centro), Cuiabá MT","sort":199},{"id":"lz_200","parentId":"lz_197","type":"place","name":"Bar do Jarbas (Praça Popular / Bairro Popular)","description":"opção vibrante para o fim de tarde, famosa pelo chope trincando, ambiente descontraído e cardápio farto de petiscos clássicos e jantares de boteco (~2,3 km).","distance":"aprox. 2,3 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Bar do Jarbas (Praça Popular / Bairro Popular), Cuiabá MT","sort":200},{"id":"lz_201","parentId":"lz_197","type":"place","name":"Garage 154 (Goiabeiras)","description":"une chope artesanal, hambúrgueres gourmet e carnes na brasa em um espaço com temática gearhead e energia de pub para esticar a noite (~1,2 km).","distance":"aprox. 1,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Garage 154 (Goiabeiras), Cuiabá MT","sort":201},{"id":"lz_202","parentId":"lz_197","type":"place","name":"Cupim Bar (Região Central / Bosque da Saúde)","description":"um dos maiores clássicos de Cuiabá para o happy hour estendido para o jantar; famoso pela carne de cupim extremamente suculenta e macia, mandioca derretendo, chope gelado e porções fartas (~2,3 km).","distance":"aprox. 2,3 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Cupim Bar (Região Central / Bosque da Saúde), Cuiabá MT","sort":202},{"id":"lz_203","parentId":"lz_197","type":"place","name":"Bar do Edgare (Bairro Popular / Miguel Sutil)","description":"clássico do happy hour cuiabano, muito procurado pelo tradicional torresmo de rolo, cerveja bem gelada e porções fartas para compartilhar em grupo (~2,5 km).","distance":"aprox. 2,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Bar do Edgare (Bairro Popular / Miguel Sutil), Cuiabá MT","sort":203},{"id":"lz_204","parentId":"lz_197","type":"place","name":"Bar do Chuvisco (Centro / Bairro Popular)","description":"ícone boêmio de raiz na capital, ideal para drinks despretensiosos, petiscos clássicos e pratos caseiros em clima informal (~2,2 km).","distance":"aprox. 2,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Bar do Chuvisco (Centro / Bairro Popular), Cuiabá MT","sort":204},{"id":"lz_205","parentId":"lz_197","type":"place","name":"Outback Steakhouse (Shopping Estação Cuiabá)","description":"um dos pontos de happy hour mais movimentados da cidade, com chope na caneca congelada, pratos para compartilhar (bloomin' onion, ribs) e opções completas para o jantar (~3,1 km).","distance":"aprox. 3,1 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Outback Steakhouse (Shopping Estação Cuiabá), Cuiabá MT","sort":205},{"id":"lz_206","parentId":"lz_197","type":"place","name":"Cuiabano Gastrobar (Região do Santa Rosa)","description":"ambiente amplo ao ar livre, combinando chopes de várias torneiras, coquetelaria autoral e cardápio diversificado para o jantar (~3,5 km).","distance":"aprox. 3,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Cuiabano Gastrobar (Região do Santa Rosa), Cuiabá MT","sort":206},{"id":"lz_207","parentId":"lz_197","type":"place","name":"Três Moinhos Bar & Gastronomia (Parque das Águas / CPA)","description":"bar contemporâneo focado em alta coquetelaria, vinhos, porções criativas e ambiente ao ar livre com vista para a região do parque (~4,8 km).","distance":"aprox. 4,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Três Moinhos Bar & Gastronomia (Parque das Águas / CPA), Cuiabá MT","sort":207},{"id":"lz_208","parentId":"lz_189","type":"group","name":"Noite","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":208},{"id":"lz_209","parentId":"lz_208","type":"place","name":"Bar do Jarbas (Praça Popular)","description":"epicentro da boemia na região central, extremamente movimentado à noite, famoso pelas rodas de samba e pagode ao vivo, cerveja trincando e público jovem (~2,3 km).","distance":"aprox. 2,3 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Bar do Jarbas (Praça Popular), Cuiabá MT","sort":209},{"id":"lz_210","parentId":"lz_208","type":"place","name":"Confrade (Praça Popular)","description":"ponto de encontro refinado que estica pela madrugada, unindo coquetelaria autoral, DJs e música ao vivo com ambiente sofisticado ao ar livre (~1,8 km).","distance":"aprox. 1,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Confrade (Praça Popular), Cuiabá MT","sort":210},{"id":"lz_211","parentId":"lz_208","type":"place","name":"Garage 154 (Goiabeiras)","description":"excelente para quem busca a noite ao som de rock, pop e vertentes alternativas, servindo chopes artesanais em clima de pub/garage (~1,2 km).","distance":"aprox. 1,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Garage 154 (Goiabeiras), Cuiabá MT","sort":211},{"id":"lz_212","parentId":"lz_208","type":"place","name":"Garden Pub (Praça Popular / Bairro Popular)","description":"ambiente descolado ao ar livre voltado para música brasileira, brasilidades, samba e MPB, reunindo público diverso em noites bem animadas (~2,1 km).","distance":"aprox. 2,1 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Garden Pub (Praça Popular / Bairro Popular), Cuiabá MT","sort":212},{"id":"lz_213","parentId":"lz_208","type":"place","name":"Mosteiro Bar e Cultura (Região Central / Bairro Popular)","description":"espaço multicultural e noturno reconhecido por suas noites de jazz, blues, brasilidades e discotecagem em vinil em um espaço intimista e estiloso (~2,4 km).","distance":"aprox. 2,4 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Mosteiro Bar e Cultura (Região Central / Bairro Popular), Cuiabá MT","sort":213},{"id":"lz_214","parentId":"lz_208","type":"place","name":"Malcom Pub (Av. Miguel Sutil / Santa Rosa)","description":"o maior e mais tradicional complexo noturno da capital; dividido entre o palco principal (com bandas de rock e pop) e o espaço eletrônico (Club), funcionando até altas horas da madrugada (~3,2 km).","distance":"aprox. 3,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Malcom Pub (Av. Miguel Sutil / Santa Rosa), Cuiabá MT","sort":214},{"id":"lz_215","parentId":"lz_208","type":"place","name":"Nuun Garden (Região Central / Duque de Caxias)","description":"referência absoluta para os amantes de música eletrônica e house music, com ambiente conceitual de jardim noturno, coquetelaria premium e DJs nacionais e internacionais (~2,8 km).","distance":"aprox. 2,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Nuun Garden (Região Central / Duque de Caxias), Cuiabá MT","sort":215},{"id":"lz_216","parentId":"lz_208","type":"place","name":"Bar do Edgare (Bairro Popular / Miguel Sutil)","description":"botequim tradicionalista que ganha ritmo de balada e agito noturno nos fins de semana, com mesas lotadas na calçada e clima descontraído (~2,5 km).","distance":"aprox. 2,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Bar do Edgare (Bairro Popular / Miguel Sutil), Cuiabá MT","sort":216},{"id":"lz_217","parentId":"lz_208","type":"place","name":"Musiva (Av. Beira Rio)","description":"a principal casa de eventos e grandes shows noturnos de Cuiabá, recebendo atrações nacionais de sertanejo, pagode, pop e música eletrônica em estrutura de grande porte (~5,8 km).","distance":"aprox. 5,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Musiva (Av. Beira Rio), Cuiabá MT","sort":217},{"id":"lz_218","parentId":"lz_104","type":"group","name":"LANCHONETES","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":218},{"id":"lz_219","parentId":"lz_218","type":"group","name":"Hamburguerias","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":219},{"id":"lz_220","parentId":"lz_219","type":"place","name":"Garage 154 (Goiabeiras)","description":"hambúrgueres artesanais grelhados na brasa com inspiração na culinária norte-americana, acompanhados de chopes artesanais em ambiente temático gearhead (~1,2 km).","distance":"aprox. 1,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Garage 154 (Goiabeiras), Cuiabá MT","sort":220},{"id":"lz_221","parentId":"lz_219","type":"place","name":"Rock Burger (Goiabeiras / Praça Popular)","description":"uma das hamburguerias artesanais mais tradicionais da região, famosa pelos burgers bem servidos no pão de brioche, molhos autorais e temática do rock (~1,6 km).","distance":"aprox. 1,6 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Rock Burger (Goiabeiras / Praça Popular), Cuiabá MT","sort":221},{"id":"lz_222","parentId":"lz_219","type":"place","name":"Cozinha dos Fundos (Praça Popular / Centro)","description":"referência em puck smash e hambúrgueres artesanais com blens de carnes nobres, maioneses caseiras icônicas e batatas crocantes (~1,8 km).","distance":"aprox. 1,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Cozinha dos Fundos (Praça Popular / Centro), Cuiabá MT","sort":222},{"id":"lz_223","parentId":"lz_219","type":"place","name":"Mundialito Burger (Região Central / Goiabeiras)","description":"opção descontraída focada em hambúrgueres de sabor marcante, porções de pork belly e combos fartos (~1,9 km)","distance":"aprox. 1,9 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Mundialito Burger (Região Central / Goiabeiras), Cuiabá MT","sort":223},{"id":"lz_224","parentId":"lz_219","type":"place","name":"Madero Steakhouse (Shopping Estação Cuiabá)","description":"conhecido por seus hambúrgueres assados na brasa com pão crocante, maionese artesanal e opções gourmet em ambiente confortável (~3,1 km).","distance":"aprox. 3,1 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Madero Steakhouse (Shopping Estação Cuiabá), Cuiabá MT","sort":224},{"id":"lz_225","parentId":"lz_219","type":"place","name":"Barba, Grelha e Bigode (Jardim Aclimação / Miguel Sutil)","description":"hamburgueria focada em cortes de carne altos preparados na grelha, bacon crocante, cheddar inglês e combinação de ingredientes premium (~3,0 km).","distance":"aprox. 3,0 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Barba, Grelha e Bigode (Jardim Aclimação / Miguel Sutil), Cuiabá MT","sort":225},{"id":"lz_226","parentId":"lz_219","type":"place","name":"Santo Smash (Região Central / Bosque da Saúde)","description":"especializada no estilo smash burger (carne prensada na chapa com casquinha crocante), rápida, suculenta e com ótimo custo-benefício (~3,4 km).","distance":"aprox. 3,4 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Santo Smash (Região Central / Bosque da Saúde), Cuiabá MT","sort":226},{"id":"lz_227","parentId":"lz_218","type":"group","name":"Espetinhos","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":227},{"id":"lz_228","parentId":"lz_227","type":"place","name":"Espetinho do Cheba (Goiabeiras)","description":"um dos maiores clássicos e referências absolutas de Cuiabá quando o assunto é espetinho de rua; famoso pelo cupim derretendo, carne macia, mandioca amarela perfeita e maionese temperada em ambiente raiz (~1,1 km).","distance":"aprox. 1,1 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Espetinho do Cheba (Goiabeiras), Cuiabá MT","sort":228},{"id":"lz_229","parentId":"lz_227","type":"place","name":"Espetinho do Bigode (Goiabeiras)","description":"bastante tradicional na região, com espetinhos bem servidos de carne, cupim, medalhão e queijo coalho com acompanhamentos fartos (~1,3 km).","distance":"aprox. 1,3 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Espetinho do Bigode (Goiabeiras), Cuiabá MT","sort":229},{"id":"lz_230","parentId":"lz_227","type":"place","name":"Espetinho da Popular (Praça Popular / Centro)","description":"ponto de encontro no circuito boêmio, combinando espetinhos variados na brasa em ambiente movimentado (~1,8 km).","distance":"aprox. 1,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Espetinho da Popular (Praça Popular / Centro), Cuiabá MT","sort":230},{"id":"lz_231","parentId":"lz_227","type":"place","name":"Espeto & Cia (Região Central / Goiabeiras)","description":"focado em rapidez, com grande variedade de cortes no espeto (carne, frango com bacon, coração e linguiça) (~1,9 km).","distance":"aprox. 1,9 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Espeto & Cia (Região Central / Goiabeiras), Cuiabá MT","sort":231},{"id":"lz_232","parentId":"lz_227","type":"place","name":"Espetinho do Jarbas (Bairro Popular)","description":"focado no atendimento rápido de espetos bem temperados, com destaque para o cupim e o pão de alho recheado (~2,3 km).","distance":"aprox. 2,3 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Espetinho do Jarbas (Bairro Popular), Cuiabá MT","sort":232},{"id":"lz_233","parentId":"lz_227","type":"place","name":"Espetinho do Edgare (Bairro Popular / Miguel Sutil)","description":"estação de espetinhos variados feitos na hora, ideal para um lanche rápido à noite (~2,5 km).","distance":"aprox. 2,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Espetinho do Edgare (Bairro Popular / Miguel Sutil), Cuiabá MT","sort":233},{"id":"lz_234","parentId":"lz_227","type":"place","name":"Gato Mia Espetaria (Bosque da Saúde)","description":"espetaria bem estruturada servindo desde cortes tradicionais até combinações recheadas com jantinha completa (~3,4 km).","distance":"aprox. 3,4 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Gato Mia Espetaria (Bosque da Saúde), Cuiabá MT","sort":234},{"id":"lz_235","parentId":"lz_227","type":"place","name":"Espetinho do Baiano (Av. Fernando Corrêa / Poção)","description":"referência em espetos de rua, popular pelo preço acessível e mandioca cozida sempre no ponto (~4,2 km).","distance":"aprox. 4,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Espetinho do Baiano (Av. Fernando Corrêa / Poção), Cuiabá MT","sort":235},{"id":"lz_236","parentId":"lz_227","type":"place","name":"Avenida do Espeto (Região da Arena Pantanal)","description":"muito movimentada nos fins de semana, oferecendo espetinhos fartos no sistema de jantinha (~4,5 km).","distance":"aprox. 4,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Avenida do Espeto (Região da Arena Pantanal), Cuiabá MT","sort":236},{"id":"lz_237","parentId":"lz_218","type":"group","name":"Cachorro quente (baguncinha & prensados)","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":237},{"id":"lz_238","parentId":"lz_237","type":"place","name":"Lanchonete e Baguncaria Express (Bairro Popular)","description":"opção clássica do \"baguncão cuiabano\" (hambúrguer farto com milho, bacon, ovo, presunto, queijo e maionese temperada) para quem busca lanches tradicionais de rua (~2,1 km).","distance":"aprox. 2,1 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Lanchonete e Baguncaria Express (Bairro Popular), Cuiabá MT","sort":238},{"id":"lz_239","parentId":"lz_237","type":"place","name":"Lanchonete Comilão (Região Central)","description":"tradicionalíssima na capital, famosa pelos lanches prensados imensos e maionese verde artesanal bastante concorrida no fim da noite (~2,6 km).","distance":"aprox. 2,6 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Lanchonete Comilão (Região Central), Cuiabá MT","sort":239},{"id":"lz_240","parentId":"lz_237","type":"place","name":"Gourmet Lanches (Goiabeiras)","description":"lanchonete de bairro tradicionalíssima no circuito de prensados e x-bagunças fartos, muito procurada pelo público da região no fim da noite (~1,5 km).","distance":"aprox. 1,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Gourmet Lanches (Goiabeiras), Cuiabá MT","sort":240},{"id":"lz_241","parentId":"lz_237","type":"place","name":"Baguncinha do Goiabeiras (Entorno do Goiabeiras Shopping)","description":"trailer/lanchonete de rua clássico focado na montagem rápida de prensados gigantes com maionese verde artesanal e pão selado na chapa (~1,6 km).","distance":"aprox. 1,6 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Baguncinha do Goiabeiras (Entorno do Goiabeiras Shopping), Cuiabá MT","sort":241},{"id":"lz_242","parentId":"lz_237","type":"place","name":"X-Bagunça do Baiano (Região Central)","description":"ponto de parada tradicional da madrugada para quem busca o prensadão de raiz com bastante molho, queijo derretido e carnes bem temperadas na chapa (~2,8 km).","distance":"aprox. 2,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"X-Bagunça do Baiano (Região Central), Cuiabá MT","sort":242},{"id":"lz_243","parentId":"lz_237","type":"place","name":"Lanchonete Ponto do Lanche (Bosque da Saúde)","description":"lanchonete de bairro muito frequentada por quem mora na zona norte, especializada em x-saladas, baguncinhas e dogões prensados (~3,2 km).","distance":"aprox. 3,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Lanchonete Ponto do Lanche (Bosque da Saúde), Cuiabá MT","sort":243},{"id":"lz_244","parentId":"","type":"group","name":"ESPAÇOS DE EVENTOS","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":244},{"id":"lz_245","parentId":"lz_244","type":"group","name":"Centros de convenções","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":245},{"id":"lz_246","parentId":"lz_245","type":"place","name":"Espaço Riserva (Buffet Leila Malouf / Av. Miguel Sutil)","description":"um dos centros de eventos e convenções mais modernos e elegantes da capital, voltado para fóruns, congressos corporativos e grandes simpósios (~1,5 km).","distance":"aprox. 1,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Espaço Riserva (Buffet Leila Malouf / Av. Miguel Sutil), Cuiabá MT","sort":246},{"id":"lz_247","parentId":"lz_245","type":"place","name":"Centro de Eventos do Pantanal / Sebrae (Bairro Santa Marta / Miguel Sutil)","description":"o maior, mais tradicional e principal complexo de convenções de Mato Grosso, preparado para grandes feiras nacionais, congressos de milhares de pessoas, exibições e eventos de negócios (~2,8 km).","distance":"aprox. 2,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Centro de Eventos do Pantanal / Sebrae (Bairro Santa Marta / Miguel Sutil), Cuiabá MT","sort":247},{"id":"lz_248","parentId":"lz_245","type":"place","name":"Centro de Eventos do Pantanal Shopping (Terraço do Pan)","description":"estrutura integrada ao complexo comercial, ideal para palestras, seminários e feiras corporativas de médio porte (~1,8 km).","distance":"aprox. 1,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Centro de Eventos do Pantanal Shopping (Terraço do Pan), Cuiabá MT","sort":248},{"id":"lz_249","parentId":"lz_245","type":"place","name":"Centro de Eventos do Hotel Gran Odara (Av. Miguel Sutil)","description":"infraestrutura hoteleira completa com auditórios modulares e salas de apoio de alto padrão para convenções executivas e encontros corporativos de grande escala (~4,2 km).","distance":"aprox. 4,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Centro de Eventos do Hotel Gran Odara (Av. Miguel Sutil), Cuiabá MT","sort":249},{"id":"lz_250","parentId":"lz_245","type":"place","name":"Auditório do Edifício Cloves Vettorato / FIEMT (Av. Historiador Rubens de Mendonça / CPA)","description":"centro de convenções e auditório corporativo focado no setor industrial e institucional (~4,5 km).","distance":"aprox. 4,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Auditório do Edifício Cloves Vettorato / FIEMT (Av. Historiador Rubens de Mendonça / CPA), Cuiabá MT","sort":250},{"id":"lz_251","parentId":"lz_245","type":"place","name":"Auditório da FIEMT (Av. Historiador Rubens de Mendonça / CPA)","description":"centro de convenções e auditório corporativo voltado para eventos institucionais, palestras e encontros do setor produtivo (~4,5 km).","distance":"aprox. 4,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Auditório da FIEMT (Av. Historiador Rubens de Mendonça / CPA), Cuiabá MT","sort":251},{"id":"lz_252","parentId":"lz_245","type":"place","name":"Espaço Musiva (Av. Beira Rio)","description":"embora muito conhecido como casa de shows, possui módulos e infraestrutura interna para convenções, feiras corporativas e grandes convenções de vendas (~5,8 km).","distance":"aprox. 5,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Espaço Musiva (Av. Beira Rio), Cuiabá MT","sort":252},{"id":"lz_253","parentId":"lz_244","type":"group","name":"Festas e buffets","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":253},{"id":"lz_254","parentId":"lz_253","type":"place","name":"Espaço Riserva — Leila Malouf (Av. Miguel Sutil)","description":"referência máxima em sofisticação para casamentos, formaturas e eventos sociais de grande porte, combinando alta gastronomia e arquitetura moderna (~1,5 km).","distance":"aprox. 1,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Espaço Riserva — Leila Malouf (Av. Miguel Sutil), Cuiabá MT","sort":254},{"id":"lz_255","parentId":"lz_253","type":"place","name":"Villa Felici Espaço e Buffet (Goiabeiras / Santa Rosa)","description":"espaço versátil e elegante para festas de aniversário, mini-weddings e recepções sociais, focado em atendimento personalizado e menu contemporâneo (~2,1 km).","distance":"aprox. 2,1 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Villa Felici Espaço e Buffet (Goiabeiras / Santa Rosa), Cuiabá MT","sort":255},{"id":"lz_256","parentId":"lz_253","type":"place","name":"Buffet Leila Malouf — Espaço Jardim Cuiabá","description":"salão clássico e acolhedor na região central, ideal para festas sociais refinadas e recepções mais intimistas (~2,3 km).","distance":"aprox. 2,3 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Buffet Leila Malouf — Espaço Jardim Cuiabá, Cuiabá MT","sort":256},{"id":"lz_257","parentId":"lz_253","type":"place","name":"Espaço Marly Festas (Bosque da Saúde)","description":"salão tradicional da zona norte, muito procurado para festas de 15 anos, aniversários e recepções em geral por sua localização prática e boa estrutura (~3,4 km).","distance":"aprox. 3,4 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Espaço Marly Festas (Bosque da Saúde), Cuiabá MT","sort":257},{"id":"lz_258","parentId":"lz_253","type":"place","name":"Espaço Solares (Região do Santa Rosa / Miguel Sutil)","description":"ambiente amplo com área externa agradável, propício para festas sociais ao ar livre, casamentos e comemorações familiares (~3,8 km).","distance":"aprox. 3,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Espaço Solares (Região do Santa Rosa / Miguel Sutil), Cuiabá MT","sort":258},{"id":"lz_259","parentId":"lz_253","type":"place","name":"Buffet Alphaville Premium (Jardim Itália)","description":"um dos espaços sociais mais requintados da capital, projetado para casamentos e bailes de formatura que exigem grande capacidade de convidados e acabamento de luxo (~5,5 km).","distance":"aprox. 5,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Buffet Alphaville Premium (Jardim Itália), Cuiabá MT","sort":259},{"id":"lz_260","parentId":"lz_253","type":"place","name":"Espaço Meraki (Região do Ribeirão do Lipa)","description":"focado no conceito de eventos ao ar livre, casamentos no estilo boho chic e recepções integradas à natureza (~6,2 km).","distance":"aprox. 6,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Espaço Meraki (Região do Ribeirão do Lipa), Cuiabá MT","sort":260},{"id":"lz_261","parentId":"lz_253","type":"place","name":"Chácara das Flores / Espaço Vitoria (Estrada da Guia / Sucuri)","description":"opções tradicionais para festas sociais em estilo campestre ou diurno, oferecendo amplas áreas verdes e estruturas para grandes recepções (~7,5 km).","distance":"aprox. 7,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Chácara das Flores / Espaço Vitoria (Estrada da Guia / Sucuri), Cuiabá MT","sort":261}],closedDates:[],closedSlots:[],orders:[]};
let db=JSON.parse(localStorage.getItem(KEY)||'null')||structuredClone(seed),session=null,page='catalog',adminPage='dashboard',selectedCat='',cart=[];

if(!Array.isArray(db.leisureGuide)||!db.leisureGuide.length)db.leisureGuide=structuredClone(seed.leisureGuide||[]);

const LEISURE_CLEAN_MIGRATION_V167='versatil_leisure_clean_v167';
if(!localStorage.getItem(LEISURE_CLEAN_MIGRATION_V167)){
  db.leisureGuide=structuredClone(seed.leisureGuide||[]);
  localStorage.setItem(KEY,JSON.stringify(db));
  localStorage.setItem(LEISURE_CLEAN_MIGRATION_V167,'1');
}

const LEISURE_COMPLETE_MIGRATION_KEY='versatil_leisure_complete_v165';
if(!localStorage.getItem(LEISURE_COMPLETE_MIGRATION_KEY)){
  db.leisureGuide=structuredClone(seed.leisureGuide||[]);
  localStorage.setItem(KEY,JSON.stringify(db));
  localStorage.setItem(LEISURE_COMPLETE_MIGRATION_KEY,'1');
}

let expandedClientProductId='';
let productAdminCategoryFilter='all';
let deferredInstallPrompt=null;
let pwaInstallReady=false;
const save=()=>localStorage.setItem(KEY,JSON.stringify(db));
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
    <div class="package-use-title">Utilização ${index+1}</div><button class="cat leisure-entry-card" onclick="page='leisure';render()"><div class="ico">📍</div><h3>Lazer e Conveniências</h3><p>Conheça Cuiabá e arredores.<br><span class="leisure-card-soft">Encontre tudo ao seu redor.</span></p></button>
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
function capacityGroupForProduct(p){
  if(!p)return '';

  // Serviço de café possui capacidade própria e nunca é bloqueado
  // pela ocupação das salas ou demais locações.
  if(p.id==='cafe')return 'cafe';

  if(p.cat==='servicos' || p.cat==='enxoval')return 'servicos_enxoval';
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

function publicCentralSnapshot(){return {rooms:db.rooms||[],categories:db.categories||[],products:db.products||[],availabilityClosures:db.availabilityClosures||[],leisureGuide:db.leisureGuide||[]}}


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

    render();
    if(page==='leisure')setTimeout(()=>restoreLeisureOpenIds(leisureOpenBefore),0);
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



function leisureChildren(parentId=''){
  return (db.leisureGuide||[])
    .filter(n=>String(n.parentId||'')===String(parentId||''))
    .sort((a,b)=>Number(a.sort||0)-Number(b.sort||0)||String(a.name||'').localeCompare(String(b.name||''),'pt-BR'));
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
  const fallback=leisureEmbeddedImage(p);
  const external=String(p.imageUrl||'').trim();
  const photo=`<img class="leisure-place-img" src="${esc(external||fallback)}" alt="${esc(p.name)}" onerror="this.onerror=null;this.src='${fallback}'">`;
  return `<details class="leisure-place" data-leisure-id="${esc(p.id)}"><summary>${esc(p.name)}<span>›</span></summary>
    <div class="leisure-place-body"><div class="leisure-place-grid">
      ${photo}
      <div>
        ${p.description?`<div class="leisure-desc">${esc(p.description)}</div>`:''}
        <div class="leisure-meta"><b>Distância do Versátil:</b> ${esc(p.distance||'aprox. não informado')}<br><b>Telefone:</b> ${esc(p.phone||'(65) 3313-0050 (Sec. de Turismo)')}</div>
        <a class="btn primary leisure-map-btn" href="${esc(leisureMapUrl(p))}" target="_blank" rel="noopener">Abrir no Google Maps</a>
      </div>
    </div></div></details>`;
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
  return `<details class="leisure-level-${Math.min(depth,5)}" data-leisure-id="${esc(node.id)}"><summary>${esc(leisureDisplayName(node,depth))}<span>⌄</span></summary>
    <div class="leisure-inside">${children.map(n=>leisureNodeHtml(n,depth+1)).join('')}</div></details>`;
}
function leisureGuidePage(){
  const roots=leisureChildren('');
  return `<div class="card leisure-guide-card">
    <div class="row between leisure-guide-head"><div><h2>Lazer e Conveniências</h2><div class="leisure-page-line1">Conheça Cuiabá e arredores.</div><div class="leisure-page-line2">Encontre tudo ao seu redor.</div></div>
    <button class="btn" onclick="page='catalog';render()">Voltar ao catálogo</button></div>
    ${roots.map(n=>leisureNodeHtml(n,1)).join('')}
  </div>`;
}

function render(){
  document.getElementById('app').innerHTML=session?appView():loginView();
  renderVersionBadge();
  setTimeout(()=>{updatePwaInstallUI();updateCentralStatusUI();},0);
}

function renderVersionBadge(){
  let badge=document.getElementById('appVersionBadge');
  if(!badge){
    badge=document.createElement('div');
    badge.id='appVersionBadge';
    document.body.appendChild(badge);
  }
  badge.textContent='v1.67';
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

function appView(){let admin=session.role==='admin';return `<header class="top"><div class="brand"><img src="logo-versatil.jpg"><div><h1>APP SERVIÇOS VERSÁTIL</h1><small>${admin?'ADMIN':esc(session.name+' • '+room()?.name)}</small></div></div><div class="app-welcome"><span>Seja bem vindo</span><br><b>${esc(session?.name||session?.email||'')}</b>!</div>
    <div class="row header-action-row">
      ${session?.role==='admin'?`<button class="btn header-publish-btn" onclick="publishWithLoading()">Publicar alterações</button>`:''}
      ${centralStatusHtml()}
      ${pwaInstallButtonHtml()}
      <button class="btn header-signout-btn" onclick="signout()">Sair</button>
    </div></header><div class="wrap">${admin?adminView():clientView()}</div>`}


function signout(){
  const accessName=session?.name||session?.email||'';
  const role=session?.role||'';

  if(role==='client'&&page!=='confirmation')cart=[];

  session=null;
  selectedCat='';
  expandedClientProductId='';
  page='catalog';
  render();

  setTimeout(()=>{
    if(role==='admin'){
      alert(`Até breve ${accessName}!`);
    }else{
      alert(`Obrigado por seu pedido,\naté breve, ${accessName}.`);
    }
  },50);
}
function clientView(){
  const menus=[
    ['catalog','Catálogo'],
    ['cart',`Carrinho${cart.length?` (${cart.length})`:''}`],
    ['confirmation','Confirmação']
  ];

  const nav=`<nav class="nav">${menus.map(([k,v])=>`<button class="${page===k?'active':''}" onclick="page='${k}';render()">${v}</button>`).join('')}</nav>`;

  if(page==='leisure') return nav+leisureGuidePage();

  return nav+(page==='catalog'
    ?catalogPage()
    :page==='cart'
      ?cartPage()
      :confirmationPage());
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

        <button class="client-category-card leisure-client-entry" onclick="page='leisure';render()">
          <div class="client-category-icon">📍</div>
          <div class="client-category-copy">
            <h3>Lazer e Conveniências</h3>
            <p>Encontre tudo ao seu redor.</p>
          </div>
        </button>
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

function clientProductAccordion(p){
  const price=productPrice(p);
  const unavailable=price<=0;
  const defaultDate=firstAllowedDate24h(p);
  const requiresPeriod=productRequiresPeriod(p);
  const isPackage=p.cat==='pacotes';
  const daily=isDailyRentalProduct(p);
  const slots=(requiresPeriod||daily)?availableSlotsForProductDate(p,defaultDate):[];
  const noAvailability=(requiresPeriod||daily)&&!slots.length;
  const lockQty=isPackage||requiresPeriod||daily;
  const open=expandedClientProductId===p.id;

  return `<article id="client_product_${p.id}" class="client-product-accordion${open?' open':''}">
    <button class="client-product-summary" onclick="toggleClientProduct('${p.id}')" aria-expanded="${open?'true':'false'}">
      <div class="client-product-summary-left">
        <div class="client-product-icon">${p.icon||''}</div>
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
  const qty=daily?1:Number(document.getElementById('qty_'+pid)?.value||1);
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

    if(sameGroupInCart){
      return alert('Já existe um item deste mesmo grupo de capacidade no carrinho para esta data e período.');
    }
  }else{
    const free=availableSlotsForProductDate(p,date);
    if(free.length<2){
      refreshProductAvailability(pid);
      return alert('Lamentamos mas nesta data e período não há disponibilidade, por favor selecione outra data de sua conveniência.');
    }
  }

  cart.push({
    id:id(),
    productId:pid,
    categoryId:p.cat,
    capacityGroup:group,
    name:p.name,
    qty:daily?1:qty,
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
          const locked=!!i.schedule?.length || productRequiresPeriod(p) || isDailyRentalProduct(p);

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

  for(const i of cart){
    const p=db.products.find(x=>x.id===i.productId);
    if(!p)return alert('Produto não encontrado.');

    const group=capacityGroupForProduct(p);
    const fullDay=isDailyRentalProduct(p)||isDailyUnitPackage(p);
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
        if(!slot||productClosedForSelection(p,use.date,slot)||capacityGroupSlotOccupied(use.date,slot,group)){
          return alert(fullDay
            ?'Esta diária não está mais disponível na data selecionada. Escolha outra data.'
            :'Lamentamos mas nesta data e período não há disponibilidade, por favor selecione outra data de sua conveniência.');
        }

        if(reservations.some(r=>r.date===use.date&&r.slot===slot&&r.group===group)){
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
  page='confirmation';

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


function adminView(){let menus=[
  ['dashboard','Visão geral'],
  ['rooms','Quartos/Apartamentos'],
  ['categories','Categorias'],
  ['products','Produtos/Preços'],
  ['leisure','Lazer e Conveniências'],
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
    console.info('APP SERVIÇOS VERSÁTIL - Versão 1.67 carregada.');
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

