// Optional: Easter egg script
console.log("The Devil Inside Ur Balls... is watching.");

document.addEventListener('DOMContentLoaded', function () {
  const toc = document.getElementById('toc');
  const tocToggle = document.getElementById('toc-toggle');
  const tocNav = document.getElementById('toc-nav');
  const tocLabel = tocToggle ? tocToggle.querySelector('.toc-label') : null;
  function isMobile() {
    return window.matchMedia('(max-width: 700px)').matches;
  }
  function updateTocNavDisplay(expanded) {
    if (isMobile()) {
      if (expanded) {
        toc.classList.add('open');
        tocNav.style.display = 'block';
      } else {
        toc.classList.remove('open');
        tocNav.style.display = 'none';
      }
    } else {
      toc.classList.remove('open');
      tocNav.style.display = expanded ? 'block' : 'none';
    }
  }
  function setTocArrow(expanded) {
    if (tocToggle) {
      tocToggle.firstChild.textContent = (expanded ? '▼ ' : '► ');
    }
  }
  if (tocToggle && tocNav && toc) {
    tocToggle.addEventListener('click', function () {
      const expanded = tocToggle.getAttribute('aria-expanded') === 'true';
      tocToggle.setAttribute('aria-expanded', !expanded);
      setTocArrow(!expanded);
      updateTocNavDisplay(!expanded);
    });
    // Initial state
    setTocArrow(true);
    updateTocNavDisplay(true);
    // Responsive: update on resize
    window.addEventListener('resize', function () {
      const expanded = tocToggle.getAttribute('aria-expanded') === 'true';
      setTocArrow(expanded);
      updateTocNavDisplay(expanded);
    });
  }
});
