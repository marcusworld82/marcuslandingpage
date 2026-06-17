/* ==========================================================================
   EMPOSSIBLE -- animations.js
   Typewriter headline effect, IntersectionObserver backup for scroll reveals
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* ----------------------------------------------------------------------
     HERO TYPEWRITER EFFECT
     ---------------------------------------------------------------------- */
  var headlineLines = [
    'YOUR BUSINESS',
    'IS LEAKING MONEY',
    'EVERY SINGLE DAY.'
  ];

  var lineEls = document.querySelectorAll('.headline-line');
  var lineIndex = 0;
  var charIndex = 0;
  var typeSpeed = 38;
  var linePause = 200;

  function typeNextChar() {
    if (lineIndex >= headlineLines.length) {
      return;
    }

    var currentEl = lineEls[lineIndex];
    var currentText = headlineLines[lineIndex];

    currentEl.classList.add('typing');

    if (charIndex < currentText.length) {
      currentEl.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
      setTimeout(typeNextChar, typeSpeed);
    } else {
      currentEl.classList.remove('typing');
      lineIndex++;
      charIndex = 0;
      if (lineIndex < headlineLines.length) {
        setTimeout(typeNextChar, linePause);
      }
    }
  }

  if (lineEls.length === headlineLines.length) {
    setTimeout(typeNextChar, 300);
  }

  /* ----------------------------------------------------------------------
     INTERSECTION OBSERVER BACKUP
     For any element that should fade in but is not covered by AOS,
     using the data-observe attribute as an opt in hook.
     ---------------------------------------------------------------------- */
  var observedEls = document.querySelectorAll('[data-observe]');

  if (observedEls.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-up-fallback');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -80px 0px'
    });

    observedEls.forEach(function (el) {
      observer.observe(el);
    });
  }

});
