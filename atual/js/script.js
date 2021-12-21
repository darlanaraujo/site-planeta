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
const btnVoltar = document.querySelector('#btnVoltar');
const btnFechar = document.querySelector('#btnFechar');


/** =========================================================================
 ** CAPTURA DOS OBJETOS - BTN, BALAO, BOX
 ** ========================================================================*/
const objMenu = document.querySelectorAll('.btnMenu');
const objBalao = document.querySelectorAll('[data-balao]');
const objBoxMenu = document.querySelectorAll('[data-boxMenu]');

/** =========================================================================
 ** CAPTURA DOS BALÕES DO MENU - OCULTAÇÃO DOS BALÕES AO RODAR A PÁGINA
 ** ========================================================================*/
 
const balaoAjuda = document.querySelector('#balaoAjuda');
const balaoApp = document.querySelector('#balaoApp');
const balaoLogin = document.querySelector('#balaoLogin');
const balaoBuscar = document.querySelector('#balaoBuscar');
const balaoLocal = document.querySelector('#balaoLocal');
const balaoMapa = document.querySelector('#balaoMapa');
const balaoRelatorio = document.querySelector('#balaoRelatorio');
const balaoSatelite = document.querySelector('#balaoSatelite');
const balaoCompare = document.querySelector('#balaoCompare');
const balaoEdicao = document.querySelector('#balaoEdicao');
const balaoSpectral = document.querySelector('#balaoSpectral');
const balaoHistorico = document.querySelector('#balaoHistorico');
const balaoAjustes = document.querySelector('#balaoAjustes');
const balaoVoltar = document.querySelector('#balaoVoltar');
const balaoFechar = document.querySelector('#balaoFechar');

console.log(balaoVoltar);

/** =========================================================================
 ** CAPTURA DOS BOX - BOX QUE SÃO EXIBIDOS AO CLICAR NO MENU
 ** ========================================================================*/
const boxRelatorio = document.querySelector('[data-boxMenu="boxEsquerdo"]');
const boxSatelite = document.querySelector('[data-boxMenu="satelite"]');



/** =========================================================================
 ** CHAMADA DA FUNÇÃO PASSANDO OS PARAMETROS DOS EVENTOS
 ** ========================================================================*/
eventosBotao(btnAjuda, balaoAjuda);
eventosBotao(btnApp, balaoApp);
eventosBotao(btnLogin, balaoLogin);
eventosBotao(btnBuscar, balaoBuscar);
eventosBotao(btnLocal, balaoLocal);
eventosBotao(btnMapa, balaoMapa);
eventosBotao(btnRelatorio, balaoRelatorio, boxRelatorio);
eventosBotao(btnSatelite, balaoSatelite, boxSatelite);
eventosBotao(btnCompare, balaoCompare);
eventosBotao(btnEdicao, balaoEdicao);
eventosBotao(btnSpectral, balaoSpectral);
eventosBotao(btnHistorico, balaoHistorico);
eventosBotao(btnAjustes, balaoAjustes);
eventosBotao(btnVoltar, balaoVoltar);
eventosBotao(btnFechar, balaoFechar);


/** =========================================================================
 ** FUNÇÃO QUE CONTROLA O EVENTO DO BOTÃO, BALÃO E BOX
 ** ========================================================================*/
function eventosBotao(btn, obj, box){

    var statusBox = false;

    btn.addEventListener('mouseover', function(){
        obj.classList.add('mostrar');
    });

    btn.addEventListener('mouseout', function(){
        obj.classList.remove('mostrar');
    });

    btn.addEventListener('click', function(){

        if(statusBox == false){
            statusBox = true
            box.classList.add('mostrar');
            
        } else{
            statusBox = false;
            box.classList.remove('mostrar');
        }
        
    });
};



/** =========================================================================
 ** FUNÇÃO QUE CONTROLA O EVENTO DO BOTÃO FECHAR / VOLTAR
 ** ========================================================================*/
btnVoltar.addEventListener('click', function(){

    objBoxMenu.forEach(function(itens){
        itens.classList.remove('mostrar');
    });

});


btnFechar.addEventListener('click', function(){

    objBoxMenu.forEach(function(itens){
        itens.classList.remove('mostrar');
    });

});



// Função que controle os eventos dos botões com os balões do menu;
// function btnEvento(btn, evento1, evento2, obj){
    
//     btn.addEventListener(evento1, function(){
//         obj.classList.add('mostrar');
//     });

//     btn.addEventListener(evento2, function(){
//         obj.classList.remove('mostrar');
//     });
// }

//  objBalao.forEach(function(elementos){
//     // console.log(elementos);
//     elementos.classList.add('ocultar');

