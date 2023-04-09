//variables


let openBtn = document.getElementById("open-btn");
let modalContainer = document.getElementById("modal-container");
let closeBtn = document.getElementById("close-btn");


//EventListeners

openBtn.addEventListener('click', function(){
     modalContainer.style.display = "block";
});

closeBtn.addEventListener('click', function(){
    modalContainer.style.display = "none";
});

// To click anywhere on the screen and make the modalContainer disappear

window.addEventListener('click',function(e){
    if(e.target === modalContainer){
        modalContainer.style.display = "none";
    }
});