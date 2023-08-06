document.getElementById("button").onclick = pwcheck;
function pwcheck() {
    a=
    +document.getElementById("q1").value
    +document.getElementById("q2").value
    +document.getElementById("q3").value
    if(a==911)
        { 
            document.getElementById("result").innerHTML
            ="<p id='result'>password 1 correcto</p>"
        }
    else {
        if (a==714)
        {
            document.getElementById("result").innerHTML
            ="<p id='result'>password 2 correcto</p>"
        }
        else
        {
            document.getElementById("result").innerHTML
            ="<p id='result'>password incorrecto</p>"
        }
    }
    }

