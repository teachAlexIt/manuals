// document.querySelector('.hamburger').onclick = function(){
//   document.querySelector('.hamburger').classList.toggle('hamburger_active');
// }

let hamburger = document.querySelector('.hamburger');//F2.131️⃣
let navLinks = document.querySelector('.nav__links');//F2.142️⃣
hamburger.onclick = function(){//F2.131️⃣
  hamburger.classList.toggle('hamburger_active');//F2.131️⃣
  navLinks.classList.toggle('nav__links_active');//F2.142️⃣
}