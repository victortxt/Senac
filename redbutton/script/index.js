// resgatar o valor do mapa
// resgatar o valor do select
// caso não resgate nenhum dos valores, criar um mensagem que nao foi registrado
//caso efetuado o resgate, imprirmir este dado na tela
//pegar estes dados e enviar os respectivos dados para armazenar os valores resgatados
//inserir os dados atualizados em outra página
    
    let r = null
    let c = null

    function resgatarValorMapa(regiao){
        r = regiao
            switch(r){
                case 'o':
                    return r = 'Zona Oeste'
                case 'no':
                    return r = 'Zona Nordeste'
                case 'c':
                    return r = 'Zona Central'
                case 'sd':
                    return r = 'Zona Sudeste'
                case 's':
                    return r = 'Zona Sul'
                case 'l':
                    return r = 'Zona leste' 
            }
    }

    function resgatarValorSelect(){
        let select = document.querySelector('#select').value;
        return select
    }

    r = resgatarValorMapa();
    

    function enviar(){
        let output = document.querySelector('#output');
        c = resgatarValorSelect()
        if(c === "0" || r === null || r === undefined){
            alert('ERRO')
        }else{
            alert(`O registro: ${r} / ocorrência: ${c}, foi cadastrada com sucesso !`)
            window.location.href = `http://localhost/redbutton/resgatarDados.php?local=${r}&ocorrência=${c}`
        }

        //
    }

    function menu(){
        //#menuNav
        let navigation = document.querySelector('#menuNav') 
        if(navigation.offsetWidth !== 200){
            navigation.style.display = 'block'
        }
    }

    function closeMenu(){
        let navigation = document.querySelector('#menuNav') 
        if(navigation.offsetWidth === 204){
            navigation.style.display = 'none'
        }
    }

    




