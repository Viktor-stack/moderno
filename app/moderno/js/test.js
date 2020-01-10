jQuery(document).ready(function($) {
  $(window).load(function() {
    setTimeout(function() {
      $("#preloader").fadeOut("slow", function() {});
    }, 1000);
  });
});
$(document).ready(function() {
  $(".wpcf7-form").addClass("form_contacts");
  var $menu = $("#menu");
  $(window).scroll(function() {
    if ($(this).scrollTop() > 600 && $menu.hasClass("default")) {
      $menu.removeClass("default").addClass("fixed");
    } else if ($(this).scrollTop() <= 600 && $menu.hasClass("fixed")) {
      $menu.removeClass("fixed").addClass("default");
    }
  });
  $(".autoheight").equalHeights();
  $(".scroll_down").mPageScroll2id();
  $(".open_map").click(function() {
    var myDiv = document.getElementById("map");
    if (myDiv.style.display == "none") {
      myDiv.style.display = "block";
    } else {
      myDiv.style.display = "none";
    }
    return false;
  });
  $(".nano").jScrollPane();
  $(" .btn_nav").click(function() {
    $(".btn_nav .sandwich").toggleClass("active");
  });
  //$(".navigation_list .link_nav a, .drodown_menu a").click(function() { $(".sandwich").toggleClass("active"); });
  $(".btn_nav").click(function() {
    if ($(".navigation_list").is(":hidden")) {
      $(".navigation_list").slideDown(600);
    } else {
      $(".navigation_list").slideUp(600);
    }
    $(".navigation_list .link_nav a, .drodown_menu a").click(function() {
      //             $(".navigation_list").slideUp(600);
      //             $(".sandwich").removeClass("active");
    });
  });
  {
    if ($(window).width() < 992) {
      $(".navigation_list li.dropdown_link").click(function(event) {
        // 				event.preventDefault();
        // 				if ($(".drodown_menu").is(":hidden")) { $(".drodown_menu").slideDown(600); } else { $(".drodown_menu").slideUp(600); }
      });
      // $(".drodown_menu a").click(function() { $(".sandwich").toggleClass("active"); });
    }
  }
  $(".navigation_list li.dropdown_link > a").click(function(event) {});
  $(".name_schedule").click(function() {
    $d = $("#contentlistslider .slick-list").height();
    $(this)
      .parent()
      .siblings(".hidden_text_schedule")
      .slideToggle();

    if (
      $(this)
        .parent()
        .siblings(".hidden_text_schedule")
        .height() == 1
    ) {
      $d += 200;
    } else {
      $d -= 200;
    }

    $("#contentlistslider .slick-list").height($d);
    //console.log($d);
    //$("#contentlistslider").height($d);
  });

  $(".name_faq").click(function() {
    $(".name_faq").removeClass("active");
    if (
      $(this)
        .siblings(".text_faq")
        .is(":hidden")
    ) {
      $(this)
        .siblings(".text_faq")
        .slideDown();
      $(this).addClass("active");
    } else {
      $(this)
        .siblings(".text_faq")
        .slideUp();
      $(this).removeClass("active");
    }
  });
  $(" .video_main_wrap").click(function() {
    $(this).addClass("pause");
  });
  $(".text_more").collapser({ mode: "lines", truncate: 4 });
  $(".side_menu").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: false,
    vertical: true,
    draggable: false
  });
  $(".billbord_slider").slick({
    infinite: true,
    dots: true,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 6000,
    speed: 700,
    prevArrow:
      '<button class="btn slick-prev"><span class="gb-hover"></span></button>',
    nextArrow:
      '<button class="btn slick-next"><span class="gb-hover"></span></button>',
    slidesToShow: 1,
    slidesToScroll: 1
  });
  $(".slider_choise").slick({
    infinite: true,
    fade: true,
    dots: true,
    customPaging: function(slick, index) {
      return (
        '<button type="button" data-role="none" data-slick-index="' +
        index +
        '">' +
        index +
        "</button>"
      );
    },
    autoplay: true,
    arrows: false,
    autoplaySpeed: 4000,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1
  });
  $(".slick-dots > li").each(function() {
    var pagerItem = $(this);
    setTimeout(function() {
      slickIndex = pagerItem.find("button").attr("data-slick-index");
      matchingSlide = $('.slick-slide[data-slick-index="' + slickIndex + '"]');
      titleContent = matchingSlide.find(".slide-image").attr("title");
      pagerItem.find("button").text(titleContent);
      console.log(titleContent);
    }, 1000);
  });
  $(".slider_service").slick({
    infinite: true,
    dots: false,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1
  });
  $(".slider_review").slick({
    infinite: true,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } }
    ]
  });
  $(".slider_traniners").slick({
    infinite: true,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 992, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } }
    ]
  });
  $(".slider_review_main").slick({
    infinite: true,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 992, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } }
    ]
  });
  $("select").styler();
  var austDay = new Date($(".countdown").attr("date-time"));
  $(".countdown").countdown({ until: austDay, format: "yowdHMS" });
  $(".fancybox").fancybox({
    mouseWheel: false,
    fixed: false,
    autoCenter: true
  });
  $(".block").waypoint(
    function(direction) {
      if (direction === "down") {
        $(".class").addClass("active");
      } else if (direction === "up") {
        $(".class").removeClass("deactive");
      }
    },
    { offset: 100 }
  );
  $("a.scroll").click(function() {
    $.scrollTo($(".div"), 800, { offset: -90 });
  });
  var window_height = 200;
  $(window).on("scroll load", function(event) {
    if ($(window).scrollTop() > window_height) {
      $(".header-main").addClass("header-fixed");
    } else {
      $(".header-main").removeClass("header-fixed");
      $(".header-main").removeClass("hide-menu");
    }
  });
  var lastScroll = 50;
  $(window).on("scroll load", function(event) {
    var st = $(this).scrollTop();
    if (st > lastScroll) {
      $(".header-main").addClass("hide-menu");
      if ($(".nav-search").hasClass("hide") === false) {
        $(".nav-search").toggleClass("hide");
      }
    } else if (st < lastScroll) {
      $(".header-main").removeClass("hide-menu");
    }
    if ($(window).scrollTop() <= 100) {
      $(".header-main")
        .removeClass(".header-fixed")
        .removeClass("hide-menu");
    } else if (
      $(window).scrollTop() < window_height &&
      $(window).scrollTop() > 0
    ) {
      $(".header-main").addClass("hide-menu");
    }
    lastScroll = st;
  });
});
$(window).load(function() {
  var hh = $(".main_header").height();
  var fh = $(".main_footer").height();
  var wh = $(window).height();
  var сh = wh - hh - fh;
  $(".page_wrap").css("min-height", сh);
});

