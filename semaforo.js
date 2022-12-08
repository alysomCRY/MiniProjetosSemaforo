const img =  document.getElementById("imgs");

//cria uma const que busca o paipara depois buscar os filhos
const buttons = document.getElementById("buttons");
// variavel responsavel por armazenar o valor de inicio da funcao changecolor
let colorIndex = 0;
//variavel que cria o interval id e acrescenta o valor null 
let intervalId = null;
// cria uma arrow function e chama o evento,nesse caso eventListener,e busca o elemento clicado pelo id e pega esse id e aplica outra function
const trafficLight = (event) => {
    //chama a funcao que para o evento
    stopAutomatic();
    //ativa o turnOn pelo id que foi clicado
    turnOn[event.target.id]();
    
}
// cria afuncao nextIndex e verifica se colorInex é menor que 2 se sim adiciona mais 1 se nao retorna para 0
const nextIndex = () => {
    if (colorIndex < 2){
        colorIndex++
    }else{
        colorIndex = 0;
    }
}
 //cria a funcao changecolor e dentro da funcao cria uma const q colors q armazena as 3 cores diferentes,em seguida cria const color que vai armazenar color e escolher por indice oq esta armazenado em colors
const changecolor = () => {
    const colors = ["red","yellow","green"]   
    const color = colors[colorIndex];
    turnOn[color]();
    //funcao responsavel pelo tempo da mudanca de cor
    nextIndex();
}
// cria a funcao que busca o "intervalId" e faz ela parar com o cleanInterval
const stopAutomatic = () => {
    clearInterval(intervalId);
}
// objeto literal e dentro deste objeto é colocado as funcoes,cria a arrow function que troca a imagem quando acha a id no eventListener   
const turnOn = {
    'red' :     () => img.src = 'imgs/vermelho.png',
    'yellow' :  () => img.src = 'imgs/amarelo.png',
    'green' :   () => img.src = 'imgs/verde.png',
    //executa a funcao "changecolor a cada 1 seg" e adiciona o id "intervalId"
    'automatic' : () => intervalId = setInterval(changecolor, 1000)
}

buttons.addEventListener("click", trafficLight);



