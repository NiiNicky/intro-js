let contador = 1;

while (contador <= 5) {
    console.log(contador);

    contador++;
}

console.log("==========================")

let senha = "";

while ( senha !== "1234") {
    senha = prompt("Digite sua senha");
}

alert("Acesso liberado!")
