let opener = document.querySelector('.opening')
let canva = document.querySelector('.openingCanvas')
let loader = document.querySelector('#loader-placeholder')
setTimeout(() => {
    loader.classList.add('fadeOut')
    setTimeout(() => {
        loader.style.display = 'none'
    }, 3000)
    opener.style.display = 'flex';
    clearInterval(moveDots)
    console.log('d')
}, 3000)



const scrip = document.querySelector('.scriptCanvas')
const backScript = document.createElement("script");
backScript.setAttribute("src", "js/background.js");
const enterBtn = document.querySelector('#enter')
enterBtn.addEventListener('click', () => {
    canva.style.zIndex = '-10000'

    document.querySelector('.scriptCanvas').innerHTML = ``;
    document.querySelector('.scriptCanvas').append(backScript)
    console.log('IT WORKED')
    document.querySelector('main').style.display = 'block';
    setTimeout(() => {
        document.querySelector('.backgroundCanvas').style.display = 'block'
    }, 2000)

    canva.classList.add('fadeOut')
    setTimeout(() => {
        canva.style.pointerEvents = 'none'
        navButton.display = "block"
    }, 2000)
    console.log('IT WORKED')

    opener.classList.add('fadeOut')
    setTimeout(() => {
        opener.style.display = 'none'

    }, 2000)


})





let nav = document.querySelector('.navular')
let switch2 = 1;
let navButton = document.querySelector('.button-three')
navButton.addEventListener('click', () => {

    console.log(switch2)
    if (switch2 == 1) {
        nav.style.display = 'flex'
        nav.classList.add('fadeIn')
        switch2 = -switch2;

        eye.style.left = "23vw"
    }
    else if (switch2 == -1) {
        nav.classList.remove('fadeIn')
        nav.classList.add('fadeOut')
        eye.style.left = "0vw"
        switch2 = -switch2;
        setTimeout(() => {
            nav.style.display = 'none'
            nav.classList.remove('fadeOut')
        }, 1000)
    }


})
const navItems = document.querySelectorAll('.navItem')
navItems.forEach(item => {
    item.addEventListener('click', () => {
        console.log('im gay')
        if (switch2 == -1) {
            navButton.setAttribute("data-state", "closed");
            navButton.setAttribute("aria-expanded", "false");
            nav.classList.remove('fadeIn')
            nav.classList.add('fadeOut')
            eye.style.left = "0vw"
            switch2 = -switch2;
            setTimeout(() => {
                nav.style.display = 'none'
                nav.classList.remove('fadeOut')
            }, 1000)
        }
    })
});
// red arrow part
let arrow = document.querySelector('.arrow')
enterBtn.addEventListener('click', () => {
    setTimeout(() => {
        arrow.style.display = 'block'
        arrow.classList.add('fadeIn')
    }, 4000)
})
arrow.addEventListener('click', () => {
    arrow.classList.add('fadeOut')
    setTimeout(() => {
        arrow.style.display = 'none'
    }, 1000)
})

