//Cambiando texto en "Sobre mi"
document.getElementById("Label1").style.display='none';
document.getElementById("Label2").style.display='none';
document.getElementById("Label3").style.display='none';
let inputGet = document.querySelector('#input-get');
let result = document.querySelector('#result');
inputGet.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    result.innerText = inputGet.value;
    document.getElementById("Label1").style.display="none";
  }
    
});
//Cambiando texto en Estudios:

let inputGet2 = document.querySelector('#input-get2');
let result2 = document.querySelector('#result2');

inputGet2.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    result2.innerText = inputGet2.value;
    document.getElementById("Label2").style.display="none";
  }
    
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

let inputGet3 = document.querySelector('#input-get3');
let result3 = document.querySelector('#result3');

inputGet3.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    result3.innerText = inputGet3.value;
    document.getElementById("Label3").style.display="none";
  }
    
});

var a;
function show_hide1(){
  
  if (a==1){
    document.getElementById("Label1").style.display='none';
    return a=0;
  }
  else {
    document.getElementById("Label1").style.display='block';
    return a=1;
  }
}
var b;
function show_hide2(){
  
  if (b==1){
    document.getElementById("Label2").style.display='none';
    return b=0;
  }
  else {
    document.getElementById("Label2").style.display='block';
    return b=1;
  }
}
var c;
function show_hide3(){
  
  if (c==1){
    document.getElementById("Label3").style.display='none';
    return c=0;
  }
  else {
    document.getElementById("Label3").style.display='block';
    return c=1;
  }
}