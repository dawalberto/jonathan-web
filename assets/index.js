function toogleNav() {
  let navMenu = document.getElementById('navMenu')
  navMenu.style.display === 'block' ? navMenu.style.display = 'none' : navMenu.style.display = 'block'
}

Galleria.loadTheme('librerias/galleria/themes/classic/galleria.classic.min.js')

Galleria.run('.galleria', {
  autoplay: 3000
})

function changeLanguage(lan) {

  let linkInicio = document.getElementById('linkInicio')
  let linkGaleria = document.getElementById('linkGaleria')
  let linkVideos = document.getElementById('linkVideos')
  let linkNoticias = document.getElementById('linkNoticias')
  let linkContacto = document.getElementById('linkContacto')

  let titleBiografia = document.getElementById('titleBiografia')
  let titleGaleria = document.getElementById('titleGaleria')
  let titleVideos = document.getElementById('titleVideos')
  let titleNoticias = document.getElementById('titleNoticias')
  let titleContacto = document.getElementById('titleContacto')

  let biop1 = document.getElementById('biop1')
  let biop2 = document.getElementById('biop2')
  let biop3 = document.getElementById('biop3')
  let biop4 = document.getElementById('biop4')
  let biop5 = document.getElementById('biop5')

  switch (lan) {

    case 'en':
        linkInicio.textContent = 'Home'
        linkGaleria.textContent = 'Gallery'
        linkVideos.textContent = 'Videos'
        linkNoticias.textContent = 'News'
        linkContacto.textContent = 'Contact'
    
        titleBiografia.textContent = 'Biography'
        titleGaleria.textContent = 'Gallery'
        titleVideos.textContent = 'Videos'
        titleNoticias.textContent = 'News'
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
        break
    case 'es':
        linkInicio.textContent = 'Inicio'
        linkGaleria.textContent = 'Galeria'
        linkVideos.textContent = 'Videos'
        linkNoticias.textContent = 'Noticias'
        linkContacto.textContent = 'Contacto'
    
        titleBiografia.textContent = 'Biografía'
        titleGaleria.textContent = 'Galeria'
        titleVideos.textContent = 'Videos'
        titleNoticias.textContent = 'Noticias'
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
        break

  }

}

function backToTop() {
  window.scrollTo(0, 0);
}

function showAndHiddenElements() {

  let iconBackToTop = document.getElementById('iconBackToTop')
  let navMenu = document.getElementById('navMenu')

  if (pageYOffset < 850) {
    iconBackToTop.style.visibility = 'hidden'
    navMenu.style.backgroundColor = 'transparent'
    navMenu.style.border = 'none'
  } else {
    iconBackToTop.style.visibility = 'visible'
    navMenu.style.backgroundColor = 'rgba(0, 0, 0, 0.850)'
    navMenu.style.borderBottom = '1.5px solid white'
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
  document.getElementById('pantallaBloqueo').style.display = 'none'
}

function onLoad() {

  let container = document.getElementsByTagName("body")[0];
  onImagesLoaded(container, hiddenPantallaBloqueo)

}

function onClickLink() {
  let navMenu = document.getElementById('navMenu')
  window.innerWidth <= 960 ? navMenu.style.display = 'none' : ''
}

// alert(window.innerWidth)