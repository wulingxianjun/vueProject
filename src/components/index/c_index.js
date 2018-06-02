// require './config'
// require(['config'],function(){
//     require(['swiper'],function($){
//         certifySwiper = new Swiper('.swiper-container', {
//                 watchSlidesProgress: true,
//                 slidesPerView: 'auto',
//                 centeredSlides: true,
//                 loop: true,
//                 loopedSlides: 5,
//                 autoplay: true, 
//                 on: {
//                     progress: function(progress) {
//                         for (i = 0; i < this.slides.length; i++) {
//                             var slide = this.slides.eq(i);
//                             var slideProgress = this.slides[i].progress;

//                             if (Math.abs(slideProgress) > 1) {
//                                 modify = (Math.abs(slideProgress) - 1) * 0.4 + 1;
//                             }
//                             translate = slideProgress * modify * 318 + 'px';
//                             scale = 1 - Math.abs(slideProgress) / 5;
//                             zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
//                             slide.transform('translateX(' + translate + ') scale(' + scale + ')');
//                             slide.css('zIndex', zIndex);
//                             slide.css('opacity', 1);
//                             if (Math.abs(slideProgress) > 3) {
//                                 slide.css('opacity', 0);
//                             }
//                         }
//                     },
//                     setTransition: function(transition) {
//                         for (var i = 0; i < this.slides.length; i++) {
//                             var slide = this.slides.eq(i)
//                             slide.transition(transition);
//                         }

//                     }
//                 }
//         })
//     })
// })
// document.addEventListener('DOMContentLoaded',function(){
    
// })
    