// });

/** =========================================================================
 ** EVENTOS DOS BOTÕES
 ** ========================================================================*/

// btnEvento(btnAjuda, 'mouseover', objBalao[0]);

// btnAjuda.addEventListener('mouseover', function(){
//     objBalao[0].classList.remove('ocultar');
// });

// btnAjuda.addEventListener('mouseout', function(){
//     objBalao[0].classList.add('ocultar');
// });


// btnApp ==>
// btnApp.addEventListener('mouseover', function(){
//     objBalao[1].classList.remove('ocultar');
// });

// btnApp.addEventListener('mouseout', function(){
//     objBalao[1].classList.add('ocultar');
// });


// // btnLogin ==>
// btnLogin.addEventListener('mouseover', function(){
//     objBalao[2].classList.remove('ocultar');
// });

// btnLogin.addEventListener('mouseout', function(){
//     objBalao[2].classList.add('ocultar');
// });

// // btnBuscar ==>



// btnBuscar.addEventListener('mouseover', function(){
//     objBalao[3].classList.add('mostrar');
// });

// // btnBuscar.addEventListener('mouseout', function(){
// //     objBalao[3].classList.remove('mostrar');
// // });

// // btnLocal ==>
// btnLocal.addEventListener('mouseover', function(){
//     objBalao[4].classList.remove('ocultar');
// });

// btnLocal.addEventListener('mouseout', function(){
//     objBalao[4].classList.add('ocultar');
// });

// // btnMapa ==>
// btnMapa.addEventListener('mouseover', function(){
//     objBalao[5].classList.remove('ocultar');
// });

// btnMapa.addEventListener('mouseout', function(){
//     objBalao[5].classList.add('ocultar');
// });

// // btnRelatorio ==>
// btnRelatorio.addEventListener('mouseover', function(){
//     objBalao[6].classList.remove('ocultar');
// });

// btnRelatorio.addEventListener('mouseout', function(){
//     objBalao[6].classList.add('ocultar');
// });

// // btnSatelite ==>
// btnSatelite.addEventListener('mouseover', function(){
//     objBalao[7].classList.remove('ocultar');
// });

// btnSatelite.addEventListener('mouseout', function(){
//     objBalao[7].classList.add('ocultar');
// });

// // btnCompare ==>
// btnCompare.addEventListener('mouseover', function(){
//     objBalao[8].classList.remove('ocultar');
// });

// btnCompare.addEventListener('mouseout', function(){
//     objBalao[8].classList.add('ocultar');
// });

// // btnEdicao ==>
// btnEdicao.addEventListener('mouseover', function(){
//     objBalao[9].classList.remove('ocultar');
// });

// btnEdicao.addEventListener('mouseout', function(){
//     objBalao[9].classList.add('ocultar');
// });

// // btnEspectral ==>
// btnSpectral.addEventListener('mouseover', function(){
//     objBalao[10].classList.remove('ocultar');
// });

// btnSpectral.addEventListener('mouseout', function(){
//     objBalao[10].classList.add('ocultar');
// });

// // btnHistorico ==>
// btnHistorico.addEventListener('mouseover', function(){
//     objBalao[11].classList.remove('ocultar');
// });

// btnHistorico.addEventListener('mouseout', function(){
//     objBalao[11].classList.add('ocultar');
// });

// // btnAjustes ==>
// btnAjustes.addEventListener('mouseover', function(){
//     objBalao[12].classList.remove('ocultar');
// });

// btnAjustes.addEventListener('mouseout', function(){
//     objBalao[12].classList.add('ocultar');
// });



/** =========================================================================
 ** BOX MENU ESQUERDO - RELATÓRIO
 ** ========================================================================*/

// const objBoxMenu = document.querySelectorAll('[data-boxMenu]');


// const boxRelatorio = document.querySelector('[data-boxMenu="boxEsquerdo"]');
// const btnVoltar = document.querySelector('#btnVoltar');

// btnEvento(btnRelatorio, 'click', boxRelatorio);



// btnVoltar.addEventListener('click', function(){

//     objBoxMenu.forEach(function(itens){
//         itens.classList.remove('mostrar');
//     });

// });

/** =========================================================================
 ** BOX MENU MEIO - SATELITE
 ** ========================================================================*/






// btnEvento(btnSatelite, 'click', boxSatelite);


// Função que controla os eventos dos botões com os box do menu;
function btnEvento(btn, evento, obj){
    btn.addEventListener(evento, function(){

        if(statusBox == false){
            statusBox = true
            obj.classList.add('mostrar');
            
        } else{
            statusBox = false;
            obj.classList.remove('mostrar');
        }
        
    });
}




