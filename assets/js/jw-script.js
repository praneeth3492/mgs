/***********
  Copyright 2020 by James Wagner.
  All rights reserved.
***********/

var slides = document.querySelectorAll(".slide2");

var scrollPos = 0;

window.addEventListener('wheel', function(e) {
  var scroller2 = document.querySelector(".scroller2");
  
  if (e.deltaY > 0) {
    if (scrollPos < window.innerWidth * 0.6 * slides.length) scrollPos += 100;
  } else {
    if (scrollPos != 0) scrollPos -= 100;
  }
  
  //var scroller = document.querySelector(".scroller");
  //scroller.scrollTo(scrollPos, 0);
  
  
  slides.forEach((slide2, index) => {
    
    /*if (slide == slides[slides.length - 1]) {
 
      if (window.innerWidth * 0.8 * slides.length < scrollPos) {
        return;
      }
    }*/
    
    //console.log(slide);
    let photo = slide2.querySelector(".photo");
    let text = slide2.querySelector(".text");
    photo.style.transform = `translateX(-${scrollPos}px)`;
    text.style.transform = `translateX(-${scrollPos}px)`;
  });
});


// gesture detect
document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
        if ( xDiff > 0 ) {
            if (scrollPos < window.innerWidth * 0.6 * slides.length) scrollPos += 100;
        } else {
            if (scrollPos != 0) scrollPos -= 100;
        }   
      
      slides.forEach((slide2, index) => {
    
        /*if (slide == slides[slides.length - 1]) {

          if (window.innerWidth * 0.8 * slides.length < scrollPos) {
            return;
          }
        }*/

        //console.log(slide);
        let photo = slide2.querySelector(".photo");
        let text = slide2.querySelector(".text");
        photo.style.transform = `translateX(-${scrollPos}px)`;
        text.style.transform = `translateX(-${scrollPos}px)`;
      });
      
    } 
    /* reset values */
    xDown = null;
    yDown = null;                                             
};