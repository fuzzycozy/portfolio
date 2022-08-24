let idx;

////////////홈버튼(로고)///////////////////////////////////////////
$('h1').click(function () {
    $(location).attr('href', 'index.html');
});


////////////// 버거메뉴 //////////////////////////////////////////
$('.burger').on('click', function () {
    $(this).toggleClass('active');
    $('nav').toggleClass('active');
    $('main').toggleClass('menuOn');
    $('#fp-nav.right').toggleClass('menuOn');
})


////////////////////// fullpage js //////////////////////////////
$(document).ready(function () {
    $('#fullpage').fullpage({
        //options here

        dragAndMove: true,
        navigation: true,
        navigationPosition: 'right',

        anchors: ['cover', 'works01', 'works02', 'works03', 'works04']
    });

    //methods
    // $.fn.fullpage.setAllowScrolling(false);
});


///////////////////  팝업 //////////////////////////////


// 팝업 on
$('.view').each(function (k, v) {
    $(v).on('click', function () {
        console.log(k);

        $('.pup_wrap').addClass('active');
        $('.pupX').addClass('active');

        $('.pup_cont').eq(k).addClass('active');

        

    })
})

$('html,body').on('mousewheel',function(){
    if($('.pup_wrap').hasClass('active')){
        event.stopPropagation();
        event.stopImmediatePropagation();    
    }
});

// 팝업 close
$('.pupX').on('click', function () {
    $('.pup_wrap').removeClass('active');
    $('.pupX').removeClass('active');

    $('.pup_cont').removeClass('active');
})

// 팝업 scroll, swiper
var swiper = new Swiper(".pup_wrap", {
    direction: "vertical",
    slidesPerView: "auto",
    freeMode: true,
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    mousewheel: true,
  });


