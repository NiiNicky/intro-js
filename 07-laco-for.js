console.log("Laço de repetição FOR")

// basico for
for(let inicio = 1; inicio <= 10; inicio++ ){
    console.log("Olá!");
}

// basico de valores
for (let index = 1; index <= 10; index++) {
    console.log(index);
}

// basico contagem de valores
for(let 1 = 1; i <= 10; i+=2){
    console.log(i);
}

// exem com tabuada
for(let i = 1; i <= 5; i++){
    console.log(`6 x ${i} = ${ 6 * i }`);
}

// exem avancado com tabuada
const numeroTabuada = prompt("Digite um número da tabuada que deseja ver:");

console.log(numeroTabuada);

for(let inicio = 1; inicio <= 10; inicio++){
    console.log(` ${numeroTabuada} x ${inicio} = ${numeroTabuada * inicio} `);
}