document.addEventListener("DOMContentLoaded", function() {
  // Função para aplicar estilos aos botões selecionados
  function applyStyles(element) {
      element.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
  }

  // Função para remover estilos dos botões não selecionados
  function removeStyles(element) {
      element.style.backgroundColor = "";
  }

  // Função para lidar com o clique nos botões
  function handleClick(event) {
      var button = event.target;

      // Verificar se é um botão de proteína
      if (button.classList.contains("proteina")) {
          // Se o botão já estiver selecionado, remova a seleção e os estilos
          if (button.classList.contains("selected")) {
              button.classList.remove("selected");
              removeStyles(button);
          } else {
              // Se não estiver selecionado e ainda há espaço para outra seleção de proteína
              if (document.querySelectorAll(".proteina.selected").length < 2) {
                  button.classList.add("selected");
                  applyStyles(button);
              }
          }
      }

      // Verificar se é um botão de acompanhamento
      if (button.classList.contains("acomp")) {
          // Se o botão já estiver selecionado, remova a seleção e os estilos
          if (button.classList.contains("selected")) {
              button.classList.remove("selected");
              removeStyles(button);
          } else {
              // Se não estiver selecionado e ainda há espaço para outra seleção de acompanhamento
              if (document.querySelectorAll(".acomp.selected").length < 4) {
                  button.classList.add("selected");
                  applyStyles(button);
              }
          }
      }

      // Atualizar as informações armazenadas no localStorage
      updateLocalStorage();
  }

  // Função para atualizar as informações armazenadas no localStorage
  function updateLocalStorage() {
      var selectedProteins = [];
      var selectedSideDishes = [];

      // Obter botões de proteína selecionados e armazená-los
      var selectedProteinButtons = document.querySelectorAll(".proteina.selected");
      selectedProteinButtons.forEach(function(button) {
          selectedProteins.push(button.id);
      });

      // Obter botões de acompanhamento selecionados e armazená-los
      var selectedSideDishButtons = document.querySelectorAll(".acomp.selected");
      selectedSideDishButtons.forEach(function(button) {
          selectedSideDishes.push(button.id);
      });

      // Armazenar as informações no localStorage
      localStorage.setItem("selectedProteins", JSON.stringify(selectedProteins));
      localStorage.setItem("selectedSideDishes", JSON.stringify(selectedSideDishes));
  }

  // Adicionar evento de clique aos botões
  var buttons = document.querySelectorAll(".box-item");
  buttons.forEach(function(button) {
      button.addEventListener("click", handleClick);
  });

  // Restaurar estilos dos botões selecionados anteriormente ao carregar a página
  var selectedProteins = JSON.parse(localStorage.getItem("selectedProteins")) || [];
  var selectedSideDishes = JSON.parse(localStorage.getItem("selectedSideDishes")) || [];

  selectedProteins.forEach(function(id) {
      var button = document.getElementById(id);
      if (button) {
          button.classList.add("selected");
          applyStyles(button);
      }
  });

  selectedSideDishes.forEach(function(id) {
      var button = document.getElementById(id);
      if (button) {
          button.classList.add("selected");
          applyStyles(button);
      }
  });
});
