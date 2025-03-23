document.addEventListener('DOMContentLoaded', function() {

    document.querySelectorAll(".icontext").forEach(function(icontextin) {
        // Pause Animation by default
        icontextin.style.animationName = 'icontextin';
        icontextin.style.animationPlayState = 'paused';

        // Wait for button to be clicked
        icontextin.parentElement.children[0].onmouseover = () => {
            icontextin.style.animationName = 'icontextin';
            icontextin.style.animationDuration = '0.2s';
            icontextin.style.animationPlayState = 'running';
            icontextin.addEventListener('animationend', () => {
                icontextin.style.marginLeft = '0px';
            });
        }

        icontextin.parentElement.children[0].onmouseout = () => {
            icontextin.style.marginLeft = '-200px';
            icontextin.style.animationName = 'icontextout';
            icontextin.style.animationDuration = '0.2s';
            icontextin.style.animationPlayState = 'running';
            icontextin.addEventListener('animationend', () => {
                icontextin.style.marginLeft = '-200px';
            });
        }

    });

})

const appHeight = () => document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`)
window.addEventListener('resize', appHeight)
appHeight()
