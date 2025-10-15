document.addEventListener('DOMContentLoaded', function() {

    document.querySelectorAll(".icontext").forEach(function(icontextin) {

        icontextin.parentElement.children[0].onmouseover = () => {
            icontextin.style.animationName = 'expandiv';
            icontextin.style.animationDuration = '0.2s';
            icontextin.style.animationPlayState = 'running';
            icontextin.addEventListener('animationend', () => {
                icontextin.style.width = '120px';
            });
        }

        icontextin.parentElement.children[0].onmouseout = () => {
            icontextin.style.width = '0px';
            icontextin.style.animationName = 'shrinkdiv';
            icontextin.style.animationDuration = '0.2s';
            icontextin.style.animationPlayState = 'running';
            icontextin.addEventListener('animationend', () => {
                icontextin.style.width = '0px';
            });
        }

    });  

});

document.addEventListener("DOMContentLoaded", function () {

  var options = {
        container: document.body,
        panelSelector: '> section',
        directionThreshold: 10,
        delay: 0,
        duration: 500,
        easing: function(t) { return t },
    };
  
  if (window.matchMedia("(min-width: 1200px)").matches) { // If media query matches
    new PanelSnap(options);
  } 
    
});

const json =
{   
    "Eng":{
        "greeting": "Hi, I'm Jona",
        "description": "Web developer and 3D artist, caught in the crossfire between tech and art. Whenever I see cute dogs on the street I always pet them.",
        "cv-button": "DOWNLOAD MY CV",
        "skills": "Skills",
        "stack": "Stack",
        "projects": "Projects",
        "experience": "Experience",
        "project1-description": "Ai Chatbot for language learning",
        "project2-description": "Collection of 3D projects"
    },

    "Cat":{
        "greeting": "Ei, s&oacute;c en Jona",
        "description": "Desenvolupador web i artista 3D, atrapat entre tecnologia i art. Sempre saludo els gossets que veig pel carrer.",
        "cv-button": "DESCARREGA CV",
        "skills": "Habilitats",
        "stack": "Tecnologies",
        "projects": "Projectes",
        "experience": "Experiencia",
        "project1-description": "Bot de xat per aprendre idiomes",
        "project2-description": "Col&sdot;lecci&oacute; de projectes 3D"
    }
    
};

function updateLanguage(language) {
    console.log(`Changing language to ${language}`)
    document.querySelectorAll('[data-lan]').forEach(element => {
        const key = element.getAttribute('data-lan');
        element.innerHTML = json[language][key];
    });   
    localStorage.setItem('language', language) 
}

document.addEventListener("DOMContentLoaded", function () {

    if (localStorage.getItem('language')){
        console.log(`Initial language: ${localStorage.getItem('language')}`)
        updateLanguage(localStorage.getItem('language'))
    }

    document.querySelectorAll('.languageswitch').forEach(button=>{
        button.onclick = () => updateLanguage(button.innerHTML);
    });
});

// smooth scroll from https://github.com/whizkydee/olaolu.dev/blob/master/landing/src/helpers.js

//  dot nav by https://www.cssscript.com/one-page-scroll-dot-nav/

document.addEventListener("DOMContentLoaded", function () {
    const dotNav = (elem, easing) => {
      function scrollIt(destination, duration = 200, easing = 'linear', callback) {
          const easings = {
              linear(t) { return t; },
              easeInQuad(t) { return t * t; },
              easeOutQuad(t) { return t * (2 - t); },
              easeInOutQuad(t) { return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; },
              easeInCubic(t) { return t * t * t; },
              easeOutCubic(t) { return (--t) * t * t + 1; },
              easeInOutCubic(t) { return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1; },
              easeInQuart(t) { return t * t * t * t; },
              easeOutQuart(t) { return 1 - (--t) * t * t * t; },
              easeInOutQuart(t) { return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t; },
              easeInQuint(t) { return t * t * t * t * t; },
              easeOutQuint(t) { return 1 + (--t) * t * t * t * t; },
              easeInOutQuint(t) { return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t; }
          };
          const start = window.pageYOffset;
          const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
          const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
          const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
          const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
          const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);
          if ('requestAnimationFrame' in window === false) {
              window.scroll(0, destinationOffsetToScroll);
              if (callback) {
                  callback();
              }
              return;
          }
          function scroll() {
              const now = 'now' in window.performance ? performance.now() : new Date().getTime();
              const time = Math.min(1, ((now - startTime) / duration));
              const timeFunction = easings[easing](time);
              window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));
              if (window.pageYOffset === destinationOffsetToScroll) {
                  if (callback) {
                      callback();
                  }
                  return;
              }
              requestAnimationFrame(scroll);
          }
          scroll();
      }

      //  in viewport

      const inViewport = (el) => {
          let allElements = document.getElementsByTagName(el);
          let windowHeight = window.innerHeight;
          const elems = () => {
              for (let i = 0; i < allElements.length; i++) {  //  loop through the sections
                  let viewportOffset = allElements[i].getBoundingClientRect();  //  returns the size of an element and its position relative to the viewport
                  let top = viewportOffset.top;  //  get the offset top
                  if(top < windowHeight){  //  if the top offset is less than the window height
                      allElements[i].classList.add('in-viewport');  //  add the class
                  } else{
                      allElements[i].classList.remove('in-viewport');  //  remove the class
                  }
              }
          }
          elems();
          window.addEventListener('scroll', elems);
      }
      inViewport('section');

      //  dot nav

      const allSecs = document.getElementsByTagName(elem);
      const nav = document.getElementById('dot-nav');
      const scrollSpeed = '1000';
      let allVis = document.getElementsByClassName('in-viewport'),
          allDots;
      for (let i = 0; i < allSecs.length; i++) {
          allSecs[i].classList.add('section-' + i);
      }

      //  add the dots

      const buildNav = () => {
          for (let i = 0; i < allSecs.length; i++) {
              const dotCreate = document.createElement('a');
              dotCreate.id = 'dot-' + i;
              dotCreate.classList.add('dots');
              dotCreate.href = '#';
              dotCreate.setAttribute('data-sec', i);
              nav.appendChild(dotCreate);
          }
      }
      buildNav();

      //  nav position

      let navHeight = document.getElementById('dot-nav').clientHeight;
      let hNavHeight = navHeight / 2;
      document.getElementById('dot-nav').style.top = 'calc(50% - ' + hNavHeight + 'px)';

      //  onscroll

      const dotActive = () => {
          allVis = document.getElementsByClassName('in-viewport');
          allDots = document.getElementsByClassName('dots');
          visNum = allVis.length;
          let a = visNum - 1;
          for (let i = 0; i < allSecs.length; i++) {
              allDots[i].classList.remove('active');
          }
          document.getElementById('dot-' + a).classList.add('active');
      }
      dotActive();
      window.onscroll = function(){ dotActive(); };

      //  click stuff

      const scrollMe = (e) => {
          let anchor = e.currentTarget.dataset.sec;
          scrollIt(document.querySelector('.section-' + anchor), scrollSpeed, easing);
          e.preventDefault();
      }

      allDots = document.getElementsByClassName('dots');
      for (let i = 0; i < allDots.length; i++) {
          allDots[i].addEventListener('click', scrollMe);
      }

  }

  dotNav('section', 'easeInOutQuad');

});


