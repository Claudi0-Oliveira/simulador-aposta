// Função para gerar um número aleatório entre 0 e 99
function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 100);
}

// Função para exibir o resultado do sorteio
function mostrarResultado() {
    const numeroUsuario = parseInt(document.getElementById('numeroUsuario').value);
    const numeroSorteado = gerarNumeroAleatorio();

    // Verifica se o valor inserido pelo usuário é válido
    if (isNaN(numeroUsuario) || numeroUsuario < 0 || numeroUsuario > 99) {
        alert('Por favor, insira um número válido entre 0 e 99.');
        return;
    }

    // Compara o número do usuário com o número sorteado
    if (numeroUsuario === numeroSorteado) {
        document.getElementById('resultado').innerHTML = `Parabéns!<br>Você acertou o número ${numeroSorteado} e ganhou o prêmio!`;
    } else {
        document.getElementById('resultado').innerHTML = `Não foi dessa vez.<br><br>O número sorteado foi:<br><br> ${numeroSorteado}.<br><br>Tente novamente!`;
    }
}

// Adiciona um ouvinte de eventos ao botão
document.getElementById('sortearBtn').addEventListener('click', mostrarResultado);
