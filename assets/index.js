function toogleNav() {
  let navMenu = document.getElementById('navMenu');
  navMenu.style.display === 'block' ? navMenu.style.display = 'none' : navMenu.style.display = 'block'
}

Galleria.loadTheme('librerias/galleria/themes/classic/galleria.classic.min.js')

Galleria.run('.galleria', {
  autoplay: 3000
})