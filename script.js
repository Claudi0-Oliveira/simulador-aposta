// Função para gerar um número aleatório
function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 100);
}

// Função para exibir o número sorteado
function mostrarNumero() {
    const numero = gerarNumeroAleatorio();
    document.getElementById('resultado').textContent = numero;
}

// Adiciona um ouvinte de eventos ao botão
document.getElementById('sortearBtn').addEventListener('click', mostrarNumero);
