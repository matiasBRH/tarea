let segundosT=0
let minutosT=0
// let horas=0

function actualizarTemp(){    
    segundosT=('0'+segundosT).slice(-2)
    minutosT=('0'+minutosT).slice(-2)
    // horas=('0'+horas).slice(-2)
    document.getElementById("temporizador").innerHTML=`${minutosT}:${segundosT}`
}

const handleSubmit = function (e) {
    e.preventDefault();
    if (segundosT==0 && minutosT==0){
    segundosT = document.getElementById("segundos").value | 0;
    minutosT = document.getElementById("minutos").value | 0;
    }
    document.getElementById("iniciarTemp").disabled = true;
    document.getElementById("pausarT").disabled = false;
    document.getElementById("resetT").disabled = false;
    document.getElementById("formulario").reset()
    actualizarTemp()
    tempStart()
};


let timer

function tempStart(){
    timer=setInterval(function(){
        if (segundosT==0 && minutosT==0){
            tempReset()
            return alert("Fin del temporizador")
        }
        segundosT--
        if (segundosT<0){
            segundosT=59
            minutosT--
        }

        actualizarTemp()
    },1000)
}

const tempPause = function(){
        clearInterval(timer)
        actualizarTemp()
        document.getElementById("iniciarTemp").disabled = false;
    
   
}

const tempReset = function(){   
    document.getElementById("formulario").reset() 
    clearInterval(timer)
     segundosT=0
     minutosT=0
     actualizarTemp()
     document.getElementById("iniciarTemp").disabled = false;
     document.getElementById("pausarT").disabled = true;
    document.getElementById("resetT").disabled = true;
}

document.getElementById("formulario").addEventListener("submit", handleSubmit);
document.getElementById("pausarT").addEventListener("click", tempPause)
document.getElementById("resetT").addEventListener("click", tempReset)

actualizarTemp()

