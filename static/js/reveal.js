// Scroll reveal for .reveal elements.
// Robust by design: html.js is set synchronously in <head>, so the hidden
// state never applies without JS. Reduced-motion users and browsers without
// IntersectionObserver get all content shown immediately.
(function () {
  'use strict';

  var items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  function revealAll() {
    for (var i = 0; i < items.length; i++) items[i].classList.add('is-visible');
  }

  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced || !('IntersectionObserver' in window)) {
    revealAll();
    return;
  }

  var observer = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  // Small stagger between siblings already in the same list.
  items.forEach(function (el, i) {
    el.style.transitionDelay = Math.min(i, 6) * 60 + 'ms';
    observer.observe(el);
  });
})();
