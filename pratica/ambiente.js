class resgatarDados{
    constructor(select, qnt){
        this.select = select
        this.qnt = qnt
    }    

    getValores(){
        console.log(this.select)
        switch(this.select){
            case '1':
                return 24 * this.qnt
            case '2':
                return  168 * this.qnt
            case '3':
                return 8760 * this.qnt
        }
    }

    validarValores(d){
        for(let i in d){
            let indice = Number(this[i])
            if(this[i] === "" || indice <= 0){
                return false
            }
        }
    }
}

function enviarDados(){
    let select = document.querySelector('#iselect');
    let qnt = document.querySelector('#iqnt');
    let output = document.querySelector('#output')
    
    let resgatar = new resgatarDados(select.value, qnt.value)
    


if(resgatar.validarValores(resgatar) === false){
        alert('ERRO: preencha o formulário corretamente !')
    }else{
        output.style.color = 'yellow'
        output.innerHTML =  (`Horas: ${resgatar.getValores()}h`)
    }

    

}