/* ==========================================================================
   EMPOSSIBLE -- main.js
   Nav scroll state, mobile menu, smooth scroll, FAQ accordion, AOS init,
   mouse tracking cursor glow, magnetic card tilt
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

  /* ----------------------------------------------------------------------
     MOUSE TRACKING CURSOR GLOW
     A soft red glow that follows the pointer across the page.
     Disabled on touch devices since there is no pointer to track.
     ---------------------------------------------------------------------- */
  var cursorGlow = document.getElementById('cursorGlow');
  var isTouchDevice = window.matchMedia('(hover: none)').matches;

  if (cursorGlow && !isTouchDevice) {
    var glowX = 0;
    var glowY = 0;
    var targetX = 0;
    var targetY = 0;
    var glowActive = false;

    window.addEventListener('mousemove', function (e) {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!glowActive) {
        glowActive = true;
        cursorGlow.style.opacity = '1';
      }
    }, { passive: true });

    document.addEventListener('mouseleave', function () {
      cursorGlow.style.opacity = '0';
    });

    function animateGlow() {
      glowX += (targetX - glowX) * 0.12;
      glowY += (targetY - glowY) * 0.12;
      cursorGlow.style.transform = 'translate(' + glowX + 'px, ' + glowY + 'px)';
      requestAnimationFrame(animateGlow);
    }

    animateGlow();
  }

  /* ----------------------------------------------------------------------
     MAGNETIC TILT ON CARDS
     Subtle tilt that follows pointer position within each card.
     Skipped on touch devices.
     ---------------------------------------------------------------------- */
  if (!isTouchDevice) {
    var tiltCards = document.querySelectorAll('.service-card, .pain-card, .who-card, .proof-card');

    tiltCards.forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var rect = card.getBoundingClientRect();
        var px = (e.clientX - rect.left) / rect.width;
        var py = (e.clientY - rect.top) / rect.height;
        var tiltX = (py - 0.5) * -6;
        var tiltY = (px - 0.5) * 6;
        card.style.transform = 'translateY(-6px) rotateX(' + tiltX + 'deg) rotateY(' + tiltY + 'deg)';

        var glareX = px * 100;
        var glareY = py * 100;
        card.style.setProperty('--glare-x', glareX + '%');
        card.style.setProperty('--glare-y', glareY + '%');
      });

      card.addEventListener('mouseleave', function () {
        card.style.transform = '';
      });
    });
  }

});
