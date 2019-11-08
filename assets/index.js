Galleria.loadTheme('librerias/galleria/themes/classic/galleria.classic.min.js')

Galleria.run('.galleria', {
  autoplay: 3000
})

$.klAnimate()

window.addEventListener('scroll', () => {
  showAndHiddenElements()
})

document.querySelector('#titleGaleria').style.visibility = 'hidden'

const elementsAMenu = Array.from(document.getElementsByClassName('linkMenu'))
const elementsLiMenu = Array.from(document.getElementsByClassName('liNav'))
const elementsColorTheme = Array.from(document.getElementsByClassName('colorTheme'))

elementsAMenu.forEach(element => {
  addEventAnimatedStartEnd(element, 'pulse', 'mouseover', 'mouseout')
})


// funciones

function toogleNav() {
  let navMenu = document.getElementById('navMenu')
  navMenu.style.display === 'block' ? navMenu.style.display = 'none' : navMenu.style.display = 'block'
}

function changeLanguage(lan) {

  let linkInicio = document.getElementById('linkInicio')
  linkBiografia = document.getElementById('linkBiografia'),
  linkGaleria = document.getElementById('linkGaleria'),
  linkVideos = document.getElementById('linkVideos'),
  linkAgenda = document.getElementById('linkAgenda'),
  linkContacto = document.getElementById('linkContacto')

  titleBiografia = document.getElementById('titleBiografia'),
  titleGaleria = document.getElementById('titleGaleria'),
  titleVideos = document.getElementById('titleVideos'),
  titleAgenda = document.getElementById('titleAgenda'),
  titleContacto = document.getElementById('titleContacto'),

  biop1 = document.getElementById('biop1'),
  biop2 = document.getElementById('biop2'),
  biop3 = document.getElementById('biop3'),
  biop4 = document.getElementById('biop4'),
  biop5 = document.getElementById('biop5'),

  p1agenda = document.getElementById('p1agenda'),
  p2agenda = document.getElementById('p2agenda'),
  p3agenda = document.getElementById('p3agenda'),

  fLinkInicio = document.getElementById('fLinkInicio'),
  fLinkBiografia = document.getElementById('fLinkBiografia'),
  fLinkGaleria = document.getElementById('fLinkGaleria'),
  fLinkVideos = document.getElementById('fLinkVideos'),
  fLinkAgenda = document.getElementById('fLinkAgenda'),
  fLinkContacto = document.getElementById('fLinkContacto'),

  fLinkEspa = document.getElementById('fLinkEspa'),
  fLinkIng = document.getElementById('fLinkIng')

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
    
        biop1.textContent = `His great talent, versatility and mastery of the different periods of the repertoire for 
                             classical guitar, make him a musician who plays with a lot of personality, linked to a broad 
                             technique and great sound possibilities. His guitar has played in European countries such as 
                             Spain, France, United Kingdom … Among others, he performs in important venues in Spain such as: 
                             Palace of fairs and congresses of Malaga, Arniches Theater, Andrés Gaos Auditorium, Concha Segura 
                             Theater, St Olave Hart Street (London-England) Maurice Ravel Auditorium (France)…`
        biop2.textContent = `Winner of the International Guitar Competition Angel G. Piñero 2018, and after having won more than 
                             10 international awards in prestigious events such as Francisco Tárrega of Benicássim, Benidorm Music 
                             Contest or Ángel G. Piñero (El Puerto de Santa María- Spain) Jonathan Esteve Aranda is currently one 
                             of the best classical guitarists of his generation.`
        biop3.textContent = `In 2015, he highlights his interpretation and live recording of the famous “Concierto de Aranjuez” 
                             together with the Castelar symphony orchestra. He has worked and shared a poster with world-renowned 
                             directors such as José Luis Granados, Rafael Vilaplana and Salvador Brotons.`
        biop4.textContent = `Frequently, he is invited as concertist and professor in important international events: Guitar Fair 
                             de Málaga (2014), XXVIII International Music Course of Benidorm, International Andalusian Festival of 
                             Saint-Jean de Luz (France). His initiative to organize events related to the world of guitar, lead him to 
                             create the classic guitar contest “Ciudad de Castalla” of which he is promoter and director.`
        biop5.textContent = `Jonathan Esteve, born in Castalla (Alicante-Spain). Formed with the masters Francisco Albert, Victor Bravo 
                             and Antonio Clavel at the conservatories of Villena and Oscar Esplá in Alicante, he obtains the superior 
                             title in guitar with Honors. Guitarists like Carles Trepat, Aniello Desiderio, Carlos Bonell … 
                             have recognized and admired the way they play.`

        // p1agenda.textContent = "Don't miss a single concert by Jonathan Esteve."
        // p2agenda.textContent = 'Follow him and find out all his concerts and events.'
        p3agenda.textContent = 'On their Facebook page you can find information about their new concerts and other interesting information.'
        
        fLinkInicio.textContent = 'Home'
        fLinkBiografia.textContent = 'Biography'
        fLinkGaleria.textContent = 'Gallery'
        fLinkVideos.textContent = 'Videos'
        fLinkAgenda.textContent = 'Diary'
        fLinkContacto.textContent = 'Contact'

        fLinkEspa.textContent = 'Spanish'
        fLinkIng.textContent = 'English'
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
    
        biop1.textContent = `Ganador del Concurso Internacional de Guitarra Clásica Ángel G. Piñero 2018 (Primer Premio) 
                             y tras haber obtenido más de 10 premios nacionales e internacionales en prestigiosos concursos 
                             como el Francisco Tárrega de Benicássim, Concurso de música de Benidorm entre otros…Jonathan Esteve Aranda 
                             se sitúa actualmente como uno de los más destacados guitarristas clásicos de su generación.`
        biop2.textContent = `Su talento, versatilidad y dominio de los diferentes periodos del repertorio para guitarra clásica, 
                             lo convierten en un músico que toca con una personalidad muy destacada y definida, ligada siempre a 
                             una amplia técnica que ofrece grandes posibilidades sonoras. Su guitarra ha sonado en países Europeos 
                             como España, Francia, Reino Unido…Entre otras, se presenta en importantes salas como: Palacio de ferias y 
                             congresos de Málaga, Teatro Arniches, Auditorio Andrés Gaos, Teatro Concha Segura en España, St Olave Hart Street 
                             (Londres-Inglaterra) Auditorio Maurice Ravel (Francia)…`
        biop3.textContent = `En 2015, destaca su interpretación y grabación en directo del famoso “Concierto de Aranjuez” junto con la orquesta 
                             sinfónica Castelar. Ha trabajado y compartido escenario con directores de renombre mundial como José Luis Granados, 
                             Rafael Vilaplana o Salvador Brotons.`
        biop4.textContent = `recuentemente, es invitado como concertista y profesor en importantes citas internacionales: Guitar Fair de Málaga 
                             (2014), XXVIII Curso Internacional de Música de Benidorm, Festival internacional andaluz de Saint-Jean de Luz (Francia). 
                             Su iniciativa para organizar eventos relacionados con el mundo de la guitarra, le llevan a crear el Certamen de guitarra 
                             clásica “Ciudad de Castalla” del cual es promotor y director.`
        biop5.textContent = `Jonathan Esteve nace en Castalla (Alicante-España). Formado con los maestros Francisco Albert, Victor Bravo y Antonio 
                             Clavel en los conservatorios de Villena y Oscar Esplá en Alicante, obtiene el título superior en guitarra con Matrícula 
                             de Honor. Guitarristas como Carles Trepat, Aniello Desiderio, Carlos Bonell… han reconocido y admirado su forma de tocar.`

        // p1agenda.textContent = 'No te pierdas ni un solo concierto de Jonathan Esteve.'
        // p2agenda.textContent = 'Sigue todos sus proyectos y acontecimientos.'
        p3agenda.textContent = 'En su página de Facebook podrás encontrar información a cerca de sus nuevos conciertos y otros datos de interés.'

        fLinkInicio.textContent = 'Inicio'
        fLinkBiografia.textContent = 'Biografía'
        fLinkGaleria.textContent = 'Galeria'
        fLinkVideos.textContent = 'Videos'
        fLinkAgenda.textContent = 'Agenda'
        fLinkContacto.textContent = 'Contacto'

        fLinkEspa.textContent = 'Español'
        fLinkIng.textContent = 'Inglés'
        break

  }

}

