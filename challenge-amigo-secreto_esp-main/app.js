// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []; //crear un array

function agregarAmigo() {
  let nombre =  document.getElementById ('amigo').value; //capturar el valor del campo de entrada

  if (nombre === '') { //validar la entrada
    alert('Por favor, ingrese un nombre válido'); 
    return;

  }
  amigos.push(nombre); //actualizar el array de amigos

  document.getElementById('amigo').value = ''; //limpiar el campo de entrada

  console.log('amigos: ' + amigos);

  // Actualizar la lista de amigos en la pantalla
    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpiar la lista antes de actualizarla

    for (let i = 0; i < amigos.length; i++) {
        let amigo = amigos[i];
        let nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = amigo;
        listaAmigos.appendChild(nuevoElemento);
    }
}


function sortearAmigo() { //validar que haya amigos disponibles

  if (amigos.length === 0) {
    alert('No hay amigos para sortear');
    return;
  }

  let indiceAleatorio = Math.floor(Math.random() * amigos.length); //generar un indice aleatorio

  let amigoSorteado = amigos[indiceAleatorio]; //obtener el nombre sorteado

  document.getElementById('resultado').innerHTML ='El amigo sorteado es: ' + amigoSorteado; //mostrar el resultado
}











