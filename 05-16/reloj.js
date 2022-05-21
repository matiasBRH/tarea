function actualizarReloj(){
  let dia = new Date().getDate()
  let diaNombre = new Intl.DateTimeFormat('es-ES', { weekday: 'long'}).format(new Date())
  let diaNombreMayus = diaNombre.charAt(0).toUpperCase()+diaNombre.slice(1)
  let mes = new Intl.DateTimeFormat('es-ES', { month: 'long'}).format(new Date())
  let mesMayus = mes.charAt(0).toUpperCase()+mes.slice(1)
  let year = new Date().getFullYear()

  let hora24 = new Date().getHours();
  let ampm = (hora24 >= 12) ? "PM" : "AM";
  hora24 = hora24 % 12;
  hora24 = (hora24!=0) ? hora24 : 12
  hora24=('0'+hora24).slice(-2)
  let minutos = new Date().getMinutes()
  minutos=('0'+minutos).slice(-2)
  let segundos = new Date().getSeconds()
  segundos=('0'+segundos).slice(-2)
    document.getElementById('fecha').innerHTML=`${diaNombreMayus} ${dia} de ${mesMayus} del ${year}`
    document.getElementById('hora').innerHTML=`${hora24}:${minutos}:${segundos} ${ampm}`
}

let reloj
reloj=setInterval(function(){
    actualizarReloj()
},1000)

actualizarReloj()