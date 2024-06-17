var btn = $(".Btn-backtotop1");
$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });
  
  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });
  

function toggleAccordion() {
  $(".contain-accordion").toggleClass("hidden");
}

const FunVisible = () => {
  if (window.pageYOffset > 250) {
    $(".header").addClass("is-sticky");
  } else {
    $(".header").removeClass("is-sticky");
  }
};
window.addEventListener("scroll", FunVisible);



$("#dropdown-menu-mobile").on("click", function () {
  $(this).closest("li").toggleClass("active");
  $("#dropdown-menu-mobile-informations").toggleClass("hidden");
  $(this).find("svg").toggleClass("rotate-180");
});



