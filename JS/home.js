
// La fonction qui boucle chaque lettre et split les espaces
function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
// la vitesse de procession
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 90 * i)

  });
}
// querySelector du texte h1
const titulo = document.querySelector('h1');
typeWrite(titulo);


