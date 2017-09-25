var canvas = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
//setting the canvas to cover the entire page
//There are default css in the html body. Change it to 0 with css

//c = contex or the paintbrush
var c = canvas.getContext('2d')

//change the rect style by putting in fillStyle before each rect
// c.fillStyle = "rgb(255,100,0)"
// c.fillRect(100,100, 100, 100) //(x,y,width,height)
// c.fillStyle = "rgba(5,100,220,0.5)"
// c.fillRect(200,200, 100, 100)
// c.fillRect(300,300, 100, 100)



//drawing a line
// c.beginPath()
// c.moveTo(100, 300) //starting point
// c.lineTo(300, 100) //line to
// c.lineTo(400,300) //another line
// c.strokeStyle = "#00ff88"  //give style to the line
// c.stroke()        //function to draw the line


//drawing an arc
// c.beginPath() //use beginpath again to end the continuation from the previous lineTo. without this there will be a line from the previous end point to the start point of this arc
// c.arc(300,300,100,0,Math.PI*2,false) //(x, y, radius, start angle(takes radian), end radian, drawcounter Clockwise(boolean))
// c.strokeStyle = "blue" //new strokestyle for it will take from previous
// c.stroke()

//drawing multiple shapes. use a for loop

// for (let i = 0; i <3; i++){
//   let x = Math.random() * window.innerWidth;
//   let y = Math.random() * window.innerHeight;
//   c.beginPath()
//   c.arc(x,y,100,0,Math.PI*2,false)
//   c.strokeStyle = "blue"
//   c.stroke()
// }


//Generate a random color
function tasteTheRainbow() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


var mouse = {
  x: undefined,
  y: undefined
}

$('#canvas').mousemove(function(){
  mouse.x = event.x
  mouse.y = event.y
  console.log(mouse);
})



function Circle(x,y,dx,dy,radius){
    this.x = x,
    this.y = y,
    this.dx = dx,
    this.dy = dy,
    this.radius = radius
    this.minRadius = radius
    this.color = tasteTheRainbow()

    this.draw = function(){
      c.beginPath()
      c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false)
      c.strokeStyle = 'black'
      c.fillStyle = this.color
      c.fill()
      c.stroke()
    }

    this.update = function(){
      if (this.x + this.radius > innerWidth || this.x - this.radius < 0){
        this.dx = -this.dx
      }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0){
          this.dy = -this.dy
      }
      this.x += this.dx
      this.y += this.dy

      //circle grows within 50px
      if (mouse.x - this.x < 50 &&
          mouse.x - this.x > -50 &&
          mouse.y - this.y < 50 &&
          mouse.y - this.y > -50){
           if(this.radius < 100){
        this.radius +=2
        }
     }
      // if it is outside of the mouse it will shrink to 5px
      else if (this.radius > this.minRadius){
        this.radius -=1
      }

      // var gravity = .8
      // var friction = .99
      //
      // if(this.y + this.radius > canvas.height){
      //  this.dy = -this.dy * friction
      //  }else{
      //  this.dy += gravity
      // }
      // this.y += this.dy

      this.draw()

    }
  }

  let circleArray = []


//Create circles based on how long you hold the mouse down
  let timer = 0
  $('#canvas').mousedown(function () {
    timer = new Date()
  }).mouseup(function () {
      let timePassed = (new Date () - timer)/10
      if(timePassed > 100){
        timePassed = 100}
        console.log(timePassed);
      var radius = timePassed
      timer = 0
      var x = event.x
      var y = event.y
      var dx = (Math.random()-0.5) *10
      var dy = (Math.random()-0.5) *10
      circleArray.push(new Circle(x, y, dx, dy, radius))
  });

//Create random sized circles with each click
  // canvas.addEventListener("mouseup",function(event){
  //
  //   var radius = Math.random()*50
  //   var x = event.x
  //   var y = event.y
  //   var dx = (Math.random()-0.5) *10
  //   var dy = (Math.random()-0.5) *10
  //   circleArray.push(new Circle(x, y, dx, dy, radius))
  // })

//create set amounts of random circles
  //  for (var i = 0; i < 100; i++){
  //    var radius = Math.random()*50
  //    var x = Math.random()*(innerWidth - radius*2) + radius
  //    var y = Math.random()*(innerHeight - radius*2) + radius
  //    var dx = (Math.random()-0.5) *10
  //    var dy = (Math.random()-0.5) *10
  //    circleArray.push(new Circle(x, y, dx, dy, radius))
  //  }
   //


//Start the animations
    function animate(){
      requestAnimationFrame(animate)
      c.clearRect(0,0,innerWidth,innerHeight)
      for (var i = 0; i < circleArray.length; i++){
        circleArray[i].update()
    }
  }

    animate()



//gravity inside the update function
//var gravity = 1
//var friction = .95

// if(this.y + this.radius > canvas.height){
//  multiplying it with friction will slow after evert bounce
//  this.dy = -this.dy * friction
//  }else{
//  this.dy += gravity
//}
//this.y += this.dy

// var x = Math.random()*innerWidth
// var y = Math.random()*innerHeight
// var dx = (Math.random()-0.5) *10 //standard acroynym for x velocity. //velocity = rate of movement in a particular direction. moving in the y direction at 1 px per refresh
// var dy = (Math.random()-0.5) *10 //-.5 will give the random number a range of -.5 - .5
// var radius = 30
// function animate(){     //create a function. animation works by refreshing each page continously, creating an illusion of movement.
//   requestAnimationFrame(animate)  //requestAnimationFrame will take in the function as an argument. This will create a loop
//    c.clearRect(0,0,innerWidth,innerHeight) //this will clear the page after each loop. make it look like the circle is moving
//   c.beginPath()
//   c.arc(x,y,radius,0,Math.PI*2,false)
//   c.strokeStyle = "blue"
//   c.stroke()
//   if (x + radius > innerWidth || x - radius < 0){ //the center is bouncing off the screen. subtract the radius to let the edge bounce off.
//     dx = -dx
//   }
//   if (y + radius > innerHeight || y - radius < 0){ //the center is bouncing off the screen. subtract the radius to let the edge bounce off.
//     dy = -dy
//   }
//   x += dx  //m
//   y += dy
// }

  // animate()
