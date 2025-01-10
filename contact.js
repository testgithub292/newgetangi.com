  // Získání reference na tlačítko
  var scrollTopBtn = document.getElementById("scrollTopBtn");

  // Při scrollování stránky
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          scrollTopBtn.style.display = "block";
      } else {
          scrollTopBtn.style.display = "none";
      }
  }

  // Při kliknutí na tlačítko se přesune na začátek stránky
  scrollTopBtn.onclick = function() {
      document.body.scrollTop = 0; // Pro Safari
      document.documentElement.scrollTop = 0; // Pro Chrome, Firefox, IE a Opera
  }
/*----------------------------------------------------------------------*/


