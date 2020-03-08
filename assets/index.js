function toogleNav() {
  let navMenu = document.getElementById('navMenu')
  let iconMenu = document.getElementById('iconMenu')

  if (navMenu.style.display === 'block') {
    navMenu.style.display = 'none'
    iconMenu.src = './assets/icons/icons8-guitar-menu.png'
  } else {
    navMenu.style.display = 'block'
    iconMenu.src = './assets/icons/icons8-guitar-white-menu.png'
  }
}

Galleria.loadTheme('librerias/galleria/themes/classic/galleria.classic.min.js')

Galleria.run('.galleria', {
  autoplay: 3000
})

$.klAnimate()

function changeLanguage(lan) {

  let linkInicio = document.getElementById('linkInicio')
  let linkBiografia = document.getElementById('linkBiografia')
  let linkGaleria = document.getElementById('linkGaleria')
  let linkVideos = document.getElementById('linkVideos')
  let linkAgenda = document.getElementById('linkAgenda')
  let linkContacto = document.getElementById('linkContacto')

  let titleBiografia = document.getElementById('titleBiografia')
  let titleGaleria = document.getElementById('titleGaleria')
  let titleVideos = document.getElementById('titleVideos')
  let titleAgenda = document.getElementById('titleAgenda')
  let titleContacto = document.getElementById('titleContacto')

  let biop1 = document.getElementById('biop1')
  let biop2 = document.getElementById('biop2')
  let biop3 = document.getElementById('biop3')
  let biop4 = document.getElementById('biop4')
  let biop5 = document.getElementById('biop5')

  let p3agenda = document.getElementById('p3agenda')

  let fLinkInicio = document.getElementById('fLinkInicio')
  let fLinkBiografia = document.getElementById('fLinkBiografia')
  let fLinkGaleria = document.getElementById('fLinkGaleria')
  let fLinkVideos = document.getElementById('fLinkVideos')
  let fLinkAgenda = document.getElementById('fLinkAgenda')
  let fLinkContacto = document.getElementById('fLinkContacto')

  let btnPantallaBloqueo = document.getElementById('btnPantallaBloqueo')
  let spanPreloadIdiomaEs = document.getElementById('spanPreloadIdiomaEs')
  let spanPreloadIdiomaIn = document.getElementById('spanPreloadIdiomaIn')

  switch (lan) {

    case 'en':
        linkInicio.textContent = 'Home'
        linkBiografia.textContent = 'Biography'
        linkGaleria.textContent = 'Gallery'
        linkVideos.textContent = 'Videos'
        linkAgenda.textContent = 'Diary'
        linkContacto.textContent = 'Contact'
    
        titleBiografia.textContent = 'Biography'
        titleGaleria.textContent = 'Gallery'
        titleVideos.textContent = 'Videos'
        titleAgenda.textContent = 'Diary'
        titleContacto.textContent = 'Contact and Social networks'
    
        biop1.textContent = `Winner of the International Angel G. Piñero Classical Guitar Competition 2018 (First Prize) and after having
                            obtained more than 10 national and international awards in prestigious competitions such as the LI
                            Francisco Tárrega de Benicàssim International Competition, XVII Benidorm Music Contest among others…
                            Jonathan Esteve Aranda is currently positioned as one of the most outstanding classical guitarists of his
                            generation.`
        biop2.textContent = `His talent, versatility and mastery of the different periods that make up the repertoire for guitar, make him
                            a musician who plays with a very prominent, defined personality, always linked to a wide technique. His
                            guitar has played in European countries such as Spain, France, United Kingdom ... Among others, it is
                            presented in important rooms: Palace of fairs and congresses of Malaga, Arniches Theater, Andrés Gaos
                            Auditorium, Concha Segura Theater in Spain, St Olave Hart Street ( London-England) Maurice Ravel
                            Auditorium (France)…`
        biop3.textContent = `In 2015, he highlights his performance and live recording of the “Concierto de Aranjuez” together with the
                            Castelar Symphony Orchestra. He has worked and shared the stage with world-renowned directors such as
                            José Luis Granados, Rafael Vilaplana or Salvador Brotons.`
        biop4.textContent = `Frequently, he is invited as a concert performer and teacher in important international events: Guitar Fair
                            of Malaga (2014) XXVIII Benidorm International Music Course, International Andalusian Festival of Saint-
                            Jean de Luz (France). His initiative to organize events related to the world of guitar, led him to create the
                            classical guitar contest &quot;Castalla City&quot; of which he is promoter and director.`
        biop5.textContent = `Jonathan Esteve Aranda was born in Castalla (Alicante-Spain). Formed with the masters Francisco Albert,
                            Victor Bravo and Antonio Clavel in the conservatories of Villena and Oscar Esplá in Alicante, he obtains the
                            top degree in guitar with the Honors. Teachers like Carles Trepat, Aniello Desiderio, Carlos Bonell ... have
                            admired his way of interpreting and understanding music. He plays with a guitar designed and built by him,
                            self-taught.`

        p3agenda.textContent = 'On their Facebook page you can find information about their new concerts and other interesting information.'
        
        fLinkInicio.textContent = 'Home'
        fLinkBiografia.textContent = 'Biography'
        fLinkGaleria.textContent = 'Gallery'
        fLinkVideos.textContent = 'Videos'
        fLinkAgenda.textContent = 'Diary'
        fLinkContacto.textContent = 'Contact'


        // spanPreloadIdiomaEs.innerHTML = '<img src="./assets/icons/espain.png" class="icon-idioma-preload" alt=""> Español'
        // spanPreloadIdiomaIn.innerHTML = '<img src="./assets/icons/reino-unido.png" class="icon-idioma-preload" alt=""> English'
        btnPantallaBloqueo.textContent = 'WELCOME'
        break
    case 'es':
        linkInicio.textContent = 'Inicio'
        linkBiografia.textContent = 'Biografía'
        linkGaleria.textContent = 'Galeria'
        linkVideos.textContent = 'Videos'
        linkAgenda.textContent = 'Agenda'
        linkContacto.textContent = 'Contacto'
    
        titleBiografia.textContent = 'Biografía'
        titleGaleria.textContent = 'Galeria'
        titleVideos.textContent = 'Videos'
        titleAgenda.textContent = 'Agenda'
        titleContacto.textContent = 'Contacto y Redes Sociales'
    
        biop1.textContent = `Ganador del Concurso Internacional de Guitarra Clásica Ángel G.Piñero 2018 (Primer Premio) y tras haber
                            obtenido más de 10 premios nacionales e internacionales en prestigiosos concursos como el LI Certamen
                            Internacional Francisco Tárrega de Benicàssim, XVII Concurso de música de Benidorm entre otros…
                            Jonathan Esteve Aranda se sitúa actualmente como uno de los guitarristas clásicos más destacados de su generación.`
        biop2.textContent = `Su talento, versatilidad y dominio de los diferentes periodos que componen el repertorio para guitarra, lo
                            convierten en un músico que toca con una personalidad muy destacada, definida, ligada siempre a una
                            amplia técnica. Su guitarra ha sonado en países Europeos como España, Francia, Reino Unido…Entre otras,
                            se presenta en importantes salas: Palacio de ferias y congresos de Málaga, Teatro Arniches, Auditorio
                            Andrés Gaos, Teatro Concha Segura en España, St Olave Hart Street (Londres-Inglaterra) Auditorio Maurice Ravel (Francia)…`
        biop3.textContent = `En 2015, destaca su interpretación y grabación en directo del “Concierto de Aranjuez” junto con la
                            Orquesta sinfónica Castelar. Ha trabajado y compartido escenario con directores de renombre mundial
                            como José Luis Granados, Rafael Vilaplana o Salvador Brotons.`
        biop4.textContent = `Frecuentemente, es invitado como concertista y profesor en importantes citas internacionales: Guitar Fair
                            de Málaga (2014) XXVIII Curso Internacional de Música de Benidorm, Festival internacional andaluz de
                            Saint-Jean de Luz (Francia). Su iniciativa para organizar eventos relacionados con el mundo de la guitarra, le
                            llevan a crear el Certamen de guitarra clásica “Ciudad de Castalla” del cual es promotor y director.`
        biop5.textContent = `Jonathan Esteve Aranda nace en Castalla (Alicante-España). Formado con los maestros Francisco Albert,
                            Victor Bravo y Antonio Clavel en los conservatorios de Villena y Oscar Esplá de Alicante, obtiene el título
                            superior en guitarra con Matrícula de Honor. Maestros como Carles Trepat, Aniello Desiderio, Carlos
                            Bonell… han admirado su forma de interpretar y entender la música. Toca con una guitarra diseñada y
                            construida por el mismo, de forma autodidacta.`

        p3agenda.textContent = 'En su página de Facebook podrás encontrar información a cerca de sus nuevos conciertos y otros datos de interés.'

        fLinkInicio.textContent = 'Inicio'
        fLinkBiografia.textContent = 'Biografía'
        fLinkGaleria.textContent = 'Galeria'
        fLinkVideos.textContent = 'Videos'
        fLinkAgenda.textContent = 'Agenda'
        fLinkContacto.textContent = 'Contacto'

        // spanPreloadIdiomaEs.innerHTML = '<img src="./assets/icons/espain.png" class="icon-idioma-preload" alt=""> Español'
        // spanPreloadIdiomaIn.innerHTML = '<img src="./assets/icons/reino-unido.png" class="icon-idioma-preload" alt=""> English'
        btnPantallaBloqueo.textContent = 'BIENVENIDO'
        break

  }

}

