$(function () {
  $(".side-nav li a")
    .filter(function () {
      return this.href == location.href;
    })
    .parent()
    .addClass("side-nav__item--active")
    .siblings()
    .removeClass("side-nav__item--active");
  $(".side-nav li a").click(function () {
    $(this)
      .parent()
      .addClass("side-nav__item--active")
      .siblings()
      .removeClass("side-nav__item--active");
  });
});
