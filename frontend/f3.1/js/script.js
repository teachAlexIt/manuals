// document.querySelector('.hamburger').onclick = function(){
//   document.querySelector('.hamburger').classList.toggle('hamburger_active');
// }

let hamburger = document.querySelector('.hamburger');//F2.131️⃣
let navLinks = document.querySelector('.nav__links');//F2.142️⃣
hamburger.onclick = function(){//F2.131️⃣
  hamburger.classList.toggle('hamburger_active');//F2.131️⃣
  navLinks.classList.toggle('nav__links_active');//F2.142️⃣
}

// f2.15

let navlinksItem = document.querySelectorAll('.nav__links a');//F2.1513️⃣
// navlinksItem[0].onclick = function(){
//   hamburger.classList.remove('hamburger_active');//F2.131️⃣
//   navLinks.classList.remove('nav__links_active');//F2.142️⃣
// }

////////////////////////////////////////////////////////////////////////////////

// for (let number = 0; number < 4; number++) {
  
// }

////////////////////////////////////////////////////////////////////////////////

for (let number = 0; number < 4; number++) {//F2.1513️⃣
  navlinksItem[number].onclick = function(){//F2.1513️⃣
    hamburger.classList.remove('hamburger_active');//F2.131️⃣
    navLinks.classList.remove('nav__links_active');//F2.142️⃣
  }
}


// f2.16
let iframe = document.querySelector('iframe');
let formSend = document.querySelector('.form__send');
iframe.onload = function(){
  formSend.classList.add('form__send_active');
  setTimeout(() => {
    document.querySelector('form').reset();
    formSend.classList.remove('form__send_active');
  }, 3000);
}
