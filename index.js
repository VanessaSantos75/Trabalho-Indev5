import readLineSync from 'readline-sync'
//const readLineSync = require('readline-sync')
// const ck = require("chalk")
import ck from 'chalk'

const valores = []
let input = ""
console.log(ck.magentaBright.bold(" Trabalho-indev5"))

while (input != "sair") {
    valores.push(input)
    input = readLineSync.question(ck.blue.bold("\nDigite uma propriedade CSS: ")).toLocaleLowerCase()

}
console.log(ck.magentaBright.italic(valores.sort().join("\n ")))