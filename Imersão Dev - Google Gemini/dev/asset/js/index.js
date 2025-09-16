import { Dados } from "./dados.js"

const button = document.querySelector ("#searchMaca");
const section = document.querySelector ("#Fruto-Pesquisado");
const CampoPesquisar = document.querySelector ("#CampoPesquisar").value;

button.addEventListener ("click", (event) => {
	event.preventDefault ();

  if (CampoPesquisar == "") {
    return;
  };

  Resultados = "";

  for (let Dado of Dados) {
    if (Dado.Titulo.includes(CampoPesquisar)) {
      Resultados += `
        <ul class = "Ativo-Fruto Fruto">
         <li>
            <h2><a href = "${Dado.Link}">${Dado.Titulo}</a></h2>

            <img src = "${Dado.Imagem}" alt = "${Dado.Alt}"/>
  	     </li>
        </ul>

        <audio controls>
          <source src = "../media/audio/musica.mp3" type = "audio/mp3"/>
        </audio>
	       `
   }
  };

  if (!Resultados) {
    Resultados = "<p>Nada foi encontrado‼</p>"
  }

  section.innerHTML = Resultados;
});