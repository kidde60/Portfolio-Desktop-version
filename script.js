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
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
workSection.innerHTML = `
<div class="placeholder1">
        <div class="holder">
            <img src="images/ImgPlaceholder.png" alt="blank-placeholder">
            
        </div>
        <div class="stories">
            <h3>Multi-Post Stories</h3>
            <p>A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.</p>
            <ul class="items">
                <li>css</li>
                <li>html</li>
                <li>bootstrap</li>
                <li class="ruby">Ruby</li>
            </ul>
            <button class="button" type="button" id="seemore">See Project</button>
        </div>
    </div>
    
    <div class="background-image1">
        <div class="holder">
            <img src="images/ImgPlaceholder.png" alt="blank-placeholder">
            
        </div>
        <div class="stories">
            <h3>Multi-Post Stories</h3>
            <p>A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.</p>
            <ul class="items">
                <li>css</li>
                <li>html</li>
                <li>bootstrap</li>
                <li class="ruby">Ruby</li>
            </ul>
            <button class="button" type="button" id="seemore">See Project</button>
        </div>
    </div>

    <div class="background-image2">
        <div class="holder">
            <img src="images/ImgPlaceholder.png" alt="blank-placeholder">
            
        </div>
        <div class="stories">
            <h3>Multi-Post Stories</h3>
            <p>A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.</p>
            <ul class="items">
                <li>css</li>
                <li>html</li>
                <li>bootstrap</li>
                <li class="ruby">Ruby</li>
            </ul>
            <button class="button" type="button" id="seemore">See Project</button>
        </div>
    </div>

    <div class="background-image3">
        <div class="holder">
            <img src="images/ImgPlaceholder.png" alt="blank-placeholder">
            
        </div>
        <div class="stories">
            <h3>Multi-Post Stories</h3>
            <p>A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.</p>
            <ul class="items">
                <li>css</li>
                <li>html</li>
                <li>bootstrap</li>
                <li class="ruby">Ruby</li>
            </ul>
            <button class="button" type="button" id="seemore">See Project</button>
        </div>
    </div>
`

const parent = document.querySelector('.popup-window');

const main = document.createElement('div');
  main.className = 'popup';
  parent.innerHTML = `
  <button type="button" class="X"><span>&times;</span></button>
  
  <h3>Multi-post story</h3>
  <div id="img">
      <img src="images/SnapshootPortfolio.png" alt="image">
  <p> 
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.</p>
  </div>
  <ul class="items">
      <li>html</li>
      <li>Ruby on rails</li>
      <li>css</li>
      <li>Github</li>
  </ul>
  <div class="popbtn">
      <a href="#"><button class="button" id="pop" type="button">See Live <img src="images/source.png" alt=""></button></a>
      <a href="https://github.com/kidde60/Portfolio-Desktop-version"><button class="button" id="pop1" type="button">See Source <img src="images/Vector.png" alt=""></button></a>
  </div>
`
const appear = document.querySelector('.button');
appear.addEventListener ('click', () => {
  

});

    