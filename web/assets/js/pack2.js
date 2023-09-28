/**
 * Template Name: Presento
 * Updated: Mar 10 2023 with Bootstrap v5.2.3
 * Template URL: https://bootstrapmade.com/presento-bootstrap-corporate-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
//https://stackoverflow.com/questions/63875905/how-to-add-localstorage-to-my-multilanguage-website
(function () {
    "use strict";


    const EL_lanSelect = document.querySelector("#lan")
    let lan = localStorage.language || "ro"

    EL_lanSelect.value = lan;
    EL_lanSelect.addEventListener("change", changeLan);

    const dict = {
        buttonHome: {ro: "Acasă", en: "Home"},
        buttonAbout: {ro: "Despre Noi", en: "About"},
        buttonServices: {ro: "Servicii", en: "Services"},
        buttonOffers: {ro: "Pachete", en: "Packs"},
        buttonPack1: {ro: "Consultanță Social Media", en: "Social Media Consultance"},
        buttonTeam: {ro: "Echipă", en: "Team"},
        titleServicii: {ro: "SERVICII", en: "SERVICES"},
        div1H4: {ro: "STRATEGIE CONT", en : "ACCOUNT STRATEGY"},
        div1P: {
            ro: "Îți vom crea o strategie pentru a câștiga notorietate față de publicul tău și pentru a te diferenția de ceilalți competitori din domeniul tău<br>&nbsp;",
            en: "We will create a strategy for you to gain visibility with your audience and differentiate yourself from other competitors in your field<br>&nbsp;",
        },
        div2P: {
            ro: "Vom explora nișa ta specifică, căutând să identificăm cele mai captivante tipuri de conținut.\n" +
                "Înaintea fiecarei filmari, vom pregăti o liste de idei și vom adapta cele mai noi trenduri de pe TikTok pe domeniul tau<br>",
            en: "We will explore your specific niche, seeking to identify the most engaging types of content. Before each filming, we will prepare a list of ideas and adapt the latest TikTok trends to your industry",
        },
        div3H4: {ro: "CREARE CONȚINUT VIDEO", en : "CREATING VIDEO CONTENT"},
        div3P: {
            ro: "Echipa noastră, formată din specialiști social media, regizori, videographeri și\n" +
                "editori dispune de toată aparatura necesară pentru filmări: camere video profesionale, Iphone-uri 14 pro,\n" +
                "lumini, lavaliere, trepied, promptere și multe altele",
            en: "Our team, consisting of social media specialists, directors, videographers, and editors, has all the equipment needed for filming: professional video cameras, iPhone 14 " +
                "Pro, lighting, lavalier microphones, tripods, prompters, and much more",
        },
        div4H4: {ro: "EDITARE VIDEO", en : "VIDEO EDITING"},
        div4P: {
            ro: "Noi ne vom ocupa de editarea și colorizarea clipurilor<br>&nbsp<br>&nbsp<br>&nbsp",
            en: "We will take care of editing and colorizing the clips<br>&nbsp<br>&nbsp<br>&nbsp",
        },
        div5H4: {ro: "POSTARE CONȚINUT VIDEO", en : "VIDEO CONTENT POSTING"},
        div5P: {
            ro: "Vei avea o echipă care va face copyrighting-ul și va posta zilnic pentru tine<br><br>",
            en: "You will have a team that will handle copyrighting and post daily for you<br><br>",
        },
        div6H4: {ro: "ADMINISTRARE CONT", en : "ACCOUNT MANAGEMENT"},
        div6P: {
            ro: "Vei avea o echipă întreagă care îți va administra contul de TikTok<br>\n" +
                "Noi vom ține sub control toate neregulile contului ce pot aparea pe parcurs",
            en: "You will have an entire team that will manage your TikTok account<br> " +
                "We will keep an eye on any account issues that may arise",
        },
        div7H4: {ro: "DETALII", en : "DETAILS"},
        div7P: {
            ro: "Pachetul TikTok Light include 2 zile de filmare cu o durată de 4 - 6 ore pe zi.<br>\n" +
                "Un număr de 10 TikTok-uri create și postate lunar pe contul tău",
            en: "The TikTok Light package includes 2 days of shooting, with a duration of 4 - 6 hours per day<br> A total of 10 TikToks created and posted on your account monthly",
        },
        footerLinks: {ro: "Link-uri utile", en: "Links"},
        footerLink1: {ro: "Acasă", en: "Home"},
        footerLink2: {ro: "Despre Noi", en: "About"},
        footerLink3: {ro: "Servicii", en: "Services"},
        footerPacks: {ro: "Pachetele noastre", en: "Our Packs"},
        footerPack1: {ro: "Consultanță Social Media", en: "Social Media Consultance"}
    };

    function changeLan() {
        lan = EL_lanSelect.value;
        localStorage.language = lan;
        applyLan();
    }

    function applyLan() {
        Object.keys(dict).forEach(k => {
            document.getElementById(k).innerHTML = dict[k][lan];
        });
    }


    applyLan();

    // HEADER TRADUCTION
    const buttonHome = document.getElementById('buttonHome');
    const buttonAbout = document.getElementById('buttonAbout');
    const buttonServices = document.getElementById('buttonServices');
    const buttonOffers = document.getElementById('buttonOffers');
    const buttonPack1 = document.getElementById('buttonPack1');
    const buttonTeam = document.getElementById('buttonTeam');
    const div1H4 = document.getElementById('div1H4');
    const div1P = document.getElementById('div1P');
    const div2P = document.getElementById('div2P');
    const div3H4 = document.getElementById('div3H4');
    const div3P = document.getElementById('div3P');
    const div4H4 = document.getElementById('div4H4');
    const div4P = document.getElementById('div4P');
    const div5H4 = document.getElementById('div5H4');
    const div5P = document.getElementById('div5P');
    const div6H4 = document.getElementById('div6H4');
    const div6P = document.getElementById('div6P');
    const div7H4 = document.getElementById('div7H4');
    const div7P = document.getElementById('div7P');
    const titleServicii = document.getElementById("titleServicii");
    const footerLinks = document.getElementById("footerLinks");
    const footerLink1 = document.getElementById("footerLink1");
    const footerLink2 = document.getElementById("footerLink2");
    const footerLink3 = document.getElementById("footerLink3");
    const footerPacks = document.getElementById("footerPacks");
    const footerPack1 = document.getElementById("footerPack1");

    // FIN HEADER TRADUCTION

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
    on('click', '.mobile-nav-toggle', function (e) {
        select('#navbar').classList.toggle('navbar-mobile')
        this.classList.toggle('bi-list')
        this.classList.toggle('bi-x')
    })

    /**
     * Mobile nav dropdowns activate
     */
    on('click', '.navbar .dropdown > a', function (e) {
        if (select('#navbar').classList.contains('navbar-mobile')) {
            e.preventDefault()
            this.nextElementSibling.classList.toggle('dropdown-active')
        }
    }, true)

    /**
     * Scrool with ofset on links with a class name .scrollto
     */
    on('click', '.scrollto', function (e) {
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

            on('click', '#portfolio-flters li', function (e) {
                e.preventDefault();
                portfolioFilters.forEach(function (el) {
                    el.classList.remove('filter-active');
                });
                this.classList.add('filter-active');

                portfolioIsotope.arrange({
                    filter: this.getAttribute('data-filter')
                });
                portfolioIsotope.on('arrangeComplete', function () {
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
  