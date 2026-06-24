// ─── PRODUCTS ──────────────────────────────────────────────────
const PRODUCTS = [
  { 
    id: 1,  
    sku: "L-1", 
    name: "Ref: L-1 - Coroa Luxo Colorida", 
    category: "Luxo",    
    badge: "LUXO",   
    basePrice: 395, 
    originalPrice: 450, 
    discount: 12,
    image: "imagens/luxo-1.jpeg", 
    description: "Composição Base: Crisântemos + 2 tipos de flores de época como: lisianthus, astromélias, gérberas,  acompanhadas de folhagens. 2 TIPOS DE FLORES NOBRES: lírio, antúrio, Rosas , Gipsofila Opções de cores: Branca.",
    sizePrices: {
      "P": 395,
      "M": 455,
      "G": 525
    }
  },
  { 
    id: 2,  
    sku: "N-2",
    name: "Ref: N-2 - Coroa Nobre Rosa",   
    category: "Nobre",  
    badge: "Nobre", 
    basePrice: 520, 
    originalPrice: 590,
    discount: 12,
    image: "imagens/teste.png", 
    description: "Elegante composição em tons de rosa e branco,com flores Nobre de alta durabilidade.",
    sizePrices: {
      "P": 520,
      "M": 580,
      "G": 650
    }
  },
  { 
    id: 3,   
    sku: "L-3",
    name: "Ref: L-3 - Coroa Luxo  Amarela",        
    category: "Luxo",    
    badge: "LUXO",     
    basePrice: 420, 
    originalPrice: 480,
    discount: 12,
    image: "imagens/luxo-3.png", 
    description: "Composição Base: Crisântemos + 2 tipos de flores de época como: lisianthus, astromélias, gérberas,  acompanhadas de folhagens. 2 TIPOS DE FLORES NOBRES: lírio, Rosas , Gipsofila Opções de cores: Branca.",
    sizePrices: {
      "P": 420,
      "M": 480,
      "G": 550
    }
  },
  { 
    id: 4,   
    sku: "N-4",
    name: "Ref: N-4 - Coroa Nobre Vermelha",      
    category: "Nobre",  
    badge: "Nobre",  
    basePrice: 480,
    originalPrice: 550, 
    discount: 13, 
    image: "imagens/Nobre-4.jpeg", 
    description: "Composição Base:  Rosas brancas e vermelhas, gipsofila e áster. SEM CRISÂNTEMOS",
    sizePrices: {
      "P": 480,
      "M": 540,
      "G": 610
    }
  },
  { 
    id: 5,   
    sku: "C-5",
    name: "Ref: C-5 - Coroa Clássica Branca",     
    category: "Clássica", 
    badge: "CLÁSSICA",
    basePrice: 200,
    originalPrice: 320, 
    discount: 12, 
    image: "imagens/classica-5.jpeg",
    description:  " Composição Base: Crisântemos + 2 tipos de flores de época como: Rosas, lisianthus, astromélias, gérberas, entre outras, acompanhadas de folhagens.  Opções de cores: Branca, Amarela, Colorida, Vermelha e Rosa.",
    sizePrices: {
      "P": 200,
      "M": 250,
      "G": 380
    }
  },
  { 
   id: 6,   
    sku: "C-6",
    name: "Ref: C-6 - Coroa Clássica Vermelha",   
    category: "Clássica", 
    badge: "CLÁSSICA", 
    basePrice: 260,
    originalPrice: 300,
    discount: 13,
    image: "imagens/classica-6.jpeg", 
    description: " Composição Base: Crisântemos + 2 tipos de flores de época como: Rosas, lisianthus, astromélias, gérberas, entre outras, acompanhadas de folhagens. Opções de cores: Branca, Vermelha.",
    sizePrices: {
      "P": 200,
      "M": 250,
      "G": 380
    }
  },
  { 
    id: 7, 
    sku: "L-7",
    name: "Ref: L-7 - Coroa Luxo Branca",       
    category: "Luxo",    
    badge: "LUXO",    
    basePrice: 445, 
    originalPrice: 510, 
    discount: 13, 
    image: "imagens/luxo-7.jpeg", 
    description: "Composição Base: Crisântemos + 2 tipos de flores de época como: lisianthus, astromélias, gérberas,  acompanhadas de folhagens. 2 TIPOS DE FLORES NOBRES:  lírio, antúrio, Rosas , Copo de leite ,boca de leão  Opções de cores: Branca.",
    sizePrices: {
      "P": 445,
      "M": 505,
      "G": 575
    }
  },
  { 
    id: 8,   
    sku: "N-8",
    name: "Ref: N-8 - Coroa Nobre Branca",       
    category: "Nobre",  
    badge: "Nobre",  
    basePrice: 580, 
    originalPrice: 660, 
    discount: 12, 
    image: "/coroa-luxo-branca.jpg", 
    description: "Majestosa coroa toda em branco com orquídeas, lírios e crisântemos selecionados, símbolo de pureza e respeito.",
    sizePrices: {
      "P": 580,
      "M": 640,
      "G": 710
    }
  },
  { 
    id: 9, 
    sku: "C-9",
    name: "Ref: C-9 - Coroa Clássica Colorida",        
    category: "Clássica", 
    badge: "CLÁSSICA", 
    basePrice: 295, 
    originalPrice: 340, 
    discount: 13, 
    image: "imagens/classica-9.jpeg", 
    description: "Composição Base: Crisântemos + 2 tipos de flores de época como: Margarida, astromélias, acompanhadas de folhagens. Opções de cores: Colorida.",
    sizePrices: {
      "P": 200,
      "M": 250,
      "G": 380
    }
  },
  { 
    id: 10, 
    sku: "L-10",
    name: "Ref: L-10 - Coroa Luxo Branca com Rosa",         
    category: "Luxo",     
    badge: "LUXO",     
    basePrice: 460, 
    originalPrice: 530, 
    discount: 13, 
    image: "imagens/luxo-10.jpeg", 
    description: "Composição Base: Crisântemos + 2 tipos de flores de época como: lisianthus, astromélias, gérberas. 2 TIPOS DE FLORES NOBRES:  lírio, Rosas ,  lírio, Rosas , Gipsofila e folhagens  Opções de cores: Branca.",
    sizePrices: {
      "P": 460,
      "M": 520,
      "G": 590
    }
  },
  { 
    id: 11, 
    sku: "N-11",
    name: "Ref: N-11 - Coroa Nobre Lilás",         
    category: "Nobre",  
    badge: "Nobre",  
    basePrice: 540,
    originalPrice: 620, 
    discount: 13, 
    image: "/coroa-luxo-branca.jpg", 
    description: "Sofisticada composição em tons de lilás e roxo com flores nobres cuidadosamente selecionadas.",
    sizePrices: {
      "P": 540,
      "M": 600,
      "G": 670
    }
  },
  { 
    id: 12, 
    sku: "C-12",
    name: "Ref: C-12 - Coroa Clássica Amarela",      
    category: "Clássica", 
    badge: "CLÁSSICA", 
    basePrice: 270, 
    originalPrice: 310, 
    discount: 13, 
    image: "imagens/classica-12.png", 
    description: "Composição Base: Crisântemos + 2 tipos de flores de época como: Rosas, lisianthus, astromélias, gérberas, entre outras, acompanhadas de folhagens. Opções de cores: Branca, Amarela.",
    sizePrices: {
      "P": 270,
      "M": 330,
      "G": 400
    }
  },
  { 
    id: 13, 
    sku: "L-13",
    name: "Ref: L-13 - Coroa Luxo Branca",         
    category: "Luxo",     
    badge: "LUXO",     
    basePrice: 490, 
    originalPrice: 560, 
    discount: 13,
    image: "imagens/luxo-13.jpg", 
    description: "Composição Base: Crisântemos + 2 tipos de flores de época como: lisianthus, astromélias, gérberas. 2 TIPOS DE FLORES NOBRES:  lírio, Rosas ,  lírio, Gipsofila e folhagens  Opções de cores: Branca.",
    sizePrices: {
      "P": 490,
      "M": 550,
      "G": 620
    }
  },
  { 
    id: 14, 
    sku: "N-14",
    name: "Ref: N-14 - Coroa Nobre Pérola",        
    category: "Nobre",  
    badge: "Nobre",  
    basePrice: 620, 
    originalPrice: 710, 
    discount: 13, 
    image: "/coroa-luxo-branca.jpg", 
    description: "Exclusiva composição com flores brancas e creme em tons perlados, de elegância inigualável.",
    sizePrices: {
      "P": 620,
      "M": 680,
      "G": 750
    }
  },
  { 
    id: 15, 
    sku: "C-15",
    name: "Ref: C-15 - Coroa Clássica Rosa",        
    category: "Clássica",
    badge: "CLÁSSICA", 
    basePrice: 285, 
    originalPrice: 325, 
    discount: 12, 
    image: "imagens/classica-15.jpeg", 
    description: "Composição Base: Crisântemos + 2 tipos de flores de época como: Rosas, lisianthus, astromélias, gérberas, entre outras, acompanhadas de folhagens. Opções de cores: Branca, Rosa.",
    sizePrices: {
      "P": 285,
      "M": 345,
      "G": 415
    }
  },
  { 
    id: 16,
    sku: "L-16",
    name: "Ref: L-16 - Coroa Luxo Vermelha",            
    category: "Luxo",      
    badge: "LUXO",     
    basePrice: 415, 
    originalPrice: 475, 
    discount: 13, 
    image: "imagens/.jpeg", 
    description: "Composição Base:  Rosas brancas e vermelhas, gipsofila e áster. SEM CRISÂNTEMOS",
    sizePrices: {
      "P": 415,
      "M": 475,
      "G": 545
    }
  },
  { 
    id: 17, 
    sku: "N-17",
    name: "Ref: N-17 - Coroa Nobre Champanhe",    
    category: "Nobre",  
    badge: "Nobre",  
    basePrice: 560, 
    originalPrice: 640, 
    discount: 12, 
    image: "/coroa-luxo-branca.jpg", 
    description: "Refinada composição em tons champanhe e dourado com flores nobres, transmitindo elegância única.",
    sizePrices: {
      "P": 560,
      "M": 620,
      "G": 690
    }
  },
  { 
    id: 18, 
    sku: "C-18",
    name: "Ref: C-18 - Coroa Clássica Branca",        
    category: "Clássica", 
    badge: "CLÁSSICA", 
    basePrice: 265, 
    originalPrice: 305, 
    discount: 13, 
    image: "imagens/classica-18.jpeg", 
    description: "Composição Base: Crisântemos, acompanhadas de folhagens. Opções de cores: Branca.",
    sizePrices: {
      "P": 265,
      "M": 325,
      "G": 395
    }
  },
  { 
    id: 19, 
    sku: "L-19",
    name: "Ref: L-19 - Coroa Luxo Branca e Azul",          
    category: "Luxo",     
    badge: "LUXO",    
    basePrice: 430, 
    originalPrice: 495,
    discount: 13, 
    image: "imagens/luxo-19.jpeg", 
    description: "Composição Base: Crisântemos + 2 tipos de flores de época como: astromélias, gérberas, entre outras, acompanhadas de folhagens. Opções de cores: Branca, Azul.",
    sizePrices: {
      "P": 430,
      "M": 490,
      "G": 560
    }
  },
  { 
    id: 20,
    sku: "N-20",
    name: "Ref: N-20 - Coroa Nobre Fucsia",       
    category: "Nobre", 
    badge: "Nobre",  
    basePrice: 510, 
    originalPrice: 585,
    discount: 13, 
    image: "/coroa-luxo-branca.jpg", 
    description: "Vibrante e marcante composição em fucsia e magenta com flores Nobre de alto impacto visual.",
    sizePrices: {
      "P": 510,
      "M": 570,
      "G": 640
    }
  },
  { 
    id: 21, 
    sku: "C-21",
    name: "Ref: C-21 - Coroa Clássica Branca,Amarela e Laranja",       
    category: "Clássica", 
    badge: "CLÁSSICA",
    basePrice: 275,
    originalPrice: 315, 
    discount: 13, 
    image: "imagens/classica-21.jpeg", 
    description: "Composição Base: Crisântemos + 2 tipos de flores de época como: astromélias, gérberas, entre outras, acompanhadas de folhagens. Opções de cores: Branca, Amarela, Laranja.",
    sizePrices: {
      "P": 275,
      "M": 335,
      "G": 405
    }
  },
  { 
    id: 22,
    sku: "L-22",
    name: "Ref: L-22 - Coroa Luxo Natureza",        
    category: "Luxo",    
    badge: "LUXO",    
    basePrice: 450, 
    originalPrice: 515,
    discount: 13, 
    image: "/coroa-luxo-branca.jpg", 
    description: "Inspirada na natureza, com folhagens nobres, flores silvestres e arranjo orgânico de extrema sofisticação.",
    sizePrices: {
      "P": 450,
      "M": 510,
      "G": 580
    }
  },
  { 
    id: 23, 
    sku: "N-23",
    name: "Ref: N-23 - Coroa Nobre Exclusiva",    
    category: "Nobre", 
    badge: "Nobre",  
    basePrice: 680, 
    originalPrice: 780, 
    discount: 13, 
    image: "/coroa-luxo-branca.jpg", 
    description: "Nossa linha mais requintada, com flores importadas e arranjo personalizado. A homenagem mais especial possível.",
    sizePrices: {
      "P": 680,
      "M": 750,
      "G": 830
    }
  },
  { 
    id: 24, 
    sku: "C-24",
    name: "Ref: C-24 - Coroa Clássica Branca e Azul",     
    category: "Clássica",
    badge: "CLÁSSICA", 
    basePrice: 240, 
    originalPrice: 275, 
    discount: 13, 
    image: "imagens/classica-24.jpeg", 
    description: "Composição Base: Crisântemos + 2 tipos de flores de época como: astromélias, gérberas, entre outras, acompanhadas de folhagens. Opções de cores: Branca, Azul.",
    sizePrices: {
      "P": 240,
      "M": 300,
      "G": 370
    }
  },
  { 
    id: 25,
    sku: "L-25",
    name: "Ref: L-25 - Coroa Luxo Borboleta",       
    category: "Luxo",    
    badge: "LUXO",     
    basePrice: 435, 
    originalPrice: 500,
    discount: 13,
    image: "/coroa-luxo-branca.jpg",
    description: "Arranjo delicado e leve como borboletas, com flores suaves e translúcidas em tons pastéis luxuosos.",
    sizePrices: {
      "P": 435,
      "M": 495,
      "G": 565
    }
  }
];

