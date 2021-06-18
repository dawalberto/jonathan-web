function toogleNav() {
  let navMenu = document.getElementById("navMenu");
  let iconMenu = document.getElementById("iconMenu");

  if (navMenu.style.display === "block") {
    navMenu.style.display = "none";
    iconMenu.src = "./assets/icons/icons8-guitar-menu.png";
  } else {
    navMenu.style.display = "block";
    iconMenu.src = "./assets/icons/icons8-guitar-white-menu.png";
  }
}

Galleria.loadTheme("librerias/galleria/themes/classic/galleria.classic.min.js");

Galleria.run(".galleria", {
  autoplay: 3000,
});

$.klAnimate();

function changeLanguage(lan) {
  let linkInicio = document.getElementById("linkInicio");
  let linkBiografia = document.getElementById("linkBiografia");
  let linkGaleria = document.getElementById("linkGaleria");
  let linkVideos = document.getElementById("linkVideos");
  let linkAgenda = document.getElementById("linkAgenda");
  let linkContacto = document.getElementById("linkContacto");

  let titleBiografia = document.getElementById("titleBiografia");
  let titleGaleria = document.getElementById("titleGaleria");
  let titleVideos = document.getElementById("titleVideos");
  let titleAgenda = document.getElementById("titleAgenda");
  let titleContacto = document.getElementById("titleContacto");

  let biop1 = document.getElementById("biop1");
  let biop2 = document.getElementById("biop2");
  let biop3 = document.getElementById("biop3");
  let biop4 = document.getElementById("biop4");
  let biop5 = document.getElementById("biop5");

  let p3agenda = document.getElementById("p3agenda");

  let fLinkInicio = document.getElementById("fLinkInicio");
  let fLinkBiografia = document.getElementById("fLinkBiografia");
  let fLinkGaleria = document.getElementById("fLinkGaleria");
  let fLinkVideos = document.getElementById("fLinkVideos");
  let fLinkAgenda = document.getElementById("fLinkAgenda");
  let fLinkContacto = document.getElementById("fLinkContacto");

  let btnPantallaBloqueo = document.getElementById("btnPantallaBloqueo");
  let spanPreloadIdiomaEs = document.getElementById("spanPreloadIdiomaEs");
  let spanPreloadIdiomaIn = document.getElementById("spanPreloadIdiomaIn");

  switch (lan) {
    case "en":
      linkInicio.textContent = "Home";
      linkBiografia.textContent = "Biography";
      linkGaleria.textContent = "Gallery";
      linkVideos.textContent = "Videos";
      linkAgenda.textContent = "Diary";
      linkContacto.textContent = "Contact";

      titleBiografia.textContent = "Biography";
      titleGaleria.textContent = "Gallery";
      titleVideos.textContent = "Videos";
      titleAgenda.textContent = "Diary";
      titleContacto.textContent = "Contact and Social networks";

      biop1.textContent = `Awarded with more than 10 national and international awards, among others, First Prize in 
                            the V International Competition of Classical Guitar Angel. G. Piñero 2018, Prize for the best Spanish guitarist 
                            born in the Valencian community at the LI Francisco Tárrega of Benicàssim International Competition 2017, Second 
                            Prize at the XVII Benidorm International Music Contest 2015, and after being a finalist in competitions such as 
                            Andrés Segovia de Linares... Jonathan Esteve is currently among the most outstanding guitarists of his generation.`;
      biop2.textContent = `In his concerts, he shows great versatility, technique and mastery of the different periods of the classical repertoire. 
                            Without cuestion, these are qualities that make him a musician with a great personality and connection with the public. His guitar has sounded 
                            in European countries such as France, Spain, the United Kingdom ... appearing in capitals such as Madrid or London, among other cities. He has 
                            played in important venues such as the Carlos de Amberes Foundation in Madrid, ADDA Concert Hall in Alicante, Palace of fairs and congresses 
                            in Malaga, Pedro Muñoz Seca Theater, Andrés Gaos Auditorium in A Coruña, Concha Segura Theater, St. Olave Hart Street ( London-England) Maurice 
                            Ravel Auditorium (S. Jean de Luz-France)`;
      biop3.textContent = `His concerts with a symphonic orchestra stand out, the first of them taking place in 2015, where he performed the Aranjuez 
                            Concert with great success. He has worked and shared the stage with world-class directors such as José Luis Granados, Rafael Vilaplana or Salvador 
                            Brotons. He is invited as a concert performer and teacher at international events such as the Guitar Fair in Malaga in 2014, the XXVIII Music 
                            Course in Benidorm, the Andalusian festival of Saint Jean de Luz in France. His initiative and his concerns to create events related to the 
                            world of music, led him to launch the Ciudad de Castalla guitar contest in 2013, of which he is the director.`;
      biop4.textContent = `Jonathan Esteve was born in Castalla (Alicante-Spain). Trained with professors Francisco Albert, Victor Bravo and Antonio Clavel at 
                            the conservatories of Villena and CSMA Oscar Esplá of Alicante, he completes his higher studies in guitar with honors. Parallel and later, he complemented 
                            his training with the teachers Carles Trepat and Carlos Bonell.`;
      biop5.textContent = `Among other facets, it should be noted that Jonathan is the only professional guitarist of his generation, who plays with a 
                            guitar built by himself in a self-taught way. He has made more than 25 instruments to date, combining this precious work with his main activity 
                            as a performer. Jonathan, is currently sponsored by "RC Strings"`;

      p3agenda.textContent =
        "On their Facebook page you can find information about their new concerts and other interesting information.";

      fLinkInicio.textContent = "Home";
      fLinkBiografia.textContent = "Biography";
      fLinkGaleria.textContent = "Gallery";
      fLinkVideos.textContent = "Videos";
      fLinkAgenda.textContent = "Diary";
      fLinkContacto.textContent = "Contact";

      // spanPreloadIdiomaEs.innerHTML = '<img src="./assets/icons/espain.png" class="icon-idioma-preload" alt=""> Español'
      // spanPreloadIdiomaIn.innerHTML = '<img src="./assets/icons/reino-unido.png" class="icon-idioma-preload" alt=""> English'
      btnPantallaBloqueo.textContent = "WELCOME";
      break;
    case "es":
      linkInicio.textContent = "Inicio";
      linkBiografia.textContent = "Biografía";
      linkGaleria.textContent = "Galeria";
      linkVideos.textContent = "Videos";
      linkAgenda.textContent = "Agenda";
      linkContacto.textContent = "Contacto";

      titleBiografia.textContent = "Biografía";
      titleGaleria.textContent = "Galeria";
      titleVideos.textContent = "Videos";
      titleAgenda.textContent = "Agenda";
      titleContacto.textContent = "Contacto y Redes Sociales";

      biop1.textContent = `Galardonado con más de 10 premios nacionales e internacionales, entre otros, Primer premio en el V Concurso 
                            Internacional de Guitarra Clásica Ángel. G. Piñero 2018, Premio al mejor guitarrista español nacido en la comunidad valenciana en 
                            el LI Certamen Internacional Francisco Tárrega de Benicàssim 2017, Segundo Premio en el XVII Concurso Internacional de música de 
                            Benidorm 2015, y tras haber sido finalista en concursos como el Andrés Segovia de Linares... Jonathan Esteve se sitúa actualmente 
                            entre los guitarristas más destacados de su generación.`;
      biop2.textContent = `En sus conciertos, demuestra versatilidad, técnica y dominio de los diferentes periodos del repertorio clásico. Sin duda, 
                            estas son cualidades que hacen de él un músico con una gran personalidad y conexión con el público. Su guitarra, ha sonado en países Europeos 
                            como Francia, España, Reino Unido...presentándose en capitales como Madrid o Londres, entre otras ciudades. A tocado en importantes salas como 
                            la Fundación Carlos de Amberes en Madrid, ADDA Concert Hall de Alicante, Palacio de ferias y congresos de Málaga, Teatro Pedro Muñoz Seca, 
                            Auditorio Andrés Gaos en A Coruña, Teatro Concha Segura, St. Olave Hart Street (Londres- Inglaterra) Auditorio Maurice Ravel (S. Juan de Luz-Francia)`;
      biop3.textContent = `Destacan sus conciertos con orquesta sinfónica, teniendo lugar el primero de ellos en el año 2015, donde interpretó con gran éxito el 
                            Concierto de Aranjuez. Ha trabajado y compartido escenario con directores de talla mundial como José Luis Granados, Rafael Vilaplana o Salvador Brotons. 
                            Es invitado como concertista y profesor en citas internacionales como el Guitar Fair de Málaga en 2014, XXVIII Curso de Música de Benidorm, el festival 
                            Andaluz de Saint Jean de Luz en Francia. Su iniciativa e inquietudes para crear eventos relacionados con el mundo de la música, le llevan a poner en 
                            marcha en el año 2013 el certamen de guitarra Ciudad de Castalla, del cual es director.`;
      biop4.textContent = `Jonathan Esteve nace en Castalla (Alicante-España). Formado con los profesores Francisco Albert, Victor Bravo y Antonio Clavel en los 
                            conservatorios de Villena y CSMA Oscar Esplá de Alicante, completa los estudios superiores en guitarra con matrícula de honor. Paralela y posteriormente, 
                            complementó su formación con los maestros Carles Trepat y Carlos Bonell.`;
      biop5.textContent = `Entre otras facetas, cabe destacar que Jonathan es el único guitarrista profesional de su generación, que toca con una guitarra construida 
                            por él mismo de manera autodidacta. Ha fabricado más de 25 instrumentos hasta la fecha, compaginando esta preciosa labor con su principal actividad como intérprete. 
                            Actualmente, Jonathan está patrocinado por la marca de cuerdas "RC Strings".`;

      p3agenda.textContent =
        "En su página de Facebook podrás encontrar información a cerca de sus nuevos conciertos y otros datos de interés.";

      fLinkInicio.textContent = "Inicio";
      fLinkBiografia.textContent = "Biografía";
      fLinkGaleria.textContent = "Galeria";
      fLinkVideos.textContent = "Videos";
      fLinkAgenda.textContent = "Agenda";
      fLinkContacto.textContent = "Contacto";

      // spanPreloadIdiomaEs.innerHTML = '<img src="./assets/icons/espain.png" class="icon-idioma-preload" alt=""> Español'
      // spanPreloadIdiomaIn.innerHTML = '<img src="./assets/icons/reino-unido.png" class="icon-idioma-preload" alt=""> English'
      btnPantallaBloqueo.textContent = "BIENVENIDO";
      break;
  }
}

