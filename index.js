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
        "greeting": "Hola, em dic Jona",
        "description": "Desenvolupador web i artista 3D, atrapat entre tecnologia i art. Sempre que veig gossets pel carrer els saludo.",
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

function smoothScroll(scrollTargetY, speed = 1000) {
    let currentTime = 0
    const scrollY = pageYOffset || document.documentElement.scrollTop
    const derivedSpeed = speed
  
    // min time .1, max time .8 seconds
    const time = Math.max(
      0.1,
      Math.min(Math.abs(scrollY - scrollTargetY) / derivedSpeed, 0.8)
    )
  
    // easing equations from https://github.com/danro/easing-js/blob/master/easing.js
    const easeInOutCubic = pos => {
      if ((pos /= 0.5) < 1) return 0.5 * Math.pow(pos, 3)
      return 0.5 * (Math.pow(pos - 2, 3) + 2)
    }
  
    function runAnimation() {
      currentTime += 1 / 60
  
      let p = currentTime / time
      let t = easeInOutCubic(p)
  
      if (p < 1) {
        requestAnimationFrame(runAnimation)
  
        scrollTo(0, scrollY + (scrollTargetY - scrollY) * t)
      } else {
        scrollTo(0, scrollTargetY)
      }
    }
  
    runAnimation()
  }

  function goToSection(store, opts) {
    let { node: sectionNode, modifier, smooth = true, focus = true } = opts
  
    if (!sectionNode) return
    const sections = getSections()
    const app = document.getElementById('app')
  
    const getSectionId = () => sectionNode.dataset.section
    const curSectionIndex = sections.findIndex(({ dataset }) => {
      return dataset.section === getSectionId()
    })
  
    const findSection = (idx = 0) => sections[curSectionIndex + idx]
    // determine what section to go to based on the modifier.
    if (modifier == 'next') {
      sectionNode = findSection(1)
    } else if (modifier == 'previous') {
      sectionNode = findSection(-1)
    }
  
    if (!sectionNode) return
    setTimeout(() => {
      // Add a `scrolled` className so we know not to
      // animate all the items in the section again.
      sectionNode.classList.add('scrolled')
    }, 1000)
  
    if (smooth) smoothScroll(sectionNode.offsetTop)
    else scrollTo(0, sectionNode.offsetTop)
  
    setTimeout(() => {
      store && store.commit(CURRENT_SECTION, getSectionId())
      app.dataset[CURRENT_SECTION] = getSectionId()
  
      if (focus) {
        // If there's a focusable node in the current section,
        // bring focus to that node, otherwise, restore focus to the navigation.
        const navigationEl = document.getElementById(NAVIGATION_ID)
        const nodeToFocus = !getFirstFocusableNode(sectionNode)
          ? getFirstFocusableNode(navigationEl)
          : sectionNode
  
        if (nodeToFocus === null) return
        nodeToFocus.focus()
      }
    }, 200)
  }
  
  const [getSections] = [
    () => Array.from(document.querySelectorAll(SECTION_SELECTOR)),
  ]

  /**
     * Configurable fn to scroll to a section - accepts a node
     * Default opts: `{ smooth: true, focus: true }`.
     * Toggle the values to disable/enable smooth scrolling
     * and focusing the section on arrival respectively.
     * @return {void}
     */
  function goToSection(...args) {
    if (this.isMediumScreen) return // don't call rAF on medium screens
    return GoToSection(this.$store, ...args)
  }

  /**
   * Recalculate position of the current section
   * then adjust based on that information.
   * @return {void}
   */
  function recalcSection() {
    const currentSection = this.getSection()
    this.goToSection({ node: currentSection, smooth: false })
  }

  /**
   * Go to the section after the current one.
   * @return {void}
   */
  function goToNextSection() {
    goToSection({ modifier: 'next', node: this.getSection() })
  }

  /**
   * Go to the section before the current one.
   * @return {void}
   */
  function goToPrevSection() {
    goToSection({ modifier: 'previous', node: this.getSection() })
  }

  /**
   * Jump to the absolute first section on the page.
   * @return {void}
   */
  function goToFirstSection() {
    goToSection({ node: this.getSection(this.firstSection) })
  }

  /**
   * Jump to the absolute last section on the page.
   * @return {void}
   */
  function goToLastSection() {
    goToSection({ node: this.getSection(this.lastSection) })
  }