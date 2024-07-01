var target, $frontColorInit, $backColorInit, $frontColorTarget, $backColorTarget, frontColorCode, backColorCode;
var $container = $('.container');
var $control = $('.control');
var $frontColorPicker = $('.front-colorpicker');
var $backColorPicker = $('.back-colorpicker');
var $frontColorTag = $('.front-colorpicker .color-tag');
var $backColorTag = $('.back-colorpicker .color-tag');
var $colorCode = $('.color-code');
var $finishEdit = $('.finish-edit');
var $reset = $('.reset');


var tagProc = function(direction) {
  $container.removeClass('trans-done');
  $container.removeClass (function (index, className) {
    return (className.match (/(^|\s)current-\S+/g) || []).join(' ');
  });
  if (direction === 'front') {
    target = $frontColorPicker.find('.is-active').prop('classList');
    $container.removeClass (function (index, className) {
        return (className.match (/(^|\s)front-\S+/g) || []).join(' ');
    });
    $container.addClass('front-' + target[1]).addClass('current-' + target[1]);
  }
  if (direction === 'back') {
    target = $backColorPicker.find('.is-active').prop('classList');
    $container.removeClass (function (index, className) {
        return (className.match (/(^|\s)back-\S+/g) || []).join(' ');
    });
    $container.addClass('back-' + target[1]).addClass('current-' + target[1]);
  }
  setTimeout(function(){
    $container.addClass('trans-done')
  }, 100)
}

var colorCodeProc = function() {
  frontColorCode = $frontColorPicker.find('.is-active').attr('color-code');
  backColorCode = $backColorPicker.find('.is-active').attr('color-code');
  $colorCode.html(frontColorCode + backColorCode);
}

var frontColorRefreshProc = function() {
  $frontColorTag.removeClass('is-available is-last');
  if($container.hasClass('back-c-1')) { $frontColorTarget = $('.c-o, .c-s') }
  if($container.hasClass('back-c-2')) { $frontColorTarget = $('.c-c, .c-e, .c-r, .c-s, .c-u') }
  if($container.hasClass('back-c-3')) { $frontColorTarget = $('.c-b, .c-g, .c-q, .c-s') }
  if($container.hasClass('back-c-4')) { $frontColorTarget = $('.c-e, .c-m, .c-n, .c-p, .c-s, c-u') }
  if($container.hasClass('back-c-5')) { $frontColorTarget = $('.c-a, .c-d, .c-h, .c-q, .c-u') }
  if($container.hasClass('back-c-7')) { $frontColorTarget = $('.c-c, .c-l, .c-n, .c-o, .c-r, .c-t') }
  if($container.hasClass('back-c-8')) { $frontColorTarget = $('.c-n, .c-q') }
  if($container.hasClass('back-c-9')) { $frontColorTarget = $('.c-m, .c-q, .c-u') }
  if($container.hasClass('back-c-12')) { $frontColorTarget = $('.c-a, .c-g, .c-q, .c-r, .c-s, .c-u') }
  if($container.hasClass('back-c-13')) { $frontColorTarget = $('.c-d, .c-i, .c-s, .c-u') }
  if($container.hasClass('back-c-14')) { $frontColorTarget = $('.c-d, .c-g, .c-h, .c-q, .c-r') }
  if($container.hasClass('back-c-15')) { $frontColorTarget = $('.c-a, .c-r, .c-s, .c-t') }
  if($container.hasClass('back-c-16')) { $frontColorTarget = $('.c-d, .c-q, .c-r, .c-s, .c-u') }
  if($container.hasClass('back-c-17')) { $frontColorTarget = $('.c-c, .c-e, .c-h, .c-i, .c-l, .c-n, .c-o, .c-p, .c-r, .c-t, .c-u') }
  if($container.hasClass('back-c-18')) { $frontColorTarget = $('.c-a, .c-b, .c-g, .c-l, .c-o, .c-p, .c-q, .c-t') }
  if($container.hasClass('back-c-19')) { $frontColorTarget = $('.c-a, .c-b, .c-c, .c-d, .c-l, .c-m, .c-o, .c-p, .c-u') }
  if($container.hasClass('back-c-20')) { $frontColorTarget = $('.c-g, .c-o, .c-p, .c-r') }
  if($container.hasClass('back-c-21')) { $frontColorTarget = $('.c-b, .c-d, .c-e, .c-i, .c-l, .c-m, .c-p, .c-s') }
  $frontColorTarget.addClass('is-available');
  $frontColorTarget.last().addClass('is-last');
}