function backToTop() {
  window.scrollTo(0, 0);
}

function showAndHiddenElements() {
  let iconBackToTop = document.getElementById("iconBackToTop");
  let navMenu = document.getElementById("navMenu");
  let ulNavMenu = document.getElementById("ulNavMenu");
  let titleBgHome = document.querySelector(".titleBgHome");

  if (pageYOffset == 0) {
    titleBgHome.style.opacity = "1";
  } else {
    titleBgHome.style.opacity = "0";
  }

  if (pageYOffset < 650) {
    iconBackToTop.style.visibility = "hidden";
    navMenu.style.backgroundColor = "transparent";
    navMenu.style.border = "none";
    ulNavMenu.style.paddingBottom = "2rem";
    ulNavMenu.style.paddingTop = "3rem";
  } else {
    iconBackToTop.style.visibility = "visible";
    navMenu.style.backgroundColor = "rgba(0, 0, 0, 0.850)";
    navMenu.style.borderBottom = "1.5px solid white";
    ulNavMenu.style.paddingBottom = "1rem";
    ulNavMenu.style.paddingTop = "1.5rem";
  }
}

window.addEventListener("scroll", () => {
  showAndHiddenElements();
});

function onImagesLoaded(container, event) {
  let images = container.getElementsByTagName("img");
  let loaded = images.length;

  for (let i = 0; i < images.length; i++) {
    if (images[i].complete) {
      loaded--;
    } else {
      images[i].addEventListener("load", function () {
        loaded--;
        if (loaded == 0) {
          event();
        }
      });
    }
    if (loaded == 0) {
      event();
    }
  }
}

