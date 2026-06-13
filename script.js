/**
 * InAmigos Foundation Website
 * Premium UI/UX Interactions & Core Behaviors
 * Author: Antigravity AI
 */

// Project Detailed Data Object
const projectsData = {
  seva: {
    title: "Project Seva (Hunger Relief & Clothing)",
    tag: "Food & Clothing",
    image: "https://inamigosfoundation.org.in/public/storage/slideshow/1738236132.jpg",
    description: "Launched during the pandemic in September 2020, Project Seva addresses immediate food security issues by serving hot meals and fresh apparel. We work across low-income communities, urban shelters, and rural pockets in Bilaspur and nationwide. Over 50,000+ meals and clothes have been distributed, driven by a dedicated group of volunteers who run weekly food drives.",
    stats: [
      { value: "50,000+", label: "Meals Served" },
      { value: "15+", label: "Cities Reached" },
      { value: "5,000+", label: "Clothing Bundles" },
      { value: "500+", label: "Active Volunteers" }
    ]
  },
  bachpanshala: {
    title: "Project Bachpanshala (Education Support)",
    tag: "Child Education",
    image: "https://inamigosfoundation.org.in/public/storage/slideshow/1738235951.jpg",
    description: "Project Bachpanshala is dedicated to bringing quality primary education and digital literacy to children in rural areas and slum clusters. By training children in elementary computing, basic life skills, and academic subjects, we prepare them for formal schooling and a digital future.",
    stats: [
      { value: "5,000+", label: "Children Assisted" },
      { value: "20+", label: "Study Centers" },
      { value: "120+", label: "Mentors Sourced" },
      { value: "90%", label: "Retention Rate" }
    ]
  },
  jeev: {
    title: "Project Jeev (Animal Rescue & Care)",
    tag: "Animal Welfare",
    image: "https://inamigosfoundation.org.in/public/storage/slideshow/1738235697.jpg",
    description: "Project Jeev provides dedicated care, first aid, and feeding to street animals. Our volunteers feed 50+ stray animals daily. We also install clean drinking water pots during hot summers, conduct rabies vaccination drives, and execute critical rescue operations for injured strays.",
    stats: [
      { value: "50+", label: "Strays Fed Daily" },
      { value: "1,200+", label: "Rescues Conducted" },
      { value: "300+", label: "Water Bowls Set" },
      { value: "5+", label: "Shelter Partners" }
    ]
  },
  udaan: {
    title: "Project Udaan (Women Empowerment)",
    tag: "Women Empowerment",
    image: "https://inamigosfoundation.org.in/public/storage/slideshow/1738235638.jpg",
    description: "Project Udaan empowers rural women by helping them establish self-help groups (SHGs), providing vocational workshops like tailoring, and raising awareness about menstrual health and hygiene. We foster financial literacy and self-reliance, helping over 900 girls break societal barriers.",
    stats: [
      { value: "900+", label: "Women Empowered" },
      { value: "15+", label: "SHGs Supported" },
      { value: "30+", label: "Hygiene Seminars" },
      { value: "100%", label: "Safe Sanitary Access" }
    ]
  },
  prakriti: {
    title: "Project Prakriti (Environment Conservation)",
    tag: "Environment",
    image: "https://inamigosfoundation.org.in/public/storage/slideshow/1738236201.jpg",
    description: "Project Prakriti drives tree plantation campaigns and promotes eco-friendly agricultural practices to combat climate change. Having planted over 20,000+ saplings across various states, the project involves school groups, farmers, and urban residents in carbon neutrality efforts.",
    stats: [
      { value: "20,000+", label: "Trees Planted" },
      { value: "50+", label: "Green Campaigns" },
      { value: "85%", label: "Survival Rate" },
      { value: "2,000+", label: "Community Farmers" }
    ]
  },
  vikas: {
    title: "Project Vikas (Domain Internships)",
    tag: "Skill Internships",
    image: "https://inamigosfoundation.org.in/public/storage/settings/1738236437.jpg",
    description: "Project Vikas is a national internship initiative designed to enhance youth employability. We offer structured virtual and hybrid internship opportunities across fields like data operations, finance, content writing, graphic design, social work, and social media marketing. Over 30,000+ interns have been trained over the last four years, equipping them with professional skills.",
    stats: [
      { value: "30,000+", label: "Interns Certified" },
      { value: "8+", label: "Work Tracks" },
      { value: "4", label: "Years of Training" },
      { value: "95%", label: "Skill Growth Rating" }
    ]
  }
};

