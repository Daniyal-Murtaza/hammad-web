(function ($, TM) {


  var openVideoModal = function (e) {
    e.preventDefault();
    e.stopPropagation();

    var $modal = $('<div>', { class: 'video-modal' });
    var $close = $('<a>', { class: 'video-close-btn' });
    var $wrapper = $('<div>', { class: 'video-wrapper container' });
    var $video = $('<iframe>', {
      src: '//www.youtube.com/embed/' + $(this).data('youtube-id') + '?enablejsapi=1&autoplay=1&rel=0&vq=hd720',
      allowfullscreen: '',
      frameborder: '0',
      class: 'video-iframe'
    });

    var close = function (e) {
      var $target = $(e.target);
      if ($target.is($close) || $target.is($modal)) {
        TM.to($modal, .5, { opacity: 0, onComplete: function () {
          "use strict";
          $modal.remove();
        }});

      }
    };

    $modal.append($close);
    $wrapper.append($video).appendTo($modal);
    $modal.appendTo($('body'));

    TM.from($modal, .5, { opacity: 0 }, { opacity: 1});

    $close.one('click', close);
    $modal.one('click', close);
  };


  var init = function () {
    var $elements = $('[data-youtube-id]');

    if ($elements.length) {
      $elements.on('click', openVideoModal);
    }

  };

  init();
})(jQuery, TweenMax);
