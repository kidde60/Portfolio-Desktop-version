function showTheMenu() {
  if (window.screen.width >= 768) {
    return;
  }
  document.getElementById('overlay').style.display = 'flex';
}

function hideTheMenu() {
  document.getElementById('overlay').style.display = 'none';
}

const navElement = document.getElementById('nav');
navElement.addEventListener('click', showTheMenu);

const closeButton = document.getElementById('close-button');
closeButton.addEventListener('click', hideTheMenu);

const menuLinks = document.getElementsByClassName('menu-link');
for (let i = 0; i < menuLinks.length; i += 1) {
  menuLinks[i].addEventListener('click', hideTheMenu);
}
// card template
const cardArr = [
  {
    id: '0',
    name: 'Multi-Post Stories',
    brief: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: 'images/ImgPlaceholder.png',
    alt: 'blank-placeholder',
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    liveLink: 'https://petushka1.github.io/microverse-m1-w1-d3-portfolio-production/',
    sourceLink: 'https://github.com/petushka1/microverse-m1-w1-d3-portfolio-production',
  },
  {
    id: '1',
    name: 'Multi-Post Stories',
    brief: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: 'images/ImgPlaceholder.png',
    alt: 'blank-placeholder',
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    liveLink: 'https://petushka1.github.io/microverse-m1-w1-d3-portfolio-production/',
    sourceLink: 'https://github.com/petushka1/microverse-m1-w1-d3-portfolio-production',
  },
  {
    id: '2',
    name: 'Multi-Post Stories',
    brief: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    image: 'images/ImgPlaceholder.png',
    alt: 'blank-placeholder',
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    liveLink: 'https://petushka1.github.io/microverse-m1-w1-d3-portfolio-production/',
    sourceLink: 'https://github.com/petushka1/microverse-m1-w1-d3-portfolio-production',
  },
  {
    id: '3',
    name: 'Multi-Post Stories',
    brief: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: 'images/ImgPlaceholder.png',
    alt: 'blank-placeholder',
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    liveLink: 'https://petushka1.github.io/microverse-m1-w1-d3-portfolio-production/',
    sourceLink: 'https://github.com/petushka1/microverse-m1-w1-d3-portfolio-production',
  },
];

const workSection = document.querySelector('.work-section');