var backColorRefreshProc = function() {
  $backColorTag.removeClass('is-available is-last');
  if($container.hasClass('front-c-a')) { $backColorTarget = $('.c-5, .c-12, .c-15, .c-18, .c-19') }
  if($container.hasClass('front-c-b')) { $backColorTarget = $('.c-3, .c-18, .c-19, .c-21') }
  if($container.hasClass('front-c-c')) { $backColorTarget = $('.c-2, .c-7, .c-17, .c-19') }
  if($container.hasClass('front-c-d')) { $backColorTarget = $('.c-5, .c-13, .c-14, .c-16, .c-19, .c-21') }
  if($container.hasClass('front-c-e')) { $backColorTarget = $('.c-2, .c-4, .c-17, .c-21') }
  if($container.hasClass('front-c-g')) { $backColorTarget = $('.c-3, .c-12, .c-14, .c-18, .c-20') }
  if($container.hasClass('front-c-h')) { $backColorTarget = $('.c-5, .c-14, .c-17') }
  if($container.hasClass('front-c-i')) { $backColorTarget = $('.c-13, .c-17, .c-21') }
  if($container.hasClass('front-c-l')) { $backColorTarget = $('.c-7, .c-17, .c-18, .c-19, .c-21') }
  if($container.hasClass('front-c-m')) { $backColorTarget = $('.c-4, .c-9, .c-19, .c-21') }
  if($container.hasClass('front-c-n')) { $backColorTarget = $('.c-4, .c-7, .c-8, .c-17') }
  if($container.hasClass('front-c-o')) { $backColorTarget = $('.c-1, .c-7, .c-17, .c-18, .c-19, .c-20') }
  if($container.hasClass('front-c-p')) { $backColorTarget = $('.c-4, .c-17, .c-18, .c-19, .c-20, .c-21') }
  if($container.hasClass('front-c-q')) { $backColorTarget = $('.c-3, .c-5, .c-8, .c-9, .c-12, .c-14, .c-16, .c-18') }
  if($container.hasClass('front-c-r')) { $backColorTarget = $('.c-2, .c-7, .c-12, .c-14, .c-15, .c-16, .c-17, .c-20') }
  if($container.hasClass('front-c-s')) { $backColorTarget = $('.c-1, .c-2, .c-3, .c-4, .c-12, .c-13, .c-15, .c-16, .c-21') }
  if($container.hasClass('front-c-t')) { $backColorTarget = $('.c-7, .c-15, .c-17, .c-18') }
  if($container.hasClass('front-c-u')) { $backColorTarget = $('.c-2, .c-4, .c-5, .c-9, .c-12, .c-13, .c-16, .c-17, .c-19') }
  $backColorTarget.addClass('is-available');
  $backColorTarget.last().addClass('is-last');
}

var frontColorActiveProc = function() {
  if($container.hasClass('back-c-1')) {
    $container.addClass('front-c-o');
    $('.c-o').addClass('is-active');
  }
  if($container.hasClass('back-c-2')) {
    $container.addClass('front-c-c');
    $('.c-c').addClass('is-active');
  }
  if($container.hasClass('back-c-3')) {
    $container.addClass('front-c-b');
    $('.c-b').addClass('is-active');
  }
  if($container.hasClass('back-c-4')) {
    $container.addClass('front-c-e');
    $('.c-e').addClass('is-active');
  }
  if($container.hasClass('back-c-5')) {
    $container.addClass('front-c-a');
    $('.c-a').addClass('is-active');
  }
  if($container.hasClass('back-c-7')) {
    $container.addClass('front-c-c');
    $('.c-c').addClass('is-active');
  }
  if($container.hasClass('back-c-8')) {
    $container.addClass('front-c-n');
    $('.c-n').addClass('is-active');
  }
  if($container.hasClass('back-c-9')) {
    $container.addClass('front-c-m');
    $('.c-m').addClass('is-active');
  }
  if($container.hasClass('back-c-12')) {
    $container.addClass('front-c-a');
    $('.c-a').addClass('is-active');
  }
  if($container.hasClass('back-c-13')) {
    $container.addClass('front-c-d');
    $('.c-d').addClass('is-active');
  }
  if($container.hasClass('back-c-14')) {
    $container.addClass('front-c-d');
    $('.c-d').addClass('is-active');
  }
  if($container.hasClass('back-c-15')) {
    $container.addClass('front-c-a');
    $('.c-a').addClass('is-active');
  }
  if($container.hasClass('back-c-16')) {
    $container.addClass('front-c-d');
    $('.c-d').addClass('is-active');
  }
  if($container.hasClass('back-c-17')) {
    $container.addClass('front-c-c');
    $('.c-c').addClass('is-active');
  }
  if($container.hasClass('back-c-18')) {
    $container.addClass('front-c-a');
    $('.c-a').addClass('is-active');
  }
  if($container.hasClass('back-c-19')) {
    $container.addClass('front-c-a');
    $('.c-a').addClass('is-active');
  }
  if($container.hasClass('back-c-20')) {
    $container.addClass('front-c-g');
    $('.c-g').addClass('is-active');
  }
  if($container.hasClass('back-c-21')) {
    $container.addClass('front-c-b');
    $('.c-b').addClass('is-active');
  }
}

