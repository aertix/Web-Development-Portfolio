var canvas = document.querySelector('.openingCanvas');
function calculateArea() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
calculateArea()




// c within canvas means context
var c = canvas.getContext('2d');

window.addEventListener('resize', () => { calculateArea() })

const mouse = {
    x: undefined,
    y: undefined
}
let doom = 0;
document.querySelector('#enter').addEventListener('click', () => {
    doom = 1;
})

window.addEventListener('click', function (event) {
    if (doom != 1) {
        mouse.x = event.clientX
        mouse.y = event.clientY
        let coordinates = [mouse.x, mouse.y]
        function Circle(x, y, dx, dy, r) {
            this.x = mouse.x
            this.y = mouse.y
            this.dx = dx
            this.dy = dy
            this.r = r
            this.color = Math.floor(Math.random() * 14)
            this.draw = function () {
                c.beginPath()
                c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false)
                c.strokeStyle = 'transparent'
                c.fillStyle = colorArray[this.color]
                c.fill()
                c.stroke();
            }


            this.update = function () {
                if (this.r <= 2000) {
                    this.r += 20;
                }

                this.draw()
            }
        }

        for (let i = 0; i < 1; i++) {
            let r = 1
            let x = 100
            let dx = (Math.random() - .5) * 9;
            let y = 100

            let dy = (Math.random() - .5) * 9;
            circleArray.push(new Circle(x, y, dx, dy, r))

        }


    }


})

var colorArray = [
    '#6ECBF5',
    '#73F9FF',
    '#E4F0EE',
    '#49706A',
    '#B3BDBB',
    '#74E8CD',
    '#F6E2CC',
    '#D4D1B0',
    '#D1B3F4',
    '#1F5F8E',
    '#ED4D70',
    '#FDCB69',
    '#6D8A8E'
]




var circleArray = []



animate()

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight)




    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update()
    }


}



