function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")

    let resultados = ""

    for (let dado of brawler) {

        resultados += `
                    <div class="resultados-pesquisa">
                        <h2>
                            <a href="https://www.brawlstarsdicas.com.br/crow-wiki-habilidade-e-informacoes/" target="_blank">${dado.nome}</a>
                        </h2>
                        <h4>${dado.raridade}</h4>
                        <p>${dado.descricao}</p>
                        <img src="${dado.foto}" alt="Foto do Corvo" class="imagem-corvo">
                    </div>
        `
    }
    section.innerHTML = resultados;
};
