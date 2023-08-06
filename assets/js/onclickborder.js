
let border=false
const image = document.getElementById("image");
image.onclick = imageClick;

function imageClick() {
    if (border){
        border=false
        image.style.border = "none";
    }
    else{
        border=true
        image.style.border = "2px solid red";
    }
}
