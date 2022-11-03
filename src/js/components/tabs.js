import $ from 'jquery';

$('.tabs__control').on('click', function() {
  $('.tabs__control').removeClass('tabs__control--active');
  $('.tabs__content').removeClass('tabs__content--active');
  var tabsActiveId = $(this).attr('data-tabs-id');
  $(this).addClass('tabs__control--active');
  $(`.tabs__content[data-tabs-id="${tabsActiveId}"]`).addClass('tabs__content--active');
});