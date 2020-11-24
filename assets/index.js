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
    
        biop1.textContent = `First prize in the V International Competition of Classical Guitar Angel G. Piñero 2018, 
                            Award to the best Spanish guitarist born in the Valencian community in the LI Certamen Internacional Francisco Tárrega 
                            de Benicássim 2017, Second prize in the XVII International Music Competition of Benidorm 2015, and after having won 
                            over 10 national and international awards to date... Jonathan Esteve Aranda is currently one of the most outstanding 
                            guitarists of his generation.`
        biop2.textContent = `Demonstrating in his concerts versatility, knowledge and mastery of the different periods of the 
                            repertoire, these are qualities that make him a musician with great personality accompanied by a broad and 
                            consolidated technique. His guitar has sounded in European countries such as France, Spain, the United Kingdom... 
                            performing in capitals such as London or Madrid among others. He has played in important venues such as: Carlos de 
                            Amberes Foundation in Madrid, ADDA Concert Hall in Alicante, Malaga Fair and Congress Center, Pedro Muñoz Seca Theater, 
                            Andrés Gaos Auditorium, Concha Segura Theater, St Olave Hart Street (London-England) Maurice Ravel Auditorium (France)`
        biop3.textContent = `His concerts with a symphony orchestra stand out, the first of which took place in 2015, where he 
                            performed the Aranjuez concert by Joaquín Rodrigo with great success. He has worked and shared the stage with 
                            world-renowned directors such as José Luis Granados, Rafael Vilaplana or Salvador Brotons.`
        biop4.textContent = `He is frequently invited as a soloist and teacher in important international events: Guitar Fair 
                            in Malaga 2014, XXVIII International Course of Music in Benidorm, Andalusian International Festival of Saint-Jean de 
                            Luz (France). His initiative to organize events related to the world of guitar led him to create the classical guitar 
                            contest "Ciudad de Castalla" of which he is the director.`
        biop5.textContent = `Jonathan Esteve was born in Castalla (Alicante-Spain). Formed with the teachers Francisco Albert, 
                            Victor Bravo and Antonio Clavel in the conservatories of Villena and Oscar Esplá in Alicante, he completed his higher 
                            studies in guitar with honours. At the same time, he complements his training with guitarists such as Carles Trepat 
                            and Carlos Bonell.`

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
    
        biop1.textContent = `Primer premio en el V Concurso Internacional de Guitarra Clásica Ángel G. Piñero 2018, Premio al 
                            mejor guitarrista español nacido en la comunidad valenciana en el LI Certamen Internacional Francisco Tárrega de 
                            Benicássim 2017, Segundo Premio en el XVII Concurso Internacional de Música de Benidorm 2015, y tras haber obtenido 
                            hasta la fecha más de 10 premios nacionales e internacionales…Jonathan Esteve Aranda se sitúa actualmente como uno 
                            de los guitarristas más destacados de su generación.`
        biop2.textContent = `Demostrando en sus conciertos versatilidad, conocimiento y dominio de los diferentes periodos del 
                            repertorio, son cualidades que hacen de él un músico con gran personalidad acompañada de una amplia y consolidada 
                            técnica. Su guitarra, ha sonado en países Europeos como Francia, España, Reino Unido…presentándose en capitales cómo 
                            Lóndres o Madrid entre otras. Ha tocado en importantes salas cómo: Fundación Carlos de Amberes en Madrid, ADDA 
                            Concert Hall de Alicante, Palacio de ferias y congresos de Málaga, Teatro Pedro Muñoz Seca, Auditorio Andrés Gaos, 
                            Teatro Concha Segura, St Olave Hart Street (Londres-Inglaterra) Auditorio Maurice Ravel (Francia)… `
        biop3.textContent = `Destacan sus conciertos con orquesta sinfónica, teniendo lugar el primero de ellos en el año 2015, 
                            donde interpretó con gran éxito el concierto de Aranjuez de Joaquín Rodrigo. Ha trabajado y compartido escenario con 
                            directores de renombre mundial como José Luis Granados, Rafael Vilaplana o Salvador Brotons.`
        biop4.textContent = `Frecuentemente, es invitado como concertista y profesor en importantes citas internacionales: 
                            Guitar Fair de Málaga 2014, XXVIII Curso Internacional de Música de Benidorm, Festival internacional andaluz de 
                            Saint-Jean de Luz (Francia). Su iniciativa para organizar eventos relacionados con el mundo de la guitarra, le llevan 
                            a crear el certamen de guitarra clásica “Ciudad de Castalla” del cual es director.`
        biop5.textContent = `Jonathan Esteve nace en Castalla (Alicante-España). Formado con los maestros Francisco Albert, 
                            Victor Bravo y Antonio Clavel en los conservatorios de Villena y Oscar Esplá en Alicante, completa los estudios 
                            superiores en guitarra con Matrícula de Honor. Paralelamente complementa su formación con guitarristas cómo 
                            Carles Trepat y Carlos Bonell.`

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