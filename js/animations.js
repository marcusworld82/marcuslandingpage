document.addEventListener('DOMContentLoaded', () => {
  const typeLines = document.querySelectorAll('.type-line');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!typeLines.length) {
    return;
  }

  if (prefersReducedMotion) {
    typeLines.forEach(line => {
      line.textContent = line.dataset.text || '';
      line.classList.add('typing-complete');
    });
    return;
  }

  const lineDelay = 260;
  const charDelay = 45;

  const typeLine = (element, text) => {
    return new Promise(resolve => {
      let index = 0;
      element.textContent = '';

      const interval = setInterval(() => {
        element.textContent += text.charAt(index);
        index += 1;

        if (index >= text.length) {
          clearInterval(interval);
          element.classList.add('typing-complete');
          setTimeout(resolve, lineDelay);
        }
      }, charDelay);
    });
  };

  const runTypewriter = async () => {
    for (const line of typeLines) {
      const text = line.dataset.text || '';
      await typeLine(line, text);
    }
  };

  runTypewriter();
});