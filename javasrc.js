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

let prevMouseX, prevMouseY,snapshot,
 isdrawing=false,
selectedTool="brush";
 brushWidth = 5;

window.addEventListener("load",()=>{
    canvas.width=canvas.offsetWidth;
    canvas.height=canvas.offsetHeight;
})

const drawRect=(e)=>{
    ctx.strokeRect(e.offsetX,e.offsetY, prevMouseX-e.offsetX, prevMouseY-e.offsetY)
}

const startDraw=(e)=>{
    isdrawing=true;
    prevMouseX=e.offsetX;
    prevMouseY=e.offsetY;
    ctx.beginPath();
    ctx.lineWidth = brushWidth;
 snapshot = ctx.getImageData(0,0,canvas.width, canvas.height);
}
const drawing=(e)=>{
    if(!isdrawing)return;
 ctx.putImageData(snapshot, 0, 0);
    if(selectedTool==="brush"){
        ctx.lineTo(e.offsetX, e.offsetY, prevMouseX-e.offsetX,prevMouseY-e.offsetY);
        ctx.stroke();
    }else if(selectedTool==="rectangle"){
        drawRect(e);
    }
   
}

tools.forEach(btn=>{
    btn.addEventListener("click",()=>{
        document.querySelector(".options .active").classList.remove("active");
        btn.classList.add("active");
        selectedTool = btn.id;
        console.log(selectedTool);
    })
})
canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mouseup", ()=>isdrawing=false);
