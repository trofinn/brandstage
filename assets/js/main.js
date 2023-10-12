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

    const buttonHashTag = document.getElementById('buttonHashTag');
    buttonHashTag.addEventListener('click', function openGoogleByMethod() {
        window.open("https://www.tiktok.com/tag/brandstage?lang=ro-RO")
    });

    const EL_lanSelect = document.querySelector("#lan")
    let lan = localStorage.language || "ro"; // or fallback to a default ("ar")

    EL_lanSelect.value = lan;
    EL_lanSelect.addEventListener("change", changeLan);

    const dict = {
        buttonHome: {ro: "Acasă", en: "Home"},
        buttonAbout: {ro: "Despre Noi", en: "About"},
        buttonServices: {ro: "Servicii", en: "Services"},
        buttonOfferts: {ro: "Pachete", en: "Packs"},
        buttonPack1: {ro: "Consultanță Social Media", en: "Social Media Consultance"},
        buttonTeam: {ro: "Echipă", en: "Team"},
        bannerH1: {
            ro: "Agenția de TikTok Marketing cu cele mai multe vizualizări din România",
            en: "The TikTok Marketing Agency with the Highest number of Views in Romania"
        },
        bannerH2: {
            ro: "Brandstage este o agenție de marketing specializată pe platforma TikTok." +
                "Noi iți putem oferi toate soluțiile necesare pentru ca brandul tău sa devină viral",
            en: "Brandstage is a marketing agency specialized in the TikTok platform. We can provide you with all the solutions necessary for your brand to go viral."
        },
        buttonStart: {ro: "Să începem", en: "Let's begin"},
        titleTabs: {ro: "REZULTATELE NOASTRE", en: "OUR RESULTS"},
        mostViewsH4: {ro: "CEL MAI VIZUALIZAT TIKTOK", en: "THE MOST VIEWED TIKTOK"},
        rapidGrowthH4: {ro: "CREȘTERE RAPIDĂ", en: "RAPID GROWTH"},
        tab1H1: {
            ro: "Peste 500 milioane de vizualizări pe conturile clienților noștri",
            en: "Over 500 million views on our clients' accounts."
        },
        tab1P: {
            ro: "Am realizat circa 2200 de TikTok-uri ce au strâns peste 500 milioane de vizualizări pe conturile clienților noștri într-un an de zile.\n" +
                "Majoritatea clipurilor realizate de noi pe TikTok le găsești pe <a href= \"https://www.tiktok.com/tag/brandstage\" style=\"color:#5e03a4;font-size: 25px;\" target=\"_blank\">#BRANDSTAGE</a> unde avem peste 500 milioane de vizualizări.",
            en: "We have created around 2,200 TikToks that have garnered over 500 million views on our clients' accounts in just one year. Most " +
                "of the videos we've produced on TikTok can be found under <a href= \"https://www.tiktok.com/tag/brandstage\" style=\"color:#5e03a4;font-size: 25px;\" target=\"_blank\">#BRANDSTAGE</a>, where we have over 500 million views."
        },
        tab2H1: {ro: "Peste 2 milioane urmăritori", en: "Over 2 million followers."},
        tab2P: {
            ro: " În ultimii doi ani am strâns peste două milioane de urmăritori pe conturile clienților noștri." +
                "Cheia acestei reușite a fost o strategie originală pentru fiecare cont, înțelegerea audienței și a așteptărilor ei legate de platformă" +
                "și crearea unui conținut video distractiv cu multă valoare educativă.",
            en: "In the past two years, we have gathered over two million followers on our clients' accounts. The key to this success has been a unique " +
                "strategy for each account, understanding the audience and their platform expectations, and creating entertaining video content with significant educational value."
        },
        tab3H1: {ro: "Peste 24 milioane vizualizări", en: "Over 24 million views."},
        tab3P: {
            ro: "Cel mai vizualizat TikTok realizat de noi a ajuns la peste 24 milioane vizualizări.<br><br>\n" +
                "A fost cel mai vizualizat TikTok din România timp de 2 săptămâni și a generat peste 20K de urmăritori.\n" +
                "Clipul a devenit viral și in alte țări, cum ar fi: Germania, Italia, Franța, Brazilia, Ucraina și Turcia.",
            en: "\"The most viewed TikTok video we created reached over 24 million views.<br><br>\n" +
                "It became the most viewed TikTok in Romania for 2 weeks and gained over 20K followers. The video went viral in other countries as well, such as Germany, Italy, France, Brazil, Ukraine, and Turkey.\""
        },
        tab4H1: {ro: "Peste 100K urmăritori într-o singură lună", en: "Over 100K followers in just one month."},
        tab4P: {
            ro: "Cea mai impresionantă creștere am avut-o cu contul <a href=\"https://www.tiktok.com/@dr.alexandra.mircea\" target=\"_blank\" style=\"color:#5e03a4\">@dr.alexandra.mircea</a>" +
                " cu care am reușit să fim nr 1 în trending timp de 2 \n" +
                "săptămâni cu 3 clipuri diferite. Astfel am crescut de la 300K de urmăritori la 400K într-o singură lună.",
            en: "Our most impressive growth was with the account <a href=\"https://www.tiktok.com/@dr.alexandra.mircea\" target=\"_blank\" style=\"color:#5e03a4\">@dr.alexandra.mircea</a>" +
                ". With this account, we managed to reach number 1 in trending for 2 weeks with 3 different videos. As a result, we went from 300K followers to 400K in just one month."
        },
        buttonHashTag: {ro: "Vezi hashtag", en: "See hashtag"},
        titleAbout: {ro: "DE CE TIKTOK MARKETING ?", en: "WHY TIKTOK MARKETING ?"},
        aboutH3: {ro: "Fă-ți brandul cunoscut pe TikTok !", en: "Make your brand known on TikTok!"},
        aboutP: {
            ro: "Pentru a reuși în online în acest moment, trebuie să oferi plus-valoare audienței tale prin educație și amuzament.\n" +
                "TikTok este platforma ideală pentru a face acest lucru",
            en: "To succeed online at this moment, you need to provide added value to your audience through education and entertainment. TikTok is the ideal platform to achieve this."
        },
        aboutButton: {ro: "SERVICIILE NOASTRE", en: "OUR SERVICES"},
        about1H4: {ro: "De ce TikTok?", en: "Why TikTok?"},
        about1P: {
            ro: "Cu peste 1 miliard de utilizatori lunari activi la nivel global și peste 7 milioane de utilizatori în România,\n" +
                "TikTok este platforma video care setează trendurile în acest moment. \n" +
                "Iar tu trebuie să profiți de aceasta oportunitate pentru a-ți face brandul cunoscut",
            en: "With over 1 billion monthly active users globally and over 7 million users in Romania, TikTok is the video platform setting trends right now. " +
                "And you must take advantage of this opportunity to make your brand known."
        },
        about2H4: {ro: "Rezultate rapide", en: "Quick results."},
        about2P: {
            ro: "Algoritmul TikTok funcționează într-un mod complet diferit față de celalte platforme.\n" +
                "Un cont nou, cu o strategie de creștere bună și conținut adaptat platformei poate avea o creștere\n" +
                "și o vizibilitate uriașă în timp foarte scurt",
            en: "The TikTok algorithm operates in a completely different way compared to other platforms. A new account with a solid growth strategy and content tailored to the " +
                "platform can experience rapid growth and tremendous visibility in a very short time."
        },
        about3H4: {ro: "Conținut adaptabil", en: "Adaptable content."},
        about3P: {
            ro: "Toate platformele de social media au copiat modelul TikTok - filmulete scurte, pe format vertical.\n" +
                "Astfel, clipurile pe care noi le realizăm pot fi postate cu ușurință pe Instagram Reels,\n" +
                "Facebook Watch sau Youtube Shorts",
            en: "All social media platforms have adopted the TikTok model - short, vertical-format videos. As a result, the videos we create can " +
                "be easily posted on Instagram Reels, Facebook Watch, or YouTube Shorts."
        },
        about4H4: {ro: "Metoda noastră", en: "Our method"},
        about4P: {
            ro: "Iți oferim o metoda verificată și testată, care a adus rezultate organice uimitoare pentru clienții noștri.\n" +
                "Ne ocupăm de strategia contului, filmare, editare, postare, administrare cont, \n" +
                "colaborări cu influenceri și rularea de ad-uri pe TikTok",
            en: "We offer you a proven and tested method that has delivered amazing organic results for our clients. We take care of the account strategy, filming, editing, posting, " +
                "account management, influencer collaborations, and running ads on TikTok."
        },
        tab1servicesH4: {ro: "STRATEGIE CONT TIKTOK", en: "TIKTOK ACCOUNT STRATEGY"},
        tab1servicesP: {
            ro: "- Vom decide, pe baza cercetării și a nișei tale specifice, care sunt cele mai bune tipuri de conținut pentru a\n" +
                "aborda audiența ta pe TikTok : Sketch, Duet, React, Trends, How-To și multe altele<br>\n" +
                "- Vom crea o strategie originală pentru contul tău. Odată ce vom face asta, vom fi pregătiți să începem să creăm\n" +
                "conținutul",
            en: "- Based on research and your specific niche, we will determine the best types of content to engage your audience on TikTok, including Sketch, Duet, React, Trends, How-To, and many more.</br>" +
                "- We will develop an original strategy for your account, and once that's done, we'll be ready to start creating content."
        },
        tab2servicesH4: {ro: "ADMINISTRARE CONT TIKTOK", en: "TIKTOK ACCOUNT MANAGEMENT"},
        tab2servicesP: {
            ro: "- Crearea contului de TikTok<br>\n" +
                "- Postarea clipurilor pe cont în conformitate cu regulile platformei<br>\n" +
                "- Eliminarea restricțiilor sau închiderea contului<br>\n" +
                "- Interacțiunea cu publicul și răspunsuri la comentarii<br>",
            en: "- Creating your TikTok account.<br>" +
                "- Posting videos on your account in accordance with platform rules.<br>" +
                "- Resolving restrictions or account closures.<br>" +
                "- Engaging with your audience and responding to comments.<br>" + "&nbsp"


        },
        tab3servicesH4: {ro: "PRODUCȚIE VIDEO", en: "VIDEO PRODUCTION"},
        tab3servicesP: {
            ro: "- Te ajutăm să treci peste tracul primeri filmări și să devii un expert în comunicarea video<br>\n" +
                "- Vom avea o listă de idei pregatită înainte de fiecare filmare<br>\n" +
                "- Echipa noastră dispune de camere profesionale, lumini, lavaliere, dronă și tot\n" +
                "echipamentul necesar pentru o filmare profesională. Cu toate astea, sa nu fii surprins\n" +
                "dacă cele mai virale clipuri vor fi realizate cu un simplu iPhone",
            en: "- We'll help you overcome the initial camera shyness and become an expert in video communication.<br>" +
                "- We'll have a list of ideas prepared before each shoot. <br>" +
                "- Our team has professional cameras, lighting, lavaliere microphones, drones, and all the necessary equipment for a " +
                "professional shoot. However, don't be surprised if some of the most viral clips are made with a simple iPhone."
        },
        tab4servicesH4: {ro: "POST-PRODUCȚIE", en: "POST-PRODICTION"},
        tab4servicesP: {
            ro: "- Editorii noștri vor face videoclipurile cât mai scurte și mai atractive folosind subtitrări dinamice, stock footage, efecte sonore și colorizarea imaginii<br>\n" +
                "- Putem posta videoclipurile pentru tine, astfel încât să nu mai ai nicio grijă<br><br>\n" +
                "<br>&nbsp;",
            en: "- Our editors will make the videos as short and engaging as possible, using dynamic subtitles, stock footage, sound effects, and color correction.<br>" +
                "- We can also handle the posting of the videos for you, so you won't have to worry about a thing.<br><br>&nbsp;"
        },
        tab5servicesP: {
            ro: "- Vom realiza brief-uri creative pentru TikTok Ads<br>" +
                "- Creare de conținut original / User Generated Content (UGC) <br>" +
                "- Administrarea reclamelor în TikTok Ads Manager<br>" +
                "- Integrarea TikTok Pixel<br>" +
                "- Măsurarea performanței pentru fiecare campanie<br><br><br>&nbsp;",
            en: "- We will create creative briefs for TikTok Ads.<br>" +
                "- Generating original content / User Generated Content (UGC).<br>" +
                "- Managing ads in TikTok Ads Manager.<br>" +
                "- Integrating TikTok Pixel.<br>" +
                "- Measuring the performance of each campaign.<br><br><br>&nbsp;"
        },
        tab6servicesH4: {ro: "CONSULTANȚĂ TIKTOK PENTRU BRANDURI", en: "TIKTOK CONSULTANCY FOR BRANDS"},
        tab6servicesP: {
            ro: "Ai o echipă de marketing in-house sau te ocupi singur de TikTok-ul tău?<br>" +
                "Îți oferim servicii de consultanță în care vom aborda:<br>" +
                "- Cele mai bune strategii de TikTok Marketing<br>" +
                "- Tipuri de conținut potrivite pentru domeniul tău<br>" +
                "- Tips & Tricks și înțelegerea modukuu de funcționare a platformei<br>" +
                "- Listă actualizată de trenduri TikTok<br>" +
                "- Studii de caz din protofoliul nostru<br>" +
                "- Metoda noastră și cum o poți implementa pentru succesul brandului tău",
            en: "Do you have an in-house marketing team or are you managing your TikTok on your own? We offer consultancy services where we'll address:" +
                "<br>" +
                "- The best TikTok marketing strategies.<br>" +
                "- Suitable content types for your industry.<br>" +
                "- Tips & Tricks and understanding how the platform works.<br>" +
                "- An updated list of TikTok trends.<br>" +
                "- Case studies from our portfolio.<br>" +
                "- Our methodology and how you can implement it for your brand's success."
        },
        tab7servicesP: {
            ro: "- Stategie de creștere accelerată<br>\n" +
                "- Design grafic & grid layout<br>\n" +
                "- Producție foto & video aliniate la estetica contului tău<br>\n" +
                "- Administrarea contului de instagram<br>\n" +
                "- Servicii de PR<br>&nbsp;",
            en: "- Accelerated growth strategy.<br>" +
                "- Graphic design & grid layout.<br>" +
                "- Photo & video production aligned with your account's aesthetics.<br>" +
                "- Instagram account management.<br>" +
                "- PR services.<br>&nbsp;"
        },
        tab8servicesP: {
            ro: "- Recomandări de echipamente necesare pentru realizarea clipurilor<br>" +
                "- Realizarea de scenarii / brief creativ pentru diverse materiale: vlog," +
                "tutorial, how-to, sketch, podcast, youtube shorts<br>" +
                "- Producția și editarea video<br>" +
                "- Administrarea contului YouTube. Realizarea graficii contului și a" +
                "descrierii ținând cont de SEO, postarea clipurilor și interacțiunea cu audiența",
            en: "- Recommendations for necessary equipment for video production.<br>" +
                "- Creating scripts / creative briefs for various materials: vlogs, tutorials, how-tos, sketches, podcasts, YouTube shorts.<br>" +
                "- Video production and editing.<br>" +
                "- YouTube account management. Creating channel graphics and descriptions with SEO in mind, uploading videos, and engaging with the audience.<br>"
        },
        influencersH2: {ro: "COLABORĂRI CU INFLUENCERI", en: "COLLABORATIONS WITH INFLUENCERS"},
        influencersH5: {
            ro: "O colaborare de succes cu cei mai populari influenceri TikTok poate avea un impact semnificativ pentru contul tău,  \n" +
                "              aducându-ți expunerea și vânzările pe care ți le dorești.<br><br>\n" +
                "              Te ajutăm să alegi influencerii potriviți pentru campania ta, să gestionezi relația cu ei, \n" +
                "              realizăm brief-ul pentru filmare și ne asigurăm că video-urile create împreună cu ei vor da cele mai bune rezultate.",
            en: "A successful collaboration with the most popular TikTok influencers can have a significant impact on your account, bringing you the exposure and sales you desire.<br><br>" +
                "We assist you in choosing the right influencers for your campaign, managing your relationship with them, creating the filming brief, and ensuring that the videos created with them yield the best results."
        },
        pricingH2: {ro: "Pachetele noastre", en: "Our Packs"},
        pack1H3: {ro: "Consultanță Social Media", en: "Social Media Consultancy"},
        pack1L1: {ro: "Audit cont", en :"Account audit"},
        pack1L2: {ro: "Strategie cont", en :"Account strategy"},
        pack1L4: {ro: "Studii de caz", en :"Case studies"},
        pack1L5: {ro: "Tipuri de conținut", en :"Types of content"},
        pack1L6: {ro: "Recomandări echipament", en :"Equipment recommendations"},
        pack2L1: {ro: "Strategie cont", en :"Account strategy"},
        pack2L2: {ro: "Research", en :"Research"},
        pack2L3: {ro: "Creare conținut video - 10 clipuri pe lună", en :"Video content creation - 10 clips per month."},
        pack2L4: {ro: "Editare video", en :"Video editing"},
        pack2L5: {ro: "Postare conținut video", en :"Video content posting"},
        pack2L6: {ro: "Administrare TikTok Ads", en :"TikTok Ads management"},
        pack2L7: {ro: "[ 2 zile de filmare/lună ]<br>&nbsp", en :"[ 2 days of filming/month ]<br>&nbsp;"},
        pack2H3: {ro: "Abonament lunar", en: "Monthly subscription"},
        pack3L1: {ro: "Creare conținut video - 20 clipuri pe lună", en: "Video content creation - 20 clips per month"},
        pack3L2: {ro: "Colaborări influenceri TikTok", en: "TikTok influencer collaborations"},
        pack3L3: {ro: "[ 3 zile de filmare/lună ]", en: "[ 3 days of filming per month ]"},
        pack4L1: {ro: "10 idei / lună pentru brandul tău", en: "10 ideas / month for your brand"},
        pack4L2: {ro: "Listă personalizată pentru nișa ta", en: "Customized list for your niche"},
        pack4L3: {ro: "Cele mai noi trenduri și tendințe de pe TikTok", en: "The latest trends and tendencies on TikTok"},
        pack4L4: {ro: "Noi îți dam ideile, tu te ocupi de implementare", en: "We provide the ideas, you take care of the implementation"},
        pack5L1: {ro: "Strategie de creștere", en: "Growth strategy"},
        pack5L2: {ro: "Producție foto & video aliniate la estetica contului tău", en: "Photo & video production aligned with your account's aesthetics"},
        pack5L3: {ro: "Administrarea contului de instagram", en: "Managing your Instagram account"},
        pack5L4: {ro: "Servicii de PR", en: "PR Services"},
        footerLinks: {ro: "Link-uri utile", en: "Links"},
        footerLink1: {ro: "Acasă", en: "Home"},
        footerLink2: {ro: "Despre Noi", en: "About"},
        footerLink3: {ro: "Servicii", en: "Services"},
        footerPacks: {ro: "Pachetele noastre", en: "Our Packs"},
        footerPack1: {ro: "Consultanță Social Media", en: "Social Media Consultance"},
        btnDetailsPack1: {ro: "Vezi detalii", en: "See details"},
        btnDetailsPack2: {ro: "Vezi detalii", en: "See details"},
        btnDetailsPack3: {ro: "Vezi detalii", en: "See details"},
        btnDetailsPack5: {ro: "Cere o ofertă personalizată", en: "Request a customized offer"},
        btnDetailsPack6: {ro: "Cere o ofertă personalizată", en: "Request a customized offer"},
        titleServicii: {ro: "SERVICII", en: "SERVICES"},
        titleFounders: {ro: "FONDATORI", en: "FOUNDERS"},
        pack2Price: {ro: "<sup>€</sup>1700<span> / lună</span>", en: "<sup>€</sup>1700<span> / month"},
        pack3Price: {ro: "<sup>€</sup>2300<span> / lună</span>", en: "<sup>€</sup>1700<span> / month"},
        pack3H3: {ro: "ABONAMENT LUNAR", en: "MONTHLY SUBSCRIPTION"},
        pack4Price: {ro: "<sup>€</sup>200<span> /Lună</span>", en: "<sup>€</sup>200<span> /month</span>"}
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
    const buttonOfferts = document.getElementById('buttonOfferts');
    const buttonPack1 = document.getElementById('buttonPack1');
    const buttonTeam = document.getElementById('buttonTeam');
    const bannerH1 = document.getElementById('bannerH1');
    const bannerH2 = document.getElementById('bannerH2');
    const buttonStart = document.getElementById('buttonStart');
    const titleTabs = document.getElementById("titleTabs");
    const mostViewsH4 = document.getElementById("mostViewsH4");
    const rapidGrowthH4 = document.getElementById("rapidGrowthH4");
    const tab1H1 = document.getElementById("tab1H1");
    const tab1P = document.getElementById("tab1P");
    const tab2H1 = document.getElementById("tab2H1");
    const tab2P = document.getElementById("tab2P");
    const tab3H1 = document.getElementById("tab3H1");
    const tab3P = document.getElementById("tab3P");
    const tab4H1 = document.getElementById("tab4H1");
    const tab4P = document.getElementById("tab4P");
    const titleAbout = document.getElementById('titleAbout');
    const aboutH3 = document.getElementById("aboutH3");
    const aboutP = document.getElementById("aboutP");
    const aboutButton = document.getElementById("aboutButton");
    const about1H4 = document.getElementById("about1H4");
    const about1P = document.getElementById("about1P");
    const about2H4 = document.getElementById("about2H4");
    const about2P = document.getElementById("about2P");
    const about3H4 = document.getElementById("about3H4");
    const about3P = document.getElementById("about3P");
    const about4H4 = document.getElementById("about4H4");
    const about4P = document.getElementById("about4P");
    const titleServicii = document.getElementById('titleServicii');
    const tab1servicesH4 = document.getElementById('tab1servicesH4');
    const tab1servicesP = document.getElementById('tab1servicesP');
    const tab2servicesH4 = document.getElementById('tab2servicesH4');
    const tab2servicesP = document.getElementById('tab2servicesP');
    const tab3servicesH4 = document.getElementById('tab3servicesH4');
    const tab3servicesP = document.getElementById('tab3servicesP');
    const tab4servicesH4 = document.getElementById('tab4servicesH4');
    const tab4servicesP = document.getElementById('tab4servicesP');
    const tab5servicesH4 = document.getElementById('tab5servicesH4');
    const tab5servicesP = document.getElementById('tab5servicesP');
    const tab6servicesH4 = document.getElementById('tab6servicesH4');
    const tab6servicesP = document.getElementById('tab6servicesP');
    const tab7servicesP = document.getElementById('tab7servicesP');
    const tab8servicesP = document.getElementById('tab8servicesP');
    const influencersH2 = document.getElementById("influencersH2");
    const influencersH5 = document.getElementById("influencersH5");
    const pricingH2 = document.getElementById("pricingH2");
    const pack1H3 = document.getElementById("pack1H3");
    const pack1L1 = document.getElementById("pack1L1");
    const pack1L2 = document.getElementById("pack1L2");
    const pack1L3 = document.getElementById("pack1L3");
    const pack1L4 = document.getElementById("pack1L4");
    const pack1L5 = document.getElementById("pack1L5");
    const pack1L6 = document.getElementById("pack1L6");
    const pack2H3 = document.getElementById("pack2H3");
    const pack2L1 = document.getElementById("pack2L1");
    const pack2L2 = document.getElementById("pack2L2");
    const pack2L3 = document.getElementById("pack2L3");
    const pack2L4 = document.getElementById("pack2L4");
    const pack2L5 = document.getElementById("pack2L5");
    const pack2L6 = document.getElementById("pack2L6");
    const pack2L7 = document.getElementById("pack2L7");
    const pack3L1 = document.getElementById("pack3L1");
    const pack3L2 = document.getElementById("pack3L2");
    const pack3L3 = document.getElementById("pack3L3");
    const pack4L1 = document.getElementById("pack4L1");
    const pack4L2 = document.getElementById("pack4L2");
    const pack4L3 = document.getElementById("pack4L3");
    const pack4L4 = document.getElementById("pack4L4");
    const pack5L1 = document.getElementById("pack5L1");
    const pack5L2 = document.getElementById("pack5L2");
    const pack5L3 = document.getElementById("pack5L3");
    const pack5L4 = document.getElementById("pack5L4");
    const footerLinks = document.getElementById("footerLinks");
    const footerLink1 = document.getElementById("footerLink1");
    const footerLink2 = document.getElementById("footerLink2");
    const footerLink3 = document.getElementById("footerLink3");
    const footerPacks = document.getElementById("footerPacks");
    const footerPack1 = document.getElementById("footerPack1");
    const btnDetailsPack1 = document.getElementById("btnDetailsPack1");
    const btnDetailsPack2 = document.getElementById("btnDetailsPack2");
    const btnDetailsPack3 = document.getElementById("btnDetailsPack3");
    const btnDetailsPack5 = document.getElementById("btnDetailsPack5");
    const btnDetailsPack6 = document.getElementById("btnDetailsPack6");
    const titleFounders = document.getElementById("titleFounders");
    const pack2Price = document.getElementById("pack2Price");
    const pack3H3 = document.getElementById("pack3H3");
    const pack3Price = document.getElementById("pack3Price");
    const pack4Price = document.getElementById("pack4Price");
    // FIN HEADER TRADUCTION

    // cookies






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
