const manualsList = document.querySelector('.manuals__list');
const manualsItemSimple = document.querySelector('.manuals__item');
const manualsListStore = [
  manualsInfo = {
    Number: 'F1.1',
    Name: 'Знакомство с HTML',
    LinkSimple: './f1.1/f1.1.html',
    LinkManual: 'https://docs.google.com/presentation/d/1FqjqhWKirPPtGD1-Af6oaESi7fsVed_IGrldVnlJd9g/edit?usp=sharing',
    LinkCrib: 'https://drive.google.com/file/d/1gxjKqWheEL2xU5z6zFCHsMGISjeHUjVC/view?usp=sharing'
  },
  manualsInfo = {
    Number: 'F1.2',
    Name: 'Изучаем новые теги',
    LinkSimple: './f1.2/f1.2.html',
    LinkManual: 'https://docs.google.com/presentation/d/1YIfmWEuZruWp5jzBMStpu7tgmB9BVNvRRbtIr5Yup6Y/edit?usp=sharing',
    LinkCrib: 'https://drive.google.com/file/d/1pNl3ZgYqhR8hZqmKlKyTs-1pV43obxVv/view?usp=sharing'
  },
  manualsInfo = {
    Number: 'F1.3',
    Name: '---',
    LinkSimple: './f1.3/f1.3.html',
    LinkManual: '',
    LinkCrib: ''
  },
  manualsInfo = {
    Number: 'F1.4',
    Name: '---',
    LinkSimple: './f1.4/f1.4.html',
    LinkManual: '',
    LinkCrib: ''
  },

]
console.log(manualsListStore)
for (let i = 0; i < manualsListStore.length; i++) {                     
  const manualsItemInfo = manualsListStore[i];
  let manualsItem = manualsItemSimple.cloneNode(true);
  manualsItem.setAttribute('class','manuals__item');
  manualsItem.querySelector('.ManualNumber').innerText = manualsItemInfo.Number;
  manualsItem.querySelector('.ManualName').innerText = manualsItemInfo.Name;
  manualsItem.querySelector('.ManualLinkSimple').setAttribute('href',manualsItemInfo.LinkSimple);
  manualsItem.querySelector('.ManualLinkManual').setAttribute('href',manualsItemInfo.LinkManual);
  manualsItem.querySelector('.ManualLinkCrib').setAttribute('href',manualsItemInfo.LinkCrib);
  manualsList.appendChild(manualsItem);
}



const manualsItems = manualsList.querySelectorAll('.manuals__item');
for (let i = 0; i < manualsItems.length; i++) {
  manualsItems[i].querySelector('button').onclick = function () {
    let h = manualsItems[i].scrollHeight;
    manualsItems[i].classList.toggle('_active');
    if (manualsItems[i].classList.contains('_active')) {
      manualsItems[i].style.height = h + "px";
    } else {
      manualsItems[i].style.height = 48 + "px";
    }
  }
}