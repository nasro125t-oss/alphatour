function init() {
    // Check if initialization already happened
    if (window.isPortfolioInitialized) return;
    window.isPortfolioInitialized = true;

    console.log('Portfolio init started');

    // Translations
    const translations = {
        ar: {
            nav_home: 'الرئيسية',
            nav_about: 'قصتي',
            nav_skills: 'المهارات',
            nav_projects: 'المشاريع',
            nav_contact: 'اتصل بي',
            hero_title: 'ALPHA',
            hero_desc: 'مزيج بين السياحة والذكاء الاصطناعي لرسم مستقبل السياحة الثقافية في الجزائر.',
            btn_projects: 'دليل الوجهات',
            btn_contact: 'تواصل معي',
            about_title: 'قصتي',
            about_text: 'خريج تخصص إدارة الأعمال السياحية طموح حاصل على ماستر مهني. أجمع بين خلفية صلبة في السياحة والابتكار التكنولوجي. فلسفتي تعتمد على استخدام الذكاء الاصطناعي والتسويق الرقمي لتقديم تجارب سياحية لا تُنسى، مع ضمان الكفاءة المالية والقانونية للمشاريع.',
            skills_title: 'المهارات والخبرات',
            skill_mgmt: 'التخصصات المهنية',
            skill_master: 'ماستر مهني في إدارة الأعمال السياحية',
            skill_intern: 'تربص في مجال الموارد البشرية بفندق ماريوت العالمي',
            skill_law: 'ليسانس في القانون العام',
            skill_tech: 'التكنولوجيا والذكاء الاصطناعي',
            skill_ai: 'عناصر الذكاء الاصطناعي (AI)',
            skill_marketing: 'أساسيات التسويق الرقمي',
            skill_data: 'تحليل البيانات (SPSS)',
            skill_finance: 'المالية واللغات',
            skill_pricing: 'إدارة وتسعير الأعمال (FinTech)',
            skill_english: 'الإنجليزية (B2 Upper Intermediate)',
            skill_accounting: 'المحاسبة (Simple Comptable)',
            projects_title: 'المشاريع الحالية',
            project_alpha: 'منصة ألفا - ALPHA',
            project_alpha_desc: 'مشروع رائد لرقمنة السياحة الثقافية والتاريخية في ولايات الشرق الجزائري باستخدام حلول تقنية متطورة.',
            project_coming_soon: 'قريباً..',
            contact_title: 'تواصل معي',
            contact_name_placeholder: 'الاسم الكامل',
            contact_email_placeholder: 'البريد الإلكتروني',
            contact_msg_placeholder: 'رسالتك',
            contact_send: 'إرسال',
            footer_copy: '© 2026 ALPHA- جميع الحقوق محفوظة',
            page_title: 'ALPHA | منصة ألفا الرقمية',
            lang_btn: 'English',
            blog_title: 'دليل الوجهات',
            loading: 'جاري تحميل المقالات...',
            read_more: 'اقرأ المزيد',
            no_blogs: 'لا توجد مقالات حالياً.',
            privacy_policy: 'سياسة الخصوصية',
            contact_page: 'اتصل بنا',
            back: 'عودة'
        },
        en: {
            nav_home: 'Home',
            nav_about: 'My Story',
            nav_skills: 'Skills',
            nav_projects: 'Projects',
            nav_contact: 'Contact',
            hero_title: 'ALPHA',
            hero_desc: 'A fusion of Tourism and AI to shape the future of cultural tourism in Algeria.',
            btn_projects: 'Destination Guide',
            btn_contact: 'Contact Me',
            about_title: 'My Story',
            about_text: 'Ambitious Tourism Management graduate with a Professional Master’s degree. I combine a solid background in tourism with technological innovation. My philosophy relies on using Artificial Intelligence and Digital Marketing to provide unforgettable tourism experiences, while ensuring financial and legal efficiency for projects.',
            skills_title: 'Skills & Experience',
            skill_mgmt: 'Professional Specializations',
            skill_master: 'Professional Master in Tourism Management',
            skill_intern: 'HR Internship at Marriott International',
            skill_law: 'Bachelor in Public Law',
            skill_tech: 'Technology & AI',
            skill_ai: 'Elements of AI',
            skill_marketing: 'Digital Marketing Fundamentals',
            skill_data: 'Data Analysis (SPSS)',
            skill_finance: 'Finance & Languages',
            skill_pricing: 'Business Management & Pricing (FinTech)',
            skill_english: 'English (B2 Upper Intermediate)',
            skill_accounting: 'Accounting (Simple Comptable)',
            projects_title: 'Current Projects',
            project_alpha: 'ALPHA Platform',
            project_alpha_desc: 'A pioneering project to digitize cultural and historical tourism in Eastern Algeria using advanced technical solutions.',
            project_coming_soon: 'Coming Soon..',
            contact_title: 'Contact Me',
            contact_name_placeholder: 'Full Name',
            contact_email_placeholder: 'Email Address',
            contact_msg_placeholder: 'Your Message',
            contact_send: 'Send',
            footer_copy: '© 2026 ALPHA- All Rights Reserved',
            page_title: 'ALPHA | Digital Platform',
            lang_btn: 'عربي',
            blog_title: 'Destination Guide',
            loading: 'Loading articles...',
            read_more: 'Read More',
            no_blogs: 'No articles found.',
            privacy_policy: 'Privacy Policy',
            contact_page: 'Contact Us',
            back: 'Return'
        }
    };

    // DOM Elements
    const themeToggle = document.getElementById('theme-toggle');
    const langToggle = document.getElementById('lang-toggle');
    const menuToggle = document.getElementById('menu-toggle');
    const navLinksContainer = document.getElementById('nav-links');
    const navControls = document.querySelector('.nav-controls');
    const body = document.body;
    const htmlElement = document.documentElement;

    // --- Theme Logic ---
    function updateThemeIcon() {
        if (themeToggle) {
            themeToggle.textContent = body.classList.contains('light-theme') ? '☀️' : '🌙';
        }
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('light-theme');
            updateThemeIcon();
            localStorage.setItem('theme', body.classList.contains('light-theme') ? 'light' : 'dark');
        });

        // Initialize Theme
        if (localStorage.getItem('theme') === 'light') {
            body.classList.add('light-theme');
            updateThemeIcon();
        }
    }

    // --- Language Logic ---
    const updateLanguage = (lang) => {
        htmlElement.lang = lang;
        htmlElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

        if (translations[lang]['page_title']) {
            document.title = translations[lang]['page_title'];
        }

        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (translations[lang][key]) {
                element.placeholder = translations[lang][key];
            }
        });

        if (langToggle) {
            if (window.innerWidth <= 768) {
                langToggle.textContent = lang === 'ar' ? 'EN' : 'AR';
            } else {
                langToggle.textContent = translations[lang]['lang_btn'];
            }
        }

        if (lang === 'en') {
            document.documentElement.style.setProperty('--font-main', "'Inter', 'Tajawal', sans-serif");
        } else {
            document.documentElement.style.setProperty('--font-main', "'Tajawal', sans-serif");
        }

        if (navLinksContainer) {
            const backBtn = navLinksContainer.querySelector('.menu-back-btn');
            if (backBtn) {
                const backText = translations[lang]['back'];
                if (lang === 'ar') {
                    backBtn.innerHTML = `<i class="fas fa-chevron-right"></i> <span>${backText}</span>`;
                } else {
                    backBtn.innerHTML = `<span>${backText}</span> <i class="fas fa-chevron-left"></i>`;
                }
            }
        }

        localStorage.setItem('lang', lang);
        window.currentLang = lang;
    };

    if (langToggle) {
        let currentLang = localStorage.getItem('lang') || 'ar';
        updateLanguage(currentLang);

        langToggle.addEventListener('click', () => {
            const newLang = window.currentLang === 'ar' ? 'en' : 'ar';
            updateLanguage(newLang);
            if (typeof window.loadPosts === 'function') {
                window.loadPosts();
            }
        });
    }

    // Scroll Animations
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
        // Ensure visibility even without scroll
        section.classList.add('fade-in-visible');
    });

    // Mobile Menu Toggle Logic
    if (menuToggle && navLinksContainer) {
        const mobileControls = document.getElementById('mobile-menu-controls');
        let backBtn = navLinksContainer.querySelector('.menu-back-btn');
        if (!backBtn) {
            backBtn = document.createElement('div');
            backBtn.className = 'menu-back-btn';
            backBtn.style.padding = '15px';
            backBtn.innerHTML = '<i class="fas fa-chevron-right"></i> <span data-i18n="back">عودة</span>';
            navLinksContainer.insertBefore(backBtn, navLinksContainer.firstChild);
            backBtn.addEventListener('click', closeMenu);
        }

        function closeMenu() {
            navLinksContainer.classList.remove('active');
            const profileBtn = mobileControls.querySelector('.profile-btn');
            const themeBtn = document.getElementById('theme-toggle');
            if (profileBtn) navControls.insertBefore(profileBtn, langToggle);
            if (themeBtn) navControls.insertBefore(themeBtn, menuToggle);
        }

        menuToggle.addEventListener('click', () => {
            const isActive = navLinksContainer.classList.toggle('active');
            if (isActive) {
                const profileBtn = navControls.querySelector('.profile-btn');
                const themeBtn = document.getElementById('theme-toggle');
                if (profileBtn) mobileControls.appendChild(profileBtn);
                if (themeBtn) mobileControls.appendChild(themeBtn);
            } else {
                closeMenu();
            }
        });

        navLinksContainer.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (targetId === '#skills' && target) {
                target.classList.add('show-skills');
                setTimeout(() => { target.scrollIntoView({ behavior: 'smooth' }); }, 10);
                return;
            }
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Initialize EmailJS
    const EMAILJS_CONFIG = {
        publicKey: 'mRqoThq2EYlAxZKzl',
        serviceId: 'service_3t8m3ta',
        templateId: 'template_tiqhxod'
    };

    if (typeof emailjs !== 'undefined') {
        emailjs.init({ publicKey: EMAILJS_CONFIG.publicKey });
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            const currentLang = window.currentLang || 'ar';
            submitBtn.disabled = true;
            submitBtn.textContent = currentLang === 'ar' ? 'جاري الإرسال...' : 'Sending...';

            emailjs.sendForm(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, this)
                .then(() => {
                    alert(currentLang === 'ar' ? '✅ تم الإرسال بنجاح!' : '✅ Sent successfully!');
                    contactForm.reset();
                })
                .catch((err) => {
                    alert((currentLang === 'ar' ? '❌ فشل الإرسال: ' : '❌ Failed: ') + err.text);
                })
                .finally(() => {
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalText;
                });
        });
    }

    // Blog Loading logic moved up to global scope effectively
    window.loadPosts = async function () {
        const container = document.getElementById('blog-posts');
        if (!container) return;
        const currentLang = window.currentLang || 'ar';
        const readMoreText = translations[currentLang]['read_more'] || 'اقرأ المزيد';

        const localFallback = `
            <div class="post-card fade-in-visible" onclick="location.href='post.html?id=guelta-zerka.md'">
                <div class="post-image"><img src="assets/img/blog/guelta-zerka-3.jpg" alt="Guelta Zerka"></div>
                <div class="post-content-inner">
                    <h3>${currentLang === 'ar' ? 'القلتة الزرقاء بقالمة: جنة منسية' : 'Guelta Zerka in Guelma: A Forgotten Paradise'}</h3>
                    <div class="read-more">${readMoreText} <i class="fas ${currentLang === 'ar' ? 'fa-arrow-left' : 'fa-arrow-right'}"></i></div>
                </div>
            </div>
            <div class="post-card fade-in-visible" onclick="location.href='post.html?id=oued-zenati.md'">
                <div class="post-image"><img src="assets/img/blog/oued-zenati-1.jpg" alt="Oued Zenati"></div>
                <div class="post-content-inner">
                    <h3>${currentLang === 'ar' ? 'مدينة وادي الزناتي العريقة' : 'The Ancient City of Oued Zenati'}</h3>
                    <div class="read-more">${readMoreText} <i class="fas ${currentLang === 'ar' ? 'fa-arrow-left' : 'fa-arrow-right'}"></i></div>
                </div>
            </div>
        `;

        try {
            const response = await fetch('https://api.github.com/repos/nasro125t-oss/alpha-portfolio/contents/blog');
            let files = [];
            if (response.ok) {
                files = await response.json();
            } else {
                const secondRes = await fetch('https://api.github.com/repos/nasro125t-oss/alphatour/contents/blog');
                if (secondRes.ok) files = await secondRes.json();
            }

            if (files.length > 0) {
                container.innerHTML = '';
                for (const file of files) {
                    if (file.name.endsWith('.md') && file.name !== '.gitkeep') {
                        const content = await (await fetch(file.download_url)).text();
                        const titleAr = (content.match(/title:\s*"(.*?)"/) || [])[1] || file.name;
                        const titleEn = (content.match(/title_en:\s*"(.*?)"/) || [])[1] || titleAr;
                        const title = currentLang === 'ar' ? titleAr : titleEn;
                        const image = (content.match(/image:\s*"(.*?)"/) || [])[1] || 'assets/img/blog/guelma-districts-map.jpg';

                        container.innerHTML += `
                            <div class="post-card fade-in-visible" onclick="location.href='post.html?id=${file.name}'">
                                <div class="post-image"><img src="${image}" alt="${title}"></div>
                                <div class="post-content-inner">
                                    <h3>${title}</h3>
                                    <div class="read-more">${readMoreText} <i class="fas ${currentLang === 'ar' ? 'fa-arrow-left' : 'fa-arrow-right'}"></i></div>
                                </div>
                            </div>`;
                    }
                }
            } else {
                container.innerHTML = localFallback;
            }
        } catch (e) {
            container.innerHTML = localFallback;
        }
    };

    window.loadPosts();
}

// Global invocation
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
