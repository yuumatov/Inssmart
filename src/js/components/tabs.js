import $ from 'jquery';

$('.tabs__control').on('click', function() {
  $('.tabs__control').removeClass('tabs__control--active');
  $(this).addClass('tabs__control--active');
});