function hiddenPantallaBloqueo() {
  document.getElementById("pantallaBloqueo").style.opacity = "0";
  setTimeout(() => {
    document.getElementById("pantallaBloqueo").style.display = "none";
    document.getElementsByTagName("body")[0].style.overflow = "inherit";
    document.getElementsByTagName("body")[0].style["overflow-x"] = "hidden";
  }, 700);
}

function showBtnaToToGetIn() {
  let h1PantallaBloqueo = document.getElementById("h1PantallaBloqueo");
  let h2PantallaBloqueo = document.getElementById("h2PantallaBloqueo");
  let imgPantallaBloqueo = document.getElementById("imgPantallaBloqueo");
  let btnPantallaBloqueo = document.getElementById("btnPantallaBloqueo");
  let idiomaPreload = document.getElementById("idiomaPreload");

  h1PantallaBloqueo.style.display = "none";
  h2PantallaBloqueo.style.display = "none";
  imgPantallaBloqueo.style.display = "none";
  btnPantallaBloqueo.style.display = "block";
  idiomaPreload.style.display = "block";
}

function clickBtnaToToGetIn() {
  hiddenPantallaBloqueo();
  playAndPauseAudio();
}

function onLoad() {
  changeLanguageNavigator();
  let container = document.getElementsByTagName("body")[0];
  onImagesLoaded(container, showBtnaToToGetIn);
}

function onClickLink() {
  let navMenu = document.getElementById("navMenu");
  window.innerWidth <= 960 ? (navMenu.style.display = "none") : "";
}

function playAndPauseAudio() {
  let controlAudio = document.getElementById("controlAudio");
  let audioBg = document.getElementById("audioBg");

  if (controlAudio.getAttribute("custom-status") === "pause") {
    controlAudio.setAttribute("src", "./assets/icons/icons8-pausa-50.png");
    controlAudio.setAttribute("custom-status", "play");
    audioBg.play();
  } else {
    controlAudio.setAttribute("src", "./assets/icons/icons8-play-50.png");
    controlAudio.setAttribute("custom-status", "pause");
    audioBg.pause();
  }
}

function changeLanguageNavigator() {
  let navigatorL = navigator.language;

  if (navigatorL == "es-ES" || navigatorL == "es") {
    changeLanguage("es");
  } else {
    changeLanguage("en");
  }
}
