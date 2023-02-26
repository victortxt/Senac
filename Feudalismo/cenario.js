let largura = 0
let altura = 0
let vidas = 1
let tempo = 25

let cronometro = setInterval(() =>{
    let outputTime = document.querySelector('#outputTime');
    outputTime.innerHTML = (tempo)
    if(tempo === 0){
        window.location.href = 'vitoria.html'
    }
    tempo--
}, 1000)
function redimensionarTela(){
    largura = window.innerWidth
    altura = window.innerHeight
    console.log(largura, altura)
}
redimensionarTela();

function dropAletorio(){  
    if(document.querySelector('#ifig')){
        document.querySelector('#ifig').remove()
        if(vidas > 3){
            window.location.href = 'gameover.html'
        }
        document.querySelector('#v' + vidas).src = 'images/coracao_vazio.png'
        vidas++
    }
    let positionX = Math.floor(Math.random() * largura) - 20;
    let positionY = Math.floor(Math.random() * altura) - 20;
    (positionX - 250) <= (largura - 250) ? true : false 
    switch(positionX){
        case true:
            positionX - 150
            break
    }

    (positionY - 250) <= (largura - 250) ? true : false
    switch(positionY){
        case true:
            positionY - 150
            break
    }
    console.log(positionX, positionY);
    let fig = document.createElement('img')
    fig.src = figurasAleatorias()
    fig.className = estilosFigAleatorio()
    fig.style.position = 'absolute'
    fig.style.left = positionX + 'px'
    fig.style.top = positionY + 'px'
    fig.id = 'ifig'
    fig.onmouseenter = function(){
        this.remove()
    }
    document.body.appendChild(fig)
    
}
dropAletorio();

function estilosFigAleatorio(){
    let classes = Math.floor(Math.random() * 3);
    switch(classes){
        case 0:
           return 'versaoFig1'
        case 1:
            return 'versaoFig2'
        case 2:
            return 'versaoFig3'
    }
}
console.log(estilosFigAleatorio())

function figurasAleatorias(){
    let figAleatoria = Math.floor(Math.random() * 3);
    switch(figAleatoria){
        case 0:
            return 'images/campones.png'
        case 1:
            return 'images/Rei.png'
        case 2:
            return 'images/Padre.png'
    }
    console.log(figAleatoria)
}

figurasAleatorias();

