// criar o elemento

// colocar ele na pagina html


function elementoRandomico(){
    let condicao = Math.floor(Math.random() * 4) + 1;
    return condicao;
}

function adicionarArte(){
    let circulo = document.createElement('div')
    circulo.className = 'circulo' + elementoRandomico();
    document.body.appendChild(circulo);
    console.log('foi')
}



function diplomaArte(){
    let output = document.querySelector('#output');
    let txt = document.querySelector('#itxt').value
    if(txt === ''){
        alert('Insira algo')
    }else{
        output.innerHTML = (txt + ' Parabéns você realizou uma obra incrivel')
    }
}

