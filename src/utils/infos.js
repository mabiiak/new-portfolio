import StarWarsPlanets from '../images/projects/starwars-planets.png'
import TrybeWalletHome from '../images/projects/trybewallet-wallet.png'
import TrybeWalletLogin from '../images/projects/trybewallet-login.png'
import TrybeTunesLogin from '../images/projects/trybetunes-login.png'
import TrybeTunesSearch from '../images/projects/trybetunes-search.png'

const projects = [
  {
    name: 'StarWars Search',
    description: `Projeto feito durante o curso de desenvolvimento Web na Trybe, no módulo de Front-End. Utilizando React, Javascript e styled-components.
    
    Ele tinha como objetivo criar uma aplicação que pegue os dados de uma requisição API e filtre os planetas do universo Star Wars de acordo com a busca, podendo criar mais de um filtro ao mesmo tempo.

    Nele foi ultilizado React Hook com conext API para fazer o gerenciamento do estado, e styled-components para fazer a estilização.`,
    images: [StarWarsPlanets],
    links: {
      repo: 'https://github.com/mabiiak/starwars-planets',
      view: 'https://mabiiak.github.io/starwars-planets/' 
    },
  },

  {
    name: 'TrybeWallet',
    description: `Projeto feito durante o curso de desenvolvimento Web na Trybe, no módulo de Front-End. Utilizando React, Javascript e CSS.Utilizando React, Javascript e CSS

    Ele tinha como objetivo criar uma aplicação que seja capaz de armazenar e somar as despesas do usuario, levando em conta a moeda utilizada, a cotação da moeda no dia da compra. Utilizamos Redux para trabalhar com a passagem de states, e utilizado os dados de uma API com a cotação das moedas. Tentei também fazer uma maior "componentização" de elementos como inputs para reutilizar na barra de inserção.`,
    images: [TrybeWalletLogin, TrybeWalletHome],
    links: {
      repo: 'https://github.com/mabiiak/trybewallet',
      view: 'https://mabiiak.github.io/trybewallet/' 
    },
  },

  {
    name: 'TrybeTunes',
    description: `Projeto feito durante o curso de desenvolvimento Web na Trybe, no módulo de Front-End. Utilizando React, Javascript e CSS.

    Ele tinha como objetivo criar uma aplicação que busque musicas por artistas ou banda e seja capaz de armazenar as favoritas do usuario.
    
    Nele eu pude compreender melhor os ciclos de vida de um componente React, criar rotas, fazer requisições e consumir dados de uma API.`,
    images: [TrybeTunesLogin, TrybeTunesSearch],
    links: {
      repo: 'https://github.com/mabiiak/trybetunes',
      view: 'https://mabiiak.github.io/trybetunes/' 
    },
  },
];

export default projects;