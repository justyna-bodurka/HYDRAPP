import '../scss/main.scss';

// uncomment the lines below to enable PWA
import {registerSW} from './pwa.js';
registerSW();

/* place your code below */
const value = document.querySelector(".hydrapp__value--js");
const add = document.querySelector(".button-add--js");
const minus = document.querySelector(".button-minus--js");
const key = new Date () .toISOString () .slice (0,10);
let state =localStorage.getItem(key) || 0;
value.innerHTML = state


add.addEventListener('click', function () {
    state++
    value.innerHTML = state
   localStorage.setItem(key,state) 
});

minus.addEventListener('click', addWater);

function addWater () {
    if (state > 0) {
        state--
        value.innerHTML = state
        localStorage.setItem(key,state) 
    }
}


console.log(key);
