document.addEventListener('DOMContentLoaded', function() {
  var pizzaImg = document.getElementById('pizza-img');
  var startBtn = document.getElementById('start-btn');

  // Lista de porcentagens para cortar a pizza
  var pizzaPieces = [50, 75, 87.5, 93.75, 96.875];

  startBtn.addEventListener('click', function() {
    // Desabilitar o botão após o início da animação
    startBtn.disabled = true;

    // Chamar a função para comer os pedaços de pizza
    eatPizzaPieces(pizzaPieces);
  });

  function eatPizzaPieces(pieces) {
    if (pieces.length === 0) {
      // Quando todos os pedaços foram comidos
      alert('Pizza completamente comida!');
      startBtn.disabled = false; // Habilitar o botão novamente
      return;
    }

    var currentPiece = pieces.shift(); // Pegar a próxima porcentagem
    console.log('Comendo ' + currentPiece + '% da pizza...');

    // Atualizar a propriedade clip-path para cortar a pizza
    pizzaImg.style.clipPath = 'polygon(50% 0%, 100% 0, 100% 100%, ' + currentPiece + '% 100%, 0 50%)';

    // Chamada recursiva para comer o próximo pedaço
    setTimeout(function() {
      eatPizzaPieces(pieces);
    }, 1000); // Tempo em milissegundos entre cada pedaço
  }
});
