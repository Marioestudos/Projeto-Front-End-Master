const canvasE1 = document.querySelector("canvas"),
canvasCtx = canvasE1.getContext("2d");
const linecernter = 15
// fuctions for elemet canavas 
function setup()
    {
        canvasE1.width = window.innerWidth;
        canvasCtx.width = window.innerWidth;

        canvasE1.height = window.innerHeight ;
        canvasCtx.height = window.innerHeight ;

    }
function draw()
{
    canvasCtx.fillStyle = "#286047"
    canvasCtx.fillRect(0,0 ,window.innerWidth, window.innerHeight)
    // line center
    canvasCtx.fillStyle ="#fff"
    const x = window.innerWidth /2 -linecernter /2;
    const y = 0;
    const w = linecernter;
    const h = window.innerHeight;
    canvasCtx.fillRect(x,y, w, h)

    // left recket drawing
    canvasCtx.fillRect(10,300,linecernter,200)
    //rigth racket drawing
    canvasCtx.fillRect( window.innerWidth -linecernter - 10,150,linecernter,200)
}
setup()
draw();