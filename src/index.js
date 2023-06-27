import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Banner} from "./components/Banner";
import {Menu} from "./components/Menu";
import {Contact} from "./components/Contact";
import {Gallery} from "./components/Gallery";
import './style.css';

const pageElement = document.createElement('div');
pageElement.classList.add('page');

const main = document.createElement('main');
main.append(Banner(), Menu(), Gallery(), Contact());

pageElement.append(Header(), main, Footer());

document.querySelector('#app').append(pageElement);
