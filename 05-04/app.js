//Crear un script que luego de 3 segundos muestre en el navegador la fecha del día.
const mostrarFecha = function(){
  setTimeout(function (){
  let dia = new Date().getDay()
  let diaNombre = new Intl.DateTimeFormat('es-ES', { weekday: 'long'}).format(new Date())
  let diaNombreMayus = diaNombre.charAt(0).toUpperCase()+diaNombre.slice(1)
  let mes = new Intl.DateTimeFormat('es-ES', { month: 'long'}).format(new Date())
  let mesMayus = mes.charAt(0).toUpperCase()+mes.slice(1)
  let year = new Date().getFullYear()
  document.getElementById('resultado').innerHTML = `Hoy es ${diaNombreMayus} ${dia} de ${mesMayus} del ${year}`
  }, 3000)
}

//Con 30 minutos de bicicleta puedes quemar 192 calorías. Crear un script que muestre en consola las calorías que vas quemando por segundo simulando que vas en bicicleta.
let bicicleta;
function mostrarCalorias(){
  let contador=0
  let calorias=0
  if (!bicicleta) {
    bicicleta=setInterval(function(){  
      calorias+=0.10666666666666666666666666666667  
      console.log(`Has quemado ${calorias.toFixed(2)} calorias en ${contador+=1} segundos`);      
    }, 1000)
  } else{
    console.log('La bicicleta ya esta funcionando!')
  }
 
}

//Crear el script que detendrá el script anterior cuando dejes de andar en bicicleta
const detenerBicicleta = function(){
  
  if (bicicleta==null) {
    console.log('La bicicleta no esta funcionando!')
        
  } else{
    clearInterval(bicicleta)
    bicicleta = null;
    console.log('La bicicleta se ha detenido')
    
  }
  
}