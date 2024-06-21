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


//Gallery
//making an object with the big image
let bigImg = document.querySelector("img.big-picture");
//making an array with all the small images
let smallImgs = document.querySelectorAll("img.small");
//looping the small images and giving them a click event
for(let index = 0; index < smallImgs.length; index++){
    smallImgs[index].addEventListener("click",(e)=>{
        //changing the big picture to the click small picture
        bigImg.src = e.target.src
        //removes active from the previous picture
        document.querySelector("img.active").classList.remove("active"); 
        //adding active to the clicked picture
        e.target.classList.add("active");
    });
}

//Contact form
//making an object of the form
let form = document.querySelector("form");
//making individual objects of the different inputs needed
let nameinput = document.querySelector("#name");
let emailinput = document.querySelector("#email");
let messageinput = document.querySelector("#message");
//putting all the inputs in to an array
let validRequrements = [nameinput, emailinput, messageinput]
//waiting for the submit button to be pressed
form.addEventListener("submit", (e)=>{
    //stopping the form to reset
    e.preventDefault();
    //making a boolean so if the form is completed it can send the imformation to the site owner
    let isValid = true;
    //looping all the array
    for(index = 0; index < validRequrements.length; index++){
        //checking if there is a empty input
        if(validRequrements[index].value.trim() === ""){
            //giving the empty input the missing class
            validRequrements[index].classList.add("missing")
            //making valid false
            isValid = false;
        }else{
            //if all the inputs is filled out it removes any missing classes from the inputs
            validRequrements[index].classList.remove("missing")
        }
    }
    //if all the inputs is filled out it submits
    if(isValid){
        form.submit();
    }
})