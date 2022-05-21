let centesimas=0
let segundos=0
let minutos=0

function actualizarCronometro(){
    centesimas=('0'+centesimas).slice(-2)
    segundos=('0'+segundos).slice(-2)
    minutos=('0'+minutos).slice(-2)
    document.getElementById("cronometro").innerHTML=`${minutos}:${segundos}:${centesimas}`
}

let cronometro

function cronometroStart(){
    cronometro=setInterval(function(){
        document.getElementById("iniciarC").disabled = true;
        centesimas++
        if (centesimas>99){
            centesimas=0
            segundos++
        }
        if (segundos==60){
            segundos=0
            minutos++
        }
        actualizarCronometro()
    },10)
}

const cronometroPause = function(){    
      clearInterval(cronometro)
      actualizarCronometro()
      document.getElementById("iniciarC").disabled = false;
}

const cronometroReset = function(){    
    clearInterval(cronometro)
     centesimas=0
     segundos=0
     minutos=0
     actualizarCronometro()
     document.getElementById("iniciarC").disabled = false;
}


actualizarCronometro()


document.getElementById("iniciarC").addEventListener("click", cronometroStart)
document.getElementById("pausarC").addEventListener("click", cronometroPause)
document.getElementById("resetC").addEventListener("click", cronometroReset)