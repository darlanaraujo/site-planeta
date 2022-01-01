/** =========================================================================
 ** TELA DE LOGIN
 ** ========================================================================*/
const container = document.getElementById('container');
const menuFooter = document.querySelector('.menuFooter');
// Comando para ocultar o fundo ao iniciar o site
container.style.backgroundImage = 'none';
menuFooter.style.opacity = '0'

const boxLogin = document.querySelector('[data-boxMenu="login"]');
const campoEmail = document.querySelector('#email');
const campoSenha = document.querySelector('#senha');
const btnLogIn = document.querySelector('#btnLog-in');

btnLogIn.addEventListener('click', function(){
    let email = campoEmail.value;
    let senha = campoSenha.value;

    if(email && senha){
        
        if(email === "dplanet@geoinova.com.br" && senha === "Geodial@7799"){
            // console.log('Usuário Correto');
            boxLogin.classList.remove('mostrar');
            container.style.backgroundImage = 'url("../img/fundo-mapa.png")';
            menuFooter.style.opacity = '1'
        } else {
            alert('Usuário ou Senha invalida!');
        }

    } else {
        alert('Por favor, preencha todos os campos!');
    }
});

// Função para limpar a tela do formulário;
function limpaTela(){
    campoEmail.value = null;
    campoSenha.value = null;
}


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
 ** CAPTURA DO FUNDO
 ** ========================================================================*/
// const container = document.getElementById('#container');

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

const menuAjuda = document.querySelector('[data-menu="ajuda"]');
const menuApp = document.querySelector('[data-menu="app"]');
const menuLogin = document.querySelector('[data-menu="login"]');


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


/** =========================================================================
 ** EVENTO DO BALÃO AO PASSAR O MOUSE SOBRE OS MENUS
 ** ========================================================================*/
eventoBalao(btnAjuda, balaoAjuda);
eventoBalao(btnApp, balaoApp);
eventoBalao(btnLogin, balaoLogin);
eventoBalao(btnBuscar, balaoBuscar);
eventoBalao(btnLocal, balaoLocal);
eventoBalao(btnMapa, balaoMapa);
eventoBalao(btnRelatorio, balaoRelatorio);
eventoBalao(btnSatelite, balaoSatelite);
eventoBalao(btnCompare, balaoCompare);
eventoBalao(btnEdicao, balaoEdicao);
eventoBalao(btnSpectral, balaoSpectral);
eventoBalao(btnHistorico, balaoHistorico);
eventoBalao(btnAjustes, balaoAjustes);

function eventoBalao(btn, obj){
    btn.addEventListener('mouseover', function(){
        obj.classList.add('mostrar');
    });

    btn.addEventListener('mouseout', function(){
        obj.classList.remove('mostrar');
    });
};

// function eventosBotao(posicao, btn, obj, box){

//     btn.addEventListener('mouseover', function(){
//         obj.classList.add('mostrar');
//     });

//     btn.addEventListener('mouseout', function(){
//         obj.classList.remove('mostrar');
//     });

//     btn.addEventListener('click', function(){

//         if(statusBox == false){
//             statusBox = true

//             if(posicao === 'esquerdo'){
//                 containerEsquerdo.classList.add('mostrar');
//             } else if(posicao === 'direito'){
//                 containerDireito.classList.add('mostrar');
//             } else if(posicao === 'ajuda'){
//                 menuAjuda.classList.add('mostrar');
//             } else if(posicao === 'app'){
//                 menuApp.classList.add('mostrar');
//             } else if(posicao === 'login'){
//                 menuLogin.classList.add('mostrar');
//             }

//             box.classList.add('mostrar');
            
            
//         } else{
//             statusBox = false;
//             box.classList.remove('mostrar');
//             containerEsquerdo.classList.remove('mostrar');
//             containerDireito.classList.remove('mostrar');
//             menuAjuda.classList.remove('mostrar');
//         }
        
//     });
// };

/** =========================================================================
 ** EVENTO QUE CONTROLA O MENU SUSPENSO NO TOPO
 ** ========================================================================*/

let statusBox = false;

menuTopo(btnAjuda, menuAjuda);
menuTopo(btnApp, menuApp);
menuTopo(btnLogin, menuLogin);

function menuTopo(btn, menu){
    btn.addEventListener('click', function(){
        if(!statusBox){
            statusBox = true;
            menu.classList.add('mostrar');
        } else{
            statusBox = false;
            menu.classList.remove('mostrar');
        }
    });
}

document.querySelector('.container').addEventListener('click', function(){
    if(statusBox){
        menuAjuda.classList.remove('mostrar');
        menuApp.classList.remove('mostrar');
        menuLogin.classList.remove('mostrar');
        // containerEsquerdo.classList.remove('mostrar');
        // containerDireito.classList.remove('mostrar')

        statusBox = false;
    }
    
});

/** =========================================================================
 ** CAPTURA DOS BOX - BOX QUE SÃO EXIBIDOS AO CLICAR NO MENU
 ** ========================================================================*/
 const containerEsquerdo = document.querySelector('[data-container="esquerdo"]');
 const containerDireito = document.querySelector('[data-container="direito"]');
 
 // BOX QUE ABREM SOBRE O CONTAINER ESQUERDO --->
 const boxPesquisa = document.querySelector('[data-boxMenu="boxPesquisa"]');
 const boxLocal = document.querySelector('[data-boxMenu="boxLocal"]');
 const boxMapa = document.querySelector('[data-boxMenu="boxMapa"]');
 const boxRelatorio = document.querySelector('[data-boxMenu="boxRelatorio"]');
 const boxSatelite = document.querySelector('[data-boxMenu="satelite"]');
 const boxAjustes = document.querySelector('[data-boxMenu="boxAjustes"]');

