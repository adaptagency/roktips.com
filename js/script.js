/**
 * RokTips Landing Page – Vanilla JS
 * Sticky CTA, video embed, scroll reveals
 */

(function () {
  'use strict';

  // --- Launch banner ---
  var launchBanner = document.getElementById('launch-banner');

  if (launchBanner) {
    document.body.classList.add('has-banner');
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

  // --- Video: open YouTube embed in modal ---
  var videoModal = document.getElementById('video-modal');
  var videoIframe = document.getElementById('video-iframe');
  var videoOpenButtons = document.querySelectorAll('.js-open-video');
  var videoCloseSelectors = '[data-video-close]';
  var YOUTUBE_VIDEO_ID = 'Y_FrEuYZ6Yo';

  function openVideoModal() {
    // If running from file://, YouTube embed may fail (Error 153). Fallback to new tab.
    if (window.location.protocol === 'file:') {
      window.open('https://www.youtube.com/watch?v=' + YOUTUBE_VIDEO_ID, '_blank', 'noopener');
      return;
    }
    if (!videoModal || !videoIframe) return;
    videoModal.classList.add('is-open');
    videoModal.setAttribute('aria-hidden', 'false');
    var originParam = encodeURIComponent(window.location.origin);
    var src =
      'https://www.youtube.com/embed/' +
      YOUTUBE_VIDEO_ID +
      '?autoplay=1&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&origin=' +
      originParam;
    videoIframe.src = src;
  }

  function closeVideoModal() {
    if (!videoModal || !videoIframe) return;
    videoModal.classList.remove('is-open');
    videoModal.setAttribute('aria-hidden', 'true');
    videoIframe.src = '';
  }

  if (videoModal && videoOpenButtons.length) {
    videoOpenButtons.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        openVideoModal();
      });
    });

    videoModal.querySelectorAll(videoCloseSelectors).forEach(function (el) {
      el.addEventListener('click', function () {
        closeVideoModal();
      });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeVideoModal();
      }
    });
  }

  // --- Local MP4 video in modal ---
  var localVideoModal = document.getElementById('local-video-modal');
  var localVideo = document.getElementById('local-video');
  var localVideoOpenButtons = document.querySelectorAll('.js-open-local-video');
  var localVideoCloseSelectors = '[data-local-video-close]';

  function openLocalVideoModal() {
    if (!localVideoModal || !localVideo) return;
    localVideoModal.classList.add('is-open');
    localVideoModal.setAttribute('aria-hidden', 'false');
    try {
      localVideo.currentTime = 0;
      var playPromise = localVideo.play();
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(function () {});
      }
    } catch (e) {}
  }

  function closeLocalVideoModal() {
    if (!localVideoModal || !localVideo) return;
    localVideoModal.classList.remove('is-open');
    localVideoModal.setAttribute('aria-hidden', 'true');
    try {
      localVideo.pause();
      localVideo.currentTime = 0;
    } catch (e) {}
  }

  if (localVideoModal && localVideoOpenButtons.length) {
    localVideoOpenButtons.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        openLocalVideoModal();
      });
    });

    localVideoModal.querySelectorAll(localVideoCloseSelectors).forEach(function (el) {
      el.addEventListener('click', function () {
        closeLocalVideoModal();
      });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeLocalVideoModal();
      }
    });
  }

  // --- Scroll reveal ---
  var revealSelector = '.reveal';
  var revealElements = document.querySelectorAll(revealSelector);

  if (revealElements.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
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
    revealElements.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    var href = anchor.getAttribute('href');
    if (href === '#') return;
    var target = document.querySelector(href);
    if (target) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  });

  // --- Interest registration modal ---
  var modal = document.getElementById('interest-modal');
  var openButtons = document.querySelectorAll('.js-open-register');
  var closeSelectors = '[data-modal-close]';

  function openModal() {
    if (!modal) return;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
  }

  if (modal && openButtons.length) {
    openButtons.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        openModal();
      });
    });

    modal.querySelectorAll(closeSelectors).forEach(function (el) {
      el.addEventListener('click', function () {
        closeModal();
      });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeModal();
      }
    });

    var form = document.getElementById('interest-form');
    var errorEl = document.getElementById('interest-error');
    var successEl = document.getElementById('interest-success');

    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();

        var firstName = document.getElementById('interest-first-name');
        var email = document.getElementById('interest-email');
        var phoneCountry = document.getElementById('interest-phone-country');
        var phone = document.getElementById('interest-phone');
        var channelInputs = form.querySelectorAll('input[name="channel"]');

        var firstNameVal = firstName ? firstName.value.trim() : '';
        var emailVal = email ? email.value.trim() : '';
        var phoneVal = phone ? phone.value.trim() : '';
        var phoneCountryVal = phoneCountry ? phoneCountry.value : '';

        var hasContact = emailVal !== '' || phoneVal !== '';

        if (!hasContact) {
          if (errorEl) {
            errorEl.textContent = 'Please provide at least an email address or phone number.';
            errorEl.hidden = false;
          }
          if (successEl) successEl.hidden = true;
          return;
        }

        if (phoneVal !== '') {
          var channelSelected = false;
          channelInputs.forEach(function (input) {
            if (input.checked) channelSelected = true;
          });
          if (!channelSelected) {
            if (errorEl) {
              errorEl.textContent = 'Please choose WhatsApp or Zalo as your preferred app for phone updates.';
              errorEl.hidden = false;
            }
            if (successEl) successEl.hidden = true;
            return;
          }
        }

        if (errorEl) errorEl.hidden = true;

        var channelVal = '';
        channelInputs.forEach(function (input) {
          if (input.checked) channelVal = input.value;
        });

        // Send to Google Apps Script endpoint (form-encoded to avoid CORS preflight)
        var SHEET_ENDPOINT = 'https://script.google.com/macros/s/AKfycbzoZHSHwnk2Q_9ik8Jb5d1XF3PYtHEoN7oBDLPzSP6XlRxe9JsNy4tXBd0EzR6zg_gK/exec';

        var formData = new URLSearchParams();
        formData.append('first_name', firstNameVal);
        formData.append('email', emailVal);
        formData.append('phone_country', phoneCountryVal);
        formData.append('phone', phoneVal);
        formData.append('channel', channelVal);
        formData.append('user_agent', navigator.userAgent);
        formData.append('page', window.location.href);

        fetch(SHEET_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          },
          body: formData.toString()
        })
          .then(function (res) {
            try {
              return res.json();
            } catch (e) {
              return { ok: res.ok };
            }
          })
          .then(function (data) {
            if (!data || data.ok === false) {
              throw new Error((data && data.error) || 'Error saving');
            }
            if (successEl) {
              successEl.hidden = false;
            }
            // Close modal shortly after success and reset form
            setTimeout(function () {
              form.reset();
              closeModal();
              if (successEl) successEl.hidden = true;
            }, 1800);
          })
          .catch(function () {
            if (errorEl) {
              errorEl.textContent = 'Something went wrong saving your details. Please try again in a moment.';
              errorEl.hidden = false;
            }
            if (successEl) successEl.hidden = true;
          });
      });
    }
  }
})();
