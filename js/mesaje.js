
// Scriptul pentru animarea urărilor
document.addEventListener('DOMContentLoaded', function() {
    const urari = document.querySelectorAll('.ura');
  
    urari.forEach(function(ura) {
      ura.style.animationDuration = (Math.random() * 5 + 3) + 's'; // Fiecare urare are o durată aleatorie
    });
  });
  
