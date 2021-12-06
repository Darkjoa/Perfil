//Cambiando texto en "Sobre mi"
let btnGet = document.querySelector('#btn-get');
let inputGet = document.querySelector('#input-get');
let result = document.querySelector('#result');
btnGet.addEventListener('click', () =>{
    result.innerText = inputGet.value;
});
//Cambiando texto en Estudios:
let btnGet2 = document.querySelector('#btn-get2');
let inputGet2 = document.querySelector('#input-get2');
let result2 = document.querySelector('#result2');

btnGet2.addEventListener('click', () =>{
    result2.innerText = inputGet2.value;
});

const image_input = document.querySelector("#image_input");
var uploaded_image;


//Cambiando Imagen de perfil
image_input.addEventListener('change', function() {
  const reader = new FileReader();
  reader.addEventListener('load', () => {
    uploaded_image = reader.result;
    document.querySelector("#Perfil").src = uploaded_image
  });
  reader.readAsDataURL(this.files[0]);
});

//Cambiando texto en Experiencia:
let btnGet3 = document.querySelector('#btn-get3');
let inputGet3 = document.querySelector('#input-get3');
let result3 = document.querySelector('#result3');

btnGet3.addEventListener('click', () =>{
    result3.innerText = inputGet3.value;
});