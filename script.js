function table(n) { 
    // TODO: escrever dois loops aninhados para desenhar o array bidimensional e monstar o restante da tabela no console.

    let x = [];
    for (let i = 0; i <= 10; i++) {
        x[i] = [];
        for (let k = 0; k <= n; k++) {
            x[i][k] = i * k
        }
    }
    console.table(x)
}