// DOM Nodes Cache
const preloader = document.getElementById('preloader');
const scrollProgressBar = document.getElementById('scroll-progress');
const header = document.getElementById('header');
const themeToggleBtn = document.getElementById('theme-toggle');
const mobileNavToggle = document.getElementById('mobile-nav-toggle');
const mobileSidebar = document.getElementById('mobile-sidebar');
const mobileSidebarClose = document.getElementById('mobile-sidebar-close');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const backToTopBtn = document.getElementById('back-to-top');
const revealElements = document.querySelectorAll('.reveal-fade, .reveal-left, .reveal-right');
const navLinks = document.querySelectorAll('.nav-link');
const mobileLinks = document.querySelectorAll('.mobile-link');
const sections = document.querySelectorAll('section, header');

// 1. PRELOADER TERMINATION
window.addEventListener('load', () => {
  if (preloader) {
    preloader.classList.add('fade-out');
  }
  revealOnScroll();
});

// 2. SCROLL EVENTS: Sticky Header, Reading Progress, Back-to-Top
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

  // Reading scroll progress indicator bar
  if (scrollProgressBar) {
    scrollProgressBar.style.width = scrollPercent + '%';
  }

  // Sticky Navigation Bar
  if (header) {
    if (scrollTop > 50) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  }

  // Back-to-Top state toggle
  if (backToTopBtn) {
    if (scrollTop > 500) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  }

  // Animations & Menu highlight updates
  revealOnScroll();
  updateActiveNavLink();
});

// Back-to-Top Trigger
if (backToTopBtn) {
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// 3. COLOR THEME toggles (memory sync to localStorage)
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    let nextTheme = theme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
  });
}

// 4. MOBILE DRAWER MENUS
function openSidebar() {
  if (mobileSidebar && sidebarOverlay && mobileNavToggle) {
    mobileSidebar.classList.add('open');
    sidebarOverlay.classList.add('open');
    mobileNavToggle.classList.add('active');
  }
}

function closeSidebar() {
  if (mobileSidebar && sidebarOverlay && mobileNavToggle) {
    mobileSidebar.classList.remove('open');
    sidebarOverlay.classList.remove('open');
    mobileNavToggle.classList.remove('active');
  }
}

if (mobileNavToggle) {
  mobileNavToggle.addEventListener('click', openSidebar);
}
if (mobileSidebarClose) {
  mobileSidebarClose.addEventListener('click', closeSidebar);
}
if (sidebarOverlay) {
  sidebarOverlay.addEventListener('click', closeSidebar);
}

// Close mobile sidebar on link selection
mobileLinks.forEach(link => {
  link.addEventListener('click', closeSidebar);
});

// 5. INTERSECTIONOBSERVER VIEWPORT ANIMATOR
function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.88;
  revealElements.forEach(el => {
    const elTop = el.getBoundingClientRect().top;
    if (elTop < triggerBottom) {
      el.classList.add('revealed');
    }
  });
}

// Active Nav highlight checker
function updateActiveNavLink() {
  let scrollPos = window.scrollY + 120;
  sections.forEach(section => {
    if (section.id) {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${section.id}` || (section.id === 'home' && link.getAttribute('href') === '#')) {
            link.classList.add('active');
          }
        });
      }
    }
  });
}

// 6. BENTO GRID TAB TOGGLE (MISSION & VISION)
window.switchMV = function(paneName) {
  const tabs = document.querySelectorAll('.bento-mv-tab');
  const panes = document.querySelectorAll('.mv-pane');

  tabs.forEach(tab => tab.classList.remove('active'));
  panes.forEach(pane => pane.classList.remove('active'));

  // Highlight selected tab
  const activeTab = Array.from(tabs).find(t => t.getAttribute('onclick').includes(paneName));
  const activePane = document.getElementById(`bento-${paneName}`);

  if (activeTab) activeTab.classList.add('active');
  if (activePane) activePane.classList.add('active');
};

// 7. INITIATIVE DETAIL MODALS
const projectModal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-project-title');
const modalDesc = document.getElementById('modal-project-description');
const modalImg = document.getElementById('modal-project-img');
const modalTag = document.getElementById('modal-project-tag');
const modalStats = document.getElementById('modal-project-stats');

window.openProjectModal = function(projectId) {
  const data = projectsData[projectId];
  if (!data || !projectModal) return;

  modalTitle.textContent = data.title;
  modalDesc.textContent = data.description;
  modalImg.src = data.image;
  modalImg.alt = data.title;
  modalTag.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${data.tag}`;

  // Stats Grid Builder
  modalStats.innerHTML = '';
  data.stats.forEach(stat => {
    const statItem = document.createElement('div');
    statItem.className = 'modal-stat-item';
    statItem.innerHTML = `
      <span class="modal-stat-value">${stat.value}</span>
      <span class="modal-stat-label">${stat.label}</span>
    `;
    modalStats.appendChild(statItem);
  });

  projectModal.classList.add('open');
  document.body.style.overflow = 'hidden'; // Disable scroll leakage
};

window.closeProjectModal = function() {
  if (projectModal) {
    projectModal.classList.remove('open');
    document.body.style.overflow = '';
  }
};

// Modal click backdrop close
if (projectModal) {
  projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) {
      closeProjectModal();
    }
  });
}

