
   //
// Main JavaScript for makewebsiteondemand.be
// Includes all functionality: Translations, Modals, Forms, Theme Toggle, etc.
//

// --- TRANSLATIONS & LANGUAGE SWITCHER ---
const translations = {
    'en': {
        // Navigation & General
        'text-nav-home':'Home','text-nav-services':'Services','text-nav-portfolio':'Portfolio','text-nav-faq':'FAQ','text-nav-get-quote':'Get Quote','text-nav-contact':'Contact','text-hero-title':'Your All-in-One <span class="accent">Digital Presence</span>','text-hero-subtitle':'Professional Website, Google Listing, and Social Media','text-hero-description':"Tired of managing multiple vendors? We provide complete digital solutions so you can focus on your business while we handle your online presence. Our goal is to serve local businesses across Belgium with affordable, high-quality digital solutions.",'text-hero-quote-btn':'Get a Free Quote','text-hero-portfolio-btn':'View Portfolio',

        // FAQ Content
        'text-faq-title':'Frequently Asked Questions','text-faq1-q':'Why is a professional website important for my local business?','text-faq1-a':'A professional website acts as your digital storefront, open 24/7. It builds trust with customers, showcases your services, and makes it easy for them to contact you, leading directly to more business.','text-faq2-q':'How long does it take to get my website online?','text-faq2-a':'We prioritize speed. Typically, a complete one-page website is live and ready to attract customers within 7 to 14 days after we receive your business information and content.','text-faq3-q':'Will my website work on mobile phones?','text-faq3-a':'Absolutely. Every website we build is fully responsive, meaning it will look great and function perfectly on all devices, including desktops, tablets, and smartphones.',

        // Legal Policies (English)
        'text-privacy-title':'Privacy Policy','text-privacy-updated':'Last Updated: September 18, 2025','text-privacy-h1':'1. Information We Collect','text-privacy-p1':"We collect information that you voluntarily provide to us when you fill out our contact or quote forms. This information includes your name, email address, and any project details you provide. We also use cookies to collect non-personal data about your visit, such as your browser type and pages visited, to help us improve our website.",'text-privacy-h2':'2. How We Use Your Information','text-privacy-p2':"Your personal information is used solely to respond to your inquiries, provide you with quotes, and deliver the services you request. We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. Aggregated, non-personal visitor information may be used for marketing or analytical purposes.",'text-privacy-h3':'3. Data Security','text-privacy-p3':"We implement a variety of security measures to maintain the safety of your personal information. Your data is submitted securely via HTTPS and is stored in a protected environment.",'text-privacy-h4':'4. Your Rights (GDPR)','text-privacy-p4':"As a user, you have the right to access, rectify, or erase your personal data that we hold. If you wish to exercise these rights, please contact us at info@makewebsiteondemand.be.",'text-privacy-h5':'5. Cookie Usage','text-privacy-p5':"Our website uses cookies to enhance your experience and analyze site traffic. For more details, please see our Cookie Policy.",'text-privacy-close':'Close',
        'text-terms-title':'Terms of Service','text-terms-updated':'Last Updated: September 18, 2025','text-terms-h1':'1. Agreement to Terms','text-terms-p1':"By using our services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.",'text-terms-h2':'2. Scope of Services','text-terms-p2':"We provide web design, Google Business Profile setup, social media management, and branding services as described on our website. The specifics of each project will be outlined in a formal proposal.",'text-terms-h3':'3. Payments','text-terms-p3':"Service payments are typically split, with a deposit required to begin work and the final balance due upon project completion, before the final website is deployed. All payment terms will be specified in the project proposal.",'text-terms-h4':'4. Client Responsibilities','text-terms-p4':"The client agrees to provide all necessary content (text, images, logos) in a timely manner. Delays in providing content may result in project delays.",'text-terms-h5':'5. Limitation of Liability','text-terms-p5':"Make Website On Demand is not liable for any indirect or consequential damages arising from the use of our services. Our total liability is limited to the total amount paid for the service.",'text-terms-close':'Close',
        'text-cookies-title':'Cookie Policy','text-cookies-updated':'Last Updated: September 18, 2025','text-cookies-h1':'1. What Are Cookies?','text-cookies-p1':"Cookies are small text files stored on your device by your web browser. They are used to remember your preferences and provide a more personalized experience.",'text-cookies-h2':'2. How We Use Cookies','text-cookies-p2':"We use cookies for the following purposes: Essential Cookies for basic site functionality (like language preference); Analytics Cookies (e.g., Google Analytics) to understand how visitors interact with our website so we can improve it. These cookies do not collect personal information.",'text-cookies-h3':'3. Managing Cookies','text-cookies-p3':"You can control and manage cookies through your browser settings. You can set your browser to refuse all cookies or to indicate when a cookie is being sent. However, some website features may not function properly without cookies.",'text-cookies-h4':'4. Consent','text-cookies-p4':"By using our website, https://www.makewebsiteondemand.be/, you consent to our use of cookies in accordance with this policy.",'text-cookies-close':'Close',

        // Other text elements...
    },
    'fr': {
        // Navigation & General
        'text-nav-home':'Accueil','text-nav-services':'Services','text-nav-portfolio':'Portfolio','text-nav-faq':'FAQ','text-nav-get-quote':'Obtenir un Devis','text-nav-contact':'Contact','text-hero-title':'Votre Présence Numérique <span class="accent">Tout-en-Un</span>','text-hero-subtitle':'Site Web Professionnel, Fiche Google et Médias Sociaux','text-hero-description':"Fatigué de gérer plusieurs fournisseurs ? Nous offrons des solutions numériques complètes pour que vous puissiez vous concentrer sur votre entreprise. Notre mission est de servir les entreprises locales en Belgique avec des solutions abordables et de haute qualité.",'text-hero-quote-btn':'Obtenir un Devis Gratuit','text-hero-portfolio-btn':'Voir le Portfolio',
        
        // FAQ Content
        'text-faq-title':'Foire Aux Questions','text-faq1-q':"Pourquoi un site web professionnel est-il important pour mon entreprise locale ?",'text-faq1-a':"Un site professionnel est votre vitrine numérique, ouverte 24/7. Il renforce la confiance, présente vos services et facilite la prise de contact, ce qui génère directement plus d'affaires.",'text-faq2-q':"Combien de temps faut-il pour mettre mon site en ligne ?",'text-faq2-a':"Nous privilégions la rapidité. Un site complet est généralement en ligne en 7 à 14 jours après réception de vos informations.",'text-faq3-q':"Mon site fonctionnera-t-il sur les téléphones mobiles ?",'text-faq3-a':"Absolument. Chaque site que nous créons est entièrement réactif et s'adapte parfaitement à tous les appareils.",

        // Legal Policies (French)
        'text-privacy-title':'Politique de Confidentialité','text-privacy-updated':'Dernière mise à jour : 18 septembre 2025','text-privacy-h1':"1. Informations que nous collectons",'text-privacy-p1':"Nous collectons les informations que vous nous fournissez volontairement via nos formulaires de contact ou de devis (nom, email, détails du projet). Nous utilisons également des cookies pour collecter des données non personnelles sur votre visite afin d'améliorer notre site.",'text-privacy-h2':"2. Utilisation de vos informations",'text-privacy-p2':"Vos informations personnelles sont utilisées uniquement pour répondre à vos demandes, fournir des devis et réaliser les services demandés. Nous ne vendons ni ne transférons vos données à des tiers.",'text-privacy-h3':"3. Sécurité des données",'text-privacy-p3':"Nous mettons en œuvre des mesures de sécurité pour protéger vos informations. Vos données sont soumises via HTTPS et stockées dans un environnement sécurisé.",'text-privacy-h4':"4. Vos droits (RGPD)",'text-privacy-p4':"Vous avez le droit d'accéder, de rectifier ou de supprimer vos données personnelles. Pour exercer ces droits, veuillez nous contacter à info@makewebsiteondemand.be.",'text-privacy-h5':"5. Utilisation des cookies",'text-privacy-p5':"Notre site utilise des cookies pour améliorer votre expérience. Pour plus de détails, consultez notre Politique de cookies.",'text-privacy-close':'Fermer',
        'text-terms-title':"Conditions d'Utilisation",'text-terms-updated':'Dernière mise à jour : 18 septembre 2025','text-terms-h1':"1. Acceptation des conditions",'text-terms-p1':"En utilisant nos services, vous acceptez d'être lié par ces Conditions d'Utilisation.",'text-terms-h2':"2. Étendue des services",'text-terms-p2':"Nous fournissons des services de conception de sites web, de gestion de profil Google et de médias sociaux, comme décrit sur notre site. Les détails de chaque projet seront définis dans une proposition formelle.",'text-terms-h3':"3. Paiements",'text-terms-p3':"Le paiement des services est généralement divisé, avec un acompte pour commencer le travail et le solde final dû à la fin du projet, avant le déploiement.",'text-terms-h4':"4. Responsabilités du client",'text-terms-p4':"Le client s'engage à fournir tout le contenu nécessaire (textes, images) en temps voulu. Tout retard peut entraîner un report du projet.",'text-terms-h5':"5. Limitation de responsabilité",'text-terms-p5':"Notre responsabilité totale est limitée au montant total payé pour le service.",'text-terms-close':'Fermer',
        'text-cookies-title':'Politique de Cookies','text-cookies-updated':'Dernière mise à jour : 18 septembre 2025','text-cookies-h1':"1. Que sont les cookies ?",'text-cookies-p1':"Les cookies sont de petits fichiers texte stockés sur votre appareil. Ils servent à mémoriser vos préférences et à offrir une expérience personnalisée.",'text-cookies-h2':"2. Comment nous utilisons les cookies",'text-cookies-p2':"Nous utilisons des cookies essentiels (pour la langue, par exemple) et des cookies analytiques (Google Analytics) pour comprendre comment les visiteurs interagissent avec notre site afin de l'améliorer.",'text-cookies-h3':"3. Gérer les cookies",'text-cookies-p3':"Vous pouvez contrôler les cookies via les paramètres de votre navigateur. Cependant, certaines fonctionnalités du site pourraient ne pas fonctionner correctement sans eux.",'text-cookies-h4':"4. Consentement",'text-cookies-p4':"En utilisant notre site, https://www.makewebsiteondemand.be/, vous consentez à notre utilisation des cookies.",'text-cookies-close':'Fermer',

        // Other text elements...
    },
    'nl': {
        // Navigation & General
        'text-nav-home':'Home','text-nav-services':'Diensten','text-nav-portfolio':'Portfolio','text-nav-faq':'FAQ','text-nav-get-quote':'Offerte Aanvragen','text-nav-contact':'Contact','text-hero-title':'Uw Alles-in-Één <span class="accent">Digitale Aanwezigheid</span>','text-hero-subtitle':'Professionele Website, Google Bedrijfsprofiel en Sociale Media','text-hero-description':"Beu om meerdere leveranciers te beheren? Wij bieden complete digitale oplossingen zodat u zich kunt focussen op uw bedrijf. Ons doel is om lokale bedrijven in België te helpen met betaalbare, hoogwaardige digitale oplossingen.",'text-hero-quote-btn':'Vraag een Gratis Offerte aan','text-hero-portfolio-btn':'Bekijk Portfolio',
        
        // FAQ Content
        'text-faq-title':'Veelgestelde Vragen','text-faq1-q':'Waarom is een professionele website belangrijk voor mijn lokaal bedrijf?','text-faq1-a':'Een professionele website is uw digitale etalage, 24/7 open. Het bouwt vertrouwen op, toont uw diensten en maakt contact gemakkelijk, wat direct leidt tot meer omzet.','text-faq2-q':'Hoe lang duurt het om mijn website online te krijgen?','text-faq2-a':'Wij hechten waarde aan snelheid. Een complete website is doorgaans binnen 7 tot 14 dagen live, nadat we uw bedrijfsinformatie hebben ontvangen.','text-faq3-q':'Werkt mijn website op mobiele telefoons?','text-faq3-a':'Absoluut. Elke website die we bouwen is volledig responsief en functioneert perfect op alle apparaten.',

        // Legal Policies (Dutch)
        'text-privacy-title':'Privacybeleid','text-privacy-updated':'Laatst bijgewerkt: 18 september 2025','text-privacy-h1':'1. Informatie die we verzamelen','text-privacy-p1':"We verzamelen informatie die u vrijwillig verstrekt via onze contact- of offerteformulieren (naam, e-mail, projectdetails). We gebruiken ook cookies om niet-persoonlijke gegevens over uw bezoek te verzamelen om onze website te verbeteren.",'text-privacy-h2':'2. Hoe we uw informatie gebruiken','text-privacy-p2':"Uw persoonlijke informatie wordt uitsluitend gebruikt om op uw vragen te reageren, offertes te verstrekken en de gevraagde diensten te leveren. Wij verkopen of delen uw gegevens niet met derden.",'text-privacy-h3':'3. Gegevensbeveiliging','text-privacy-p3':"We implementeren veiligheidsmaatregelen om uw informatie te beschermen. Uw gegevens worden verzonden via HTTPS en opgeslagen in een beveiligde omgeving.",'text-privacy-h4':'4. Uw rechten (AVG)','text-privacy-p4':"U heeft het recht om uw persoonlijke gegevens in te zien, te corrigeren of te wissen. Neem contact met ons op via info@makewebsiteondemand.be om deze rechten uit te oefenen.",'text-privacy-h5':'5. Gebruik van cookies','text-privacy-p5':"Onze website gebruikt cookies om uw ervaring te verbeteren. Zie ons Cookiebeleid voor meer details.",'text-privacy-close':'Sluiten',
        'text-terms-title':'Servicevoorwaarden','text-terms-updated':'Laatst bijgewerkt: 18 september 2025','text-terms-h1':'1. Akkoord met voorwaarden','text-terms-p1':"Door gebruik te maken van onze diensten, gaat u akkoord met deze Servicevoorwaarden.",'text-terms-h2':'2. Omvang van de diensten','text-terms-p2':"Wij bieden webdesign en digitale marketingdiensten zoals beschreven op onze website. De details van elk project worden vastgelegd in een formele offerte.",'text-terms-h3':'3. Betalingen','text-terms-p3':"Betalingen worden doorgaans gesplitst: een aanbetaling om te beginnen en het resterende bedrag bij voltooiing, vóór de livegang van de website.",'text-terms-h4':'4. Verantwoordelijkheden van de klant','text-terms-p4':"De klant stemt ermee in om alle benodigde inhoud (tekst, afbeeldingen) tijdig aan te leveren. Vertragingen kunnen leiden tot uitstel van het project.",'text-terms-h5':'5. Beperking van aansprakelijkheid','text-terms-p5':"Onze totale aansprakelijkheid is beperkt tot het totaalbedrag dat voor de dienst is betaald.",'text-terms-close':'Sluiten',
        'text-cookies-title':'Cookiebeleid','text-cookies-updated':'Laatst bijgewerkt: 18 september 2025','text-cookies-h1':'1. Wat zijn cookies?','text-cookies-p1':"Cookies zijn kleine tekstbestanden die op uw apparaat worden opgeslagen. Ze worden gebruikt om uw voorkeuren te onthouden en een persoonlijke ervaring te bieden.",'text-cookies-h2':'2. Hoe we cookies gebruiken','text-cookies-p2':"We gebruiken essentiële cookies (bv. voor taalkeuze) en analytische cookies (Google Analytics) om te begrijpen hoe bezoekers onze site gebruiken, zodat we deze kunnen verbeteren.",'text-cookies-h3':'3. Cookies beheren','text-cookies-p3':"U kunt cookies beheren via uw browserinstellingen. Het is echter mogelijk dat sommige functies van de website niet correct werken zonder cookies.",'text-cookies-h4':'4. Toestemming','text-cookies-p4':"Door onze website, https://www.makewebsiteondemand.be/, te gebruiken, stemt u in met ons gebruik van cookies.",'text-cookies-close':'Sluiten',

        // Other text elements...
    },
    'de': {
        // Navigation & General
        'text-nav-home': 'Startseite','text-nav-services': 'Leistungen','text-nav-portfolio': 'Portfolio','text-nav-faq': 'FAQ','text-nav-get-quote': 'Angebot Anfordern','text-nav-contact': 'Kontakt','text-hero-title': 'Ihre All-in-One <span class="accent">Digitale Präsenz</span>','text-hero-subtitle': 'Professionelle Website, Google-Unternehmensprofil und Social Media','text-hero-description': 'Haben Sie es satt, mehrere Anbieter zu verwalten? Wir bieten komplette digitale Lösungen, damit Sie sich auf Ihr Geschäft konzentrieren können. Unser Ziel ist es, lokale Unternehmen in Belgien mit erschwinglichen, hochwertigen digitalen Lösungen zu unterstützen.','text-hero-quote-btn': 'Kostenloses Angebot','text-hero-portfolio-btn': 'Portfolio ansehen',
        
        // FAQ Content
        'text-faq-title': 'Häufig Gestellte Fragen','text-faq1-q': 'Warum ist eine professionelle Website für mein lokales Unternehmen wichtig?','text-faq1-a': 'Eine professionelle Website ist Ihr digitales Schaufenster, rund um die Uhr geöffnet. Sie schafft Vertrauen, präsentiert Ihre Dienstleistungen und erleichtert die Kontaktaufnahme, was direkt zu mehr Geschäft führt.','text-faq2-q': 'Wie lange dauert es, bis meine Website online ist?','text-faq2-a': 'Wir legen Wert auf Schnelligkeit. Eine komplette Website ist in der Regel innerhalb von 7 bis 14 Tagen live, nachdem wir Ihre Geschäftsinformationen erhalten haben.','text-faq3-q': 'Funktioniert meine Website auf Mobiltelefonen?','text-faq3-a': 'Absolut. Jede von uns erstellte Website ist vollständig responsiv und funktioniert auf allen Geräten einwandfrei.',

        // Legal Policies (German)
        'text-privacy-title':'Datenschutzrichtlinie','text-privacy-updated':'Zuletzt aktualisiert: 18. September 2025','text-privacy-h1':'1. Informationen, die wir sammeln','text-privacy-p1':"Wir sammeln Informationen, die Sie uns freiwillig über unsere Kontakt- oder Angebotsformulare zur Verfügung stellen (Name, E-Mail, Projektdetails). Wir verwenden auch Cookies, um nicht-personenbezogene Daten über Ihren Besuch zu sammeln, um unsere Website zu verbessern.",'text-privacy-h2':'2. Wie wir Ihre Informationen verwenden','text-privacy-p2':"Ihre persönlichen Daten werden ausschließlich zur Beantwortung Ihrer Anfragen, zur Erstellung von Angeboten und zur Erbringung der von Ihnen angeforderten Dienstleistungen verwendet. Wir verkaufen oder übermitteln Ihre Daten nicht an Dritte.",'text-privacy-h3':'3. Datensicherheit','text-privacy-p4':"Wir setzen Sicherheitsmaßnahmen zum Schutz Ihrer Daten ein. Ihre Daten werden über HTTPS übermittelt und in einer geschützten Umgebung gespeichert.",'text-privacy-h4':'4. Ihre Rechte (DSGVO)','text-privacy-p5':"Sie haben das Recht, auf Ihre personenbezogenen Daten zuzugreifen, sie zu berichtigen oder zu löschen. Bitte kontaktieren Sie uns unter info@makewebsiteondemand.be, um diese Rechte auszuüben.",'text-privacy-h5':'5. Verwendung von Cookies','text-privacy-p5':"Unsere Website verwendet Cookies, um Ihre Erfahrung zu verbessern. Weitere Informationen finden Sie in unserer Cookie-Richtlinie.",'text-privacy-close':'Schließen',
        'text-terms-title':'Nutzungsbedingungen','text-terms-updated':'Zuletzt aktualisiert: 18. September 2025','text-terms-h1':'1. Zustimmung zu den Bedingungen','text-terms-p1':"Durch die Nutzung unserer Dienste erklären Sie sich mit diesen Nutzungsbedingungen einverstanden.",'text-terms-h2':'2. Leistungsumfang','text-terms-p3':"Wir bieten Webdesign und digitale Marketingdienstleistungen an, wie auf unserer Website beschrieben. Die Einzelheiten jedes Projekts werden in einem formellen Angebot dargelegt.",'text-terms-h3':'3. Zahlungen','text-terms-p4':"Zahlungen werden in der Regel aufgeteilt: eine Anzahlung zu Beginn der Arbeiten und der Restbetrag bei Abschluss, vor der Veröffentlichung der Website.",'text-terms-h4':'4. Verantwortlichkeiten des Kunden','text-terms-p5':"Der Kunde verpflichtet sich, alle notwendigen Inhalte (Texte, Bilder) rechtzeitig zur Verfügung zu stellen. Verzögerungen können zu Projektverzögerungen führen.",'text-terms-h5':'5. Haftungsbeschränkung','text-terms-p5':"Unsere Gesamthaftung ist auf den Gesamtbetrag beschränkt, der für die Dienstleistung bezahlt wurde.",'text-terms-close':'Schließen',
        'text-cookies-title':'Cookie-Richtlinie','text-cookies-updated':'Zuletzt aktualisiert: 18. September 2025','text-cookies-h1':'1. Was sind Cookies?','text-cookies-p1':"Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden. Sie dienen dazu, Ihre Präferenzen zu speichern und ein personalisiertes Erlebnis zu bieten.",'text-cookies-h2':'2. Wie wir Cookies verwenden','text-cookies-p3':"Wir verwenden essenzielle Cookies (z. B. für die Sprachauswahl) und Analyse-Cookies (Google Analytics), um zu verstehen, wie Besucher unsere Website nutzen, damit wir sie verbessern können.",'text-cookies-h3':'3. Cookies verwalten','text-cookies-p4':"Sie können Cookies über Ihre Browsereinstellungen verwalten. Einige Funktionen der Website funktionieren jedoch möglicherweise nicht ordnungsgemäß ohne Cookies.",'text-cookies-h4':'4. Einwilligung','text-cookies-p5':"Durch die Nutzung unserer Website, https://www.makewebsiteondemand.be/, stimmen Sie der Verwendung von Cookies zu.",'text-cookies-close':'Schließen',
        
        // Other text elements...
    }
};

