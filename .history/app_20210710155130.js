const livros = require('./database')


//pegando o input do usuário

const readline = require('readline-sync')

const entradaInicial = await readline.question('Deseja buscar um livro?S/N ')
