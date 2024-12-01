// După ce animația se termină, afișăm secțiunea principală
document.addEventListener('DOMContentLoaded', () => {
    const animație = document.getElementById('animație');
    const principal = document.getElementById('principal');
  
    // Setăm timpul după care se termină animația
    setTimeout(() => {
      animație.style.display = 'none'; // Ascundem animația
      principal.style.display = 'block'; // Afișăm secțiunea principală
      document.body.style.overflow = 'auto'; // Reafisăm scrollbarul
    }, 6000); // 3 secunde, cât durează animația
  });
