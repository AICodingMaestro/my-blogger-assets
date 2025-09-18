<script defer>
    // --- TRANSLATIONS & LANGUAGE SWITCHER ---
        const translations = {
        'en': {
            'text-nav-home':'Home','text-nav-services':'Services','text-nav-portfolio':'Portfolio','text-nav-faq':'FAQ','text-nav-get-quote':'Get Quote','text-nav-contact':'Contact','text-hero-title':'Your All-in-One <span class="accent">Digital Presence</span>','text-hero-subtitle':'Professional Website, Google Listing, and Social Media','text-hero-description':"Tired of managing multiple vendors for your digital needs? We provide complete digital solutions so you can focus on your business while we handle your online presence. Our goal is to serve local businesses across Belgium with affordable, high-quality digital solutions.",'text-hero-quote-btn':'Get a Free Quote','text-hero-portfolio-btn':'View Portfolio','text-hero-scroll':'Scroll to explore','text-services-title':'Complete Digital Solutions','text-services-subtitle':'Everything your business needs to succeed online','text-service1-title':'Website Design','text-service1-desc':'Custom responsive websites that convert visitors into customers. We can create websites in multiple languages to reach a wider audience.','text-service1-price':'From €600 <span class="accent">(Limited Time)</span>','text-service2-title':'Google Business Profile','text-service2-desc':'Complete setup and optimization for local search visibility. Get found by customers in your area.','text-service2-price':'From €150','text-service3-title':'Social Media','text-service3-desc':'Engaging social media content and management to build your online community.','text-service3-price':'From €250/mo','text-service4-title':'Logo & Branding','text-service4-desc':'Professional logo design and brand identity that makes your business stand out.', 'text-service4-price':'From €300','text-services-quote-btn':'Get a Custom Quote','text-pain-title':'Struggling With Your Online Presence?','text-pain-subtitle':'We understand the challenges local businesses face','text-pain1-title':'No Time to Manage Everything','text-pain1-desc':"Between running your business and managing digital platforms, there's never enough time. We handle it all so you can focus on what you do best.",'text-pain2-title':'Too Expensive to Hire Specialists','text-pain2-desc':'Hiring separate experts for website, SEO, and social media is costly. We provide all these services in one affordable package designed for local businesses.','text-pain3-title':'Not Getting Enough Customers Online','text-pain3-desc':"If your website isn't bringing in customers, you're missing out. We create effective online presences that attract and convert visitors.",'text-portfolio-title':'Our Recent Work','text-portfolio-subtitle':'Real results for real businesses','text-portfolio1-overlay-title':'Carwash Gouden Kruispunt','text-portfolio1-overlay-desc':'Complete website and booking system','text-portfolio-view-site':'View Live Site','text-portfolio1-title':'Carwash Tielt-Winge','text-portfolio1-desc':'Professional website with integrated booking system, Google Business optimization, and local SEO for improved visibility in Tielt-Winge area.','text-portfolio1-tag1':'Website Design','text-portfolio1-tag2':'Booking System','text-portfolio1-tag3':'Local SEO','text-portfolio2-overlay-title':'African Shop Menen','text-portfolio2-overlay-desc':'E-commerce solution with multilingual support','text-portfolio-view-site2':'View Live Site','text-portfolio2-title':'African Shop Menen','text-portfolio2-desc':'Bilingual e-commerce website with WhatsApp integration, product catalog, and local delivery options for authentic African products.','text-portfolio2-tag1':'E-commerce','text-portfolio2-tag2':'Multilingual','text-portfolio2-tag3':'WhatsApp Integration','text-portfolio-cta-btn':'Start Your Project','text-faq-title':'Frequently Asked Questions','text-faq1-q':'Why is a professional website important for my local business?','text-faq1-a':'A professional website acts as your digital storefront, open 24/7. It builds trust with customers, showcases your services, and makes it easy for them to contact you, leading directly to more business.','text-faq2-q':'How long does it take to get my website online?','text-faq2-a':'We prioritize speed. Typically, a complete one-page website is live and ready to attract customers within 7 to 14 days after we receive your business information and content.','text-faq3-q':'Will my website work on mobile phones?','text-faq3-a':'Absolutely. Every website we build is fully responsive, meaning it will look great and function perfectly on all devices, including desktops, tablets, and smartphones.','text-faq4-q':'What is a Google Business Profile and why do I need it?','text-faq4-a':'It is the most powerful free tool for local businesses. It allows you to appear on Google Maps and in local search results. A well-optimized profile brings customers directly to your door.','text-faq5-q':'I am not a technical person. Is this process complicated?','text-faq5-a':'Not at all. We handle everything for you. Our process is designed to be simple: we discuss your needs, you provide the business details, and we build your complete online presence.','text-faq6-q':'Can you create the website in multiple languages?','text-faq6-a':'Yes, this is one of our specialties. We can build your website in Dutch, French, German, and English to ensure you can serve every customer in your area.','text-faq7-q':'Are there any hidden monthly fees for the website?','text-faq7-a':'The website design is a one-time payment. The only other costs are for your domain name (e.g., www.mybusiness.be) and hosting, which are small annual fees paid to a third party. We help you set this up transparently.','text-faq8-q':'I already have a logo. Can you use it?','text-faq8-a':'Of course. We will build your website’s design and branding around your existing logo to ensure brand consistency.','text-faq9-q':'What do you need from me to get started?','text-faq9-a':"To begin, we just need a conversation about your business, your services, and your goals. We will also need any text or photos you wish to include. We guide you through every step.",'text-faq10-q':'Why should I choose you over a larger agency?','text-faq10-a':'We specialize in affordable, high-impact solutions specifically for Belgian local businesses. You get a personal, fast, and dedicated service designed to get you more customers without the high agency fees.','text-areas-title':'Serving Local Businesses Across Belgium','text-areas-subtitle':'Specialized in helping businesses in these areas','text-area1-title':'Beringen','text-area1-desc':'Primary service area with local expertise','text-area2-title':'Limburg Province','text-area2-desc':'Extended coverage across the region','text-area3-title':'Hasselt','text-area3-desc':'Major business hub coverage','text-area4-title':'Genk','text-area4-desc':'Industrial and commercial focus','text-areas-note':"We serve businesses throughout Belgium - no matter where you're located! ",'text-areas-contact-link':'Contact us','text-why-title':'Why Local Businesses Choose Us','text-feature1-title':'Complete Package','text-feature1-desc':'Everything you need for digital success in one place - website, Google Business, social media, and more','text-feature2-title':'Local Expertise','text-feature2-desc':'Deep understanding of Belgian business landscape and consumer behavior','text-feature3-title':'Fast Delivery','text-feature3-desc':'Quick turnaround without compromising quality - get online in days, not weeks','text-feature4-title':'Multilingual Support','text-feature4-desc':'We create websites in multiple languages to help you reach diverse audiences across Belgium','text-cta-title':'Ready to Transform Your Digital Presence?','text-cta-subtitle':'Join successful Belgian businesses who trust us with their online growth','text-cta-quote-btn':'Get Your Free Quote','text-cta-contact-btn':'Book a Consultation','text-footer-brand':'Make Website <span class="accent">On Demand</span>','text-footer-brand-desc':'Your trusted partner for complete digital solutions in Belgium','text-footer-col1-title':'Services','text-footer-service1':'Website Design','text-footer-service2':'Google Business Setup','text-footer-service3':'Social Media Management','text-footer-service4':'Logo Design','text-footer-col2-title':'Company','text-footer-company1':'Portfolio','text-footer-company2':'Pricing','text-footer-company3':'Contact','text-footer-col3-title':'Contact Info','text-footer-copyright':'&copy; 2024 Make Website On Demand. All rights reserved.','text-footer-privacy':'Privacy Policy','text-footer-terms':'Terms of Service','text-footer-cookies':'Cookies Policy','text-quote-title-modal': 'Get a Custom Quote',
'text-step1-title': 'What services do you need?',
'text-service-website-title': 'Website Design',
'text-service-website-desc': 'Professional responsive website',
'text-service-website-price': 'From €600',
'text-service-google-title': 'Google Business',
'text-service-google-desc': 'Setup & optimization',
'text-service-google-price': 'From €150',
'text-service-social-title': 'Social Media',
'text-service-social-desc': 'Management & content',
'text-service-social-price': 'From €250/mo',
'text-service-logo-title': 'Logo Design',
'text-service-logo-desc': 'Professional branding',
'text-service-logo-price': 'From €300',
'text-next-btn': 'Next',
'text-next-btn2': 'Next',
'text-step2-title': 'Domain Registration',
'text-domain-desc': "Secure your business name online with a professional domain. Select your preferred registration period and we'll handle the rest!",
'text-table-header-duration': 'Duration',
'text-table-header-price': 'Price/Year',
'text-table-header-total': 'Total',
'text-domain-1y': '1 Year',
'text-domain-2y': '2 Years',
'text-domain-5y': '5 Years',
'text-best-value': '(Best Value)',
'text-domain-10y': '10 Years',
'text-select-period-label': 'Select Registration Period',
'text-prev-btn': 'Previous',
'text-prev-btn2': 'Previous',
'text-step3-title': 'Almost done! Share your details',
'text-summary-title': 'Your Quote Summary',
'text-summary-services-label': 'Selected Services:',
'text-summary-domain-label': 'Domain Registration:',
'text-summary-total-label': 'Total Investment:',
'text-contact-name-label-q': 'Your Name',
'text-contact-email-label-q': 'Email Address',
'text-business-type-label': 'What type of business do you have?',
'text-submit-quote-btn': 'Get My Custom Quote',
'text-quote-success-title': 'Thank You!',
'text-quote-success-desc': "We've received your request and will send a custom quote within 24 hours.",
'text-quote-success-close': 'Close','text-contact-title':'Contact Us','text-contact-subtitle':"Have a question? We'd love to hear from you.",'text-contact-name-label':'Your Name','text-contact-email-label':'Email Address','text-contact-message-label':'Your Message','text-contact-submit-btn':'Send Message','text-contact-success-title':'Message Sent!','text-contact-success-desc':"We'll get back to you within 24 hours.",'text-contact-success-close':'Close','text-privacy-title':'Privacy Policy','text-privacy-updated':'Last Updated: January 2024','text-privacy-h1':'1. Introduction','text-privacy-p1':'Welcome to Make Website On Demand. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and share your personal information when you use our services.','text-privacy-h2':'2. Information We Collect','text-privacy-p2':'We collect personal information that you provide to us, including: Name and contact information (email address, phone number), Business information, Project requirements and preferences, and Communication preferences.','text-privacy-h3':'3. How We Use Your Information','text-privacy-p3':'We use the information we collect to: Provide, operate, and maintain our services, process your requests and transactions, communicate with you about our services, and improve our website and services.','text-privacy-h4':'4. Data Security','text-privacy-p4':'We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.','text-privacy-h5':'5. Your Rights','text-privacy-p5':'You have the right to access, correct, or delete your personal information. Contact us at info@makewebsiteondemand.be to exercise these rights.','text-privacy-close':'Close','text-terms-title':'Terms of Service','text-terms-updated':'Last Updated: January 2024','text-terms-h1':'1. Agreement to Terms','text-terms-p1':"By using our services, you agree to be bound by these Terms of Service. If you don't agree to these terms, please do not use our services.",'text-terms-h2':'2. Services','text-terms-p2':'We provide website design, development, and digital marketing services as described on our website. All services are subject to these terms.','text-terms-h3':'3. Payment Terms','text-terms-p3':'Payment terms will be specified in your project proposal. Typically, we require a 50% deposit to begin work, with the balance due upon project completion.','text-terms-h4':'4. Client Responsibilities','text-terms-p4':'Clients are responsible for providing all necessary content, images, and information in a timely manner to ensure project progression.','text-terms-h5':'5. Limitation of Liability','text-terms-p5':'Our liability is limited to the amount paid for our services. We are not liable for indirect or consequential damages.','text-terms-close':'Close','text-cookies-title':'Cookies Policy','text-cookies-updated':'Last Updated: January 2024','text-cookies-h1':'1. What Are Cookies','text-cookies-p1':'Cookies are small text files placed on your device when you visit our website. They are used to make websites work efficiently and provide information to the site owners.','text-cookies-h2':'2. How We Use Cookies','text-cookies-p2':'We use cookies for several purposes, including essential operations, performance analytics, and functionality personalization.','text-cookies-h3':'3. Managing Cookies','text-cookies-p3':'You can control and manage cookies through your browser settings. Please note that blocking cookies may impact your user experience.','text-cookies-h4':'4. Contact Us','text-cookies-p4':'If you have any questions about our Cookie Policy, please contact us at info@makewebsiteondemand.be.','text-cookies-close':'Close',
            'text-contact-validation-all-fields': 'Please fill in all required fields.','text-contact-validation-email': 'Please enter a valid email address.','text-form-submit-error': 'There was an error submitting your form. Please try again.'
        },
        'fr': {
            'text-nav-home':'Accueil','text-nav-services':'Services','text-nav-portfolio':'Portfolio','text-nav-faq':'FAQ','text-nav-get-quote':'Obtenir un Devis','text-nav-contact':'Contact','text-hero-title':'Votre Présence Numérique <span class="accent">Tout-en-Un</span>','text-hero-subtitle':'Site Web Professionnel, Fiche Google et Médias Sociaux','text-hero-description':"Fatigué de gérer plusieurs fournisseurs ? Nous offrons des solutions numériques complètes pour que vous puissiez vous concentrer sur votre entreprise pendant que nous nous occupons de votre présence en ligne. Notre mission est de servir les entreprises locales en Belgique avec des solutions abordables et de haute qualité.",'text-hero-quote-btn':'Obtenir un Devis Gratuit','text-hero-portfolio-btn':'Voir le Portfolio','text-hero-scroll':'Faites défiler pour explorer','text-services-title':'Solutions Numériques Complètes','text-services-subtitle':"Tout ce dont votre entreprise a besoin pour réussir en ligne",'text-service1-title':'Création de Site Web','text-service1-desc':"Sites web réactifs personnalisés qui convertissent les visiteurs en clients. Nous pouvons créer des sites en plusieurs langues pour atteindre un public plus large.",'text-service1-price':'À partir de 600 € <span class="accent">(Offre Limitée)</span>','text-service2-title':"Profil d'Entreprise Google",'text-service2-desc':"Configuration et optimisation complètes pour la visibilité locale. Soyez trouvé par les clients de votre région.",'text-service2-price':'À partir de 150 €','text-service3-title':'Médias Sociaux','text-service3-desc':"Contenu et gestion engageants sur les médias sociaux pour construire votre communauté en ligne.",'text-service3-price':'À partir de 250 €/mois','text-service4-title':'Logo & Identité Visuelle','text-service4-desc':"Création de logo professionnel et identité de marque qui démarquent votre entreprise.",'text-service4-price':'À partir de 300 €','text-services-quote-btn':'Obtenir un Devis Personnalisé','text-pain-title':"Difficultés avec Votre Présence en Ligne ?",'text-pain-subtitle':"Nous comprenons les défis des entreprises locales",'text-pain1-title':"Pas le Temps de Tout Gérer",'text-pain1-desc':"Entre la gestion de votre entreprise et des plateformes numériques, le temps manque toujours. Nous nous occupons de tout pour que vous puissiez vous concentrer sur votre cœur de métier.",'text-pain2-title':"Trop Cher d'Engager des Spécialistes",'text-pain2-desc':"Recruter des experts distincts pour le site, le SEO et les médias sociaux coûte cher. Nous offrons tous ces services dans un pack abordable pour les entreprises locales.",'text-pain3-title':"Pas Assez de Clients via Internet",'text-pain3-desc':"Si votre site n'attire pas de clients, vous manquez des opportunités. Nous créons des présences en ligne efficaces qui attirent et convertissent les visiteurs.",'text-portfolio-title':'Nos Travaux Récents','text-portfolio-subtitle':"De vrais résultats pour de vraies entreprises",'text-portfolio1-overlay-title':'Carwash Gouden Kruispunt','text-portfolio1-overlay-desc':'Site web complet et système de réservation','text-portfolio-view-site':'Voir le Site','text-portfolio1-title':'Carwash Tielt-Winge','text-portfolio1-desc':"Site web professionnel avec système de réservation intégré, optimisation Google Business et SEO local pour une meilleure visibilité dans la région de Tielt-Winge.",'text-portfolio1-tag1':'Création de Site','text-portfolio1-tag2':'Système de Réservation','text-portfolio1-tag3':'SEO Local','text-portfolio2-overlay-title':'Boutique Africaine Menen','text-portfolio2-overlay-desc':'Solution e-commerce multilingue','text-portfolio-view-site2':'Voir le Site','text-portfolio2-title':'Boutique Africaine Menen','text-portfolio2-desc':"Site e-commerce bilingue avec WhatsApp-intégration, catalogue de produits et options de livraison locale pour des produits africains authentiques.",'text-portfolio2-tag1':'E-commerce','text-portfolio2-tag2':'Multilingue','text-portfolio2-tag3':'Intégration WhatsApp','text-portfolio-cta-btn':'Démarrer Votre Projet','text-faq-title':'Foire Aux Questions','text-faq1-q':"Pourquoi un site web professionnel est-il important pour mon entreprise locale ?",'text-faq1-a':"Un site professionnel est votre vitrine numérique, ouverte 24/7. Il renforce la confiance des clients, présente vos services et facilite la prise de contact, ce qui génère directement plus d'affaires.",'text-faq2-q':"Combien de temps faut-il pour mettre mon site en ligne ?",'text-faq2-a':"Nous privilégions la rapidité. En général, un site d'une page complet est en ligne et prêt à attirer des clients en 7 à 14 jours après réception de vos informations commerciales.",'text-faq3-q':"Mon site fonctionnera-t-il sur les téléphones mobiles ?",'text-faq3-a':"Absolument. Chaque site que nous créons est entièrement réactif, ce qui signifie qu'il s'affichera et fonctionnera parfaitement sur tous les appareils : ordinateurs, tablettes et smartphones.",'text-faq4-q':"Qu'est-ce qu'un Profil d'Entreprise Google et pourquoi en ai-je besoin ?",'text-faq4-a':"C'est l'outil gratuit le plus puissant pour les entreprises locales. Il vous permet d'apparaître sur Google Maps et dans les résultats de recherche locaux. Un profil bien optimisé amène les clients directement à votre porte.",'text-faq5-q':"Je ne suis pas technique. Le processus est-il compliqué ?",'text-faq5-a':"Pas du tout. Nous nous occupons de tout pour vous. Notre processus est simple : nous discutons de vos besoins, vous fournissez les détails de votre entreprise, et nous construisons votre présence en ligne complète.",'text-faq6-q':"Pouvez-vous créer le site en plusieurs langues ?",'text-faq6-a':"Oui, c'est une de nos spécialités. Nous pouvons construire votre site en néerlandais, français, allemand et anglais pour vous assurer de pouvoir servir chaque client de votre région.",'text-faq7-q':"Y a-t-il des frais mensuels cachés pour le site ?",'text-faq7-a':"La création du site est un paiement unique. Les seuls autres coûts sont votre nom de domaine (ex: www.monentreprise.be) et l'hébergement, qui sont de petits frais annuels payés à un tiers. Nous vous aidons à tout configurer de manière transparente.",'text-faq8-q':"J'ai déjà un logo. Pouvez-vous l'utiliser ?",'text-faq8-a':"Bien sûr. Nous construirons le design de votre site web autour de votre logo existant pour assurer la cohérence de votre marque.",'text-faq9-q':"De quoi avez-vous besoin de ma part pour commencer ?",'text-faq9-a':"Pour commencer, il nous suffit d'une conversation sur votre entreprise, vos services et vos objectifs. Nous aurons aussi besoin des textes ou photos que vous souhaitez inclure. Nous vous guidons à chaque étape.",'text-faq10-q':"Pourquoi vous choisir plutôt qu'une grande agence ?",'text-faq10-a':"Nous sommes spécialisés dans les solutions abordables et à fort impact pour les entreprises locales belges. Vous bénéficiez d'un service personnel, rapide et dédié, conçu pour vous attirer plus de clients sans les frais élevés des agences.",'text-areas-title':"Au Service des Entreprises Locales en Belgique",'text-areas-subtitle':"Spécialisés dans l'aide aux entreprises de ces régions",'text-area1-title':'Beringen','text-area1-desc':"Zone de service principale avec expertise locale",'text-area2-title':'Province de Limbourg','text-area2-desc':"Couverture étendue dans toute la région",'text-area3-title':'Hasselt','text-area3-desc':"Couverture du principal pôle commercial",'text-area4-title':'Genk','text-area4-desc':"Focalisation industrielle et commerciale",'text-areas-note':"Nous servons des entreprises dans toute la Belgique - où que vous soyez ! ",'text-areas-contact-link':'Contactez-nous','text-why-title':"Pourquoi les Entreprises Locales Nous Choisissent",'text-feature1-title':'Forfait Complet','text-feature1-desc':"Tout ce dont vous avez besoin pour réussir numériquement en un seul endroit - site web, Google Business, médias sociaux, et plus",'text-feature2-title':'Expertise Locale','text-feature2-desc':"Compréhension approfondie du paysage commercial et du comportement des consommateurs belges",'text-feature3-title':'Livraison Rapide','text-feature3-desc':"Délai d'exécution rapide sans compromettre la qualité - soyez en ligne en quelques jours, pas en semaines",'text-feature4-title':'Support Multilingue','text-feature4-desc':"Nous créons des sites web en plusieurs langues pour vous aider à atteindre divers publics à travers la Belgique",'text-cta-title':"Prêt à Transformer Votre Présence Numérique ?",'text-cta-subtitle':"Rejoignez les entreprises belges à succès qui nous font confiance pour leur croissance en ligne",'text-cta-quote-btn':'Obtenez Votre Devis Gratuit','text-cta-contact-btn':'Prendre un Rendez-vous','text-footer-brand':'Make Website <span class="accent">On Demand</span>','text-footer-brand-desc':"Votre partenaire de confiance pour des solutions numériques complètes en Belgique",'text-footer-col1-title':'Services','text-footer-service1':'Création de Site Web','text-footer-service2':'Configuration Google Business','text-footer-service3':'Gestion des Médias Sociaux','text-footer-service4':'Création de Logo','text-footer-col2-title':'Société','text-footer-company1':'Portfolio','text-footer-company2':'Tarifs','text-footer-company3':'Contact','text-footer-col3-title':'Infos Contact','text-footer-copyright':'&copy; 2024 Make Website On Demand. Tous droits réservés.','text-footer-privacy':'Politique de Confidentialité','text-footer-terms':"Conditions d'Utilisation",'text-footer-cookies':'Politique de Cookies','text-quote-title-modal': 'Obtenir un devis personnalisé',
'text-step1-title': 'De quels services avez-vous besoin ?',
'text-service-website-title': 'Création de site web',
'text-service-website-desc': 'Site web réactif professionnel',
'text-service-website-price': 'À partir de 600 €',
'text-service-google-title': 'Google Business',
'text-service-google-desc': 'Configuration et optimisation',
'text-service-google-price': 'À partir de 150 €',
'text-service-social-title': 'Médias sociaux',
'text-service-social-desc': 'Gestion et contenu',
'text-service-social-price': 'À partir de 250 €/mois',
'text-service-logo-title': 'Création de logo',
'text-service-logo-desc': 'Image de marque professionnelle',
'text-service-logo-price': 'À partir de 300 €',
'text-next-btn': 'Suivant',
'text-next-btn2': 'Suivant',
'text-step2-title': "Enregistrement de domaine",
'text-domain-desc': "Sécurisez le nom de votre entreprise en ligne avec un domaine professionnel. Sélectionnez votre période d'enregistrement préférée et nous nous occupons du reste !",
'text-table-header-duration': 'Durée',
'text-table-header-price': 'Prix/An',
'text-table-header-total': 'Total',
'text-domain-1y': '1 An',
'text-domain-2y': '2 Ans',
'text-domain-5y': '5 Ans',
'text-best-value': '(Meilleur prix)',
'text-domain-10y': '10 Ans',
'text-select-period-label': "Sélectionnez la période d'enregistrement",
'text-prev-btn': 'Précédent',
'text-prev-btn2': 'Précédent',
'text-step3-title': 'Presque fini ! Partagez vos coordonnées',
'text-summary-title': 'Résumé de votre devis',
'text-summary-services-label': 'Services sélectionnés:',
'text-summary-domain-label': 'Enregistrement de domaine:',
'text-summary-total-label': 'Investissement total:',
'text-contact-name-label-q': 'Votre nom',
'text-contact-email-label-q': 'Adresse e-mail',
'text-business-type-label': "Quel type d'entreprise avez-vous ?",
'text-submit-quote-btn': 'Obtenir mon devis personnalisé',
'text-quote-success-title': 'Merci !',
'text-quote-success-desc': "Nous avons reçu votre demande et vous enverrons un devis personnalisé dans les 24 heures.",
'text-quote-success-close': 'Fermer','text-contact-title':'Contactez-nous','text-contact-subtitle':"Avez-vous une question? Nous aimerions recevoir de vos nouvelles.",'text-contact-name-label':'Votre nom','text-contact-email-label':'Adresse e-mail','text-contact-message-label':'Votre message','text-contact-submit-btn':'Envoyer le message','text-contact-success-title':'Message envoyé !','text-contact-success-desc':"Nous vous répondrons dans les 24 heures.",'text-contact-success-close':'Fermer','text-privacy-title':'Politique de Confidentialité','text-privacy-updated':'Dernière mise à jour : janvier 2024','text-privacy-h1':'1. Introduction','text-privacy-p1':"Bienvenue chez Make Website On Demand. Nous nous engageons à protéger vos informations personnelles et votre droit à la vie privée.",'text-privacy-h2':'2. Informations que nous collectons','text-privacy-p2':"Nous collectons les informations personnelles que vous nous fournissez, y compris : Nom et coordonnées, informations sur l'entreprise, exigences du projet et préférences.",'text-privacy-h3':'3. Comment nous utilisons vos informations','text-privacy-p3':"Nous utilisons les informations collectées pour : Fournir et maintenir nos services, traiter vos demandes, communiquer avec vous et améliorer nos services.",'text-privacy-h4':'4. Sécurité des données','text-privacy-p4':"Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos informations personnelles.",'text-privacy-h5':'5. Vos droits','text-privacy-p5':"Vous avez le droit d'accéder, de corriger ou de supprimer vos informations personnelles. Contactez-nous à info@makewebsiteondemand.be.",'text-privacy-close':'Fermer','text-terms-title':"Conditions d'Utilisation",'text-terms-updated':'Dernière mise à jour : janvier 2024','text-terms-h1':'1. Acceptation des conditions','text-terms-p1':"En utilisant nos services, vous acceptez d'être lié par ces conditions.",'text-terms-h2':'2. Services','text-terms-p2':"Nous fournissons des services de conception de sites web et de marketing numérique comme décrit sur notre site.",'text-terms-h3':'3. Conditions de paiement','text-terms-p3':"Les conditions de paiement seront spécifiées dans votre proposition de projet. Un acompte de 50% est généralement requis.",'text-terms-h4':'4. Responsabilités du client','text-terms-p4':"Les clients sont responsables de fournir tout le contenu nécessaire en temps opportun.",'text-terms-h5':'5. Limitation de responsabilité','text-terms-p5':"Notre responsabilité est limitée au montant payé pour nos services.",'text-terms-close':'Fermer','text-cookies-title':'Politique de Cookies','text-cookies-updated':'Dernière mise à jour : janvier 2024','text-cookies-h1':'1. Que sont les cookies','text-cookies-p1':"Les cookies sont de petits fichiers texte placés sur votre appareil lorsque vous visitez notre site web.",'text-cookies-h2':'2. Comment nous utilisons les cookies','text-cookies-p2':"Nous utilisons des cookies à plusieurs fins, notamment pour les opérations essentielles, l'analyse des performances et la personnalisation.",'text-cookies-h3':'3. Gérer les cookies','text-cookies-p3':"Vous pouvez contrôler et gérer les cookies via les paramètres de votre navigateur.",'text-cookies-h4':'4. Contactez-nous','text-cookies-p4':"Si vous avez des questions sur notre politique de cookies, veuillez nous contacter à info@makewebsiteondemand.be.",'text-cookies-close':'Fermer',
            'text-contact-validation-all-fields': 'Veuillez remplir tous les champs obligatoires.',
            'text-contact-validation-email': 'Veuillez entrer une adresse e-mail valide.',
            'text-form-submit-error': 'Une erreur est survenue lors de l\'envoi de votre formulaire. Veuillez réessayer.'
        },
        'nl': {
            'text-nav-home':'Home','text-nav-services':'Diensten','text-nav-portfolio':'Portfolio','text-nav-faq':'FAQ','text-nav-get-quote':'Offerte Aanvragen','text-nav-contact':'Contact','text-hero-title':'Uw Alles-in-Één <span class="accent">Digitale Aanwezigheid</span>','text-hero-subtitle':'Professionele Website, Google Bedrijfsprofiel en Sociale Media','text-hero-description':"Beu om meerdere leveranciers te beheren? Wij bieden complete digitale oplossingen zodat u zich kunt focussen op uw bedrijf, terwijl wij uw online aanwezigheid regelen. Ons doel is om lokale bedrijven in België te helpen met betaalbare, hoogwaardige digitale oplossingen.",'text-hero-quote-btn':'Vraag een Gratis Offerte aan','text-hero-portfolio-btn':'Bekijk Portfolio','text-hero-scroll':'Scroll om te ontdekken','text-services-title':'Complete Digitale Oplossingen','text-services-subtitle':'Alles wat uw bedrijf nodig heeft om online te slagen','text-service1-title':'Website Ontwerp','text-service1-desc':'Aangepaste responsieve websites die bezoekers omzetten in klanten. We kunnen websites in meerdere talen maken om een breder publiek te bereiken.','text-service1-price':'Vanaf €600 <span class="accent">(Tijdelijke Actie)</span>','text-service2-title':'Google Bedrijfsprofiel','text-service2-desc':'Volledige installatie en optimalisatie voor lokale zoekzichtbaarheid. Word gevonden door klanten in uw omgeving.','text-service2-price':'Vanaf €150','text-service3-title':'Sociale Media','text-service3-desc':'Boeiende sociale media-inhoud en -beheer om uw online community op te bouwen.','text-service3-price':'Vanaf €250/mnd','text-service4-title':'Logo & Branding','text-service4-desc':'Professioneel logo-ontwerp en merkidentiteit die uw bedrijf laten opvallen.','text-service4-price':'Vanaf €300','text-services-quote-btn':'Vraag een Offerte op Maat aan','text-pain-title':'Worstelt u met uw Online Aanwezigheid?','text-pain-subtitle':'Wij begrijpen de uitdagingen van lokale bedrijven','text-pain1-title':'Geen Tijd om Alles te Beheren','text-pain1-desc':'Tussen het runnen van uw bedrijf en het beheren van digitale platformen is er nooit genoeg tijd. Wij nemen alles uit handen, zodat u zich kunt richten op wat u het beste doet.','text-pain2-title':'Te Duur om Specialisten in te Huren','text-pain2-desc':'Het inhuren van aparte experts voor website, SEO en sociale media is kostbaar. Wij bieden al deze diensten in één betaalbaar pakket voor lokale bedrijven.','text-pain3-title':'Niet Genoeg Klanten Online','text-pain3-desc':'Als uw website geen klanten binnenhaalt, loopt u omzet mis. Wij creëren effectieve online aanwezigheden die bezoekers aantrekken en converteren.','text-portfolio-title':'Ons Recente Werk','text-portfolio-subtitle':'Echte resultaten voor echte bedrijven','text-portfolio1-overlay-title':'Carwash Gouden Kruispunt','text-portfolio1-overlay-desc':'Complete website en boekingssysteem','text-portfolio-view-site':'Bekijk Site','text-portfolio1-title':'Carwash Tielt-Winge','text-portfolio1-desc':'Professionele website met geïntegreerd boekingssysteem, Google Bedrijfsoptimalisatie en lokale SEO voor betere zichtbaarheid in de regio Tielt-Winge.','text-portfolio1-tag1':'Website Ontwerp','text-portfolio1-tag2':'Boekingssysteem','text-portfolio1-tag3':'Lokale SEO','text-portfolio2-overlay-title':'Afrikaanse Winkel Menen','text-portfolio2-overlay-desc':'E-commerce oplossing met meertalige ondersteuning','text-portfolio-view-site2':'Bekijk Site','text-portfolio2-title':'Afrikaanse Winkel Menen','text-portfolio2-desc':'Tweetalige e-commerce website met WhatsApp-integratie, productcatalogus en lokale bezorgopties voor authentieke Afrikaanse producten.','text-portfolio2-tag1':'E-commerce','text-portfolio2-tag2':'Meertalig','text-portfolio2-tag3':'WhatsApp Integratie','text-portfolio-cta-btn':'Start Uw Project','text-faq-title':'Veelgestelde Vragen','text-faq1-q':'Waarom is een professionele website belangrijk voor mijn lokaal bedrijf?','text-faq1-a':'Een professionele website is uw digitale etalage, 24/7 open. Het bouwt vertrouwen op bij klanten, toont uw diensten en maakt het gemakkelijk om contact op te nemen, wat direct leidt tot meer omzet.','text-faq2-q':'Hoe lang duurt het om mijn website online te krijgen?','text-faq2-a':'Wij hechten veel waarde aan snelheid. Een complete one-page website is doorgaans binnen 7 tot 14 dagen live en klaar om klanten aan te trekken, nadat we uw bedrijfsinformatie hebben ontvangen.','text-faq3-q':'Werkt mijn website op mobiele telefoons?','text-faq3-a':'Absoluut. Elke website die we bouwen is volledig responsief, wat betekent dat hij er perfect uitziet en werkt op alle apparaten, inclusief desktops, tablets en smartphones.','text-faq4-q':'Wat is een Google Bedrijfsprofiel en waarom heb ik dat nodig?','text-faq4-a':'Het is de krachtigste gratis tool voor lokale bedrijven. Het zorgt ervoor dat u verschijnt op Google Maps en in lokale zoekresultaten. Een goed geoptimaliseerd profiel brengt klanten rechtstreeks naar uw deur.','text-faq5-q':'Ik ben niet technisch. Is dit een ingewikkeld proces?','text-faq5-a':'Helemaal niet. Wij regelen alles voor u. Ons proces is eenvoudig: we bespreken uw wensen, u levert de bedrijfsdetails aan, en wij bouwen uw complete online aanwezigheid.','text-faq6-q':'Kunnen jullie de website in meerdere talen maken?','text-faq6-a':'Jazeker, dit is een van onze specialiteiten. We kunnen uw website bouwen in het Nederlands, Frans, Duits en Engels, zodat u elke klant in uw regio kunt bedienen.','text-faq7-q':'Zijn er verborgen maandelijkse kosten voor de website?','text-faq7-a':'Het website-ontwerp is een eenmalige betaling. De enige andere kosten zijn voor uw domeinnaam (bv. www.mijnbedrijf.be) en hosting, wat kleine jaarlijkse kosten zijn die aan een derde partij worden betaald. Wij helpen u dit transparant op te zetten.','text-faq8-q':'Ik heb al een logo. Kunnen jullie dat gebruiken?','text-faq8-a':'Natuurlijk. We bouwen het ontwerp en de branding van uw website rond uw bestaande logo om merkconsistentie te garanderen.','text-faq9-q':'Wat hebben jullie van mij nodig om te beginnen?','text-faq9-a':"Om te beginnen, hebben we alleen een gesprek nodig over uw bedrijf, uw diensten en uw doelen. We hebben ook eventuele tekst of foto's nodig die u wilt gebruiken. We begeleiden u bij elke stap.",'text-faq10-q':'Waarom zou ik voor jullie kiezen in plaats van een groot bureau?','text-faq10-a':'Wij zijn gespecialiseerd in betaalbare, impactvolle oplossingen speciaal voor Belgische lokale bedrijven. U krijgt een persoonlijke, snelle en toegewijde service die is ontworpen om u meer klanten te bezorgen zonder de hoge kosten van een bureau.','text-areas-title':'Actief voor Lokale Bedrijven in heel België','text-areas-subtitle':'Gespecialiseerd in het helpen van bedrijven in deze gebieden','text-area1-title':'Beringen','text-area1-desc':'Primair servicegebied met lokale expertise','text-area2-title':'Provincie Limburg','text-area2-desc':'Uitgebreide dekking in de hele regio','text-area3-title':'Hasselt','text-area3-desc':'Dekking van belangrijk zakelijk knooppunt','text-area4-title':'Genk','text-area4-desc':'Industriële en commerciële focus','text-areas-note':'Wij bedienen bedrijven in heel België - waar u ook gevestigd bent! ','text-areas-contact-link':'Neem contact op','text-why-title':'Waarom Lokale Bedrijven Voor Ons Kiezen','text-feature1-title':'Compleet Pakket','text-feature1-desc':'Alles wat u nodig heeft voor digitaal succes op één plek - website, Google Business, sociale media en meer','text-feature2-title':'Lokale Expertise','text-feature2-desc':'Diepgaand inzicht in het Belgische zakelijke landschap en consumentengedrag','text-feature3-title':'Snelle Levering','text-feature3-desc':'Snelle doorlooptijd zonder kwaliteitsverlies - binnen enkele dagen online, niet weken','text-feature4-title':'Meertalige Ondersteuning','text-feature4-desc':'Wij maken websites in meerdere talen om u te helpen diverse doelgroepen in heel België te bereiken','text-cta-title':'Klaar om Uw Digitale Aanwezigheid te Transformeren?','text-cta-subtitle':'Sluit u aan bij succesvolle Belgische bedrijven die ons hun online groei toevertrouwen','text-cta-quote-btn':'Vraag Uw Gratis Offerte Aan','text-cta-contact-btn':'Boek een Consultatie','text-footer-brand':'Make Website <span class="accent">On Demand</span>','text-footer-brand-desc':'Uw vertrouwde partner voor complete digitale oplossingen in België','text-footer-col1-title':'Diensten','text-footer-service1':'Website Ontwerp','text-footer-service2':'Google Business Instellen','text-footer-service3':'Social Media Beheer','text-footer-service4':'Logo Ontwerp','text-footer-col2-title':'Bedrijf','text-footer-company1':'Portfolio','text-footer-company2':'Prijzen','text-footer-company3':'Contact','text-footer-col3-title':'Contactinfo','text-footer-copyright':'&copy; 2024 Make Website On Demand. Alle rechten voorbehouden.','text-footer-privacy':'Privacybeleid','text-footer-terms':'Servicevoorwaarden','text-footer-cookies':'Cookiebeleid','text-quote-title-modal': 'Vraag een offerte op maat aan',
'text-step1-title': 'Welke diensten heeft u nodig?',
'text-service-website-title': 'Website ontwerp',
'text-service-website-desc': 'Professionele responsieve website',
'text-service-website-price': 'Vanaf €600',
'text-service-google-title': 'Google Business',
'text-service-google-desc': 'Installatie & optimalisatie',
'text-service-google-price': 'Vanaf €150',
'text-service-social-title': 'Sociale media',
'text-service-social-desc': 'Beheer & inhoud',
'text-service-social-price': 'Vanaf €250/mnd',
'text-service-logo-title': 'Logo ontwerp',
'text-service-logo-desc': 'Professionele branding',
'text-service-logo-price': 'Vanaf €300',
'text-next-btn': 'Volgende',
'text-next-btn2': 'Volgende',
'text-step2-title': 'Domeinregistratie',
'text-domain-desc': "Beveilig uw bedrijfsnaam online met een professioneel domein. Selecteer de gewenste registratieperiode en wij regelen de rest!",
'text-table-header-duration': 'Duur',
'text-table-header-price': 'Prijs/jaar',
'text-table-header-total': 'Totaal',
'text-domain-1y': '1 Jaar',
'text-domain-2y': '2 Jaar',
'text-domain-5y': '5 Jaar',
'text-best-value': '(Beste waarde)',
'text-domain-10y': '10 Jaar',
'text-select-period-label': 'Selecteer registratieperiode',
'text-prev-btn': 'Vorige',
'text-prev-btn2': 'Vorige',
'text-step3-title': 'Bijna klaar! Deel uw gegevens',
'text-summary-title': 'Uw Offertesamenvatting',
'text-summary-services-label': 'Geselecteerde diensten:',
'text-summary-domain-label': 'Domeinregistratie:',
'text-summary-total-label': 'Totale investering:',
'text-contact-name-label-q': 'Uw naam',
'text-contact-email-label-q': 'E-mailadres',
'text-business-type-label': 'Wat voor soort bedrijf heeft u?',
'text-submit-quote-btn': 'Vraag mijn offerte op maat aan',
'text-quote-success-title': 'Bedankt!',
'text-quote-success-desc': "We hebben uw aanvraag ontvangen en sturen u binnen 24 uur een offerte op maat.",
'text-quote-success-close': 'Sluiten','text-contact-title':'Neem contact op','text-contact-subtitle':"Heeft u een vraag? We horen graag van u.",'text-contact-name-label':'Uw naam','text-contact-email-label':'E-mailadres','text-contact-message-label':'Uw bericht','text-contact-submit-btn':'Bericht verzenden','text-contact-success-title':'Bericht verzonden!','text-contact-success-desc':'We nemen binnen 24 uur contact met u op.','text-contact-success-close':'Sluiten','text-privacy-title':'Privacybeleid','text-privacy-updated':'Laatst bijgewerkt: januari 2024','text-privacy-h1':'1. Inleiding','text-privacy-p1':'Welkom bij Make Website On Demand. Wij zetten ons in om uw persoonlijke informatie en uw recht op privacy te beschermen.','text-privacy-h2':'2. Informatie die we verzamelen','text-privacy-p2':'Wij verzamelen persoonlijke informatie die u ons verstrekt, waaronder: Naam en contactgegevens, bedrijfsinformatie, projectvereisten en voorkeuren.','text-privacy-h3':'3. Hoe we uw informatie gebruiken','text-privacy-p3':'We gebruiken de verzamelde informatie om: onze diensten te leveren en te onderhouden, uw verzoeken te verwerken, met u te communiceren en onze diensten te verbeteren.','text-privacy-h4':'4. Gegevensbeveiliging','text-privacy-p4':'We implementeren passende beveiligingsmaatregelen om uw persoonlijke informatie te beschermen.','text-privacy-h5':'5. Uw rechten','text-privacy-p5':'U hebt het recht om uw persoonlijke informatie in te zien, te corrigeren of te verwijderen. Neem contact met ons op via info@makewebsiteondemand.be.','text-privacy-close':'Sluiten','text-terms-title':'Servicevoorwaarden','text-terms-updated':'Laatst bijgewerkt: januari 2024','text-terms-h1':'1. Akkoord met voorwaarden','text-terms-p1':'Door gebruik te maken van onze diensten, gaat u akkoord met deze voorwaarden.','text-terms-h2':'2. Diensten','text-terms-p2':'Wij bieden webdesign en digitale marketingdiensten zoals beschreven op onze website.','text-terms-h3':'3. Betalingsvoorwaarden','text-terms-p3':'Betalingsvoorwaarden worden gespecificeerd in uw projectvoorstel. Een aanbetaling van 50% is doorgaans vereist.','text-terms-h4':'4. Verantwoordelijkheden van de klant','text-terms-p4':'Klanten zijn verantwoordelijk voor het tijdig aanleveren van alle benodigde inhoud.','text-terms-h5':'5. Beperking van aansprakelijkheid','text-terms-p5':'Onze aansprakelijkheid is beperkt tot het bedrag dat voor onze diensten is betaald.','text-terms-close':'Sluiten','text-cookies-title':'Cookiebeleid','text-cookies-updated':'Laatst bijgewerkt: januari 2024','text-cookies-h1':'1. Wat zijn cookies','text-cookies-p1':'Cookies zijn kleine tekstbestanden die op uw apparaat worden geplaatst wanneer u onze website bezoekt.','text-cookies-h2':'2. Hoe we cookies gebruiken','text-cookies-p2':'We gebruiken cookies voor verschillende doeleinden, waaronder essentiële operaties, prestatieanalyses en personalisatie.','text-cookies-h3':'3. Cookies beheren','text-cookies-p3':'U kunt cookies beheren via uw browserinstellingen.','text-cookies-h4':'4. Contacteer ons','text-cookies-p4':'Als u vragen heeft over ons cookiebeleid, neem dan contact met ons op via info@makewebsiteondemand.be.','text-cookies-close':'Sluiten',
            'text-contact-validation-all-fields': 'Vul alstublieft alle verplichte velden in.',
            'text-contact-validation-email': 'Vul alstublieft een geldig e-mailadres in.',
            'text-form-submit-error': 'Er is een fout opgetreden bij het indienen van uw formulier. Probeer het opnieuw.'
        },
       'de': {
            'text-nav-home': 'Startseite','text-nav-services': 'Leistungen','text-nav-portfolio': 'Portfolio','text-nav-faq': 'FAQ','text-nav-get-quote': 'Angebot Anfordern','text-nav-contact': 'Kontakt','text-hero-title': 'Ihre All-in-One <span class="accent">Digitale Präsenz</span>','text-hero-subtitle': 'Professionelle Website, Google-Unternehmensprofil und Social Media','text-hero-description': 'Haben Sie es satt, mehrere Anbieter zu verwalten? Wir bieten komplette digitale Lösungen, damit Sie sich auf Ihr Geschäft konzentrieren können, während wir uns um Ihre Online-Präsenz kümmern. Unser Ziel ist es, lokale Unternehmen in Belgien mit erschwinglichen, hochwertigen digitalen Lösungen zu unterstützen.','text-hero-quote-btn': 'Kostenloses Angebot','text-hero-portfolio-btn': 'Portfolio ansehen','text-hero-scroll': 'Scrollen zum Entdecken','text-services-title': 'Komplette Digitale Lösungen','text-services-subtitle': 'Alles, was Ihr Unternehmen für den Online-Erfolg braucht','text-service1-title': 'Webdesign','text-service1-desc': 'Individuelle responsive Websites, die Besucher in Kunden verwandeln. Wir können Websites in mehreren Sprachen erstellen, um ein breiteres Publikum zu erreichen.','text-service1-price': 'Ab 600 € <span class="accent">(Begrenztes Angebot)</span>','text-service2-title': 'Google Unternehmensprofil','text-service2-desc': 'Vollständige Einrichtung und Optimierung für lokale Suchsichtbarkeit. Lassen Sie sich von Kunden in Ihrer Nähe finden.','text-service2-price': 'Ab 150 €','text-service3-title': 'Soziale Medien','text-service3-desc': 'Ansprechende Social-Media-Inhalte und -Management zum Aufbau Ihrer Online-Community.','text-service3-price': 'Ab 250 €/Monat','text-service4-title': 'Logo & Branding','text-service4-desc': 'Professionelles Logo-Design und Markenidentität, die Ihr Unternehmen hervorheben.','text-service4-price': 'Ab 300 €','text-services-quote-btn': 'Individuelles Angebot','text-pain-title': 'Kämpfen Sie mit Ihrer Online-Präsenz?','text-pain-subtitle': 'Wir verstehen die Herausforderungen lokaler Unternehmen','text-pain1-title': 'Keine Zeit, alles zu verwalten','text-pain1-desc': 'Zwischen der Führung Ihres Unternehmens und der Verwaltung digitaler Plattformen bleibt nie genug Zeit. Wir kümmern uns um alles, damit Sie sich auf das konzentrieren können, was Sie am besten können.','text-pain2-title': 'Zu teuer, Spezialisten zu engagieren','text-pain2-desc': 'Die Einstellung separater Experten für Website, SEO und Social Media ist kostspielig. Wir bieten all diese Dienstleistungen in einem erschwinglichen Paket für lokale Unternehmen.','text-pain3-title': 'Nicht genug Online-Kunden','text-pain3-desc': 'Wenn Ihre Website keine Kunden bringt, entgehen Ihnen Einnahmen. Wir schaffen effektive Online-Präsenzen, die Besucher anziehen und konvertieren.','text-portfolio-title': 'Unsere Aktuellen Arbeiten','text-portfolio-subtitle': 'Echte Ergebnisse für echte Unternehmen','text-portfolio1-overlay-title': 'Carwash Gouden Kruispunt','text-portfolio1-overlay-desc': 'Komplette Website und Buchungssystem','text-portfolio-view-site': 'Seite ansehen','text-portfolio1-title': 'Carwash Tielt-Winge','text-portfolio1-desc': 'Professionelle Website mit integriertem Buchungssystem, Google Business-Optimierung und lokaler SEO für verbesserte Sichtbarkeit im Raum Tielt-Winge.','text-portfolio1-tag1': 'Webdesign','text-portfolio1-tag2': 'Buchungssystem','text-portfolio1-tag3': 'Lokales SEO','text-portfolio2-overlay-title': 'African Shop Menen','text-portfolio2-overlay-desc': 'E-Commerce-Lösung mit mehrsprachiger Unterstützung','text-portfolio-view-site2': 'Seite ansehen','text-portfolio2-title': 'African Shop Menen','text-portfolio2-desc': 'Zweisprachige E-Commerce-Website mit WhatsApp-Integration, Produktkatalog und lokalen Lieferoptionen für authentische afrikanische Produkte.','text-portfolio2-tag1': 'E-Commerce','text-portfolio2-tag2': 'Mehrsprachig','text-portfolio2-tag3': 'WhatsApp-Integration','text-portfolio-cta-btn': 'Starten Sie Ihr Projekt','text-faq-title': 'Häufig Gestellte Fragen','text-faq1-q': 'Warum ist eine professionelle Website für mein lokales Unternehmen wichtig?','text-faq1-a': 'Eine professionelle Website ist Ihr digitales Schaufenster, das rund um die Uhr geöffnet ist. Sie schafft Vertrauen bei Kunden, präsentiert Ihre Dienstleistungen und erleichtert die Kontaktaufnahme, was direkt zu mehr Geschäft führt.','text-faq2-q': 'Wie lange dauert es, bis meine Website online ist?','text-faq2-a': 'Wir legen Wert auf Schnelligkeit. Normalerweise ist eine komplette One-Page-Website innerhalb von 7 bis 14 Tagen live und bereit, Kunden zu gewinnen, nachdem wir Ihre Geschäftsinformationen erhalten haben.','text-faq3-q': 'Funktioniert meine Website auf Mobiltelefonen?','text-faq3-a': 'Absolut. Jede von uns erstellte Website ist vollständig responsiv, was bedeutet, dass sie auf allen Geräten, einschließlich Desktops, Tablets und Smartphones, perfekt aussieht und funktioniert.','text-faq4-q': 'Was ist ein Google Unternehmensprofil und warum brauche ich es?','text-faq4-a': 'Es ist das leistungsstärkste kostenlose Tool für lokale Unternehmen. Es ermöglicht Ihnen, auf Google Maps und in lokalen Suchergebnissen zu erscheinen. Ein gut optimiertes Profil bringt Kunden direkt zu Ihnen.','text-faq5-q': 'Ich bin kein technisch versierter Mensch. Ist der Prozess kompliziert?','text-faq5-a': 'Überhaupt nicht. Wir kümmern uns um alles für Sie. Unser Prozess ist einfach: Wir besprechen Ihre Bedürfnisse, Sie liefern die Geschäftsdetails, und wir erstellen Ihre komplette Online-Präsenz.','text-faq6-q': 'Können Sie die Website in mehreren Sprachen erstellen?','text-faq6-a': 'Ja, das ist eine unserer Spezialitäten. Wir können Ihre Website auf Niederländisch, Französisch, Deutsch und Englisch erstellen, um sicherzustellen, dass Sie jeden Kunden in Ihrer Region bedienen können.','text-faq7-q': 'Gibt es versteckte monatliche Gebühren für die Website?','text-faq7-a': 'Das Webdesign ist eine einmalige Zahlung. Die einzigen weiteren Kosten sind für Ihren Domainnamen (z.B. www.meinbusiness.be) und das Hosting, was geringe jährliche Gebühren an einen Drittanbieter sind. Wir helfen Ihnen, dies transparent einzurichten.','text-faq8-q': 'Ich habe bereits ein Logo. Können Sie es verwenden?','text-faq8-a': 'Selbstverständlich. Wir werden das Design und Branding Ihrer Website um Ihr bestehendes Logo herum aufbauen, um die Markenkonsistenz zu gewährleisten.','text-faq9-q': 'Was benötigen Sie von mir, um anzufangen?','text-faq9-a': 'Zu Beginn benötigen wir nur ein Gespräch über Ihr Unternehmen, Ihre Dienstleistungen und Ihre Ziele. Wir benötigen auch alle Texte oder Fotos, die Sie einfügen möchten. Wir begleiten Sie bei jedem Schritt.','text-faq10-q': 'Warum sollte ich Sie anstelle einer großen Agentur wählen?','text-faq10-a': 'Wir sind auf erschwingliche, wirkungsvolle Lösungen speziell für belgische lokale Unternehmen spezialisiert. Sie erhalten einen persönlichen, schnellen und engagierten Service, der darauf ausgelegt ist, Ihnen mehr Kunden zu verschaffen, ohne die hohen Agenturgebühren.','text-areas-title': 'Im Dienst für lokale Unternehmen in ganz Belgien','text-areas-subtitle': 'Spezialisiert auf die Unterstützung von Unternehmen in diesen Bereichen','text-area1-title': 'Beringen','text-area1-desc': 'Haupt-Servicebereich mit lokalem Fachwissen','text-area2-title': 'Provinz Limburg','text-area2-desc': 'Erweiterte Abdeckung in der gesamten Region','text-area3-title': 'Hasselt','text-area3-desc': 'Abdeckung wichtiger Geschäftszentren','text-area4-title': 'Genk','text-area4-desc': 'Industrieller und kommerzieller Fokus','text-areas-note': 'Wir betreuen Unternehmen in ganz Belgien - egal, wo Sie sich befinden! ','text-areas-contact-link': 'Kontaktieren Sie uns','text-why-title': 'Warum lokale Unternehmen uns wählen','text-feature1-title': 'Komplettpaket','text-feature1-desc': 'Alles, was Sie für den digitalen Erfolg benötigen, an einem Ort - Website, Google Business, Social Media und mehr','text-feature2-title': 'Lokale Expertise','text-feature2-desc': 'Tiefes Verständnis der belgischen Geschäftslandschaft und des Verbraucherverhaltens','text-feature3-title': 'Schnelle Lieferung','text-feature3-desc': 'Schnelle Umsetzung ohne Qualitätseinbußen - in Tagen online, nicht in Wochen','text-feature4-title': 'Mehrsprachige Unterstützung','text-feature4-desc': 'Wir erstellen Websites in mehreren Sprachen, um Ihnen zu helfen, vielfältige Zielgruppen in ganz Belgien zu erreichen','text-cta-title': 'Bereit, Ihre digitale Präsenz zu transformieren?','text-cta-subtitle': 'Schließen Sie sich erfolgreichen belgischen Unternehmen an, die uns ihr Online-Wachstum anvertrauen','text-cta-quote-btn': 'Kostenloses Angebot anfordern','text-cta-contact-btn': 'Beratung buchen','text-footer-brand': 'Make Website <span class="accent">On Demand</span>','text-footer-brand-desc': 'Ihr zuverlässiger Partner für komplette digitale Lösungen in Belgien','text-footer-col1-title': 'Leistungen','text-footer-service1': 'Webdesign','text-footer-service2': 'Google Business Einrichtung','text-footer-service3': 'Social Media Management','text-footer-service4': 'Logo Design','text-footer-col2-title': 'Unternehmen','text-footer-company1': 'Portfolio','text-footer-company2': 'Preise','text-footer-company3': 'Kontakt','text-footer-col3-title': 'Kontaktinformationen','text-footer-copyright': '&copy; 2024 Make Website On Demand. Alle Rechte vorbehalten.','text-footer-privacy': 'Datenschutzrichtlinie','text-footer-terms': 'Nutzungsbedingungen','text-footer-cookies': 'Cookie-Richtlinie','text-quote-title-modal': 'Ein individuelles Angebot anfordern',
'text-step1-title': 'Welche Dienstleistungen benötigen Sie?',
'text-service-website-title': 'Webdesign',
'text-service-website-desc': 'Professionelle responsive Website',
'text-service-website-price': 'Ab 600 €',
'text-service-google-title': 'Google Business',
'text-service-google-desc': 'Einrichtung & Optimierung',
'text-service-google-price': 'Ab 150 €',
'text-service-social-title': 'Soziale Medien',
'text-service-social-desc': 'Verwaltung & Inhalt',
'text-service-social-price': 'Ab 250 €/Monat',
'text-service-logo-title': 'Logo Design',
'text-service-logo-desc': 'Professionelles Branding',
'text-service-logo-price': 'Ab 300 €',
'text-next-btn': 'Weiter',
'text-next-btn2': 'Weiter',
'text-step2-title': 'Domain-Registrierung',
'text-domain-desc': 'Sichern Sie Ihren Firmennamen online mit einer professionellen Domain. Wählen Sie den gewünschten Registrierungszeitraum und wir kümmern uns um den Rest!',
'text-table-header-duration': 'Dauer',
'text-table-header-price': 'Preis/Jahr',
'text-table-header-total': 'Gesamt',
'text-domain-1y': '1 Jahr',
'text-domain-2y': '2 Jahre',
'text-domain-5y': '5 Jahre',
'text-best-value': '(Bestes Preis-Leistungs-Verhältnis)',
'text-domain-10y': '10 Jahre',
'text-select-period-label': 'Registrierungszeitraum auswählen',
'text-prev-btn': 'Zurück',
'text-prev-btn2': 'Zurück',
'text-step3-title': 'Fast fertig! Teilen Sie Ihre Details',
'text-summary-title': 'Ihre Angebotszusammenfassung',
'text-summary-services-label': 'Ausgewählte Dienstleistungen:',
'text-summary-domain-label': 'Domain-Registrierung:',
'text-summary-total-label': 'Gesamtinvestition:',
'text-contact-name-label-q': 'Ihr Name',
'text-contact-email-label-q': 'E-Mail-Addresse',
'text-business-type-label': 'Welche Art von Geschäft haben Sie?',
'text-submit-quote-btn': 'Mein individuelles Angebot anfordern',
'text-quote-success-title': 'Vielen Dank!',
'text-quote-success-desc': 'Wir haben Ihre Anfrage erhalten und senden Ihnen innerhalb von 24 Stunden ein individuelles Angebot.',
'text-quote-success-close': 'Schließen','text-contact-title': 'Kontaktieren Sie uns','text-contact-subtitle': 'Haben Sie eine Frage? Wir freuen uns, von Ihnen zu hören.','text-contact-name-label': 'Ihr Name','text-contact-email-label': 'E-Mail-Addresse','text-contact-message-label': 'Ihre Nachricht','text-contact-submit-btn': 'Nachricht Senden','text-contact-success-title': 'Nachricht Gesendet!','text-contact-success-desc': 'Wir melden uns innerhalb von 24 Stunden bei Ihnen.','text-contact-success-close': 'Schließen','text-privacy-title': 'Datenschutzrichtlinie','text-privacy-updated': 'Zuletzt aktualisiert: Januar 2024','text-privacy-h1': '1. Einleitung','text-privacy-p1': 'Willkommen bei Make Website On Demand. Wir verpflichten uns, Ihre persönlichen Daten und Ihr Recht auf Privatsphäre zu schützen. Diese Datenschutzrichtlinie erklärt, wie wir Ihre persönlichen Daten sammeln, verwenden und teilen, wenn Sie unsere Dienste nutzen.','text-privacy-h2': '2. Informationen, die wir sammeln','text-privacy-p2': 'Wir sammeln persönliche Daten, die Sie uns zur Verfügung stellen, einschließlich: Name und Kontaktinformationen (E-Mail-Adresse, Telefonnummer), Geschäftsinformationen, Projektanforderungen und Präferenzen sowie Kommunikationspräferenzen.','text-privacy-h3': '3. Wie wir Ihre Informationen verwenden','text-privacy-p3': 'Wir verwenden die gesammelten Informationen, um: unsere Dienstleistungen bereitzustellen, zu betreiben und zu warten, Ihre Anfragen und Transaktionen zu bearbeiten, mit Ihnen über unsere Dienstleistungen zu kommunizieren und unsere Website und Dienstleistungen zu verbessern.','text-privacy-h4': '4. Datensicherheit','text-privacy-p4': 'Wir implementieren angemessene Sicherheitsmaßnahmen, um Ihre persönlichen Daten vor unbefugtem Zugriff, Änderung oder Offenlegung zu schützen.','text-privacy-h5': '5. Ihre Rechte','text-privacy-p5': 'Sie haben das Recht, auf Ihre persönlichen Daten zuzugreifen, diese zu korrigieren oder zu löschen. Kontaktieren Sie uns unter info@makewebsiteondemand.be, um diese Rechte auszuüben.','text-privacy-close': 'Schließen','text-terms-title': 'Nutzungsbedingungen','text-terms-updated': 'Zuletzt aktualisiert: Januar 2024','text-terms-h1': '1. Zustimmung zu den Bedingungen','text-terms-p1': 'Durch die Nutzung unserer Dienste erklären Sie sich mit diesen Nutzungsbedingungen einverstanden. Wenn Sie diesen Bedingungen nicht zustimmen, nutzen Sie unsere Dienste bitte nicht.','text-terms-h2': '2. Dienstleistungen','text-terms-p2': 'Wir bieten Webdesign-, Entwicklungs- und digitales Marketingdienstleistungen an, wie auf unserer Website beschrieben. Alle Dienstleistungen unterliegen diesen Bedingungen.','text-terms-h3': '3. Zahlungsbedingungen','text-terms-p3': 'Die Zahlungsbedingungen werden in Ihrem Projektvorschlag festgelegt. Typischerweise benötigen wir eine Anzahlung von 50 % zur Aufnahme der Arbeit, der Restbetrag ist nach Projektabschluss fällig.','text-terms-h4': '4. Verantwortlichkeiten des Kunden','text-terms-p4': 'Kunden sind dafür verantwortlich, alle notwendigen Inhalte, Bilder und Informationen rechtzeitig bereitzustellen, um den Projektfortschritt zu gewährleisten.','text-terms-h5': '5. Haftungsbeschränkung','text-terms-p5': 'Unsere Haftung ist auf den für unsere Dienstleistungen gezahlten Betrag beschränkt. Wir haften nicht für indirekte oder Folgeschäden.','text-terms-close': 'Schließen','text-cookies-title': 'Cookie-Richtlinie','text-cookies-updated': 'Zuletzt aktualisiert: Januar 2024','text-cookies-h1': '1. Was sind Cookies','text-cookies-p1': 'Cookies sind kleine Textdateien, die auf Ihrem Gerät platziert werden, wenn Sie unsere Website besuchen. Sie werden verwendet, um Websites effizient zu betreiben und den Websitebetreibern Informationen bereitzustellen.','text-cookies-h2': '2. Wie wir Cookies verwenden','text-cookies-p2': 'Wir verwenden Cookies für verschiedene Zwecke, einschließlich wesentlicher Operationen, Performance-Analysen und Funktionalitäts-Personalisierung.','text-cookies-h3': '3. Cookies verwalten','text-cookies-p3': 'Sie können Cookies über Ihre Browsereinstellungen steuern und verwalten. Bitte beachten Sie, dass das Blockieren von Cookies Ihre Benutzererfahrung beeinträchtigen kann.','text-cookies-h4': '4. Kontaktieren Sie uns','text-cookies-p4': 'Wenn Sie Fragen zu unserer Cookie-Richtlinie haben, kontaktieren Sie uns bitte unter info@makewebsiteondemand.be.','text-cookies-close': 'Schließen','text-contact-validation-all-fields': 'Bitte füllen Sie alle erforderlichen Felder aus.','text-contact-validation-email': 'Bitte geben Sie eine gültige E-Mail-Adresse ein.','text-form-submit-error': 'Beim Absenden Ihres Formulars ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.'
        }
    };

    function applyTranslations(lang) {
        const currentLangTranslations = translations[lang];
        if (!currentLangTranslations) return;
        for (let id in currentLangTranslations) {
            const element = document.getElementById(id);
            if (element) {
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
                    faqItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.querySelector(".faq-question").classList.remove("active");
                            otherItem.querySelector(".faq-answer").style.maxHeight = null;
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

    // --- START: QUOTE FORM LOGIC - Helper for updating summary ---
    let updateQuoteSummary; // Declare it in a scope accessible to initFormSubmission

    function initQuoteForm() {
        const quoteModal = document.getElementById("quoteModal");
        if (!quoteModal) return;

        const nextButtons = quoteModal.querySelectorAll(".btn-next");
        const prevButtons = quoteModal.querySelectorAll(".btn-prev");
        const quoteStepsIndicators = quoteModal.querySelectorAll(".quote-step");
        const steps = quoteModal.querySelectorAll(".step");
        const serviceOptions = quoteModal.querySelectorAll('.service-option');
        const domainYearsSelect = quoteModal.querySelector("#domainYears");

        // Define updateQuoteSummary here, so it's ready when initFormSubmission uses it
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
        
        // Initial call to set up the summary on load
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
            button.addEventListener("click", () => {
                const nextStep = parseInt(button.dataset.next);
                goToStep(nextStep);
            });
        });

        prevButtons.forEach(button => {
            button.addEventListener("click", () => {
                const prevStep = parseInt(button.dataset.prev);
                goToStep(prevStep);
            });
        });
    }
    // --- END: QUOTE FORM LOGIC ---

    function initFormSubmission() {
        document.querySelectorAll("#quoteForm, #contactForm").forEach(form => {
            form.addEventListener("submit", function(event) {
                event.preventDefault();

                // --- START: Add language parameter before submission ---
                const currentLang = document.getElementById('current-lang').textContent.toLowerCase();
                if (form.id === 'quoteForm') {
                    const langInput = form.querySelector('#quoteFormLanguage');
                    if (langInput) langInput.value = currentLang;
                } else if (form.id === 'contactForm') {
                    const langInput = form.querySelector('#contactFormLanguage');
                    if (langInput) langInput.value = currentLang;
                }
                // --- END: Add language parameter ---

                let isValid = true;
                // --- START: Client-side validation logic ---
                // Reset all error messages initially
                document.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');

                if (form.id === 'quoteForm') {
                    const nameInput = document.getElementById('quoteContactName');
                    const emailInput = document.getElementById('quoteContactEmail');
                    const nameError = document.getElementById('quoteContactNameError');
                    const emailError = document.getElementById('quoteContactEmailError');

                    if (nameInput.value.trim() === '') {
                        nameError.style.display = 'block';
                        isValid = false;
                    }
                    if (!emailInput.value.trim() || !/\S+@\S+\.\S+/.test(emailInput.value.trim())) {
                        emailError.style.display = 'block';
                        isValid = false;
                    }
                } else if (form.id === 'contactForm') {
                    const nameInput = document.getElementById('contactName');
                    const emailInput = document.getElementById('contactEmail');
                    const messageInput = document.getElementById('contactMessage');
                    const nameError = document.getElementById('contactFormNameError');
                    const emailError = document.getElementById('contactFormEmailError');
                    const messageError = document.getElementById('contactFormMessageError');

                    if (nameInput.value.trim() === '') {
                        nameError.style.display = 'block';
                        isValid = false;
                    }
                    if (!emailInput.value.trim() || !/\S+@\S+\.\S+/.test(emailInput.value.trim())) {
                        emailError.style.display = 'block';
                        isValid = false;
                    }
                    if (messageInput.value.trim() === '') {
                        messageError.style.display = 'block';
                        isValid = false;
                    }
                }
                // --- END client-side validation ---

                if (!isValid) return; // Stop if validation fails

                const SCRIPT_URL = form.getAttribute('action'); // Get URL dynamically from form's action attribute

                if (SCRIPT_URL.startsWith("<!--") || !SCRIPT_URL || SCRIPT_URL.includes("ADD YOUR GOOGLE APPS SCRIPT URL HERE")) {
                    console.error("Form submission failed: Google Apps Script URL is not configured for form:", form.id);
                    const currentLang = document.getElementById('current-lang').textContent.toLowerCase();
                    alert(translations[currentLang]['text-form-submit-error'] || translations['en']['text-form-submit-error'] + " (URL not configured)");
                    return;
                }

                const modalContent = form.closest('.modal-content');
                const spinner = modalContent.querySelector('.loading-spinner');
                const successView = modalContent.querySelector('.booking-success');
                
                form.style.display = 'none';
                spinner.style.display = 'block';

                fetch(SCRIPT_URL, {
                    method: 'POST',
                    mode: 'no-cors', // Important for cross-origin submission to Apps Script
                    body: new FormData(form)
                })
                .then(() => {
                    spinner.style.display = 'none';
                    successView.style.display = 'block';

                    // Update success message text based on form type and current language
                    const currentLang = document.getElementById('current-lang').textContent.toLowerCase();
                    const successTitleElement = successView.querySelector('h3');
                    const successDescElement = successView.querySelector('p');
                    const successCloseBtn = successView.querySelector('.modal-close-btn');

                    if (form.id === 'quoteForm') {
                        successTitleElement.textContent = translations[currentLang]['text-quote-success-title'] || translations['en']['text-quote-success-title'];
                        successDescElement.textContent = translations[currentLang]['text-quote-success-desc'] || translations['en']['text-quote-success-desc'];
                        successCloseBtn.textContent = translations[currentLang]['text-quote-success-close'] || translations['en']['text-quote-success-close'];
                    } else if (form.id === 'contactForm') {
                        successTitleElement.textContent = translations[currentLang]['text-contact-success-title'] || translations['en']['text-contact-success-title'];
                        successDescElement.textContent = translations[currentLang]['text-contact-success-desc'] || translations['en']['text-contact-success-desc'];
                        successCloseBtn.textContent = translations[currentLang]['text-contact-success-close'] || translations['en']['text-contact-success-close'];
                    }
                    
                    form.reset(); // Reset the form fields
                    // If it's the quote form, reset steps and selections
                    if (form.id === 'quoteForm') {
                        const quoteModalElement = document.getElementById("quoteModal");
                        const steps = quoteModalElement.querySelectorAll(".step");
                        const quoteStepsIndicators = quoteModalElement.querySelectorAll(".quote-step");
                        const serviceOptions = quoteModalElement.querySelectorAll('.service-option');
                        const domainYearsSelect = quoteModalElement.querySelector("#domainYears");

                        steps.forEach((step, index) => {
                            step.classList.remove('active');
                            if (index === 0) step.classList.add('active'); // Activate first step
                        });
                        quoteStepsIndicators.forEach((indicator, index) => {
                            indicator.classList.remove('active');
                            if (index === 0) indicator.classList.add('active'); // Activate first indicator
                        });
                        serviceOptions.forEach(option => option.classList.remove('selected'));
                        domainYearsSelect.value = "5"; // Reset to default value (5 Years)
                        
                        // Call the defined updateQuoteSummary
                        if (typeof updateQuoteSummary === 'function') {
                            updateQuoteSummary();
                        }
                    }
                })
                .catch(error => {
                    console.error('Error during fetch:', error);
                    const currentLang = document.getElementById('current-lang').textContent.toLowerCase();
                    alert(translations[currentLang]['text-form-submit-error'] || translations['en']['text-form-submit-error']);
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
        initQuoteForm(); // This call should now find the definition
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
</script>

