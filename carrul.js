function App() {
  // Agrega un controlador de eventos a los enlaces que comienzan con #
  var links = document.querySelectorAll('a[href^="#"]');

  links.forEach(function(link) {
    link.addEventListener('click', function(e) {
      // Evita el comportamiento predeterminado de desplazamiento
      e.preventDefault();

      // Obtiene el destino del enlace (el elemento con el ID correspondiente)
      var targetId = this.getAttribute('href').substring(1);
      var targetElement = document.getElementById(targetId);

      // Desplaza la página al destino
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'  // Opciones adicionales: 'auto' o 'instant'
        });
      }
    });
  });
}

window.onload = function (event) {
  var app = new App();
  window.app = app;
};

App.prototype.processingButton = function(event) {
  const btn = event.currentTarget;
  const slickList = event.currentTarget.parentNode;
  const track = event.currentTarget.parentNode.querySelector('#track');
  const slick = track.querySelectorAll('.slick');

  const slickWidth = slick[0].offsetWidth;
  
  const trackWidth = track.offsetWidth;
  const listWidth = slickList.offsetWidth;

  track.style.left == ""  ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);

  btn.dataset.button == "button-prev" ? prevAction(leftPosition,slickWidth,track) : nextAction(leftPosition,trackWidth,listWidth,slickWidth,track)
}

let prevAction = (leftPosition,slickWidth,track) => {
  if(leftPosition > 0) {
    console.log("entro 2")
    track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
  }
}

let nextAction = (leftPosition,trackWidth,listWidth,slickWidth,track) => {
  if(leftPosition < (trackWidth - listWidth)) {
    track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
  }
}

App.prototype.openPopup = function () {
  document.getElementById("myModal").style.display = "flex";
}

App.prototype.closePopup = function () {
  document.getElementById("myModal").style.display = "none";
}

App.prototype.openPopup1 = function () {
  document.getElementById("myModal1").style.display = "flex";
}

App.prototype.closePopup1 = function () {
  document.getElementById("myModal1").style.display = "none";
}

App.prototype.openPopup2 = function () {
  document.getElementById("myModal2").style.display = "flex";
}

App.prototype.closePopup2 = function () {
  document.getElementById("myModal2").style.display = "none";
}


App.prototype.openPopupInfo = function () {
  document.getElementById("infoM").style.display = "flex";
}

App.prototype.closePopupInfo = function () {
  document.getElementById("infoM").style.display = "none";
}