(function () {
   $('a[href^="#"]').bind('click.smoothscroll',function (e) {
    e.preventDefault();
    var target = this.hash,
    $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 1000, 'swing');
  });

  gsap.to(".intro-bg", {
    scrollTrigger: {
      trigger: ".intro-bg",
      scrub: true
    },
    y: '-20%'
  });

  gsap.to(".teach-asset .section-object-1", {
    scrollTrigger: {
      trigger: ".teach-asset .section-object-1",
      scrub: true
    },
    y: '-700px'
  });

  gsap.to(".teach-asset .section-object-2", {
    scrollTrigger: {
      trigger: ".teach-asset .section-object-2",
      scrub: true
    },
    y: '-680px'
  });

  gsap.to(".teach-asset .section-object-3", {
    scrollTrigger: {
      trigger: ".teach-asset .section-object-3",
      scrub: true
    },
    y: '0px'
  });

  $('.stayhome-gallery').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false
  });

  $('.asset-slider.slide-show-3').slick({
    slidesToShow: 3,
    arrows: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 835,
        settings: "unslick"
      }
    ]
  });

  $('.asset-slider.slide-show-2').slick({
    slidesToShow: 2,
    arrows: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 835,
        settings: "unslick"
      }
    ]
  });

  $('.asset-slider.slide-show-1').slick({
    slidesToShow: 1,
    arrows: true,
    centerMode: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 835,
        settings: "unslick"
      }
    ]
  });

  $('.more-content-button').on('click', function(){
    var expendHeight = $(this).prev('.asset-content').prop('scrollHeight');
    $(this).prev('.asset-content').css("max-height" ,expendHeight);
    $(this).remove();
  })
})();