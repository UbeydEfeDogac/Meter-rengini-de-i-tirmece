function aztikla(incomId,incomNot){
    document.getElementById(incomNot).style.color='#aa1212'
    document.getElementById(incomId).value=document.getElementById(incomId).value-1;
    document.getElementById(incomNot).innerText=document.getElementById(incomId).value;
}

function coktikla(incomId,incomNot){
    document.getElementById(incomNot).style.color='#008000'
    document.getElementById(incomId).value=document.getElementById(incomId).value+1;
    document.getElementById(incomNot).innerText=document.getElementById(incomId).value;
}

function renkDegistir(inputId, meterId) {
    var renk = document.getElementById(inputId).value;
    document.getElementById(meterId).style.background = renk;
}