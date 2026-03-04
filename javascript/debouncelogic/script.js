let id=null;
const searchInput=document.getElementById("searchInput");
const heading = document.querySelector(".container h1");
function debounceApp(event){
    clearTimeout(id);
    id=setTimeout(function(){
        heading.innerText = "Searching...";
    },1000)
}


searchInput.addEventListener("input", debounceApp); 