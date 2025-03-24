document.addEventListener('DOMContentLoaded', function() {

    document.querySelectorAll(".icontext").forEach(function(icontextin) {
        // Pause Animation by default

        // Wait for button to be clicked
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

})

const appHeight = () => document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`)
window.addEventListener('resize', appHeight)
appHeight()

document.addEventListener('DOMContentLoaded', function() {
    // Create the observer like the examples above
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('goright');
            return;
        }

        entry.target.classList.remove('goright');
        });
    });
    
    // Get multiple elements instead of a single one using "querySelectorAll"
    const right = document.querySelectorAll('.goright');
    
    // Loop over the elements and add each one to the observer
    right.forEach((element) => observer.observe(element));
    
    
});

document.addEventListener('DOMContentLoaded', function() {
    // Create the observer like the examples above
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('goup');
            return;
        }
    
        entry.target.classList.remove('goup');
        });
    });
    
    // Get multiple elements instead of a single one using "querySelectorAll"
    const up = document.querySelectorAll('.goup');

    // Loop over the elements and add each one to the observer
    up.forEach((element) => observer.observe(element));
    
});