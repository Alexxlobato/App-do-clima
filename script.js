const input = document.getElementById("cityInput");
const botao = document.getElementById("botaoBuscar");
const resultado = document.getElementById("resultArea");

async function buscarJson(url) {
    const resposta = await fetch(url);

    if (!resposta.ok) {
        throw new Error("Erro ao acessar a API")
    }

    return await resposta.json();
}

async function buscarClima() {
    const cidade = input.value.trim();

    if (cidade === "") {
        resultado.innerHTML = "<p>Por favor, digite o nome de uma cidade!</p>";
        resultado.style.color = "red";
        return;
    }
  
    resultado.innerText = `Buscando o clima para ${cidade}...`;
    resultado.style.color = "black";

    try {
        const urlGeocoding = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cidade)}&count=1`;
        const dados = await buscarJson(urlGeocoding)

        if (!dados.results || dados.results.length === 0) {
            throw new Error("Cidade não encontrada");
        }

        const {latitude:lat, longitude: lon, name: cidadeNome} = dados.results[0];

        const urlClima =
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`;

        const dadosClima = await buscarJson(urlClima);
        
        //Dados atuais
        const {temperature_2m: temp, relative_humidity_2m: umid, wind_speed_10m: vento} = dadosClima.current
        //Unidades de medida
        const {temperature_2m: uniTemp, relative_humidity_2m: uniUmid, wind_speed_10m: uniVento} = dadosClima.current_units


resultado.innerHTML = `
    <h2>${cidadeNome}</h2>
    <hr>
    <p><strong>Latitude:</strong> ${lat}</p>
    <p><strong>Longitude:</strong> ${lon}</p>
    <p><strong>Temperatura:</strong> ${temp} ${uniTemp}</p>
    <p><strong>Umidade:</strong> ${umid} ${uniUmid}</p>
    <p><strong>Vento:</strong> ${vento} ${uniVento}</p>
`;

    } catch (erro) {
        resultado.innerHTML = `<p style="color: red;">Erro: ${erro.message}</p>`;
    }

    input.value = "";
    input.focus();
}


// Event Listeners
botao.addEventListener("click", buscarClima);
input.addEventListener("keyup", (evento) => {
    if (evento.key === "Enter") {
        buscarClima();
    }
});


