//grabbing WCCI button and wiring it up

const wcciButton = document.getElementById("wcciButton");
const wcciBox = document.getElementById("wcciBox");

wcciButton.addEventListener("click", ()=>{
    if(wcciBox.style.display == 'block'){
        wcciBox.style.display = 'none';
    }
    else{
        wcciBox.style.display = 'block';
    }

})

//grabbing close x button and wwiring it up

const wcciCloseX = document.getElementById("wcciCloseX");

wcciCloseX.addEventListener("click", ()=> {
    if(wcciBox.style.display == 'none'){
        wcciBox.style.display = 'block';
    }
    else{
        wcciBox.style.display = 'none';
    }
} )

//grabbing OSU button and wiring it up

const osuButton = document.getElementById("osuButton");
const osuBox = document.getElementById("osuBox");

osuButton.addEventListener("click", ()=>{
    if(osuBox.style.display == 'block'){
        osuBox.style.display = 'none';
    }
    else{
        osuBox.style.display = 'block';
    }

})

//grabbing close x button and wwiring it up

const osuCloseX = document.getElementById("osuCloseX");

osuCloseX.addEventListener("click", ()=> {
    
    if(osuBox.style.display == 'block'){
        osuBox.style.display = 'none';
    }
    
    else{
        osuBox.style.display = 'block';
    }
} )

//making modal work

const modal = document.getElementById("modal");
const contact = document.getElementById("contact");
const modalClose = document.getElementById("modalClose");

contact.addEventListener("click", ()=>{
    modal.style.display = 'block';
})

modalClose.addEventListener("click", ()=>{
    modal.style.display = "none";
})

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}