// 8. SOCIAL IMPACT PROGRESS GAUGES & COUNTER TRIGGERS
const counterSection = document.getElementById('impact');
const counters = document.querySelectorAll('.counter');
const progressFills = document.querySelectorAll('.progress-svg-fill');
let countersStarted = false;

function animateGaugesAndNumbers() {
  // Trigger SVG path dash offset fills
  progressFills.forEach(fill => {
    fill.classList.add('animate-fill');
  });

  // Numbers increment scroll logic
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const updateCount = () => {
      const count = +counter.innerText.replace(/,/g, '');
      const increment = target / 70; // Control speed duration

      if (count < target) {
        counter.innerText = Math.ceil(count + increment).toLocaleString();
        setTimeout(updateCount, 25);
      } else {
        counter.innerText = target.toLocaleString();
      }
    };
    updateCount();
  });
}

// Intersection Observer for Counters
const impactObserver = new IntersectionObserver((entries) => {
  const [entry] = entries;
  if (entry.isIntersecting && !countersStarted) {
    countersStarted = true;
    animateGaugesAndNumbers();
  }
}, { threshold: 0.2 });

if (counterSection) {
  impactObserver.observe(counterSection);
}

// 9. GALLERY PORTFOLIO CATEGORY FILTER
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filterVal = btn.getAttribute('data-filter');

    galleryItems.forEach(item => {
      const itemCat = item.getAttribute('data-category');
      if (filterVal === 'all' || itemCat === filterVal) {
        item.classList.remove('hidden');
        item.style.transform = 'scale(0)';
        setTimeout(() => {
          item.style.transform = 'scale(1)';
        }, 50);
      } else {
        item.classList.add('hidden');
      }
    });
  });
});

// 10. GALLERY FULLSCREEN LIGHTBOX
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxDesc = document.getElementById('lightbox-desc');
const closeLightboxBtn = document.querySelector('.close-lightbox-btn');
const prevLightboxBtn = document.querySelector('.prev-btn');
const nextLightboxBtn = document.querySelector('.next-btn');

let currentGalleryIndex = 0;
let visibleGalleryItems = [];

function refreshVisibleGalleryItems() {
  visibleGalleryItems = Array.from(galleryItems).filter(item => !item.classList.contains('hidden'));
}

window.openLightbox = function(index) {
  refreshVisibleGalleryItems();
  currentGalleryIndex = index;
  const targetItem = visibleGalleryItems[currentGalleryIndex];
  if (!targetItem || !lightbox) return;

  const img = targetItem.querySelector('.gallery-img');
  const title = targetItem.querySelector('.gallery-item-title');
  const desc = targetItem.querySelector('.gallery-item-desc');

  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
  lightboxTitle.textContent = title.textContent;
  lightboxDesc.textContent = desc.textContent;

  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
};

window.closeLightbox = function() {
  if (lightbox) {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }
};

function showNextImage() {
  if (visibleGalleryItems.length <= 1) return;
  currentGalleryIndex = (currentGalleryIndex + 1) % visibleGalleryItems.length;
  updateLightboxContent();
}

function showPrevImage() {
  if (visibleGalleryItems.length <= 1) return;
  currentGalleryIndex = (currentGalleryIndex - 1 + visibleGalleryItems.length) % visibleGalleryItems.length;
  updateLightboxContent();
}

