
let hamburger = document.querySelector('.hamburger');//F3.3
let navLinks = document.querySelector('.nav__links');//F3.3
let navContact = document.querySelector('.nav__contact');//F3.3
let navlinksItem = document.querySelectorAll('nav a');//F3.3

hamburger.onclick = function(){//F2.131️⃣
  hamburger.classList.toggle('hamburger_active');//F3.3
  navLinks.classList.toggle('nav__links_active');//F3.3
  navContact.classList.toggle('nav__contact_active');//F3.3
}


for (let number = 0; number < navlinksItem.length; number++) {//F3.3
  navlinksItem[number].onclick = function(){//F3.3
    hamburger.classList.remove('hamburger_active');//F3.3
    navLinks.classList.remove('nav__links_active');//F3.3
    navContact.classList.remove('nav__contact_active');//F3.3
  }
}
