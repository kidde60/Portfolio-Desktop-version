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
});
// contact form validation
const contactForm = document.querySelector('.form');
const { email } = contactForm.elements;
const validationMassege = contactForm.querySelector('.error');
validationMassege.style.color = 'white';
validationMassege.style.textAlign = 'center';
validationMassege.style.fontSize = '20px';

contactForm.addEventListener('submit', (event) => {
  let isValid = false;
  if (email.value === email.value.toLowerCase()) {
    isValid = true;
  }
  if (isValid === false) {
    event.preventDefault();
    validationMassege.innerText = 'The email field must be in lowercase only.';
    setTimeout(() => {
      validationMassege.textContent = '';
    }, 5000);
  }
});
