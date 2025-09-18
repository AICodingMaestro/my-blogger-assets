<script defer>
    // --- TRANSLATIONS & LANGUAGE SWITCHER ---
    const translations = {
        'en': {
            'text-nav-home':'',
            'text-nav-services':'',
            'text-nav-portfolio':'',
            'text-nav-faq':'',
            'text-nav-get-quote':'',
            'text-nav-contact':'',
            'text-hero-title':'<span class="accent"></span>',
            'text-hero-subtitle':'',
            'text-hero-description':'',
            'text-hero-quote-btn':'',
            'text-hero-portfolio-btn':'',
            'text-hero-scroll':'',
            'text-services-title':'',
            'text-services-subtitle':'',
            'text-service1-title':'',
            'text-service1-desc':'',
            'text-service1-price':'<span class="accent"></span>',
            'text-service2-title':'',
            'text-service2-desc':'',
            'text-service2-price':'',
            'text-service3-title':'',
            'text-service3-desc':'',
            'text-service3-price':'',
            'text-service4-title':'',
            'text-service4-desc':'',
            'text-service4-price':'',
            'text-services-quote-btn':'',
            'text-pain-title':'',
            'text-pain-subtitle':'',
            'text-pain1-title':'',
            'text-pain1-desc':'',
            'text-pain2-title':'',
            'text-pain2-desc':'',
            'text-pain3-title':'',
            'text-pain3-desc':'',
            'text-portfolio-title':'',
            'text-portfolio-subtitle':'',
            'text-portfolio1-overlay-title':'',
            'text-portfolio1-overlay-desc':'',
            'text-portfolio-view-site':'',
            'text-portfolio1-title':'',
            'text-portfolio1-desc':'',
            'text-portfolio1-tag1':'',
            'text-portfolio1-tag2':'',
            'text-portfolio1-tag3':'',
            'text-portfolio2-overlay-title':'',
            'text-portfolio2-overlay-desc':'',
            'text-portfolio-view-site2':'',
            'text-portfolio2-title':'',
            'text-portfolio2-desc':'',
            'text-portfolio2-tag1':'',
            'text-portfolio2-tag2':'',
            'text-portfolio2-tag3':'',
            'text-portfolio-cta-btn':'',
            'text-faq-title':'',
            'text-faq1-q':'',
            'text-faq1-a':'',
            'text-faq2-q':'',
            'text-faq2-a':'',
            'text-faq3-q':'',
            'text-faq3-a':'',
            'text-faq4-q':'',
            'text-faq4-a':'',
            'text-faq5-q':'',
            'text-faq5-a':'',
            'text-faq6-q':'',
            'text-faq6-a':'',
            'text-faq7-q':'',
            'text-faq7-a':'',
            'text-faq8-q':'',
            'text-faq8-a':'',
            'text-faq9-q':'',
            'text-faq9-a':'',
            'text-faq10-q':'',
            'text-faq10-a':'',
            'text-areas-title':'',
            'text-areas-subtitle':'',
            'text-area1-title':'',
            'text-area1-desc':'',
            'text-area2-title':'',
            'text-area2-desc':'',
            'text-area3-title':'',
            'text-area3-desc':'',
            'text-area4-title':'',
            'text-area4-desc':'',
            'text-areas-note':'',
            'text-areas-contact-link':'',
            'text-why-title':'',
            'text-feature1-title':'',
            'text-feature1-desc':'',
            'text-feature2-title':'',
            'text-feature2-desc':'',
            'text-feature3-title':'',
            'text-feature3-desc':'',
            'text-feature4-title':'',
            'text-feature4-desc':'',
            'text-cta-title':'',
            'text-cta-subtitle':'',
            'text-cta-quote-btn':'',
            'text-cta-contact-btn':'',
            'text-footer-brand':'<span class="accent"></span>',
            'text-footer-brand-desc':'',
            'text-footer-col1-title':'',
            'text-footer-service1':'',
            'text-footer-service2':'',
            'text-footer-service3':'',
            'text-footer-service4':'',
            'text-footer-col2-title':'',
            'text-footer-company1':'',
            'text-footer-company2':'',
            'text-footer-company3':'',
            'text-footer-col3-title':'',
            'text-footer-copyright':'',
            'text-footer-privacy':'',
            'text-footer-terms':'',
            'text-footer-cookies':'',
            'text-quote-title-modal': '',
            'text-step1-title': '',
            'text-service-website-title': '',
            'text-service-website-desc': '',
            'text-service-website-price': '',
            'text-service-google-title': '',
            'text-service-google-desc': '',
            'text-service-google-price': '',
            'text-service-social-title': '',
            'text-service-social-desc': '',
            'text-service-social-price': '',
            'text-service-logo-title': '',
            'text-service-logo-desc': '',
            'text-service-logo-price': '',
            'text-next-btn': '',
            'text-next-btn2': '',
            'text-step2-title': '',
            'text-domain-desc': '',
            'text-table-header-duration': '',
            'text-table-header-price': '',
            'text-table-header-total': '',
            'text-domain-1y': '',
            'text-domain-2y': '',
            'text-domain-5y': '',
            'text-best-value': '',
            'text-domain-10y': '',
            'text-select-period-label': '',
            'text-prev-btn': '',
            'text-prev-btn2': '',
            'text-step3-title': '',
            'text-summary-title': '',
            'text-summary-services-label': '',
            'text-summary-domain-label': '',
            'text-summary-total-label': '',
            'text-contact-name-label-q': '',
            'text-contact-email-label-q': '',
            'text-business-type-label': '',
            'text-submit-quote-btn': '',
            'text-quote-success-title': '',
            'text-quote-success-desc': '',
            'text-quote-success-close': '',
            'text-contact-title':'',
            'text-contact-subtitle':'',
            'text-contact-name-label':'',
            'text-contact-email-label':'',
            'text-contact-message-label':'',
            'text-contact-submit-btn':'',
            'text-contact-success-title':'',
            'text-contact-success-desc':'',
            'text-contact-success-close':'',
            'text-privacy-title':'',
            'text-privacy-updated':'',
            'text-privacy-h1':'',
            'text-privacy-p1':'',
            'text-privacy-h2':'',
            'text-privacy-p2':'',
            'text-privacy-h3':'',
            'text-privacy-p3':'',
            'text-privacy-h4':'',
            'text-privacy-p4':'',
            'text-privacy-h5':'',
            'text-privacy-p5':'',
            'text-privacy-close':'',
            'text-terms-title':'',
            'text-terms-updated':'',
            'text-terms-h1':'',
            'text-terms-p1':'',
            'text-terms-h2':'',
            'text-terms-p2':'',
            'text-terms-h3':'',
            'text-terms-p3':'',
            'text-terms-h4':'',
            'text-terms-p4':'',
            'text-terms-h5':'',
            'text-terms-p5':'',
            'text-terms-close':'',
            'text-cookies-title':'',
            'text-cookies-updated':'',
            'text-cookies-h1':'',
            'text-cookies-p1':'',
            'text-cookies-h2':'',
            'text-cookies-p2':'',
            'text-cookies-h3':'',
            'text-cookies-p3':'',
            'text-cookies-h4':'',
            'text-cookies-p4':'',
            'text-cookies-close':'',
            'text-contact-validation-all-fields': '',
            'text-contact-validation-email': '',
            'text-form-submit-error': ''
        },
        'fr': {
            'text-nav-home':'',
            'text-nav-services':'',
            'text-nav-portfolio':'',
            'text-nav-faq':'',
            'text-nav-get-quote':'',
            'text-nav-contact':'',
            'text-hero-title':'<span class="accent"></span>',
            'text-hero-subtitle':'',
            'text-hero-description':'',
            'text-hero-quote-btn':'',
            'text-hero-portfolio-btn':'',
            'text-hero-scroll':'',
            'text-services-title':'',
            'text-services-subtitle':'',
            'text-service1-title':'',
            'text-service1-desc':'',
            'text-service1-price':'<span class="accent"></span>',
            'text-service2-title':'',
            'text-service2-desc':'',
            'text-service2-price':'',
            'text-service3-title':'',
            'text-service3-desc':'',
            'text-service3-price':'',
            'text-service4-title':'',
            'text-service4-desc':'',
            'text-service4-price':'',
            'text-services-quote-btn':'',
            'text-pain-title':'',
            'text-pain-subtitle':'',
            'text-pain1-title':'',
            'text-pain1-desc':'',
            'text-pain2-title':'',
            'text-pain2-desc':'',
            'text-pain3-title':'',
            'text-pain3-desc':'',
            'text-portfolio-title':'',
            'text-portfolio-subtitle':'',
            'text-portfolio1-overlay-title':'',
            'text-portfolio1-overlay-desc':'',
            'text-portfolio-view-site':'',
            'text-portfolio1-title':'',
            'text-portfolio1-desc':'',
            'text-portfolio1-tag1':'',
            'text-portfolio1-tag2':'',
            'text-portfolio1-tag3':'',
            'text-portfolio2-overlay-title':'',
            'text-portfolio2-overlay-desc':'',
            'text-portfolio-view-site2':'',
            'text-portfolio2-title':'',
            'text-portfolio2-desc':'',
            'text-portfolio2-tag1':'',
            'text-portfolio2-tag2':'',
            'text-portfolio2-tag3':'',
            'text-portfolio-cta-btn':'',
            'text-faq-title':'',
            'text-faq1-q':'',
            'text-faq1-a':'',
            'text-faq2-q':'',
            'text-faq2-a':'',
            'text-faq3-q':'',
            'text-faq3-a':'',
            'text-faq4-q':'',
            'text-faq4-a':'',
            'text-faq5-q':'',
            'text-faq5-a':'',
            'text-faq6-q':'',
            'text-faq6-a':'',
            'text-faq7-q':'',
            'text-faq7-a':'',
            'text-faq8-q':'',
            'text-faq8-a':'',
            'text-faq9-q':'',
            'text-faq9-a':'',
            'text-faq10-q':'',
            'text-faq10-a':'',
            'text-areas-title':'',
            'text-areas-subtitle':'',
            'text-area1-title':'',
            'text-area1-desc':'',
            'text-area2-title':'',
            'text-area2-desc':'',
            'text-area3-title':'',
            'text-area3-desc':'',
            'text-area4-title':'',
            'text-area4-desc':'',
            'text-areas-note':'',
            'text-areas-contact-link':'',
            'text-why-title':'',
            'text-feature1-title':'',
            'text-feature1-desc':'',
            'text-feature2-title':'',
            'text-feature2-desc':'',
            'text-feature3-title':'',
            'text-feature3-desc':'',
            'text-feature4-title':'',
            'text-feature4-desc':'',
            'text-cta-title':'',
            'text-cta-subtitle':'',
            'text-cta-quote-btn':'',
            'text-cta-contact-btn':'',
            'text-footer-brand':'<span class="accent"></span>',
            'text-footer-brand-desc':'',
            'text-footer-col1-title':'',
            'text-footer-service1':'',
            'text-footer-service2':'',
            'text-footer-service3':'',
            'text-footer-service4':'',
            'text-footer-col2-title':'',
            'text-footer-company1':'',
            'text-footer-company2':'',
            'text-footer-company3':'',
            'text-footer-col3-title':'',
            'text-footer-copyright':'',
            'text-footer-privacy':'',
            'text-footer-terms':'',
            'text-footer-cookies':'',
            'text-quote-title-modal': '',
            'text-step1-title': '',
            'text-service-website-title': '',
            'text-service-website-desc': '',
            'text-service-website-price': '',
            'text-service-google-title': '',
            'text-service-google-desc': '',
            'text-service-google-price': '',
            'text-service-social-title': '',
            'text-service-social-desc': '',
            'text-service-social-price': '',
            'text-service-logo-title': '',
            'text-service-logo-desc': '',
            'text-service-logo-price': '',
            'text-next-btn': '',
            'text-next-btn2': '',
            'text-step2-title': '',
            'text-domain-desc': '',
            'text-table-header-duration': '',
            'text-table-header-price': '',
            'text-table-header-total': '',
            'text-domain-1y': '',
            'text-domain-2y': '',
            'text-domain-5y': '',
            'text-best-value': '',
            'text-domain-10y': '',
            'text-select-period-label': '',
            'text-prev-btn': '',
            'text-prev-btn2': '',
            'text-step3-title': '',
            'text-summary-title': '',
            'text-summary-services-label': '',
            'text-summary-domain-label': '',
            'text-summary-total-label': '',
            'text-contact-name-label-q': '',
            'text-contact-email-label-q': '',
            'text-business-type-label': '',
            'text-submit-quote-btn': '',
            'text-quote-success-title': '',
            'text-quote-success-desc': '',
            'text-quote-success-close': '',
            'text-contact-title':'',
            'text-contact-subtitle':'',
            'text-contact-name-label':'',
            'text-contact-email-label':'',
            'text-contact-message-label':'',
            'text-contact-submit-btn':'',
            'text-contact-success-title':'',
            'text-contact-success-desc':'',
            'text-contact-success-close':'',
            'text-privacy-title':'',
            'text-privacy-updated':'',
            'text-privacy-h1':'',
            'text-privacy-p1':'',
            'text-privacy-h2':'',
            'text-privacy-p2':'',
            'text-privacy-h3':'',
            'text-privacy-p3':'',
            'text-privacy-h4':'',
            'text-privacy-p4':'',
            'text-privacy-h5':'',
            'text-privacy-p5':'',
            'text-privacy-close':'',
            'text-terms-title':'',
            'text-terms-updated':'',
            'text-terms-h1':'',
            'text-terms-p1':'',
            'text-terms-h2':'',
            'text-terms-p2':'',
            'text-terms-h3':'',
            'text-terms-p3':'',
            'text-terms-h4':'',
            'text-terms-p4':'',
            'text-terms-h5':'',
            'text-terms-p5':'',
            'text-terms-close':'',
            'text-cookies-title':'',
            'text-cookies-updated':'',
            'text-cookies-h1':'',
            'text-cookies-p1':'',
            'text-cookies-h2':'',
            'text-cookies-p2':'',
            'text-cookies-h3':'',
            'text-cookies-p3':'',
            'text-cookies-h4':'',
            'text-cookies-p4':'',
            'text-cookies-close':'',
            'text-contact-validation-all-fields': '',
            'text-contact-validation-email': '',
            'text-form-submit-error': ''
        },
        'nl': {
            'text-nav-home':'',
            'text-nav-services':'',
            'text-nav-portfolio':'',
            'text-nav-faq':'',
            'text-nav-get-quote':'',
            'text-nav-contact':'',
            'text-hero-title':'<span class="accent"></span>',
            'text-hero-subtitle':'',
            'text-hero-description':'',
            'text-hero-quote-btn':'',
            'text-hero-portfolio-btn':'',
            'text-hero-scroll':'',
            'text-services-title':'',
            'text-services-subtitle':'',
            'text-service1-title':'',
            'text-service1-desc':'',
            'text-service1-price':'<span class="accent"></span>',
            'text-service2-title':'',
            'text-service2-desc':'',
            'text-service2-price':'',
            'text-service3-title':'',
            'text-service3-desc':'',
            'text-service3-price':'',
            'text-service4-title':'',
            'text-service4-desc':'',
            'text-service4-price':'',
            'text-services-quote-btn':'',
            'text-pain-title':'',
            'text-pain-subtitle':'',
            'text-pain1-title':'',
            'text-pain1-desc':'',
            'text-pain2-title':'',
            'text-pain2-desc':'',
            'text-pain3-title':'',
            'text-pain3-desc':'',
            'text-portfolio-title':'',
            'text-portfolio-subtitle':'',
            'text-portfolio1-overlay-title':'',
            'text-portfolio1-overlay-desc':'',
            'text-portfolio-view-site':'',
            'text-portfolio1-title':'',
            'text-portfolio1-desc':'',
            'text-portfolio1-tag1':'',
            'text-portfolio1-tag2':'',
            'text-portfolio1-tag3':'',
            'text-portfolio2-overlay-title':'',
            'text-portfolio2-overlay-desc':'',
            'text-portfolio-view-site2':'',
            'text-portfolio2-title':'',
            'text-portfolio2-desc':'',
            'text-portfolio2-tag1':'',
            'text-portfolio2-tag2':'',
            'text-portfolio2-tag3':'',
            'text-portfolio-cta-btn':'',
            'text-faq-title':'',
            'text-faq1-q':'',
            'text-faq1-a':'',
            'text-faq2-q':'',
            'text-faq2-a':'',
            'text-faq3-q':'',
            'text-faq3-a':'',
            'text-faq4-q':'',
            'text-faq4-a':'',
            'text-faq5-q':'',
            'text-faq5-a':'',
            'text-faq6-q':'',
            'text-faq6-a':'',
            'text-faq7-q':'',
            'text-faq7-a':'',
            'text-faq8-q':'',
            'text-faq8-a':'',
            'text-faq9-q':'',
            'text-faq9-a':'',
            'text-faq10-q':'',
            'text-faq10-a':'',
            'text-areas-title':'',
            'text-areas-subtitle':'',
            'text-area1-title':'',
            'text-area1-desc':'',
            'text-area2-title':'',
            'text-area2-desc':'',
            'text-area3-title':'',
            'text-area3-desc':'',
            'text-area4-title':'',
            'text-area4-desc':'',
            'text-areas-note':'',
            'text-areas-contact-link':'',
            'text-why-title':'',
            'text-feature1-title':'',
            'text-feature1-desc':'',
            'text-feature2-title':'',
            'text-feature2-desc':'',
            'text-feature3-title':'',
            'text-feature3-desc':'',
            'text-feature4-title':'',
            'text-feature4-desc':'',
            'text-cta-title':'',
            'text-cta-subtitle':'',
            'text-cta-quote-btn':'',
            'text-cta-contact-btn':'',
            'text-footer-brand':'<span class="accent"></span>',
            'text-footer-brand-desc':'',
            'text-footer-col1-title':'',
            'text-footer-service1':'',
            'text-footer-service2':'',
            'text-footer-service3':'',
            'text-footer-service4':'',
            'text-footer-col2-title':'',
            'text-footer-company1':'',
            'text-footer-company2':'',
            'text-footer-company3':'',
            'text-footer-col3-title':'',
            'text-footer-copyright':'',
            'text-footer-privacy':'',
            'text-footer-terms':'',
            'text-footer-cookies':'',
            'text-quote-title-modal': '',
            'text-step1-title': '',
            'text-service-website-title': '',
            'text-service-website-desc': '',
            'text-service-website-price': '',
            'text-service-google-title': '',
            'text-service-google-desc': '',
            'text-service-google-price': '',
            'text-service-social-title': '',
            'text-service-social-desc': '',
            'text-service-social-price': '',
            'text-service-logo-title': '',
            'text-service-logo-desc': '',
            'text-service-logo-price': '',
            'text-next-btn': '',
            'text-next-btn2': '',
            'text-step2-title': '',
            'text-domain-desc': '',
            'text-table-header-duration': '',
            'text-table-header-price': '',
            'text-table-header-total': '',
            'text-domain-1y': '',
            'text-domain-2y': '',
            'text-domain-5y': '',
            'text-best-value': '',
            'text-domain-10y': '',
            'text-select-period-label': '',
            'text-prev-btn': '',
            'text-prev-btn2': '',
            'text-step3-title': '',
            'text-summary-title': '',
            'text-summary-services-label': '',
            'text-summary-domain-label': '',
            'text-summary-total-label': '',
            'text-contact-name-label-q': '',
            'text-contact-email-label-q': '',
            'text-business-type-label': '',
            'text-submit-quote-btn': '',
            'text-quote-success-title': '',
            'text-quote-success-desc': '',
            'text-quote-success-close': '',
            'text-contact-title':'',
            'text-contact-subtitle':'',
            'text-contact-name-label':'',
            'text-contact-email-label':'',
            'text-contact-message-label':'',
            'text-contact-submit-btn':'',
            'text-contact-success-title':'',
            'text-contact-success-desc':'',
            'text-contact-success-close':'',
            'text-privacy-title':'',
            'text-privacy-updated':'',
            'text-privacy-h1':'',
            'text-privacy-p1':'',
            'text-privacy-h2':'',
            'text-privacy-p2':'',
            'text-privacy-h3':'',
            'text-privacy-p3':'',
            'text-privacy-h4':'',
            'text-privacy-p4':'',
            'text-privacy-h5':'',
            'text-privacy-p5':'',
            'text-privacy-close':'',
            'text-terms-title':'',
            'text-terms-updated':'',
            'text-terms-h1':'',
            'text-terms-p1':'',
            'text-terms-h2':'',
            'text-terms-p2':'',
            'text-terms-h3':'',
            'text-terms-p3':'',
            'text-terms-h4':'',
            'text-terms-p4':'',
            'text-terms-h5':'',
            'text-terms-p5':'',
            'text-terms-close':'',
            'text-cookies-title':'',
            'text-cookies-updated':'',
            'text-cookies-h1':'',
            'text-cookies-p1':'',
            'text-cookies-h2':'',
            'text-cookies-p2':'',
            'text-cookies-h3':'',
            'text-cookies-p3':'',
            'text-cookies-h4':'',
            'text-cookies-p4':'',
            'text-cookies-close':'',
            'text-contact-validation-all-fields': '',
            'text-contact-validation-email': '',
            'text-form-submit-error': ''
        },
        'de': {
            'text-nav-home':'',
            'text-nav-services':'',
            'text-nav-portfolio':'',
            'text-nav-faq':'',
            'text-nav-get-quote':'',
            'text-nav-contact':'',
            'text-hero-title':'<span class="accent"></span>',
            'text-hero-subtitle':'',
            'text-hero-description':'',
            'text-hero-quote-btn':'',
            'text-hero-portfolio-btn':'',
            'text-hero-scroll':'',
            'text-services-title':'',
            'text-services-subtitle':'',
            'text-service1-title':'',
            'text-service1-desc':'',
            'text-service1-price':'<span class="accent"></span>',
            'text-service2-title':'',
            'text-service2-desc':'',
            'text-service2-price':'',
            'text-service3-title':'',
            'text-service3-desc':'',
            'text-service3-price':'',
            'text-service4-title':'',
            'text-service4-desc':'',
            'text-service4-price':'',
            'text-services-quote-btn':'',
            'text-pain-title':'',
            'text-pain-subtitle':'',
            'text-pain1-title':'',
            'text-pain1-desc':'',
            'text-pain2-title':'',
            'text-pain2-desc':'',
            'text-pain3-title':'',
            'text-pain3-desc':'',
            'text-portfolio-title':'',
            'text-portfolio-subtitle':'',
            'text-portfolio1-overlay-title':'',
            'text-portfolio1-overlay-desc':'',
            'text-portfolio-view-site':'',
            'text-portfolio1-title':'',
            'text-portfolio1-desc':'',
            'text-portfolio1-tag1':'',
            'text-portfolio1-tag2':'',
            'text-portfolio1-tag3':'',
            'text-portfolio2-overlay-title':'',
            'text-portfolio2-overlay-desc':'',
            'text-portfolio-view-site2':'',
            'text-portfolio2-title':'',
            'text-portfolio2-desc':'',
            'text-portfolio2-tag1':'',
            'text-portfolio2-tag2':'',
            'text-portfolio2-tag3':'',
            'text-portfolio-cta-btn':'',
            'text-faq-title':'',
            'text-faq1-q':'',
            'text-faq1-a':'',
            'text-faq2-q':'',
            'text-faq2-a':'',
            'text-faq3-q':'',
            'text-faq3-a':'',
            'text-faq4-q':'',
            'text-faq4-a':'',
            'text-faq5-q':'',
            'text-faq5-a':'',
            'text-faq6-q':'',
            'text-faq6-a':'',
            'text-faq7-q':'',
            'text-faq7-a':'',
            'text-faq8-q':'',
            'text-faq8-a':'',
            'text-faq9-q':'',
            'text-faq9-a':'',
            'text-faq10-q':'',
            'text-faq10-a':'',
            'text-areas-title':'',
            'text-areas-subtitle':'',
            'text-area1-title':'',
            'text-area1-desc':'',
            'text-area2-title':'',
            'text-area2-desc':'',
            'text-area3-title':'',
            'text-area3-desc':'',
            'text-area4-title':'',
            'text-area4-desc':'',
            'text-areas-note':'',
            'text-areas-contact-link':'',
            'text-why-title':'',
            'text-feature1-title':'',
            'text-feature1-desc':'',
            'text-feature2-title':'',
            'text-feature2-desc':'',
            'text-feature3-title':'',
            'text-feature3-desc':'',
            'text-feature4-title':'',
            'text-feature4-desc':'',
            'text-cta-title':'',
            'text-cta-subtitle':'',
            'text-cta-quote-btn':'',
            'text-cta-contact-btn':'',
            'text-footer-brand':'<span class="accent"></span>',
            'text-footer-brand-desc':'',
            'text-footer-col1-title':'',
            'text-footer-service1':'',
            'text-footer-service2':'',
            'text-footer-service3':'',
            'text-footer-service4':'',
            'text-footer-col2-title':'',
            'text-footer-company1':'',
            'text-footer-company2':'',
            'text-footer-company3':'',
            'text-footer-col3-title':'',
            'text-footer-copyright':'',
            'text-footer-privacy':'',
            'text-footer-terms':'',
            'text-footer-cookies':'',
            'text-quote-title-modal': '',
            'text-step1-title': '',
            'text-service-website-title': '',
            'text-service-website-desc': '',
            'text-service-website-price': '',
            'text-service-google-title': '',
            'text-service-google-desc': '',
            'text-service-google-price': '',
            'text-service-social-title': '',
            'text-service-social-desc': '',
            'text-service-social-price': '',
            'text-service-logo-title': '',
            'text-service-logo-desc': '',
            'text-service-logo-price': '',
            'text-next-btn': '',
            'text-next-btn2': '',
            'text-step2-title': '',
            'text-domain-desc': '',
            'text-table-header-duration': '',
            'text-table-header-price': '',
            'text-table-header-total': '',
            'text-domain-1y': '',
            'text-domain-2y': '',
            'text-domain-5y': '',
            'text-best-value': '',
            'text-domain-10y': '',
            'text-select-period-label': '',
            'text-prev-btn': '',
            'text-prev-btn2': '',
            'text-step3-title': '',
            'text-summary-title': '',
            'text-summary-services-label': '',
            'text-summary-domain-label': '',
            'text-summary-total-label': '',
            'text-contact-name-label-q': '',
            'text-contact-email-label-q': '',
            'text-business-type-label': '',
            'text-submit-quote-btn': '',
            'text-quote-success-title': '',
            'text-quote-success-desc': '',
            'text-quote-success-close': '',
            'text-contact-title':'',
            'text-contact-subtitle':'',
            'text-contact-name-label':'',
            'text-contact-email-label':'',
            'text-contact-message-label':'',
            'text-contact-submit-btn':'',
            'text-contact-success-title':'',
            'text-contact-success-desc':'',
            'text-contact-success-close':'',
            'text-privacy-title':'',
            'text-privacy-updated':'',
            'text-privacy-h1':'',
            'text-privacy-p1':'',
            'text-privacy-h2':'',
            'text-privacy-p2':'',
            'text-privacy-h3':'',
            'text-privacy-p3':'',
            'text-privacy-h4':'',
            'text-privacy-p4':'',
            'text-privacy-h5':'',
            'text-privacy-p5':'',
            'text-privacy-close':'',
            'text-terms-title':'',
            'text-terms-updated':'',
            'text-terms-h1':'',
            'text-terms-p1':'',
            'text-terms-h2':'',
            'text-terms-p2':'',
            'text-terms-h3':'',
            'text-terms-p3':'',
            'text-terms-h4':'',
            'text-terms-p4':'',
            'text-terms-h5':'',
            'text-terms-p5':'',
            'text-terms-close':'',
            'text-cookies-title':'',
            'text-cookies-updated':'',
            'text-cookies-h1':'',
            'text-cookies-p1':'',
            'text-cookies-h2':'',
            'text-cookies-p2':'',
            'text-cookies-h3':'',
            'text-cookies-p3':'',
            'text-cookies-h4':'',
            'text-cookies-p4':'',
            'text-cookies-close':'',
            'text-contact-validation-all-fields': '',
            'text-contact-validation-email': '',
            'text-form-submit-error': ''
        }
    };

    function applyTranslations(lang) {
        const currentLangTranslations = translations[lang];
        if (!currentLangTranslations) return;
        for (let id in currentLangTranslations) {
            const element = document.getElementById(id);
            if (element) {
                // Special handling for elements that contain HTML tags like <span>
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
                    // Fallback to English error message if specific translation is missing
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
                        successTitleElement.textContent = translations[currentLang]['text-quote-success-title'] || '';
                        successDescElement.textContent = translations[currentLang]['text-quote-success-desc'] || '';
                        successCloseBtn.textContent = translations[currentLang]['text-quote-success-close'] || '';
                    } else if (form.id === 'contactForm') {
                        successTitleElement.textContent = translations[currentLang]['text-contact-success-title'] || '';
                        successDescElement.textContent = translations[currentLang]['text-contact-success-desc'] || '';
                        successCloseBtn.textContent = translations[currentLang]['text-contact-success-close'] || '';
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
                    alert(translations[currentLang]['text-form-submit-error'] || translations['en']['text-form-submit-error'] || "Error submitting form. Please try again.");
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
