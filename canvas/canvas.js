// create element Dom
const canvasE1 = document.querySelector("canvas"),
canvasCtx = canvasE1.getContext("2d");
// variables
const linecernter = 15
const gapx = 10
const field = {
    w: window.innerWidth,
    h:window.innerHeight,
    draw: function(){
        canvasCtx.fillStyle = "#286047"
        canvasCtx.fillRect(0,0 ,this.w, this.h)
    }
}
//object moause
const mouse = {x:0,y:0}
// object line
const line  = {
    w:15,
    h: field.h,
    draw: function(){
        canvasCtx.fillStyle ="#fff"
        canvasCtx.fillRect(field.w /2 - this.w /2,0,this.w,this.h)
    }
}
//object racket
const leftPddle = {
    x: gapx,
    y: 0,
    w:line.w,
    h:200,
    _move: function(){
        this.y = mouse.y - this.h /2
    },
    draw: function(){
        canvasCtx.fillStyle ="#fff"
        canvasCtx.fillRect(this.x,this.y,this.w,this.h)
        this._move()
    }
}
const rightPddle = {
    x: field.w -line.w- gapx,
    y: 100,
    w:line.w,
    h:200,
    _move: function(){
        this.y = boll.y
    },
    draw: function(){
        canvasCtx.fillStyle ="#fff"
        canvasCtx.fillRect(this.x,this.y,this.w,this.h)
        this._move()
    }
}
// object score
const score ={
    human:1,
    computer:2,
    draw: function(){
        canvasCtx.font = "bold 72px Arial"
        canvasCtx.textAlign = "center"
        canvasCtx.fillStyle ="#01341D"
        canvasCtx.fillText(this.human,field.w /4 ,100)
        canvasCtx.fillText(this.computer,field.w /4 + window.innerWidth /2 ,100)
    }
}
// object bool
const boll = {
    x:0,
    y:0,
    r:20,
    speed:5,
    directionX:1,
    directionY:1,
    _calcposition:function(){
        if(
            (this.y - this.r < 0 && this. directionY < 0) ||
            (this.y > field.h -this.r && this.directionY >0)
            )
            {
            this._reverseY()
        }
    },
    _reverseY: function(){
     this.directionY *= -1
    },
    _reverseX: function(){
     this.directionX *= -1
    },
    _move: function () {
        this.x += this.directionX * this.speed,
        this.y += this.directionY * this.speed
    },
    draw: function(){
        canvasCtx.fillStyle ="#fff"  ,
        canvasCtx.beginPath()
        canvasCtx.arc(this.x,this.y,this.r,0,2*Math.PI,false)
        canvasCtx.fill()
        this. _move()
        this._calcposition()
    }
}


// fuctions for elemet canavas 
function setup()
    {
        canvasE1.width =  canvasCtx.width = field.w;
        canvasE1.height =   canvasCtx.height = field.h;
      
    }
function draw()
{
    field.draw()
    // line center
    line.draw()

    // left recket drawing
   leftPddle.draw()
    //rigth racket drawing
    rightPddle.draw()
    // ball
    boll.draw()
    // drawing stage
   score.draw()
}

window.AnimateFramen = (
    function(){
        return(
            window.requestAnimationFrame ||
            window.webkiRequestAnimationFrame ||
            window.moz.requestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function(calback){
                window.setInterval(draw, 1000 / 60)
         } 
         )
    }
) ()
function main(){
    AnimateFramen(main)
    draw()
}
setup()
main()
canvasE1.addEventListener("mousemove",  function(e){
    mouse.x = e.pageX;
    mouse.y = e.pageY;
    
})