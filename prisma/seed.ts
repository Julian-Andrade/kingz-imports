const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  try {
    const iphoneCategory = await prisma.category.create({
      data: {
        name: 'Iphones',
        slug: 'iphones',
        imageUrl: 'https://i.ibb.co/Rj5991z/iphones.jpg',
      },
    })

    const iphones = [
      {
        name: 'iPhone 15 Pro (128gb) Titânio Preto',
        slug: 'iphone-15-pro-128gb-titanio-preto',
        description:
          'iPhone 15 Pro. Forjado em titânio e com o incomparável chip A17 Pro, botão de Ação configurável e o sistema de câmera mais poderoso em um iPhone.',
        imageUrls: [
          'https://i.ibb.co/q1QBtWN/iphone-titanio-preto-01.jpg',
          'https://i.ibb.co/nLtZ682/iphone-titanio-preto-02.jpg',
          'https://i.ibb.co/d5qgBqf/iphone-titanio-preto-03.jpg',
          'https://i.ibb.co/7RY0z94/iphone-titanio-preto-04.jpg',
        ],
        basePrice: 9299,
        categoryId: iphoneCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: 'iPhone 15 Pro (128gb) Titânio Branco',
        slug: 'iphone-15-pro-128gb-titanio-branco',
        description:
          'iPhone 15 Pro. Forjado em titânio e com o incomparável chip A17 Pro, botão de Ação configurável e o sistema de câmera mais poderoso em um iPhone.',
        imageUrls: [
          'https://i.ibb.co/NCnRT9q/iphone-titanio-branco-01.jpg',
          'https://i.ibb.co/gTfMxGK/iphone-titanio-branco-02.jpg',
          'https://i.ibb.co/jhK5sBJ/iphone-titanio-branco-03.jpg',
          'https://i.ibb.co/TmRQwm9/iphone-titanio-branco-04.jpg',
        ],
        basePrice: 9299,
        categoryId: iphoneCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: 'iPhone 15 Pro (128gb) Titânio Natural',
        slug: 'iphone-15-pro-128gb-titanio-natural',
        description:
          'iPhone 15 Pro. Forjado em titânio e com o incomparável chip A17 Pro, botão de Ação configurável e o sistema de câmera mais poderoso em um iPhone.',
        imageUrls: [
          'https://i.ibb.co/F3V5VNN/iphone-titanio-natural-01.jpg',
          'https://i.ibb.co/fqt89ms/iphone-titanio-natural-02.jpg',
          'https://i.ibb.co/CJQsRQh/iphone-titanio-natural-03.jpg',
          'https://i.ibb.co/9p6pKLm/iphone-titanio-natural-04.jpg',
        ],
        basePrice: 9299,
        categoryId: iphoneCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: 'iPhone 15 Pro (128gb) Titânio Azul',
        slug: 'iphone-15-pro-128gb-titanio-azul',
        description:
          'iPhone 15 Pro. Forjado em titânio e com o incomparável chip A17 Pro, botão de Ação configurável e o sistema de câmera mais poderoso em um iPhone.',
        imageUrls: [
          'https://i.ibb.co/3f4k5X4/iphone-titanio-azul-01.jpg',
          'https://i.ibb.co/pjsBzmD/iphone-titanio-azul-02.jpg',
          'https://i.ibb.co/qpM2DBm/iphone-titanio-azul-03.jpg',
          'https://i.ibb.co/S6WBjyQ/iphone-titanio-azul-04.jpg',
        ],
        basePrice: 9299,
        categoryId: iphoneCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: 'iPhone 15 Pro Max (256gb) Titânio Preto',
        slug: 'iphone-15-pro-max-256gb-titanio-preto',
        description:
          'iPhone 15 Pro. Forjado em titânio e com o incomparável chip A17 Pro, botão de Ação configurável e o sistema de câmera mais poderoso em um iPhone.',
        imageUrls: [
          'https://i.ibb.co/q1QBtWN/iphone-titanio-preto-01.jpg',
          'https://i.ibb.co/nLtZ682/iphone-titanio-preto-02.jpg',
          'https://i.ibb.co/d5qgBqf/iphone-titanio-preto-03.jpg',
          'https://i.ibb.co/7RY0z94/iphone-titanio-preto-04.jpg',
        ],
        basePrice: 10999,
        categoryId: iphoneCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: 'iPhone 15 Pro Max (256gb) Titânio Branco',
        slug: 'iphone-15-pro-max-256gb-titanio-branco',
        description:
          'iPhone 15 Pro. Forjado em titânio e com o incomparável chip A17 Pro, botão de Ação configurável e o sistema de câmera mais poderoso em um iPhone.',
        imageUrls: [
          'https://i.ibb.co/NCnRT9q/iphone-titanio-branco-01.jpg',
          'https://i.ibb.co/gTfMxGK/iphone-titanio-branco-02.jpg',
          'https://i.ibb.co/jhK5sBJ/iphone-titanio-branco-03.jpg',
          'https://i.ibb.co/TmRQwm9/iphone-titanio-branco-04.jpg',
        ],
        basePrice: 10999,
        categoryId: iphoneCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: 'iPhone 15 Pro Max (256gb) Titânio Natural',
        slug: 'iphone-15-pro-max-256gb-titanio-natural',
        description:
          'iPhone 15 Pro. Forjado em titânio e com o incomparável chip A17 Pro, botão de Ação configurável e o sistema de câmera mais poderoso em um iPhone.',
        imageUrls: [
          'https://i.ibb.co/F3V5VNN/iphone-titanio-natural-01.jpg',
          'https://i.ibb.co/fqt89ms/iphone-titanio-natural-02.jpg',
          'https://i.ibb.co/CJQsRQh/iphone-titanio-natural-03.jpg',
          'https://i.ibb.co/9p6pKLm/iphone-titanio-natural-04.jpg',
        ],
        basePrice: 10999,
        categoryId: iphoneCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: 'iPhone 15 Pro Max (256gb) Titânio Azul',
        slug: 'iphone-15-pro-max-256gb-titanio-azul',
        description:
          'iPhone 15 Pro. Forjado em titânio e com o incomparável chip A17 Pro, botão de Ação configurável e o sistema de câmera mais poderoso em um iPhone.',
        imageUrls: [
          'https://i.ibb.co/3f4k5X4/iphone-titanio-azul-01.jpg',
          'https://i.ibb.co/pjsBzmD/iphone-titanio-azul-02.jpg',
          'https://i.ibb.co/qpM2DBm/iphone-titanio-azul-03.jpg',
          'https://i.ibb.co/S6WBjyQ/iphone-titanio-azul-04.jpg',
        ],
        basePrice: 10999,
        categoryId: iphoneCategory.id,
        discountPercentage: 10, // 10% discount
      },
    ]

    await prisma.product.createMany({
      data: iphones,
    })

    const watchCategory = await prisma.category.create({
      data: {
        name: 'Watchs',
        slug: 'watchs',
        imageUrl: 'https://i.ibb.co/Rz7jrjH/watch-ultra-2-capa.jpg',
      },
    })

    const watchs = [
      {
        name: 'Apple Watch Series 9 GPS + Celular (41mm) Caixa de Alumínio Pulseira Loop Esportiva Estelar',
        slug: 'apple-watch-series-9-gps-celular-41mm-loop-esportiva-estelar',
        description:
          'Brilha mais em tudo. O Apple Watch Series 9 conecta você a tudo, ajuda a levar uma vida ativa e cuida da sua saúde e segurança. Ele traz uma maneira mágica de usar o Apple Watch com apenas dois toques (1), uma tela ainda mais brilhante, Siri e Busca Precisa para iPhone (2).',
        imageUrls: [
          'https://i.ibb.co/4j9Hmyc/watch-series-9-41mm-loop-esportiva-estelar-01.jpg',
          'https://i.ibb.co/FBQCqt4/watch-series-9-41mm-loop-esportiva-estelar-02.jpg',
          'https://i.ibb.co/G7gV0tN/watch-series-9-41mm-loop-esportiva-estelar-03.jpg',
          'https://i.ibb.co/3Tg6m2T/watch-series-9-41mm-loop-esportiva-estelar-04.jpg',
        ],
        basePrice: 6299,
        categoryId: watchCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: 'Apple Watch Series 9 GPS (41mm) Caixa de Alumínio Pulseira Loop Esportiva Rosa',
        slug: 'apple-watch-series-9-gps-41mm-loop-esportiva-rosa',
        description:
          'Brilha mais em tudo. O Apple Watch Series 9 conecta você a tudo, ajuda a levar uma vida ativa e cuida da sua saúde e segurança. Ele traz uma maneira mágica de usar o Apple Watch com apenas dois toques (1), uma tela ainda mais brilhante, Siri e Busca Precisa para iPhone (2).',
        imageUrls: [
          'https://i.ibb.co/hF8YTZR/watch-series-9-41mm-loop-esportiva-rosa-01.jpg',
          'https://i.ibb.co/yXBvsJq/watch-series-9-41mm-loop-esportiva-rosa-02.jpg',
          'https://i.ibb.co/DptsqXW/watch-series-9-41mm-loop-esportiva-rosa-03.jpg',
          'https://i.ibb.co/SnPHfnp/watch-series-9-41mm-loop-esportiva-rosa-04.jpg',
        ],
        basePrice: 4999,
        categoryId: watchCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: 'Apple Watch Series 9 GPS + Celular (45mm) Caixa de Alumínio Pulseira Esportiva Meia Noite',
        slug: 'apple-watch-series-9-gps-celular-45mm-esportiva-meia-noite',
        description:
          'Brilha mais em tudo. O Apple Watch Series 9 conecta você a tudo, ajuda a levar uma vida ativa e cuida da sua saúde e segurança. Ele traz uma maneira mágica de usar o Apple Watch com apenas dois toques (1), uma tela ainda mais brilhante, Siri e Busca Precisa para iPhone (2).',
        imageUrls: [
          'https://i.ibb.co/dJ26mXV/watch-series-9-45mm-loop-esportiva-meia-noite-01.jpg',
          'https://i.ibb.co/bBkrg7g/watch-series-9-45mm-loop-esportiva-meia-noite-02.jpg',
          'https://i.ibb.co/nnM7yy0/watch-series-9-45mm-loop-esportiva-meia-noite-03.jpg',
          'https://i.ibb.co/F8JfHrg/watch-series-9-45mm-loop-esportiva-meia-noite-04.jpg',
        ],
        basePrice: 6699,
        categoryId: watchCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: 'Apple Watch SE GPS (44mm) Caixa de Alumínio Pulseira Esportiva Meia Noite',
        slug: 'apple-watch-se-gps-44mm-esportiva-meia-noite',
        description:
          'Para amar cada segundo. Acessível. Versátil. Para amar cada segundo.  É muito Apple Watch por menos, Recursos essenciais para ajudar você a levar uma vida mais conectada, ativa, saudável e em segurança.',
        imageUrls: [
          'https://i.ibb.co/kJJKFrT/watch-series-se-44mm-esportiva-meia-noite-01.jpg',
          'https://i.ibb.co/MkqR4FX/watch-series-se-44mm-esportiva-meia-noite-02.jpg',
          'https://i.ibb.co/mBjFhKJ/watch-series-se-44mm-esportiva-meia-noite-03.jpg',
          'https://i.ibb.co/RpzN2s6/watch-series-se-44mm-esportiva-meia-noite-04.jpg',
        ],
        basePrice: 3699,
        categoryId: watchCategory.id,
        discountPercentage: 15, // 15% discount
      },
      {
        name: 'Apple Watch Ultra 2 GPS + Celular (49mm) Caixa de Titânio Pulseira Loop Alpina Oliva G',
        slug: 'apple-watch-ultra-2-gps-celular-49mm-loop-alpina',
        description:
          'Sua próxima aventura. O Apple Watch mais forte e versátil. O Apple Watch mais forte e versátil. Criado para aventuras ao ar livre e treinos pesados, ele tem caixa de titânio leve, bateria com duração extralonga (1) e a tela mais brilhante que já fizemos.',
        imageUrls: [
          'https://i.ibb.co/CwGSZ5W/watch-ultra-2-49mm-loop-alpina-oliva-01.jpg',
          'https://i.ibb.co/z6CD7fx/watch-ultra-2-49mm-loop-alpina-oliva-02.jpg',
          'https://i.ibb.co/6ZVdTjn/watch-ultra-2-49mm-loop-alpina-oliva-03.jpg',
          'https://i.ibb.co/Z8y8qVj/watch-ultra-2-49mm-loop-alpina-oliva-04.jpg',
        ],
        basePrice: 9699,
        categoryId: watchCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: 'Apple Watch Series 9 GPS (41mm) Caixa de Alumínio (PRODUCT)Red Pulseira Esportiva (PRODUCT)Red',
        slug: 'apple-watch-series-9-gps-41mm-esportiva-product-red',
        description:
          'Brilha mais em tudo. O Apple Watch Series 9 conecta você a tudo, ajuda a levar uma vida ativa e cuida da sua saúde e segurança. Ele traz uma maneira mágica de usar o Apple Watch com apenas dois toques (1), uma tela ainda mais brilhante, Siri e Busca Precisa para iPhone (2).',
        imageUrls: [
          'https://i.ibb.co/C2VJ2HK/watch-series-9-41mm-esportiva-product-red-01.jpg',
          'https://i.ibb.co/6DkByWf/watch-series-9-41mm-esportiva-product-red-02.jpg',
          'https://i.ibb.co/HznS3K3/watch-series-9-41mm-esportiva-product-red-03.jpg',
          'https://i.ibb.co/mFsFjSP/watch-series-9-41mm-esportiva-product-red-04.jpg',
        ],
        basePrice: 4999,
        categoryId: watchCategory.id,
        discountPercentage: 15, // 15% discount
      },
    ]

    await prisma.product.createMany({
      data: watchs,
    })

    const ipadsCategory = await prisma.category.create({
      data: {
        name: 'Ipads',
        slug: 'ipads',
        imageUrl:
          'https://i.ibb.co/MPzrRsX/apple-ipad-10-ger-a14-10-9-wifi-celular-256gb-silver-03.jpg',
      },
    })

    const ipads = [
      {
        name: 'Apple Ipad (10ª Geração) A14 Bionic (10.9", Wi-Fi + Celular, 256gb) Prateado',
        slug: 'apple-ipad-10-ger-109-wifi-celular-256gb-silver',
        description:
          'O novo iPad foi resenhado para ser mais versátil que nunca. Com tela Liquid Retina de 10,9 polegadas de ponta a ponta* e disponível em quatro cores, o iPad é ideal para realizar tarefas, soltar a criatividade e manter a conexão com quem você ama.',
        imageUrls: [
          'https://i.ibb.co/9cM4tZQ/apple-ipad-10-ger-a14-10-9-wifi-celular-256gb-silver-01.jpg',
          'https://i.ibb.co/bgPZtV8/apple-ipad-10-ger-a14-10-9-wifi-celular-256gb-silver-02.jpg',
          'https://i.ibb.co/MPzrRsX/apple-ipad-10-ger-a14-10-9-wifi-celular-256gb-silver-03.jpg',
          'https://i.ibb.co/jRDqccK/apple-ipad-10-ger-a14-10-9-wifi-celular-256gb-silver-04.jpg',
        ],
        basePrice: 8499,
        categoryId: ipadsCategory.id,
        discountPercentage: 15, // 15% discount
      },
      {
        name: 'Apple Ipad (6° Geração) A15 Bionic (8.3", Wi-Fi + Celular, 64gb) Cinza Espacial',
        slug: 'apple-ipad-6-ger-83-wifi-celular-64gb-spacial-silver',
        description:
          'Novo iPad mini. Design sem bordas e tela Liquid Retina de 8,3 polegadas*, chip A15 Bionic poderoso com Neural Engine, câmera frontal ultra-angular de 12 MP com Palco Central e entrada USB-C. Faça anotações, marque documentos ou registre suas maiores ideias com o Apple Pencil (2a geração), que se fixa magneticamente e recarrega sem fio**',
        imageUrls: [
          'https://i.ibb.co/gSrJDXf/apple-ipad-6-ger-a15-8-3-wifi-celular-64gb-spacial-silver-01.jpg',
          'https://i.ibb.co/0CdqG9G/apple-ipad-6-ger-a15-8-3-wifi-celular-64gb-spacial-silver-02.jpg',
          'https://i.ibb.co/PCm1LqH/apple-ipad-6-ger-a15-8-3-wifi-celular-64gb-spacial-silver-03.jpg',
          'https://i.ibb.co/NNrrKp7/apple-ipad-6-ger-a15-8-3-wifi-celular-64gb-spacial-silver-04.jpg',
        ],
        basePrice: 8099,
        categoryId: ipadsCategory.id,
        discountPercentage: 15, // 15% discount
      },
      {
        name: 'Apple Ipad Pro (6° Geração) Chip M2 (12.9", Wi-Fi, 128gb) Cinza Espacial',
        slug: 'apple-ipad-pro-m2-129-wifi-128gb-spacial-silver',
        description:
          'iPad Pro. Com desempenho impressionante, conexões sem fio ultrarrápidas, Apple Pencil com uma outra dimensão de funcionalidades e os novos recursos poderosos de produtividade e colaboração do iPadOS 16. O iPad Pro é o máximo em iPad.',
        imageUrls: [
          'https://i.ibb.co/g9CW7Ww/apple-ipad-pro-6-ger-m2-12-9-wifi-128gb-spacial-silver-01.jpg',
          'https://i.ibb.co/vsgwbCC/apple-ipad-pro-6-ger-m2-12-9-wifi-128gb-spacial-silver-02.jpg',
          'https://i.ibb.co/syVS4d3/apple-ipad-pro-6-ger-m2-12-9-wifi-128gb-spacial-silver-03.jpg',
          'https://i.ibb.co/TLqzpth/apple-ipad-pro-6-ger-m2-12-9-wifi-128gb-spacial-silver-04.jpg',
        ],
        basePrice: 12400,
        categoryId: ipadsCategory.id,
        discountPercentage: 15, // 15% discount
      },
      {
        name: 'Apple Ipad Pro (4° Geração) Chip M2 (11", Wi-Fi, 512gb) Cinza Espacial',
        slug: 'apple-ipad-pro-m2-11-wifi-512gb-spacial-silver',
        description:
          'iPad Pro. Com desempenho impressionante, conexões sem fio ultrarrápidas, Apple Pencil com uma outra dimensão de funcionalidades e os novos recursos poderosos de produtividade e colaboração do iPadOS 16. O iPad Pro é o máximo em iPad.',
        imageUrls: [
          'https://i.ibb.co/yFyv9H2/apple-ipad-pro-4-ger-m2-11-wifi-512gb-spacial-silver-01.jpg',
          'https://i.ibb.co/gzBr7FP/apple-ipad-pro-4-ger-m2-11-wifi-512gb-spacial-silver-02.jpg',
          'https://i.ibb.co/VpJ09YG/apple-ipad-pro-4-ger-m2-11-wifi-512gb-spacial-silver-03.jpg',
          'https://i.ibb.co/4tJH9Bq/apple-ipad-pro-4-ger-m2-11-wifi-512gb-spacial-silver-04.jpg',
        ],
        basePrice: 13399,
        categoryId: ipadsCategory.id,
        discountPercentage: 20, // 20% discount
      },
      {
        name: 'Apple Ipad Air (5° Geração) Chip M1 (10.9", Wi-Fi + Celular, 64gb) Rosa',
        slug: 'apple-ipad-air-m1-109-wifi-celular-64gb-rosa',
        description:
          'iPad Air. Tela Liquid Retina envolvente de 10,9 polegadas1. O avançado chip M1 de alto desempenho que transforma o iPad Air uma potência em criatividade e jogos, Touch ID, câmeras avançadas, 5G2 e Wi-Fi 6 ultrarrápidos, USB-C e compatível com Magic Keyboard e Apple Pencil (2ª geração).',
        imageUrls: [
          'https://i.ibb.co/hVfj8hF/apple-ipad-air-5-ger-m1-109-wifi-celular-64gb-rosa-01.jpg',
          'https://i.ibb.co/y6zcfR0/apple-ipad-air-5-ger-m1-109-wifi-celular-64gb-rosa-02.jpg',
          'https://i.ibb.co/DVqMqjD/apple-ipad-air-5-ger-m1-109-wifi-celular-64gb-rosa-03.jpg',
          'https://i.ibb.co/n1L78yN/apple-ipad-air-5-ger-m1-109-wifi-celular-64gb-rosa-04.jpg',
        ],
        basePrice: 11200,
        categoryId: ipadsCategory.id,
        discountPercentage: 15, // 15% discount
      },
    ]

    await prisma.product.createMany({
      data: ipads,
    })

    const macCategory = await prisma.category.create({
      data: {
        name: 'Macs',
        slug: 'macs',
        imageUrl:
          'https://i.ibb.co/Y2zkyX1/apple-macbook-pro-14-m3-8gb-512gb-prateado-01.jpg',
      },
    })

    const macs = [
      {
        name: 'Apple Macbook Air 15" Chip M2 (8gb RAM, 512gb SSD) Cinza Espacial',
        slug: 'apple-macbook-air-15-m2-8gb-512gb-cinza-espacial',
        description:
          'O MacBook Air de 15 polegadas é incrivelmente fino, mas tem uma tela Liquid Retina espetacular. Com a potência do chip M2 e até 18 horas de bateria* , ele proporciona desempenho impressionante em um design ultraportátil.',
        imageUrls: [
          'https://i.ibb.co/hchrnn1/apple-macbook-air-15-m2-8gb-512gb-cinza-espacial-01.jpg',
          'https://i.ibb.co/d5tFDpT/apple-macbook-air-15-m2-8gb-512gb-cinza-espacial-02.jpg',
          'https://i.ibb.co/20JnSc9/apple-macbook-air-15-m2-8gb-512gb-cinza-espacial-03.jpg',
          'https://i.ibb.co/fM4j67S/apple-macbook-air-15-m2-8gb-512gb-cinza-espacial-04.jpg',
        ],
        basePrice: 16999,
        categoryId: macCategory.id,
        discountPercentage: 15, // 15% discount
      },
      {
        name: 'Apple Macbook Pro 14" Chip M3 (8gb RAM, 512gb SSD) Prateado',
        slug: 'apple-macbook-pro-14-m3-8gb-512gb-prateado',
        description:
          'O MacBook Pro chega a um outro patamar com os chips M3, M3 Pro e M3 Max. Produzidos com a tecnologia de três nanômetros e uma nova arquitetura de GPU, são os chips mais avançados em um computador pessoal até hoje. E cada um traz mais desempenho e capacidade para profissionais.',
        imageUrls: [
          'https://i.ibb.co/Y2zkyX1/apple-macbook-pro-14-m3-8gb-512gb-prateado-01.jpg',
          'https://i.ibb.co/w6dmzxB/apple-macbook-pro-14-m3-8gb-512gb-prateado-02.jpg',
          'https://i.ibb.co/dk9HQxS/apple-macbook-pro-14-m3-8gb-512gb-prateado-03.jpg',
          'https://i.ibb.co/ZKC0wxy/apple-macbook-pro-14-m3-8gb-512gb-prateado-04.jpg',
        ],
        basePrice: 18499,
        categoryId: macCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: 'Apple Macbook Pro 14" Chip M3 (18gb RAM, 512gb SSD) Preto Espacial',
        slug: 'apple-macbook-pro-14-m3-18gb-512gb-preto-espacial',
        description:
          'O MacBook Pro chega a um outro patamar com os chips M3, M3 Pro e M3 Max. Produzidos com a tecnologia de três nanômetros e uma nova arquitetura de GPU, são os chips mais avançados em um computador pessoal até hoje. E cada um traz mais desempenho e capacidade para profissionais.',
        imageUrls: [
          'https://i.ibb.co/C8J1m6n/apple-macbook-pro-14-m3-18gb-512gb-preto-espacial-01.jpg',
          'https://i.ibb.co/f4HvFvY/apple-macbook-pro-14-m3-18gb-512gb-preto-espacial-02.jpg',
          'https://i.ibb.co/NVr8nTj/apple-macbook-pro-14-m3-18gb-512gb-preto-espacial-03.jpg',
          'https://i.ibb.co/rMmm439/apple-macbook-pro-14-m3-18gb-512gb-preto-espacial-04.jpg',
        ],
        basePrice: 22998,
        categoryId: macCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: 'Apple iMac 24" Tela Retina 4.5k Chip M3 (8gb RAM, 256gb SSD) Azul',
        slug: 'apple-imac-24-m3-8gb-256gb-azul',
        description:
          'Um computador tudo em um que é aquilo tudo, agora com os superpoderes do chip M3. A tela de 24 polegadas◊Consultar avisos legais é um espetáculo e tem espaço para o que você quiser. E o design icônico deixa qualquer ambiente mais vivo e colorido.',
        imageUrls: [
          'https://i.ibb.co/c3R84Gj/apple-imac-24-m3-8gb-256gb-azul-01.jpg',
          'https://i.ibb.co/DbCr7qm/apple-imac-24-m3-8gb-256gb-azul-02.jpg',
          'https://i.ibb.co/237t9gk/apple-imac-24-m3-8gb-256gb-azul-03.jpg',
          'https://i.ibb.co/7r0msr6/apple-imac-24-m3-8gb-256gb-azul-04.jpg',
        ],
        basePrice: 22998,
        categoryId: macCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: 'Apple iMac 24" Tela Retina 4.5k Chip M3 (8gb RAM, 256gb SSD) Prateado',
        slug: 'apple-imac-24-m3-8gb-256gb-prateado',
        description:
          'Um computador tudo em um que é aquilo tudo, agora com os superpoderes do chip M3. A tela de 24 polegadas◊Consultar avisos legais é um espetáculo e tem espaço para o que você quiser. E o design icônico deixa qualquer ambiente mais vivo e colorido.',
        imageUrls: [
          'https://i.ibb.co/42pYfsS/apple-imac-24-m3-8gb-256gb-prateado-01.jpg',
          'https://i.ibb.co/KWzShtw/apple-imac-24-m3-8gb-256gb-prateado-02.jpg',
          'https://i.ibb.co/tDgN1B4/apple-imac-24-m3-8gb-256gb-prateado-03.jpg',
          'https://i.ibb.co/MNZVvHq/apple-imac-24-m3-8gb-256gb-prateado-04.jpg',
        ],
        basePrice: 18498,
        categoryId: macCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: 'Apple Mac Studio Chip M2 Ultra (64gb RAM, 24 Núcleos CPU, 1TB SSD) Prateado',
        slug: 'apple-mac-studio-m2-64gb-24n-1tb-prateado',
        description:
          'Compacto no tamanho, imenso na conectividade. Com a potência do M2 Ultra. Graças à eficiência do chip da Apple, o Mac Studio permite que o M2 Ultra, al&eacute;m da sua criatividade, voe alto ocupando o menor espa&ccedil;o poss&iacute;vel na sua mesa. Pensado para se encaixar perfeitamente embaixo da maioria dos monitores, ele entrega para voc&ecirc; conectividade e desempenho surpreendentes. O Mac Studio &eacute; um desktop poderoso como nenhum outro.',
        imageUrls: [
          'https://i.ibb.co/SndwPg1/apple-mac-studio-m2-64gb-24n-1tb-prateado-01.jpg',
          'https://i.ibb.co/8xG5x5W/apple-mac-studio-m2-64gb-24n-1tb-prateado-02.jpg',
          'https://i.ibb.co/Hdn01xV/apple-mac-studio-m2-64gb-24n-1tb-prateado-03.jpg',
          'https://i.ibb.co/Stdqg1C/apple-mac-studio-m2-64gb-24n-1tb-prateado-04.jpg',
        ],
        basePrice: 45999,
        categoryId: macCategory.id,
        discountPercentage: 15, // 15% discount
      },
    ]

    await prisma.product.createMany({
      data: macs,
    })

    const airpodsCategory = await prisma.category.create({
      data: {
        name: 'Air Pods',
        slug: 'airpods',
        imageUrl: 'https://i.ibb.co/ftqGZqV/apple-airpods-max-azul-ceu-01.webp',
      },
    })

    const airpods = [
      {
        name: 'Apple AirPods Pro (2ª geração) Com Estojo de Recarga MagSafe USB-C',
        slug: 'apple-airpods-pro-2ger-estojo-magsafe-usbc',
        description:
          'O chip H2 moderno possibilita cancelamento de ruído do mais inteligente e som tridimensional. A Equalização Adaptativa ajusta a música para os seus ouvidos em tempo real para gerar agudos cristalinos e graves profundos com clareza incrível.',
        imageUrls: [
          'https://i.ibb.co/5sbKV0m/apple-airpods-pro-2ger-estojo-magsafe-usbc-01.jpg',
          'https://i.ibb.co/rtrjbvt/apple-airpods-pro-2ger-estojo-magsafe-usbc-02.jpg',
          'https://i.ibb.co/Hpw9nPb/apple-airpods-pro-2ger-estojo-magsafe-usbc-03.jpg',
        ],
        basePrice: 2599,
        categoryId: airpodsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: 'Apple AirPods (3ª geração) Com Estojo de Recarga MagSafe',
        slug: 'apple-airpods-3ger-estojo-magsafe',
        description:
          'O chip H2 moderno possibilita cancelamento de ruído do mais inteligente e som tridimensional. A Equalização Adaptativa ajusta a música para os seus ouvidos em tempo real para gerar agudos cristalinos e graves profundos com clareza incrível.',
        imageUrls: [
          'https://i.ibb.co/9bsgBc3/apple-airpods-3ger-estojo-magsafe-01.jpg',
          'https://i.ibb.co/DkVjzS6/apple-airpods-3ger-estojo-magsafe-02.jpg',
          'https://i.ibb.co/F6x28sH/apple-airpods-3ger-estojo-magsafe-03.jpg',
          'https://i.ibb.co/DDJ76Lc/apple-airpods-3ger-estojo-magsafe-04.jpg',
        ],
        basePrice: 2030,
        categoryId: airpodsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: 'Apple EarPods Conector Lightning Branco',
        slug: 'apple-earpods-lightning-branco',
        description:
          'Você está procurando por um fone de ouvido confortável e de alta qualidade? Os Fones de Ouvido EarPods com Conector Lightning da Apple são a opção ideal para você! Com um design único e ajuste perfeito, eles são ideais para quem busca conforto e excelente qualidade de áudio.',
        imageUrls: [
          'https://i.ibb.co/z7CVpZ9/apple-earpods-lightning-branco-01.jpg',
          'https://i.ibb.co/kyPrj2x/apple-earpods-lightning-branco-02.jpg',
          'https://i.ibb.co/6r1b8b6/apple-earpods-lightning-branco-03.jpg',
          'https://i.ibb.co/vQ1TBqH/apple-earpods-lightning-branco-04.jpg',
        ],
        basePrice: 2030,
        categoryId: airpodsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: 'Apple AirPods Max Azul Céu',
        slug: 'apple-airpods-max-azul-ceu',
        description:
          'Apresentamos os AirPods Max. A combinação perfeita entre som de altíssima fidelidade e a magia intuitiva dos AirPods. Você nunca ouviu nada assim. Reimaginamos completamente os fones de ouvido circum-auriculares. Das almofadas ao arco, os AirPods Max foram pensados para proporcionar um ajuste perfeito, criando uma vedação acústica impecável que leva em consideração diferentes formatos de cabeça. Você vai se sentir dentro do som.',
        imageUrls: [
          'https://i.ibb.co/ftqGZqV/apple-airpods-max-azul-ceu-01.webp',
          'https://i.ibb.co/YZDnY3t/apple-airpods-max-azul-ceu-02.webp',
          'https://i.ibb.co/4ZffKp7/apple-airpods-max-azul-ceu-03.webp',
        ],
        basePrice: 2030,
        categoryId: airpodsCategory.id,
        discountPercentage: 10, // 10% discount
      },
    ]

    await prisma.product.createMany({
      data: airpods,
    })

    const accessoriesCategory = await prisma.category.create({
      data: {
        name: 'Acessórios',
        slug: 'acessorios',
        imageUrl: 'https://i.ibb.co/xShQSgd/accessories-capa.jpg',
      },
    })

    const accessories = [
      {
        name: 'Apple Carregador USB-C 20W para iPad e Iphone Branco',
        slug: 'apple-carregador-usbc-20w-branco',
        description:
          'O carregador USB-C de 20W Apple é rápido e eficiente, ideal para usar em casa, no trabalho ou onde você estiver. Ele é compatível com qualquer aparelho com porta USB-C, mas recomendamos o uso com o iPad Pro de 11 polegadas ou iPad Pro de 12,9 polegadas (3ª geração) para ter o melhor rendimento. Você também pode conectá-lo ao iPhone 8 ou posterior para aproveitar o recurso de carregamento rápido.',
        imageUrls: [
          'https://i.ibb.co/k2P28NC/apple-carregador-usbc-20w-branco-01.jpg',
          'https://i.ibb.co/5v82VFz/apple-carregador-usbc-20w-branco-02.jpg',
          'https://i.ibb.co/t3jTx2Q/apple-carregador-usbc-20w-branco-03.jpg',
        ],
        basePrice: 219,
        categoryId: accessoriesCategory.id,
        discountPercentage: 5, // 5% discount
      },
      {
        name: 'Apple Cabo USB-C Lightning Branco',
        slug: 'apple-cabo-usbc-lightning-branco',
        description:
          'Você busca um cabo de alta qualidade e durabilidade para carregar e sincronizar seus dispositivos Apple? O Cabo USB-C para Lightning Branco da Apple é a solução perfeita para você!.',
        imageUrls: [
          'https://i.ibb.co/JzfxSPC/apple-cabo-usbc-lightning-branco-01.jpg',
          'https://i.ibb.co/7K0HThL/apple-cabo-usbc-lightning-branco-02.jpg',
          'https://i.ibb.co/B63Lny3/apple-cabo-usbc-lightning-branco-03.jpg',
        ],
        basePrice: 249,
        categoryId: accessoriesCategory.id,
        discountPercentage: 5, // 5% discount
      },
      {
        name: 'Apple Carregador MagSafe',
        slug: 'apple-carregador-magsafe',
        description:
          'Procurando por um carregador de alta performance para o seu iPhone? O Carregador MagSafe Apple oferece uma nova experiência de recarga sem fio mais rápida e conveniente. O design inovador permite uma fixação magnética perfeita, garantindo um encaixe seguro e estável para o seu dispositivo.',
        imageUrls: [
          'https://i.ibb.co/k0DbDp3/apple-carregador-magsafe-01.jpg',
          'https://i.ibb.co/Wf70MqM/apple-carregador-magsafe-02.jpg',
          'https://i.ibb.co/7gVpcTn/apple-carregador-magsafe-03.jpg',
          'https://i.ibb.co/VCfNmrx/apple-carregador-magsafe-04.jpg',
        ],
        basePrice: 719,
        categoryId: accessoriesCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: 'Apple Caneta Pencil Ipad Branco',
        slug: 'apple-caneta-pencil-branco',
        description:
          'O Apple Pencil é intuitivo, preciso e mágico, não importa se você está desenhando, tomando notas ou marcando documentos. Com o novo Apple Pencil, essa experiência ficou ainda melhor. Agora, você troca de ferramenta com dois toques e pode recarregar e emparelhar sem fio. Perfeito para tirar suas ideias do papel.',
        imageUrls: [
          'https://i.ibb.co/yFbMcV8/apple-caneta-pencil-branco-01.jpg',
          'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MUWA3_AV1?wid=1000&hei=1000&fmt=jpeg&qlt=95&.v=1695933856900',
          'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MUWA3_AV2?wid=1000&hei=1000&fmt=jpeg&qlt=95&.v=1695933858689',
        ],
        basePrice: 1681,
        categoryId: accessoriesCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: 'Apple Capa Iphone 14 Pro Max MagSafe Couro Verde',
        slug: 'apple-capa-iphone-14-pro-max-magsafe-couro-verde',
        description:
          'Projetada pela Apple para complementar o iPhone 15 Pro, a capa FineWoven com MagSafe é uma ótima maneira de dar proteção extra ao seu iPhone e, ao mesmo tempo, adicionar estilo. Feito de microsarja durável, o material tem um toque macio e semelhante a camurça. O material FineWoven também foi projetado pensando no planeta: é feito com 68% de conteúdo reciclado pós-consumo e reduz significativamente as emissões de carbono em comparação ao couro. A capa se encaixa rapidamente no lugar e se ajusta perfeitamente ao seu iPhone sem adicionar volume.',
        imageUrls: [
          'https://i.ibb.co/NtL115x/apple-capa-iphone-14-pro-max-magsafe-couro-verde-01.jpg',
          'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT4U3_AV4?wid=1000&hei=1000&fmt=jpeg&qlt=95&.v=1693594245149',
          'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT4U3_AV5_GEO_US?wid=1000&hei=1000&fmt=jpeg&qlt=95&.v=1693594252299',
        ],
        basePrice: 765,
        categoryId: accessoriesCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: 'Apple Teclado Magic Keyboard',
        slug: 'apple-teclado-magic-keyboard',
        description:
          'Você procura por um teclado de alta qualidade para seus jogos e atividades diárias no computador? O Teclado Magic Keyboard Apple MQ052BZ/A é a resposta para todas as suas necessidades. Com controles multimídia e design ergonômico, este teclado é ideal para gamers e para quem busca uma experiência de digitação precisa e confortável.',
        imageUrls: [
          'https://i.ibb.co/tmYd4z1/apple-teclado-magic-keyboard-01.jpg',
          'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MMMR3?wid=1000&hei=1000&fmt=jpeg&qlt=95&.v=1645719947833',
          'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MMMR3_AV3?wid=1000&hei=1000&fmt=jpeg&qlt=95&.v=1645719884190',
        ],
        basePrice: 1570,
        categoryId: accessoriesCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: 'Apple Magic Mouse 2 Cinza Espacial',
        slug: 'apple-magic-mouse-2-cinza-espacial',
        description:
          'Com design totalmente novo, o Magic Mouse 2 pode ser recarregado e dispensa o uso de pilhas. Ele está mais leve e tem menos peças móveis, graças à bateria integrada e à parte inferior contínua.',
        imageUrls: [
          'https://i.ibb.co/d2Ykcsd/apple-magic-mouse-2-cinza-espacial-01.jpg',
          'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MMMQ3_AV1?wid=1000&hei=1000&fmt=jpeg&qlt=95&.v=1645138490227',
          'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MMMQ3_AV2?wid=1000&hei=1000&fmt=jpeg&qlt=95&.v=1645138490081',
        ],
        basePrice: 1211,
        categoryId: accessoriesCategory.id,
        discountPercentage: 10, // 10% discount
      },
    ]

    await prisma.product.createMany({
      data: accessories,
    })

    console.log('Seed completed successfully')
  } catch (error) {
    console.error('Error seeding database:', error)
  } finally {
    await prisma.$disconnect()
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
