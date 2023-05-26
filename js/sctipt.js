const manualsList = document.querySelector('.manuals__list');
const manualsItemSimple = document.querySelector('.manuals__item');
const manualsListStore = [
  manualsInfo = {
    Number: 'F1.1',
    Name: 'Знакомство с HTML',
    LinkSimple: './f1.1/f1.1.html',
    LinkManual: 'https://docs.google.com/presentation/d/1FqjqhWKirPPtGD1-Af6oaESi7fsVed_IGrldVnlJd9g/edit?usp=sharing',
    LinkCrib: 'https://drive.google.com/file/d/1gxjKqWheEL2xU5z6zFCHsMGISjeHUjVC/view?usp=sharing',
    Title: '1.Cоздаем файл index.htm | 2.Cоздаём стартовый шаблон | 3.Теги: h1, p, h2, img, h3, ul, li, a.'
  },
  manualsInfo = {
    Number: 'F1.2',
    Name: 'Изучаем новые теги',
    LinkSimple: './f1.2/f1.2.html',
    LinkManual: 'https://docs.google.com/presentation/d/1YIfmWEuZruWp5jzBMStpu7tgmB9BVNvRRbtIr5Yup6Y/edit?usp=sharing',
    LinkCrib: 'https://drive.google.com/file/d/1pNl3ZgYqhR8hZqmKlKyTs-1pV43obxVv/view?usp=sharing',
    Title: '1.Сохранить картинки в свой проект | 2.Теги: b, form, input, button, span, br | 3.Блочные и строчные теги'
  },
  manualsInfo = {
    Number: 'F1.3',
    Name: 'Знакомство с CSS',
    LinkSimple: './f1.3/f1.3.html',
    LinkManual: '',
    LinkCrib: '',
    Title: '1.Знакомимся с <div> | 2.Знакомство с CSS | 3.Свойства: display, border, padding, margin, color'
  },
  manualsInfo = {
    Number: 'F1.4',
    Name: 'Секции',
    LinkSimple: './f1.4/f1.4.html',
    LinkManual: '',
    LinkCrib: '',
    Title: '1.Теги: header, section, footer | 2.Свойства: background-color, max-width, height'
  },
  manualsInfo = {
    Number: 'F1.5',
    Name: 'Backg-image',
    LinkSimple: './f1.5/f1.5.html',
    LinkManual: '',
    LinkCrib: '',
    Title: 'Свойства: background-image, background-size, background-position, hover, transition, width'
  },
  manualsInfo = {
    Number: 'F1.6',
    Name: 'Google Fonts',
    LinkSimple: './f1.6/f1.6.html',
    LinkManual: '',
    LinkCrib: '',
    Title: '1. Стилизуем input button (margin-bottom) | 2. Меняем шрифт, подключаем Google-fonts'
  },
  manualsInfo = {
    Number: 'F1.7',
    Name: 'GitHub',
    LinkSimple: './f1.6/f1.6.html',
    LinkManual: '',
    LinkCrib: '',
    Title: '1.регистрируемся на сайте гитхаб |  2.создаём репозиторий | 3.загружаем наш сайт в репозиторий | 4.публикуем'
  },
  manualsInfo = {
    Number: 'F1.8',
    Name: 'Добавляем странички',
    LinkSimple: './f1.8/f1.8.html',
    LinkManual: '',
    LinkCrib: '',
    Title: 'Три новые странички'
  },

  manualsInfo = {
    Number: 'F2.1',
    Name: 'Header | Анимация',
    LinkSimple: './f2.1/f2.1.html',
    LinkManual: '',
    LinkCrib: '',
    Title: '1.Новый проект | 2. vh | 3.Анимация фона | position: fixed;'
  },
  manualsInfo = {
    Number: 'F2.2',
    Name: 'Nav | .container',
    LinkSimple: './f2.2/f2.2.html',
    LinkManual: '',
    LinkCrib: '',
    Title: '1. .container | 2. display: flex; | 3 Классы БЭМ'
  },
  manualsInfo = {
    Number: 'F2.3',
    Name: 'Nav Стили',
    LinkSimple: './f2.3/f2.3.html',
    LinkManual: '',
    LinkCrib: '',
    Title: '1. Классы - модификатор | 2. -webkit-scrollbar'
  },
  manualsInfo = {
    Number: 'F2.4',
    Name: 'Header Стили',
    LinkSimple: './f2.4/f2.4.html',
    LinkManual: '',
    LinkCrib: '',
    Title: '1. Классы - модификатор | 2. -webkit-scrollbar'
  },
  manualsInfo = {
    Number: 'F2.5',
    Name: 'About Me',
    LinkSimple: './f2.5/f2.5.html',
    LinkManual: '',
    LinkCrib: '',
    Title: '1. Классы - модификатор | 2. -webkit-scrollbar'
  },
  manualsInfo = {
    Number: 'F2.6',
    Name: 'Skills',
    LinkSimple: './f2.6/f2.6.html',
    LinkManual: '',
    LinkCrib: '',
    Title: '1. Классы - модификатор | 2. -webkit-scrollbar'
  },
  manualsInfo = {
    Number: 'F2.7',
    Name: 'Works',
    LinkSimple: './f2.7/f2.7.html',
    LinkManual: '',
    LinkCrib: '',
    Title: '1. Классы - модификатор | 2. -webkit-scrollbar'
  },
  manualsInfo = {
    Number: 'F2.8',
    Name: 'Contacts',
    LinkSimple: './f2.8/f2.8.html',
    LinkManual: '',
    LinkCrib: '',
    Title: '1. Классы - модификатор | 2. -webkit-scrollbar'
  },
  manualsInfo = {
    Number: 'F2.9',
    Name: 'Footer',
    LinkSimple: './f2.9/f2.9.html',
    LinkManual: '',
    LinkCrib: '',
    Title: '1. Классы - модификатор | 2. -webkit-scrollbar'
  },
  manualsInfo = {
    Number: 'F2.10',
    Name: 'Адаптив Nav Header',
    LinkSimple: './f2.10/f2.10.html',
    LinkManual: '',
    LinkCrib: '',
    Title: 'Адапив часть 1'
  },
  manualsInfo = {
    Number: 'F2.11',
    Name: 'Адаптив About-me',
    LinkSimple: './f2.11/f2.11.html',
    LinkManual: '',
    LinkCrib: '',
    Title: 'Адапив часть 1'
  },
  manualsInfo = {
    Number: 'F2.12',
    Name: 'Адаптив Skils',
    LinkSimple: './f2.12/f2.12.html',
    LinkManual: '',
    LinkCrib: '',
    Title: 'Адапив часть 1'
  },
  manualsInfo = {
    Number: 'F2.13',
    Name: 'JS hamburger',
    LinkSimple: './f2.13/f2.13.html',
    LinkManual: '',
    LinkCrib: '',
    Title: 'Адапив часть 1'
  },
  manualsInfo = {
    Number: 'F2.14',
    Name: 'Nav__links',
    LinkSimple: './f2.14/f2.14.html',
    LinkManual: '',
    LinkCrib: '',
    Title: 'Адапив часть 1'
  },
  manualsInfo = {
    Number: 'F2.15',
    Name: 'Nav__links 2',
    LinkSimple: './f2.15/f2.15.html',
    LinkManual: '',
    LinkCrib: '',
    Title: 'Адапив часть 1'
  },
  manualsInfo = {
    Number: 'F2.16',
    Name: 'Form Send',
    LinkSimple: './f2.16/f2.16.html',
    LinkManual: '',
    LinkCrib: '',
    Title: 'Адапив часть 1'
  },
]
console.log(manualsListStore)
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