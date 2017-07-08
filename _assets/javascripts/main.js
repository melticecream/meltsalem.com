//= require jquery-3.2.1.min

function addActive() {
  removeActive();

  $(this).children('p').addClass('dn');
  $(this).children('div').removeClass('dn');
  $(this).addClass('bg-red white active');
}

function removeActive() {
  var $active = $('.active');
  $active.children('div').addClass('dn');
  $active.children('p').removeClass('dn');
  $active.removeClass('bg-red white active');
}

$(function() {
  $('.toggle').hover(addActive, removeActive);

  // also do the click event to support mobile
  $('.toggle').click(addActive);
});