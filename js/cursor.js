const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 20) + "px; left: " + (e.pageX - 20) + "px;")
})
let contactBeg = '1vw'
let contactEnd = '.7vw'
let inputs = document.querySelectorAll('.fields')
inputs.forEach(field => {
    let placeText = field.nextElementSibling;
    field.addEventListener('input', () => {
        if (field.value == '') {
            placeText.classList.remove('stayUp')
            placeText.style.fontSize = contactBeg
        }
        else {
            placeText.classList.add('stayUp')
            placeText.style.fontSize = contactEnd
            console.log('i like men')
        }
    })
});

const thankYou = document.querySelector('.thankYou')
const formBtn = document.querySelector('#submit')
const nam = document.querySelector('#field1');
const email = document.querySelector('#field2');
const phoneNum = document.querySelector('#field3');
const message = document.querySelector('#message');

formBtn.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('clicked')
    thankYou.classList.add('stayDown')
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "hello@surmount.agency",
        Password: "E58DDD9FF8BD8F84DFF373A3472949C6F1F3",
        To: 'hello@surmount.agency',
        From: "hello@surmount.agency",
        Subject: "Web inquiry from: " + document.querySelector('#field2').value,
        Body: "Hey Shawn, my name is " + document.querySelector('#field1').value +
            "<br> Also My Phone number is " + document.querySelector('#field3').value +
            "<br><br>" + document.querySelector('#message').value
    }).then(
        message => alert(message)
    );
})

document.getElementById('submitAgain').addEventListener('click', () => {
    nam.value = '';
    email.value = '';
    phoneNum.value = ''
    message.value = ''
    thankYou.classList.remove('stayDown')
})