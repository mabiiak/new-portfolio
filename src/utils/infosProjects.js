import TrybeWalletHomeInitial from '../images/projects/trybewallet-wallet-initial.png';
import TrybeWalletHome from '../images/projects/trybewallet-wallet.png';
import TrybeWalletLogin from '../images/projects/trybewallet-login.png';
import SistemaSolar from '../images/projects/sistema-solar.png';
import SistemaSolarMissoes from '../images/projects/sistema-solar-missoes.png';

const projects = [
  {
    name: 'TrybeWallet',
    description: `Feito utilizando React Redux, Javascript e CSS.

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
    name: 'Sistema Solar',
    description: `Feito utilizando React, Javascript e CSS.
    
    Tinha como objetivo consumir uma API com informações sobre o sistema solar.
    `,
    images: [SistemaSolar, SistemaSolarMissoes],
    links: {
      repo: 'https://github.com/mabiiak/sistema-solar',
      view: 'https://sistema-solar-mabiiak.vercel.app/' 
    },
  },
];

export default projects
