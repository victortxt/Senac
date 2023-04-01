class resgistrarValores{
    constructor(nome, idade, local, data, horario, descricao){
        this.nome = nome
        this.idade = idade
        this.local = local
        this.data = data
        this.horario = horario
        this.descricao = descricao
    }

    verificarDados(){
        for(let i in this){
            console.log(this[i])
            if(this[i] === null || this[i] === undefined || this[i] === "" || this[i] === 0){
                return false
            }
        }
    }

    
 
}

class Armazenar{
    constructor(){  
        if(localStorage.getItem('id') === null){
            localStorage.setItem('id', 0)
        }
    }

    getValores(){
        let id = localStorage.getItem('id') //null
        return parseInt(id) + 1
    }

    registrarValores(d){
        let id = this.getValores() 
        localStorage.setItem(id, JSON.stringify(d))
        localStorage.setItem('id', id)
    }

    
}

let Bd = new Armazenar()


function enviarDenuncia(){
    let nome = document.querySelector('#nome')
    let idade = document.querySelector('#idade')
    let local = document.querySelector('#local')
    let data = document.querySelector('#data')
    let horario = document.querySelector('#horario')
    let descricao = document.querySelector('#descricao')


    let registrar = new resgistrarValores(nome.value, idade.value, local.value, data.value, horario.value, descricao.value)
    
    if(registrar.verificarDados() === false){
        alert('ERRO: preencha todos os campos corretamente !')
    }else{
        alert('Sua denuncia foi registrada !')
        Bd.registrarValores(registrar)
    }
}