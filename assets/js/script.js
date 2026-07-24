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

// ============ PROJECT MODAL ============
const projectItems = document.querySelectorAll('[data-project-item]');
const modalContainer = document.querySelector('[data-modal-container]');
const modalCloseBtn = document.querySelector('[data-modal-close-btn]');
const overlay = document.querySelector('[data-overlay]');

const modalImgWrapper = document.querySelector('[data-modal-img-wrapper]');
const modalVideo = document.querySelector('[data-modal-video]');
const modalTitle = document.querySelector('[data-modal-title]');
const modalText = document.querySelector('[data-modal-text]');
const modalFeatured = document.querySelector('[data-modal-featured]');

const projectModalFunc = function () {
  modalContainer.classList.toggle('active');
  overlay.classList.toggle('active');
};

projectItems.forEach(item => {
  item.addEventListener('click', function () {
    // The banner can be either a real cover image (<img>) or a plain-text
    // placeholder div; rebuild the modal's banner slot to match.
    const imgSource = this.querySelector('[data-project-img]');
    if (imgSource.tagName === 'IMG') {
      modalImgWrapper.innerHTML = `<img class="projects-cover-img" src="${imgSource.getAttribute('src')}" alt="${imgSource.getAttribute('alt') || ''}">`;
    } else {
      modalImgWrapper.innerHTML = `<div class="project-img-placeholder">${imgSource.textContent}</div>`;
    }
    modalTitle.textContent = this.querySelector('[data-project-title]').textContent;

    // Use a longer, modal-only description if the card provides one,
    // otherwise fall back to the short card text.
    const modalOnlyText = this.querySelector('[data-project-modal-text]');
    const cardText = this.querySelector('[data-project-text]');
    modalText.textContent = (modalOnlyText || cardText).textContent;

    const featured = this.querySelector('[data-project-featured]');
    modalFeatured.innerHTML = featured ? featured.outerHTML : '';

    // If this project has a video, show it in place of the static banner.
    // Local video files (e.g. .mp4) render as a native <video> player;
    // external links (e.g. YouTube) render as an embedded <iframe>.
    const videoSrc = this.dataset.videoSrc;
    const videoTitle = this.querySelector('[data-project-title]').textContent;
    if (videoSrc) {
      const isExternalEmbed = /youtube|vimeo/i.test(videoSrc);
      if (isExternalEmbed) {
        modalVideo.innerHTML = `<div class="modal-video-frame"><iframe src="${videoSrc}" title="${videoTitle} — video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>`;
      } else {
        const poster = this.dataset.videoPoster;
        modalVideo.innerHTML = `<div class="modal-video-frame"><video controls preload="metadata"${poster ? ` poster="${poster}"` : ''} title="${videoTitle} — video"><source src="${videoSrc}" type="video/mp4">Your browser does not support the video tag.</video></div>`;
      }
      modalVideo.classList.add('active');
      modalImgWrapper.style.display = 'none';
    } else {
      modalVideo.innerHTML = '';
      modalVideo.classList.remove('active');
      modalImgWrapper.style.display = '';
    }

    projectModalFunc();
  });
});

const closeProjectModal = function () {
  projectModalFunc();
  modalVideo.innerHTML = ''; // stop playback once the modal is closed
};

modalCloseBtn.addEventListener('click', closeProjectModal);
overlay.addEventListener('click', closeProjectModal);

// Prevent the "Featured in..." link on a card from also triggering the
// modal-open click handler on its parent [data-project-item].
document.querySelectorAll('[data-project-featured]').forEach(link => {
  link.addEventListener('click', e => e.stopPropagation());
});
