function toogleNav() {
  let e = document.getElementById("navMenu"),
    t = document.getElementById("iconMenu");
  "block" === e.style.display
    ? ((e.style.display = "none"),
      (t.src = "./assets/icons/icons8-guitar-menu.png"))
    : ((e.style.display = "block"),
      (t.src = "./assets/icons/icons8-guitar-white-menu.png"));
}
function changeLanguage(e) {
  let t = document.getElementById("linkInicio"),
    n = document.getElementById("linkBiografia"),
    a = document.getElementById("linkGaleria"),
    o = document.getElementById("linkVideos"),
    i = document.getElementById("linkAgenda"),
    s = document.getElementById("linkContacto"),
    r = document.getElementById("titleBiografia"),
    l = document.getElementById("titleGaleria"),
    d = document.getElementById("titleVideos"),
    c = document.getElementById("titleAgenda"),
    u = document.getElementById("titleContacto"),
    m = document.getElementById("biop1"),
    g = document.getElementById("biop2"),
    h = document.getElementById("biop3"),
    y = document.getElementById("biop4"),
    p = document.getElementById("biop5"),
    C = document.getElementById("p3agenda"),
    B = document.getElementById("fLinkInicio"),
    f = document.getElementById("fLinkBiografia"),
    I = document.getElementById("fLinkGaleria"),
    E = document.getElementById("fLinkVideos"),
    A = document.getElementById("fLinkAgenda"),
    b = document.getElementById("fLinkContacto"),
    x = document.getElementById("btnPantallaBloqueo");
  document.getElementById("spanPreloadIdiomaEs"),
    document.getElementById("spanPreloadIdiomaIn");
  switch (e) {
    case "en":
      (t.textContent = "Home"),
        (n.textContent = "Biography"),
        (a.textContent = "Gallery"),
        (o.textContent = "Videos"),
        (i.textContent = "Diary"),
        (s.textContent = "Contact"),
        (r.textContent = "Biography"),
        (l.textContent = "Gallery"),
        (d.textContent = "Videos"),
        (c.textContent = "Diary"),
        (u.textContent = "Contact and Social networks"),
        (m.textContent =
          "Awarded with more than 10 national and international awards, among others, First Prize in \n                            the V International Competition of Classical Guitar Angel. G. Piñero 2018, Prize for the best Spanish guitarist \n                            born in the Valencian community at the LI Francisco Tárrega of Benicàssim International Competition 2017, Second \n                            Prize at the XVII Benidorm International Music Contest 2015, and after being a finalist in competitions such as \n                            Andrés Segovia de Linares... Jonathan Esteve is currently among the most outstanding guitarists of his generation."),
        (g.textContent =
          "In his concerts, he shows great versatility, technique and mastery of the different periods of the classical repertoire. \n                            Without cuestion, these are qualities that make him a musician with a great personality and connection with the public. His guitar has sounded \n                            in European countries such as France, Spain, the United Kingdom ... appearing in capitals such as Madrid or London, among other cities. He has \n                            played in important venues such as the Carlos de Amberes Foundation in Madrid, ADDA Concert Hall in Alicante, Palace of fairs and congresses \n                            in Malaga, Pedro Muñoz Seca Theater, Andrés Gaos Auditorium in A Coruña, Concha Segura Theater, St. Olave Hart Street ( London-England) Maurice \n                            Ravel Auditorium (S. Jean de Luz-France)"),
        (h.textContent =
          "His concerts with a symphonic orchestra stand out, the first of them taking place in 2015, where he performed the Aranjuez \n                            Concert with great success. He has worked and shared the stage with world-class directors such as José Luis Granados, Rafael Vilaplana or Salvador \n                            Brotons. He is invited as a concert performer and teacher at international events such as the Guitar Fair in Malaga in 2014, the XXVIII Music \n                            Course in Benidorm, the Andalusian festival of Saint Jean de Luz in France. His initiative and his concerns to create events related to the \n                            world of music, led him to launch the Ciudad de Castalla guitar contest in 2013, of which he is the director."),
        (y.textContent =
          "Jonathan Esteve was born in Castalla (Alicante-Spain). Trained with professors Francisco Albert, Victor Bravo and Antonio Clavel at \n                            the conservatories of Villena and CSMA Oscar Esplá of Alicante, he completes his higher studies in guitar with honors. Parallel and later, he complemented \n                            his training with the teachers Carles Trepat and Carlos Bonell."),
        (p.textContent =
          'Among other facets, it should be noted that Jonathan is the only professional guitarist of his generation, who plays with a \n                            guitar built by himself in a self-taught way. He has made more than 25 instruments to date, combining this precious work with his main activity \n                            as a performer. Jonathan, is currently sponsored by "RC Strings"'),
        (C.textContent =
          "On their Facebook page you can find information about their new concerts and other interesting information."),
        (B.textContent = "Home"),
        (f.textContent = "Biography"),
        (I.textContent = "Gallery"),
        (E.textContent = "Videos"),
        (A.textContent = "Diary"),
        (b.textContent = "Contact"),
        (x.textContent = "WELCOME");
      break;
    case "es":
      (t.textContent = "Inicio"),
        (n.textContent = "Biografía"),
        (a.textContent = "Galeria"),
        (o.textContent = "Videos"),
        (i.textContent = "Agenda"),
        (s.textContent = "Contacto"),
        (r.textContent = "Biografía"),
        (l.textContent = "Galeria"),
        (d.textContent = "Videos"),
        (c.textContent = "Agenda"),
        (u.textContent = "Contacto y Redes Sociales"),
        (m.textContent =
          "Galardonado con más de 10 premios nacionales e internacionales, entre otros, Primer premio en el V Concurso \n                            Internacional de Guitarra Clásica Ángel. G. Piñero 2018, Premio al mejor guitarrista español nacido en la comunidad valenciana en \n                            el LI Certamen Internacional Francisco Tárrega de Benicàssim 2017, Segundo Premio en el XVII Concurso Internacional de música de \n                            Benidorm 2015, y tras haber sido finalista en concursos como el Andrés Segovia de Linares... Jonathan Esteve se sitúa actualmente \n                            entre los guitarristas más destacados de su generación."),
        (g.textContent =
          "En sus conciertos, demuestra versatilidad, técnica y dominio de los diferentes periodos del repertorio clásico. Sin duda, \n                            estas son cualidades que hacen de él un músico con una gran personalidad y conexión con el público. Su guitarra, ha sonado en países Europeos \n                            como Francia, España, Reino Unido...presentándose en capitales como Madrid o Londres, entre otras ciudades. A tocado en importantes salas como \n                            la Fundación Carlos de Amberes en Madrid, ADDA Concert Hall de Alicante, Palacio de ferias y congresos de Málaga, Teatro Pedro Muñoz Seca, \n                            Auditorio Andrés Gaos en A Coruña, Teatro Concha Segura, St. Olave Hart Street (Londres- Inglaterra) Auditorio Maurice Ravel (S. Juan de Luz-Francia)"),
        (h.textContent =
          "Destacan sus conciertos con orquesta sinfónica, teniendo lugar el primero de ellos en el año 2015, donde interpretó con gran éxito el \n                            Concierto de Aranjuez. Ha trabajado y compartido escenario con directores de talla mundial como José Luis Granados, Rafael Vilaplana o Salvador Brotons. \n                            Es invitado como concertista y profesor en citas internacionales como el Guitar Fair de Málaga en 2014, XXVIII Curso de Música de Benidorm, el festival \n                            Andaluz de Saint Jean de Luz en Francia. Su iniciativa e inquietudes para crear eventos relacionados con el mundo de la música, le llevan a poner en \n                            marcha en el año 2013 el certamen de guitarra Ciudad de Castalla, del cual es director."),
        (y.textContent =
          "Jonathan Esteve nace en Castalla (Alicante-España). Formado con los profesores Francisco Albert, Victor Bravo y Antonio Clavel en los \n                            conservatorios de Villena y CSMA Oscar Esplá de Alicante, completa los estudios superiores en guitarra con matrícula de honor. Paralela y posteriormente, \n                            complementó su formación con los maestros Carles Trepat y Carlos Bonell."),
        (p.textContent =
          'Entre otras facetas, cabe destacar que Jonathan es el único guitarrista profesional de su generación, que toca con una guitarra construida \n                            por él mismo de manera autodidacta. Ha fabricado más de 25 instrumentos hasta la fecha, compaginando esta preciosa labor con su principal actividad como intérprete. \n                            Actualmente, Jonathan está patrocinado por la marca de cuerdas "RC Strings".'),
        (C.textContent =
          "En su página de Facebook podrás encontrar información a cerca de sus nuevos conciertos y otros datos de interés."),
        (B.textContent = "Inicio"),
        (f.textContent = "Biografía"),
        (I.textContent = "Galeria"),
        (E.textContent = "Videos"),
        (A.textContent = "Agenda"),
        (b.textContent = "Contacto"),
        (x.textContent = "BIENVENIDO");
  }
}
function backToTop() {
  window.scrollTo(0, 0);
}
function showAndHiddenElements() {
  let e = document.getElementById("iconBackToTop"),
    t = document.getElementById("navMenu"),
    n = document.getElementById("ulNavMenu"),
    a = document.querySelector(".titleBgHome");
  0 == pageYOffset ? (a.style.opacity = "1") : (a.style.opacity = "0"),
    pageYOffset < 650
      ? ((e.style.visibility = "hidden"),
        (t.style.backgroundColor = "transparent"),
        (t.style.border = "none"),
        (n.style.paddingBottom = "2rem"),
        (n.style.paddingTop = "3rem"))
      : ((e.style.visibility = "visible"),
        (t.style.backgroundColor = "rgba(0, 0, 0, 0.850)"),
        (t.style.borderBottom = "1.5px solid white"),
        (n.style.paddingBottom = "1rem"),
        (n.style.paddingTop = "1.5rem"));
}
function onImagesLoaded(e, t) {
  let n = e.getElementsByTagName("img"),
    a = n.length;
  for (let e = 0; e < n.length; e++)
    n[e].complete
      ? a--
      : n[e].addEventListener("load", function () {
          0 == --a && t();
        }),
      0 == a && t();
}
function hiddenPantallaBloqueo() {
  (document.getElementById("pantallaBloqueo").style.opacity = "0"),
    setTimeout(() => {
      (document.getElementById("pantallaBloqueo").style.display = "none"),
        (document.getElementsByTagName("body")[0].style.overflow = "inherit"),
        (document.getElementsByTagName("body")[0].style["overflow-x"] =
          "hidden");
    }, 700);
}
function showBtnaToToGetIn() {
  let e = document.getElementById("h1PantallaBloqueo"),
    t = document.getElementById("h2PantallaBloqueo"),
    n = document.getElementById("imgPantallaBloqueo"),
    a = document.getElementById("btnPantallaBloqueo"),
    o = document.getElementById("idiomaPreload");
  (e.style.display = "none"),
    (t.style.display = "none"),
    (n.style.display = "none"),
    (a.style.display = "block"),
    (o.style.display = "block");
}
function clickBtnaToToGetIn() {
  hiddenPantallaBloqueo(), playAndPauseAudio();
}
function onLoad() {
  changeLanguageNavigator(),
    onImagesLoaded(document.getElementsByTagName("body")[0], showBtnaToToGetIn);
}
function onClickLink() {
  let e = document.getElementById("navMenu");
  window.innerWidth <= 960 && (e.style.display = "none");
}
function playAndPauseAudio() {
  let e = document.getElementById("controlAudio"),
    t = document.getElementById("audioBg");
  "pause" === e.getAttribute("custom-status")
    ? (e.setAttribute("src", "./assets/icons/icons8-pausa-50.png"),
      e.setAttribute("custom-status", "play"),
      t.play())
    : (e.setAttribute("src", "./assets/icons/icons8-play-50.png"),
      e.setAttribute("custom-status", "pause"),
      t.pause());
}
function changeLanguageNavigator() {
  let e = navigator.language;
  changeLanguage("es-ES" == e || "es" == e ? "es" : "en");
}
Galleria.loadTheme("librerias/galleria/themes/classic/galleria.classic.min.js"),
  Galleria.run(".galleria", { autoplay: 3e3 }),
  $.klAnimate(),
  window.addEventListener("scroll", () => {
    showAndHiddenElements();
  });
