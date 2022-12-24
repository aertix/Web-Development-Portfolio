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


        })

        // if (die <= 500) {

        // }

    } else {
    }
}

var x = window.matchMedia("(max-width: 500px)")
// Call listener function at run time
window.addEventListener('scroll', myFunction(x))