function backToTop() {
  window.scrollTo(0, 0);
}

function showAndHiddenElements() {

  let iconBackToTop = document.getElementById('iconBackToTop')
  let navMenu = document.getElementById('navMenu')
  let ulNavMenu = document.getElementById('ulNavMenu')
  let titleBgHome = document.querySelector('.titleBgHome')

  if (pageYOffset == 0) {
    titleBgHome.style.opacity = '1'
  } else {
    titleBgHome.style.opacity = '0'
  }

  if (pageYOffset < 650) {
    iconBackToTop.style.visibility = 'hidden'
    navMenu.style.backgroundColor = 'transparent'
    navMenu.style.border = 'none'
    ulNavMenu.style.paddingBottom = '2rem'
    ulNavMenu.style.paddingTop = '3rem'
  } else {
    iconBackToTop.style.visibility = 'visible'
    navMenu.style.backgroundColor = 'rgba(0, 0, 0, 0.850)'
    navMenu.style.borderBottom = '1.5px solid white'
    ulNavMenu.style.paddingBottom = '1rem'
    ulNavMenu.style.paddingTop = '1.5rem'
  }

}

window.addEventListener('scroll', () => {
  showAndHiddenElements()
})

function onImagesLoaded(container, event) {

  let images = container.getElementsByTagName("img")
  let loaded = images.length

  for (let i = 0; i < images.length; i++) {
    if (images[i].complete) {
      loaded--
    }
    else {
      images[i].addEventListener("load", function() {
        loaded--
        if (loaded == 0) {
          event()
        }
      });
    }
    if (loaded == 0) {
        event()
    }
  }

}

