
var altura = 0
var largura = 0
vidas = 1
tempo = 10

var tempoCriacaoMosquito = 1500

var nivel = window.location.search//pega parametros a partir do ?
nivel = nivel.replace('?','')//replace serve para trocar caracteres

if(nivel === 'normal'){
    tempoCriacaoMosquito = 1500
   
} else if(nivel === 'dificil'){
    tempoCriacaoMosquito = 1000

}else if(nivel === 'chucknorris'){
    tempoCriacaoMosquito = 750
}

console.log(tempoCriacaoMosquito)

//encontrar as dimensões da tela
function ajusteTelaPalcoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(altura, largura)
}

ajusteTelaPalcoJogo()

var cronometro = setInterval(function(){
    tempo -= 1  

    if(tempo<0){
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'vitoria.html'
    }else{
        document.getElementById('cronometro').innerHTML = tempo
    }
},1000)

function posicaoRandomica(){

    //remover mosquito anterior caso exista
    if(document.getElementById('mosquito')){//ele identifica ou tenta identificar, caso encontre ele é removido
        document.getElementById('mosquito').remove()

        if(vidas>3){
            window.location.href = 'fim_de_jogo.html'
        }else{      
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
            vidas++
        }
    }

    //posiocionar o mosquito na tela de forma aleatoria
    var posicaoX = Math.floor(Math.random() * altura) - 90 //90 é uma margem de erro
    var posicaoY = Math.floor(Math.random() * largura) - 90//90 é uma margem de erro

    //caso a posicao for menor que zero
    posicaoY = posicaoY < 0 ? 0 : posicaoY
    posicaoX = posicaoX < 0 ? 0 : posicaoX

    console.log(posicaoX,posicaoY)

    //criar um elemento html 
    var mosquito = document.createElement('img')

    //e passar para eleuma classe, a posição e tornala absolute
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoY + 'px'
    mosquito.style.top = posicaoX + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()//this faz referencioa ao elemento que faz a função funcionar
    }

    //Adicionando ao body um elemento
    document.body.appendChild(mosquito)

    console.log(ladoAleatorio())

}

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)

    switch(classe){
        case 0:
            return 'mosquito1'
        
        case 1:
            return 'mosquito1'

        case 2:
            return 'mosquito3'
        
    }
}

function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)

    switch(classe){
        case 0:
            return 'ladoA'
        
        case 1:
            return 'ladoB'
        
    }  
}