function backToTop() {
  window.scrollTo(0, 0);
}

function showAndHiddenElements() {
  
  let iconBackToTop = document.getElementById('iconBackToTop'),
  navMenu = document.getElementById('navMenu'),
  ulNavMenu = document.getElementById('ulNavMenu'),
  titleGaleria =  document.querySelector('#titleGaleria')
  
  if (pageYOffset > (titleGaleria.offsetTop - titleGaleria.offsetHeight) - 500 && !Array.from(titleGaleria.classList).includes('animated')) {
    document.querySelector('#titleGaleria').style.visibility = 'visible'
    titleGaleria.classList.add('animated', 'bounceInLeft')
  }

  if (pageYOffset < 850) {
    iconBackToTop.style.visibility = 'hidden'
    navMenu.style.backgroundColor = 'transparent'
    navMenu.style.border = 'none'
    ulNavMenu.style.paddingBottom = '2rem'
    ulNavMenu.style.paddingTop = '3rem'
    menuHome()
  } else {
    iconBackToTop.style.visibility = 'visible'
    navMenu.style.backgroundColor = 'rgba(0, 0, 0, 0.850)'
    navMenu.style.borderBottom = '1.5px solid white'
    ulNavMenu.style.paddingBottom = '1rem'
    ulNavMenu.style.paddingTop = '1.5rem'

    if (navMenu.style.textAlign === 'left') 
      menuBody()
  }

}