// --- CORE WEBSITE FUNCTIONALITY ---

function applyTranslations(lang) {
    const currentLangTranslations = translations[lang];
    if (!currentLangTranslations) return;
    for (let id in currentLangTranslations) {
        const element = document.getElementById(id);
        if (element) {
            // Use innerHTML for elements that contain HTML tags like <span>
            if (['text-hero-title', 'text-footer-brand', 'text-service1-price'].includes(id)) {
                element.innerHTML = currentLangTranslations[id];
            } else {
                element.textContent = currentLangTranslations[id];
            }
        }
    }
    document.documentElement.lang = lang;
    document.getElementById("current-lang").textContent = lang.toUpperCase();
    localStorage.setItem("preferredLanguage", lang);
}

function initThemeToggle() {
    const themeToggle = document.getElementById("themeToggle");
    if (!themeToggle) return;
    const themeIcon = themeToggle.querySelector("i");
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        themeIcon.classList.replace("fa-moon", "fa-sun");
    }
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const isDarkMode = document.body.classList.contains("dark-mode");
        localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
        themeIcon.classList.toggle("fa-moon", !isDarkMode);
        themeIcon.classList.toggle("fa-sun", isDarkMode);
    });
}

function initMobileNav() {
    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.getElementById("nav-menu");
    if (navToggle && navMenu) {
        navToggle.addEventListener("click", function() {
            const isActive = navMenu.classList.toggle("active");
            navToggle.classList.toggle("active");
            navToggle.setAttribute('aria-expanded', isActive);
        });
        navMenu.querySelectorAll(".nav-link").forEach(link => {
            link.addEventListener("click", () => {
                if (navMenu.classList.contains("active")) {
                    navMenu.classList.remove("active");
                    navToggle.classList.remove("active");
                    navToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }
}

function initBackToTop() {
    const backToTop = document.getElementById("backToTop");
    if(backToTop) {
        window.addEventListener("scroll", () => {
            backToTop.classList.toggle("visible", window.pageYOffset > 300);
        });
        backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    }
}

function initModals() {
    const modals = {
        privacy: document.getElementById("privacyModal"),
        terms: document.getElementById("termsModal"),
        cookie: document.getElementById("cookieModal"),
        quote: document.getElementById("quoteModal"),
        contact: document.getElementById("contactModal")
    };
    const openTriggers = {
        quote: document.querySelectorAll("#openQuoteModalLink, #heroQuoteBtn, #servicesQuoteBtn, #ctaQuoteBtn, #footerQuoteBtn"),
        contact: document.querySelectorAll("#openContactModalLink, #portfolioContactBtn, #areasContactBtn, #ctaContactBtn, #footerContactBtn"),
        privacy: document.querySelectorAll("#openPrivacyModal"),
        terms: document.querySelectorAll("#openTermsModal"),
        cookie: document.querySelectorAll("#openCookieModal")
    };
    function openModal(modalElement) { if (modalElement) modalElement.style.display = "block"; }
    function closeModal(modalElement) { if (modalElement) modalElement.style.display = "none"; }
    for (const modalName in openTriggers) {
        openTriggers[modalName].forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                openModal(modals[modalName]);
            });
        });
    }
    document.querySelectorAll(".close-modal, .modal-close-btn").forEach(button => button.addEventListener("click", () => { for (const key in modals) closeModal(modals[key]); }));
    window.addEventListener("keydown", e => { if (e.key === "Escape") { for (const key in modals) closeModal(modals[key]); } });
    window.addEventListener("click", e => { for (const key in modals) { if (e.target === modals[key]) closeModal(modals[key]); } });
}

function initFaqAccordion() {
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        if (question) {
            question.addEventListener("click", () => {
                const answer = item.querySelector(".faq-answer");
                const isActive = question.classList.contains("active");
                // This logic ensures only one FAQ item is open at a time
                document.querySelectorAll('.faq-question.active').forEach(activeQuestion => {
                    if (activeQuestion !== question) {
                        activeQuestion.classList.remove('active');
                        activeQuestion.nextElementSibling.style.maxHeight = null;
                    }
                });
                
                if (!isActive) {
                    question.classList.add("active");
                    answer.style.maxHeight = answer.scrollHeight + "px";
                } else {
                    question.classList.remove("active");
                    answer.style.maxHeight = null;
                }
            });
        }
    });
}

