import $ from 'jquery';

// Табы на ПК версии
$('.tabs__control').on('click', function() {
  $('.tabs__control').removeClass('tabs__control--active');
  $('.tabs__content').removeClass('tabs__content--active');
  $('.tabs__btn').removeClass('tabs__btn--active');
  var tabsActiveId = $(this).attr('data-tabs-id');
  $(this).addClass('tabs__control--active');
  $(`.tabs__content[data-tabs-id="${tabsActiveId}"]`).addClass('tabs__content--active');
  $(`.tabs__content[data-tabs-id="${tabsActiveId}"]`).prev().addClass('tabs__btn--active')
});

// Аккордион на мобильной версии
$('.tabs__btn').on('click', function() {
  if ($(this).hasClass('tabs__btn--active')) {
    $(this).removeClass('tabs__btn--active').next().removeClass('tabs__content--active');
  } else {
    $(this).toggleClass('tabs__btn--active').next().addClass('tabs__content--active');
  }
});

// Добавление характеристик
$('.form').on('submit', function(e) {
  e.preventDefault();
  var inputName = $(this).find('input[name="name"]');
  var listCount = $(this).parent().find('.list li').length;
  if (inputName.val() !== '') {
    if (listCount < 10) {
      $(this).parent().find('.list').append(`<li>${inputName.val()}</li>`);
      inputName.val('');
    } else {
      alert('Количество характеристик не может превышать 10');
      inputName.val('');
    }
  } else {
    alert('Введите наименование характеристики');
  }
});