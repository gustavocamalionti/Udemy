// É importante adicionar esses pacotes para rodar promises em navegadores mais antigos
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import executa from './modules/promises';

import './assets/css/style.css';

executa();