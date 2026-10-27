console.log("***** IF Else *****")

const saldo = 5.30

if (saldo >= 5.30) {
    console.log("passagem liberada.")
    console.log("Foram debitados R$5.30 do seu saldo.");
} else {
    console.log("Saldo insuficiente.")
    console.log("Por favor, realize uma recarga e tente novamente.")
}

console.log("***** IF...Else IF *****")

const nota = 10;

if(nota >= 9) {
    console.lolg("Excelente!");
} else if (nota >= 6){
    console.log("Aprovado!")
} else if (nota >= 4){
    console.log("Recuperação")
} else {
    console.log("Reprovado(a)")
}

console.log("***** Condicionais lógicas *****")

const idade = 18;
const temIngresso = true;

if(idade >= 18 && temIngresso) {
    console.log("Entrada liberada.");
} else{
    console.log("Entrada não permitida.")
}

console.log("***** Operador lógico *****")

const eAdmin = false;
const eModerador = false;

if(eAdmin || eModerador) {
    console.log("Acesso ao painel.")
} else {
    console.log("Acesso não autorizado.")
}

console.log("***** !- NOT (não) *****")

console.log.og(!eAdmin)

if(!estaLogado){
    console.log("Faça login para continuar.")
}

const nome = "";
if(!nome){
    console.log("Preencha seu nome.");
}

const aceitouTermos = false
if(!aceitouTermos){
    console.log("Para continuar você precisa aceitar os termos.")
}