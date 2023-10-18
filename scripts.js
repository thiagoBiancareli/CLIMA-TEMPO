

const key= "bb3df8a935d4abd8d867193960b8cc80"

async function buscarCidade(cidade) {

    const dados= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}`).then(resposta => resposta.json());
    console.log(dados)

}

function clickButton() {
    const cidade = document.querySelector(".input-city").value;

    buscarCidade(cidade);    
}