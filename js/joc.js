// Funcția care verifică răspunsul
function verificaRaspuns(raspuns) {
    const raspunsCorect = 6; // Răspunsul corect este 6 lumânări
  
    if (raspuns === raspunsCorect) {
      // Dacă răspunsul este corect, redirecționăm către pagina cu tortul
      window.location.href = 'tort.html';
    } else {
      // Dacă răspunsul este greșit, afișăm un mesaj de alertă
      alert('Greșit! Încearcă din nou.');
    }
  }
