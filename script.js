/* ================================================================
   LAVALUC — Lavandería Profesional · San Luis, Lima
   script.js  |  Funcionalidades completas v2
================================================================ */
'use strict';

/* ----------------------------------------------------------------
   1. HEADER — scroll + nav activo
---------------------------------------------------------------- */
(function () {
  const header   = document.getElementById('header');
  const navLinks = document.querySelectorAll('.nav__link');
  const sections = document.querySelectorAll('section[id]');

  function onScroll() {
    header.classList.toggle('scrolled', window.scrollY > 50);

    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 130) current = s.id;
    });
    navLinks.forEach(l => {
      l.classList.toggle('active', l.getAttribute('href') === `#${current}`);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ----------------------------------------------------------------
   2. MENÚ MÓVIL
---------------------------------------------------------------- */
(function () {
  const btn      = document.getElementById('hamburger');
  const menu     = document.getElementById('mobileMenu');
  const closeBtn = document.getElementById('mobileClose');
  const links    = menu.querySelectorAll('.mobile-menu__link, .mobile-menu__btn');

  const open  = () => { menu.classList.add('open'); btn.classList.add('open'); document.body.style.overflow = 'hidden'; };
  const close = () => { menu.classList.remove('open'); btn.classList.remove('open'); document.body.style.overflow = ''; };

  btn.addEventListener('click', open);
  closeBtn.addEventListener('click', close);
  links.forEach(l => l.addEventListener('click', close));
  document.addEventListener('keydown', e => e.key === 'Escape' && close());
})();

/* ----------------------------------------------------------------
   3. REVEAL al hacer scroll (Intersection Observer)
---------------------------------------------------------------- */
(function () {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const siblings = Array.from(entry.target.parentElement?.children || [])
        .filter(el => el.classList?.contains('reveal'));
      const idx   = siblings.indexOf(entry.target);
      const delay = idx >= 0 ? idx * 110 : 0;
      setTimeout(() => entry.target.classList.add('visible'), delay);
      io.unobserve(entry.target);
    });
  }, { threshold: 0.10, rootMargin: '0px 0px -36px 0px' });

  els.forEach(el => io.observe(el));
})();

/* ----------------------------------------------------------------
   4. SMOOTH SCROLL
---------------------------------------------------------------- */
(function () {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY
                  - document.getElementById('header').offsetHeight - 12;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();

/* ----------------------------------------------------------------
   5. TABS DE PRECIOS
---------------------------------------------------------------- */
(function () {
  const tabs   = document.querySelectorAll('.price-tab');
  const panels = document.querySelectorAll('.price-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const cat = tab.dataset.cat;

      // Activa tab
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Activa panel
      panels.forEach(p => {
        p.classList.toggle('active', p.id === `cat-${cat}`);
      });
    });
  });

  // Hover highlight en filas
  document.querySelectorAll('tbody tr:not(.table-subheader-row)').forEach(row => {
    row.addEventListener('mouseenter', () => row.style.background = 'var(--cyan-xlt)');
    row.addEventListener('mouseleave', () => row.style.background = '');
  });
})();

/* ----------------------------------------------------------------
   6. CONTADORES ANIMADOS
---------------------------------------------------------------- */
(function () {
  const nums = document.querySelectorAll('.hstat__num[data-target]');
  if (!nums.length) return;

  let done = false;

  function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

  function countUp(el, target, suffix, duration = 1600) {
    let start = null;
    function step(ts) {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const val = Math.floor(easeOutCubic(p) * target);
      el.textContent = (val >= 1000 ? val.toLocaleString('es-PE') : val) + suffix;
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = (target >= 1000 ? target.toLocaleString('es-PE') : target) + suffix;
    }
    requestAnimationFrame(step);
  }

  const io = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !done) {
      done = true;
      nums.forEach(el => countUp(el, +el.dataset.target, el.dataset.suffix || '', 1600));
      io.disconnect();
    }
  }, { threshold: 0.5 });

  const stats = document.querySelector('.hero__stats');
  if (stats) io.observe(stats);
})();

