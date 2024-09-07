function pesquisar() {
  // Obtém a seção onde os resultados da pesquisa serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  // Obtém o valor digitado no campo de pesquisa
  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  // Verifica se o campo de pesquisa está vazio
  if (campoPesquisa === "") {
    // Exibe um alerta informando que o campo está vazio e interrompe a função
    alert("Por favor, preencha o campo de pesquisa.");
    return;
  }

  // Converte o termo de pesquisa para minúsculas para facilitar a comparação
  campoPesquisa = campoPesquisa.toLowerCase();

  // Inicializa uma string vazia para armazenar os resultados da pesquisa
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let artistas = "";
  let indicacao = "";
  let tags = "";
  let imagem = "";

  // Itera sobre cada dado na lista de dados
  for (let dado of dados) {
    // Converte o título e a descrição e o artista do dado para minúsculas para comparação
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    artistas = dado.artistas.toLowerCase()
    


    // Verifica se o termo de pesquisa está contido no título ou na descrição
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || artistas.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      // Adiciona um novo elemento HTML para o resultado da pesquisa
      resultados += `
              <div class="item-resultado">
                  <h2>
                      <a href="#" target="_blank">${dado.titulo}</a>
                  </h2>
                  <p class="descricao-meta">${dado.descricao}</p>
                  <div class="pedal-imagem">
                    <img src=${dado.imagem} alt=${dado.titulo}>
                  </div>
                  <h3>Artistas:</h3>
                  <p>${dado.artistas}</p>
                  <h3>Para quem é indicado o ${dado.titulo}?</h3>
                  <p>${dado.indicacao}</p>
                  <a href=${dado.link} target="_blank">Mais informações</a>
              </div>
          `;
    }
  }

  // Verifica se nenhum resultado foi encontrado
  if (!resultados) {
    // Exibe um alerta informando que nenhum resultado foi encontrado
    alert("Nada foi encontrado.");
  }

  // Atualiza o conteúdo da seção com os resultados da pesquisa
  section.innerHTML = resultados;
}