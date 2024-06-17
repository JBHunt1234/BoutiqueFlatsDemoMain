document.addEventListener('DOMContentLoaded', function() {
  run();
});

function run() {
  var slider = document.querySelector('.js-carousel');
  if(slider) {
    lory(slider, {
      infinite: 1,
      enableMouseEvents: true,
      classNameFrame: 'js-carousel__frame',
      classNameSlideContainer: 'js-carousel__slides',
      classNamePrevCtrl: 'js-carousel__prev',
      classNameNextCtrl: 'js-carousel__next',
    });
  
    slider.addEventListener('before.lory.slide', handleBeforeEvent);
  }
  
}

function handleBeforeEvent(event) {
  var increment = "+";

  if (event.detail.index > event.detail.nextSlide) {
      increment = "-";
  }
}
 