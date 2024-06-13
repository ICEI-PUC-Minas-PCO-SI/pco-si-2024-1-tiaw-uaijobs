// Adiciona um evento que será executado quando o DOM estiver completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    // Array de textos que serão exibidos dinamicamente
    const textosDinamicos = [
        "criar sua logo",
        "ter aulas de redação",
        "editar seu clipe",
        "traduzir seu artigo"
    ];
    let textoAtual = 0; // Índice do texto atual
    const elementoTexto = document.getElementById('texto-alteravel'); // Obtém o elemento que conterá o texto dinâmico

    // Função para digitar um texto, caractere por caractere
    function digitarTexto(texto, callback) {
        let i = 0;
        const intervaloDigitar = setInterval(() => {
            if (i < texto.length) {
                elementoTexto.textContent += texto.charAt(i); // Adiciona o próximo caractere ao elemento
                i++;
            } else {
                clearInterval(intervaloDigitar); // Para o intervalo quando o texto estiver completo
                if (callback) callback(); // Executa a função de callback se houver
            }
        }, 100); // Intervalo de 100 milissegundos entre cada caractere
    }

    // Função para apagar o texto, caractere por caractere
    function apagarTexto(callback) {
        let textoAtual = elementoTexto.textContent; // Obtém o texto atual do elemento
        let i = textoAtual.length;
        const intervaloApagar = setInterval(() => {
            if (i > 0) {
                elementoTexto.textContent = textoAtual.substring(0, i - 1); // Remove o último caractere do elemento
                i--;
            } else {
                clearInterval(intervaloApagar); // Para o intervalo quando o texto estiver apagado
                if (callback) callback(); // Executa a função de callback se houver
            }
        }, 100); // Intervalo de 100 milissegundos entre cada caractere removido
    }

    // Função que alterna entre os textos dinâmicos
    function atualizarTextoDinamico() {
        textoAtual = (textoAtual + 1) % textosDinamicos.length; // Atualiza o índice do texto atual de forma cíclica
        apagarTexto(() => {
            digitarTexto(textosDinamicos[textoAtual], () => {
                setTimeout(atualizarTextoDinamico, 2000); // Espera 2 segundos antes de atualizar o texto novamente
            });
        });
    }

    // Inicia a atualização do texto dinâmico após 2 segundos
    setTimeout(atualizarTextoDinamico, 2000);
});
