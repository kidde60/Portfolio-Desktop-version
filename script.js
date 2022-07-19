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
//Data Array
let Data = [
  {
    class: 'placeholder1',
    subtitle: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    popuptext: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.',
    image: {
      image1: 'images/ImgPlaceholder.png',
      popup: 'assets/images/phone.png',
    },
    technologies: {
      css: 'css',
      html: 'html',
      bootstrap: 'bootstrap',
      ruby: 'Ruby',
      lags: 'Ruby on rails',
    },
    btn: 'See Project',
    style: {
      style1: 'section-1',
    },
    button: {
      live: 'See live',
      source: 'See source'
    }
  },
  {
    class: 'background-image1',
    subtitle: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    image: {
      image1: 'images/ImgPlaceholder.png'
    },
    technologies: {
      css: 'css',
      html: 'html',
      bootstrap: 'bootstrap',
      ruby: 'Ruby',
      lags: 'Ruby on rails',
    },
    btn: 'See Project',
    style: {
      style1: 'section-2',
    },
    imageleft: 'image-left',
  },
  {
    class: 'background-image2',
    subtitle: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    image: {
      image1: 'images/ImgPlaceholder.png'
    },
    technologies: {
      css: 'css',
      html: 'html',
      bootstrap: 'bootstrap',
      ruby: 'Ruby',
      lags: 'Ruby on rails',
    },
    btn: 'See Project',
    style: {
      style1: 'section-1',
    }

  },
  {
    class: 'background-image3',
    subtitle: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    image: {
      image1: 'images/ImgPlaceholder.png'
    },
    technologies: {
      css: 'css',
      html: 'html',
      bootstrap: 'bootstrap',
      ruby: 'Ruby',
      lags: 'Ruby on rails',
    },
    btn: 'See Project',
    style: {
      style1: 'section-2',
    },
    imageleft: 'image-left',
  }
]

const workSection = document.querySelector('.work-section');
// JavaScript Dynamic
Data.forEach((item, index) => {
  let placeholder = document.createElement('div');
  placeholder.className = Data[index].class;
  workSection.appendChild(placeholder);
  let holder = document.createElement('div');
  holder.className = 'holder';
  placeholder.appendChild(holder);
  let image = document.createElement('img');
  image.src = Data[index].image.image1;
  holder.appendChild(image);
  let stories = document.createElement('div');
  stories.className = 'stories';
  placeholder.appendChild(stories);
  let heading = document.createElement('h3');
  heading.textContent = Data[index].subtitle;
  stories.appendChild(heading);
  let paragraph = document.createElement('p');
  paragraph.textContent = Data[index].description;
  stories.appendChild(paragraph);
  let list = document.createElement('ul');
  list.className = 'items';
  // Edit needed
  stories.appendChild(list);
  let listItems = Data[index].technologies;
  // End of edit
  let button = document.createElement('button');
  button.type = 'button';
  button.className = 'button'
  button.textContent = 'See Project'
  stories.appendChild(button);
});

// popup section
const parent = document.querySelector('.popup-window');
parent.innerHTML = `
  <button type="button" class="X"><span>&times;</span></button>
  
  <h3>Multi-post story</h3>
  <div id="img">
      <img src="images/SnapshootPortfolio.png" alt="image">
  <p> 
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.</p>
  </div>
  <ul class="item">
      <li>html</li>
      <li>Ruby on rails</li>
      <li>css</li>
      <li class="github">Github</li>
  </ul>
  <div class="popbtn">
      <a href="#"><button class="button" id="pop" type="button">See Live <img src="images/source.png" alt=""></button></a>
      <a href="https://github.com/kidde60/Portfolio-Desktop-version"><button class="button" id="pop1" type="button">See Source <img src="images/Vector.png" alt=""></button></a>
  </div>
`
