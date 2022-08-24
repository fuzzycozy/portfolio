




//////////////// skill /////////////////////////////////////
$('.skill').hover(function(){
  idx = $(this).index();

  $('.skill').not(this).addClass('gray')
  $('.skill').eq(idx).addClass('active')
},function(){
  $('.skill').removeClass('gray')
  $('.skill').removeClass('active')
  
})


// $('.skill').on('click',function(){
//   idx = $(this).index();

//   $('.skill').removeClass('active')
//   $('.skill').eq(idx).addClass('active')

  
// })


///////////////// story ////////////////////////////////////

// swiper
var swiper = new Swiper(".story", {
    spaceBetween: 30,
    effect: "fade",
    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });