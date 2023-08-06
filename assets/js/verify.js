document.getElementById("button").onclick = verify;
let a=0
function verify() {
    a=
    +parseInt(document.getElementById("q1").value || 0) 
    +parseInt(document.getElementById("q2").value || 0)
    +parseInt(document.getElementById("q3").value || 0)
    if(a>10)
        {
            document.getElementById("resultado").innerHTML 
            = "<p id='resultado'>Llevas más de 10 stickers!</p>"
        }
    else
        {
            document.getElementById("resultado").innerHTML 
            = "<p id='resultado'>Llevas " + a + " stickers</p>"
        }
}