let updateQuoteSummary; 

function initQuoteForm() {
    const quoteModal = document.getElementById("quoteModal");
    if (!quoteModal) return;
    const nextButtons = quoteModal.querySelectorAll(".btn-next");
    const prevButtons = quoteModal.querySelectorAll(".btn-prev");
    const quoteStepsIndicators = quoteModal.querySelectorAll(".quote-step");
    const steps = quoteModal.querySelectorAll(".step");
    const serviceOptions = quoteModal.querySelectorAll('.service-option');
    const domainYearsSelect = quoteModal.querySelector("#domainYears");

    updateQuoteSummary = function() {
        const summaryServicesSpan = quoteModal.querySelector("#summary-services");
        const summaryDomainSpan = quoteModal.querySelector("#summary-domain");
        const finalTotalSpan = quoteModal.querySelector("#final-total");
        let currentTotal = 0;
        let selectedServiceNames = [];
        serviceOptions.forEach(option => {
            if (option.classList.contains("selected")) {
                currentTotal += parseInt(option.dataset.price);
                selectedServiceNames.push(option.querySelector("h4").textContent);
            }
        });
        const selectedDomainOption = domainYearsSelect.options[domainYearsSelect.selectedIndex];
        const domainPrice = parseInt(selectedDomainOption.dataset.price);
        currentTotal += domainPrice;
        summaryServicesSpan.textContent = selectedServiceNames.length > 0 ? selectedServiceNames.join(", ") : "None selected";
        summaryDomainSpan.textContent = selectedDomainOption.text;
        finalTotalSpan.textContent = `€${currentTotal}`;
        document.getElementById("hiddenSelectedServices").value = JSON.stringify(selectedServiceNames);
        document.getElementById("hiddenSelectedDomainValue").value = selectedDomainOption.value;
        document.getElementById("hiddenTotalInvestment").value = currentTotal;
    };
    
    updateQuoteSummary();
    serviceOptions.forEach(option => {
        option.addEventListener("click", () => {
            option.classList.toggle("selected");
            updateQuoteSummary();
        });
    });
    if(domainYearsSelect) {
         domainYearsSelect.addEventListener("change", updateQuoteSummary);
    }
    function goToStep(stepNumber) {
        steps.forEach(s => s.classList.remove("active"));
        quoteStepsIndicators.forEach(qs => qs.classList.remove("active"));
        const nextStepElement = quoteModal.querySelector(`#step${stepNumber}`);
        const nextIndicator = quoteModal.querySelector(`.quote-step[data-step="${stepNumber}"]`);
        if (nextStepElement) nextStepElement.classList.add("active");
        if (nextIndicator) nextIndicator.classList.add("active");
        if (stepNumber === 3) {
            updateQuoteSummary();
        }
    }
    nextButtons.forEach(button => {
        button.addEventListener("click", () => goToStep(parseInt(button.dataset.next)));
    });
    prevButtons.forEach(button => {
        button.addEventListener("click", () => goToStep(parseInt(button.dataset.prev)));
    });
}