function hiddenPantallaBloqueo() {
  document.getElementById('pantallaBloqueo').style.opacity = '0'
  setTimeout(() => {
    document.getElementById('pantallaBloqueo').style.display = 'none'
    document.getElementsByTagName('body')[0].style.overflow = 'inherit'
    document.getElementsByTagName('body')[0].style['overflow-x'] = 'hidden'
  }, 700)
}

function showBtnaToToGetIn() {

  let h1PantallaBloqueo = document.getElementById('h1PantallaBloqueo')
  let h2PantallaBloqueo = document.getElementById('h2PantallaBloqueo')
  let imgPantallaBloqueo = document.getElementById('imgPantallaBloqueo')
  let btnPantallaBloqueo = document.getElementById('btnPantallaBloqueo')
  let idiomaPreload = document.getElementById('idiomaPreload')

  h1PantallaBloqueo.style.display = 'none'
  h2PantallaBloqueo.style.display = 'none'
  imgPantallaBloqueo.style.display = 'none'
  btnPantallaBloqueo.style.display = 'block'
  idiomaPreload.style.display = 'block'

}

function clickBtnaToToGetIn() {

  hiddenPantallaBloqueo()
  playAndPauseAudio()
}

function onLoad() {

  changeLanguageNavigator()
  let container = document.getElementsByTagName("body")[0];
  onImagesLoaded(container, showBtnaToToGetIn)

}

function onClickLink() {
  let navMenu = document.getElementById('navMenu')
  window.innerWidth <= 960 ? navMenu.style.display = 'none' : ''
}

function playAndPauseAudio() {

  let controlAudio = document.getElementById('controlAudio')
  let audioBg = document.getElementById('audioBg')

  if(controlAudio.getAttribute('custom-status') === 'pause') {
    controlAudio.setAttribute('src', './assets/icons/icons8-pausa-50.png')
    controlAudio.setAttribute('custom-status', 'play')
    audioBg.play()
  } else {
    controlAudio.setAttribute('src', './assets/icons/icons8-play-50.png')
    controlAudio.setAttribute('custom-status', 'pause')
    audioBg.pause()
  }

}

function changeLanguageNavigator() {

  let navigatorL = navigator.language;

  if (navigatorL == 'es-ES' || navigatorL == 'es') {
    changeLanguage('es')
  } else { 
    changeLanguage('en')
  }
}