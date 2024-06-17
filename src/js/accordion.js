
(function(){

  const accordionToggles = document.querySelectorAll('.accordion-toggle');
  for (var i = 0; i < accordionToggles.length; ++i) {
    accordionToggles.item(i).addEventListener("click", function(event) {
      const toggle = event.target;
      const accordion = toggle.parentNode;

      accordion.classList.toggle('open');
      const accordionBody = accordion.querySelector('.accordion-body');
      const accordionInnerWrapper = accordion.querySelector('.inner-wrapper');
      if(accordion.classList.contains('open')) {
        const innerHeight = accordionInnerWrapper.clientHeight + 17;
        accordionBody.style.maxHeight = innerHeight + 'px'
        gtag('event', 'faqs', {'event_category': toggle.dataset.slug});
      } else {
        accordionBody.style.maxHeight = '0px'
      }

      
      

    });
  }

})();
