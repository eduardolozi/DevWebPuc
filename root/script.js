
function obterRacaDeCao() {
  limpaListaDeInformacoes();
  fetch("https://api.thedogapi.com/v1/images/search?has_breeds=1", {
    headers: {
      "x-api-key":
        "live_Fz8ZIeT6KNcUreYiBnUMxiftfdg2ZrPwa2celItqzFoxdk7G2MEKOGXH8D7WPq1N",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      fotoDoCao = data[0].url;
      document.getElementById("foto").src = fotoDoCao;

      const elementoUl = document.getElementById("informacoes");
      info = data[0].breeds[0];
      if (info) {
        const raca = info["name"];
        const expectativaDeVida = info["life_span"];
        const temperamento = info["temperament"];
        const altura = info["height"].metric;
        const peso = info["weight"].metric;

        const tituloContainer = document.getElementById("raca");
        tituloContainer.textContent = raca;

        const elementoLi2 = document.createElement("li");
        elementoLi2.textContent = `Expectativa de vida: ${expectativaDeVida}`;
        elementoUl.appendChild(elementoLi2);

        const elementoLi3 = document.createElement("li");
        elementoLi3.textContent = `Temperamento: ${temperamento}`;
        elementoUl.appendChild(elementoLi3);

        const elementoLi4 = document.createElement("li");
        elementoLi4.textContent = `Altura: ${altura}cm`;
        elementoUl.appendChild(elementoLi4);

        const elementoLi5 = document.createElement("li");
      elementoLi5.textContent = `Peso: ${peso}kg`;
        elementoUl.appendChild(elementoLi5);

        
      } else {
        const elementoLi = document.createElement("li");
        elementoLi.textContent = "Não possuímos informações sobre esta raça de cão";
        elementoUl.appendChild(elementoLi);
      }
    });
}

function limpaListaDeInformacoes() {
  const elementoUl = document.getElementById("informacoes");
  while (elementoUl.firstChild) {
    elementoUl.removeChild(elementoUl.firstChild);
  }
}