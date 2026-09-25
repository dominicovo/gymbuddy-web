'use client';

import { useEffect } from 'react';

export default function AnimationProvider() {
  useEffect(() => {
    // Nav scroll glass effect
    const nav = document.getElementById('nav');
    const handleScroll = () => {
      if (nav) nav.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Scroll-in fade-up observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const targets = document.querySelectorAll<HTMLElement>(
      '.hero-badge, .hero-title, .hero-subtitle, .hero-actions, .hero-social-proof, .hero-visual, ' +
        '.stat-item, .how-step, .feature-card, .testi-card, .waitlist-card, ' +
        '.phone, .day-item, .buddies-point, .pair-card, .compare-wrap, .faq-item'
    );
    targets.forEach((el, i) => {
      el.classList.add('fade-up');
      el.style.transitionDelay = `${(i % 5) * 70}ms`;
      observer.observe(el);
    });

    // Smooth scroll for anchor links
    const handleAnchorClick = (e: Event) => {
      const link = e.currentTarget as HTMLAnchorElement;
      const href = link.getAttribute('href') ?? '';
      const id = href.startsWith('/#') && window.location.pathname === '/' ? href.slice(1) : href;
      if (!id.startsWith('#')) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    const anchors = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"], a[href^="/#"]');
    anchors.forEach((link) => link.addEventListener('click', handleAnchorClick));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      anchors.forEach((link) => link.removeEventListener('click', handleAnchorClick));
    };
  }, []);

  return null;
}