function sortMeBy(arg, sel, elem, order) {
  var $selector = $(sel),
    $element = $selector.children(elem);
  $element.sort(function(a, b) {
    var an = parseInt(a.getAttribute(arg)),
      bn = parseInt(b.getAttribute(arg));
    if (order == "asc") {
      if (an > bn) return 1;
      if (an < bn) return -1;
    } else if (order == "desc") {
      if (an < bn) return 1;
      if (an > bn) return -1;
    }
    return 0;
  });
  $element.detach().appendTo($selector);
}
$(".schedule_for li").each(function() {
  prnt = $(this).find(".schedule_table tbody");
  sortMeBy("data-time", prnt, "tr", "asc");
});
$.fn.extend({
  hasClasses: function(arr) {
    s = this;
    var answ = true;
    for (i in arr) {
      if ($(s).hasClass(arr[i])) {
      } else {
        answ = false;
      }
    }
    return answ;
  }
});
$.fn.extend({
  hasClassesTwo: function(arr) {
    s = this;
    var answ = false;
    for (i in arr) {
      if ($(s).hasClass(arr[i])) {
        answ = true;
      }
    }
    return answ;
  }
});
$(
  '.schedule_section input[type="radio"],.schedule_section input[type="checkbox"]'
).on("change", function() {
  var clubVal = $('input[name="club"]:checked').val();

  var timeVal = $('input[name="daytime"]:checked').val();
  var checkClass = [];
  if (clubVal != "all") {
    var clubClass = "club-" + clubVal;
    checkClass.push(clubClass);
  }

  if (timeVal != "all") {
    var timeClass = "daytime-" + timeVal;
    checkClass.push(timeClass);
  }
  console.log(checkClass);
  var checkClassTwo = [];
  $('input[name="tr-type"]:checked').each(function() {
    var typeClass = "tr-type-" + $(this).val();
    checkClassTwo.push(typeClass);
  });
  if (checkClassTwo.length > 0) {
    $(".shedule").each(function() {
      if (
        $(this).hasClasses(checkClass) &&
        $(this).hasClassesTwo(checkClassTwo)
      ) {
        $(this).removeClass("hidden");
      } else {
        $(this).addClass("hidden");
      }
    });
  } else {
    $(".shedule").each(function() {
      if ($(this).hasClasses(checkClass)) {
        $(this).removeClass("hidden");
      } else {
        $(this).addClass("hidden");
      }
    });
  }
  $(window).resize();
  $(".schedule_for").slick("refresh");
});
$(document).ready(function() {
  $('input[type="radio"]').on("change", function() {
    var checkClass = new Array();
    $('input[type="radio"]:checked').each(function() {
      if ($(this).attr("name") == "clubs") {
        checkClass.push("from_club-" + this.value);
      }
      if ($(this).attr("name") == "directions") {
        checkClass.push("directions-" + this.value);
      }
      if ($(this).attr("name") == "trainer_price") {
        checkClass.push("trainer_price-" + this.value);
      }
    });
    var flc = checkClass.length;
    $(".trainer").each(function() {
      if ($(this).hasClasses(checkClass) || flc == 0) {
        $(this).removeClass("hidden");
      } else {
        $(this).addClass("hidden");
      }
    });
  });
});

/*new*/
jQuery(document).ready(function($) {
  if ($(".js-get-raring").length > 0) {
    var DoubleRating = $(".js-get-raring").html();
    $(".rmp-double-rating").append(DoubleRating);
  }
});
