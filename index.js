document.addEventListener('DOMContentLoaded', function () {
    const mostraCaroselloButton = document.getElementById('mostraCarosello');
    const caroselloContainer = document.getElementById('caroselloContainer');
  
    mostraCaroselloButton.addEventListener('click', function () {
      
      caroselloContainer.classList.toggle('hidden');
    });
  });