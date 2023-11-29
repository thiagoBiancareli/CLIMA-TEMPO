const key= "bb3df8a935d4abd8d867193960b8cc80"
//Responsabilidade dessa função é popular a tela com as infos da API externa
function colocarDadosNaTela(dados){
    console.log(dados);
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + '°C'
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
    document.querySelector(".img-previsao").src = `https:/openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

//Responsibilidade dessa função é pegar os dados da cidade digitada no input
async function buscarCidade(cidade) {
    const dados= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json());

    colocarDadosNaTela(dados);
}

//Responsabilidade dessa função é pegar o valor digitado no input, a função clickButton está sendo chamada no HTML 
function clickButton() {
    const cidade = document.querySelector(".input-city").value;

    buscarCidade(cidade);    
}