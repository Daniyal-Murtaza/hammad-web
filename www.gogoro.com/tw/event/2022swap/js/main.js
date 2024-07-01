(function () {
  $('.journal-list.slider').slick({
    arrows: false,
    dots: true,
  });

  new WordSlide(document.querySelector('.sign-list')).play();

  var videos = document.body.querySelectorAll('video');
  var storyVideos = document.body.querySelectorAll('div.story-video');

  function loadVideo() {
    if (window.matchMedia('(max-width: 767px)').matches) {
      videos.forEach(video => {
        video.src = video.src.replace('.mp4', '-mobile.mp4');
      });
    }
  };
  loadVideo();

videos.forEach(function(video, i) {  
  ScrollTrigger.create({
    trigger: video,
    start: 'top center',
    onEnter: () => video.play()
  });
})

storyVideos.forEach(function(storyVideo, i) {  
  ScrollTrigger.create({
    trigger: storyVideo,
    toggleClass: 'active'
  });
})

})();