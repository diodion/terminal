export const executado = {
  ajuda: [
    '<span class="destaque">Comandos</span>',
    '----------------',
    '<span class="destaque">whois</span>                Um pouco sobre mim. ',
    '<span class="destaque">about</span>                Sobre esse site. ',
    '<span class="destaque">projetos</span>             Principais projetos, confira o resto no github!',
    '<span class="destaque">social</span>               Meu linkedin e github.',
    '<span class="destaque">email</span>                Se preferir vá em frente.',
    '<span class="destaque">ajuda</span>                Exibe os comandos disponíves... você está usando ele sabia?',
    '<span class="destaque">fetch</span>                Já tentou usar fetch em um humano?',
    '<span class="destaque">refresh</span>              Atualiza... a página.',
    '<span class="destaque">clear</span>                Limpa a tela.',
  ],
  whois: [
    '<span class="destaque">Quem sou?</span>',
    '----------------',
    "Olá!",
    "Me chamo Diego e amo criar soluções para meu dia-a-dia com a programação, tenho experiência",
    "como técnico, suporte e infraestrutura e hoje busco uma transição para o desenvolvimento.",
    "Trabalhei desde o atendimento a clientes a suporte em bancos, criando experiência com DB2,",
    "SAS, SAP, SQL, CICS, manuntenção de dispositivos e muito mais! De fato criei esse site por",
    "inspiração das minhas experiências e por adorar Linux!",
    "Em meus projetos utilizo C# (.NET), Python (Para automação de tarefas), Javascript (React",
    "como esse terminal e Node). Estou focado a me aprofundar cada vez mais em .NET.",
    "Graduando pela PUC MINAS pretendendo seguir minha formação com a Engenharia de software.",
    "Se quiser saber mais me manda uma mensagem no Linkedin :-)!",
  ],
  about: [
    '<span class="destaque">Sobre o terminal</span>',
    '----------------',
    `De forma resumida, desenvolvido com ReactJS utilizo o componente '<span class="destaque">Comando</span>' para invocar as`,
    `respostas presentes em uma array que em seguida passam pelo hook '<span class="destaque">useDigitando</span>' criando o `,
    "efeito de digitação ao renderizar o retorno da array. Bem simples né?"
  ],
  email: [
    '<span class="destaque">E-mail</span>',
    '----------------',
    "Eu acho que é mais facil eu te informar meu email né?: " + process.env.REACT_APP_EMAIL
  ],
  projetos: [
    '<span class="destaque">Projetos</span>',
    '----------------',
    '<span class="usuario">Statmed</span>',
    'Criado com .NET & ReactJS é um projeto de aplicação para gerenciamento de SAME hospitalar e',
    'consultas. Ganhamos o prêmio de um dos melhores projetos do semestre na PUC Minas para ADS!',
    '<span class="destaque"><a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/statmed" target="_blank">Confira aqui.</a></span>',
    '<span class="usuario">Statmed NodeJS</span>',
    'Para fins de aprendizado, resolvi fazer o port do backend de .NET para o NodeJS. Aprendi muito',
    'E o resultado foi melhor que o esperado!',
    '<span class="destaque"><a href="https://github.com/diodion/Statmed-nodeJS" target="_blank">Confira aqui.</a></span>',
    '<span class="usuario">Dashdine</span>',
    'Desenvolvida para o 4 semestre do curso da PUC Minas foi utilizado NodeJS, Next.JS e React Native',
    'com banco de dados não relacional. É uma aplicação de gerenciamento para o restaurante na web e',
    'no mobile o frontend de pedidos para o cliente final.',
    '<span class="destaque"><a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/dashdine" target="_blank">Confira aqui.</a></span>',
    '<span class="usuario">Kanban Board</span>',
    'Uma simples lousa interativa para o sistema Kanban usando local storage.',
    '<span class="destaque"><a href="https://github.com/diodion/kanbanjsboard" target="_blank">Confira aqui.</a></span>',
    '<span class="usuario">Outros</span>',
    'Esses são meus projetos públicos, realizei algumas automações como data entry utilizando python',
    'em experiências fora do ramo da TI, já na minha jornada na TI criei scripts de automação para',
    'deixar meu dia-a-dia mais dinâmico! Se quiser saber mais só chamar no linkedin!'
  ],
  social: [
    '<span class="destaque">Sociais</span>',
    '----------------',
    '<span class="destaque">Linkedin</span>                <a href="' + process.env.REACT_APP_LINKEDIN + '" target="_blank">Clica aqui ou digite linkedin.</a>',
    '<span class="destaque">Github</span>                  <a href="' + process.env.REACT_APP_GITHUB + '" target="_blank">Me clica ou digita github!</a>',
  ],
  github: [
    "Abrindo Github..."
  ],
  linkedin: [
    "Abrindo Linkedin..."
  ]
};
