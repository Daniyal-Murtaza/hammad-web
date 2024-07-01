(function ($, TM) {

  var copyLink = function() {
    var hyperLink = 'https://www.gogoro.com/tw/staycreative/';
    var $button = $('.copy-button');
    if ($button.length) {
      $button.on('click', function(){
        $button.removeClass('success failed');
        navigator.clipboard.writeText(hyperLink).then(function() {
          $button.addClass('success');
        }, function(err) {
          $button.addClass('failed');
        });
      });
    }
  }

  var openPopupModalShare = function (e) {
    e.preventDefault();
    e.stopPropagation();

    var $modal = $('<div>', { class: 'popup-modal' });
    var $close = $('<a>', { class: 'popup-close-btn' });
    var $wrapper = $('<div>', { class: 'popup-wrapper container' });
    var $shareContent = $('<div class="popup-content share">' + '<div class="share-wrapper">' + '<div class="title">複製網址，立馬分享出去</div>' + '<div class="hyperlink">https://www.gogoro.com/tw/staycreative</div>' + '<div class="copy-button"><span>複製網址</span></div>' + '</div>' + '</div>');

    var close = function (e) {
      var $target = $(e.target);
      if ($target.is($close) || $target.is($modal)) {
        TM.to($modal, .5, { opacity: 0, onComplete: function () {
          "use strict";
          $modal.remove();
        }});
      }
    };

    $wrapper.append($close);
    $wrapper.append($shareContent).appendTo($modal);
    $modal.appendTo($('body'));

    TM.from($modal, .5, { opacity: 0 }, { opacity: 1});

    $close.one('click', close);
    $modal.one('click', close);

    copyLink();
  };

  var openPopupModalOk = function (e) {
    e.preventDefault();
    e.stopPropagation();

    var $modal = $('<div>', { class: 'popup-modal' });
    var $close = $('<a>', { class: 'popup-close-btn' });
    var $wrapper = $('<div>', { class: 'popup-wrapper container' });
    var $okContent = $('<a href="http://promotion.gogoro.com/tw/summer-campaign-sp" target="_blank" class="popup-content ok">' + '<div>更好康的在這裡</div>' + '</a>');

    var close = function (e) {
      var $target = $(e.target);
      if ($target.is($close) || $target.is($modal)) {
        TM.to($modal, .5, { opacity: 0, onComplete: function () {
          "use strict";
          $modal.remove();
        }});
      }
    };

    $wrapper.append($close);
    $wrapper.append($okContent).appendTo($modal);
    $modal.appendTo($('body'));

    TM.from($modal, .5, { opacity: 0 }, { opacity: 1});

    $close.one('click', close);
    $modal.one('click', close);
  };

  var shareData = {
    title: 'Gogoro - Stay Creative 在家，照樣創造樂趣',
    text: '創造力把無聊變有趣，Gogoro居家創意包，開放下載使用。',
    url: 'https://www.gogoro.com/tw/staycreative/',
  }

  var isMobilePlatform = /Android|iPhone|iPad|iPod/i.test(navigator.platform);
  var isMobileUserAgent = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  var shareFunction = function() {
    navigator.share(shareData)
    .catch((e) =>
    console.log(e)
    )
  }

  var init = function () {
    var $elementShare = $('.button-share');
    var $elementOk = $('.button-ok');

    if ($elementShare.length) {
      $elementShare.on({
        mouseenter: function () {
          console.log('hover');
          $elementShare.parent().addClass('hover');
        },
        mouseleave: function () {
          console.log('leave');
          $elementShare.parent().removeClass('hover');
        }
    });

      if (isMobilePlatform && isMobileUserAgent && navigator.share) {
        $elementShare.on('click', shareFunction);
      } else {
        $elementShare.on('click', openPopupModalShare);
      }
    }
    if ($elementOk.length) {
      $elementOk.on('click', openPopupModalOk);
    }

  };

  init();

})(jQuery, TweenMax);
