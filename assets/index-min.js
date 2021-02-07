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
    y = document.getElementById("biop3"),
    p = document.getElementById("biop4"),
    h = document.getElementById("biop5"),
    C = document.getElementById("p3agenda"),
    B = document.getElementById("fLinkInicio"),
    I = document.getElementById("fLinkBiografia"),
    E = document.getElementById("fLinkGaleria"),
    f = document.getElementById("fLinkVideos"),
    x = document.getElementById("fLinkAgenda"),
    b = document.getElementById("fLinkContacto"),
    A = document.getElementById("btnPantallaBloqueo");
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
          "Awarded with more than 10 national and international awards, First Prize in the V \n                          International Classical Guitar Competition Ángel G. Piñero 2018, Prize to the best \n                          Spanish guitarist born in the Valencian Community in the LI International Francisco \n                          Tárrega of Benicássim Competition 2017, Second Prize in the XVII International Music \n                          Competition of Benidorm 2015... Jonathan Esteve Aranda is currently one of the most \n                          outstanding guitarists of his generation."),
        (g.textContent =
          "Demonstrating in the concerts his versatility, knowledge and mastery of the different periods \n                          of the repertoire, qualities that make him a musician with great personality, accompanied by \n                          a broad and consolidated technique. His guitar has sounded in European countries such as France, \n                          Spain, the United Kingdom ... appearing in capitals such as London or Madrid among others. \n                          He has played in important venues such as: Carlos de Amberes Foundation in Madrid, ADDA Concert \n                          Hall in Alicante, Malaga Fair and Congress Center, Pedro Muñoz Seca Theater, Andrés Gaos Auditorium, \n                          Concha Segura Theater, St Olave Hart Street (London-England) Maurice Ravel Auditorium (France) ..."),
        (y.textContent =
          "His concerts with a symphonic orchestra stand out, the first one taking place in 2015, where he performed \n                          with great success the Aranjuez Concert by Joaquín Rodrigo. He has worked and shared the stage with \n                          world-renowned directors such as José Luis Granados, Rafael Vilaplana or Salvador Brotons."),
        (p.textContent =
          'He is frequently invited as a soloist and teacher at important international events: Guitar Fair of \n                          Malaga 2014, XXVIII International Course of Music of Benidorm, Andalusian International Festival \n                          of Saint-Jean de Luz (France). His initiative to organize events related to the world of guitar led him \n                          to create the classical guitar contest "Ciudad de Castalla" of which he is director.'),
        (h.textContent =
          "Jonathan Esteve was born in Castalla (Alicante-Spain). Formed with the teachers Francisco Albert, \n                          Victor Bravo and Antonio Clavel in the conservatories of Villena and Oscar Esplá in Alicante, \n                          he completes his higher studies in guitar with Honor Roll. He paralleled and later complemented his \n                          training with guitarists like Carles Trepat and Carlos Bonell. Among other facets, he distinguishes \n                          himself among young guitarists in the elite, for being the only one who plays with a guitar built by \n                          himself in a self-taught way."),
        (C.textContent =
          "On their Facebook page you can find information about their new concerts and other interesting information."),
        (B.textContent = "Home"),
        (I.textContent = "Biography"),
        (E.textContent = "Gallery"),
        (f.textContent = "Videos"),
        (x.textContent = "Diary"),
        (b.textContent = "Contact"),
        (A.textContent = "WELCOME");
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
          "Galardonado con más de 10 premios nacionales e internacionales, Primer premio en el V Concurso \n                            Internacional de Guitarra Clásica Ángel G. Piñero 2018, Premio al mejor guitarrista español \n                            nacido en la comunidad valenciana en el LI Certamen Internacional Francisco Tárrega de Benicássim 2017, \n                            Segundo Premio en el XVII Concurso Internacional de Música de Benidorm 2015… Jonathan Esteve Aranda se \n                            sitúa actualmente como uno de los guitarristas más destacados de su generación."),
        (g.textContent =
          "Demostrando en sus conciertos versatilidad, conocimiento y dominio de los diferentes periodos del \n                            repertorio, cualidades que hacen de él un músico con gran personalidad, acompañada de una amplia \n                            y consolidada técnica. Su guitarra, ha sonado en países Europeos como Francia, España, Reino Unido…\n                            presentándose en capitales cómo Lóndres o Madrid entre otras. Ha tocado en importantes salas cómo: \n                            Fundación Carlos de Amberes en Madrid, ADDA Concert Hall de Alicante, Palacio de ferias y congresos de Málaga, \n                            Teatro Pedro Muñoz Seca, Auditorio Andrés Gaos, Teatro Concha Segura, St Olave Hart Street (Londres-Inglaterra) \n                            Auditorio Maurice Ravel (Francia)… "),
        (y.textContent =
          "Destacan sus conciertos con orquesta sinfónica, teniendo lugar el primero de ellos en el año 2015, \n                            donde interpretó con gran éxito el Concierto de Aranjuez de Joaquín Rodrigo. Ha trabajado y compartido escenario con \n                            directores de renombre mundial como José Luis Granados, Rafael Vilaplana o Salvador Brotons."),
        (p.textContent =
          "Frecuentemente, es invitado como concertista y profesor en importantes citas internacionales: Guitar Fair \n                            de Málaga 2014, XXVIII Curso Internacional de Música de Benidorm, Festival internacional andaluz de \n                            Saint-Jean de Luz (Francia). Su iniciativa para organizar eventos relacionados con el mundo de la guitarra, \n                            le llevan a crear el certamen de guitarra clásica “Ciudad de Castalla” del cual es director."),
        (h.textContent =
          "Jonathan Esteve nace en Castalla (Alicante-España). Formado con los maestros Francisco Albert, \n                            Victor Bravo y Antonio Clavel en los conservatorios de Villena y Oscar Esplá en Alicante, completa \n                            los estudios superiores en guitarra con Matrícula de Honor. Paralela y posteriormente complementó \n                            su formación con guitarristas cómo Carles Trepat y Carlos Bonell. Entre otras facetas, se distingue \n                            entre los guitarristas jóvenes en la élite, por ser el único que toca con una guitarra construida \n                            por él mismo de manera autodidacta."),
        (C.textContent =
          "En su página de Facebook podrás encontrar información a cerca de sus nuevos conciertos y otros datos de interés."),
        (B.textContent = "Inicio"),
        (I.textContent = "Biografía"),
        (E.textContent = "Galeria"),
        (f.textContent = "Videos"),
        (x.textContent = "Agenda"),
        (b.textContent = "Contacto"),
        (A.textContent = "BIENVENIDO");
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
