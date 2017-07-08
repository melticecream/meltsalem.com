//= require jquery-3.2.1.min

$(function() {
  $('.toggle').on('click', function() {
    $(this).toggleClass('bg-red white');
    $(this).children('p').toggleClass('dn');
    $(this).children('div').toggleClass('dn');
  });
});