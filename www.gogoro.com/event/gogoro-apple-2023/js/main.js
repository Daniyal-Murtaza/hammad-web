var $faqItem = $('.faq-item');
var $modalContainer = $('.modal-container');
var $modalClose = $('.btn-close');
var urlVal = window.location.search;
var urlParams = new URLSearchParams(urlVal);
var scooter = urlParams.get('scooter');
var modal = urlParams.get('modal');

if (scooter == 'delight') {
  $('body').addClass('theme-delight');
} else if (scooter == 'supersport') {
  $('body').addClass('theme-supersport');
} else {
  $('body').addClass('theme-supersport');
}

if (modal == 'dsk') {
  $('body').addClass(' modal-locked');
  $modalContainer.addClass('modal-open modal-opened modal-dsk-open');
} 

if (modal == 'fmn') {
  $modalContainer.addClass('modal-open modal-opened modal-findmy-open');
} 

$($faqItem).on('click', function() {
  if(!$(this).hasClass('active')) {
    $('.faq-item .answer').slideUp();
    $faqItem.removeClass('active');
    $(this).addClass('active');
    $('.faq-item.active .answer').slideDown();
  }
})

$modalClose.on('click', function() {
  $modalContainer.scrollTop(0);
  $modalContainer.removeClass('modal-open modal-opened modal-dsk-open modal-findmy-open');
})

$('.btn-cta.pop-up-dsk').on('click', function() {
  $modalContainer.addClass('modal-open modal-dsk-open');
  setTimeout(() => {
    $modalContainer.addClass('modal-opened');
  }, "500");
})

$('.btn-cta.pop-up-findmy').on('click', function() {
  $modalContainer.addClass('modal-open modal-findmy-open');
  setTimeout(() => {
    $modalContainer.addClass('modal-opened');
  }, "500");
})

$(document).click(function(event) {
  if ($modalContainer.hasClass('modal-opened') && !$(event.target).closest(".modal").length && !$('body').hasClass('modal-locked')) {
    $modalContainer.scrollTop(0);
    $modalContainer.removeClass('modal-open modal-opened modal-dsk-open modal-findmy-open');
  }
});