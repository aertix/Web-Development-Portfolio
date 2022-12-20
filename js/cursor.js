const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 20) + "px; left: " + (e.pageX - 20) + "px;")
})

let inputs = document.querySelectorAll('.fields')
inputs.forEach(field => {
    let placeText = field.nextElementSibling;
    field.addEventListener('input', () => {
        if (field.value == '') {
            placeText.classList.remove('stayUp')
            placeText.style.fontSize = '1vw'
        }
        else {
            placeText.classList.add('stayUp')
            placeText.style.fontSize = '.7vw'
            console.log('I WANT BIG DICK INSIDE MY ASSHOLE')
        }
    })
});