function updateLightboxContent() {
  const targetItem = visibleGalleryItems[currentGalleryIndex];
  if (!targetItem) return;

  const img = targetItem.querySelector('.gallery-img');
  const title = targetItem.querySelector('.gallery-item-title');
  const desc = targetItem.querySelector('.gallery-item-desc');

  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
  lightboxTitle.textContent = title.textContent;
  lightboxDesc.textContent = desc.textContent;
}

// Bind Lightbox open triggers
galleryItems.forEach((item) => {
  const trigger = item.querySelector('.btn-lightbox-trigger');
  if (trigger) {
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      refreshVisibleGalleryItems();
      const visibleIndex = visibleGalleryItems.indexOf(item);
      if (visibleIndex !== -1) {
        openLightbox(visibleIndex);
      }
    });
  }
});

if (closeLightboxBtn) closeLightboxBtn.addEventListener('click', closeLightbox);
if (nextLightboxBtn) nextLightboxBtn.addEventListener('click', showNextImage);
if (prevLightboxBtn) prevLightboxBtn.addEventListener('click', showPrevImage);

if (lightbox) {
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
}

// Keyboards bindings
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeProjectModal();
    closeLightbox();
  }
  if (lightbox && lightbox.classList.contains('open')) {
    if (e.key === 'ArrowRight') showNextImage();
    if (e.key === 'ArrowLeft') showPrevImage();
  }
});

// 11. TESTIMONIAL CAROUSEL DECK
const testimonialTrack = document.getElementById('testimonial-track');
const testimonialCards = document.querySelectorAll('.testimonial-card');
const prevTestiBtn = document.getElementById('prev-testi-btn');
const nextTestiBtn = document.getElementById('next-testi-btn');
let currentTestiIndex = 0;

function updateTestimonialSlider() {
  if (!testimonialTrack) return;
  const offset = -currentTestiIndex * 100;
  testimonialTrack.style.transform = `translateX(${offset}%)`;
}

if (nextTestiBtn) {
  nextTestiBtn.addEventListener('click', () => {
    currentTestiIndex = (currentTestiIndex + 1) % testimonialCards.length;
    updateTestimonialSlider();
  });
}

if (prevTestiBtn) {
  prevTestiBtn.addEventListener('click', () => {
    currentTestiIndex = (currentTestiIndex - 1 + testimonialCards.length) % testimonialCards.length;
    updateTestimonialSlider();
  });
}

// Auto slider (8s interval)
let autoSlideInterval = setInterval(() => {
  if (testimonialCards.length > 0) {
    currentTestiIndex = (currentTestiIndex + 1) % testimonialCards.length;
    updateTestimonialSlider();
  }
}, 8000);

if (prevTestiBtn || nextTestiBtn) {
  [prevTestiBtn, nextTestiBtn].forEach(btn => {
    if (btn) {
      btn.addEventListener('click', () => {
        clearInterval(autoSlideInterval);
      });
    }
  });
}

// 12. CONTACT SUBMIT VALS & SUCCESS TOASTS
const contactForm = document.getElementById('contact-form');
const successToast = document.getElementById('success-toast');

function showToast() {
  if (successToast) {
    successToast.classList.add('show');
    setTimeout(closeToast, 6000);
  }
}

window.closeToast = function() {
  if (successToast) {
    successToast.classList.remove('show');
  }
};

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('form-name');
    const email = document.getElementById('form-email');
    const phone = document.getElementById('form-phone');
    const subject = document.getElementById('form-subject');
    const message = document.getElementById('form-message');

    let isValid = true;

    // Reset error markers
    document.querySelectorAll('.form-group').forEach(grp => grp.classList.remove('has-error'));

    if (!name.value.trim()) {
      name.closest('.form-group').classList.add('has-error');
      isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailPattern.test(email.value)) {
      email.closest('.form-group').classList.add('has-error');
      isValid = false;
    }

    const phonePattern = /^\d{10}$/;
    if (!phone.value.trim() || !phonePattern.test(phone.value.replace(/\s+/g, ''))) {
      phone.closest('.form-group').classList.add('has-error');
      isValid = false;
    }

    if (!subject.value) {
      subject.closest('.form-group').classList.add('has-error');
      isValid = false;
    }

    if (!message.value.trim() || message.value.trim().length < 10) {
      message.closest('.form-group').classList.add('has-error');
      isValid = false;
    }

    if (isValid) {
      showToast();
      contactForm.reset();
    }
  });
}
