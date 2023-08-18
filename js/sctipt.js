import FStore from './FStore.js';
import DStore from './DStore.js';
const coursName = document.querySelector('body').getAttribute('class');
let manualsListStore;
if (coursName == 'FStore'){
  manualsListStore = FStore;
}else if(coursName === 'DStore'){
  manualsListStore = DStore;
}


const manualsList = document.querySelector('.manuals__list');
const manualsItemSimple = document.querySelector('.manuals__item');
for (let i = 0; i < manualsListStore.length; i++) {
  const manualsItemInfo = manualsListStore[i];
  let manualsItem = manualsItemSimple.cloneNode(true);
  manualsItem.setAttribute('class', 'manuals__item');
  manualsItem.querySelector('.ManualNumber').innerText = manualsItemInfo.Number;
  manualsItem.querySelector('.ManualName').innerText = manualsItemInfo.Name;
  manualsItem.querySelector('.ManualLinkSimple').setAttribute('href', manualsItemInfo.LinkSimple);
  manualsItem.querySelector('.ManualLinkManual').setAttribute('href', manualsItemInfo.LinkManual);
  manualsItem.querySelector('.ManualLinkCrib').setAttribute('href', manualsItemInfo.LinkCrib);
  manualsItem.querySelector('button').setAttribute('title', manualsItemInfo.Title);
  manualsList.appendChild(manualsItem);
}



const manualsItems = manualsList.querySelectorAll('.manuals__item');
for (let i = 0; i < manualsItems.length; i++) {
  manualsItems[i].querySelector('button').onclick = function () {
    classRemove(manualsItems[i]);
    manualsItems[i].classList.toggle('_active');
    chengeHeight(manualsItems[i]);
  }
}
function classRemove(item) {
  for (let i = 0; i < manualsItems.length; i++) {
    if (manualsItems[i] != item) {
      manualsItems[i].classList.remove('_active');
      chengeHeight(manualsItems[i]);
    }
  }
}
function chengeHeight(item) {
  let h = item.scrollHeight;
  if (item.classList.contains('_active')) {
    item.style.height = h + "px";
  } else {
    item.style.height = 50 + "px";
  }
}