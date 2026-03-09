/**
 * RokTips Landing Page – Vanilla JS
 * Sticky CTA, video embed, scroll reveals
 */

(function () {
  'use strict';

  var BANNER_STORAGE_KEY = 'roktips_banner_dismissed';

  // --- Launch banner ---
  var launchBanner = document.getElementById('launch-banner');
  var bannerDismiss = document.getElementById('banner-dismiss');

  if (launchBanner) {
    document.body.classList.add('has-banner');
    if (localStorage.getItem(BANNER_STORAGE_KEY) === '1') {
      launchBanner.classList.add('is-dismissed');
      document.body.classList.add('banner-dismissed');
    }
  }

  if (bannerDismiss && launchBanner) {
    bannerDismiss.addEventListener('click', function () {
      launchBanner.classList.add('is-dismissed');
      document.body.classList.add('banner-dismissed');
      try {
        localStorage.setItem(BANNER_STORAGE_KEY, '1');
      } catch (e) {}
    });
  }

  // --- Sticky buy bar ---
  var stickyBuy = document.getElementById('sticky-buy');
  var hero = document.getElementById('hero');

  if (stickyBuy && hero) {
    var heroHeight = hero.offsetHeight;
    var threshold = Math.min(heroHeight * 0.5, 380);

    function updateStickyBuy() {
      if (window.scrollY > threshold) {
        stickyBuy.classList.add('is-visible');
      } else {
        stickyBuy.classList.remove('is-visible');
      }
    }

    window.addEventListener('scroll', updateStickyBuy, { passive: true });
    updateStickyBuy();
  }

  // --- Video: play overlay → embed ---
  var videoTrigger = document.getElementById('video-trigger');
  var videoEmbed = document.getElementById('video-embed');
  // Replace with your YouTube video ID (e.g. dQw4w9WgXcQ)
  var YOUTUBE_VIDEO_ID = 'dQw4w9WgXcQ';

  if (videoTrigger && videoEmbed) {
    videoTrigger.addEventListener('click', function (e) {
      e.preventDefault();
      var iframe = videoEmbed.querySelector('iframe');
      if (!iframe || iframe.src) return;
      iframe.src = 'https://www.youtube.com/embed/' + YOUTUBE_VIDEO_ID + '?autoplay=1';
      videoEmbed.hidden = false;
      videoTrigger.hidden = true;
    });
  }

  // --- Scroll reveal ---
  var revealSelector = '.reveal';
  var revealElements = document.querySelectorAll(revealSelector);

  if (revealElements.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.1
      }
    );

    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // No IntersectionObserver: show all on load
    revealElements.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  // --- Smooth scroll for anchor links (enhance native behavior) ---
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    const href = anchor.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  });
})();
