// create element Dom
const canvasE1 = document.querySelector("canvas"),
canvasCtx = canvasE1.getContext("2d");
// variables
const linecernter = 15
const field = {
    w: window.innerWidth,
    h:window.innerHeight,
    draw: function(){
        canvasCtx.fillStyle = "#286047"
        canvasCtx.fillRect(0,0 ,this.w, this.h)
    }
}
// object line
const line  = {
    w:15,
    h: field.h,
    draw: function(){
        canvasCtx.fillStyle ="#fff"
        canvasCtx.fillRect(window.innerWidth /2 -linecernter /2,0,linecernter,window.innerHeight)
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
    canvasCtx.fillRect(10,300,linecernter,200)
    //rigth racket drawing
    canvasCtx.fillRect( window.innerWidth -linecernter - 10,150,linecernter,200)
    // ball
    canvasCtx.beginPath()
    canvasCtx.arc(200,300,20,0,2*Math.PI,false)
    canvasCtx.fill()
    // drawing stage
    canvasCtx.font = "bold 72px Arial"
    canvasCtx.textAlign = "center"
    canvasCtx.fillStyle ="#01341D"
    canvasCtx.fillText("2",window.innerWidth /4 ,100)
    canvasCtx.fillText("1",window.innerWidth /4 + window.innerWidth /2 ,100)
}
setup()
draw();