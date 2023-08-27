var cursor = document.querySelector('.cursor');
var cursor2 = document.querySelector('.cursor2');

document.addEventListener('mousemove',(e)=>{
    cursor.style.cssText = cursor2.style.cssText = "left: "+e.clientX+"px; top: "+e.clientY+"px;";
})

document.addEventListener('mousedown',()=>{
    cursor.classList.add("animate");
});

document.addEventListener('mouseup',()=>{
    cursor.classList.remove("animate");
});