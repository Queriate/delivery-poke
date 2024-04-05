document.addEventListener("DOMContentLoaded", function() {
  // Esconder as sessões 'pedido-aceito' e 'pedido-enviado' ao carregar a página
  document.querySelector('.pedido-aceito').style.display = 'none';
  document.querySelector('.pedido-enviado').style.display = 'none';

  // Manipular o clique no botão de finalizar pedido
  document.querySelector('.btn-finalizar').addEventListener('click', function(event) {
      event.preventDefault(); // Prevenir o comportamento padrão do botão

      // Exibir a sessão 'pedido-aceito'
      var pedidoAceito = document.querySelector('.pedido-aceito');
      pedidoAceito.style.display = 'block';

      // Centralizar a div 'box-aceito' horizontal e verticalmente
      var boxAceito = document.querySelector('.box-aceito');
      boxAceito.style.position = 'absolute';
      boxAceito.style.top = '50%';
      boxAceito.style.left = '50%';
      boxAceito.style.transform = 'translate(-50%, -50%)';

      // Sobrepor a sessão 'resumo' por aproximadamente 6 segundos antes de se ocultar novamente
      var resumo = document.querySelector('.resumo');
      resumo.style.position = 'relative';
    
      boxAceito.style.zIndex = '999';
      setTimeout(function() {
          pedidoAceito.style.display = 'none';
          resumo.style.position = ''; // Restaurar a posição padrão da sessão 'resumo'
      }, 6000); // 6 segundos

      // Manter a sessão 'pedido-enviado' oculta
      document.querySelector('.pedido-enviado').style.display = 'none';
  });
});
