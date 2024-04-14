export const executado = {
  ajuda: [
    '<span class="destaque">Comandos</span>',
    '----------------',
    '<span class="destaque">social</span>               Meu linkedin e github.',
    '<span class="destaque">whois</span>                Um pouco sobre mim. ',
    '<span class="destaque">about</span>                Sobre esse site. ',
    '<span class="destaque">projetos</span>             Principais projetos, confira o resto no github!',
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
    "Me chamo Diego e amo criar soluções para meu dia-a-dia com a programação,",
    "Tenho grande experiência como técnico e hoje busco uma transição para o desenvolvimento",
    "Trabalhei desde o atendimento a clientes a suporte em bancos, criando experiência com DB2, SAS, SAP, SQL,",
    "manuntenção de dispositivos e muito mais!",
    "Em meus projetos utilizo C# (.NET), Python (Para automação de tarefas), Javascript (React como esse site & Node) e",
    "estou focado a me aprofundar cada vez mais em .NET.",
    "Graduando pela PUC MINAS pretendendo continuar minha formação com a Engenharia de software.",
    "Se quiser saber mais me manda uma mensagem no Linkedin :-)!",
  ],
  about: [
    '<span class="destaque">Sobre o terminal</span>',
    '----------------',
    `Construido com ReactJS utilizo o componente '<span class="destaque">Comando</span>' para invocar as respostas presentes`,
    `em uma array que em seguida passam pelo hook '<span class="destaque">useDigitando</span>' dando o efeito de digitação e`,
    "leva para o fim da página enquanto digita. Bem simples né?"
  ],
  email: [
    '<span class="destaque">E-mail</span>',
    '----------------',
    "Eu acho que é mais facil eu te informar meu email né?: " + process.env.REACT_APP_EMAIL
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
