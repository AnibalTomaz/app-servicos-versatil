const ADMIN_EMAILS=['anibal@starlis.com.br','versatil@starlis.com.br'];
const APP_NAME='APP SERVIÇOS VERSÁTIL';
const APP_TIMEZONE='America/Cuiaba';
const CURRENT_APP_VERSION='2.51';
const EXTRA_CINEMAS_GUIDE_V201=[{"id":"cinemas_root_v201","parentId":"","type":"group","name":"CINEMAS","description":"Cinemas em Cuiabá.","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":15},{"id":"cinema_cinelaser_v201","parentId":"cinemas_root_v201","type":"place","name":"Cinelaser Cinemas","description":"Goiabeiras Shopping — Av. José Monteiro de Figueiredo, 500 - Duque de Caxias.","distance":"aprox. 1,1 km","phone":"(65) 99992-3626","imageUrl":"","mapQuery":"Cinelaser Goiabeiras Shopping Cuiabá MT","sort":1},{"id":"cinema_cinepolis_v201","parentId":"cinemas_root_v201","type":"place","name":"Cinépolis","description":"Shopping Estação Cuiabá — Av. Miguel Sutil, 9300 - Duque de Caxias. Atendimento centralizado online pela Cinépolis.","distance":"aprox. 2,0 km","phone":"Atendimento online","imageUrl":"","mapQuery":"Cinépolis Shopping Estação Cuiabá MT","sort":2},{"id":"cinema_cineflix_v201","parentId":"cinemas_root_v201","type":"place","name":"Cineflix","description":"Shopping 3 Américas — Av. Brasília, 146 - Jardim das Américas.","distance":"aprox. 4,8 km","phone":"(65) 3627-5501 (Shopping)","imageUrl":"","mapQuery":"Cineflix Shopping 3 Américas Cuiabá MT","sort":3},{"id":"cinema_araujo_v201","parentId":"cinemas_root_v201","type":"place","name":"Cine Araújo","description":"Pantanal Shopping — Av. Historiador Rubens de Mendonça, 3300 - Jardim Aclimação.","distance":"aprox. 5,3 km","phone":"+55 65 3901-4123","imageUrl":"","mapQuery":"Cine Araújo Pantanal Shopping Cuiabá MT","sort":4}];
const EXTRA_LEISURE_GUIDE_V196=[{"id":"fish_root_v196","parentId":"","type":"group","name":"PESCA ESPORTIVA","description":"Destinos de pesca esportiva em Mato Grosso.","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":55},{"id":"fish_pantanal_v196","parentId":"fish_root_v196","type":"group","name":"Cuiabá e Pantanal","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":10},{"id":"fish_cuiaba_v196","parentId":"fish_pantanal_v196","type":"place","name":"Cuiabá","description":"Espécies: Pacu, pintado, cachara, dourado e piraputanga. Melhor época: Março a Setembro (período da seca e vazante). Defeso: 01 de outubro a 31 de janeiro.","distance":"aprox. 0 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"https://www.midianews.com.br/storage/webdisco/2017/02/16/886x590/7828c9bf8660987ec3b80ccb8c083e31.jpg","mapQuery":"Cuiabá MT pesca esportiva","sort":1},{"id":"fish_caceres_v196","parentId":"fish_pantanal_v196","type":"place","name":"Cáceres","description":"Espécies: Dourado, pintado, jaú, pacu e cachara. Melhor época: Junho a Setembro. Defeso: 01 de outubro a 31 de janeiro.","distance":"aprox. 220 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"https://www.sospantanal.org.br/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-20-at-18.10.03-1024x767.jpeg","mapQuery":"Cáceres MT pesca esportiva","sort":2},{"id":"fish_pocone_v196","parentId":"fish_pantanal_v196","type":"place","name":"Poconé","description":"Espécies: Pintado, dourado, pacu, piranha e piavuçu. Melhor época: Julho a Setembro. Defeso: 01 de outubro a 31 de janeiro.","distance":"aprox. 105 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"https://www.sospantanal.org.br/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-20-at-18.10.03-1024x767.jpeg","mapQuery":"Poconé MT pesca esportiva","sort":3},{"id":"fish_barao_v196","parentId":"fish_pantanal_v196","type":"place","name":"Barão de Melgaço","description":"Espécies: Pacu, piraputanga, pintado, cachara e dourado. Melhor época: Abril a Agosto. Defeso: 01 de outubro a 31 de janeiro.","distance":"aprox. 110 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"https://www.sospantanal.org.br/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-20-at-18.10.03-1024x767.jpeg","mapQuery":"Barão de Melgaço MT pesca esportiva","sort":4},{"id":"fish_norte_v196","parentId":"fish_root_v196","type":"group","name":"Polos do Norte e Bacia Amazônica","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":20},{"id":"fish_sinop_v196","parentId":"fish_norte_v196","type":"place","name":"Sinop","description":"Espécies: Tucunaré, trairão, cachorra, jaú e matrinxã. Melhor época: Maio a Setembro. Defeso: 01 de outubro a 31 de janeiro.","distance":"aprox. 500 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"https://www.cvc.com.br/dicas-de-viagem/wp-content/uploads/2022/04/Aquario-Encantado-768x512.jpg","mapQuery":"Sinop MT pesca esportiva","sort":1},{"id":"fish_alta_v196","parentId":"fish_norte_v196","type":"place","name":"Alta Floresta","description":"Espécies: Tucunaré fogo, trairão, jaú, pirarara e piraíba. Melhor época: Junho a Novembro. Defeso: 01 de outubro a 31 de janeiro.","distance":"aprox. 800 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"https://www.cvc.com.br/dicas-de-viagem/wp-content/uploads/2022/04/Aquario-Encantado-768x512.jpg","mapQuery":"Alta Floresta MT pesca esportiva","sort":2},{"id":"fish_novacanaa_v196","parentId":"fish_norte_v196","type":"place","name":"Nova Canaã do Norte","description":"Espécies: Tucunaré, matrinxã, bicuda, jaú e cachorra. Melhor época: Maio a Outubro. Defeso: 01 de outubro a 31 de janeiro.","distance":"aprox. 690 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"https://www.cvc.com.br/dicas-de-viagem/wp-content/uploads/2022/04/Aquario-Encantado-768x512.jpg","mapQuery":"Nova Canaã do Norte MT pesca esportiva","sort":3},{"id":"fish_araguaia_v196","parentId":"fish_root_v196","type":"group","name":"Polos da Região do Araguaia e Fronteiras","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":30},{"id":"fish_saofelix_v196","parentId":"fish_araguaia_v196","type":"place","name":"São Félix do Araguaia","description":"Espécies: Pirarucu, tucunaré, piraíba, pirarara e bargre. Melhor época: Junho a Outubro (época das praias). Defeso: 01 de outubro a 31 de janeiro.","distance":"aprox. 1.150 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"https://www.cvc.com.br/dicas-de-viagem/wp-content/uploads/2022/04/Aquario-Encantado-768x512.jpg","mapQuery":"São Félix do Araguaia MT pesca esportiva","sort":1},{"id":"fish_canarana_v196","parentId":"fish_araguaia_v196","type":"place","name":"Canarana","description":"Espécies: Tucunaré, trairão, cachorra e peixes de couro do Araguaia. Melhor época: Junho a Setembro. Defeso: 01 de outubro a 31 de janeiro.","distance":"aprox. 640 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"https://www.cvc.com.br/dicas-de-viagem/wp-content/uploads/2022/04/Aquario-Encantado-768x512.jpg","mapQuery":"Canarana MT pesca esportiva","sort":2},{"id":"fish_pontes_v196","parentId":"fish_araguaia_v196","type":"place","name":"Pontes e Lacerda","description":"Espécies: Dourado, pintado, cachara, pacu e piau. Melhor época: Março a Agosto. Defeso: 01 de outubro a 31 de janeiro.","distance":"aprox. 450 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"https://www.sospantanal.org.br/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-20-at-18.10.03-1024x767.jpeg","mapQuery":"Pontes e Lacerda MT pesca esportiva","sort":3}];
const EXTRA_LEISURE_GUIDE_V173=[{"id":"choppao_regionais_v173","parentId":"lz_159","type":"place","name":"Restaurante Choppão","description":"Restaurante tradicional de Cuiabá, desde 1974, com culinária regional, carnes, peixes, pizzas, porções e choperia.","distance":"aprox. 1,2 km","phone":"(65) 3623-5005","imageUrl":"https://storage.lucasmendes.dev/site-sp/choppao%20restaurante%2Fimg%2Ffrente-restaurante-noturno-movimentado.webp","mapQuery":"Restaurante Choppão, Praça 8 de Abril, 44, Goiabeiras, Cuiabá MT","sort":1}];
const EXTRA_LEISURE_GUIDE_V171=[{"id":"grp_teatros_v171","parentId":"","type":"group","name":"TEATROS","description":"Teatros e artes cênicas em Cuiabá.","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":50},{"id":"cine_teatro_v171","parentId":"grp_teatros_v171","type":"place","name":"Cine Teatro Cuiabá","description":"Cinema, teatro, dança e música.","distance":"aprox. 2,5 km","phone":"(65) 2129-3848","imageUrl":"","mapQuery":"Cine Teatro Cuiabá, Avenida Presidente Getúlio Vargas 247, Cuiabá MT","sort":10},{"id":"zulmira_v171","parentId":"grp_teatros_v171","type":"place","name":"Teatro do Cerrado Zulmira Canavarros","description":"Teatro para eventos e manifestações artísticas.","distance":"aprox. 5 km","phone":"(65) 3313-6876","imageUrl":"","mapQuery":"Teatro Cerrado Zulmira Canavarros Cuiabá","sort":20},{"id":"grp_hospitais_v171","parentId":"","type":"group","name":"HOSPITAIS E UPA","description":"Hospitais e pronto atendimento em Cuiabá.","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":60},{"id":"santarosa_v171","parentId":"grp_hospitais_v171","type":"place","name":"Hospital Santa Rosa","description":"Hospital 24 horas.","distance":"aprox. 1,4 km","phone":"(65) 3618-8000","imageUrl":"","mapQuery":"Hospital Santa Rosa Cuiabá","sort":10},{"id":"hmc_v171","parentId":"grp_hospitais_v171","type":"place","name":"Hospital Municipal de Cuiabá - HMC","description":"Hospital municipal e pronto-socorro 24 horas.","distance":"aprox. 4,2 km","phone":"(65) 3318-6900","imageUrl":"","mapQuery":"Hospital Municipal de Cuiabá HMC","sort":20},{"id":"hujm_v171","parentId":"grp_hospitais_v171","type":"place","name":"Hospital Universitário Júlio Müller","description":"Hospital universitário da UFMT/Ebserh.","distance":"aprox. 2,5 km","phone":"(65) 3615-7249","imageUrl":"","mapQuery":"Hospital Universitário Júlio Müller Cuiabá","sort":30},{"id":"complexo_v171","parentId":"grp_hospitais_v171","type":"place","name":"Complexo Hospitalar de Cuiabá","description":"Hospital 24 horas.","distance":"aprox. 2 km","phone":"(65) 3051-3000","imageUrl":"","mapQuery":"Complexo Hospitalar de Cuiabá","sort":40},{"id":"upa_verdao_v171","parentId":"grp_hospitais_v171","type":"place","name":"UPA Verdão","description":"Unidade de Pronto Atendimento 24 horas.","distance":"aprox. 3,5 km","phone":"(65) 3617-1458","imageUrl":"","mapQuery":"UPA Verdão Cuiabá","sort":50},{"id":"upa_morada_v171","parentId":"grp_hospitais_v171","type":"place","name":"UPA Morada do Ouro","description":"Unidade de Pronto Atendimento 24 horas.","distance":"aprox. 5,3 km","phone":"(65) 3645-5700","imageUrl":"","mapQuery":"UPA Morada do Ouro Cuiabá","sort":60},{"id":"upa_pascoal_v171","parentId":"grp_hospitais_v171","type":"place","name":"UPA Pascoal Ramos","description":"Unidade de Pronto Atendimento 24 horas.","distance":"aprox. 12 km","phone":"(65) 3667-4129","imageUrl":"","mapQuery":"UPA Pascoal Ramos Cuiabá","sort":70},{"id":"upa_leblon_v171","parentId":"grp_hospitais_v171","type":"place","name":"UPA Leblon","description":"Unidade de Pronto Atendimento 24 horas.","distance":"aprox. 2,4 km","phone":"(65) 3318-6542","imageUrl":"","mapQuery":"UPA Leblon Cuiabá","sort":80}];
const DEFAULT_LEISURE_GUIDE_V167=[{"id":"lz_002","parentId":"","type":"group","name":"TURISMO","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":2},{"id":"lz_003","parentId":"lz_002","type":"group","name":"Parques","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":3},{"id":"lz_004","parentId":"lz_003","type":"place","name":"Parque Estadual Mãe Bonifácia","description":"","distance":"aprox. 1,8 km","phone":"(65) 3623-4965","imageUrl":"https://photos.wikimapia.org/p/00/00/81/39/19_big.jpg","mapQuery":"Parque Estadual Mãe Bonifácia, Cuiabá MT","sort":4},{"id":"lz_005","parentId":"lz_003","type":"place","name":"Parque das Águas \"Seo Fiote\"","description":"","distance":"aprox. 4,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"https://www.midianews.com.br/storage/webdisco/2017/01/02/886x590/7f1ab3a4177923599e0cf1ff7835e5a8.jpg","mapQuery":"Parque das Águas \"Seo Fiote\", Cuiabá MT","sort":5},{"id":"lz_006","parentId":"lz_003","type":"place","name":"Parque Tia Nair","description":"","distance":"aprox. 6,5 km","phone":"(65) 3645-6279","imageUrl":"https://str1.lnmimg.net/img/2025/08/14/1f0cefb5a82e11c2b291942077129efc.webp","mapQuery":"Parque Tia Nair, Cuiabá MT","sort":6},{"id":"lz_007","parentId":"lz_003","type":"place","name":"Parque Estadual Zé Bolo Flô","description":"","distance":"aprox. 8,5 km","phone":"(65) 98464-8416","imageUrl":"","mapQuery":"Parque Estadual Zé Bolo Flô, Cuiabá MT","sort":7},{"id":"lz_008","parentId":"lz_003","type":"place","name":"Parque Estadual Massairo Okamura","description":"","distance":"aprox. 5,2 km","phone":"(65) 99328-0670","imageUrl":"","mapQuery":"Parque Estadual Massairo Okamura, Cuiabá MT","sort":8},{"id":"lz_009","parentId":"lz_003","type":"place","name":"Parque da Família","description":"","distance":"aprox. 6,0 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Parque da Família, Cuiabá MT","sort":9},{"id":"lz_010","parentId":"lz_003","type":"place","name":"Parque Morro da Luz","description":"","distance":"aprox. 2,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Parque Morro da Luz, Cuiabá MT","sort":10},{"id":"lz_011","parentId":"lz_003","type":"place","name":"Horto Florestal Tote Garcia","description":"","distance":"aprox. 7,2 km","phone":"(65) 3313-3157","imageUrl":"","mapQuery":"Horto Florestal Tote Garcia, Cuiabá MT","sort":11},{"id":"lz_012","parentId":"lz_003","type":"place","name":"Parque da Nascente","description":"","distance":"aprox. 5,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Parque da Nascente, Cuiabá MT","sort":12},{"id":"lz_013","parentId":"lz_003","type":"place","name":"Parque de Exposições Senador Jonas Pinheiro","description":"","distance":"aprox. 4,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Parque de Exposições Senador Jonas Pinheiro, Cuiabá MT","sort":13},{"id":"lz_014","parentId":"lz_002","type":"group","name":"museus","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":14},{"id":"lz_015","parentId":"lz_014","type":"place","name":"Museu de História Natural de Mato Grosso (Casa Dom Aquino)","description":"focado em paleontologia, arqueologia e etnologia, exibindo fósseis e acervos pré-históricos da região.","distance":"aprox. 5,2 km","phone":"(65) 3634-4858","imageUrl":"https://www.secel.mt.gov.br/documents/362998/14597620/Museu%2Bde%2Bhist%C3%B3ria%2Bnatural%2B-%2Bfrente%2Brio%2Bcuiab%C3%A1.jpg/70cbe33e-a4ef-3ae6-70c5-e996e17a8d4c?t=1650471365613","mapQuery":"Museu de História Natural de Mato Grosso (Casa Dom Aquino), Cuiabá MT","sort":15},{"id":"lz_016","parentId":"lz_014","type":"place","name":"Museu de Arte Sacra de Mato Grosso","description":"localizado no antigo Seminário da Conceição, reúne acervo religioso do século XVIII em diante.","distance":"aprox. 3,0 km","phone":"(65) 3056-1373","imageUrl":"https://stppprod01.blob.core.windows.net/pp-prod-container/2021/11/Museu-da-Arte-Sacra.jpg","mapQuery":"Museu de Arte Sacra de Mato Grosso, Cuiabá MT","sort":16},{"id":"lz_017","parentId":"lz_014","type":"place","name":"Museu do Morro da Caixa d'Água Velha","description":"ocupa os antigos reservatórios subterrâneos do século XIX e abriga exposições de arte e acervos históricos.","distance":"aprox. 2,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"https://ihgmt.nyc3.digitaloceanspaces.com/storage/webdisco/2021/08/04/800x600/4960fb9811a9e6e2dc8ba0319d14623d.jpg","mapQuery":"Museu do Morro da Caixa d'Água Velha, Cuiabá MT","sort":17},{"id":"lz_018","parentId":"lz_014","type":"place","name":"Museu da Imagem e do Som de Cuiabá (MISC)","description":"dedicado à preservação do patrimônio audiovisual e fotográfico da cidade.","distance":"aprox. 2,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"https://www.cuiaba.mt.gov.br/storage/webdisco/2025/02/27/original/2025-02-27-17-43-088a9399-67c0dc6c328fc.jpg","mapQuery":"Museu da Imagem e do Som de Cuiabá (MISC), Cuiabá MT","sort":18},{"id":"lz_019","parentId":"lz_014","type":"place","name":"Museu Histórico de Mato Grosso","description":"resgata a história política, social e cultural do estado através de documentos e objetos históricos.","distance":"aprox. 2,6 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Museu Histórico de Mato Grosso, Cuiabá MT","sort":19},{"id":"lz_020","parentId":"lz_014","type":"place","name":"Museu Rondon de Etnologia e Arqueologia (UFMT)","description":"voltado para a preservação e estudo das culturas e povos indígenas.","distance":"aprox. 5,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Museu Rondon de Etnologia e Arqueologia (UFMT), Cuiabá MT","sort":20},{"id":"lz_021","parentId":"lz_014","type":"place","name":"Museu de Arte e Cultura Popular (MACP/UFMT)","description":"reúne um rico acervo de obras plásticas e artesanato da cultura popular mato-grossense.","distance":"aprox. 5,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Museu de Arte e Cultura Popular (MACP/UFMT), Cuiabá MT","sort":21},{"id":"lz_022","parentId":"lz_014","type":"place","name":"Museu do Rio Cuiabá \"Hid Alfredo Scaff\"","description":"situado no antigo Mercado do Peixe, às margens do rio, com acervo sobre a história do bairro do Porto e do rio Cuiabá.","distance":"aprox. 4,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Museu do Rio Cuiabá \"Hid Alfredo Scaff\", Cuiabá MT","sort":22},{"id":"lz_023","parentId":"lz_014","type":"place","name":"Museu Residência dos Governadores","description":"casarão histórico que foi moradia oficial de ex-governadores e hoje expõe mobiliário e acervo da época.","distance":"aprox. 3,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Museu Residência dos Governadores, Cuiabá MT","sort":23},{"id":"lz_024","parentId":"lz_014","type":"place","name":"Museu de Minerais, Rochas e Fósseis (UFMT)","description":"voltado ao estudo geocientífico com amostras registradas de minerais e fósseis.","distance":"aprox. 5,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Museu de Minerais, Rochas e Fósseis (UFMT), Cuiabá MT","sort":24},{"id":"lz_025","parentId":"lz_014","type":"place","name":"Museu das Bonecas e Brinquedos","description":"coleção particular com acervo de bonecas antigas e brinquedos clássicos.","distance":"aprox. 4,0 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Museu das Bonecas e Brinquedos, Cuiabá MT","sort":25},{"id":"lz_026","parentId":"lz_002","type":"group","name":"Aquários","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":26},{"id":"lz_027","parentId":"lz_026","type":"place","name":"Aquário Municipal Justino Malheiros","description":"situado no bairro Porto (às margens do rio Cuiabá, ao lado do Museu do Rio), abriga dezenas de espécies de peixes nativos dos biomas de Mato Grosso, como o Pantanal e a Amazônia (incluindo espécies como pirarucu, dourado, tucunaré e jaú).","distance":"aprox. 4,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Aquário Municipal Justino Malheiros, Cuiabá MT","sort":27},{"id":"lz_028","parentId":"lz_002","type":"group","name":"Marcos geográficos","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":28},{"id":"lz_029","parentId":"lz_028","type":"place","name":"Centro Geodésico da América do Sul","description":"localizado na Praça Pascoal Moreira Cabral, indica o ponto equidistante entre os oceanos Atlântico e Pacífico, determinado pelo Marechal Cândido Rondon.","distance":"aprox. 2,6 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"https://www.folhamax.com/storage/webdisco/2022/09/20/810x519/47ed7c1ec8e843192b65d1a00e13365b.jpg","mapQuery":"Centro Geodésico da América do Sul, Cuiabá MT","sort":29},{"id":"lz_030","parentId":"lz_028","type":"place","name":"Rio Cuiabá","description":"principal curso d'água que corta a cidade, divisor natural de municípios e via histórica de integração do Pantanal.","distance":"aprox. 4,0 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Rio Cuiabá, Cuiabá MT","sort":30},{"id":"lz_031","parentId":"lz_028","type":"place","name":"Morro da Caixa d'Água","description":"ponto elevado no centro urbano que serviu historicamente como reservatório natural e área de captação de água da cidade.","distance":"aprox. 2,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Morro da Caixa d'Água, Cuiabá MT","sort":31},{"id":"lz_032","parentId":"lz_028","type":"place","name":"Morro do Seminário","description":"elevação natural onde se localiza o antigo Seminário da Conceição (atual Museu de Arte Sacra), oferecendo visão panorâmica do centro histórico.","distance":"aprox. 3,0 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Morro do Seminário, Cuiabá MT","sort":32},{"id":"lz_033","parentId":"lz_028","type":"place","name":"Morro da Luz","description":"área de relevo elevado coberta por mata nativa no coração do perímetro urbano.","distance":"aprox. 2,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Morro da Luz, Cuiabá MT","sort":33},{"id":"lz_034","parentId":"lz_028","type":"place","name":"Morro de Santo Antônio","description":"elevação cônica de grande destaque na paisagem do Vale do Rio Cuiabá (localizada no município vizinho de Santo Antônio de Leverger, a cerca de 25 km do centro).","distance":"aprox. 35 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Morro de Santo Antônio, Cuiabá MT","sort":34},{"id":"lz_035","parentId":"lz_028","type":"place","name":"Paredões da Chapada dos Guimarães","description":"formação de escarpas avermelhadas da bacia do Paraná que delimitam a transição entre o planalto e a depressão cuiabana no horizonte da cidade.","distance":"aprox. 65 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Paredões da Chapada dos Guimarães, Cuiabá MT","sort":35},{"id":"lz_036","parentId":"lz_002","type":"group","name":"Locais turísticos","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":36},{"id":"lz_037","parentId":"lz_036","type":"place","name":"Centro Histórico e Catedral Basílica do Bom Jesus","description":"conjunto de casarios coloniais, praças históricas e o principal cartão-postal religioso da capital.","distance":"aprox. 2,6 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Centro Histórico e Catedral Basílica do Bom Jesus, Cuiabá MT","sort":37},{"id":"lz_038","parentId":"lz_036","type":"place","name":"Mercado do Porto","description":"espaço tradicional de gastronomia regional, venda de pescados, temperos e artesanato mato-grossense.","distance":"aprox. 4,0 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"https://www.gov.br/sudeco/pt-br/assuntos/noticias/2020/mercado-do-porto-em-cuiaba-mt-recebe-r-1-5-milhao-para-sua-ampliacao-e-modernizacao/mercado-do-porto_velho.jpg","mapQuery":"Mercado do Porto, Cuiabá MT","sort":38},{"id":"lz_039","parentId":"lz_036","type":"place","name":"Parque das Águas e Parque Mãe Bonifácia","description":"áreas de lazer urbano com trilhas, fauna local e atrações como o Show das Águas.","distance":"aprox. 1,8 a 4,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Parque das Águas e Parque Mãe Bonifácia, Cuiabá MT","sort":39},{"id":"lz_040","parentId":"lz_036","type":"place","name":"Orla do Porto","description":"calçadão às margens do Rio Cuiabá com restaurantes e museus culturais ao redor.","distance":"aprox. 4,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"https://www.midianews.com.br/storage/webdisco/2017/02/16/886x590/7828c9bf8660987ec3b80ccb8c083e31.jpg","mapQuery":"Orla do Porto, Cuiabá MT","sort":40},{"id":"lz_041","parentId":"lz_036","type":"group","name":"Atrações em Nobres (Vila Bom Jardim e Região)","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":41},{"id":"lz_042","parentId":"lz_041","type":"place","name":"Aquário Encantado e Rio Salobra","description":"lagoa azul-cristalina em meio à mata para flutuação com centenas de peixes.","distance":"aprox. 140 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"https://www.cvc.com.br/dicas-de-viagem/wp-content/uploads/2022/04/Aquario-Encantado-768x512.jpg","mapQuery":"Aquário Encantado e Rio Salobra, Cuiabá MT","sort":42},{"id":"lz_043","parentId":"lz_041","type":"place","name":"Cachoeira da Serra Azul","description":"queda d'água de 45 metros com poço azul para banho e acesso por tirolesa.","distance":"aprox. 45 m","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Cachoeira da Serra Azul, Cuiabá MT","sort":43},{"id":"lz_044","parentId":"lz_041","type":"place","name":"Lagoa das Araras","description":"ponto de observação ao entardecer para contemplar araras, maritacas e tucanos nos buritizeiros.","distance":"aprox. 145 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"https://upack.tur.br/wp-content/uploads/2021/06/upack-nobres-lagoa-das-araras.jpg","mapQuery":"Lagoa das Araras, Cuiabá MT","sort":44},{"id":"lz_045","parentId":"lz_041","type":"place","name":"Reino Encantado e Estância Duto do Quebó","description":"rios cristalinos para flutuação e passeios de bóia-cross por cavernas subterrâneas.","distance":"aprox. 143 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Reino Encantado e Estância Duto do Quebó, Cuiabá MT","sort":45},{"id":"lz_046","parentId":"lz_036","type":"group","name":"Parque Nacional da Chapada dos Guimarães (\~65 km)","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":46},{"id":"lz_047","parentId":"lz_046","type":"place","name":"Cachoeira Véu de Noiva","description":"imponente queda d'água de 86 metros em meio aos paredões.","distance":"aprox. 86 m","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"https://www.vidadeturista.com/wp-content/uploads/2020/11/parque-nacional-chapada-dos-guimaraes-mt-1.jpg","mapQuery":"Cachoeira Véu de Noiva, Cuiabá MT","sort":47},{"id":"lz_048","parentId":"lz_046","type":"place","name":"Cidade de Pedra e Mirante Morro dos Ventos","description":"vista panorâmica dos paredões de arenito avermelhado.","distance":"aprox. 75 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Cidade de Pedra e Mirante Morro dos Ventos, Cuiabá MT","sort":48},{"id":"lz_049","parentId":"lz_046","type":"place","name":"Circuito das Cachoeiras","description":"trilha que passa por diversas quedas e piscinas naturais cristalinas.","distance":"aprox. 70 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Circuito das Cachoeiras, Cuiabá MT","sort":49},{"id":"lz_050","parentId":"lz_046","type":"place","name":"Complexo Turístico da Salgadeira","description":"área de lazer estruturada para banho de rio no pé da serra.","distance":"aprox. 45 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Complexo Turístico da Salgadeira, Cuiabá MT","sort":50},{"id":"lz_051","parentId":"lz_036","type":"group","name":"Portal do Pantanal Norte — Poconé (\~100 km)","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":51},{"id":"lz_052","parentId":"lz_051","type":"place","name":"Rodovia Transpantaneira","description":"ponto de partida para safáris fotográficos para observação de jacarés, capivaras, tuiuiús e onças-pintadas.","distance":"aprox. 100 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"https://www.sospantanal.org.br/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-20-at-18.10.03-1024x767.jpeg","mapQuery":"Rodovia Transpantaneira, Cuiabá MT","sort":52},{"id":"lz_053","parentId":"lz_051","type":"place","name":"Pousadas Pantaneiras","description":"focagem noturna, cavalgadas ecológicas e passeios de barco pelos corixos.","distance":"aprox. 110 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Pousadas Pantaneiras, Cuiabá MT","sort":53},{"id":"lz_054","parentId":"lz_036","type":"group","name":"Jaciara (\~140 km)","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":54},{"id":"lz_055","parentId":"lz_054","type":"place","name":"Esportes de Aventura no Rio Tenente Amaral","description":"polo regional de rafting, cachoeirismo e rapel.","distance":"aprox. 145 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Esportes de Aventura no Rio Tenente Amaral, Cuiabá MT","sort":55},{"id":"lz_056","parentId":"lz_054","type":"place","name":"Cachoeira da Fumaça e Balneário Thermas","description":"quedas d'água volumosas e poços para banho.","distance":"aprox. 140 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Cachoeira da Fumaça e Balneário Thermas, Cuiabá MT","sort":56},{"id":"lz_057","parentId":"lz_036","type":"group","name":"Santo Antônio de Leverger (\~35 km)","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":57},{"id":"lz_058","parentId":"lz_057","type":"place","name":"Morro de Santo Antônio","description":"elevação cônica tradicional para trilhas e caminhadas ecológicas.","distance":"aprox. 35 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Morro de Santo Antônio, Cuiabá MT","sort":58},{"id":"lz_059","parentId":"lz_057","type":"place","name":"Turismo Fluvial","description":"pesca esportiva e restaurantes de peixe à beira do Rio Cuiabá.","distance":"aprox. 35 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Turismo Fluvial, Cuiabá MT","sort":59},{"id":"lz_060","parentId":"","type":"group","name":"CONVENIÊNCIAS","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":60},{"id":"lz_061","parentId":"lz_060","type":"group","name":"Mercados","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":61},{"id":"lz_062","parentId":"lz_061","type":"place","name":"Mercearia / Mercado Mattozo (Mattozo Prime)","description":"tradicional comércio de bairro focado em hortifrúti, mercearia fina e cortes de carnes nobres, localizado na própria Rua Presidente Afonso Pena, no mesmo quarteirão (~100 m).","distance":"aprox. 100 m","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Mercearia / Mercado Mattozo (Mattozo Prime), Cuiabá MT","sort":62},{"id":"lz_063","parentId":"lz_061","type":"place","name":"Supermercado Big Lar (Unidade Miguel Sutil)","description":"referência no bairro Quilombo para hortifrúti fresco, padaria artesanal e alimentos importados (~600 m).","distance":"aprox. 600 m","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Supermercado Big Lar (Unidade Miguel Sutil), Cuiabá MT","sort":63},{"id":"lz_064","parentId":"lz_061","type":"place","name":"Supermercado América (Unidade Santa Helena)","description":"minimercado vizinho focado nas compras diárias de mercearia e produtos essenciais (~800 m).","distance":"aprox. 800 m","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Supermercado América (Unidade Santa Helena), Cuiabá MT","sort":64},{"id":"lz_065","parentId":"lz_061","type":"place","name":"Comper (Unidade Trevo do Santa Rosa / Av. Miguel Sutil)","description":"supermercado completo com açougue, padaria e grande variedade de itens (~1,2 km).","distance":"aprox. 1,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Comper (Unidade Trevo do Santa Rosa / Av. Miguel Sutil), Cuiabá MT","sort":65},{"id":"lz_066","parentId":"lz_061","type":"place","name":"Supermercado Dia a Dia (Unidade Miguel Sutil)","description":"formato atacarejo para compras de médio e grande porte (~1,5 km).","distance":"aprox. 1,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Supermercado Dia a Dia (Unidade Miguel Sutil), Cuiabá MT","sort":66},{"id":"lz_067","parentId":"lz_061","type":"place","name":"Comper (Unidade Av. Barão de Melgaço)","description":"loja tradicional da rede, muito próxima ao limite entre os bairros Goiabeiras e Centro (~1,8 km).","distance":"aprox. 1,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Comper (Unidade Av. Barão de Melgaço), Cuiabá MT","sort":67},{"id":"lz_068","parentId":"lz_061","type":"place","name":"Assaí Atacadista (Unidade Av. CPA / Historiador Rubens de Mendonça)","description":"hipermercado atacarejo de grande porte (~2,8 km).","distance":"aprox. 2,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Assaí Atacadista (Unidade Av. CPA / Historiador Rubens de Mendonça), Cuiabá MT","sort":68},{"id":"lz_069","parentId":"lz_061","type":"place","name":"Atacadão (Unidade Porto / Av. XV de Novembro)","description":"atacarejo tradicional com ampla variedade e foco em preços de volume (~3,5 km).","distance":"aprox. 3,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Atacadão (Unidade Porto / Av. XV de Novembro), Cuiabá MT","sort":69},{"id":"lz_070","parentId":"lz_061","type":"place","name":"Fort Atacadista (Unidade Miguel Sutil)","description":"grande loja no modelo de atacarejo com preços competitivos (~4,2 km).","distance":"aprox. 4,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Fort Atacadista (Unidade Miguel Sutil), Cuiabá MT","sort":70},{"id":"lz_071","parentId":"lz_060","type":"group","name":"Farmácias","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":71},{"id":"lz_072","parentId":"lz_071","type":"place","name":"Drogaria São Paulo (Unidade Av. Miguel Sutil)","description":"loja ampla com funcionamento 24h, grande variedades de dermocosméticos e estacionamento próprio (~700 m).","distance":"aprox. 700 m","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Drogaria São Paulo (Unidade Av. Miguel Sutil), Cuiabá MT","sort":72},{"id":"lz_073","parentId":"lz_071","type":"place","name":"Farmácia Pague Menos (Unidade Av. Getúlio Vargas / Goiabeiras)","description":"excelente opção com programa de descontos e atendimento rápido em via principal (~1,1 km).","distance":"aprox. 1,1 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Farmácia Pague Menos (Unidade Av. Getúlio Vargas / Goiabeiras), Cuiabá MT","sort":73},{"id":"lz_074","parentId":"lz_071","type":"place","name":"Droga Raia (Unidade Av. José Monteiro de Figueiredo / Goiabeiras)","description":"localizada próxima ao Shopping Goiabeiras, conta com linha completa de medicamentos e produtos de cuidados pessoais (~1,2 km).","distance":"aprox. 1,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Droga Raia (Unidade Av. José Monteiro de Figueiredo / Goiabeiras), Cuiabá MT","sort":74},{"id":"lz_075","parentId":"lz_071","type":"place","name":"Drogasil (Unidade Av. Isaac Póvoas / Centro)","description":"farmácia tradicional em corredor movimentado, com programa de fidelidade e fácil acesso (~1,5 km).","distance":"aprox. 1,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Drogasil (Unidade Av. Isaac Póvoas / Centro), Cuiabá MT","sort":75},{"id":"lz_076","parentId":"lz_071","type":"place","name":"Farmácia Preço Popular (Unidade Centro / Tenente Coronel Duarte)","description":"focada em medicamentos genéricos e preços mais acessíveis (~2,1 km).","distance":"aprox. 2,1 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Farmácia Preço Popular (Unidade Centro / Tenente Coronel Duarte), Cuiabá MT","sort":76},{"id":"lz_077","parentId":"lz_060","type":"group","name":"Posto de combustível","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":77},{"id":"lz_078","parentId":"lz_077","type":"place","name":"Auto Posto Miguel Sutil / Vip","description":"localizado na própria margem da via expressa no limite do bairro Quilombo (~500 m).","distance":"aprox. 500 m","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Auto Posto Miguel Sutil / Vip, Cuiabá MT","sort":78},{"id":"lz_079","parentId":"lz_077","type":"place","name":"Posto Shell / Santa Marta","description":"opção completa com combustível aditivado e loja de conveniência próximo ao trevo do Santa Rosa (~1,1 km).","distance":"aprox. 1,1 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Posto Shell / Santa Marta, Cuiabá MT","sort":79},{"id":"lz_080","parentId":"lz_077","type":"place","name":"Posto Petrobras / Millenium","description":"localizado na Miguel Sutil com estrutura para abastecimento rápido e troca de óleo (~1,8 km).","distance":"aprox. 1,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Posto Petrobras / Millenium, Cuiabá MT","sort":80},{"id":"lz_081","parentId":"lz_077","type":"place","name":"Posto Shell / Rede Conti (Rua Estêvão de Mendonça)","description":"excelente localização no coração do Goiabeiras, servindo a quem transita entre o Quilombo e o Centro (~900 m).","distance":"aprox. 900 m","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Posto Shell / Rede Conti (Rua Estêvão de Mendonça), Cuiabá MT","sort":81},{"id":"lz_082","parentId":"lz_077","type":"place","name":"Posto Ipiranga (Av. Getúlio Vargas)","description":"com loja AmPm e serviços completos em uma das principais vias arteriais da capital (~1,3 km).","distance":"aprox. 1,3 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Posto Ipiranga (Av. Getúlio Vargas), Cuiabá MT","sort":82},{"id":"lz_083","parentId":"lz_077","type":"place","name":"Auto Posto Monte Líbano (Av. República do Líbano)","description":"localizado na saída para o bairro Monte Líbano / Rodoviária (~1,6 km).","distance":"aprox. 1,6 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Auto Posto Monte Líbano (Av. República do Líbano), Cuiabá MT","sort":83},{"id":"lz_084","parentId":"lz_077","type":"place","name":"Posto Petrobras / Papai Auto Posto (Rua Marechal Deodoro)","description":"posto bem estruturado no corredor que liga o centro ao setor norte (~2,2 km).","distance":"aprox. 2,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Posto Petrobras / Papai Auto Posto (Rua Marechal Deodoro), Cuiabá MT","sort":84},{"id":"lz_085","parentId":"lz_060","type":"group","name":"Shoppings","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":85},{"id":"lz_086","parentId":"lz_085","type":"place","name":"Shopping Estação Cuiabá","description":"o mais recente e moderno da capital, localizado na Av. Miguel Sutil; conta com amplo mix de lojas, cinema, alameda gourmet com restaurantes prestigiados e estrutura pet friendly.","distance":"aprox. 3,1 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"https://noticiapositiva.com.br/wp-content/uploads/2023/07/shopping-estacao.jpeg","mapQuery":"Shopping Estação Cuiabá, Cuiabá MT","sort":86},{"id":"lz_087","parentId":"lz_085","type":"place","name":"Goiabeiras Shopping","description":"shopping tradicional e sofisticado localizado no bairro Goiabeiras, focado em marcas de alto padrão, serviços, opções gastronômicas e cinema.","distance":"aprox. 1,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"https://www.midianews.com.br/storage/webdisco/2022/06/07/886x590/58197bde5b422b24e3e4ab575aa5f167.jpg","mapQuery":"Goiabeiras Shopping, Cuiabá MT","sort":87},{"id":"lz_088","parentId":"lz_085","type":"place","name":"Pantanal Shopping","description":"grande centro de compras e lazer localizado na Av. Historiador Rubens de Mendonça (Av. do CPA), com grande variedade de lojas âncoras, praça de alimentação e cinema.","distance":"aprox. 4,6 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"https://www.imagens.cuiaba.mt.gov.br/1_shopping_pantanal.jpg","mapQuery":"Pantanal Shopping, Cuiabá MT","sort":88},{"id":"lz_089","parentId":"lz_085","type":"place","name":"Shopping 3 Américas","description":"localizado no bairro Jardim das Américas, atende a região universitária e conta com cinema, opções de lazer, serviços e praça de alimentação completa.","distance":"aprox. 5,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Shopping 3 Américas, Cuiabá MT","sort":89},{"id":"lz_090","parentId":"lz_060","type":"group","name":"Mecânico","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":90},{"id":"lz_091","parentId":"lz_090","type":"place","name":"Auto Mecânica Quilombo","description":"oficina tradicional de bairro focada em reparos mecânicos gerais, motor e câmbio (~600 m).","distance":"aprox. 600 m","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Auto Mecânica Quilombo, Cuiabá MT","sort":91},{"id":"lz_092","parentId":"lz_090","type":"place","name":"Oficina Auto Técnica (Região Central / Goiabeiras)","description":"especializada em mecânica de veículos nacionais e importados, ar-condicionado e parte elétrica (~1,4 km).","distance":"aprox. 1,4 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Oficina Auto Técnica (Região Central / Goiabeiras), Cuiabá MT","sort":92},{"id":"lz_093","parentId":"lz_090","type":"place","name":"Mecânica Ponto Certo (Jardim América)","description":"atende a região com serviços de suspensão, embreagem, motor e diagnóstico preventivo (~1,7 km).","distance":"aprox. 1,7 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Mecânica Ponto Certo (Jardim América), Cuiabá MT","sort":93},{"id":"lz_094","parentId":"lz_090","type":"place","name":"Bosch Car Service (Unidade Miguel Sutil)","description":"oficina multimarcas especializada em injeção eletrônica, diagnóstico computadorizado, freios e suspensão (~800 m).","distance":"aprox. 800 m","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Bosch Car Service (Unidade Miguel Sutil), Cuiabá MT","sort":94},{"id":"lz_095","parentId":"lz_090","type":"place","name":"Mecânica e Centro Automotivo Goiabeiras","description":"focada em manutenção preventiva, troca de óleo, alinhamento, balanceamento e mecânica geral (~1,1 km).","distance":"aprox. 1,1 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Mecânica e Centro Automotivo Goiabeiras, Cuiabá MT","sort":95},{"id":"lz_096","parentId":"lz_090","type":"place","name":"Bono Pneus (Unidade Miguel Sutil / Santa Rosa)","description":"centro automotivo especializado em pneus, alinhamento, suspensão, freios e amortecedores (~1,3 km).","distance":"aprox. 1,3 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Bono Pneus (Unidade Miguel Sutil / Santa Rosa), Cuiabá MT","sort":96},{"id":"lz_097","parentId":"lz_090","type":"place","name":"Dpaschoal (Unidade Av. Miguel Sutil)","description":"especializada em revisão de freios, suspensão, pneus e troca de óleo em via de fácil acesso (~1,5 km).","distance":"aprox. 1,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Dpaschoal (Unidade Av. Miguel Sutil), Cuiabá MT","sort":97},{"id":"lz_098","parentId":"lz_060","type":"group","name":"Cartório","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":98},{"id":"lz_099","parentId":"lz_098","type":"place","name":"1º Ofício de Cuiabá (Cartório do 1º Serviço Notarial e Registral)","description":"especializado em tabelionató de notas, escrituras, procurações, testamentos e autenticações (localizado no bairro Goiabeiras / Santa Helena, ~1,2 km).","distance":"aprox. 1,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"1º Ofício de Cuiabá (Cartório do 1º Serviço Notarial e Registral), Cuiabá MT","sort":99},{"id":"lz_100","parentId":"lz_098","type":"place","name":"2º Ofício de Cuiabá (Cartório do 2º Serviço Notarial e Registral - Virmondes)","description":"atuante no registro de imóveis, títulos e documentos, escrituras e firmas (localizado no bairro Goiabeiras / Centro, ~1,5 km).","distance":"aprox. 1,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"2º Ofício de Cuiabá (Cartório do 2º Serviço Notarial e Registral - Virmondes), Cuiabá MT","sort":100},{"id":"lz_101","parentId":"lz_098","type":"place","name":"3º Ofício de Cuiabá (Cartório do 3º Serviço Notarial e Registral)","description":"focado em notas, protesto de títulos e documentos (localizado na região central, ~2,2 km).","distance":"aprox. 2,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"3º Ofício de Cuiabá (Cartório do 3º Serviço Notarial e Registral), Cuiabá MT","sort":101},{"id":"lz_102","parentId":"lz_098","type":"place","name":"Cartório do 5º Serviço Notarial e Registral (5º Ofício / Coxipó/Centro)","description":"prestação de serviços notariais, autenticações e reconhecimento de firma (localizado próximo ao perímetro central, ~2,6 km).","distance":"aprox. 2,6 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Cartório do 5º Serviço Notarial e Registral (5º Ofício / Coxipó/Centro), Cuiabá MT","sort":102},{"id":"lz_103","parentId":"lz_098","type":"place","name":"Cartório de Registro Civil das Pessoas Naturais (1ª Circunscrição)","description":"responsável por certidões de nascimento, casamento, óbito e emancipação na região central (~2,8 km).","distance":"aprox. 2,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Cartório de Registro Civil das Pessoas Naturais (1ª Circunscrição), Cuiabá MT","sort":103},{"id":"lz_104","parentId":"","type":"group","name":"ALIMENTAÇÃO","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":104},{"id":"lz_105","parentId":"lz_104","type":"group","name":"Restaurantes","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":105},{"id":"lz_106","parentId":"lz_105","type":"group","name":"Massas","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":106},{"id":"lz_107","parentId":"lz_106","type":"place","name":"re Basili – Cucina Italiana","description":"restaurante especializado em massas artesanais e receitas clássicas da culinária italiana (~1,2 km).","distance":"aprox. 1,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"re Basili – Cucina Italiana, Cuiabá MT","sort":107},{"id":"lz_108","parentId":"lz_106","type":"place","name":"Olga Cozinha Italiana","description":"restaurante focado em massas artesanais e gastronomia autêntica no Centro Norte (~1,8 km).","distance":"aprox. 1,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"https://www.tvmaisnews.com.br/imgsite/noticias/amp-WhatsApp-Image-2023-10-09-at-08.31.02.jpeg","mapQuery":"Olga Cozinha Italiana, Cuiabá MT","sort":108},{"id":"lz_109","parentId":"lz_106","type":"place","name":"Due Ladroni","description":"trattoria e restaurante tradicional de massas e gastronomia italiana fina (~2,2 km).","distance":"aprox. 2,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"https://www.olharconceito.com.br/imgsite/noticias/016768/amp-_RFP9776.jpg","mapQuery":"Due Ladroni, Cuiabá MT","sort":109},{"id":"lz_110","parentId":"lz_106","type":"place","name":"3 Santi Ristorante Italiano","description":"opção dedicada às massas artesanais, molhos clássicos e risotos (~2,8 km).","distance":"aprox. 2,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"3 Santi Ristorante Italiano, Cuiabá MT","sort":110},{"id":"lz_111","parentId":"lz_106","type":"place","name":"Abbraccio Cucina Italiana (Shopping Estação Cuiabá)","description":"rede inspirada nas cantinas italianas, famosa pelas massas e grelhados na Av. Miguel Sutil (~3,1 km).","distance":"aprox. 3,1 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Abbraccio Cucina Italiana (Shopping Estação Cuiabá), Cuiabá MT","sort":111},{"id":"lz_112","parentId":"lz_106","type":"place","name":"Casa Nonna (Jardim das Américas)","description":"focado em massas tradicionais, rotisseria e comida de família estilo cantina (~5,5 km).","distance":"aprox. 5,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Casa Nonna (Jardim das Américas), Cuiabá MT","sort":112},{"id":"lz_113","parentId":"lz_105","type":"group","name":"Peixes","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":113},{"id":"lz_114","parentId":"lz_113","type":"place","name":"Leme de Brasa (Região do Quilombo / Goiabeiras)","description":"oferece cortes de peixes nobres assados na brasa, além de acompanhamentos tradicionais da culinária regional (~1,1 km).","distance":"aprox. 1,1 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Leme de Brasa (Região do Quilombo / Goiabeiras), Cuiabá MT","sort":114},{"id":"lz_115","parentId":"lz_113","type":"place","name":"Peixaria e Restaurante Popular (Região Central)","description":"opção tradicional focada no prato feito de peixe frito, mojica de pintado e ensopados (~1,8 km).","distance":"aprox. 1,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Peixaria e Restaurante Popular (Região Central), Cuiabá MT","sort":115},{"id":"lz_116","parentId":"lz_113","type":"place","name":"Peixaria Leme (Orla do Porto)","description":"uma das mais tradicionais da cidade, famosa pelo rodízio de peixes e pratos típicos como ventrecha de pacu e matrinxã recheada (~3,2 km).","distance":"aprox. 3,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Peixaria Leme (Orla do Porto), Cuiabá MT","sort":116},{"id":"lz_117","parentId":"lz_113","type":"place","name":"Peixaria do Mário (Região do Porto)","description":"especializada na culinária cuiabana com peixes frescos do Rio Cuiabá, servidos fritos, assados e em ensopados (~3,4 km).","distance":"aprox. 3,4 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Peixaria do Mário (Região do Porto), Cuiabá MT","sort":117},{"id":"lz_118","parentId":"lz_113","type":"place","name":"Peixaria Porto das Águas (Orla do Porto)","description":"localizada às margens do rio, com vista panorâmica e cardápio focado em pratos regionais de água doce (~3,6 km).","distance":"aprox. 3,6 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Peixaria Porto das Águas (Orla do Porto), Cuiabá MT","sort":118},{"id":"lz_119","parentId":"lz_113","type":"place","name":"Peixaria Mirante das Águas (Várzea Grande - Ponte Sérgio Motta)","description":"restaurante amplo à beira do rio, muito conhecido pelo rodízio completo de peixes pantaneiros (~6,2 km).","distance":"aprox. 6,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Peixaria Mirante das Águas (Várzea Grande - Ponte Sérgio Motta), Cuiabá MT","sort":119},{"id":"lz_120","parentId":"lz_105","type":"group","name":"Carnes","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":120},{"id":"lz_121","parentId":"lz_120","type":"place","name":"Varadero Bar e Restô","description":"especializado em cortes nobres grelhados na brasa, filés altos e acompanhamentos refinados no bairro Goiabeiras (~1,4 km).","distance":"aprox. 1,4 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Varadero Bar e Restô, Cuiabá MT","sort":121},{"id":"lz_122","parentId":"lz_120","type":"place","name":"Grand Cru Cuiabá","description":"bistrô e vinheria com cardápio focado em carnes nobres grelhadas (como ancho e chorizo) harmonizadas com vinhos (~1,8 km).","distance":"aprox. 1,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Grand Cru Cuiabá, Cuiabá MT","sort":122},{"id":"lz_123","parentId":"lz_120","type":"place","name":"Outback Steakhouse (Shopping Estação Cuiabá)","description":"famoso pelas ribs (costela de porco com molho barbecue), steaks temperados e cortes no estilo australiano (~3,1 km).","distance":"aprox. 3,1 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"https://www.rdnews.com.br/storage/webdisco/2019/02/06/1024x656/e0b8d8912dc0b250e2339d191acedfb5.jpg","mapQuery":"Outback Steakhouse (Shopping Estação Cuiabá), Cuiabá MT","sort":123},{"id":"lz_124","parentId":"lz_120","type":"place","name":"Madero Steakhouse (Shopping Estação Cuiabá)","description":"especializado em carnes na brasa à la carte, como picanha, filé-mignon e hambúrgueres artesanais (~3,1 km).","distance":"aprox. 3,1 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Madero Steakhouse (Shopping Estação Cuiabá), Cuiabá MT","sort":124},{"id":"lz_125","parentId":"lz_120","type":"place","name":"Buteco do Manso / Parrilla","description":"focado no preparo de cortes de carne nobres no estilo parrilla argentina/uruguaia na região central/norte (~3,5 km).","distance":"aprox. 3,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Buteco do Manso / Parrilla, Cuiabá MT","sort":125},{"id":"lz_126","parentId":"lz_120","type":"place","name":"Estância Bahia Steakhouse","description":"focado exclusivamente em pratos à la carte com cortes de carnes de altíssima qualidade (~5,2 km).","distance":"aprox. 5,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Estância Bahia Steakhouse, Cuiabá MT","sort":126},{"id":"lz_127","parentId":"lz_120","type":"place","name":"Casarão 154 / Flagship (Bairro Santa Rosa)","description":"a unidade principal e mais robusta, focada em experiência completa, ambiente rústico-industrial, cortes altos na parrilla, coquetelaria e churrasco de defumação (~3,8 km).","distance":"aprox. 3,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Casarão 154 / Flagship (Bairro Santa Rosa), Cuiabá MT","sort":127},{"id":"lz_128","parentId":"lz_105","type":"group","name":"Orientais","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":128},{"id":"lz_129","parentId":"lz_128","type":"place","name":"Yumê — Cozinha Japonesa (Quilombo)","description":"conceito high-end no coração do Quilombo, focado em alta gastronomia autêntica japonesa, ambiente intimista e insumos refinados (~300 m).","distance":"aprox. 300 m","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Yumê — Cozinha Japonesa (Quilombo), Cuiabá MT","sort":129},{"id":"lz_130","parentId":"lz_128","type":"place","name":"Osaka Cozinha Asiática / Nikkei (Unidade Goiabeiras)","description":"uma das maiores referências de luxo da capital, combinando técnicas japonesas e peruanas em ambiente exclusivo (~1,1 km).","distance":"aprox. 1,1 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Osaka Cozinha Asiática / Nikkei (Unidade Goiabeiras), Cuiabá MT","sort":130},{"id":"lz_131","parentId":"lz_128","type":"place","name":"Haru Cozinha Oriental (Praça Popular)","description":"ícone consagrado da alta gastronomia na cidade, com peixes nobres, iguarias como trufas e foie gras, e coquetelaria autoral (~1,3 km).","distance":"aprox. 1,3 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Haru Cozinha Oriental (Praça Popular), Cuiabá MT","sort":131},{"id":"lz_132","parentId":"lz_128","type":"place","name":"Seu Majestade Sushibar (Goiabeiras)","description":"conceito boutique refinado, focado em omakase (menu degustação do chef), cortes de altíssima precisão e ambiente privativo (~1,7 km).","distance":"aprox. 1,7 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Seu Majestade Sushibar (Goiabeiras), Cuiabá MT","sort":132},{"id":"lz_133","parentId":"lz_128","type":"place","name":"Boraê Sushibar (Santa Rosa)","description":"ambiente contemporâneo voltado ao público premium, conhecido pelas combinações autorais com flor de sal e azeites trufados (~2,5 km).","distance":"aprox. 2,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Boraê Sushibar (Santa Rosa), Cuiabá MT","sort":133},{"id":"lz_134","parentId":"lz_128","type":"place","name":"Mahalo Cozinha Criativa (Seção Fusion Asiática)","description":"embora seja focado em cozinha autoral contemporânea, traz entradas e pratos principais com forte fusão e inspiração técnica asiática ultra-premium (~2,5 km).","distance":"aprox. 2,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Mahalo Cozinha Criativa (Seção Fusion Asiática), Cuiabá MT","sort":134},{"id":"lz_135","parentId":"lz_128","type":"place","name":"Gurumê (Shopping Estação Cuiabá)","description":"marca de alta gastronomia oriental contemporânea, famosa pelo design premiado e pratos com vieiras, trufas e insumos nobres (~3,1 km).","distance":"aprox. 3,1 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Gurumê (Shopping Estação Cuiabá), Cuiabá MT","sort":135},{"id":"lz_136","parentId":"lz_128","type":"place","name":"Ikioi Dubai (Ribeirão do Lipa)","description":"focado em alta gastronomia oriental com inspiração high-end internacional, ambiente suntuoso e apresentações exclusivas (~4,0 km).","distance":"aprox. 4,0 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Ikioi Dubai (Ribeirão do Lipa), Cuiabá MT","sort":136},{"id":"lz_137","parentId":"lz_128","type":"place","name":"Osaka Cozinha Asiática / Nikkei (Unidade Jardim das Américas)","description":"expansão do renomado grupo na zona leste, levando o mesmo padrão de luxo, gastronomia Nikkei e ambiente elitizado para a região nobre próximo ao Alphaville (~6,2 km).","distance":"aprox. 6,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Osaka Cozinha Asiática / Nikkei (Unidade Jardim das Américas), Cuiabá MT","sort":137},{"id":"lz_138","parentId":"lz_128","type":"place","name":"K-BBQ & Korean Fine Dining (Região Central / Goiabeiras)","description":"novo destaque do circuito sofisticado de Cuiabá, trazendo a autêntica experiência do churrasco coreano (Korean BBQ) com cortes nobres de carne bovina, marinadas exclusivas e acompanhamentos refinados (banchan) em ambiente moderno e exclusivo (~1,8 km).","distance":"aprox. 1,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"K-BBQ & Korean Fine Dining (Região Central / Goiabeiras), Cuiabá MT","sort":138},{"id":"lz_139","parentId":"lz_105","type":"group","name":"Rodízios","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":139},{"id":"lz_140","parentId":"lz_139","type":"place","name":"Nativas Grill Cuiabá (Jardim Aclimação / Miguel Sutil)","description":"o rodízio mais luxuoso da capital, com amplo bufê de frios, sushi bar e seleção de carnes nobres como ancho, picanha e cordeiro (~1,2 km).","distance":"aprox. 1,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"https://www.midianews.com.br/storage/webdisco/2025/07/29/886x590/cd39a7884dda40e0f7307e076db5b205.jpg","mapQuery":"Nativas Grill Cuiabá (Jardim Aclimação / Miguel Sutil), Cuiabá MT","sort":140},{"id":"lz_141","parentId":"lz_139","type":"place","name":"Grand Grill Cuiabá (Av. Miguel Sutil / Santa Rosa)","description":"rodízio em estilo clássico focado em cortes bovinos nobres, espeto corrido e bufê quente e frio completo (~2,2 km).","distance":"aprox. 2,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Grand Grill Cuiabá (Av. Miguel Sutil / Santa Rosa), Cuiabá MT","sort":141},{"id":"lz_142","parentId":"lz_139","type":"place","name":"Churrascaria Boi Grill (Parque das Águas)","description":"renomada e ampla churrascaria no espeto corrido gaúcho com vista para o parque (~4,8 km).","distance":"aprox. 4,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Churrascaria Boi Grill (Parque das Águas), Cuiabá MT","sort":142},{"id":"lz_143","parentId":"lz_139","type":"place","name":"Churrascaria Gaúcha (Av. Fernando Corrêa)","description":"uma das casas de carne mais tradicionais da capital, mantendo a tradição do espeto corrido (~5,5 km).","distance":"aprox. 5,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Churrascaria Gaúcha (Av. Fernando Corrêa), Cuiabá MT","sort":143},{"id":"lz_144","parentId":"lz_139","type":"place","name":"O Barbosa Ribs (Barbosa Ribs Costelaria) é outra casa bastante lembrada quando o assunto é costela assada. A marca se destaca pelo preparo de costelas bovinas assadas lentamente, focando em porções à la carte fartas, combos e acompanhamentos clássicos (mandioca, farofa e molhos da casa). Localização / Distância","description":"A unidade em Cuiabá fica situada na região do Bosque da Saúde, a cerca de 3,2 km","distance":"aprox. 3,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"O Barbosa Ribs (Barbosa Ribs Costelaria) é outra casa bastante lembrada quando o assunto é costela assada. A marca se destaca pelo preparo de costelas bovinas assadas lentamente, focando em porções à la carte fartas, combos e acompanhamentos clássicos (mandioca, farofa e molhos da casa). Localização / Distância, Cuiabá MT","sort":144},{"id":"lz_145","parentId":"lz_139","type":"place","name":"Churrascaria Zebu (Av. Fernando Corrêa da Costa)","description":"tradicional casa de espeto corrido focada em cortes seletos (~6,1 km).","distance":"aprox. 6,1 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Churrascaria Zebu (Av. Fernando Corrêa da Costa), Cuiabá MT","sort":145},{"id":"lz_146","parentId":"lz_139","type":"place","name":"Churrascaria Gramado (Várzea Grande / Av. FEB)","description":"rodízio amplo com variedade de carnes e pista de frios completa (~9,2 km).","distance":"aprox. 9,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Churrascaria Gramado (Várzea Grande / Av. FEB), Cuiabá MT","sort":146},{"id":"lz_147","parentId":"lz_139","type":"place","name":"Lélis Peixaria (Bairro Goiabeiras)","description":"a peixaria mais prestigiada, elegante e tradicional de Cuiabá, referência absoluta em rodízio de peixes pantaneiros nobres em ambiente sofisticado (~1,4 km).","distance":"aprox. 1,4 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"https://veja.abril.com.br/wp-content/uploads/2017/05/dsc9264.jpg?quality=70&strip=info&w=919","mapQuery":"Lélis Peixaria (Bairro Goiabeiras), Cuiabá MT","sort":147},{"id":"lz_148","parentId":"lz_139","type":"place","name":"Peixaria Leme (Orla do Porto)","description":"tradicionalíssima no circuito cultural, servindo rodízio completo com ventrecha de pacu, matrinxã e mojica de pintado (~3,2 km).","distance":"aprox. 3,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Peixaria Leme (Orla do Porto), Cuiabá MT","sort":148},{"id":"lz_149","parentId":"lz_139","type":"place","name":"Peixaria do Mário (Região do Porto)","description":"rodízio farto com pratos clássicos da culinária cuiabana (~3,4 km).","distance":"aprox. 3,4 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Peixaria do Mário (Região do Porto), Cuiabá MT","sort":149},{"id":"lz_150","parentId":"lz_139","type":"place","name":"Peixaria Porto das Águas (Orla do Porto)","description":"rodízio de peixes de água doce com vista panorâmica para o Rio Cuiabá (~3,6 km).","distance":"aprox. 3,6 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Peixaria Porto das Águas (Orla do Porto), Cuiabá MT","sort":150},{"id":"lz_151","parentId":"lz_139","type":"place","name":"Peixaria Mirante das Águas (Várzea Grande — Ponte Sérgio Motta)","description":"complexo gastronômico renomado à beira-rio com rodízio completo de peixes do Pantanal (~6,2 km).","distance":"aprox. 6,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Peixaria Mirante das Águas (Várzea Grande — Ponte Sérgio Motta), Cuiabá MT","sort":151},{"id":"lz_152","parentId":"lz_139","type":"place","name":"Pizzaria Ritorna (Av. Miguel Sutil)","description":"rodízio tradicional e muito concorrido na região, com grande variedade de sabores doces e salgados, massas finas e espaço kids (~1,8 km).","distance":"aprox. 1,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Pizzaria Ritorna (Av. Miguel Sutil), Cuiabá MT","sort":152},{"id":"lz_153","parentId":"lz_139","type":"place","name":"Pizzaria San Francisco (Região Central / Goiabeiras)","description":"uma das opções de rodízio mais conhecidas da região central, com foco em pizzas assadas no forno a lenha e bufê de acompanhamentos (~2,1 km).","distance":"aprox. 2,1 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Pizzaria San Francisco (Região Central / Goiabeiras), Cuiabá MT","sort":153},{"id":"lz_154","parentId":"lz_139","type":"place","name":"Gato Mia Pizzaria (Jardim Aclimação / CPA)","description":"rodízio bastante frequentado, com dezenas de opções de sabores salgados, doces especiais e massas recheadas (~3,8 km).","distance":"aprox. 3,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Gato Mia Pizzaria (Jardim Aclimação / CPA), Cuiabá MT","sort":154},{"id":"lz_155","parentId":"lz_139","type":"place","name":"Pizzaria Lugano (Av. Historiador Rubens de Mendonça / CPA)","description":"rodízio amplo em uma das principais avenidas da cidade, focado em variedade de sabores e atendimento ágil (~4,2 km).","distance":"aprox. 4,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Pizzaria Lugano (Av. Historiador Rubens de Mendonça / CPA), Cuiabá MT","sort":155},{"id":"lz_156","parentId":"lz_139","type":"place","name":"Pizzaria Verace (Jardim das Américas)","description":"rodízio de padrão refinado na zona leste, oferecendo ingredientes selecionados, bordas recheadas e ambiente amplo (~5,8 km).","distance":"aprox. 5,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Pizzaria Verace (Jardim das Américas), Cuiabá MT","sort":156},{"id":"lz_157","parentId":"lz_139","type":"place","name":"Pizzaria Tarantella (Av. Fernando Corrêa da Costa)","description":"rodízio tradicional de grande porte na região sul, famoso pela fartura de sabores e bufê de saladas (~6,5 km).","distance":"aprox. 6,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Pizzaria Tarantella (Av. Fernando Corrêa da Costa), Cuiabá MT","sort":157},{"id":"lz_158","parentId":"lz_139","type":"place","name":"Dominó Pizzaria (Várzea Grande / Av. Couto Magalhães)","description":"opção renomada na região metropolitana, servindo rodízio completo de pizzas e massas (~8,2 km).","distance":"aprox. 8,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Dominó Pizzaria (Várzea Grande / Av. Couto Magalhães), Cuiabá MT","sort":158},{"id":"lz_159","parentId":"lz_105","type":"group","name":"Regionais","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":159},{"id":"lz_160","parentId":"lz_159","type":"place","name":"Restaurante Regionalissimo (Praça Popular / Centro)","description":"tradicionalíssimo, focado na autêntica culinária cuiabana no formato bufê, com galinhada com pequi, maria isabel, paçoca de pilão e peixes da terra (~1,8 km).","distance":"aprox. 1,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Restaurante Regionalissimo (Praça Popular / Centro), Cuiabá MT","sort":160},{"id":"lz_161","parentId":"lz_159","type":"place","name":"Mercado do Porto (Bairro do Porto)","description":"o coração da cultura popular cuiabana, repleto de bancas e lanchonetes regionais servindo o autêntico \"cuiabano de raiz\" (revirado cuiabano, peixe frito na hora e caldo de piranha) (~3,0 km).","distance":"aprox. 3,0 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"https://www.gov.br/sudeco/pt-br/assuntos/noticias/2020/mercado-do-porto-em-cuiaba-mt-recebe-r-1-5-milhao-para-sua-ampliacao-e-modernizacao/mercado-do-porto_velho.jpg","mapQuery":"Mercado do Porto (Bairro do Porto), Cuiabá MT","sort":161},{"id":"lz_162","parentId":"lz_159","type":"place","name":"Kuka Fresca (Região Central / Bosque da Saúde)","description":"restaurante tradicional de pratos executivos e à la carte com foco em receitas típicas cuiabanas e mato-grossenses (~3,5 km).","distance":"aprox. 3,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Kuka Fresca (Região Central / Bosque da Saúde), Cuiabá MT","sort":162},{"id":"lz_163","parentId":"lz_159","type":"place","name":"Casa do Parque (Bairro Duque de Caxias)","description":"espaço cultural e gastronômico que mescla pratos contemporâneos com toques e ingredientes regionais nobres (~2,2 km).","distance":"aprox. 2,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Casa do Parque (Bairro Duque de Caxias), Cuiabá MT","sort":163},{"id":"lz_164","parentId":"lz_105","type":"group","name":"Pizzarias","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":164},{"id":"lz_165","parentId":"lz_164","type":"place","name":"Pizzaria Forneria Coriolano (Goiabeiras)","description":"uma das mais tradicionais e refinadas da cidade, focada em pizzas assadas em forno a lenha com ingredientes selecionados e massa de longa fermentação (~1,1 km).","distance":"aprox. 1,1 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Pizzaria Forneria Coriolano (Goiabeiras), Cuiabá MT","sort":165},{"id":"lz_166","parentId":"lz_164","type":"place","name":"Bento Pizza (Goiabeiras)","description":"proposta contemporânea com pizzas de massa artesanal, ingredientes premium e ambiente descontraído (~1,3 km).","distance":"aprox. 1,3 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Bento Pizza (Goiabeiras), Cuiabá MT","sort":166},{"id":"lz_167","parentId":"lz_164","type":"place","name":"Moinho Pizzaria (Região Central / Goiabeiras)","description":"pizzaria de estilo clássico com cardápio diversificado de sabores tradicionais, bordas recheadas e ambiente familiar (~1,7 km).","distance":"aprox. 1,7 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Moinho Pizzaria (Região Central / Goiabeiras), Cuiabá MT","sort":167},{"id":"lz_168","parentId":"lz_164","type":"place","name":"Dom Salles Pizzaria (Jardim Aclimação)","description":"referência em pizzas com bordas bem recheadas, massas crocantes e fartura nos recheios (~2,8 km).","distance":"aprox. 2,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Dom Salles Pizzaria (Jardim Aclimação), Cuiabá MT","sort":168},{"id":"lz_169","parentId":"lz_164","type":"place","name":"Pizzaria Chefe da Pizza (Av. Miguel Sutil)","description":"opção focada em rapidez e custo-benefício, com grande variedade de sabores no cardápio à la carte e delivery (~3,2 km).","distance":"aprox. 3,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Pizzaria Chefe da Pizza (Av. Miguel Sutil), Cuiabá MT","sort":169},{"id":"lz_170","parentId":"lz_164","type":"place","name":"Pizzaria Napoli (Região da Miguel Sutil)","description":"focada em receitas tradicionais italianas com molho de tomate artesanal e massa leve (~3,5 km).","distance":"aprox. 3,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Pizzaria Napoli (Região da Miguel Sutil), Cuiabá MT","sort":170},{"id":"lz_171","parentId":"lz_164","type":"place","name":"Pizza Mestre (Jardim das Américas)","description":"focado em pizzas no estilo napolitano individual e familiar com insumos de altíssima qualidade (~5,2 km).","distance":"aprox. 5,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Pizza Mestre (Jardim das Américas), Cuiabá MT","sort":171},{"id":"lz_172","parentId":"lz_164","type":"place","name":"La Pasta & Pizza (Jardim das Américas)","description":"traz um conceito de cantina que alia pizzas artesanais assadas na pedra a pratos de massa (~5,8 km).","distance":"aprox. 5,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"La Pasta & Pizza (Jardim das Américas), Cuiabá MT","sort":172},{"id":"lz_173","parentId":"lz_105","type":"group","name":"Buffets","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":173},{"id":"lz_174","parentId":"lz_173","type":"place","name":"Pequi Restaurante (Goiabeiras)","description":"uma das maiores referências em self-service executivo de alto padrão na região, focado em bufê variado, ingredientes selecionados, estação de grelhados e receitas regionais refinadas (~1,2 km).","distance":"aprox. 1,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Pequi Restaurante (Goiabeiras), Cuiabá MT","sort":174},{"id":"lz_175","parentId":"lz_173","type":"place","name":"Goiabeiras Gourmet (Goiabeiras)","description":"focado no público executivo exigente do bairro, oferece um bufê por quilo sofisticado com saladas elaboradas, pratos quentes contemporâneos e carnes preparadas na hora. (~1,3 km)","distance":"aprox. 1,3 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Goiabeiras Gourmet (Goiabeiras), Cuiabá MT","sort":175},{"id":"lz_176","parentId":"lz_173","type":"place","name":"Lélis Peixaria — Balcão Executivo (Goiabeiras)","description":"disponibiliza no horário do almoço uma versão por quilo de seu premiado menu, com peixes nobres do Pantanal, farofa de banana, mojica de pintado e acompanhamentos típicos com alto rigor de qualidade (~1,4 km).","distance":"aprox. 1,4 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Lélis Peixaria — Balcão Executivo (Goiabeiras), Cuiabá MT","sort":176},{"id":"lz_177","parentId":"lz_173","type":"place","name":"Restaurante Varanda Quilombo (Quilombo)","description":"excelente opção self-service dentro do próprio bairro, focada em comida caseira refinada, variada seleção de saladas e ambiente climatizado agradável (~600 m).","distance":"aprox. 600 m","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Restaurante Varanda Quilombo (Quilombo), Cuiabá MT","sort":177},{"id":"lz_178","parentId":"lz_173","type":"place","name":"Restaurante Doña Joana (Goiabeiras)","description":"tradicional no bairro, une o conceito por quilo a uma cozinha regional/brasileira de alta qualidade, com destaque para a fartura de pratos quentes e atendimento atencioso. (~1,7 km)","distance":"aprox. 1,7 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Restaurante Doña Joana (Goiabeiras), Cuiabá MT","sort":178},{"id":"lz_179","parentId":"lz_173","type":"place","name":"Restaurante Regionalíssimo (Praça Popular / Centro)","description":"referência em culinária cuiabana por quilo, ideal para quem busca o autêntico sabor regional (maria isabel, paçoca de pilão e peixes) em um ambiente tradicional e estruturado (~1,8 km).","distance":"aprox. 1,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Restaurante Regionalíssimo (Praça Popular / Centro), Cuiabá MT","sort":179},{"id":"lz_180","parentId":"lz_105","type":"group","name":"Feijoadas","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":180},{"id":"lz_181","parentId":"lz_180","type":"place","name":"Toca do Tatu (Goiabeiras)","description":"um dos pontos mais tradicionais para o almoço de sábado na região, servindo uma feijoada farta em ambiente de botequim clássico, acompanhada de torresmo crocante, caipirinha e chorinho ao vivo (~1,1 km).","distance":"aprox. 1,1 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Toca do Tatu (Goiabeiras), Cuiabá MT","sort":181},{"id":"lz_182","parentId":"lz_180","type":"place","name":"Varadero Bar e Restô (Goiabeiras)","description":"referência em feijoada refinada aos sábados, combinando ambiente sofisticado, música ao vivo e estação completa de acompanhamentos (~1,4 km).","distance":"aprox. 1,4 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Varadero Bar e Restô (Goiabeiras), Cuiabá MT","sort":182},{"id":"lz_183","parentId":"lz_180","type":"place","name":"Nativas Grill Cuiabá (Miguel Sutil / Aclimação)","description":"traz feijoada completa no bufê de sábado com carnes nobres e acompanhamentos premium (~1,2 km).","distance":"aprox. 1,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Nativas Grill Cuiabá (Miguel Sutil / Aclimação), Cuiabá MT","sort":183},{"id":"lz_184","parentId":"lz_180","type":"place","name":"Pé de Pequi (Quilombo)","description":"tradicional bufê por quilo que serve feijoada completa às quartas-feiras e sábados no próprio bairro (~200 m).","distance":"aprox. 200 m","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Pé de Pequi (Quilombo), Cuiabá MT","sort":184},{"id":"lz_185","parentId":"lz_180","type":"place","name":"Bar do Chuvisco (Centro / Bairro Popular)","description":"ícone boêmio da cidade, extremamente concorrido aos sábados por sua feijoada bem temperada, farta e servida em ambiente descontraído de raiz (~2,2 km).","distance":"aprox. 2,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Bar do Chuvisco (Centro / Bairro Popular), Cuiabá MT","sort":185},{"id":"lz_186","parentId":"lz_180","type":"place","name":"Confrade (Praça Popular / Centro)","description":"serve bufê livre de feijoada aos sábados com seleção de charcutaria artesanal e acompanhamentos refinados (~1,8 km).","distance":"aprox. 1,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Confrade (Praça Popular / Centro), Cuiabá MT","sort":186},{"id":"lz_187","parentId":"lz_180","type":"place","name":"Bar do Edgare (Bairro Popular / Miguel Sutil)","description":"famoso pelo torresmo de rolo e pela feijoada completa aos sábados em clima de botequim tradicional (~2,5 km).","distance":"aprox. 2,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Bar do Edgare (Bairro Popular / Miguel Sutil), Cuiabá MT","sort":187},{"id":"lz_188","parentId":"lz_180","type":"place","name":"Bar do Jarbas (Bairro Popular)","description":"ponto de encontro tradicional na região central, com feijoada disputada ao som de samba e pagode aos sábados (~2,3 km).","distance":"aprox. 2,3 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Bar do Jarbas (Bairro Popular), Cuiabá MT","sort":188},{"id":"lz_189","parentId":"lz_104","type":"group","name":"BARES","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":189},{"id":"lz_190","parentId":"lz_189","type":"group","name":"Sport","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":190},{"id":"lz_191","parentId":"lz_190","type":"place","name":"Garage 154 (Goiabeiras)","description":"espaço focado na cultura gearhead, automobilismo e esportes a motor, com ambiente temático, chope artesanal, hambúrgueres na brasa e transmissão de eventos esportivos (~1,2 km).","distance":"aprox. 1,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Garage 154 (Goiabeiras), Cuiabá MT","sort":191},{"id":"lz_192","parentId":"lz_190","type":"place","name":"Draft Bar & Grill (Praça Popular)","description":"ambiente estilo pub/sports bar moderno com diversas telas transmitindo futebol, lutas de UFC e NFL, além de boa carta de chopes e porções (~1,8 km).","distance":"aprox. 1,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Draft Bar & Grill (Praça Popular), Cuiabá MT","sort":192},{"id":"lz_193","parentId":"lz_190","type":"place","name":"Mundialito Sports Bar (Região Central / Goiabeiras)","description":"voltado para os apaixonados por esportes variados, com várias TVs dedicadas à transmissão de jogos ao vivo, decoração temática e cardápio de pub (~1,9 km).","distance":"aprox. 1,9 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Mundialito Sports Bar (Região Central / Goiabeiras), Cuiabá MT","sort":193},{"id":"lz_194","parentId":"lz_190","type":"place","name":"Arena Chopp & Esporte (Região do Santa Rosa)","description":"bar e petiscaria com foco em transmissões de futebol (Brasileirão, Libertadores, Champions League) e lutas, servindo porções fartas e chope em ambiente aberto (~3,5 km).","distance":"aprox. 3,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Arena Chopp & Esporte (Região do Santa Rosa), Cuiabá MT","sort":194},{"id":"lz_195","parentId":"lz_190","type":"place","name":"Cuiabá Sports Bar & Petiscaria (Região Central)","description":"ambiente descontraído com temática voltada ao futebol local e nacional, focado em transmissões ao vivo, espetinhos e cerveja gelada (~3,8 km).","distance":"aprox. 3,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Cuiabá Sports Bar & Petiscaria (Região Central), Cuiabá MT","sort":195},{"id":"lz_196","parentId":"lz_190","type":"place","name":"Arena Pantanal Gastrobar / Bares da Arena (Verdão)","description":"localizado no entorno do complexo da Arena Pantanal, atrai o público torcedor com tematização voltada ao Cuiabá EC e ao futebol mato-grossense (~4,5 km).","distance":"aprox. 4,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Arena Pantanal Gastrobar / Bares da Arena (Verdão), Cuiabá MT","sort":196},{"id":"lz_197","parentId":"lz_189","type":"group","name":"Happy hour / jantar","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":197},{"id":"lz_198","parentId":"lz_197","type":"place","name":"Varadero Bar e Restô (Goiabeiras)","description":"perfeito para transitar do happy hour ao jantar, com ambiente sofisticado, luz suave, excelente carta de drinks e menu à la carte de cortes grelhados e frutos do mar (~1,4 km).","distance":"aprox. 1,4 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Varadero Bar e Restô (Goiabeiras), Cuiabá MT","sort":198},{"id":"lz_199","parentId":"lz_197","type":"place","name":"Confrade (Praça Popular / Centro)","description":"referência para quem busca porções refinadas, charcutaria artesanal e pratos de jantar elaborados em uma das regiões boêmias mais tradicionais da cidade (~1,8 km).","distance":"aprox. 1,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Confrade (Praça Popular / Centro), Cuiabá MT","sort":199},{"id":"lz_200","parentId":"lz_197","type":"place","name":"Bar do Jarbas (Praça Popular / Bairro Popular)","description":"opção vibrante para o fim de tarde, famosa pelo chope trincando, ambiente descontraído e cardápio farto de petiscos clássicos e jantares de boteco (~2,3 km).","distance":"aprox. 2,3 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"https://www.rdnews.com.br/storage/webdisco/2018/01/07/1024x656/d6a2f1e91c1af45fabafc1165cb2e213.jpg","mapQuery":"Bar do Jarbas (Praça Popular / Bairro Popular), Cuiabá MT","sort":200},{"id":"lz_201","parentId":"lz_197","type":"place","name":"Garage 154 (Goiabeiras)","description":"une chope artesanal, hambúrgueres gourmet e carnes na brasa em um espaço com temática gearhead e energia de pub para esticar a noite (~1,2 km).","distance":"aprox. 1,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Garage 154 (Goiabeiras), Cuiabá MT","sort":201},{"id":"lz_202","parentId":"lz_197","type":"place","name":"Cupim Bar (Região Central / Bosque da Saúde)","description":"um dos maiores clássicos de Cuiabá para o happy hour estendido para o jantar; famoso pela carne de cupim extremamente suculenta e macia, mandioca derretendo, chope gelado e porções fartas (~2,3 km).","distance":"aprox. 2,3 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Cupim Bar (Região Central / Bosque da Saúde), Cuiabá MT","sort":202},{"id":"lz_203","parentId":"lz_197","type":"place","name":"Bar do Edgare (Bairro Popular / Miguel Sutil)","description":"clássico do happy hour cuiabano, muito procurado pelo tradicional torresmo de rolo, cerveja bem gelada e porções fartas para compartilhar em grupo (~2,5 km).","distance":"aprox. 2,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Bar do Edgare (Bairro Popular / Miguel Sutil), Cuiabá MT","sort":203},{"id":"lz_204","parentId":"lz_197","type":"place","name":"Bar do Chuvisco (Centro / Bairro Popular)","description":"ícone boêmio de raiz na capital, ideal para drinks despretensiosos, petiscos clássicos e pratos caseiros em clima informal (~2,2 km).","distance":"aprox. 2,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Bar do Chuvisco (Centro / Bairro Popular), Cuiabá MT","sort":204},{"id":"lz_205","parentId":"lz_197","type":"place","name":"Outback Steakhouse (Shopping Estação Cuiabá)","description":"um dos pontos de happy hour mais movimentados da cidade, com chope na caneca congelada, pratos para compartilhar (bloomin' onion, ribs) e opções completas para o jantar (~3,1 km).","distance":"aprox. 3,1 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"https://www.rdnews.com.br/storage/webdisco/2019/02/06/1024x656/e0b8d8912dc0b250e2339d191acedfb5.jpg","mapQuery":"Outback Steakhouse (Shopping Estação Cuiabá), Cuiabá MT","sort":205},{"id":"lz_206","parentId":"lz_197","type":"place","name":"Cuiabano Gastrobar (Região do Santa Rosa)","description":"ambiente amplo ao ar livre, combinando chopes de várias torneiras, coquetelaria autoral e cardápio diversificado para o jantar (~3,5 km).","distance":"aprox. 3,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Cuiabano Gastrobar (Região do Santa Rosa), Cuiabá MT","sort":206},{"id":"lz_207","parentId":"lz_197","type":"place","name":"Três Moinhos Bar & Gastronomia (Parque das Águas / CPA)","description":"bar contemporâneo focado em alta coquetelaria, vinhos, porções criativas e ambiente ao ar livre com vista para a região do parque (~4,8 km).","distance":"aprox. 4,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Três Moinhos Bar & Gastronomia (Parque das Águas / CPA), Cuiabá MT","sort":207},{"id":"lz_208","parentId":"lz_189","type":"group","name":"Noite","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":208},{"id":"lz_209","parentId":"lz_208","type":"place","name":"Bar do Jarbas (Praça Popular)","description":"epicentro da boemia na região central, extremamente movimentado à noite, famoso pelas rodas de samba e pagode ao vivo, cerveja trincando e público jovem (~2,3 km).","distance":"aprox. 2,3 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"https://www.rdnews.com.br/storage/webdisco/2018/01/07/1024x656/d6a2f1e91c1af45fabafc1165cb2e213.jpg","mapQuery":"Bar do Jarbas (Praça Popular), Cuiabá MT","sort":209},{"id":"lz_210","parentId":"lz_208","type":"place","name":"Confrade (Praça Popular)","description":"ponto de encontro refinado que estica pela madrugada, unindo coquetelaria autoral, DJs e música ao vivo com ambiente sofisticado ao ar livre (~1,8 km).","distance":"aprox. 1,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Confrade (Praça Popular), Cuiabá MT","sort":210},{"id":"lz_211","parentId":"lz_208","type":"place","name":"Garage 154 (Goiabeiras)","description":"excelente para quem busca a noite ao som de rock, pop e vertentes alternativas, servindo chopes artesanais em clima de pub/garage (~1,2 km).","distance":"aprox. 1,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Garage 154 (Goiabeiras), Cuiabá MT","sort":211},{"id":"lz_212","parentId":"lz_208","type":"place","name":"Garden Pub (Praça Popular / Bairro Popular)","description":"ambiente descolado ao ar livre voltado para música brasileira, brasilidades, samba e MPB, reunindo público diverso em noites bem animadas (~2,1 km).","distance":"aprox. 2,1 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Garden Pub (Praça Popular / Bairro Popular), Cuiabá MT","sort":212},{"id":"lz_213","parentId":"lz_208","type":"place","name":"Mosteiro Bar e Cultura (Região Central / Bairro Popular)","description":"espaço multicultural e noturno reconhecido por suas noites de jazz, blues, brasilidades e discotecagem em vinil em um espaço intimista e estiloso (~2,4 km).","distance":"aprox. 2,4 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Mosteiro Bar e Cultura (Região Central / Bairro Popular), Cuiabá MT","sort":213},{"id":"lz_214","parentId":"lz_208","type":"place","name":"Malcom Pub (Av. Miguel Sutil / Santa Rosa)","description":"o maior e mais tradicional complexo noturno da capital; dividido entre o palco principal (com bandas de rock e pop) e o espaço eletrônico (Club), funcionando até altas horas da madrugada (~3,2 km).","distance":"aprox. 3,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"https://www.folhamax.com/storage/webdisco/2024/12/01/810x519/b2373c065d27b26cd0e853f25ea15014.jpg","mapQuery":"Malcom Pub (Av. Miguel Sutil / Santa Rosa), Cuiabá MT","sort":214},{"id":"lz_215","parentId":"lz_208","type":"place","name":"Nuun Garden (Região Central / Duque de Caxias)","description":"referência absoluta para os amantes de música eletrônica e house music, com ambiente conceitual de jardim noturno, coquetelaria premium e DJs nacionais e internacionais (~2,8 km).","distance":"aprox. 2,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Nuun Garden (Região Central / Duque de Caxias), Cuiabá MT","sort":215},{"id":"lz_216","parentId":"lz_208","type":"place","name":"Bar do Edgare (Bairro Popular / Miguel Sutil)","description":"botequim tradicionalista que ganha ritmo de balada e agito noturno nos fins de semana, com mesas lotadas na calçada e clima descontraído (~2,5 km).","distance":"aprox. 2,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Bar do Edgare (Bairro Popular / Miguel Sutil), Cuiabá MT","sort":216},{"id":"lz_217","parentId":"lz_208","type":"place","name":"Musiva (Av. Beira Rio)","description":"a principal casa de eventos e grandes shows noturnos de Cuiabá, recebendo atrações nacionais de sertanejo, pagode, pop e música eletrônica em estrutura de grande porte (~5,8 km).","distance":"aprox. 5,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"https://photos.wikimapia.org/p/00/04/11/98/04_big.jpg","mapQuery":"Musiva (Av. Beira Rio), Cuiabá MT","sort":217},{"id":"lz_218","parentId":"lz_104","type":"group","name":"LANCHONETES","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":218},{"id":"lz_219","parentId":"lz_218","type":"group","name":"Hamburguerias","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":219},{"id":"lz_220","parentId":"lz_219","type":"place","name":"Garage 154 (Goiabeiras)","description":"hambúrgueres artesanais grelhados na brasa com inspiração na culinária norte-americana, acompanhados de chopes artesanais em ambiente temático gearhead (~1,2 km).","distance":"aprox. 1,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Garage 154 (Goiabeiras), Cuiabá MT","sort":220},{"id":"lz_221","parentId":"lz_219","type":"place","name":"Rock Burger (Goiabeiras / Praça Popular)","description":"uma das hamburguerias artesanais mais tradicionais da região, famosa pelos burgers bem servidos no pão de brioche, molhos autorais e temática do rock (~1,6 km).","distance":"aprox. 1,6 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Rock Burger (Goiabeiras / Praça Popular), Cuiabá MT","sort":221},{"id":"lz_222","parentId":"lz_219","type":"place","name":"Cozinha dos Fundos (Praça Popular / Centro)","description":"referência em puck smash e hambúrgueres artesanais com blens de carnes nobres, maioneses caseiras icônicas e batatas crocantes (~1,8 km).","distance":"aprox. 1,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Cozinha dos Fundos (Praça Popular / Centro), Cuiabá MT","sort":222},{"id":"lz_223","parentId":"lz_219","type":"place","name":"Mundialito Burger (Região Central / Goiabeiras)","description":"opção descontraída focada em hambúrgueres de sabor marcante, porções de pork belly e combos fartos (~1,9 km)","distance":"aprox. 1,9 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Mundialito Burger (Região Central / Goiabeiras), Cuiabá MT","sort":223},{"id":"lz_224","parentId":"lz_219","type":"place","name":"Madero Steakhouse (Shopping Estação Cuiabá)","description":"conhecido por seus hambúrgueres assados na brasa com pão crocante, maionese artesanal e opções gourmet em ambiente confortável (~3,1 km).","distance":"aprox. 3,1 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Madero Steakhouse (Shopping Estação Cuiabá), Cuiabá MT","sort":224},{"id":"lz_225","parentId":"lz_219","type":"place","name":"Barba, Grelha e Bigode (Jardim Aclimação / Miguel Sutil)","description":"hamburgueria focada em cortes de carne altos preparados na grelha, bacon crocante, cheddar inglês e combinação de ingredientes premium (~3,0 km).","distance":"aprox. 3,0 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Barba, Grelha e Bigode (Jardim Aclimação / Miguel Sutil), Cuiabá MT","sort":225},{"id":"lz_226","parentId":"lz_219","type":"place","name":"Santo Smash (Região Central / Bosque da Saúde)","description":"especializada no estilo smash burger (carne prensada na chapa com casquinha crocante), rápida, suculenta e com ótimo custo-benefício (~3,4 km).","distance":"aprox. 3,4 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Santo Smash (Região Central / Bosque da Saúde), Cuiabá MT","sort":226},{"id":"lz_227","parentId":"lz_218","type":"group","name":"Espetinhos","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":227},{"id":"lz_228","parentId":"lz_227","type":"place","name":"Espetinho do Cheba (Goiabeiras)","description":"um dos maiores clássicos e referências absolutas de Cuiabá quando o assunto é espetinho de rua; famoso pelo cupim derretendo, carne macia, mandioca amarela perfeita e maionese temperada em ambiente raiz (~1,1 km).","distance":"aprox. 1,1 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Espetinho do Cheba (Goiabeiras), Cuiabá MT","sort":228},{"id":"lz_229","parentId":"lz_227","type":"place","name":"Espetinho do Bigode (Goiabeiras)","description":"bastante tradicional na região, com espetinhos bem servidos de carne, cupim, medalhão e queijo coalho com acompanhamentos fartos (~1,3 km).","distance":"aprox. 1,3 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Espetinho do Bigode (Goiabeiras), Cuiabá MT","sort":229},{"id":"lz_230","parentId":"lz_227","type":"place","name":"Espetinho da Popular (Praça Popular / Centro)","description":"ponto de encontro no circuito boêmio, combinando espetinhos variados na brasa em ambiente movimentado (~1,8 km).","distance":"aprox. 1,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Espetinho da Popular (Praça Popular / Centro), Cuiabá MT","sort":230},{"id":"lz_231","parentId":"lz_227","type":"place","name":"Espeto & Cia (Região Central / Goiabeiras)","description":"focado em rapidez, com grande variedade de cortes no espeto (carne, frango com bacon, coração e linguiça) (~1,9 km).","distance":"aprox. 1,9 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Espeto & Cia (Região Central / Goiabeiras), Cuiabá MT","sort":231},{"id":"lz_232","parentId":"lz_227","type":"place","name":"Espetinho do Jarbas (Bairro Popular)","description":"focado no atendimento rápido de espetos bem temperados, com destaque para o cupim e o pão de alho recheado (~2,3 km).","distance":"aprox. 2,3 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Espetinho do Jarbas (Bairro Popular), Cuiabá MT","sort":232},{"id":"lz_233","parentId":"lz_227","type":"place","name":"Espetinho do Edgare (Bairro Popular / Miguel Sutil)","description":"estação de espetinhos variados feitos na hora, ideal para um lanche rápido à noite (~2,5 km).","distance":"aprox. 2,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Espetinho do Edgare (Bairro Popular / Miguel Sutil), Cuiabá MT","sort":233},{"id":"lz_234","parentId":"lz_227","type":"place","name":"Gato Mia Espetaria (Bosque da Saúde)","description":"espetaria bem estruturada servindo desde cortes tradicionais até combinações recheadas com jantinha completa (~3,4 km).","distance":"aprox. 3,4 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Gato Mia Espetaria (Bosque da Saúde), Cuiabá MT","sort":234},{"id":"lz_235","parentId":"lz_227","type":"place","name":"Espetinho do Baiano (Av. Fernando Corrêa / Poção)","description":"referência em espetos de rua, popular pelo preço acessível e mandioca cozida sempre no ponto (~4,2 km).","distance":"aprox. 4,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Espetinho do Baiano (Av. Fernando Corrêa / Poção), Cuiabá MT","sort":235},{"id":"lz_236","parentId":"lz_227","type":"place","name":"Avenida do Espeto (Região da Arena Pantanal)","description":"muito movimentada nos fins de semana, oferecendo espetinhos fartos no sistema de jantinha (~4,5 km).","distance":"aprox. 4,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Avenida do Espeto (Região da Arena Pantanal), Cuiabá MT","sort":236},{"id":"lz_237","parentId":"lz_218","type":"group","name":"Cachorro quente (baguncinha & prensados)","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":237},{"id":"lz_238","parentId":"lz_237","type":"place","name":"Lanchonete e Baguncaria Express (Bairro Popular)","description":"opção clássica do \"baguncão cuiabano\" (hambúrguer farto com milho, bacon, ovo, presunto, queijo e maionese temperada) para quem busca lanches tradicionais de rua (~2,1 km).","distance":"aprox. 2,1 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Lanchonete e Baguncaria Express (Bairro Popular), Cuiabá MT","sort":238},{"id":"lz_239","parentId":"lz_237","type":"place","name":"Lanchonete Comilão (Região Central)","description":"tradicionalíssima na capital, famosa pelos lanches prensados imensos e maionese verde artesanal bastante concorrida no fim da noite (~2,6 km).","distance":"aprox. 2,6 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Lanchonete Comilão (Região Central), Cuiabá MT","sort":239},{"id":"lz_240","parentId":"lz_237","type":"place","name":"Gourmet Lanches (Goiabeiras)","description":"lanchonete de bairro tradicionalíssima no circuito de prensados e x-bagunças fartos, muito procurada pelo público da região no fim da noite (~1,5 km).","distance":"aprox. 1,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Gourmet Lanches (Goiabeiras), Cuiabá MT","sort":240},{"id":"lz_241","parentId":"lz_237","type":"place","name":"Baguncinha do Goiabeiras (Entorno do Goiabeiras Shopping)","description":"trailer/lanchonete de rua clássico focado na montagem rápida de prensados gigantes com maionese verde artesanal e pão selado na chapa (~1,6 km).","distance":"aprox. 1,6 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Baguncinha do Goiabeiras (Entorno do Goiabeiras Shopping), Cuiabá MT","sort":241},{"id":"lz_242","parentId":"lz_237","type":"place","name":"X-Bagunça do Baiano (Região Central)","description":"ponto de parada tradicional da madrugada para quem busca o prensadão de raiz com bastante molho, queijo derretido e carnes bem temperadas na chapa (~2,8 km).","distance":"aprox. 2,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"X-Bagunça do Baiano (Região Central), Cuiabá MT","sort":242},{"id":"lz_243","parentId":"lz_237","type":"place","name":"Lanchonete Ponto do Lanche (Bosque da Saúde)","description":"lanchonete de bairro muito frequentada por quem mora na zona norte, especializada em x-saladas, baguncinhas e dogões prensados (~3,2 km).","distance":"aprox. 3,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Lanchonete Ponto do Lanche (Bosque da Saúde), Cuiabá MT","sort":243},{"id":"lz_244","parentId":"","type":"group","name":"ESPAÇOS DE EVENTOS","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":244},{"id":"lz_245","parentId":"lz_244","type":"group","name":"Centros de convenções","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":245},{"id":"lz_246","parentId":"lz_245","type":"place","name":"Espaço Riserva (Buffet Leila Malouf / Av. Miguel Sutil)","description":"um dos centros de eventos e convenções mais modernos e elegantes da capital, voltado para fóruns, congressos corporativos e grandes simpósios (~1,5 km).","distance":"aprox. 1,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Espaço Riserva (Buffet Leila Malouf / Av. Miguel Sutil), Cuiabá MT","sort":246},{"id":"lz_247","parentId":"lz_245","type":"place","name":"Centro de Eventos do Pantanal / Sebrae (Bairro Santa Marta / Miguel Sutil)","description":"o maior, mais tradicional e principal complexo de convenções de Mato Grosso, preparado para grandes feiras nacionais, congressos de milhares de pessoas, exibições e eventos de negócios (~2,8 km).","distance":"aprox. 2,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Centro de Eventos do Pantanal / Sebrae (Bairro Santa Marta / Miguel Sutil), Cuiabá MT","sort":247},{"id":"lz_248","parentId":"lz_245","type":"place","name":"Centro de Eventos do Pantanal Shopping (Terraço do Pan)","description":"estrutura integrada ao complexo comercial, ideal para palestras, seminários e feiras corporativas de médio porte (~1,8 km).","distance":"aprox. 1,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Centro de Eventos do Pantanal Shopping (Terraço do Pan), Cuiabá MT","sort":248},{"id":"lz_249","parentId":"lz_245","type":"place","name":"Centro de Eventos do Hotel Gran Odara (Av. Miguel Sutil)","description":"infraestrutura hoteleira completa com auditórios modulares e salas de apoio de alto padrão para convenções executivas e encontros corporativos de grande escala (~4,2 km).","distance":"aprox. 4,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Centro de Eventos do Hotel Gran Odara (Av. Miguel Sutil), Cuiabá MT","sort":249},{"id":"lz_250","parentId":"lz_245","type":"place","name":"Auditório do Edifício Cloves Vettorato / FIEMT (Av. Historiador Rubens de Mendonça / CPA)","description":"centro de convenções e auditório corporativo focado no setor industrial e institucional (~4,5 km).","distance":"aprox. 4,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Auditório do Edifício Cloves Vettorato / FIEMT (Av. Historiador Rubens de Mendonça / CPA), Cuiabá MT","sort":250},{"id":"lz_251","parentId":"lz_245","type":"place","name":"Auditório da FIEMT (Av. Historiador Rubens de Mendonça / CPA)","description":"centro de convenções e auditório corporativo voltado para eventos institucionais, palestras e encontros do setor produtivo (~4,5 km).","distance":"aprox. 4,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Auditório da FIEMT (Av. Historiador Rubens de Mendonça / CPA), Cuiabá MT","sort":251},{"id":"lz_252","parentId":"lz_245","type":"place","name":"Espaço Musiva (Av. Beira Rio)","description":"embora muito conhecido como casa de shows, possui módulos e infraestrutura interna para convenções, feiras corporativas e grandes convenções de vendas (~5,8 km).","distance":"aprox. 5,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Espaço Musiva (Av. Beira Rio), Cuiabá MT","sort":252},{"id":"lz_253","parentId":"lz_244","type":"group","name":"Festas e buffets","description":"","distance":"","phone":"","imageUrl":"","mapQuery":"","sort":253},{"id":"lz_254","parentId":"lz_253","type":"place","name":"Espaço Riserva — Leila Malouf (Av. Miguel Sutil)","description":"referência máxima em sofisticação para casamentos, formaturas e eventos sociais de grande porte, combinando alta gastronomia e arquitetura moderna (~1,5 km).","distance":"aprox. 1,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Espaço Riserva — Leila Malouf (Av. Miguel Sutil), Cuiabá MT","sort":254},{"id":"lz_255","parentId":"lz_253","type":"place","name":"Villa Felici Espaço e Buffet (Goiabeiras / Santa Rosa)","description":"espaço versátil e elegante para festas de aniversário, mini-weddings e recepções sociais, focado em atendimento personalizado e menu contemporâneo (~2,1 km).","distance":"aprox. 2,1 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Villa Felici Espaço e Buffet (Goiabeiras / Santa Rosa), Cuiabá MT","sort":255},{"id":"lz_256","parentId":"lz_253","type":"place","name":"Buffet Leila Malouf — Espaço Jardim Cuiabá","description":"salão clássico e acolhedor na região central, ideal para festas sociais refinadas e recepções mais intimistas (~2,3 km).","distance":"aprox. 2,3 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Buffet Leila Malouf — Espaço Jardim Cuiabá, Cuiabá MT","sort":256},{"id":"lz_257","parentId":"lz_253","type":"place","name":"Espaço Marly Festas (Bosque da Saúde)","description":"salão tradicional da zona norte, muito procurado para festas de 15 anos, aniversários e recepções em geral por sua localização prática e boa estrutura (~3,4 km).","distance":"aprox. 3,4 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Espaço Marly Festas (Bosque da Saúde), Cuiabá MT","sort":257},{"id":"lz_258","parentId":"lz_253","type":"place","name":"Espaço Solares (Região do Santa Rosa / Miguel Sutil)","description":"ambiente amplo com área externa agradável, propício para festas sociais ao ar livre, casamentos e comemorações familiares (~3,8 km).","distance":"aprox. 3,8 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Espaço Solares (Região do Santa Rosa / Miguel Sutil), Cuiabá MT","sort":258},{"id":"lz_259","parentId":"lz_253","type":"place","name":"Buffet Alphaville Premium (Jardim Itália)","description":"um dos espaços sociais mais requintados da capital, projetado para casamentos e bailes de formatura que exigem grande capacidade de convidados e acabamento de luxo (~5,5 km).","distance":"aprox. 5,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Buffet Alphaville Premium (Jardim Itália), Cuiabá MT","sort":259},{"id":"lz_260","parentId":"lz_253","type":"place","name":"Espaço Meraki (Região do Ribeirão do Lipa)","description":"focado no conceito de eventos ao ar livre, casamentos no estilo boho chic e recepções integradas à natureza (~6,2 km).","distance":"aprox. 6,2 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Espaço Meraki (Região do Ribeirão do Lipa), Cuiabá MT","sort":260},{"id":"lz_261","parentId":"lz_253","type":"place","name":"Chácara das Flores / Espaço Vitoria (Estrada da Guia / Sucuri)","description":"opções tradicionais para festas sociais em estilo campestre ou diurno, oferecendo amplas áreas verdes e estruturas para grandes recepções (~7,5 km).","distance":"aprox. 7,5 km","phone":"(65) 3313-0050 (Sec. de Turismo)","imageUrl":"","mapQuery":"Chácara das Flores / Espaço Vitoria (Estrada da Guia / Sucuri), Cuiabá MT","sort":261}];
const CENTRAL_DB_PROP='VERSATIL_CENTRAL_DB_ID';

const GITHUB_OWNER='AnibalTomaz';
const GITHUB_REPO='app-servicos-versatil';
const GITHUB_BRANCH='main';
const GITHUB_DATA_PATH='data.json';
const GITHUB_TOKEN_PROP='VERSATIL_GITHUB_TOKEN';

const LOGO_URL='https://anibaltomaz.github.io/app-servicos-versatil/logo-versatil.jpg';

function doGet(e){
  try{
    const action=String(e?.parameter?.action||'');

    // v1.53: quando a URL /exec é aberta SEM parâmetros,
    // devolve um HtmlOutput compatível com celulares e envia os
    // dados públicos para o aplicativo via postMessage.
    if(!action){
      const payload={
        ok:true,
        service:APP_NAME,
        version:CURRENT_APP_VERSION,
        updatedAt:centralMetaGet('updatedAt')||'',
        spreadsheetId:centralSpreadsheet().getId(),
        data:centralReadPublicData()
      };

      const safeJson=JSON.stringify(payload).replace(/</g,'\\u003c');

      return HtmlService.createHtmlOutput(
        '<!doctype html><html><head><meta charset="utf-8"><title>'+APP_NAME+'</title></head>'+
        '<body style="font-family:Arial,sans-serif;padding:20px">'+
        '<div id="status">APP SERVIÇOS VERSÁTIL — Base central ativa — v'+CURRENT_APP_VERSION+'</div>'+
        '<script>'+
        'try{parent.postMessage({type:"VERSATIL_CENTRAL_BOOTSTRAP",payload:'+safeJson+'},"*");}catch(e){}'+
        '<\\/script></body></html>'
      ).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    }

    // Mantidos apenas para diagnóstico em computadores.
    const callback=String(e?.parameter?.callback||'');
    if(action==='bootstrapPublic'){
      return jsonOrJsonp({
        ok:true,
        version:CURRENT_APP_VERSION,
        updatedAt:centralMetaGet('updatedAt')||'',
        spreadsheetId:centralSpreadsheet().getId(),
        data:centralReadPublicData()
      },callback);
    }

    if(action==='centralStatus'){
      return jsonOrJsonp({
        ok:true,
        version:CURRENT_APP_VERSION,
        spreadsheetId:centralSpreadsheet().getId(),
        updatedAt:centralMetaGet('updatedAt')||''
      },callback);
    }


    if(action==='adminItinerariesToday'){
      if(String(e?.parameter?.adminPassword||'')!=='1234')return jsonOrJsonp({ok:false,error:'Acesso negado'},callback);
      return jsonOrJsonp({ok:true,items:itinerariesTodayV170_()},callback);
    }
    if(action==='promoCodeStatus'){
      return jsonOrJsonp(validarPromocodeV249_(String(e?.parameter?.coupon||''),String(e?.parameter?.email||''),false),callback);
    }

    return jsonOrJsonp({ok:true,service:APP_NAME,version:CURRENT_APP_VERSION},callback);
  }catch(err){
    const callback=String(e?.parameter?.callback||'');
    if(!String(e?.parameter?.action||'')){
      const safe=JSON.stringify({ok:false,error:String(err)}).replace(/</g,'\\u003c');
      return HtmlService.createHtmlOutput(
        '<!doctype html><html><body><script>'+
        'parent.postMessage({type:"VERSATIL_CENTRAL_BOOTSTRAP",payload:'+safe+'},"*");'+
        '<\\/script></body></html>'
      ).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    }
    return jsonOrJsonp({ok:false,error:String(err)},callback);
  }
}

function doPost(e){
  try{
    const data=JSON.parse(e.postData.contents||'{}');
    console.log('doPost action:',data.action,'version:',data.clientVersion||'n/a','at:',new Date().toISOString());
    if(data.action==='savePublicData'){centralSavePublicData(data.data||{},{publicationId:data.publicationId||'',clientPublishedAt:data.clientPublishedAt||''});const pub=publicarBaseNoGitHubV154();return jsonResponse({ok:true,published:pub,publicationId:String(data.publicationId||'')})}
    if(data.action==='sendOrderEmail'){enviarEmailsPedido(data);criarEventosPedido(data);centralSaveOrder(data);publicarBaseNoGitHubV154()}
    else if(data.action==='sendItinerary'){salvarRoteiro_(data);enviarEmailRoteiro_(data);publicarBaseNoGitHubV154();return jsonResponse({ok:true,action:'sendItinerary'})}
    else if(data.action==='sendPostcard'){const promo=enviarPostalV170_(data);return jsonResponse({ok:true,action:'sendPostcard',promoCode:promo?.code||'',expiresAt:promo?.expiresAt||''})}
    else if(data.action==='validatePromoCode'){return jsonResponse(validarPromocodeV249_(String(data.coupon||''),String(data.email||''),data.consume===true))}
    else if(data.action==='deleteOrder'){excluirEventosPedido(data.orderId);centralDeleteOrder_(data.orderId);publicarBaseNoGitHubV154()}
    else if(data.action==='recoverAdminPassword'){
      enviarRecuperacaoSenha(data);
      return jsonResponse({ok:true,action:'recoverAdminPassword'});
    }
    if(data.action==='setAvailability'){sincronizarDisponibilidade(data)}
    return jsonResponse({ok:true});
  }catch(erro){console.error(erro);return jsonResponse({ok:false,error:String(erro)})}
}
function jsonResponse(obj){return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON)}
function escaparHtml(v){return String(v??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
function formatarData(data){if(!data)return '';const p=String(data).split('-');return p.length===3?`${p[2]}/${p[1]}/${p[0]}`:String(data)}
function formatarPeriodo(periodo){
  if(!periodo)return '';
  if(periodo.indexOf('09:00')===0)return 'Manhã - 09 às 11';
  if(periodo.indexOf('06:00')===0)return 'Manhã - 06 às 12';
  if(periodo.indexOf('13:00-15:00')===0)return 'Tarde - 13 às 15';
  if(periodo.indexOf('13:00-19:00')===0)return 'Tarde - 13 às 19';
  return periodo;
}
function formatarDinheiro(valor){return Number(valor||0).toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}

function linhasPedidoHtml(data){
  return (data.items||[]).map(item=>{
    const usos=item.schedule&&item.schedule.length?item.schedule:[{date:item.date,period:item.period}];
    const agenda=usos.map((u,n)=>`<div><b>${n+1}.</b> ${escaparHtml(formatarData(u.date))} • ${escaparHtml(formatarPeriodo(u.period))}</div>`).join('');
    return `<tr><td style="padding:10px;border-bottom:1px solid #dce7f1"><b>${escaparHtml(item.name)}</b><div style="font-size:12px;color:#587086;margin-top:5px">${agenda}</div></td><td style="padding:10px;text-align:center;border-bottom:1px solid #dce7f1">${Number(item.qty||1)}</td><td style="padding:10px;text-align:right;border-bottom:1px solid #dce7f1">${escaparHtml(formatarDinheiro(item.price))}</td><td style="padding:10px;text-align:right;border-bottom:1px solid #dce7f1"><b>${escaparHtml(formatarDinheiro((item.price||0)*(item.qty||1)))}</b></td></tr>`;
  }).join('');
}
function tabelaPedidoHtml(data){
  return `<table style="width:100%;border-collapse:collapse;margin-top:15px;font-size:13px"><thead><tr style="background:#eaf4fb;color:#0f4c81"><th style="padding:10px;text-align:left">Serviço / produto</th><th style="padding:10px">Qtd.</th><th style="padding:10px;text-align:right">Unitário</th><th style="padding:10px;text-align:right">Total</th></tr></thead><tbody>${linhasPedidoHtml(data)}</tbody></table>`;
}
function emailShell(titulo,subtitulo,conteudo){
  return `<!doctype html><html><body style="margin:0;background:#f2f7fb;font-family:Arial,Helvetica,sans-serif;color:#17324d"><div style="max-width:760px;margin:0 auto;padding:20px"><div style="background:#0f4c81;border-radius:16px 16px 0 0;padding:20px;text-align:center"><img src="cid:logoVersatil" alt="Versátil" style="max-width:145px;background:#fff;border-radius:12px;padding:8px"><div style="font-size:22px;font-weight:700;color:#fff;margin-top:12px">${escaparHtml(APP_NAME)}</div></div><div style="background:#fff;padding:22px;border-left:1px solid #dce7f1;border-right:1px solid #dce7f1"><div style="font-size:20px;font-weight:700;color:#0f4c81">${escaparHtml(titulo)}</div>${subtitulo?`<div style="margin-top:5px;color:#587086">${escaparHtml(subtitulo)}</div>`:''}<div style="height:4px;width:70px;background:#ee7b22;border-radius:3px;margin:14px 0 18px"></div>${conteudo}</div><div style="background:#0f4c81;color:#fff;text-align:center;font-size:11px;padding:12px;border-radius:0 0 16px 16px">Serviços Versátil</div></div></body></html>`;
}
function corpoTextoPedido(data,cliente){
  const c=data.client||{};
  const itens=(data.items||[]).map((item,index)=>{
    const usos=item.schedule&&item.schedule.length?item.schedule:[{date:item.date,period:item.period}];
    return `${index+1}. ${item.name}\n${usos.map((u,n)=>`${n+1}. ${formatarData(u.date)} - ${formatarPeriodo(u.period)}`).join('\n')}\nQtd.: ${item.qty||1} | Unit.: ${formatarDinheiro(item.price)} | Total: ${formatarDinheiro((item.price||0)*(item.qty||1))}`;
  }).join('\n\n');
  return `${cliente?'Solicitação recebida':'Novo pedido'} - Serviços Versátil\nCliente: ${c.name||''}\nUnidade: ${c.roomName||''}\n${cliente?'':`E-mail: ${c.email||''}`}\n\n${itens}\n\nTOTAL: ${formatarDinheiro(data.total||0)}${cliente?'\n\nSua solicitação está em análise. A confirmação ocorrerá após contato da recepção e pagamento antecipado.':''}`;
}

function obterLogoVersatil(){
  try{
    return UrlFetchApp.fetch(LOGO_URL,{muteHttpExceptions:true}).getBlob().setName('logo-versatil.jpg');
  }catch(e){
    console.error('Falha ao carregar logo:',e);
    return null;
  }
}
function enviarHtml(destino,assunto,texto,html,replyTo=''){
  const logo=obterLogoVersatil();
  const msg={to:destino,subject:assunto,body:texto,htmlBody:html,name:APP_NAME};
  if(replyTo)msg.replyTo=replyTo;
  if(logo)msg.inlineImages={logoVersatil:logo};
  MailApp.sendEmail(msg);
}


function enviarRecuperacaoSenha(data){
  const PRIMARY_RECOVERY_EMAIL='anibal@starlis.com.br';
  const senha=String(data.password||'');
  const nome=String(data.adminName||'Admin');
  if(!senha)throw new Error('Senha não informada para recuperação.');

  const html=emailShell(
    'Recuperação de senha',
    'Acesso administrativo',
    `<p>Olá, ${escaparHtml(nome)}.</p>
     <p>Foi solicitada a recuperação da senha de acesso ao APP SERVIÇOS VERSÁTIL.</p>
     <div style="margin:18px 0;padding:16px;border-radius:12px;background:#f5f8fb">
       <div style="font-size:12px;color:#607080">Senha cadastrada</div>
       <div style="font-size:22px;font-weight:700;letter-spacing:1px">${escaparHtml(senha)}</div>
     </div>
     <p style="color:#607080;font-size:13px">Por segurança, esta mensagem é enviada exclusivamente ao e-mail principal da conta.</p>`
  );
  enviarHtml(PRIMARY_RECOVERY_EMAIL,'Recuperação de senha - Serviços Versátil',`Sua senha cadastrada é: ${senha}`,html);
  console.log('Recuperação enviada somente para '+PRIMARY_RECOVERY_EMAIL);
}


function enviarEmailsPedido(data){
  const c=data.client||{};
  const tabela=tabelaPedidoHtml(data);
  const solicitanteEmail=String(c.email||'').trim();

  const clienteHtml=emailShell(
    'Solicitação recebida',
    `${c.name||''} • ${c.roomName||''}`,
    `<p style="line-height:1.5">Sua solicitação foi recebida e está em análise de disponibilidade.</p>
     ${tabela}
     <div style="text-align:right;font-size:20px;font-weight:700;color:#0f4c81;margin-top:16px">Total: ${escaparHtml(formatarDinheiro(data.total||0))}</div>
     <div style="margin-top:18px;padding:12px;background:#fff3e7;border-left:4px solid #ee7b22;border-radius:8px">
       <b>Atenção:</b> a confirmação ocorrerá após contato da recepção e pagamento antecipado.
     </div>`
  );

  const contatoSolicitante=solicitanteEmail
    ?`<div style="margin:14px 0;padding:14px;background:#eef7ff;border:1px solid #b9d7ee;border-radius:10px">
        <div style="font-size:12px;color:#587086;margin-bottom:4px">E-mail do solicitante</div>
        <a href="mailto:${escaparHtml(solicitanteEmail)}" style="font-size:17px;font-weight:700;color:#0f4c81;text-decoration:none">${escaparHtml(solicitanteEmail)}</a>
        <div style="font-size:11px;color:#6c7d8a;margin-top:6px">Ao usar Responder neste e-mail, a resposta será endereçada ao solicitante.</div>
      </div>`
    :'';

  const adminHtml=emailShell(
    'Novo pedido',
    `${c.name||''} • ${c.roomName||''}`,
    `<div style="padding:12px;background:#eaf4fb;border-radius:10px">
       <b>Cliente:</b> ${escaparHtml(c.name||'')}<br>
       <b>Unidade:</b> ${escaparHtml(c.roomName||'')}
     </div>
     ${contatoSolicitante}
     ${tabela}
     <div style="text-align:right;font-size:20px;font-weight:700;color:#0f4c81;margin-top:16px">Total: ${escaparHtml(formatarDinheiro(data.total||0))}</div>`
  );

  if(solicitanteEmail){
    enviarHtml(
      solicitanteEmail,
      'Solicitação recebida - Serviços Versátil',
      corpoTextoPedido(data,true),
      clienteHtml
    );
  }

  ADMIN_EMAILS.filter(Boolean).forEach(email=>{
    enviarHtml(
      email,
      'Novo pedido - Serviços Versátil',
      corpoTextoPedido(data,false),
      adminHtml,
      solicitanteEmail
    );
  });
}
function dataHoraCuiaba(data,hora){
  return Utilities.parseDate(
    `${String(data)} ${String(hora||'00:00')}`,
    APP_TIMEZONE,
    'yyyy-MM-dd HH:mm'
  );
}

function obterIntervalo(data,periodo){
  const p=String(periodo||'');

  // Sem período = locação diária completa.
  let inicio='06:00',fim='19:00';

  if(p.indexOf('06:00')===0){
    inicio='06:00';fim='12:00';
  }else if(p.indexOf('09:00')===0){
    inicio='09:00';fim='11:00';
  }else if(p.indexOf('13:00-15:00')===0){
    inicio='13:00';fim='15:00';
  }else if(p.indexOf('13:00-19:00')===0){
    inicio='13:00';fim='19:00';
  }

  return {
    inicio:dataHoraCuiaba(data,inicio),
    fim:dataHoraCuiaba(data,fim)
  };
}
function criarEventosPedido(data){
  if(!data.orderId)return;
  const props=PropertiesService.getScriptProperties(),key='ORDER_EVENTS_'+data.orderId;
  if(props.getProperty(key))return;
  const cal=CalendarApp.getDefaultCalendar(),ids=[];
  (data.items||[]).forEach(item=>{
    const usos=item.schedule&&item.schedule.length?item.schedule:[{date:item.date,period:item.period}];
    usos.forEach((uso,index)=>{
      if(!uso.date)return;
      const t=obterIntervalo(uso.date,uso.period);
      const ev=cal.createEvent(`${item.name} - ${data.client?.roomName||''}`,t.inicio,t.fim,{description:`${APP_NAME}\nPedido: ${data.orderId}\nCliente: ${data.client?.name||''}\nE-mail: ${data.client?.email||''}\nUnidade: ${data.client?.roomName||''}\nProduto/Serviço: ${item.name}\nUtilização: ${index+1} de ${usos.length}\nPeríodo: ${formatarPeriodo(uso.period)}\nFuso horário: Cuiabá/MT (${APP_TIMEZONE})\nQuantidade: ${item.qty||1}`});
      ids.push(ev.getId());
    });
  });
  props.setProperty(key,JSON.stringify(ids));
}
function excluirEventosPedido(orderId){
  if(!orderId)return;
  const props=PropertiesService.getScriptProperties(),key='ORDER_EVENTS_'+orderId,saved=props.getProperty(key);
  if(!saved)return;
  const cal=CalendarApp.getDefaultCalendar();
  JSON.parse(saved).forEach(id=>{try{const ev=cal.getEventById(id);if(ev)ev.deleteEvent()}catch(e){console.error(e)}});
  props.deleteProperty(key);
}
function dataHora(data,hora){
  return dataHoraCuiaba(data,hora);
}
function sincronizarDisponibilidade(data){
  const operation=data.operation||'close',closures=data.closures||[],props=PropertiesService.getScriptProperties(),cal=CalendarApp.getDefaultCalendar(),lock=LockService.getScriptLock();
  lock.waitLock(30000);
  try{
    closures.forEach(c=>{
      if(!c||!c.id||!c.date)return;
      const key='CLOSURE_EVENT_'+c.id,savedId=props.getProperty(key);
      if(operation==='close'){
        let existing=null;
        if(savedId){try{existing=cal.getEventById(savedId)}catch(e){console.error('Evento antigo não localizado',savedId,e)}}
        const start=dataHora(c.date,c.calendarStart||'06:00'),end=dataHora(c.date,c.calendarEnd||'12:00');
        if(isNaN(start.getTime())||isNaN(end.getTime())||end<=start)throw new Error(`Intervalo inválido: ${c.id}`);
        const title=`INDISPONÍVEL - ${c.scopeLabel||'Itens'} - ${c.periodLabel||''}`;
        const description=`${APP_NAME}\nBloqueio de disponibilidade\nData: ${formatarData(c.date)}\nPeríodo: ${c.periodLabel||''}\nEscopo: ${c.scopeLabel||''}\nTipo: ${c.scopeType||''}\nID: ${c.id}\nFuso horário: Cuiabá/MT (${APP_TIMEZONE})`;
        if(existing){existing.setTitle(title);existing.setTime(start,end);existing.setDescription(description);props.setProperty(key,existing.getId())}
        else{props.deleteProperty(key);const ev=cal.createEvent(title,start,end,{description});props.setProperty(key,ev.getId())}
      }else{
        if(savedId){try{const ev=cal.getEventById(savedId);if(ev)ev.deleteEvent()}catch(e){console.error('Falha ao remover bloqueio',savedId,e)}}
        props.deleteProperty(key);
      }
    });
    props.setProperty('LAST_AVAILABILITY_SYNC',JSON.stringify({at:new Date().toISOString(),operation,count:closures.length}));
  }finally{lock.releaseLock()}
}


function statusIntegracaoV136(){
  const props=PropertiesService.getScriptProperties();
  console.log('Última sincronização de disponibilidade:',props.getProperty('LAST_AVAILABILITY_SYNC')||'nenhuma');
  console.log('Conta ativa:',Session.getActiveUser().getEmail());
  console.log('Calendário padrão:',CalendarApp.getDefaultCalendar().getName());
}

function testarBloqueioChurrasqueiraV136(){
  const d=new Date();
  d.setDate(d.getDate()+3);
  const data=Utilities.formatDate(d,Session.getScriptTimeZone(),'yyyy-MM-dd');

  sincronizarDisponibilidade({
    operation:'close',
    closures:[{
      id:'TESTE_CHURRAS_V136_'+data,
      date:data,
      slot:'morning',
      scopeType:'category',
      scopeId:'locacoes',
      scopeLabel:'Locações',
      periodLabel:'Manhã',
      calendarStart:'06:00',
      calendarEnd:'12:00'
    }]
  });

  console.log('Bloqueio de teste criado em '+data+' para a categoria Locações.');
}

function testarReaberturaChurrasqueiraV136(){
  const d=new Date();
  d.setDate(d.getDate()+3);
  const data=Utilities.formatDate(d,Session.getScriptTimeZone(),'yyyy-MM-dd');

  sincronizarDisponibilidade({
    operation:'open',
    closures:[{
      id:'TESTE_CHURRAS_V136_'+data,
      date:data
    }]
  });

  console.log('Bloqueio de teste removido em '+data+'.');
}


function salvarRoteiro_(data){
  const sh=centralSheet_('ITINERARIES');
  if(sh.getLastRow()===0)sh.appendRow(['id','createdAt','clientName','roomName','itemCount','itemsJson']);
  const items=Array.isArray(data.items)?data.items:[];
  sh.appendRow([Utilities.getUuid(),new Date().toISOString(),String(data.client?.name||''),String(data.client?.roomName||''),items.length,JSON.stringify(items.map(x=>({id:x.id||'',name:x.name||''})))]);
}
function itineraryStats_(){
  const sh=centralSheet_('ITINERARIES');
  if(!sh||sh.getLastRow()<2)return {total:0,today:0,month:0,byMonth:[],topPlaces:[]};
  const rows=sh.getDataRange().getValues().slice(1).filter(r=>r[0]);
  const now=new Date(),tz=APP_TIMEZONE,todayKey=Utilities.formatDate(now,tz,'yyyy-MM-dd'),monthKey=Utilities.formatDate(now,tz,'yyyy-MM');
  let today=0,month=0;const byMonth={},places={};
  rows.forEach(r=>{
    const dt=new Date(r[1]);
    if(!isNaN(dt)){const d=Utilities.formatDate(dt,tz,'yyyy-MM-dd'),m=Utilities.formatDate(dt,tz,'yyyy-MM');if(d===todayKey)today++;if(m===monthKey)month++;byMonth[m]=(byMonth[m]||0)+1}
    try{(JSON.parse(r[5]||'[]')||[]).forEach(x=>{const name=String(x.name||'').trim();if(name)places[name]=(places[name]||0)+1})}catch(e){}
  });
  return {total:rows.length,today,month,
    byMonth:Object.entries(byMonth).sort((a,b)=>a[0].localeCompare(b[0])).slice(-12).map(([m,count])=>({month:m,label:m.split('-').reverse().join('/'),count,value:count})),
    topPlaces:Object.entries(places).sort((a,b)=>b[1]-a[1]).slice(0,15).map(([name,count])=>({name,count,value:count}))};
}
function enviarEmailRoteiro_(data){
  const email=String(data.client?.email||'').trim();if(!email)throw new Error('E-mail do hóspede não informado.');
  const items=Array.isArray(data.items)?data.items:[];
  const rows=items.map((x,i)=>{const q=String(x.mapQuery||x.name||''),link=/^https?:\/\//i.test(q)?q:'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(q);
    return `<tr><td style="padding:10px;border-bottom:1px solid #dce7f1"><b>${i+1}. ${escaparHtml(x.name||'')}</b>${x.distance?`<div style="font-size:12px;color:#607080">${escaparHtml(x.distance)}</div>`:''}</td><td style="padding:10px;border-bottom:1px solid #dce7f1"><a href="${escaparHtml(link)}">Abrir no Google Maps</a></td></tr>`}).join('');
  const html=emailShell('Seu roteiro em Cuiabá','Aproveite sua estada!',`<p>Olá, ${escaparHtml(data.client?.name||'Hóspede')}.</p><p>Segue o roteiro que você criou no APP SERVIÇOS VERSÁTIL.</p><table style="width:100%;border-collapse:collapse">${rows}</table><p style="margin-top:18px"><b>Aproveite sua estada em Cuiabá!</b></p>`);
  enviarHtml(email,'Meu Roteiro - Serviços Versátil','Seu roteiro em Cuiabá:\\n\\n'+items.map((x,i)=>`${i+1}. ${x.name}`).join('\\n'),html);
}


function itinerariesTodayV170_(){
  const sh=centralSheet_('ITINERARIES');if(!sh||sh.getLastRow()<2)return [];
  const rows=sh.getDataRange().getValues().slice(1).filter(r=>r[0]);
  const today=Utilities.formatDate(new Date(),APP_TIMEZONE,'yyyy-MM-dd');
  return rows.map(r=>{const d=new Date(r[1]);if(isNaN(d)||Utilities.formatDate(d,APP_TIMEZONE,'yyyy-MM-dd')!==today)return null;
    return {time:Utilities.formatDate(d,APP_TIMEZONE,'HH:mm'),clientName:String(r[2]||''),clientEmail:String(r[3]||''),roomName:String(r[4]||''),itemCount:Number(r[5]||0)};}).filter(Boolean).reverse();
}


function promoSheetV249_(){
  const sh=centralSheet_('PROMOCODES');
  if(sh.getLastRow()===0)sh.getRange(1,1,1,8).setValues([['code','recipientEmail','senderEmail','createdAt','expiresAt','usedAt','status','dispatchId']]);
  return sh;
}
function normalizeEmailV249_(v){return String(v||'').trim().toLowerCase()}
function promoCodeExistsV249_(code){
  const sh=promoSheetV249_();if(sh.getLastRow()<2)return false;
  return sh.getRange(2,1,sh.getLastRow()-1,1).getDisplayValues().some(r=>String(r[0]).trim().toUpperCase()===String(code).trim().toUpperCase());
}
function generatePromoCodeV249_(){
  const alphabet='ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  for(let attempt=0;attempt<20;attempt++){
    const uuid=Utilities.getUuid().replace(/-/g,'').toUpperCase();let raw='';
    for(let i=0;i<12;i++){const n=parseInt(uuid.slice(i*2,i*2+2),16);raw+=alphabet[n%alphabet.length]}
    const code='VST-'+raw.slice(0,4)+'-'+raw.slice(4,8)+'-'+raw.slice(8,12);
    if(!promoCodeExistsV249_(code))return code;
  }
  throw new Error('Não foi possível gerar um promocode único.');
}
function registrarPromocodeV249_(requestedCode,recipientEmail,senderEmail){
  const lock=LockService.getScriptLock();lock.waitLock(10000);
  try{
    const email=normalizeEmailV249_(recipientEmail);if(!email)throw new Error('E-mail do destinatário não informado para o promocode.');
    let code=String(requestedCode||'').trim().toUpperCase();
    if(!/^VST-[A-Z2-9]{4}-[A-Z2-9]{4}-[A-Z2-9]{4}$/.test(code)||promoCodeExistsV249_(code))code=generatePromoCodeV249_();
    const created=new Date(),expires=new Date(created.getTime());expires.setMonth(expires.getMonth()+3);
    const dispatchId=Utilities.getUuid();
    promoSheetV249_().appendRow([code,email,normalizeEmailV249_(senderEmail),created.toISOString(),expires.toISOString(),'','ACTIVE',dispatchId]);
    return {code,recipientEmail:email,createdAt:created.toISOString(),expiresAt:expires.toISOString(),status:'ACTIVE',dispatchId};
  }finally{lock.releaseLock()}
}
function validarPromocodeV249_(code,email,consume){
  const lock=consume===true?LockService.getScriptLock():null;if(lock)lock.waitLock(10000);
  try{
  code=String(code||'').trim().toUpperCase();email=normalizeEmailV249_(email);
  if(!code||!email)return {ok:true,valid:false,reason:'missing_data'};
  const sh=promoSheetV249_();if(sh.getLastRow()<2)return {ok:true,valid:false,reason:'not_found'};
  const values=sh.getRange(2,1,sh.getLastRow()-1,8).getValues();
  for(let i=values.length-1;i>=0;i--){
    const r=values[i];if(String(r[0]||'').trim().toUpperCase()!==code)continue;
    const storedEmail=normalizeEmailV249_(r[1]);
    const expires=new Date(r[4]);const usedAt=String(r[5]||'');const status=String(r[6]||'ACTIVE').toUpperCase();
    if(storedEmail!==email)return {ok:true,valid:false,reason:'email_mismatch'};
    if(usedAt||status==='USED')return {ok:true,valid:false,reason:'already_used'};
    if(isNaN(expires.getTime())||Date.now()>expires.getTime()){if(status!=='EXPIRED')sh.getRange(i+2,7).setValue('EXPIRED');return {ok:true,valid:false,reason:'expired',expiresAt:String(r[4]||'')};}
    if(consume===true){const now=new Date().toISOString();sh.getRange(i+2,6,1,2).setValues([[now,'USED']]);return {ok:true,valid:true,consumed:true,code,expiresAt:String(r[4]||''),usedAt:now};}
    return {ok:true,valid:true,consumed:false,code,expiresAt:String(r[4]||'')};
  }
  return {ok:true,valid:false,reason:'not_found'};
  }finally{if(lock)lock.releaseLock()}
}
function dataUrlBlobV249_(dataUrl,name){
  const m=String(dataUrl||'').match(/^data:([^;]+);base64,(.+)$/i);if(!m)return null;
  return Utilities.newBlob(Utilities.base64Decode(m[2]),m[1],name||'postal.jpg');
}
function postalInlineImageV249_(src,key,inline){
  src=String(src||'').trim();if(!src)return '';
  if(/^data:image\//i.test(src)){
    const blob=dataUrlBlobV249_(src,key+'.jpg');if(blob){inline[key]=blob;return 'cid:'+key}
    return '';
  }
  return src;
}
function enviarPostalV170_(data){
  const recipient=String(data.recipient?.email||'').trim(),recipientName=String(data.recipient?.name||'').trim();
  const senderName=String(data.sender?.name||'Hóspede'),senderEmail=String(data.sender?.email||'').trim();
  if(!recipient)throw new Error('E-mail do destinatário não informado.');
  if(senderEmail&&recipient.toLowerCase()===senderEmail.toLowerCase())throw new Error('O usuário não pode enviar o postal para si mesmo.');
  const promo=registrarPromocodeV249_(data.coupon,recipient,senderEmail);
  const coupon=promo.code;
  const cfg=data.config||{};
  if(!String(cfg.message||'').trim())cfg.message='Caro amigo(a) estou em Cuiabá, ficando no Versátil e estou adorando o lugar. Envio este postal pois lembrei de você durante minha viagem. Espero que estejas bem, mande notícias!';
  if(!String(cfg.couponText||'').trim())cfg.couponText='Use meu cupom de desconto e ganhe um up-grade na sua reserva';
  const subject=`Você recebeu um postal de ${senderName}`,site=String(cfg.site||'https://www.starlis.com.br');
  const thank=`mailto:${senderEmail}?subject=${encodeURIComponent('Obrigado pelo postal!')}`;
  const imgs=Array.isArray(cfg.selectedImages)?cfg.selectedImages.slice(0,3):[];
  const inline={};
  const photo1=postalInlineImageV249_(imgs[0],'postalSector1',inline)||LOGO_URL;
  const photo2=postalInlineImageV249_(imgs[1],'postalSector2',inline)||LOGO_URL;
  const photo3=postalInlineImageV249_(imgs[2],'postalSector3',inline)||LOGO_URL;
  const front=`<div style="padding:8px;background:#e7d5ad;border:1px solid #b9ad99;border-radius:8px">
    <div style="font-family:Georgia,serif;font-size:22px;font-weight:bold;text-align:center;margin-bottom:8px">Um presente para você!</div>
    <table role="presentation" width="100%" cellspacing="6" cellpadding="0"><tr>
      <td width="65%" rowspan="2" style="vertical-align:top"><img src="${photo1}" alt="Cuiabá" style="width:100%;height:420px;object-fit:cover;border-radius:5px"></td>
      <td width="35%" style="vertical-align:top"><img src="${photo2}" alt="Starlis Home Versátil" style="width:100%;height:260px;object-fit:cover;border-radius:5px"><div style="color:#444;padding:4px 0 0;text-align:center;font-family:cursive"><b>Reserve já.</b> • Starlis Home Versátil • www.starlis.com.br</div></td>
    </tr><tr><td><img src="${photo3}" alt="Versátil" style="width:100%;height:150px;object-fit:cover;border-radius:5px"></td></tr></table>
  </div>`;
  const back=`<div style="padding:18px;background:#fffaf1;border:1px solid #b9ad99;border-radius:8px;font-family:cursive;color:#174f9a"><p>Olá, ${escaparHtml(recipientName||'amigo(a)')}.</p><p>${escaparHtml(String(cfg.message||''))}</p><p><b>Abraços, ${escaparHtml(senderName)}</b></p><p>${escaparHtml(cfg.address||'')}<br>Reservas: ${escaparHtml(cfg.phone||'')}</p><div style="border:1px dashed #174f9a;padding:10px"><b>${escaparHtml(cfg.couponText||'Cupom')}: ${escaparHtml(coupon)}</b><br><small>Válido até ${Utilities.formatDate(new Date(promo.expiresAt),APP_TIMEZONE,'dd/MM/yyyy')} e exclusivo para ${escaparHtml(recipient)}. Uso único.</small><br><br><a href="${site}" style="display:inline-block;background:#10578f;color:#fff;text-decoration:none;padding:10px 16px;border-radius:7px">Quero utilizar!</a></div></div>`;
  const body=`${front}<details style="margin-top:14px"><summary style="cursor:pointer;background:#7b5b38;color:#fff;padding:10px 16px;border-radius:7px;text-align:center;font-weight:bold">Clique para virar</summary>${back}</details><div style="text-align:center;margin-top:18px"><a href="${thank}" style="display:inline-block;background:#ef7c23;color:#fff;text-decoration:none;padding:11px 18px;border-radius:8px;font-weight:bold">Agradeça ao ${escaparHtml(senderName)}!</a></div>`;
  const html=emailShell(subject,'Um presente para você!',body);
  const logo=obterLogoVersatil();if(logo)inline.logoVersatil=logo;
  const msg={to:recipient,subject,body:`Um presente para você!\n\n${cfg.message||''}\n\nAbraços, ${senderName}\nCupom: ${coupon}\nValidade: ${promo.expiresAt}\n${site}`,htmlBody:html,name:APP_NAME,inlineImages:inline};
  MailApp.sendEmail(msg);
  const admin=ADMIN_EMAILS.filter(Boolean)[0];if(admin){const copy={...msg,to:admin,subject:`Cópia - ${subject}`,body:`Postal enviado por ${senderName} (${senderEmail}) para ${recipientName} (${recipient}). Cupom: ${coupon}. Validade: ${promo.expiresAt}`};MailApp.sendEmail(copy)}
  return promo;
}
function testarEmail(){MailApp.sendEmail({to:Session.getActiveUser().getEmail(),subject:'Teste - APP SERVIÇOS VERSÁTIL',body:'Integração de e-mail funcionando.',name:APP_NAME})}
function testarCalendario(){
  const inicio=new Date();inicio.setMinutes(inicio.getMinutes()+10);const fim=new Date(inicio);fim.setHours(fim.getHours()+1);
  CalendarApp.getDefaultCalendar().createEvent('Teste - APP SERVIÇOS VERSÁTIL',inicio,fim,{description:'Teste de integração com Google Calendar.'});
}


function testarEmailsAdministrativosV133(){
  const html=emailShell('Teste de integração','Versão 1.33','<p>Este é um teste do novo layout dos e-mails administrativos.</p>');
  ADMIN_EMAILS.forEach((email,index)=>{
    enviarHtml(email,`TESTE ${index+1}/2 - APP SERVIÇOS VERSÁTIL`, `Teste ${index+1}/2 enviado para ${email}`, html);
    console.log(`E-mail ${index+1}/2 enviado para ${email}`);
  });
}

function testarBloqueioCalendarioV133(){
  const hoje=Utilities.formatDate(new Date(),Session.getScriptTimeZone(),'yyyy-MM-dd');
  sincronizarDisponibilidade({
    operation:'close',
    closures:[{
      id:'TESTE_BLOQUEIO_V133_'+hoje,
      date:hoje,
      slot:'afternoon',
      scopeType:'all',
      scopeId:'all',
      scopeLabel:'TESTE - Todos os itens',
      periodLabel:'Tarde',
      calendarStart:'13:00',
      calendarEnd:'19:00'
    }]
  });
  console.log('Bloqueio de teste criado para hoje, das 13:00 às 19:00.');
}


function limparMarcacoesVersatilV134(){
  const props=PropertiesService.getScriptProperties();
  const all=props.getProperties();
  const cal=CalendarApp.getDefaultCalendar();
  let removidos=0;

  Object.keys(all).forEach(key=>{
    if(!key.startsWith('ORDER_EVENTS_')&&!key.startsWith('CLOSURE_EVENT_'))return;

    let ids=[];
    try{
      const parsed=JSON.parse(all[key]);
      ids=Array.isArray(parsed)?parsed:[all[key]];
    }catch(e){
      ids=[all[key]];
    }

    ids.filter(Boolean).forEach(id=>{
      try{
        const ev=cal.getEventById(id);
        if(ev){ev.deleteEvent();removidos++}
      }catch(e){console.error(e)}
    });

    props.deleteProperty(key);
  });

  console.log(`${removidos} marcação(ões) Versátil removida(s) do Google Calendar.`);
}

function testarBloqueioCalendarioV135(){
  const d=new Date();d.setDate(d.getDate()+2);
  const data=Utilities.formatDate(d,Session.getScriptTimeZone(),'yyyy-MM-dd');
  sincronizarDisponibilidade({operation:'close',closures:[{id:'TESTE_BLOQUEIO_V135_'+data,date:data,slot:'morning',scopeType:'category',scopeId:'locacoes',scopeLabel:'Locações',periodLabel:'Manhã',calendarStart:'06:00',calendarEnd:'12:00'}]});
  console.log('Bloqueio V1.35 criado para '+data);
}
function testarReaberturaCalendarioV135(){
  const d=new Date();d.setDate(d.getDate()+2);
  const data=Utilities.formatDate(d,Session.getScriptTimeZone(),'yyyy-MM-dd');
  sincronizarDisponibilidade({operation:'open',closures:[{id:'TESTE_BLOQUEIO_V135_'+data,date:data}]});
  console.log('Bloqueio V1.35 removido para '+data);
}
function limparMarcacoesVersatilV135(){
  const props=PropertiesService.getScriptProperties(),all=props.getProperties(),cal=CalendarApp.getDefaultCalendar();let removidos=0;
  Object.keys(all).forEach(key=>{
    if(!key.startsWith('ORDER_EVENTS_')&&!key.startsWith('CLOSURE_EVENT_'))return;
    let ids=[];try{const p=JSON.parse(all[key]);ids=Array.isArray(p)?p:[all[key]]}catch(e){ids=[all[key]]}
    ids.filter(Boolean).forEach(id=>{try{const ev=cal.getEventById(id);if(ev){ev.deleteEvent();removidos++}}catch(e){console.error(e)}});
    props.deleteProperty(key);
  });
  props.deleteProperty('LAST_AVAILABILITY_SYNC');
  console.log(removidos+' marcação(ões) removida(s).');
}

function diagnosticarSincronizacaoCalendarioV137(){
  const props=PropertiesService.getScriptProperties();
  const cal=CalendarApp.getDefaultCalendar();
  console.log('Calendário padrão ID: '+cal.getId());
  console.log('Calendário padrão nome: '+cal.getName());
  console.log('Última sincronização: '+(props.getProperty('LAST_AVAILABILITY_SYNC')||'nenhuma'));
}
function testarRecuperacaoSenhaV137(){
  enviarRecuperacaoSenha({password:'TESTE-V137',adminName:'Anibal'});
  console.log('Teste enviado somente ao e-mail principal.');
}


function testarRecuperacaoSenhaV138(){
  enviarRecuperacaoSenha({
    password:'TESTE-V138',
    adminName:'Anibal'
  });
  console.log('Teste V1.38 de recuperação enviado somente para anibal@starlis.com.br.');
}

// APP SERVIÇOS VERSÁTIL - Script versão 1.39 (mesma correção de recuperação da 1.38)

// APP SERVIÇOS VERSÁTIL - cópia de referência v1.40; sem alteração funcional nesta versão.

// v1.41: frontend apontando para a implantação de produção correta.

// v1.42: sem alterações no Apps Script; regras reforçadas no front-end.


function testarEmailPedidoComRespostaV143(){
  const teste={
    orderId:'TESTE-REPLYTO-V143',
    client:{
      name:'Solicitante de Teste',
      email:'solicitante.teste@example.com',
      roomName:'101A'
    },
    items:[{
      name:'Teste de pedido',
      qty:1,
      price:0,
      date:Utilities.formatDate(new Date(),Session.getScriptTimeZone(),'yyyy-MM-dd'),
      period:'09:00-11:00'
    }],
    total:0
  };

  const c=teste.client;
  const adminHtml=emailShell(
    'Teste - Novo pedido',
    `${c.name} • ${c.roomName}`,
    `<div style="padding:12px;background:#eaf4fb;border-radius:10px">
       <b>Cliente:</b> ${escaparHtml(c.name)}<br>
       <b>Unidade:</b> ${escaparHtml(c.roomName)}
     </div>
     <div style="margin:14px 0;padding:14px;background:#eef7ff;border:1px solid #b9d7ee;border-radius:10px">
       <div style="font-size:12px;color:#587086;margin-bottom:4px">E-mail do solicitante</div>
       <a href="mailto:${escaparHtml(c.email)}" style="font-size:17px;font-weight:700;color:#0f4c81;text-decoration:none">${escaparHtml(c.email)}</a>
       <div style="font-size:11px;color:#6c7d8a;margin-top:6px">Ao usar Responder, a resposta será endereçada ao solicitante.</div>
     </div>`
  );

  enviarHtml(
    'anibal@starlis.com.br',
    'TESTE V1.43 - Pedido com e-mail do solicitante',
    `Solicitante: ${c.name}\nE-mail: ${c.email}`,
    adminHtml,
    c.email
  );

  console.log('Teste V1.43 enviado para o e-mail principal com Reply-To do solicitante.');
}

// v1.44: sem alterações funcionais no Apps Script; versão visível adicionada ao frontend.

// v1.45: sem alteração funcional no Apps Script.

// v1.46: sem alterações funcionais no Apps Script; unidades e preços de moto atualizados no frontend.

// v1.47: sem alterações no Apps Script; lista de unidades atualizada no frontend.

// v1.48: sem alterações funcionais no Apps Script; lista de unidades corrigida no frontend.


function diagnosticarFusoHorarioV149(){
  console.log('Fuso utilizado pelo APP:',APP_TIMEZONE);
  console.log('Fuso configurado no projeto Apps Script:',Session.getScriptTimeZone());
  console.log('Calendário padrão:',CalendarApp.getDefaultCalendar().getName());
  console.log('Agora em Cuiabá:',Utilities.formatDate(new Date(),APP_TIMEZONE,'dd/MM/yyyy HH:mm:ss'));
}

function testarHorarioCuiabaV149(){
  const d=new Date();
  d.setDate(d.getDate()+2);
  const data=Utilities.formatDate(d,APP_TIMEZONE,'yyyy-MM-dd');
  const intervalo=obterIntervalo(data,'09:00-11:00');
  const ev=CalendarApp.getDefaultCalendar().createEvent(
    'TESTE V1.49 - Horário Cuiabá 09 às 11',
    intervalo.inicio,
    intervalo.fim,
    {description:`Teste de horário do APP SERVIÇOS VERSÁTIL\nFuso: ${APP_TIMEZONE}\nEsperado: 09:00 às 11:00 em Cuiabá/MT`}
  );
  console.log('Evento de teste criado: '+ev.getId());
}

// v1.50: sem alterações funcionais no Apps Script; instalação PWA implementada no frontend.

function centralSpreadsheet(){
  const p=PropertiesService.getScriptProperties();let id=p.getProperty(CENTRAL_DB_PROP);
  if(id){try{return SpreadsheetApp.openById(id)}catch(e){}}
  const ss=SpreadsheetApp.create('APP SERVIÇOS VERSÁTIL - BASE CENTRAL');p.setProperty(CENTRAL_DB_PROP,ss.getId());centralEnsureSheets_(ss);centralMetaSet('updatedAt',new Date().toISOString());return ss;
}
function centralEnsureSheets_(ss){['META','ROOMS','CATEGORIES','PRODUCTS','CLOSURES','ORDERS','LEISURE','ITINERARIES','CONTENT','PROMOCODES'].forEach(n=>{if(!ss.getSheetByName(n))ss.insertSheet(n)})}
function centralSheet_(n){const ss=centralSpreadsheet();centralEnsureSheets_(ss);return ss.getSheetByName(n)}
function centralWriteRows_(n,h,rows){const s=centralSheet_(n);s.clearContents();s.getRange(1,1,1,h.length).setValues([h]);if(rows.length)s.getRange(2,1,rows.length,h.length).setValues(rows);s.setFrozenRows(1)}
function centralReadObjects_(n){
  const s=centralSheet_(n);
  if(!s)return[];
  const v=s.getDataRange().getValues();
  if(v.length<2)return[];
  const h=v[0].map(String);
  return v.slice(1).filter(r=>r.some(x=>x!==''&&x!==null)).map(r=>Object.fromEntries(h.map((k,i)=>[k,r[i]])));
}
function centralMetaSet(k,val){const s=centralSheet_('META');if(s.getLastRow()===0)s.getRange(1,1,1,2).setValues([['key','value']]);const v=s.getDataRange().getValues();for(let r=1;r<v.length;r++){if(String(v[r][0])===String(k)){s.getRange(r+1,2).setValue(val);return}}s.appendRow([k,val])}
function centralMetaGet(k){return String(centralReadObjects_('META').find(r=>String(r.key)===String(k))?.value||'')}
const CONTENT_CHUNK_SIZE_V245=40000;
function centralWriteContentChunkedV245_(entries){
  const rows=[];
  (entries||[]).forEach(([key,json])=>{
    const text=String(json||'');
    if(!text.length){rows.push([key,0,'']);return}
    for(let pos=0,part=0;pos<text.length;pos+=CONTENT_CHUNK_SIZE_V245,part++){
      rows.push([key,part,text.slice(pos,pos+CONTENT_CHUNK_SIZE_V245)]);
    }
  });
  centralWriteRows_('CONTENT',['key','part','json'],rows);
}
function centralSavePublicData(d,meta={}){
  const rooms=Array.isArray(d.rooms)?d.rooms:[],cats=Array.isArray(d.categories)?d.categories:[],prods=Array.isArray(d.products)?d.products:[],cl=Array.isArray(d.availabilityClosures)?d.availabilityClosures:[],lz=Array.isArray(d.leisureGuide)?d.leisureGuide:null;
  const content=[
    ['categoriesFull',JSON.stringify(cats)],
    ['productsFull',JSON.stringify(prods)],
    ['leisureGuideFull',JSON.stringify(Array.isArray(d.leisureGuide)?d.leisureGuide:[])],
    ['versatilGuide',JSON.stringify(Array.isArray(d.versatilGuide)?d.versatilGuide:[])],
    ['starlisGuide',JSON.stringify(Array.isArray(d.starlisGuide)?d.starlisGuide:[])],
    ['postalConfig',JSON.stringify(d.postalConfig&&typeof d.postalConfig==='object'?d.postalConfig:{})]
  ];
  centralWriteRows_('ROOMS',['id','name','number','type'],rooms.map(r=>[r.id||'',r.name||'',r.number||'',r.type||'']));
  centralWriteRows_('CATEGORIES',['id','name','icon','description'],cats.map(c=>[c.id||'',c.name||'',c.icon||'',c.description||'']));
  centralWriteRows_('PRODUCTS',['id','cat','name','icon','desc','q','a','halfDay'],prods.map(p=>[p.id||'',p.cat||'',p.name||'',p.icon||'',p.desc||'',Number(p.q||0),Number(p.a||0),p.halfDay===true]));
  centralWriteRows_('CLOSURES',['id','date','slot','scopeType','scopeId','scopeLabel','periodLabel','calendarStart','calendarEnd','createdAt'],cl.map(c=>[c.id||'',c.date||'',c.slot||'',c.scopeType||'',c.scopeId||'',c.scopeLabel||'',c.periodLabel||'',c.calendarStart||'',c.calendarEnd||'',c.createdAt||'']));
  if(lz)centralWriteRows_('LEISURE',['id','parentId','type','name','description','distance','phone','imageUrl','mapQuery','sort'],lz.map(n=>[n.id||'',n.parentId||'',n.type||'place',n.name||'',n.description||'',n.distance||'',n.phone||'',/^data:image\//i.test(String(n.imageUrl||''))?'':(n.imageUrl||''),n.mapQuery||'',Number(n.sort||0)]));
  // v2.45: large editorial JSON (especially photos) is split across cells to avoid the Google Sheets 50k/cell limit.
  centralWriteContentChunkedV245_(content);
  centralMetaSet('updatedAt',new Date().toISOString());
  centralMetaSet('publicationId',String(meta.publicationId||''));
  centralMetaSet('clientPublishedAt',String(meta.clientPublishedAt||''));
}



function normalizeLocaisTuristicosV192_(rows){
  rows=Array.isArray(rows)?rows:[];
  const root=rows.find(n=>String(n.id||'')==='lz_036'||(String(n.type||'')==='group'&&String(n.name||'').toLowerCase()==='locais turísticos'));
  if(!root)return rows;
  const subgroupIds=new Set(['lz_041','lz_046','lz_051','lz_054','lz_057']);
  rows.forEach(n=>{if(String(n.type||'')==='place'&&subgroupIds.has(String(n.parentId||'')))n.parentId=root.id});
  return rows.filter(n=>!subgroupIds.has(String(n.id||'')));
}


function normalizeHospitaisUpaV209_(rows){
  rows=Array.isArray(rows)?rows:[];
  let root=rows.find(n=>String(n.id||'')==='grp_hospitais_v171')
    ||rows.find(n=>String(n.type||'')==='group'&&/hospitais?\s*(e|&)\s*upa/i.test(String(n.name||'')));
  if(!root){
    root={id:'grp_hospitais_v171',parentId:'',type:'group',name:'HOSPITAIS E UPA',description:'Hospitais e pronto atendimento em Cuiabá.',distance:'',phone:'',imageUrl:'',mapQuery:'',sort:60};
    rows.push(root);
  }
  root.name='HOSPITAIS E UPA'; root.parentId=''; root.type='group';

  let hospitals=rows.find(n=>String(n.id||'')==='grp_hospitais_sub_v191');
  if(!hospitals){hospitals={id:'grp_hospitais_sub_v191',parentId:root.id,type:'group',name:'HOSPITAIS',description:'Hospitais em Cuiabá.',distance:'',phone:'',imageUrl:'',mapQuery:'',sort:10};rows.push(hospitals)}
  hospitals.parentId=root.id;hospitals.name='HOSPITAIS';hospitals.type='group';hospitals.sort=10;

  let upa=rows.find(n=>String(n.id||'')==='grp_upa_sub_v191');
  if(!upa){upa={id:'grp_upa_sub_v191',parentId:root.id,type:'group',name:'UPA',description:'Unidades de Pronto Atendimento 24 horas em Cuiabá.',distance:'',phone:'',imageUrl:'',mapQuery:'',sort:20};rows.push(upa)}
  upa.parentId=root.id;upa.name='UPA';upa.type='group';upa.sort=20;

  rows.forEach(n=>{
    if(String(n.type||'')!=='place')return;
    const name=String(n.name||'');
    if(/^UPA\b/i.test(name))n.parentId=upa.id;
    else if(/^Hospital\b/i.test(name)||/^Complexo Hospitalar\b/i.test(name))n.parentId=hospitals.id;
    else if(String(n.parentId||'')===root.id)n.parentId=/\bUPA\b/i.test(name)?upa.id:hospitals.id;
  });
  return rows;
}

function centralLeisureGuideV167_(){
  const done=centralMetaGet('LEISURE_CLEAN_SEED_V167');
  if(String(done)!=='1'){
    const seed=DEFAULT_LEISURE_GUIDE_V167;
    centralWriteRows_('LEISURE',['id','parentId','type','name','description','distance','phone','imageUrl','mapQuery','sort'],seed.map(n=>[n.id||'',n.parentId||'',n.type||'place',n.name||'',n.description||'',n.distance||'',n.phone||'',n.imageUrl||'',n.mapQuery||'',Number(n.sort||0)]));
    centralMetaSet('LEISURE_CLEAN_SEED_V167','1');
    return seed;
  }
  let rows=centralReadObjects_('LEISURE');
  const ids=new Set(rows.map(n=>String(n.id||'')));
  const missing=EXTRA_LEISURE_GUIDE_V171.concat(EXTRA_LEISURE_GUIDE_V173,EXTRA_LEISURE_GUIDE_V196,EXTRA_CINEMAS_GUIDE_V201).filter(n=>!ids.has(n.id));
  if(missing.length){rows=rows.concat(missing);centralWriteRows_('LEISURE',['id','parentId','type','name','description','distance','phone','imageUrl','mapQuery','sort'],rows.map(n=>[n.id||'',n.parentId||'',n.type||'place',n.name||'',n.description||'',n.distance||'',n.phone||'',n.imageUrl||'',n.mapQuery||'',Number(n.sort||0)]));}
  const out=rows.length?rows.map(n=>({...n,sort:Number(n.sort||0)})):DEFAULT_LEISURE_GUIDE_V167.concat(EXTRA_LEISURE_GUIDE_V171,EXTRA_LEISURE_GUIDE_V173,EXTRA_LEISURE_GUIDE_V196,EXTRA_CINEMAS_GUIDE_V201);
  return normalizeHospitaisUpaV209_(normalizeLocaisTuristicosV192_(out));
}

function centralContentV170_(){
  const rows=centralReadObjects_('CONTENT'),out={},parts={};
  rows.forEach(r=>{
    const key=String(r.key||'');
    if(!key)return;
    (parts[key]||(parts[key]=[])).push({part:Number(r.part||0),json:String(r.json||'')});
  });
  Object.keys(parts).forEach(key=>{
    const text=parts[key].sort((a,b)=>a.part-b.part).map(x=>x.json).join('');
    try{out[key]=JSON.parse(text||'null')}catch(e){console.error('CONTENT inválido:',key,e)}
  });
  return out;
}

function centralReadPublicData(){
  const content=centralContentV170_();
  const tableCategories=centralReadObjects_('CATEGORIES');
  const tableProducts=centralReadObjects_('PRODUCTS');
  const categories=Array.isArray(content.categoriesFull)?content.categoriesFull:tableCategories;
  const products=(Array.isArray(content.productsFull)?content.productsFull:tableProducts).map(p=>({...p,q:Number(p.q||0),a:Number(p.a||0),halfDay:p.halfDay===true||String(p.halfDay).toLowerCase()==='true'}));
  const leisureGuide=Array.isArray(content.leisureGuideFull)?content.leisureGuideFull:centralLeisureGuideV167_();
  return {rooms:centralReadObjects_('ROOMS'),categories,products,availabilityClosures:centralReadObjects_('CLOSURES'),leisureGuide,itineraryStats:itineraryStats_(),serviceDailyCapacity:serviceDailyCapacity_(),versatilGuide:Array.isArray(content.versatilGuide)?content.versatilGuide:[],starlisGuide:Array.isArray(content.starlisGuide)?content.starlisGuide:[],postalConfig:content.postalConfig&&typeof content.postalConfig==='object'?content.postalConfig:{}};
}

function serviceDailyCapacity_(){
  const sh=centralSheet_('ORDERS');
  if(!sh||sh.getLastRow()<2)return {};
  const rows=sh.getDataRange().getValues().slice(1).filter(r=>r[0]);
  const counts={};

  rows.forEach(r=>{
    try{
      const order=JSON.parse(r[6]||'{}');
      (order.items||[]).forEach(i=>{
        // Category Serviços only. Packages, Enxoval and Locações do not consume this stock.
        if(String(i.categoryId||'')!=='servicos')return;
        const date=String(i.date||'');
        if(!date)return;
        counts[date]=(counts[date]||0)+Math.max(1,Number(i.qty||1));
      });
    }catch(e){console.error('Falha ao calcular capacidade diária de serviços:',e)}
  });
  return counts;
}

function centralDeleteOrder_(orderId){
  const id=String(orderId||'');
  if(!id)return;
  const sh=centralSheet_('ORDERS');
  if(!sh||sh.getLastRow()<2)return;
  const v=sh.getDataRange().getValues();
  for(let r=v.length-1;r>=1;r--){
    if(String(v[r][0])===id)sh.deleteRow(r+1);
  }
}

function centralSaveOrder(d){
  try{const s=centralSheet_('ORDERS');if(s.getLastRow()===0){s.getRange(1,1,1,7).setValues([['orderId','createdAt','clientName','clientEmail','roomName','total','json']]);s.setFrozenRows(1)}
  const id=String(d.orderId||'');if(!id)return;const v=s.getDataRange().getValues();if(v.slice(1).some(r=>String(r[0])===id))return;s.appendRow([id,d.createdAt||new Date().toISOString(),d.client?.name||'',d.client?.email||'',d.client?.roomName||'',Number(d.total||0),JSON.stringify(d)])}catch(e){console.error(e)}
}
function inicializarBaseCentralV151(){const ss=centralSpreadsheet();console.log('Base central:',ss.getUrl());console.log('ID:',ss.getId())}


function testarPonteMobileV152(){
  const html=doGet({parameter:{action:'bridgePublic',bridgeAction:'centralStatus',requestId:'TESTE_V152'}});
  console.log('Ponte mobile criada com sucesso. Tipo:',html.getContent? 'HtmlOutput':'desconhecido');
  console.log('Versão central:',CURRENT_APP_VERSION);
}


function testarBootstrapSemParametrosV153(){
  const out=doGet({parameter:{}});
  console.log('Bootstrap sem parâmetros criado com sucesso.');
  console.log('Tipo de saída: HtmlOutput');
  console.log('Versão:',CURRENT_APP_VERSION);
  console.log('Base central:',centralSpreadsheet().getUrl());
}


function githubTokenV154_(){
  const token=PropertiesService.getScriptProperties().getProperty(GITHUB_TOKEN_PROP);
  if(!token)throw new Error('Token do GitHub não configurado. Execute configurarTokenGitHubV154 uma vez.');
  return token;
}

function githubHeadersV154_(){
  return {
    'Accept':'application/vnd.github+json',
    'Authorization':'Bearer '+githubTokenV154_(),
    'X-GitHub-Api-Version':'2022-11-28'
  };
}

function githubApiUrlV154_(){
  return 'https://api.github.com/repos/'+encodeURIComponent(GITHUB_OWNER)+'/'+encodeURIComponent(GITHUB_REPO)+'/contents/'+GITHUB_DATA_PATH;
}

function payloadPublicoV154_(){
  const now=new Date().toISOString();
  return {
    ok:true,
    version:CURRENT_APP_VERSION,
    updatedAt:centralMetaGet('updatedAt')||now,
    publishedAt:now,
    publicationId:centralMetaGet('publicationId')||'',
    clientPublishedAt:centralMetaGet('clientPublishedAt')||'',
    data:centralReadPublicData()
  };
}

function githubCurrentShaV154_(){
  const url=githubApiUrlV154_()+'?ref='+encodeURIComponent(GITHUB_BRANCH);
  const res=UrlFetchApp.fetch(url,{
    method:'get',
    headers:githubHeadersV154_(),
    muteHttpExceptions:true
  });

  const code=res.getResponseCode();
  if(code===404)return '';
  if(code<200||code>=300)throw new Error('GitHub GET falhou: HTTP '+code+' - '+res.getContentText());

  return JSON.parse(res.getContentText()).sha||'';
}

function publicarBaseNoGitHubV154(){
  centralMetaSet('updatedAt',new Date().toISOString());
  const content=JSON.stringify(payloadPublicoV154_(),null,2);
  const sha=githubCurrentShaV154_();

  const body={
    message:'Atualiza base pública do APP SERVIÇOS VERSÁTIL v'+CURRENT_APP_VERSION,
    content:Utilities.base64Encode(content,Utilities.Charset.UTF_8),
    branch:GITHUB_BRANCH
  };

  if(sha)body.sha=sha;

  const res=UrlFetchApp.fetch(githubApiUrlV154_(),{
    method:'put',
    contentType:'application/json',
    headers:githubHeadersV154_(),
    payload:JSON.stringify(body),
    muteHttpExceptions:true
  });

  const code=res.getResponseCode();
  if(code<200||code>=300){
    throw new Error('GitHub PUT falhou: HTTP '+code+' - '+res.getContentText());
  }

  const result=JSON.parse(res.getContentText());
  PropertiesService.getScriptProperties().setProperty(
    'LAST_GITHUB_PUBLICATION',
    JSON.stringify({at:new Date().toISOString(),sha:result.content?.sha||'',version:CURRENT_APP_VERSION})
  );

  console.log('data.json publicado automaticamente no GitHub.');
  console.log('SHA:',result.content?.sha||'');
  return true;
}

function configurarTokenGitHubV154(){
  const ui=SpreadsheetApp.getUi ? null : null;
  console.log('Configure o token pela função definirTokenGitHubV154("SEU_TOKEN") no editor e execute uma vez; depois remova o token da linha antes de salvar novamente.');
}

function definirTokenGitHubV154(token){
  const value=String(token||'').trim();
  if(!value)throw new Error('Token vazio.');
  PropertiesService.getScriptProperties().setProperty(GITHUB_TOKEN_PROP,value);
  console.log('Token do GitHub salvo com segurança em Script Properties.');
}

function removerTokenGitHubV154(){
  PropertiesService.getScriptProperties().deleteProperty(GITHUB_TOKEN_PROP);
  console.log('Token do GitHub removido das Script Properties.');
}

function testarPublicacaoGitHubV154(){
  publicarBaseNoGitHubV154();
  console.log('Teste concluído. Abra no navegador: https://anibaltomaz.github.io/app-servicos-versatil/data.json');
}

function statusPublicacaoGitHubV154(){
  const p=PropertiesService.getScriptProperties();
  console.log('Token configurado:',!!p.getProperty(GITHUB_TOKEN_PROP));
  console.log('Última publicação:',p.getProperty('LAST_GITHUB_PUBLICATION')||'nenhuma');
}

// v1.55: sincronização multi-dispositivo reforçada no frontend; publicação GitHub permanece igual.

// v1.56: novo layout do catálogo do cliente no frontend; integração e publicação permanecem iguais.

// v1.57: melhorias de usabilidade do carrinho no celular; backend e publicação permanecem iguais.

// v1.58: correção efetiva do layout do carrinho no frontend.

// v1.59: exibição automática da economia dos pacotes no frontend; sem alteração funcional no backend.

// v1.60: protege alterações recém-publicadas contra data.json ainda antigo.

// v1.61: regras de interface e antecedência mínima de 24h no frontend.

// v1.62: cabeçalho fixo, loader visual e revisão da página Conta no frontend.

// v1.63: adiciona área de consulta Lazer e Conveniências no frontend.

// v1.64: sincroniza Lazer e Conveniências, inicializa a planilha LEISURE e atualiza o horário real a cada publicação GitHub.

// FIX v1.64: LEISURE incluída na criação automática de abas e leitura defensiva de planilhas.

// v1.65: lista integral reconstruída do arquivo original: 41 menus/submenus e 220 locais finais.

// v1.66: normaliza nome Lazer, fallback de telefone da Sec. de Turismo, títulos principais e estabilidade visual do frontend.

// v1.67: corrige nomenclatura, raiz duplicada, distâncias, contatos e reconstrução limpa da base LEISURE.

// v1.68: fotos reais pesquisadas, MEU ROTEIRO, e-mail e estatísticas de roteiros.

// v1.69: capacidade invisível de 3 solicitações/dia para categoria Serviços e Diarista limitada a 1 por usuário no carrinho.

// v1.70: menu aprovado, ícones Lazer, Conheça o Versátil, Conheça a Starlis, Correio Versátil, postal clássico animado, signout contextual e Admin de conteúdos.
