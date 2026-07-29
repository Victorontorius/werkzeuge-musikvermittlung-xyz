(function () {
  "use strict";

  var root = document.documentElement;

  /* ---------- Language toggle ---------- */
  var STORAGE_KEY = "mv-lang";
  var langToggle = document.getElementById("lang-toggle");

  function applyLang(lang) {
    root.setAttribute("data-lang", lang);
    root.setAttribute("lang", lang);
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  var savedLang = null;
  try { savedLang = localStorage.getItem(STORAGE_KEY); } catch (e) {}
  if (savedLang === "de" || savedLang === "en") {
    applyLang(savedLang);
  }

  if (langToggle) {
    langToggle.addEventListener("click", function () {
      var current = root.getAttribute("data-lang") === "en" ? "en" : "de";
      applyLang(current === "de" ? "en" : "de");
    });
  }

  /* ---------- Mobile nav ---------- */
  var burger = document.getElementById("nav-burger");
  var nav = document.getElementById("main-nav");
  if (burger && nav) {
    burger.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      burger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }

  /* ---------- Active nav link on scroll ---------- */
  var sections = document.querySelectorAll("main section[id]");
  var navLinks = document.querySelectorAll(".main-nav a[href^='#']");

  function onScrollSpy() {
    var scrollPos = window.scrollY + 120;
    var currentId = null;
    sections.forEach(function (sec) {
      if (sec.offsetTop <= scrollPos) currentId = sec.id;
    });
    navLinks.forEach(function (link) {
      var match = link.getAttribute("href") === "#" + currentId;
      link.classList.toggle("active", match);
    });
  }
  window.addEventListener("scroll", onScrollSpy, { passive: true });
  onScrollSpy();

  /* ---------- Quote carousel ---------- */
  var track = document.getElementById("quote-track");
  var dotsWrap = document.getElementById("quote-dots");
  var prevBtn = document.getElementById("quote-prev");
  var nextBtn = document.getElementById("quote-next");

  if (track) {
    var slides = Array.prototype.slice.call(track.querySelectorAll(".quote-slide"));
    var current = 0;
    var timer = null;

    slides.forEach(function (_, i) {
      var dot = document.createElement("button");
      dot.className = "quote-dot";
      dot.setAttribute("aria-label", "Go to quote " + (i + 1));
      dot.addEventListener("click", function () { show(i); resetTimer(); });
      dotsWrap.appendChild(dot);
    });
    var dots = Array.prototype.slice.call(dotsWrap.querySelectorAll(".quote-dot"));

    function show(index) {
      slides[current].classList.remove("active");
      dots[current].classList.remove("active");
      current = (index + slides.length) % slides.length;
      slides[current].classList.add("active");
      dots[current].classList.add("active");
    }

    function resetTimer() {
      if (timer) clearInterval(timer);
      timer = setInterval(function () { show(current + 1); }, 7000);
    }

    if (prevBtn) prevBtn.addEventListener("click", function () { show(current - 1); resetTimer(); });
    if (nextBtn) nextBtn.addEventListener("click", function () { show(current + 1); resetTimer(); });

    show(0);
    resetTimer();
  }
})();
