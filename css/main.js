/* ==========================================================================
   EMPOSSIBLE -- main.js
   Nav scroll state, mobile menu, smooth scroll, FAQ accordion, AOS init
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* ----------------------------------------------------------------------
     AOS INIT
     ---------------------------------------------------------------------- */
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80
    });
  }

  /* ----------------------------------------------------------------------
     NAV SCROLL STATE
     ---------------------------------------------------------------------- */
  var siteNav = document.getElementById('siteNav');

  function handleNavScroll() {
    if (window.scrollY > 40) {
      siteNav.classList.add('scrolled');
    } else {
      siteNav.classList.remove('scrolled');
    }
  }

  handleNavScroll();
  window.addEventListener('scroll', handleNavScroll, { passive: true });

  /* ----------------------------------------------------------------------
     MOBILE HAMBURGER MENU
     ---------------------------------------------------------------------- */
  var hamburgerBtn = document.getElementById('hamburgerBtn');
  var mobileOverlay = document.getElementById('mobileOverlay');
  var mobileLinks = document.querySelectorAll('.mobile-nav-link, .btn-mobile-cta');

  function openMobileMenu() {
    mobileOverlay.classList.add('open');
    hamburgerBtn.classList.add('open');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileOverlay.classList.remove('open');
    hamburgerBtn.classList.remove('open');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburgerBtn.addEventListener('click', function () {
    if (mobileOverlay.classList.contains('open')) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  mobileLinks.forEach(function (link) {
    link.addEventListener('click', closeMobileMenu);
  });

  /* ----------------------------------------------------------------------
     SMOOTH SCROLL FOR ANCHOR LINKS
     ---------------------------------------------------------------------- */
  var anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId.length > 1) {
        var targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          var navHeight = siteNav.offsetHeight;
          var targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - navHeight - 16;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  /* ----------------------------------------------------------------------
     FAQ ACCORDION
     ---------------------------------------------------------------------- */
  var faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(function (question) {
    question.addEventListener('click', function () {
      var isOpen = this.getAttribute('aria-expanded') === 'true';
      var answer = this.nextElementSibling;

      faqQuestions.forEach(function (otherQuestion) {
        if (otherQuestion !== question) {
          otherQuestion.setAttribute('aria-expanded', 'false');
          otherQuestion.nextElementSibling.style.maxHeight = null;
        }
      });

      if (isOpen) {
        this.setAttribute('aria-expanded', 'false');
        answer.style.maxHeight = null;
      } else {
        this.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

});
