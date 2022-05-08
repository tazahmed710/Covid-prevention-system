$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: [
      "I'm Mahadir Islam",
      "I'm an Ethnical Hacker",
      "I'm a leader of Team Dynamic Squad",
      "I'm a member of Team RoBo Sapiens(int.)",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  var typed = new Typed(".typing-01", {
    strings: [
      "I am a qualified and Certified Programmer with completed many experiences and project design. Strong creative and analytical skills. I care about writing clean code and I am an Ethical Hacker, I am an Expert in robotics and genuinely love to learn." +
        "<br>" +
        "<br>" +
        "I am an Expert in robotics. I am doing research on robotics. I love to solve problems in robotics.",
    ],
    typeSpeed: 2,
    backSpeed: 50,
    loop: false,
  });

  var typed = new Typed(".typing-2", {
    strings: [
      "an Ethnical Hacker",
      "a leader of Team Dynamic Squad",
      "a member of Team RoBo Sapiens(int.)",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});
