let outputNarrar = document.querySelector('#outputNarrar');

function narrarAleatorio(){
    let condicao = Math.floor(Math.random() * 3)
    switch(condicao){
        case 0:
            return outputNarrar.innerHTML = ('Ele entra dentro da grande area e vai fazer o GOL !?');
             
        case 1:
            return outputNarrar.innerHTML = ('Cobrança de falta e ele vai em direção a bola...');
             
        case 2:
            return outputNarrar.innerHTML = ('Driblou um, dois, três e vai chutar...');
            
    }
}
narrarAleatorio();
// tudo OK
let card0Condicao = 0
let card1Condicao = 0
let card2Condicao = 0
let tempo = 9000
let cliqueBola = function (){
    narrarAleatorio();
    let opt = Math.floor(Math.random() * 4)
    console.log(opt + 'opt')
    card0Condicao = card0Condicao
    card1Condicao = card1Condicao
    card2Condicao = card2Condicao
    console.log(card0Condicao + ' Começo')
            if(card0Condicao === 0 && opt === 0){
                let card0 = document.createElement('div');
                card0.className = 'card';
                card0.innerHTML = '<h1>Curiosidade <h1>pelé é o melhor jogador de futebol no mundo <br><br> Você marcou um gol e foi recompensado com um curiosidade do futebol';
                document.body.appendChild(card0);
                card0.id = 'icard0';

                if(document.querySelector('#icard0')){
                    setInterval(function(){
                        card0.style.display = 'none';
                },tempo);

                card0Condicao++
        }}else if(card1Condicao === 0 && opt === 1){
            let card1 = document.createElement('div');
            card1.className = 'card';
            card1.innerHTML = '<h1>Origem <h1> Surgido como uma comemoração inglesa pós-guerra, o futebol chegou ao Brasil, no final do século XIX, através de Charles Miller, um jovem filho de ingleses. <br><br> Você marcou um gol e foi recompensado com sobre a origem do futebol';
            document.body.appendChild(card1);
            card1.id = 'icard1';

            if(document.querySelector('#icard1')){
                setInterval(function(){
                    card1.style.display = 'none';
            },tempo);

            card1Condicao++
    }}else if(card2Condicao === 0 && opt === 2){
            let card2 = document.createElement('div');
            card2.className = 'card';
            card2.innerHTML = '<h1>Historicidade<h1> Na China, por volta de 2.600 a.C., um ritual denominado "TsüTsü" consistia no uso da cabeça do chefe de inimigos, por parte das tribos vencedoras, para ser chutada. <br><br> Você marcou um gol e foi recompensado com uma historicidade do futebol';
            document.body.appendChild(card2);
            card2.id = 'icard2';

            if(document.querySelector('#icard2')){
                setInterval(function(){
                    card2.style.display = 'none';
            },tempo);

            card2Condicao++
    }else if(opt === 3){
        console.log(' alerta')
        let alerta = document.createElement('div');
        alerta.className = 'erro';
        document.body.appendChild(alerta);
        alerta.id = 'ialerta';
        alerta.innerHTML = ('Chute na trave')

        if(document.querySelector('#ialerta')){
            setInterval(function(){
                alerta.style.display = 'none';
                },5000);
            }
        }
    }else{
        console.log(' alerta')
        let alerta = document.createElement('div');
        alerta.className = 'erro';
        document.body.appendChild(alerta);
        alerta.id = 'ialerta';
        alerta.innerHTML = ('Chute na trave')

        if(document.querySelector('#ialerta')){
            setInterval(function(){
                alerta.style.display = 'none';
                },5000);
            }
        }
    }


