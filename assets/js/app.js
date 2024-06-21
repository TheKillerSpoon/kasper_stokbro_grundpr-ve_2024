//Burger Menu
//adding a click event to the burger bars/x-mark
document.querySelector("#nav i").addEventListener("click", (e)=>{
    //toggles the active class on the ul 
    document.querySelector("#nav ul").classList.toggle("active")
    
    //switching the burger bars to the x-mark and reverse
    e.target.classList.toggle("fas")
    e.target.classList.toggle("fa-bars")
    e.target.classList.toggle("fa-solid")
    e.target.classList.toggle("fa-xmark")
})
