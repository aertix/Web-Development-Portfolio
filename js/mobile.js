let con = document.getElementById('test')
const root = document.querySelector(":root"); //grabbing the root element


function myFunction(x) {
    let featured = document.querySelectorAll('.featured')

    if (x.matches) { // If media query matches
        window.addEventListener('scroll', () => {
            let Yscroll = $(window).scrollTop()
            document.querySelector('#techno').textContent = "Technologies"
            if (Yscroll <= 100) {
                navButton.classList.remove('slideUp')
                document.querySelector('.socials').classList.remove('slideDown')
            }
            else if (Yscroll >= 100) {
                navButton.classList.add('slideUp')
                document.querySelector('.socials').classList.add('slideDown')
            }
            if (Yscroll < 500) {
                root.style.setProperty("--topBefore1", '-50%');
                root.style.setProperty("--topAfter1", '100%');
                // second
                root.style.setProperty("--topBefore2", '-50%');
                root.style.setProperty("--topAfter2", '100%');
                document.querySelector("#proj1").blur()
                document.querySelector("#proj2").blur()
            }
            // FRIOSTWT one active
            if (Yscroll >= 500) {
                document.querySelector("#proj1").focus()
                document.querySelector("#proj2").blur()
                root.style.setProperty("--topBefore1", '0%');
                root.style.setProperty("--topAfter1", '50%');
                // second
                root.style.setProperty("--topBefore2", '-50%');
                root.style.setProperty("--topAfter2", '100%');
            }
            // SECOMD one active
            if (Yscroll >= 1000) {
                document.querySelector("#proj2").focus()
                document.querySelector("#proj1").blur()
                root.style.setProperty("--topBefore1", '-50%');
                root.style.setProperty("--topAfter1", '100%');
                // second
                root.style.setProperty("--topBefore2", '0%');
                root.style.setProperty("--topAfter2", '50%');
            }
            if (Yscroll >= 1400) {
                // second
                root.style.setProperty("--topBefore2", '-50%');
                root.style.setProperty("--topAfter2", '100%');
                document.querySelector("#proj1").blur()
                document.querySelector("#proj2").blur()

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
