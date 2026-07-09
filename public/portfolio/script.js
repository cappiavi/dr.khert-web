/* =========================================================
   Khert Laguna Garde — Portfolio JavaScript
   Handles: loader, navigation, scroll animations, active links,
   back-to-top, contact form validation.
   ========================================================= */
(function () {
  "use strict";

  /* ---------- Loading screen ---------- */
  window.addEventListener("load", function () {
    var loader = document.getElementById("loader");
    if (loader) {
      // Brief delay so the loader animation is visible.
      setTimeout(function () {
        loader.classList.add("is-hidden");
      }, 600);
    }
  });

  /* ---------- Sticky nav on scroll ---------- */
  var nav = document.getElementById("nav");
  var toTop = document.getElementById("toTop");

  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (nav) nav.classList.toggle("is-scrolled", y > 40);
    if (toTop) toTop.classList.toggle("is-visible", y > 500);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile hamburger menu ---------- */
  var navToggle = document.getElementById("navToggle");
  var navLinks = document.getElementById("navLinks");

  function closeMenu() {
    if (!navToggle || !navLinks) return;
    navToggle.classList.remove("is-open");
    navLinks.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open menu");
  }

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      var open = navLinks.classList.toggle("is-open");
      navToggle.classList.toggle("is-open", open);
      navToggle.setAttribute("aria-expanded", String(open));
      navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    // Close on link click (mobile)
    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    // Close on Escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
  }

  /* ---------- Scroll reveal animations ---------- */
  var animated = document.querySelectorAll("[data-animate]");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    animated.forEach(function (el) { io.observe(el); });
  } else {
    animated.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- Active navigation highlight ---------- */
  var sections = document.querySelectorAll("main section[id]");
  var linkMap = {};
  document.querySelectorAll(".nav__link").forEach(function (link) {
    var id = link.getAttribute("href");
    if (id && id.charAt(0) === "#") linkMap[id.slice(1)] = link;
  });

  if ("IntersectionObserver" in window) {
    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            Object.keys(linkMap).forEach(function (key) {
              linkMap[key].classList.remove("is-active");
            });
            var active = linkMap[entry.target.id];
            if (active) active.classList.add("is-active");
          }
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ---------- Back to top ---------- */
  if (toTop) {
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- Contact form validation ---------- */
  var form = document.getElementById("contactForm");
  var status = document.getElementById("formStatus");

  function setError(name, message) {
    var input = form.querySelector("[name='" + name + "']");
    var errorEl = form.querySelector("[data-error-for='" + name + "']");
    if (input) input.classList.toggle("is-invalid", Boolean(message));
    if (errorEl) errorEl.textContent = message || "";
  }

  function isEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.name.value.trim();
      var email = form.email.value.trim();
      var message = form.message.value.trim();
      var valid = true;

      if (!name) { setError("name", "Please enter your name."); valid = false; }
      else setError("name", "");

      if (!email) { setError("email", "Please enter your email."); valid = false; }
      else if (!isEmail(email)) { setError("email", "Please enter a valid email address."); valid = false; }
      else setError("email", "");

      if (!message) { setError("message", "Please enter a message."); valid = false; }
      else setError("message", "");

      if (!valid) return;

      // Demo submission — no backend. Replace with your own endpoint/service.
      if (status) {
        status.textContent = "Thank you, " + name + "! Your message has been recorded.";
      }
      form.reset();
      setTimeout(function () { if (status) status.textContent = ""; }, 6000);
    });
  }

  /* ---------- Footer year (auto, keeps 2026 baseline) ---------- */
  // Displayed year is fixed at 2026 per branding; no dynamic override needed.
})();
