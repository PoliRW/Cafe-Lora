import './style.css'
export const Header = ()=>{
   const element = document.createElement('header');
   let click= 'nav-closed';
   const functionClick=()=>{ 
      if(click ==="nav-closed"){
      element.querySelector('nav').classList.remove(click);
      click= " ";
    }else {
      click="nav-closed";
      element.querySelector('nav').classList.add(click)}
   return click }
     
    element.innerHTML = `  
    <div class="header__content container">
       <div class="site-logo"></div>
       <div class="navigation">
        <button class="nav-btn"></button>
         <nav class="rollout-nav ${click}">
            <a href="#home">domů</a>
            <a href="#menu">menu</a>
            <a href="#gallery">galerie</a>
            <a href="#contact">kontakt</a>
          </nav>
      </div>
    </div>`;
    element.id='home';
//     export const ShopList = (props) => {
//   const { day, dayResult } = props;

//   let dayName = 'Načítám…';
//   if (dayResult !== 'loading') {
//     dayName = dayResult.dayName;
//   }
 
//  if(click){
//    navBtnElm.addEventListener('click', ()=>
//  { element.querySelector('nav').classList.remove(click)})
// }
const navBtnElm =element.querySelector(".nav-btn");
navBtnElm.addEventListener('click', functionClick);
let navRollout=element.querySelector('nav');
 navRollout.addEventListener('click', functionClick);



    return element;
    
};