// ─── SIZES ─────────────────────────────────────────────────────
const SIZES = [
  { id: "P", label: "Pequena", dimensions: "1,00m × 1,00m" },
  { id: "M", label: "Média",   dimensions: "1,20m × 1,00m" },
  { id: "G", label: "Grande",  dimensions: "1,50m × 1,00m" }
];

// ─── CEMETERIES ────────────────────────────────────────────────
const CEMETERIES = [
  // --- SÃO PAULO (CENTRO / NORTE / OESTE) ---
  { id: 1, name: "Cemitério da Lapa", address: "R. Bergson, 347", city: "São Paulo", state: "SP", phone: "(11) 3834-4537", hours: "7h–18h", mapQuery: "Cemitério da Lapa, SP" },
  { id: 2, name: "Memorial Parque Jaraguá", address: "R. N. Sra. do Líbano, 635", city: "São Paulo", state: "SP", phone: "(11) 3917-2244", hours: "8h–17h", mapQuery: "Memorial Parque Jaraguá, SP" },
  { id: 3, name: "Cemitério Dom Bosco (Perus)", address: "Estrada dos Pinheirinhos, 860", city: "São Paulo", state: "SP", phone: "(11) 3917-0030", hours: "7h–18h", mapQuery: "Cemitério Dom Bosco, Perus" },
  { id: 4, name: "Cemitério Gethsêmani Anhanguera", address: "Rod. Anhanguera, Km 23.4", city: "São Paulo", state: "SP", phone: "(11) 3911-3700", hours: "8h–18h", mapQuery: "Cemitério Gethsêmani Anhanguera, SP" },
  { id: 5, name: "Cemitério do Araçá", address: "Av. Dr. Arnaldo, 666", city: "São Paulo", state: "SP", phone: "(11) 3256-7241", hours: "7h–18h", mapQuery: "Cemitério do Araçá, SP" },
  { id: 6, name: "Cemitério Vila Nova Cachoeirinha", address: "Av. João Marcelino Branco, 345", city: "São Paulo", state: "SP", phone: "(11) 3984-6014", hours: "7h–18h", mapQuery: "Cemitério Vila Nova Cachoeirinha, SP" },
  { id: 7, name: "Cemitério Santana (Chora Menino)", address: "R. Nova dos Portugueses, 141", city: "São Paulo", state: "SP", phone: "(11) 2236-0566", hours: "7h–18h", mapQuery: "Cemitério Santana Chora Menino, SP" },
  { id: 8, name: "Cemitério da Consolação", address: "R. da Consolação, 1600", city: "São Paulo", state: "SP", phone: "(11) 3256-9081", hours: "7h–17h", mapQuery: "Cemitério da Consolação, SP" },
  { id: 9, name: "Cemitério Vila Maria", address: "R. Prof. Maria José Barone Fernandes, 498", city: "São Paulo", state: "SP", phone: "(11) 2631-5026", hours: "7h–18h", mapQuery: "Cemitério Vila Maria, SP" },
  { id: 10, name: "Cemitério do Tremembé", address: "R. Maria Amália Lopes de Azevedo, 2930", city: "São Paulo", state: "SP", phone: "(11) 2261-2621", hours: "7h–18h", mapQuery: "Cemitério Tremembé, SP" },

  // --- SÃO PAULO (ZONA SUL / LESTE) ---
  { id: 11, name: "Cemitério do Morumbi", address: "R. Dep. Laércio Corte, 468", city: "São Paulo", state: "SP", phone: "(11) 3759-1000", hours: "24h", mapQuery: "Cemitério do Morumbi, SP" },
  { id: 12, name: "Cemitério Gethsêmani Morumbi", address: "Praça da Ressurreição, 1", city: "São Paulo", state: "SP", phone: "(11) 3742-5322", hours: "7h–18h", mapQuery: "Cemitério Gethsêmani Morumbi, SP" },
  { id: 13, name: "Cemitério de Congonhas", address: "R. Min. Álvaro de Sousa Lima, 101", city: "São Paulo", state: "SP", phone: "(11) 5031-4000", hours: "8h–18h", mapQuery: "Cemitério de Congonhas, SP" },
  { id: 14, name: "Cemitério Vila Formosa", address: "Av. Flor de Vila Formosa, s/n", city: "São Paulo", state: "SP", phone: "(11) 2671-5544", hours: "7h–18h", mapQuery: "Cemitério Vila Formosa, SP" },
  { id: 15, name: "Cemitério Quarta Parada", address: "Av. Salim Farah Maluf, s/n", city: "São Paulo", state: "SP", phone: "(11) 2605-2444", hours: "7h–18h", mapQuery: "Cemitério Quarta Parada, SP" },
  { id: 16, name: "Cemitério da Saudade (São Miguel)", address: "Av. Pires do Rio, 2000", city: "São Paulo", state: "SP", phone: "(11) 2052-1920", hours: "7h–18h", mapQuery: "Cemitério São Miguel Paulista, SP" },
  { id: 17, name: "Cemitério Parque das Flores", address: "Estrada do Campo Limpo, 2000", city: "São Paulo", state: "SP", phone: "(11) 5822-3000", hours: "8h–18h", mapQuery: "Cemitério Parque das Flores, SP" },
  { id: 18, name: "Cemitério do Socorro", address: "R. Dr. Carlos de Moraes Barros, 120", city: "São Paulo", state: "SP", phone: "(11) 5522-3015", hours: "7h–18h", mapQuery: "Cemitério do Socorro, SP" },
  { id: 19, name: "Cemitério de Parelheiros", address: "R. José Pedro de Borba, 20", city: "São Paulo", state: "SP", phone: "(11) 5920-8025", hours: "7h–18h", mapQuery: "Cemitério Parelheiros, SP" },
  { id: 20, name: "Cemitério São Luís", address: "R. Antônio de Sena, 82", city: "São Paulo", state: "SP", phone: "(11) 5511-9655", hours: "7h–18h", mapQuery: "Cemitério São Luís, SP" },

  // --- VILA ALPINA ---
  { id: 21, name: "Cemitério de Vila Alpina", address: "Av. Francisco Falconi, 437", city: "São Paulo", state: "SP", phone: "(11) 2273-2173", hours: "7h–18h", mapQuery: "Cemitério Vila Alpina, SP" },
  { id: 22, name: "Crematório Vila Alpina", address: "Av. Francisco Falconi, 437", city: "São Paulo", state: "SP", phone: "(11) 2273-2003", hours: "24h", mapQuery: "Crematório Vila Alpina, SP" },
  { id: 23, name: "Cemitério de Vila Zelina", address: "Av. Zelina, 800", city: "São Paulo", state: "SP", phone: "(11) 2273-2553", hours: "7h–18h", mapQuery: "Cemitério Vila Zelina, SP" },

  // --- OSASCO / CARAPICUÍBA / BARUERI ---
  { id: 24, name: "Cemitério Bela Vista", address: "R. Diogo Benitez, 400", city: "Osasco", state: "SP", phone: "(11) 3681-8178", hours: "8h–17h", mapQuery: "Cemitério Bela Vista, Osasco" },
  { id: 25, name: "Cemitério Santo Antônio", address: "R. Antônio Russo, 175", city: "Osasco", state: "SP", phone: "(11) 3683-5182", hours: "8h–17h", mapQuery: "Cemitério Santo Antônio, Osasco" },
  { id: 26, name: "Cemitério Parque dos Girassóis", address: "Al. Parque dos Girassóis, s/n", city: "Osasco", state: "SP", phone: "(11) 3658-0051", hours: "8h–18h", mapQuery: "Cemitério Parque dos Girassóis, Osasco" },
  { id: 27, name: "Cemitério Ariston", address: "R. Dumont, 1", city: "Carapicuíba", state: "SP", phone: "(11) 4184-3833", hours: "8h–17h", mapQuery: "Cemitério Municipal Carapicuíba" },
  { id: 28, name: "Cemitério Municipal de Barueri", address: "Praça da Saudade, s/n", city: "Barueri", state: "SP", phone: "(11) 4198-3009", hours: "8h–17h", mapQuery: "Cemitério Municipal Barueri" },

  // --- CAIEIRAS / FRANCO / MORATO / CAJAMAR ---
  { id: 29, name: "Cemitério da Saudade", address: "R. Padre Aquiles Silvestre, 80", city: "Caieiras", state: "SP", phone: "(11) 4442-2313", hours: "7h–17h", mapQuery: "Cemitério da Saudade, Caieiras" },
  { id: 30, name: "Cemitério da Paz (Morro Grande)", address: "Av. Padre José Kentenich, 121", city: "Caieiras", state: "SP", phone: "(11) 4445-5660", hours: "7h–17h", mapQuery: "Cemitério da Paz, Caieiras" },
  { id: 31, name: "Cemitério da Paixão", address: "Av. da Saudade, s/n", city: "Franco da Rocha", state: "SP", phone: "(11) 4800-7533", hours: "7h–17h", mapQuery: "Cemitério da Paixão, Franco da Rocha" },
  { id: 32, name: "Cemitério Valle das Colinas", address: "R. Pref. José Hernandez, 220", city: "Franco da Rocha", state: "SP", phone: "(11) 4443-4424", hours: "8h–17h", mapQuery: "Cemitério Valle das Colinas" },
  { id: 33, name: "Memorial Jardim das Cascatas", address: "Estr. Otávio Della Torre, 1676", city: "Francisco Morato", state: "SP", phone: "(11) 4488-8285", hours: "8h–17h", mapQuery: "Memorial Jardim das Cascatas" },
  { id: 34, name: "Cemitério Municipal de Cajamar", address: "R. Lázaro Dalcin, s/n", city: "Cajamar", state: "SP", phone: "(11) 4446-0153", hours: "8h–17h", mapQuery: "Cemitério Municipal Cajamar" },

  // --- MAIRIPORÃ ---
  { id: 35, name: "Cemitério Municipal de Mairiporã", address: "Av. Tabelião Passarela, s/n", city: "Mairiporã", state: "SP", phone: "(11) 4419-3221", hours: "8h–17h", mapQuery: "Cemitério Municipal Mairiporã" },
  { id: 36, name: "Memorial Parque da Cantareira", address: "Av. Siqueira Bueno, 30", city: "Mairiporã", state: "SP", phone: "(11) 4419-2000", hours: "24h", mapQuery: "Memorial Parque da Cantareira" },

  // --- INTERIOR ---
  { id: 37, name: "Cemitério São Miguel Arcanjo", address: "R. São Miguel Arcanjo, 105", city: "Santana de Parnaíba", state: "SP", phone: "(11) 4154-1317", hours: "8h–17h", mapQuery: "Cemitério Municipal Santana de Parnaíba" },
  { id: 38, name: "Cemitério Municipal de Pirapora", address: "R. José Bonifácio, s/n", city: "Pirapora do Bom Jesus", state: "SP", phone: "(11) 4131-1555", hours: "8h–17h", mapQuery: "Cemitério Municipal Pirapora" },
  { id: 39, name: "Cemitério Central de Cotia", address: "R. José Augusto Pedroso, s/n", city: "Cotia", state: "SP", phone: "(11) 4616-1601", hours: "8h–17h", mapQuery: "Cemitério Central Cotia" },
  { id: 40, name: "Cemitério Jardim das Flores", address: "Rod. Raposo Tavares, km 30", city: "Cotia", state: "SP", phone: "(11) 4616-0168", hours: "8h–18h", mapQuery: "Cemitério Jardim das Flores, Cotia" },
  { id: 41, name: "Cemitério N. Sra. do Montenegro", address: "Av. Dr. Nelson Vilaça, s/n", city: "Jundiaí", state: "SP", phone: "(11) 4581-8171", hours: "7h–18h", mapQuery: "Cemitério Montenegro, Jundiaí" },
  { id: 42, name: "Cemitério N. Sra. do Desterro", address: "Av. Henrique Andrés, 360", city: "Jundiaí", state: "SP", phone: "(11) 4521-6092", hours: "7h–18h", mapQuery: "Cemitério Desterro, Jundiaí" },
  { id: 43, name: "Cemitério Parque dos Ipês", address: "Av. Osmundo Pellegrini, 2265", city: "Jundiaí", state: "SP", phone: "(11) 4582-4111", hours: "8h–18h", mapQuery: "Cemitério Parque dos Ipês" },
  { id: 44, name: "Cemitério Municipal de Mairinque", address: "R. Saudade, s/n", city: "Mairinque", state: "SP", phone: "(11) 4718-2067", hours: "8h–17h", mapQuery: "Cemitério Municipal Mairinque" },
  { id: 45, name: "Cemitério da Paz", address: "R. 22 de Abril, 1", city: "São Roque", state: "SP", phone: "(11) 4712-4083", hours: "8h–17h", mapQuery: "Cemitério da Paz, São Roque" },
  { id: 46, name: "Horto da Paz", address: "R. Horto da Paz, 191", city: "Itapecerica da Serra", state: "SP", phone: "(11) 4666-5067", hours: "24h", mapQuery: "Cemitério Horto da Paz" },
  { id: 47, name: "Jardim da Ressurreição", address: "Av. Pref. Luiz Latorre, s/n", city: "Itatiba", state: "SP", phone: "(11) 4534-1234", hours: "8h–18h", mapQuery: "Cemitério Jardim da Ressurreição Itatiba" },

  // --- ABC PAULISTA ---
  { id: 48, name: "Cemitério Vila Pires", address: "R. Carijós, 45", city: "Santo André", state: "SP", phone: "(11) 4452-2521", hours: "8h–17h", mapQuery: "Cemitério Vila Pires, Santo André" },
  { id: 49, name: "Cemitério N. Sra. do Carmo (Curuçá)", address: "R. Curuçá, s/n", city: "Santo André", state: "SP", phone: "(11) 4479-0604", hours: "8h–17h", mapQuery: "Cemitério do Curuçá, Santo André" },
  { id: 50, name: "Cemitério Sagrado Coração de Jesus", address: "Praça Camilo Peduti, s/n", city: "Santo André", state: "SP", phone: "(11) 4461-1555", hours: "8h–17h", mapQuery: "Cemitério Camilópolis, Santo André" },
  { id: 51, name: "Cemitério Phoenix", address: "Av. Queirós Filho, 1750", city: "Santo André", state: "SP", phone: "(11) 4451-2400", hours: "24h", mapQuery: "Cemitério Phoenix, Santo André" },
  { id: 52, name: "Cemitério Vila Euclides", address: "R. Santa Filomena, 320", city: "São Bernardo do Campo", state: "SP", phone: "(11) 4125-6344", hours: "8h–17h", mapQuery: "Cemitério Vila Euclides, SBC" },
  { id: 53, name: "Cemitério dos Casa (Saudade)", address: "Estrada dos Alvarengas, 100", city: "São Bernardo do Campo", state: "SP", phone: "(11) 4357-1901", hours: "8h–17h", mapQuery: "Cemitério dos Casa, SBC" },
  { id: 54, name: "Cemitério Paulicéia", address: "R. Júlio de Mesquita, 107", city: "São Bernardo do Campo", state: "SP", phone: "(11) 4173-1025", hours: "8h–17h", mapQuery: "Cemitério Paulicéia, SBC" },
  { id: 55, name: "Cemitério Jardim da Colina", address: "R. Jardim da Colina, 100", city: "São Bernardo do Campo", state: "SP", phone: "(11) 4122-0000", hours: "24h", mapQuery: "Cemitério Jardim da Colina" },
  { id: 56, name: "Cemitério da Saudade", address: "R. Eng. Armando de Arruda Pereira, 430", city: "São Caetano do Sul", state: "SP", phone: "(11) 4232-1566", hours: "8h–17h", mapQuery: "Cemitério da Saudade, São Caetano" }
];