function initFormSubmission() {
    document.querySelectorAll("#quoteForm, #contactForm").forEach(form => {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            const currentLang = document.getElementById('current-lang').textContent.toLowerCase();
            if (form.id === 'quoteForm') {
                const langInput = form.querySelector('#quoteFormLanguage');
                if (langInput) langInput.value = currentLang;
            } else if (form.id === 'contactForm') {
                const langInput = form.querySelector('#contactFormLanguage');
                if (langInput) langInput.value = currentLang;
            }
            let isValid = true;
            document.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');
            // Simplified validation logic
            const requiredInputs = form.querySelectorAll('[required]');
            requiredInputs.forEach(input => {
                const errorEl = form.querySelector(`#${input.id}Error`); // Assumes error element ID convention
                let inputValid = true;
                if (input.type === 'email') {
                    inputValid = /\S+@\S+\.\S+/.test(input.value.trim());
                } else {
                    inputValid = input.value.trim() !== '';
                }
                if (!inputValid) {
                    if(errorEl) errorEl.style.display = 'block';
                    isValid = false;
                }
            });
            if (!isValid) return;

            const SCRIPT_URL = form.getAttribute('action');
            if (!SCRIPT_URL || SCRIPT_URL.includes("YOUR_URL_HERE")) {
                console.error("Form submission failed: Google Apps Script URL is not configured.");
                alert("Form submission is currently disabled. Please contact us directly.");
                return;
            }
            const modalContent = form.closest('.modal-content');
            const spinner = modalContent.querySelector('.loading-spinner');
            const successView = modalContent.querySelector('.booking-success');
            
            form.style.display = 'none';
            spinner.style.display = 'block';

            fetch(SCRIPT_URL, {
                method: 'POST',
                body: new FormData(form),
                mode: 'no-cors' 
            })
            .then(() => {
                spinner.style.display = 'none';
                successView.style.display = 'block';
                form.reset(); 
                if (form.id === 'quoteForm') {
                    // Reset quote form to step 1 and clear selections
                    const serviceOptions = form.querySelectorAll('.service-option');
                    serviceOptions.forEach(option => option.classList.remove('selected'));
                    form.querySelector("#domainYears").value = "5";
                    const firstStep = form.querySelector('#step1');
                    const firstIndicator = form.closest('.modal-content').querySelector('.quote-step[data-step="1"]');
                    form.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
                    form.closest('.modal-content').querySelectorAll('.quote-step').forEach(qs => qs.classList.remove('active'));
                    if (firstStep) firstStep.classList.add('active');
                    if (firstIndicator) firstIndicator.classList.add('active');
                    if (typeof updateQuoteSummary === 'function') {
                        updateQuoteSummary();
                    }
                }
            })
            .catch(error => {
                console.error('Error during form submission:', error);
                alert('There was an error submitting your form. Please try again.');
                spinner.style.display = 'none';
                form.style.display = 'block';
            });
        });
    });
}

// Main initializer function
function init() {
    const preferredLanguage = localStorage.getItem("preferredLanguage") || "en";
    applyTranslations(preferredLanguage);
    initThemeToggle();
    initMobileNav();
    initBackToTop();
    initModals();
    initFaqAccordion();
    initQuoteForm();
    initFormSubmission();
    document.querySelectorAll(".lang-switcher").forEach(switcher => {
        switcher.addEventListener('click', (e) => {
            e.preventDefault();
            applyTranslations(e.target.dataset.lang);
        });
    });
}

// Run the main initializer function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", init);

