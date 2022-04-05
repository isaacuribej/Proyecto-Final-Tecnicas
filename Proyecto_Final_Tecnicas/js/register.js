

let nuevoUsuario;
let baseDatos = {};//soft base de datos 
var Swal = require('sweetalert2');


function registroPersonas() {
  nam = document.getElementById("name").value;
  edad = document.getElementById("edad").value;
  cc = document.getElementById("cc").value;
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;
  estadoCivil = document.getElementById("estadocivil").value;
  estadoEconomico = document.getElementById("cituasioneconomica").value;
  con_password = document.getElementById("con-password").value;
  
  // las funciones validan los parametros que se les entregan del registro de personas y les asignan un puntaje en base a estas
  
  function validarEdad(f) {
    number = 0;
    if (f <= 35) {
      return number = 5;
    } else {
      return number = 2;
    }
  }
  
  function validarCivil(f) {
    number = 0;
    if (f == 1) {
      return number = 5;
    } else {
      return number = 2;
    }
  }

  function validarOcupacion(f) {
    number = 0;
    if (f == 1) {
      return number = 1;
    } else {
      return number = 5;
    }
  }
  uno = validarCivil(estadoCivil);
  dos = validarEdad(edad);
  tres = validarOcupacion(estadoEconomico);
  puntaje = uno + dos + tres;

  nuevoUsuario = new Persona(nam, email, edad, cc, estadoCivil, estadoEconomico, password, puntaje);

  

  if ((email!=null || email!="")&& !(email in baseDatos)){
    baseDatos[email] = nuevoUsuario
  }
  


  else{Swal.fire({
    title: 'ERROR',
    text: 'Este usuario ya esta registrado.',
    icon: 'error',
    confirmButtonText: 'Continuar'
  })

  }


  console.log(nuevoUsuario)



}

//La funcion comprueba los datos de la parte de solicitud de creditos de la base de datos, comprueba si el email, contraseña introducidos
//coinside con algun registro de la base de datos en el cual las llaves son el correo y las llaves son de tipo Objeto Persona  

function comprobar(){
  usuario = document.getElementById("usuario").value;
  contrasena = document.getElementById("contrasena").value;
  user = baseDatos[usuario]
  if (usuario in baseDatos){
      if (contrasena == user.password){
        if(user.puntaje >= 8 ){
          Swal.fire({
            title: 'FELICIDADES',
            text: "Su solicitud de credito ha sido aceptada y sera procesada \n por nuestra entidad bancaria.",
            icon: 'success',
            confirmButtonText: 'Continuar'
          })
        }else{
          Swal.fire({
            title: 'LO SENTIMOS',
            text: 'Su solicitud de credito fue denagada.',
            icon: 'error',
            confirmButtonText: 'Continuar'
          })
        }
      }else{
        Swal.fire({
          title: 'ERROR',
          text: 'Contraseña no valida.',
          icon: 'warning',
          confirmButtonText: 'Continuar'
        })
      }
  }else{
    Swal.fire({
      title: 'ERROR',
      text: 'Usuario no encontrado o no registrado',
      icon: 'warning',
      confirmButtonText: 'Continuar'
    })
  }
}