// ─── PHRASES ───────────────────────────────────────────────────
const PHRASE_CATS = ["Religiosas", "Para a Família", "Amigos", "Profissional", "Poéticas"];

const PHRASES = [
  { id: 1, cat: "Religiosas", text: "O Senhor é o meu pastor, e nada me faltará. Que Deus console seu coração neste momento de dor." },
  { id: 2, cat: "Religiosas", text: "Partiu para os braços do Pai. Com nossas orações e carinho eternos." },
  { id: 3, cat: "Religiosas", text: "Que Deus, em sua infinita misericórdia, acolha esta alma e conforte os corações que ficaram." },
  { id: 4, cat: "Religiosas", text: "Foi para o lugar onde não há mais dor. Que a paz de Deus esteja com sua família." },
  { id: 5, cat: "Religiosas", text: "Descanse nos braços do Senhor. Nossa fé nos dá a certeza do reencontro." },
  { id: 6, cat: "Religiosas", text: "A vida é uma passagem. A eternidade é o destino. Com amor e fé." },
  { id: 7, cat: "Religiosas", text: "Que Nossa Senhora interceda por esta alma e traga conforto à família enlutada." },

  { id: 8, cat: "Para a Família", text: "Da família, com muito amor e eterna saudade." },
  { id: 9, cat: "Para a Família", text: "Seu amor e carinho viverão para sempre em nossos corações. Com saudade eterna." },
  { id: 10, cat: "Para a Família", text: "Papai/Mamãe, você partiu, mas jamais será esquecido(a). Com todo o nosso amor." },
  { id: 11, cat: "Para a Família", text: "Uma vida dedicada à família. Uma lembrança que jamais se apagará. Com saudade, seus filhos." },
  { id: 12, cat: "Para a Família", text: "Avô/Avó querido(a), seu legado de amor e sabedoria viverá em nós para sempre." },
  { id: 13, cat: "Para a Família", text: "Com profunda saudade e amor eterno, de seus filhos e netos." },
  { id: 14, cat: "Para a Família", text: "Você nos ensinou o que é o amor. Essa lição ficará para sempre. Da sua família." },

  { id: 15, cat: "Amigos", text: "Um amigo que partiu, mas cuja amizade ficará eternamente em nossos corações." },
  { id: 16, cat: "Amigos", text: "Obrigado por cada momento compartilhado. Sua partida deixa uma saudade sem tamanho." },
  { id: 17, cat: "Amigos", text: "Amigos para sempre, em vida e em memória. Com carinho e saudade." },
  { id: 18, cat: "Amigos", text: "Que descanse em paz. Você marcou a vida de todos que te conheceram." },
  { id: 19, cat: "Amigos", text: "Da turma do coração, com amizade eterna e muita saudade." },
  { id: 20, cat: "Amigos", text: "Você foi muito mais que um amigo. Foi parte da nossa família. Saudades." },

  { id: 21, cat: "Profissional", text: "Em nome de todos os colegas, expressamos nossa mais profunda solidariedade e saudade." },
  { id: 22, cat: "Profissional", text: "Um profissional exemplar, que deixou sua marca em tudo que fez. Sentiremos sua falta." },
  { id: 23, cat: "Profissional", text: "Seus colegas de trabalho, com respeito e admiração, prestam esta última homenagem." },
  { id: 24, cat: "Profissional", text: "A empresa e seus colaboradores lamentam profundamente a perda e se solidarizam com a família." },
  { id: 25, cat: "Profissional", text: "Seu talento e dedicação foram inspiração para todos nós. Com saudade e gratidão." },

  { id: 26, cat: "Poéticas", text: "\"Não chores por minha partida, sorria por termos nos encontrado.\" Com amor eterno." },
  { id: 27, cat: "Poéticas", text: "As flores murcham, mas a saudade floresce para sempre em nossos corações." },
  { id: 28, cat: "Poéticas", text: "Quem deixa amor jamais parte de verdade. Vive em cada lembrança, em cada sorriso." },
  { id: 29, cat: "Poéticas", text: "A morte separa corpos, mas nunca almas. Você viverá em nós enquanto existirmos." },
  { id: 30, cat: "Poéticas", text: "Uma estrela a mais brilha no céu esta noite. Com amor e saudade infinita." },
  { id: 31, cat: "Poéticas", text: "Não é adeus, é até logo. A saudade é o preço do amor que sentimos." },
  { id: 32, cat: "Poéticas", text: "Que a leveza das flores represente a paz que você tanto merecia. Com carinho eterno." },
];

const WHATSAPP = "551142126660";
const PHONE = "(11) 4212-6660";

function fmtPrice(n) { return "R$ " + n.toFixed(2).replace(".", ","); }
function fmtDate(d) { if (!d) return ""; const [y,m,day] = d.split("-"); return `${day}/${m}/${y}`; }
