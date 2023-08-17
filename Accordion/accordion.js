const cbs = document.querySelectorAll(".content-box");
cbs.forEach((cb)=>{
    cb.addEventListener('click', () => {
        cb.classList.toggle('active');
    });
});
