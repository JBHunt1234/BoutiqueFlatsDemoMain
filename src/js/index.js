(function(){
  const body = document.body;
  const openMenu = document.getElementById('openMenu');
  const closeMenu = document.getElementById('closeMenu');
  const mobileNav = document.getElementById('mobileNavigationMenu');
  const locationToggle = document.getElementById('locationToggle');
  const locations = document.getElementById('locations');


  openMenu.addEventListener('click', (event) => {
    
    event.preventDefault();
    console.log('click')
    mobileNav.classList.add('visible');
    body.classList.add('modal-open');
  });

  closeMenu.addEventListener('click', (event) => {
    event.preventDefault();
    mobileNav.classList.remove('visible');
    body.classList.remove('modal-open');
  });

  locationToggle.addEventListener('click', (event) => {
    event.preventDefault();
    locations.classList.toggle("open");
  })
  

})();