var backColorActiveProc = function() {
  if($container.hasClass('front-c-a')) {
    $container.addClass('back-c-5');
    $('.c-5').addClass('is-active');
  }
  if($container.hasClass('front-c-b')) {
    $container.addClass('back-c-3');
    $('.c-3').addClass('is-active');
  }
  if($container.hasClass('front-c-c')) {
    $container.addClass('back-c-2');
    $('.c-2').addClass('is-active');
  }
  if($container.hasClass('front-c-d')) {
    $container.addClass('back-c-5');
    $('.c-5').addClass('is-active');
  }
  if($container.hasClass('front-c-e')) {
    $container.addClass('back-c-2');
    $('.c-2').addClass('is-active');
  }
  if($container.hasClass('front-c-g')) {
    $container.addClass('back-c-3');
    $('.c-3').addClass('is-active');
  }
  if($container.hasClass('front-c-h')) {
    $container.addClass('back-c-5');
    $('.c-5').addClass('is-active');
  }
  if($container.hasClass('front-c-i')) {
    $container.addClass('back-c-13');
    $('.c-13').addClass('is-active');
  }
  if($container.hasClass('front-c-l')) {
    $container.addClass('back-c-7');
    $('.c-7').addClass('is-active');
  }
  if($container.hasClass('front-c-m')) {
    $container.addClass('back-c-4');
    $('.c-4').addClass('is-active');
  }
  if($container.hasClass('front-c-n')) {
    $container.addClass('back-c-4');
    $('.c-4').addClass('is-active');
  }
  if($container.hasClass('front-c-o')) {
    $container.addClass('back-c-1');
    $('.c-1').addClass('is-active');
  }
  if($container.hasClass('front-c-p')) {
    $container.addClass('back-c-4');
    $('.c-4').addClass('is-active');
  }
  if($container.hasClass('front-c-q')) {
    $container.addClass('back-c-3');
    $('.c-3').addClass('is-active');
  }
  if($container.hasClass('front-c-r')) {
    $container.addClass('back-c-2');
    $('.c-2').addClass('is-active');
  }
  if($container.hasClass('front-c-s')) {
    $container.addClass('back-c-1');
    $('.c-1').addClass('is-active');
  }
  if($container.hasClass('front-c-t')) {
    $container.addClass('back-c-7');
    $('.c-7').addClass('is-active');
  }
  if($container.hasClass('front-c-u')) {
    $container.addClass('back-c-2');
    $('.c-2').addClass('is-active');
  }
}

var init = function(){
  $container.addClass('first-front front-c-a back-c-5');
  $frontColorInit = $('.c-a, .c-d, .c-h, .c-q, .c-u');
  $backColorInit = $('.c-5, .c-12, .c-15, .c-18, .c-19');
  $frontColorInit.addClass('is-available');
  $frontColorInit.first().addClass('is-active');
  $frontColorInit.last().addClass('is-last');
  $backColorInit.addClass('is-available');
  $backColorInit.first().addClass('is-active');
  $backColorInit.last().addClass('is-last');
}

init();

$frontColorTag.on('click', function() {
  $frontColorTag.removeClass('is-active');
  $(this).addClass('is-active');
  tagProc('front');
  if(!$(this).hasClass('is-available') || $container.hasClass('first-front')) {
    $container.removeClass('first-back').addClass('first-front');
    $backColorTag.removeClass('is-active');
    $container.removeClass (function (index, className) {
      return (className.match (/(^|\s)back-\S+/g) || []).join(' ');
    });
    backColorActiveProc();
    backColorRefreshProc();
    $backColorPicker.animate({ scrollTop: '0' });
  }
})

$backColorTag.on('click', function() {
  $backColorTag.removeClass('is-active');
  $(this).addClass('is-active');
  tagProc('back');
  if(!$(this).hasClass('is-available') || $container.hasClass('first-back')) {
    $container.removeClass('first-front').addClass('first-back');
    $frontColorTag.removeClass('is-active');
    $container.removeClass (function (index, className) {
      return (className.match (/(^|\s)front-\S+/g) || []).join(' ');
    });
    frontColorActiveProc();
    frontColorRefreshProc();
    $frontColorPicker.animate({ scrollTop: '0' });
  }
})

$finishEdit.on('click', function(){
  $container.removeClass('edit-mode');
  $control.removeClass('edit-mode');
  $('body').addClass('result');
  colorCodeProc();
})

$reset.on('click', function() {
  $('body').removeClass('result');
  $container.addClass('edit-mode');
  $control.addClass('edit-mode');
})