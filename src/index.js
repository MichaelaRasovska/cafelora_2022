import './style.css';
import { Banner } from './components/Banner/index.js'
import { Contact } from './components/Contact/index.js'
import {Footer } from './components/Footer/index.js'
import { Gallery } from './components/Gallery/index.js'
import { Header } from './components/Header/index.js'
import { Menu } from './components/Menu/index.js'


console.log('funguju!');

const pageElement = document.createElement('div')

pageElement.classList.add('page')

const mainElement = document.createElement('main')
mainElement.append(Banner(), Menu(), Gallery(), Contact())

pageElement.append(
    Header(),
    mainElement,
    Footer()
  );


document.querySelector('#app').append(pageElement);
