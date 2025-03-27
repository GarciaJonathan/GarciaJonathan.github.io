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
    new PanelSnap(options);
});

const json =
{   
    "Eng":{
        "greeting": "Hi, I'm Jona",
        "description": "Web developer and 3D artist, caught in the crossfire between tech and art. Whenever I see cute dogs on the street I always pet them.",
        "cv-button": "DOWNLOAD MY CV",
        "skills": "Skills",
        "projects": "Projects",
        "experience": "Experience"
    },

    "Cat":{
        "greeting": "Hola, em dic Jona",
        "description": "Desenvolupador web i artista 3D, atrapat entre tecnologia i art. Sempre que veig gossets pel carrer els saludo.",
        "cv-button": "DESCARREGA CV",
        "skills": "Habilitats",
        "projects": "Projectes",
        "experience": "Experiencia"
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