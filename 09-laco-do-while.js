let contador = 1;

do{
    console.log(contador);

    contador++;
}  while(contador <= 5);

console.log ("=========================")

let nome;

do{
    nome = prompt("Digite seu nome: ")
} while (nome === null || nome.trim() === "");

alert(`Olá, ${nome}`)