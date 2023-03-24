/**
* Template Name: Presento
* Updated: Mar 10 2023 with Bootstrap v5.2.3
* Template URL: https://bootstrapmade.com/presento-bootstrap-corporate-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
//https://stackoverflow.com/questions/63875905/how-to-add-localstorage-to-my-multilanguage-website
(function() {
  "use strict";

  const languageButtonEN = document.getElementById('language-button-en');
  const languageButtonRO = document.getElementById('language-button-ro');

  const serviciiTitle = document.getElementById('titleServicii');
  const paragraphContact = document.getElementById('contact-p');

  
  const EL_lanSelect = document.querySelector("#lan")
  let lan = localStorage.language || "ro"; // or fallback to a default ("ar")

  EL_lanSelect.value = lan;
  EL_lanSelect.addEventListener("change", changeLan);

  const dict = {
    buttonHome: {ro: "Acasa", en: "Home"},
    buttonAbout: {ro: "Despre Noi", en: "About"},
    titlePortofolio: {ro: "Portofolio", en: "Portofolio English"},
  };

  function changeLan() {
    lan = EL_lanSelect.value;
    localStorage.language = lan;
    applyLan();
  }

  function applyLan() {
    Object.keys(dict).forEach( k => {
      document.getElementById(k).innerHTML = dict[k][lan];
    });
  }

  //applyLan();

  // HEADER TRADUCTION
  const buttonHome = document.getElementById('buttonHome');
  const buttonAbout = document.getElementById('buttonAbout');
  const buttonServices = document.getElementById('buttonServices');
  const buttonOfferts = document.getElementById('buttonOfferts');
  const buttonPack1 = document.getElementById('buttonPack1');
  const buttonPack2 = document.getElementById('buttonPack2');
  const buttonPack3 = document.getElementById('buttonPack3');
  const buttonTeam = document.getElementById('buttonTeam');
  const buttonStart = document.getElementById('buttonStart');
  // FIN HEADER TRADUCTION

  languageButtonEN.addEventListener('click', () => {
      languageButtonEN.classList.remove('btn-light')
      languageButtonEN.classList.add('btn-dark')
      languageButtonRO.classList.remove('btn-dark')
      languageButtonRO.classList.add('btn-light')

      buttonHome.textContent = 'Home';
      buttonAbout.textContent = 'About Us';
      buttonServices.textContent = 'Services';
      buttonOfferts.textContent = 'Offerts';
      buttonPack1.textContent = 'Offert 1';
      buttonPack2.textContent = 'Offert 2';
      buttonPack3.textContent = 'Offert 3';
      buttonTeam.textContent = 'Team';
      buttonStart.textContent = 'Get Started'



      serviciiTitle.textContent = 'SERVICES';
      paragraphContact.textContent = 'English';
  })

  languageButtonRO.addEventListener('click', () => {
    languageButtonRO.classList.remove('btn-light')
    languageButtonRO.classList.add('btn-dark')
    languageButtonEN.classList.remove('btn-dark')
    languageButtonEN.classList.add('btn-light')
    
    buttonHome.textContent = 'Acasa';
    buttonAbout.textContent = 'Despre Noi';
    buttonServices.textContent = 'Servicii';
    buttonOfferts.textContent = 'Oferte';
    buttonPack1.textContent = 'Oferta 1';
    buttonPack2.textContent = 'Oferta 2';
    buttonPack3.textContent = 'Oferta 3';
    buttonTeam.textContent = 'Echipa';
    buttonStart.textContent = 'Sa incepem'


    serviciiTitle.textContent = 'SERVICII';
    paragraphContact.textContent = 'Test';
})

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 16
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });
  /**
   * Clients Slider
   */
  new Swiper('.clients-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 120
      }
    }
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})()
