function Search_Maca() {
    let section = document.getElementById("Fruto-Pesquisado");

    let CampoPesquisar = document.getElementById("CampoPesquisar").value;

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
                    <source src = "src/audio/01-sunday-178897.mp3" type = "audio/mp3" title = "01 - Sunday"/>
                </audio>
            `
        }
    };

    if (!Resultados) {
        Resultados = "<p>Nada foi encontrado‼</p>"
    }

    section.innerHTML = Resultados;
}