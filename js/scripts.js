!(function ($) {
  "use strict";
  function toggleDropdown(e) {
    const _d = $(e.target).closest(".dropdown"),
      _m = $(".dropdown-menu", _d);
    setTimeout(
      function () {
        const shouldOpen = "click" !== e.type && _d.is(":hover");
        _m.toggleClass("show", shouldOpen),
          _d.toggleClass("show", shouldOpen),
          $('[data-toggle="dropdown"]', _d).attr("aria-expanded", shouldOpen);
      },
      "mouseleave" === e.type ? 300 : 0
    );
  }
  $(window).on("scroll load", function () {
    $(".navbar").offset().top > 60
      ? $(".fixed-top").addClass("top-nav-collapse")
      : $(".fixed-top").removeClass("top-nav-collapse");
  }),
    $(function () {
      $(document).on("click", "a.page-scroll", function (event) {
        var $anchor = $(this);
        $("html, body")
          .stop()
          .animate(
            { scrollTop: $($anchor.attr("href")).offset().top },
            600,
            "easeInOutExpo"
          ),
          event.preventDefault();
      });
    }),
    $('[data-toggle="offcanvas"], .navbar-nav li a:not(.dropdown-toggle').on(
      "click",
      function () {
        $(".offcanvas-collapse").toggleClass("open");
      }
    ),
    $("body")
      .on("mouseenter mouseleave", ".dropdown", toggleDropdown)
      .on("click", ".dropdown-menu a", toggleDropdown),
    $("input, textarea").keyup(function () {
      "" != $(this).val()
        ? $(this).addClass("notEmpty")
        : $(this).removeClass("notEmpty");
    }),
    $("body").prepend(
      '<a href="body" class="back-to-top page-scroll">Back to Top</a>'
    );
  var amountScrolled = 700;
  $(window).scroll(function () {
    $(window).scrollTop() > amountScrolled
      ? $("a.back-to-top").fadeIn("500")
      : $("a.back-to-top").fadeOut("500");
  }),
    $(".button, a, button").mouseup(function () {
      $(this).blur();
    });
})(jQuery);
