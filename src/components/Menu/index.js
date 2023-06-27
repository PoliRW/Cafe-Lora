import './style.css'
import { Drink } from './components/Drink';
export const Menu = ()=>{

    const element = document.createElement('section');
    element.classList.add('menu');
    element.id="menu";
    element.innerHTML =`
    <div class="container">
      <h2>Naše nabídka</h2>
      <p class="menu-intro" >
        Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
      </p>
      <div class="drinks-list" >
      </div>
    `;
  element.querySelector(".drinks-list").append(Drink());
    return element;
};