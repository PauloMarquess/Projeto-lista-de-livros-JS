const livros = require('./database')
// pegar  o input
const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro?S/N ')
//se for Sim ,mostra as categorias disponiveis ,pergunta qual categoria ela escolhe 

if (entradaInicial.toLocaleUpperCase()==='S'){
    console.log('Essas são as categorias disponiveis :')
    console.log('/Produtividade','/Historia Brasileira','/Américas','/Tecnologia','/Estilo de vida')
    const entradaCategoria = readline.question('Qual categoria voce escolhe :')

    const retorno = livros.filter(livro =>livro.categoria ===entradaCategoria)

    console.table(retorno)
}
 else {
    const livrosOrdenados= livros.sort((a,b) =>a.paginas -b.paginas)
     console.log('Esses são todos o livros disponiveis :')
     console.table(livrosOrdenados)
 }