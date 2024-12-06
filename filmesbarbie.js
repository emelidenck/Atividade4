const fs = require('fs');

// Lista de filmes da Barbie
const filmesBarbie = [
    "Barbie em O Quebra-Nozes (2001)",
    "Barbie como Rapunzel (2002)",
    "Barbie em O Lago dos Cisnes (2003)",
    "Barbie como A Princesa e a Plebeia (2004)",
    "Barbie Fairytopia (2005)",
    "Barbie e o Castelo de Diamante (2008)",
    "Barbie e as 12 Princesas Bailarinas (2006)",
    "Barbie: Vida de Sereia (2010)",
    "Barbie e o Segredo das Fadas (2011)",
    "Barbie em A Princesa e a Popstar (2012)",
    "Barbie e a Porta Secreta (2014)",
    "Barbie: Aventura nas Estrelas (2016)",
    "Barbie Princesa da Ilha (2007)",
    "Barbie e os Golfinhos Mágicos (2017)",
    "Barbie Dreamhouse Adventures (2018)",
    "Barbie: Big City, Big Dreams (2021)"
];

// Função para listar os filmes
function listarFilmes() {
    console.log("Lista de filmes da Barbie:");
    filmesBarbie.forEach((filme, index) => {
        console.log(`${index + 1}. ${filme}`);
    });
}

// Executa a função
listarFilmes();

// Gerar README.md
const conteudoReadme = `
# Lista de Filmes da Barbie

Este projeto contém uma lista com os filmes da Barbie, ordenados cronologicamente.

## Funcionalidades
- Listar todos os filmes da Barbie disponíveis.
- Código simples e intuitivo, ideal para quem quer explorar os clássicos filmes.

## Detalhes
- Linguagem: JavaScript
- Geração do arquivo README.md automática.

## Como Usar
1. Clone o repositório.
2. Execute o comando \`node index.js\` para listar os filmes.

## Lista de Filmes
${filmesBarbie.map((filme, index) => `${index + 1}. ${filme}`).join('\n')}
`;

// Escrever no arquivo README.md
fs.writeFileSync('README.md', conteudoReadme.trim());

console.log("README.md gerado com sucesso!");
