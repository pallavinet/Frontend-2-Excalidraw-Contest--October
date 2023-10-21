// const tool1=document.getElementsByClassName("tool1");
// tool1.onclick=function(){
//     console.log("sdfghj");
// }

// tool1.addEventListener("click", myScript);

// function myScript(){
//     console.log("sdfghj");
// }

const canvas=document.querySelector("canvas"),
tools=document.querySelectorAll(".tool"),
ctx=canvas.getContext("2d");

let prevMouseX, prevMouseY,
 isdrawing=false,
selectedTool="brush";

window.addEventListener("load",()=>{
    canvas.width=canvas.offsetWidth;
    canvas.height=canvas.offsetHeight;
})

const draw=(e)=>{
    // ctx.strokeRect(e.offsetX,e.offsetY)
}

const startDraw=()=>{
    isdrawing=true;
    prevMouseX=e.offsetX;
    prevMouseY=e.offsetY;
    ctx.beginPath();
    // ctx.lineWidth = brushWidth;
}
const drawing=(e)=>{
    if(!isdrawing)return;
    if(selectedTool==="brush"){
        ctx.lineTo(e.offsetX, e.offsetY, prevMouseX-e.offsetX,prevMouseY-e.offsetY);
        ctx.stroke();
    }else if(selectedTool==="rectangle"){
        draw(e);
    }
   
}

tools.forEach(btn=>{
    btn.addEventListener("click",()=>{
        
        console.log(btn.id);
    })
})
canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mouseup", ()=>isdrawing=false);