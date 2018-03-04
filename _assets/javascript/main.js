//= require umbrella.min

function addActive() {
  removeActive();

  u(this).children('p').addClass('dn');
  u(this).children('div').removeClass('dn');
  u(this).addClass('bg-dark-gray white active');
  u(this).removeClass('bg-flavor');
}

function removeActive() {
  var $active = u('.active');
  $active.children('div').addClass('dn');
  $active.children('p').removeClass('dn');
  $active.addClass('bg-flavor');
  $active.removeClass('bg-dark-gray white active');
}

document.addEventListener('DOMContentLoaded', function() {
  u('.toggle').on('mouseenter', addActive);
  u('.toggle').on('mouseleave', removeActive);

  // also do the click event to support mobile
  u('.toggle').on('click', addActive);
});