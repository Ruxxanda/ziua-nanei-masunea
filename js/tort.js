// Funcția care aprinde lumânările tortului la încărcarea paginii
window.onload = function() {
    const tort = document.getElementById('tort');
    const lumini = document.getElementById('lumini');
  
    // Arătăm tortul
    tort.style.opacity = 1;
    lumini.style.display = "block"; // Arătăm lumina
  };
  
  
  // Așteptăm 5 secunde înainte de a arăta butonul
    setTimeout(function() {
      document.getElementById('buton-container').style.display = "block";
    }, 5000); // 5 secunde
    
  // Funcția pentru a merge la pagina Mesajele oaspeților
  function mergiLaMesaje() {
    window.location.href = "mesaje.html"; // Redirecționează către pagina cu mesajele
  }
