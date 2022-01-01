/** =========================================================================
 ** CAPTURA DA POSIÇÃO DO MOUSE NA TELA
 ** ========================================================================*/
var latitude = document.querySelector('#latitude');
var longitude = document.querySelector('#longitude');

document.querySelector('.container').addEventListener('mousemove', function(event){
    latitude.innerHTML = event.clientX * 1245;
    longitude.innerHTML = event.clientY * 1245;
});

/** =========================================================================
 ** CAPTURA DOS BOTÕES
 ** ========================================================================*/
const btnAjuda = document.querySelector('#btnAjuda');               //0
const btnApp = document.querySelector('#btnApp');                   //1
const btnLogin = document.querySelector('#btnLogin');               //2
const btnBuscar = document.querySelector('#btnBuscar');             //3
const btnLocal = document.querySelector('#btnLocal');               //4
const btnMapa = document.querySelector('#btnMapa');                 //5
const btnRelatorio = document.querySelector('#btnRelatorio');       //6
const btnSatelite = document.querySelector('#btnSatelite');         //7
const btnCompare = document.querySelector('#btnCompare');           //8
const btnEdicao = document.querySelector('#btnEdicao');             //9
const btnSpectral = document.querySelector('#btnSpectral');         //10
const btnHistorico = document.querySelector('#btnHistorico');       //11
const btnAjustes = document.querySelector('#btnAjustes');           //12

const objMenu = document.querySelectorAll('.btnMenu');


// var i = 0;

// objMenu.forEach(function(elementos){

//     if(i <= objBalao.length){
//         i++
//     } else {
//         i = 0;
//     }

//     elementos.addEventListener('mouseover', function(){
        
//         console.log(`Posição ${i}`);
//     });

// });

/** =========================================================================
 ** CAPTURA DOS BALÕES DO MENU - OCULTAÇÃO DOS BALÕES AO RODAR A PÁGINA
 ** ========================================================================*/
 const objBalao = document.querySelectorAll('[data-balao]');

 objBalao.forEach(function(elementos){
    console.log(elementos);
    elementos.classList.add('ocultar');

});

/** =========================================================================
 ** EVENTOS DOS BOTÕES
 ** ========================================================================*/
btnAjuda.addEventListener('mouseover', function(){
    objBalao[0].classList.remove('ocultar');
});

btnAjuda.addEventListener('mouseout', function(){
    objBalao[0].classList.add('ocultar');
});


// btnApp ==>
btnApp.addEventListener('mouseover', function(){
    objBalao[1].classList.remove('ocultar');
});

btnApp.addEventListener('mouseout', function(){
    objBalao[1].classList.add('ocultar');
});


// btnLogin ==>
btnLogin.addEventListener('mouseover', function(){
    objBalao[2].classList.remove('ocultar');
});

btnLogin.addEventListener('mouseout', function(){
    objBalao[2].classList.add('ocultar');
});

// btnBuscar ==>
btnBuscar.addEventListener('mouseover', function(){
    objBalao[3].classList.remove('ocultar');
});

btnBuscar.addEventListener('mouseout', function(){
    objBalao[3].classList.add('ocultar');
});

// btnLocal ==>
btnLocal.addEventListener('mouseover', function(){
    objBalao[4].classList.remove('ocultar');
});

btnLocal.addEventListener('mouseout', function(){
    objBalao[4].classList.add('ocultar');
});

// btnMapa ==>
btnMapa.addEventListener('mouseover', function(){
    objBalao[5].classList.remove('ocultar');
});

btnMapa.addEventListener('mouseout', function(){
    objBalao[5].classList.add('ocultar');
});

// btnRelatorio ==>
btnRelatorio.addEventListener('mouseover', function(){
    objBalao[6].classList.remove('ocultar');
});

btnRelatorio.addEventListener('mouseout', function(){
    objBalao[6].classList.add('ocultar');
});

// btnSatelite ==>
btnSatelite.addEventListener('mouseover', function(){
    objBalao[7].classList.remove('ocultar');
});

btnSatelite.addEventListener('mouseout', function(){
    objBalao[7].classList.add('ocultar');
});

// btnCompare ==>
btnCompare.addEventListener('mouseover', function(){
    objBalao[8].classList.remove('ocultar');
});

btnCompare.addEventListener('mouseout', function(){
    objBalao[8].classList.add('ocultar');
});

// btnEdicao ==>
btnEdicao.addEventListener('mouseover', function(){
    objBalao[9].classList.remove('ocultar');
});

btnEdicao.addEventListener('mouseout', function(){
    objBalao[9].classList.add('ocultar');
});

// btnEspectral ==>
btnSpectral.addEventListener('mouseover', function(){
    objBalao[10].classList.remove('ocultar');
});

btnSpectral.addEventListener('mouseout', function(){
    objBalao[10].classList.add('ocultar');
});

// btnHistorico ==>
btnHistorico.addEventListener('mouseover', function(){
    objBalao[11].classList.remove('ocultar');
});

btnHistorico.addEventListener('mouseout', function(){
    objBalao[11].classList.add('ocultar');
});

// btnAjustes ==>
btnAjustes.addEventListener('mouseover', function(){
    objBalao[12].classList.remove('ocultar');
});

btnAjustes.addEventListener('mouseout', function(){
    objBalao[12].classList.add('ocultar');
});

