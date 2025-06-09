
    const num = Number(prompt("Digite um número para ver a tabuada:"));
    let resultado = "";
    for (let i = 1; i < 10; i++) {
        resultado += `${num} x ${i} = ${num * i}\n`;
    }
    alert(resultado);

