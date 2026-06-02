function animationtext() {
//função animação para título e texto no section
function ativadorLetra(elemento, velocidade){
    return new Promise((resolve) => {
        elemento.style.visibility = 'visible'
  const arrTexto = elemento.textContent.split('');
    elemento.textContent = '';

    arrTexto.forEach((letra, i)=> {
        setTimeout(()=> {
            elemento.textContent += letra;
            //Quando terminar a última letra
            if(i === arrTexto.length - 1){
                resolve();
            }
        }, velocidade * i);
    });
})
}
  
//variáveis
const titulo = document.querySelector('.digitando');
const texto = document.querySelector('.digitando2');
const botao = document.querySelector('.btn');

//sincronizando animação
async function iniciarAnimacao() {
    await ativadorLetra(titulo, 75);
    await ativadorLetra(texto, 35);

//animação botão 'download cv'
    botao.style.opacity = '1';
    botao.style.tranform = 'translateY(0)';
}

//ativando animação
iniciarAnimacao()
}
animationtext();


function menuResp() {
//método menu responsivo
const ativaMenu = document.querySelector('.fa-bars');
const navMenu = document.querySelector('header .navegacao-primaria')

ativaMenu.addEventListener('click',()=> {
    ativaMenu.classList.toggle('fa-x')
    navMenu.classList.toggle('ativado')
})
}
menuResp();


function aboutme() {
//cursos e formações
//variáveis
const divEducation1 = document.querySelectorAll('.education_content div');
const liEducation1 = document.querySelectorAll('.education_content ul li');
const divEducation2 = document.querySelectorAll('.education_content2 div');
const liEducation2 = document.querySelectorAll('.education_content2 ul li');

divEducation1[0].classList.add('ativo')
divEducation2[0].classList.add('ativo')
liEducation1[0].classList.add('ativo')
liEducation2[0].classList.add('ativo')

function slideShow(index) {
    divEducation1.forEach((divisao)=>{
        divisao.classList.remove('ativo');
    });
    liEducation1.forEach((botao) => {
        botao.classList.remove('ativo');
    });
    divEducation1[index].classList.add('ativo');
    liEducation1[index].classList.add('ativo');
}

function slideShow2(index) {
    divEducation2.forEach((div) => {
        div.classList.remove('ativo');
    })
    liEducation2.forEach((botao) => {
        botao.classList.remove('ativo');
    })
    divEducation2[index].classList.add('ativo');
    liEducation2[index].classList.add('ativo');
}

liEducation1.forEach((event, index) => {
    event.addEventListener('click', ()=> {
        slideShow(index)
    });
});


liEducation2.forEach((event, index) => {
    event.addEventListener('click', ()=> {
        slideShow2(index)
    });
});
}
aboutme();


function buttonsproj() {
//botões my projects
const listaALL = document.querySelectorAll('.projects_armazenamento ul li');
const buttonGeral = document.querySelectorAll('.projects_models ul li');
const buttonALL = document.querySelector('.projects_models .all');

listaALL.forEach((item)=>{
    item.classList.add('ativo');
})

function removeClick(index){
    buttonGeral.forEach((item)=>{
        item.classList.remove('ativo');
    })
    buttonGeral[index].classList.add('ativo')
}

buttonGeral.forEach((event,index)=>{
    event.addEventListener('click', ()=>{
        removeClick(index)
    })
})

function showLista(lista, buttom = "all"){
    lista.forEach((item)=>{
        item.classList.remove('ativo');
    })
    if(buttom == 'game'){
        lista[0].classList.add('ativo');
        lista[1].classList.add('ativo');
    }
    
    if(buttom == 'other'){
        lista[2].classList.add('ativo');
        lista[3].classList.add('ativo');
    }

    if(buttom == 'website'){
        lista[4].classList.add('ativo');
        lista[5].classList.add('ativo');
        lista[6].classList.add('ativo');
        lista[7].classList.add('ativo');
    }

    if(buttom == 'all'){
        lista[0].classList.add('ativo');
        lista[1].classList.add('ativo');
        lista[2].classList.add('ativo');
        lista[3].classList.add('ativo');
        lista[4].classList.add('ativo');
        lista[5].classList.add('ativo');
        lista[6].classList.add('ativo');
        lista[7].classList.add('ativo');
    }
}
buttonGeral.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        let currentButton = e.target;
        if(currentButton.classList.contains('all')){
            showLista(listaALL);
        } 
        
        if(currentButton.classList.contains('game')){
            showLista(listaALL, "game");
        }

        if(currentButton.classList.contains('other')){
            showLista(listaALL, "other");
        }

        if(currentButton.classList.contains('website')){
            showLista(listaALL, "website");
        }

        if(currentButton.classList.contains('all')){
            showLista(listaALL, "all");
        }
    });
});
}
buttonsproj();


function TypeWritterEff() {
//footer typewritter effect animation
const target = document.querySelector(".footer_comercial")
const footerText = target.textContent;

target.textContent = "";

let index = 0;
let started = false;

function typeEffect() {
    if (index < footerText.length) {
        target.innerHTML += footerText.charAt(index);

        index++

        setTimeout(typeEffect, 50);
    }
}
window.addEventListener("scroll", ()=> {
    const footer = document.querySelector("footer");
    const footerPosition = footer.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (footerPosition < screenPosition && !started) {
        started = true;
        typeEffect();
    }
})
}
TypeWritterEff();