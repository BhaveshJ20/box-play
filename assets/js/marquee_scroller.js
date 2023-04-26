jQuery(function($) {
  if ($(".demo1").length > 0){
    var mainTicker = new Flickity( '.demo1', {
      accessibility: true,
      resize: true,
      wrapAround: true,
      prevNextButtons: true,
      pageDots: false,
      percentPosition: true,
      setGallerySize: true,
    });
  
    // Set initial position to be 0
    mainTicker.x = 0;
  
    // Start the marquee animation
    play();
  
    // Main function that 'plays' the marquee.
    function play() {
      // Set the decrement of position x
      mainTicker.x -= 1.5;
  
      // Settle position into the slider
      mainTicker.settle(mainTicker.x);
  
      // Set the requestId to the local variable
      requestId = window.requestAnimationFrame(play);
    }
  
    // Main function to cancel the animation.
    function pause() {
      if(requestId) {
        // Cancel the animation
        window.cancelAnimationFrame(requestId)
  
        // Reset the requestId for the next animation.
        requestId = undefined;
      }
    }
  
    // Pause on hover/focus
    $('.demo1').on('mouseenter focusin', e => {
      pause();
    });
  
    // Unpause on mouse out / defocus
    $('.demo1').on('mouseleave', e => {
      play();
    });
  }
    var mainTicker2 = new Flickity( '.demo2', {
      accessibility: true,
      resize: true,
      wrapAround: true,
      prevNextButtons: false,
      pageDots: false,
      percentPosition: true,
      setGallerySize: true,
    });
  
    // Set initial position to be 0
    mainTicker2.x = 0;
  
    // Start the marquee animation
    play2();
  
    // Main function that 'plays' the marquee.
    function play2() {
      // Set the decrement of position x
      mainTicker2.x -= 1.5;
  
      // Settle position into the slider
      mainTicker2.settle(mainTicker2.x);
  
      // Set the requestId to the local variable
      requestId2 = window.requestAnimationFrame(play2);
    }
  
    // Main function to cancel the animation.
    function pause2() {
      if(requestId) {
        // Cancel the animation
        window.cancelAnimationFrame(requestId2)
  
        // Reset the requestId for the next animation.
        requestId2 = undefined;
      }
    }
  
    // Pause on hover/focus
    $('.demo2').on('mouseenter focusin', e => {
      pause2();
    });
  
    // Unpause on mouse out / defocus
    $('.demo2').on('mouseleave', e => {
      play2();
    });

});