/* ----------------------------------------------------------------
   7. FORMULARIO â€” validacion + envio a WhatsApp
---------------------------------------------------------------- */
(function () {
  const form = document.getElementById('contactForm');
  const overlay = document.getElementById('modalOverlay');
  const btnClose = document.getElementById('modalClose');
  const whatsappNumber = '51913474275';
  if (!form) return;

  const rules = {
    nombre:   { fn: v => v.trim().length >= 3,                msg: 'Ingresa tu nombre completo (min. 3 caracteres).' },
    telefono: { fn: v => /^[\d\s\+\-]{7,15}$/.test(v.trim()), msg: 'Telefono invalido (7-15 digitos).' },
    direccion:{ fn: v => v.trim().length >= 8,                msg: 'Ingresa tu direccion completa.' },
    servicio: { fn: v => v !== '',                            msg: 'Selecciona un servicio.' },
  };

  function validate(name) {
    const el = form.elements[name];
    const err = document.getElementById(`error-${name}`);
    const ok = rules[name].fn(el.value);
    if (err) err.textContent = ok ? '' : rules[name].msg;
    el.classList.toggle('error', !ok);
    return ok;
  }

  function fieldValue(name) {
    return (form.elements[name]?.value || '').trim();
  }

  function selectedServiceLabel() {
    const select = form.elements.servicio;
    return select.options[select.selectedIndex]?.textContent.trim() || 'No especificado';
  }

  function buildWhatsappMessage() {
    const lines = [
      'Hola LAVALUC, deseo una cotizacion.',
      '',
      `Nombre: ${fieldValue('nombre')}`,
      `Telefono / WhatsApp: ${fieldValue('telefono')}`,
      `Direccion: ${fieldValue('direccion')}`,
      `Servicio requerido: ${selectedServiceLabel()}`,
    ];

    const message = fieldValue('mensaje');
    if (message) lines.push(`Mensaje adicional: ${message}`);

    lines.push('', 'Quedo atento(a) a la cotizacion. Gracias.');
    return lines.join('\n');
  }

  function openWhatsappQuote() {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(buildWhatsappMessage())}`;
    const opened = window.open(url, '_blank', 'noopener,noreferrer');
    if (!opened) window.location.href = url;
  }

  Object.keys(rules).forEach(name => {
    const el = form.elements[name];
    if (!el) return;
    el.addEventListener('blur', () => validate(name));
    el.addEventListener('input', () => el.classList.contains('error') && validate(name));
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    const ok = Object.keys(rules).map(validate).every(Boolean);
    if (!ok) {
      form.querySelector('.error')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    const btn = document.getElementById('submitBtn');
    const text = btn.querySelector('.btn__text');
    const spin = btn.querySelector('.btn__spinner');

    btn.disabled = true;
    text.textContent = 'Abriendo WhatsApp...';
    spin.hidden = false;

    openWhatsappQuote();

    setTimeout(() => {
      btn.disabled = false;
      text.textContent = 'Enviar solicitud por WhatsApp';
      spin.hidden = true;
      form.reset();
      overlay?.classList.add('open');
    }, 700);
  });

  const closeModal = () => overlay?.classList.remove('open');
  btnClose?.addEventListener('click', closeModal);
  overlay?.addEventListener('click', e => e.target === overlay && closeModal());
  document.addEventListener('keydown', e => e.key === 'Escape' && closeModal());
})();

/* ----------------------------------------------------------------
   8. PARALLAX suave en hero (desktop)
---------------------------------------------------------------- */
(function () {
  if (window.innerWidth < 768) return;
  const bg = document.querySelector('.hero__bg-photo');
  if (!bg) return;
  window.addEventListener('scroll', () => {
    bg.style.transform = `translateY(${window.scrollY * 0.25}px)`;
  }, { passive: true });
})();

/* ----------------------------------------------------------------
   9. LOGO → scroll to top
---------------------------------------------------------------- */
document.querySelectorAll('.logo').forEach(logo => {
  logo.addEventListener('click', e => {
    if (logo.getAttribute('href') === '#inicio') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
});

/* ----------------------------------------------------------------
   10. LOG
---------------------------------------------------------------- */
console.log(
  '%cLAVALUC%c v2.0 — cargado',
  'color:#17C3CE;font-weight:800;font-size:1rem;',
  'color:#4A6572'
);