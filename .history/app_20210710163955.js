const livros = require('./database')
// pegar  o input
const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro?S/N ')
//se for Sim ,mostra as categorias disponiveis ,pergunta qual categoria ela escolhe 

if (entradaInicial.toLocaleUpperCase()==='S'){
    console.log('Essas são as categorias disponiveis :')
    console.log('/Produtividade e estilo de vida','/História brasileira','/América','/Tecnologia')
    const entradaCategoria = readline.question('Qual categoria voce escolhe :')

    const retorno = livros.filter(livro =>livro.categoria ===entradaCategoria)

    console.table(retorno)
}
