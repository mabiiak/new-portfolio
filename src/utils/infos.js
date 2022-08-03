import StarWarsPlanets from '../images/projects/starwars-planets.png';
import StarWarsPlanetsFilters from '../images/projects/starwars-planets-filters.png';
import TrybeWalletHomeInitial from '../images/projects/trybewallet-wallet-initial.png';
import TrybeWalletHome from '../images/projects/trybewallet-wallet.png';
import TrybeWalletLogin from '../images/projects/trybewallet-login.png';
import TrybeTunesLogin from '../images/projects/trybetunes-login.png'
import TrybeTunesSearch from '../images/projects/trybetunes-search.png';
import TrybeTunesSearchNon from '../images/projects/trybetunes-search-non.png';
import TrybeTunesFavorites from '../images/projects/trybetunes-favorites.png';

const projects = [
  {
    name: 'TrybeTunnes',
    description: `Projeto feito utilizando React, Javascript e CSS.

    Ele tinha como objetivo criar uma aplicação que busque musicas por artistas ou bandas, e seja capaz de reproduzir suas prévias e também armazenar as favoritas do usuario.`,
    images: [
      TrybeTunesLogin,
      TrybeTunesSearch,
      TrybeTunesSearchNon,
      TrybeTunesFavorites
    ],
    links: {
      repo: 'https://github.com/mabiiak/trybetunes',
      view: 'https://mabiiak.github.io/trybetunes/' 
    },
  },
  
  {
    name: 'TrybeWallet',
    description: `Projeto feito utilizando React Redux, Javascript e CSS.

    Seu objetivo é armazenar compras, já calculando o valor de todas considerando a cotação da moeda utilizada.`,
    images: [
      TrybeWalletLogin,
      TrybeWalletHomeInitial,
      TrybeWalletHome,
    ],
    links: {
      repo: 'https://github.com/mabiiak/trybewallet',
      view: 'https://mabiiak.github.io/trybewallet/' 
    },
  },

  {
    name: 'StarWars Planets Search',
    description: `Projeto feito utilizando React Hooks, Javascript e styled-components.
    
    Tinha como objetivo consumir uma API com informações sobre o mundo de Star Wars. Permitindo filtrar planetas por nome, população entre outros.
    `,
    images: [StarWarsPlanets, StarWarsPlanetsFilters],
    links: {
      repo: 'https://github.com/mabiiak/starwars-planets',
      view: 'https://mabiiak.github.io/starwars-planets/' 
    },
  },
];

export default projects;