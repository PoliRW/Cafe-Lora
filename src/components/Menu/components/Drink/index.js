import { Layer } from '../Layer';
import './style.css';
export const Drink = (props)=>{

     const{id, name,  ordered, image, layers} =props;
    const element = document.createElement('div');
    element.classList.add('drink');
    element.innerHTML =` <div class="drink__product">
    <div class="drink__cup">
      <img src="https://cafelora.kodim.app/assets/cups/espresso.png">
    </div>
    <div class="drink__info">
      <h3>Espresso</h3>
    </div>
  </div>
  <div class="order-detail">
  <a href="/objednavka">Detail objednávky</a>
</div>
</div>
  `;
  element.querySelector('.drink__info').append(Layer());

return element;
}

//export const ShopList = (props) => {
  //const { day, dayResult } = props;

  // let dayName = 'Načítám…';
  // if (dayResult !== 'loading') {
  //   dayName = dayResult.dayName;
  // }