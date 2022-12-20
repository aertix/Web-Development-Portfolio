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
            console.log('i like men')
        }
    })
});

const thankYou = document.querySelector('.thankYou')
const formBtn = document.querySelector('#submit')
formBtn.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('clicked')
    thankYou.classList.add('stayDown')
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "shawnmail330@gmail.com",
        Password: "C980BC664FB05A430E1786DEBFA6FE383B06",
        To: 'shawnmail330@gmail.com',
        From: "shawnmail330@gmail.com",
        Subject: "Web inquiry from: " + document.querySelector('#field2').value,
        Body: "Hey Shawn, my name is " + document.querySelector('#field1').value +
            "<br> Also My Phone number is " + document.querySelector('#field3').value +
            "<br><br>" + document.querySelector('#message').value
    }).then(
        message => alert(message)
    );
})

document.getElementById('submitAgain').addEventListener('click', () => {

    thankYou.classList.remove('stayDown')
})