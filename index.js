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
