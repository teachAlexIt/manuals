import FStore from './FStore.js';
import DStore from './DStore.js';
import BStore from './BStore.js';
import PStore from './PStore.js';
import RStore from './RStore.js';
const coursName = document.querySelector('body').getAttribute('class');
let manualsListStore;
if (coursName == 'FStore'){
  manualsListStore = FStore;
}else if(coursName === 'DStore'){
  manualsListStore = DStore;
}else if(coursName === 'BStore'){
  manualsListStore = BStore;
}else if(coursName === 'PStore'){
  manualsListStore = PStore;
}else if(coursName === 'RStore'){
  manualsListStore = RStore;
}


const manualsList = document.querySelector('.manuals__list');
const manualsItemSimple = document.querySelector('.manuals__item');
for (let i = 0; i < manualsListStore.length; i++) {
  const manualsItemInfo = manualsListStore[i];
  let manualsItem = manualsItemSimple.cloneNode(true);
  manualsItem.setAttribute('class', 'manuals__item');
  manualsItem.querySelector('.ManualNumber').innerText = manualsItemInfo.Number;
  manualsItem.querySelector('.ManualName').innerText = manualsItemInfo.Name;
 
  if (coursName === 'BStore') {
    manualsItem.querySelector('.ManualLinkSimple').setAttribute('href', '../blender/Simle/' + manualsItemInfo.Number + '.fbx');
    manualsItem.querySelector('.ManualLinkSimple').setAttribute('target', '');
    manualsItem.querySelector('.ManualLinkManual').setAttribute('href', '../blender/Simle/' + manualsItemInfo.Number + '.blend');
    manualsItem.querySelector('.ManualLinkManual').setAttribute('target', '');
    manualsItem.querySelector('.ManualLinkHomeWork').setAttribute('href', '../blender/Simle/' + manualsItemInfo.Number + '.png');
    manualsItem.querySelector('.ManualLinkHomeWork').setAttribute('target', '');
  }else if(coursName === 'RStore'){
    manualsItem.querySelector('.ManualLinkSimple').setAttribute('href', '../roblox/Simle/' + manualsItemInfo.Number + '.rbxl');
    manualsItem.querySelector('.ManualLinkSimple').setAttribute('target', '');
    manualsItem.querySelector('.ManualLinkManual').setAttribute('href', manualsItemInfo.LinkManual);
    manualsItem.querySelector('.ManualLinkManual').setAttribute('target', '_blank');
    manualsItem.querySelector('.ManualLinkHomeWork').setAttribute('href', manualsItemInfo.LinkHomeWork);
    manualsItem.querySelector('.ManualLinkHomeWork').setAttribute('target', '_blank');
  }
  else{
    manualsItem.querySelector('.ManualLinkSimple').setAttribute('href',  manualsItemInfo.LinkSimple);
    manualsItem.querySelector('.ManualLinkManual').setAttribute('href', manualsItemInfo.LinkManual);
  }
  
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
    item.style.height = 48 + "px";
  }
}