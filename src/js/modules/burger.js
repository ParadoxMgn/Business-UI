export function isBurger() {
  $(document).ready(function () {
    $('.burger').click(function (event) {
      $('.hidden-menu').toggleClass('active');
      $('.burger').toggleClass('active');
      $('body').toggleClass('lock');
    });
  });
}