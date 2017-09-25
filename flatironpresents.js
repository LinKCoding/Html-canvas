var canvas = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

var c = canvas.getContext('2d')



// //line
// c.beginPath()
// c.moveTo(100, 300) //starting point
// c.lineTo(300, 100) //line to
// c.lineTo(400, 300) //another line to
// //c.lineTo(100, 300) //line to
// c.strokeStyle = "#550000"  //give style to the line
// c.stroke()        //draw the line






// //rectangle
// c.fillStyle = "rgb(255,100,0)"
// c.fillRect(100,100, 100, 100) //(x,y,width,height)
// // c.fillStyle = "rgba(5,100,220,0.5)"
// // c.fillRect(200,200, 100, 100)
// // c.fillRect(300,300, 100, 100)







// //circle
// c.beginPath()
// c.arc(300,300,100,0,Math.PI*2,false)
// c.strokeStyle = "blue"
// c.stroke()





// //random circles
// for (let i = 0; i <3; i++){
//   let x = Math.random() * window.innerWidth;
//   let y = Math.random() * window.innerHeight;
//   c.beginPath()
//   c.arc(x,y,100,0,Math.PI*2,false)
//   c.strokeStyle = "blue"
//   c.stroke()
// }






// function Circle(x,y,dx,dy,radius){
//   this.x = x,
//   this.y = y,
//   this.dx = dx,
//   this.dy = dy,
//   this.radius = radius
//   this.minRadius = radius
//   this.color = "green"
//
//   this.draw = function(){
//     c.beginPath()
//     c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false)
//     c.strokeStyle = 'black'
//     c.fillStyle = this.color
//     c.fill()
//     c.stroke()
//   }
//
//   this.update = function(){
//     if (this.x + this.radius > innerWidth || this.x - this.radius < 0){
//       this.dx = -this.dx
//     }
//     if (this.y + this.radius > innerHeight || this.y - this.radius < 0){
//       this.dy = -this.dy
//     }
//     this.x += this.dx
//     this.y += this.dy
//     this.draw()
//   }
// }




// let circleArray = []
//
// for (var i = 0; i < 100; i++){
//   var radius = Math.random()*50
//   var x = Math.random()*(innerWidth - radius*2) + radius
//   var y = Math.random()*(innerHeight - radius*2) + radius
//   var dx = (Math.random()-0.5) *10
//   var dy = (Math.random()-0.5) *10
//   circleArray.push(new Circle(x, y, dx, dy, radius))
// }
//
// for (var i = 0; i < circleArray.length; i++){
//   circleArray[i].update()
// }


// // Start the animations
// function animate(){
//   requestAnimationFrame(animate)
//   c.clearRect(0,0,innerWidth,innerHeight)
//   for (var i = 0; i < circleArray.length; i++){
//     circleArray[i].update()
//   }
// }
// animate()