// BOX QUE ABREM SOBRE O CONTAINER DIREITO --->
const boxEdicao = document.querySelector('[data-boxMenu="boxEdicao"]')
const boxSpectral = document.querySelector('[data-boxMenu="spectral"]');
const boxHistorico = document.querySelector('[data-boxMenu="historico"]');

//  console.log(boxPesquisa.id = 'item1');

/** =========================================================================
 ** EVENTO QUE CONTROLA O MENU ESQUERDO
 ** ========================================================================*/

eventosBotao('esquerdo', btnBuscar, boxPesquisa);
eventosBotao('esquerdo', btnLocal, boxLocal);
eventosBotao('esquerdo', btnMapa, boxMapa);
eventosBotao('esquerdo', btnRelatorio, boxRelatorio);
eventosBotao('meio', btnSatelite, boxSatelite);
eventosBotao('esquerdo', btnAjustes, boxAjustes);

eventosBotao('direito', btnEdicao, boxEdicao);
eventosBotao('meio', btnSpectral, boxSpectral);
eventosBotao('meio', btnHistorico, boxHistorico);

 function eventosBotao(posicao, btn, box){

    btn.addEventListener('click', function(){

        if(!statusBox){
            statusBox = true

            if(posicao === 'esquerdo'){
                containerEsquerdo.classList.add('mostrar');
            } else if(posicao === 'direito'){
                containerDireito.classList.add('mostrar');
            } else if(posicao === 'meio'){
                // container.style.backgroundColor = '#001f2386';
            }

            box.classList.add('mostrar');
            
            
            
        } else{
            statusBox = false;
            box.classList.remove('mostrar');
            containerEsquerdo.classList.remove('mostrar');
            containerDireito.classList.remove('mostrar');
            menuAjuda.classList.remove('mostrar');
        }
        
    });
};

/** =========================================================================
 ** COMANDOS QUE CONTROLAM OS MENUS DENTRO DOS BOXS
 ** ========================================================================*/

// Botões
const btnMinhasPastas = document.querySelector('#btnMinhasPastas');
const btnDadosDemo = document.querySelector('#btnDadosDemo');

// Corpo do conteúdo
const corpoMinhasPastas = document.querySelector('[data-corpoMapa="minhasPastas"]');
const corpoDadosDemo = document.querySelector('[data-corpoMapa="dadosDemo"]');



btnMinhasPastas.addEventListener('click', function(){
    corpoMinhasPastas.classList.add('mostrar');
    corpoDadosDemo.classList.remove('mostrar');

    

    // btnMinhasPastas.ariaSelected = true;
    // btnDadosDemo.ariaSelected = false;
    // btnDadosDemo.attributes.ariaSelected = 'false';
    // btnMinhasPastas.outerHTML = "<a id=\"btnMinhasPastas\" role=\"tab\" aria-selected=\"true\">Minhas Pastas</a>";
    // btnDadosDemo.outerHTML = "<a id=\"btnDadosDemo\" role=\"tab\" aria-selected=\"false\">Dados Demo</a>";
});

btnDadosDemo.addEventListener('click', function(){
    corpoDadosDemo.classList.add('mostrar');
    corpoMinhasPastas.classList.remove('mostrar');

    // console.log('licou no btnDadosDemo');

    // btnMinhasPastas.ariaSelected = 'false';
    // btnDadosDemo.ariaSelected = 'true';
    // btnDadosDemo.outerHTML = "<a id=\"btnDadosDemo\" role=\"tab\" aria-selected=\"true\">Dados Demo</a>";
    // btnMinhasPastas.outerHTML = "<a id=\"btnMinhasPastas\" role=\"tab\" aria-selected=\"false\">Minhas Pastas</a>";

});


/** =========================================================================
 ** FUNÇÃO QUE CONTROLA O EVENTO DO BOTÃO FECHAR / VOLTAR
 ** ========================================================================*/
let statusVoltar = false;

btnVoltar.addEventListener('click', function(){
    
    if(!statusVoltar){
        objBoxMenu.forEach(function(itens){
            statusFechar = false;
    
            itens.classList.remove('mostrar');
    
            containerEsquerdo.classList.remove('mostrar');
            containerDireito.classList.remove('mostrar');
        });
    } else{
        statusVoltar = true;
    }
    

});



btnFechar.addEventListener('click', function(){

    objBoxMenu.forEach(function(itens){
        statusBox = false;
        itens.classList.remove('mostrar');
        console.log(itens);
        containerEsquerdo.classList.remove('mostrar');
        containerDireito.classList.remove('mostrar');
    });

});

/** =========================================================================
 ** FUNÇÃO QUE CONTROLA O EVENTO DO BOTÃO SUB-MENU
 ** ========================================================================*/
const nav1_1 = document.querySelector('[data-subMenu="menu1"]');
const nav1_2 = document.querySelector('[data-subMenu="menu2"]');
const menu1 = document.querySelector('#menu1');
const menu2 = document.querySelector('#menu2');
let start = false;

menu1.addEventListener('click', function(){
    
    if(start === false){
        start = true;
        nav1_1.classList.add('mostrar');
    } else {
        start = false;
        nav1_1.classList.remove('mostrar');
    }
});

menu2.addEventListener('click', function(){
    
    if(start === false){
        start = true;
        nav1_2.classList.add('mostrar');
    } else {
        start = false;
        nav1_2.classList.remove('mostrar');
    }
});