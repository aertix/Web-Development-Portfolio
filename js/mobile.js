let con = document.getElementById('test')
const root = document.querySelector(":root"); //grabbing the root element


function myFunction(x) {
    let featured = document.querySelectorAll('.featured')

    if (x.matches) { // If media query matches
        window.addEventListener('scroll', () => {
            let Yscroll = $(window).scrollTop()
            con.textContent = Yscroll
            if (Yscroll < 600) {
                root.style.setProperty("--topBefore1", '-50%');
                root.style.setProperty("--topAfter1", '100%');
                // second
                root.style.setProperty("--topBefore2", '-50%');
                root.style.setProperty("--topAfter2", '100%');
            }
            // FRIOSTWT one active
            if (Yscroll >= 600) {
                root.style.setProperty("--topBefore1", '0%');
                root.style.setProperty("--topAfter1", '50%');
                // second
                root.style.setProperty("--topBefore2", '-50%');
                root.style.setProperty("--topAfter2", '100%');
            }
            // SECOMD one active
            if (Yscroll >= 1000) {
                root.style.setProperty("--topBefore1", '-50%');
                root.style.setProperty("--topAfter1", '100%');
                // second
                root.style.setProperty("--topBefore2", '0%');
                root.style.setProperty("--topAfter2", '50%');
            }
            if (Yscroll >= 1200) {
                // second
                root.style.setProperty("--topBefore2", '-50%');
                root.style.setProperty("--topAfter2", '100%');

            }

        })

        // if (die <= 500) {

        // }

    } else {
    }
}

var x = window.matchMedia("(max-width: 500px)")
// Call listener function at run time
window.addEventListener('scroll', myFunction(x))