function onImagesLoaded(container, event) {

  let images = container.getElementsByTagName("img"),
  loaded = images.length

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
  document.getElementById('pantallaBloqueo').style.display = 'none'
}

function showBtnToGetin() {

  let h1PantallaBloqueo = document.getElementById('h1PantallaBloqueo'),
  h2PantallaBloqueo = document.getElementById('h2PantallaBloqueo'),
  imgPantallaBloqueo = document.getElementById('imgPantallaBloqueo'),
  btnPantallaBloqueo = document.getElementById('btnPantallaBloqueo')

  h1PantallaBloqueo.style.display = 'none'
  h2PantallaBloqueo.style.display = 'none'
  imgPantallaBloqueo.style.display = 'none'
  btnPantallaBloqueo.style.display = 'block'

}

function clickBtnToGetin() {

  window.scrollTo(0, 0);
  menuHome()
  hiddenPantallaBloqueo()
  playAndPauseAudio()

}

function onLoad() {

  let container = document.getElementsByTagName("body")[0];
  onImagesLoaded(container, showBtnToGetin)

}

function onClickLink() {
  let navMenu = document.getElementById('navMenu')
  window.innerWidth <= 960 ? navMenu.style.display = 'none' : ''
}

function playAndPauseAudio() {

  let controlAudio = document.getElementById('controlAudio'),
  audioBg = document.getElementById('audioBg')

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

function addEventAnimatedStartEnd(element, animationValue, eventToAdd, eventToRemove) {

  element.addEventListener(eventToAdd, () => {
    element.classList.add('animated', animationValue)
  })
  element.addEventListener(eventToRemove, () => {
    element.classList.remove('animated', animationValue)
  })

}

function menuHome() {

  let navMenu = document.querySelector('#navMenu')

  addStyleToElements(elementsLiMenu, 'marginTop', '5rem')

  if (innerWidth >= 960) {
    addStyleToElements(elementsAMenu, 'width', '10rem')
    addStyleToElements(elementsAMenu, 'borderRadius', '3px')
    addStyleToElements(elementsAMenu, 'padding', '0.5rem 0.5rem 0 0.5rem')
    addStyleToElements(elementsAMenu, 'textAlign', 'left')
    addStyleToElements(elementsLiMenu, 'display', 'block')
    navMenu.style.textAlign = 'left'

    addStyleToElements(elementsAMenu, 'border', '1px solid transparent')
    addStyleToElements(elementsAMenu, 'backgroundColor', '#2D3440')
  }

}

function menuBody() {

  let navMenu = document.querySelector('#navMenu')
  
  addStyleToElements(elementsLiMenu, 'marginTop', 'initial')

  if (innerWidth >= 960) {
    addStyleToElements(elementsAMenu, 'width', 'initial')
    addStyleToElements(elementsAMenu, 'borderRadius', 'none')
    addStyleToElements(elementsAMenu, 'padding', 'initial')
    addStyleToElements(elementsAMenu, 'textAlign', 'initial')
    addStyleToElements(elementsLiMenu, 'display', 'inline')
    navMenu.style.textAlign = 'center'

    addStyleToElements(elementsAMenu, 'border', 'none')
    addStyleToElements(elementsAMenu, 'backgroundColor', 'transparent')
  }

}

function addStyleToElements(elements, style, value) {

  for (let i = 0; i < elements.length; i++) {
    elements[i].style[style] = value
  }

}

function changeTheme(deflt, black) {

  let body = document.getElementsByTagName('body')[0],
  agenda = document.querySelector('#agenda'),
  contacto = document.querySelector('#contacto'),
  jEsteveTitle = document.querySelector('#jEsteveTitle')

  if (black) {
    addStyleToElements([body, agenda, contacto], 'backgroundColor', 'black')
    addStyleToElements(elementsColorTheme, 'color', '#F5F5F5')
    jEsteveTitle.style.color = 'black'
  } else {
    addStyleToElements([body, agenda, contacto], 'backgroundColor', 'white')
    addStyleToElements(elementsColorTheme, 'color', '#37474F')
    jEsteveTitle.style.color = 'white'

  }

}

