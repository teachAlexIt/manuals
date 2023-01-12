const manualsList = document.querySelector('.manuals__list');
const manualsItems = manualsList.querySelectorAll('.manuals__item');

for (let i = 0; i < manualsItems.length; i++) {
  manualsItems[i].querySelector('button').onclick = function() {
    let h = manualsItems[i].scrollHeight;
    manualsItems[i].classList.toggle('_active');
    if (manualsItems[i].classList.contains('_active')) {
      manualsItems[i].style.height = h + "px";
    }else{
      manualsItems[i].style.height = 48 + "px";
    }
  }
}