// Funcție pentru generarea baloanelor
function genereazaBaloane() {
    const container = document.querySelector('.baloane');
    for (let i = 0; i < 15; i++) {
      const balon = document.createElement('div');
      balon.classList.add('balon');
      balon.style.left = `${Math.random() * 100}vw`;
      balon.style.animationDelay = `${Math.random() * 2}s`;
      container.appendChild(balon);
    }
  }
  
  // Funcție pentru generarea confetti-ului
  function genereazaConfetti() {
    const container = document.querySelector('.confetti');
    for (let i = 0; i < 30; i++) {
      const bucata = document.createElement('div');
      bucata.style.left = `${Math.random() * 100}vw`;
      bucata.style.animationDelay = `${Math.random() * 2}s`;
      container.appendChild(bucata);
    }
  }

  
  // Pornim animațiile la încărcare
  document.addEventListener('DOMContentLoaded', () => {
    genereazaBaloane();
    genereazaConfetti();
  });
  