// card tempate
// div = document.createElement('div');
// div.className = 'placeholder1';
// workSection.appendChild(div);
// const placeholder1 = document.querySelector('.placeholder1');
const placeholder1 = document.createElement('div');
placeholder1.className = 'placeholder1';
workSection.appendChild(placeholder1);
cardArr.forEach((item, i) => {
  const holder = document.createElement('div');
  holder.className = 'holder';
  placeholder1.appendChild(holder);

  const snapshot = document.createElement('img');
  snapshot.className = 'Snapshot';
  snapshot.src = cardArr[i].image;
  snapshot.alt = cardArr[i].alt;
  holder.appendChild(snapshot);

  const stories = document.createElement('div');
  stories.className = 'stories';
  placeholder1.appendChild(stories);

  const header = document.createElement('h3');
  header.textContent = cardArr[i].name;
  stories.appendChild(header);

  const paragraph = document.createElement('p');
  paragraph.textContent = cardArr[i].brief;
  stories.appendChild(paragraph);

  // ul = document.createElement('ul');
  // ul.className = 'items';
  // ul.style.margin = '0';
  // stories.appendChild(ul);
  // li = document.createElement('li');
  // li.className = 'tech';
  // let [first, second, third, forth] = cardArr[i].technologies;
  // li.textContent = first;
  // ul.appendChild(li);
  // li = document.createElement('li');
  // li.className = 'tech';
  // li.textContent = second;
  // ul.appendChild(li);
  // li = document.createElement('li');
  // li.className = 'tech';
  // li.textContent = third;
  // ul.appendChild(li);
  // li = document.createElement('li');
  // li.className = 'tech';
  // li.textContent = forth;
  // ul.appendChild(li);
  // const button = document.createElement('button');
  // button.className = 'button';
  // button.textContent = 'See project';
  // button.name = 'details';
  // button.type = 'button';
  // button.id = cardArr[i].id;
  // stories.appendChild(button);
  // // Card Button function
  // function openPopup(e) {
  //   const j = e.target.id;
  //   const popup = document.createElement('div');
  //   popup.className = 'popup';
  //   workSection.appendChild(popup);

  //   function closePopup() {
  //     popup.style.display = 'none';
  //   }

  //   const popupContent = document.createElement('div');
  //   popupContent.className = 'popupContent fontSmall';
  //   popup.appendChild(popupContent);

  //   img = document.createElement('img');
  //   img.src = 'images/Icon.svg';
  //   img.className = 'close';
  //   popupContent.appendChild(img);
  //   img.addEventListener('click', closePopup);

  //   const popupHeader = document.createElement('h2');
  //   popupHeader.textContent = cardArr[j].name;
  //   popupContent.appendChild(popupHeader);

  //   const popupSnapshot = document.createElement('img');
  //   popupSnapshot.src = cardArr[j].image;
  //   popupSnapshot.className = 'crop';
  //   popupContent.appendChild(popupSnapshot);
  //   const desktopPopup = document.createElement('div');
  //   desktopPopup.className = 'select';
  //   popupContent.appendChild(desktopPopup);
  //   const popupParagraph = document.createElement('p');
  //   popupParagraph.className = 'popupParagraph';
  //   popupParagraph.textContent = cardArr[j].description;
  //   desktopPopup.appendChild(popupParagraph);
  //   const desktopRight = document.createElement('div');
  //   desktopRight.className = 'desktopRight';
  //   desktopPopup.appendChild(desktopRight);
  //   ul = document.createElement('ul');
  //   ul.className = 'lng liststyle';
  //   ul.style.marginBottom = '15px';
  //   desktopRight.appendChild(ul);
  //   [first, second, third, forth] = cardArr[j].technologies;
  //   li = document.createElement('li');
  //   li.className = 'tech';
  //   li.textContent = first;
  //   ul.appendChild(li);
  //   li = document.createElement('li');
  //   li.className = 'tech';
  //   li.textContent = second;
  //   ul.appendChild(li);
  //   li = document.createElement('li');
  //   li.className = 'tech';
  //   li.textContent = third;
  //   ul.appendChild(li);
  //   li = document.createElement('li');
  //   li.className = 'tech';
  //   li.textContent = forth;
  //   ul.appendChild(li);
  //   const buttonBar = document.createElement('form');
  //   buttonBar.className = 'button';
  //   desktopRight.appendChild(buttonBar);

  //   const live = document.createElement('button');
  //   live.className = 'btn fontSmall';
  //   live.id = 'live';
  //   live.textContent = 'Live vesrion';
  //   buttonBar.appendChild(live);

  //   img = document.createElement('img');
  //   img.src = 'img/live.svg';
  //   img.className = 'popupImg';
  //   live.appendChild(img);
  //   const source = document.createElement('button');
  //   source.className = 'btn fontSmall';
  //   source.id = 'source';
  //   source.textContent = 'See source';
  //   buttonBar.appendChild(source);

  //   img = document.createElement('img');
  //   img.src = 'img/gthb.svg';
  //   img.className = 'popupImg';
  //   source.appendChild(img);
  //   function goToLive() {
  //     window.open(cardArr[0].liveLink);
  //   }
  //   function goToSource() {
  //     window.open(cardArr[0].sourceLink);
  //   }
  //   live.addEventListener('click', goToLive);
  //   source.addEventListener('click', goToSource);

  //   if (window.innerWidth < 768) {
  //     popupParagraph.classList.remove('popupParagraph');
  //     popupParagraph.classList.remove('desktopRight');
  //   }
  //   popup.style.display = 'block';
  //   popup.style.overflow = 'auto';
  // }

  // stories.appendChild(button);
  // button.addEventListener('click', openPopup);
});
// contact form validation
const contactForm = document.querySelector('.form');
const { email } = contactForm.elements;
const validationMassege = contactForm.querySelector('.error');
validationMassege.style.color = 'white';
validationMassege.style.textAlign = 'center';
validationMassege.style.fontSize = '20px';
validationMassege.style.padding = '10px';
validationMassege.style.borderRadius = '2px';

contactForm.addEventListener('submit', (event) => {
  let isValid = false;
  if (email.value === email.value.toLowerCase()) {
    isValid = true;
  }
  if (isValid === false) {
    event.preventDefault();
    validationMassege.innerText = 'The email field should be in lowercase only.';
    setTimeout(() => {
      validationMassege.textContent = '';
    }, 5000);
  }
});
