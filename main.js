//Cambiando texto en "Sobre mi"
document.getElementById("Label1").style.display='none';
document.getElementById("Label2").style.display='none';
document.getElementById("Label3").style.display='none';
let inputGet = document.querySelector('#input-get');
let result = document.querySelector('#result');
//var estudios = JSON.parse("Datos/Estudios");

inputGet.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    result.innerText = inputGet.value;
  }
    

});



function displayJson(){
  return estudios;
}


var pN = 0;
var newDiv = "";
function createP(){
  if (inputGet.value === "")
  {
    alert("Please enter")
  }
  else{
    
    const newP = document.createElement("p");
    pN = pN+1;
    const TextP = document.createTextNode(inputGet.value +pN);
    newP.appendChild(TextP);
    const Padre = document.getElementById("1");
    Padre.appendChild(newP);
    inputGet.value= ""
  }
}
function deleteP(){

}

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
var a=0;
function show_hide1(){
  
  if (a==1){
    document.getElementById("Label1").style.display='none';
    document.getElementById("BTNADD").style.display='none';
    return a=0;
  }
  else {
    document.getElementById("Label1").style.display='block';
    document.getElementById("BTNADD").style.display='block';
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






var n=0;
//SobreMi
var SobreMi = [{"Index": "1",
"Info": "Tecnico superior en creacion de software"}
,

{"Index": "2",
"Info": "Programador Unity "},

{"Index": "3",
 "Info": "Salsacate Cordoba Argentina"

}]
//agregar

function AgregarTextoArray(){
  if(inputGet.value !==""){
    SobreMi.push({Index: +n, Info: "" +inputGet.value}); 
  }
  else{

  }
  console.log("")
}
//Mostrar
AgregarTextoArray(SobreMi)


function MostrarTextoArray(data){

 var div= document.getElementById('1')
 for(var i=0; i<data.length; i++){
   var P= `<p class="SobreMi">${data[i].Info}</p>`
   div.innerHTML += P
   n=n+1;
 }
}
MostrarTextoArray(SobreMi);


