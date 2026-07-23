'use strict';

// ============ SIDEBAR "Show Contacts" toggle (mobile) ============
const sidebar = document.querySelector('[data-sidebar]');
const sidebarBtn = document.querySelector('[data-sidebar-btn]');

if (sidebarBtn) {
  sidebarBtn.addEventListener('click', function () {
    sidebar.classList.toggle('active');
  });
}

// ============ NAVBAR tab switching ============
const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

navigationLinks.forEach((link, index) => {
  link.addEventListener('click', function () {
    pages.forEach((page, pageIndex) => {
      if (pageIndex === index) {
        page.classList.add('active');
        navigationLinks[pageIndex].classList.add('active');
      } else {
        page.classList.remove('active');
        navigationLinks[pageIndex].classList.remove('active');
      }
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
