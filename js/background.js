var canv = document.querySelector('.backgroundCanvas');
function calculateArea() {
    canv.width = window.innerWidth;
    canv.height = window.innerHeight;
}
calculateArea()

// c within canvas means context
var ca = canv.getContext('2d');

window.addEventListener('resize', () => { calculateArea() })

const mous = {
    x: undefined,
    y: undefined
}

window.addEventListener('mousmove', function (even) {
    mous.x = even.x
    mous.y = even.y
})


var colorArrayy = [
    '',

]

function Circle(x, y, dx, dy, r) {
    this.x = x;
    this.y = y;
    this.dx = dx
    this.dy = dy
    this.r = r
    this.minR = 1;
    this.hover = 50
    this.color = Math.floor(Math.random() * 2)
    this.draw = function () {
        ca.beginPath()
        ca.arc(this.x, this.y, this.r, 0, Math.PI * 2, false)
        ca.strokeStyle = 'transparent'
        ca.fillStyle = '#606060';
        ca.fill()
        ca.stroke();
    }

    this.update = function () {
        if (this.x + this.r > innerWidth || this.x - this.r < 0) {
            this.dx = -this.dx
        }
        if (this.y + this.r > innerHeight || this.y - this.r < 0) {
            this.dy = -this.dy
        }
        this.y += this.dy
        this.x += this.dx

        if (mous.x - this.x < this.hover && mous.x - this.x > -this.hover && mous.y - this.y < this.hover && mous.y - this.y > -this.hover) {
            if (this.r < 40) {
                this.r += 5
            }
        }

        else if (this.r > this.minR) {
            this.r -= 1
        }

        this.draw()
    }
}



var circleArrayy = []

for (let i = 0; i < 200; i++) {
    let r = 1
    let x = Math.random() * (innerWidth - r * 2) + r
    let dx = (Math.random() - .5) * 2;
    let y = Math.random() * (innerHeight - r * 2) + r
    dy = (Math.random() - .5) * 2;
    circleArray.push(new Circle(x, y, dx, dy, r))
}




function animate() {
    requestAnimationFrame(animate);
    ca.clearRect(0, 0, innerWidth, innerHeight)



    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update()
    }


}

animate()

















