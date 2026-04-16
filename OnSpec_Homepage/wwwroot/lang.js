/* lang.js – KO / EN i18n for OnSpec homepage */

/* ── Available languages (add new entries here to extend) ── */
var LANGUAGES = [
    { code: 'ko', label: '한국어' },
    { code: 'en', label: 'English' }
];

var TRANSLATIONS = {
    ko: {
        /* ── Page titles ── */
        'title-index':    '㈜온스펙 - Vision 검사 Total Solution',
        'title-about':    '회사소개 - ㈜온스펙',
        'title-business': '사업분야 - ㈜온스펙',

        /* ── Header / Nav ── */
        'nav-about':      '회사소개',
        'nav-business':   '사업분야',
        'menu-aria':      '메뉴 열기',

        /* ── Footer ── */
        'footer-addr': '㈜온스펙 &nbsp;|&nbsp; 경기도 화성시 봉담읍 동화길51, 6층 669호',
        'footer-tel':  'TEL : 000-0000-0000 &nbsp;|&nbsp; kslee@on-spec.co.kr',

        /* ── index.html ── */
        'hero-badge':         '20년 Vision 검사 기술력',
        'hero-title':         'Vision 검사 <em>Total Solution</em><br>전문기업',
        'hero-desc':          '㈜온스펙은 2006년부터 20년간 Vision 검사 분야에서 축적된 전문 기술력을 바탕으로<br>광학설계, S/W개발, 딥러닝을 아우르는 Total 검사 솔루션을 제공합니다.',
        'hero-btn-about':     '회사소개',
        'hero-btn-business':  '사업분야 보기',
        'overview-tag':       '사업분야',
        'overview-h2':        '사업분야',
        'overview-p':         '다양한 산업 분야에 최적화된 Vision 검사 솔루션을 제공합니다.',
        'card-battery':       '2차전지 전극공정·조립공정·모듈공정의 표면검사 및 치수측정 Vision 시스템',
        'card-pcb':           '인쇄 회로 기판 패턴 검사기(AOI), 외관 검사기(AVI), Roll to Roll 검사 시스템',
        'card-camera':        'Camera Module 외관검사기, 6면 동시검사, Laser Module 및 Lens 검사기',
        'card-display':       'COF/S-IC Reel to Reel AFVI, TSP AOI, 투명 ITO 패턴 AOI, OLED FMM AOI/AVI',
        'card-more':          '더 보기',
        'stat-experience':    '기술 경험',
        'stat-business':      '핵심 사업분야',
        'stat-battery':       '배터리 전공정 검사',
        'stat-ai':            '딥러닝 검사 솔루션',

        /* ── Sub-nav / section headings (about) ── */
        'sub-profile':    '기업 개요',
        'sub-orgchart':   '조직도',
        'sub-location':   '오시는 길',
        'sub-contact':    '연락처',

        /* ── Sub-nav / section headings (business) ── */
        'sub-battery':    '2차전지',
        'sub-pcb':        'PCB, FPCB',
        'sub-camera':     '카메라 모듈',
        'sub-display':    '디스플레이',

        /* ── Business section sub-headings ── */
        'biz-h3-machine':   '검사기',
        'biz-h3-features':  '핵심 기술',

        /* ── Contact label ── */
        'label-contact':  '연락처',

        /* ── about.html ── */
        'profile-intro':      '㈜온스펙은 2006년부터 20년간 Vision 검사 분야에서 경험을 쌓아온 전문가들이 모여 설립한 기업으로 광학설계, S/W개발, 딥러닝을 이용한 Total 검사 솔루션 제공을 통해 고객의 가치에 기여하고자 합니다.',
        'label-company':      '업체명',
        'label-ceo':          '대표이사',
        'label-address':      '주소',
        'value-address':      '경기도 화성시 봉담읍 동화길51, 6층 669호',
        'org-ceo':            '대표이사',
        'org-sw':             'S/W 개발팀',
        'org-system':         '시스템 설계팀',
        'org-support':        '기술지원팀',
        'org-sales':          '영업팀',
        'map-address':        '경기도 화성시 봉담읍 동화길51, 6층 669호',
        'kakao-confirm':      '카카오 맵으로 이동할까요?',

        /* ── business.html – Battery ── */
        'biz-battery-m1': '전극공정 (코터, 롤프레스, 슬리터) 표면검사, 치수 측정 Vision',
        'biz-battery-m2': '조립공정 L&amp;S라인, PKG라인 Vision',
        'biz-battery-m3': '모듈공정 Bur-bar 용접 Vision 외',
        'biz-battery-f1': '2차전지 全공정 검사 Vision 시스템 개발 실적 보유',
        'biz-battery-f2': 'Multi-Channel 조명 적용으로 전극 표면 불량 및 치수 측정 정합성 향상',
        'biz-battery-f3': '전극공정 코터 Wet 절연부 검사 시인성 개선을 위한 조명 시스템 개발',
        'biz-battery-f4': 'Auto-Threshold 알고리즘 적용으로 우수한 코팅부 Edge 불량 검출력 향상',

        /* ── business.html – PCB ── */
        'biz-pcb-m1': 'PCB, FPCB 인쇄 회로 기판 패턴 검사기 (AOI)',
        'biz-pcb-m2': 'PCB, FPCB 인쇄 회로 기판 외관 검사기 (AVI)',
        'biz-pcb-m3': 'FPCB Roll to Roll 패턴 검사기 (RTR AOI &amp; VRS)',
        'biz-pcb-f1': 'Global Points Transformation 방식으로, 제품의 War-page 및 수축/팽창 등의 다양한 변형에 의한 미/과검 대응',
        'biz-pcb-f2': '자체 CAM Software로 Gerber, RS-274x, ODB++ 등 모든 Data Format 지원 및 레시피 생성 용이',

        /* ── business.html – Camera ── */
        'biz-camera-m1': 'Camera Module 외관검사기',
        'biz-camera-m2': 'Camera Module 6면 외관검사기',
        'biz-camera-m3': 'Laser Module 외관검사기',
        'biz-camera-m4': 'Lens 외관검사기',
        'biz-camera-f1': 'Index Type 검사 Stage 구성으로 초고속 검사 구현',
        'biz-camera-f2': 'Mirror를 이용하여 Camera Module 5면 동시검사 (상면+Side 4면)',
        'biz-camera-f3': '액체렌즈 적용으로 제품 심도 변화 대응 및 다초점 검사 가능',
        'biz-camera-f4': 'Photometric 원리를 이용하여 외관 불량 시인성 향상',
        'biz-camera-f5': '10G망 적용으로 초고속 Deep-Learning 검사 결과 제공',

        /* ── business.html – Display ── */
        'biz-display-m1': 'COF Reel to Reel AFVI (최종 외관 검사기)',
        'biz-display-m2': 'S-IC Reel to Reel AFVI (최종 외관 검사기)',
        'biz-display-m3': 'Touch Screen Panel AOI',
        'biz-display-m4': '투명 ITO Pattern AOI',
        'biz-display-m5': 'OLED FMM AOI/AVI',
        'biz-display-f1': 'TSP AOI 국내 최대 납품 실적',
        'biz-display-f2': '육안으로 검사 불가능한 투명 ITO 패턴 검사기 개발',
        'biz-display-f3': '7um 회로에 대한 Roll to Roll, Reel to Reel Non-Stop Feeding 검사기 개발',
        'biz-display-f4': '0.7um 해상도의 Fine Metal Mask 2D/3D 검사기 개발'
    },

    en: {
        /* ── Page titles ── */
        'title-index':    'OnSpec Co., Ltd. - Vision Inspection Total Solution',
        'title-about':    'About Us - OnSpec Co., Ltd.',
        'title-business': 'Business - OnSpec Co., Ltd.',

        /* ── Header / Nav ── */
        'nav-about':      'About Us',
        'nav-business':   'Business',
        'menu-aria':      'Open menu',

        /* ── Footer ── */
        'footer-addr': 'OnSpec Co., Ltd. &nbsp;|&nbsp; 669, 6F, 51 Donghwa-gil, Bongdam-eup, Hwaseong-si, Gyeonggi-do',
        'footer-tel':  'TEL : 000-0000-0000 &nbsp;|&nbsp; kslee@on-spec.co.kr',

        /* ── index.html ── */
        'hero-badge':         'Since 2006 · 20 Years of Vision Inspection',
        'hero-title':         'Vision Inspection <em>Total Solution</em><br>Specialist',
        'hero-desc':          'OnSpec Co., Ltd., built on 20 years of expertise in Vision inspection since 2006,<br>provides Total inspection solutions spanning optical design, S/W development, and deep learning.',
        'hero-btn-about':     'About Us',
        'hero-btn-business':  'View Business',
        'overview-tag':       'Business Areas',
        'overview-h2':        'Business Areas',
        'overview-p':         'We provide optimized Vision inspection solutions across diverse industries.',
        'card-battery':       'Vision systems for surface inspection and dimensional measurement in battery electrode, assembly, and module processes.',
        'card-pcb':           'PCB pattern inspection (AOI), appearance inspection (AVI), and Roll to Roll inspection systems.',
        'card-camera':        'Camera Module appearance inspection, 6-sided simultaneous inspection, Laser Module and Lens inspection.',
        'card-display':       'COF/S-IC Reel to Reel AFVI, TSP AOI, Transparent ITO Pattern AOI, OLED FMM AOI/AVI.',
        'card-more':          'Learn More',
        'stat-experience':    'Years of Expertise',
        'stat-business':      'Core Business Areas',
        'stat-battery':       'Full Battery Process',
        'stat-ai':            'Deep Learning Solution',

        /* ── Sub-nav / section headings (about) ── */
        'sub-profile':    'Company Overview',
        'sub-orgchart':   'Organization Chart',
        'sub-location':   'Location',
        'sub-contact':    'Contact',

        /* ── Sub-nav / section headings (business) ── */
        'sub-battery':    'Battery',
        'sub-pcb':        'PCB, FPCB',
        'sub-camera':     'Camera Module',
        'sub-display':    'Display',

        /* ── Business section sub-headings ── */
        'biz-h3-machine':   'Machine',
        'biz-h3-features':  'Core Technologies',

        /* ── Contact label ── */
        'label-contact':  'Contact',

        /* ── about.html ── */
        'profile-intro':      'OnSpec Co., Ltd. was founded by experts with 20 years of experience in the Vision inspection field since 2006. We aim to contribute to customer value by providing Total inspection solutions encompassing optical design, S/W development, and deep learning.',
        'label-company':      'Company Name',
        'label-ceo':          'CEO',
        'label-address':      'Address',
        'value-address':      '669, 6F, 51 Donghwa-gil, Bongdam-eup, Hwaseong-si, Gyeonggi-do',
        'org-ceo':            'CEO',
        'org-sw':             'S/W Development',
        'org-system':         'System Design',
        'org-support':        'Technical Support',
        'org-sales':          'Sales',
        'map-address':        '669, 6F, 51 Donghwa-gil, Bongdam-eup, Hwaseong-si, Gyeonggi-do',
        'kakao-confirm':      'Open in Kakao Maps?',

        /* ── business.html – Battery ── */
        'biz-battery-m1': 'Electrode process (coater, roll press, slitter) surface inspection and dimensional measurement Vision',
        'biz-battery-m2': 'Assembly process L&amp;S line, PKG line Vision',
        'biz-battery-m3': 'Module process Bus-bar welding Vision and more',
        'biz-battery-f1': 'Proven track record in developing Vision systems for all battery manufacturing processes',
        'biz-battery-f2': 'Multi-Channel lighting for enhanced electrode surface defect detection and dimensional measurement accuracy',
        'biz-battery-f3': 'Lighting system developed to improve visibility of Wet insulation inspection in electrode coater process',
        'biz-battery-f4': 'Enhanced coating edge defect detection performance with Auto-Threshold algorithm',

        /* ── business.html – PCB ── */
        'biz-pcb-m1': 'PCB, FPCB printed circuit board pattern inspection system (AOI)',
        'biz-pcb-m2': 'PCB, FPCB printed circuit board appearance inspection system (AVI)',
        'biz-pcb-m3': 'FPCB Roll to Roll pattern inspection system (RTR AOI &amp; VRS)',
        'biz-pcb-f1': 'Global Points Transformation method to handle various deformations such as warpage and expansion/contraction, reducing false positives',
        'biz-pcb-f2': 'In-house CAM Software supports all data formats including Gerber, RS-274x, ODB++ with easy recipe creation',

        /* ── business.html – Camera ── */
        'biz-camera-m1': 'Camera Module appearance inspection system',
        'biz-camera-m2': 'Camera Module 6-sided appearance inspection system',
        'biz-camera-m3': 'Laser Module appearance inspection system',
        'biz-camera-m4': 'Lens appearance inspection system',
        'biz-camera-f1': 'Ultra-high-speed inspection with Index Type inspection stage configuration',
        'biz-camera-f2': 'Simultaneous 5-sided Camera Module inspection using mirrors (top + 4 sides)',
        'biz-camera-f3': 'Liquid lens application for product depth variation and multi-focus inspection',
        'biz-camera-f4': 'Enhanced appearance defect visibility using Photometric principles',
        'biz-camera-f5': 'Ultra-fast Deep Learning inspection results provided via 10G network',

        /* ── business.html – Display ── */
        'biz-display-m1': 'COF Reel to Reel AFVI (Final Visual Inspection)',
        'biz-display-m2': 'S-IC Reel to Reel AFVI (Final Visual Inspection)',
        'biz-display-m3': 'Touch Screen Panel AOI',
        'biz-display-m4': 'Transparent ITO Pattern AOI',
        'biz-display-m5': 'OLED FMM AOI/AVI',
        'biz-display-f1': 'Largest domestic delivery record for TSP AOI',
        'biz-display-f2': 'Developed transparent ITO pattern inspection system impossible to inspect with the naked eye',
        'biz-display-f3': 'Roll to Roll, Reel to Reel Non-Stop Feeding inspection system for 7μm circuits',
        'biz-display-f4': 'Developed Fine Metal Mask 2D/3D inspection system with 0.7μm resolution'
    }
};

/* ── Public helper: get current translation by key ── */
window.t = function (key) {
    var lang = localStorage.getItem('lang') || 'ko';
    var dict = TRANSLATIONS[lang];
    return (dict && dict[key] !== undefined) ? dict[key] : key;
};

/* ── Apply all translations to DOM ── */
function applyLang(lang) {
    var dict = TRANSLATIONS[lang];
    if (!dict) return;

    /* HTML content (covers plain text and markup alike) */
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
        var key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) {
            el.innerHTML = dict[key];
        }
    });

    /* aria-label attributes */
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
        var key = el.getAttribute('data-i18n-aria');
        if (dict[key] !== undefined) {
            el.setAttribute('aria-label', dict[key]);
        }
    });

    /* Page <title> */
    var pageKey = document.body.getAttribute('data-page');
    if (pageKey && dict['title-' + pageKey]) {
        document.title = dict['title-' + pageKey];
    }

    /* <html lang="..."> */
    document.documentElement.lang = lang;

    /* Sync active state in dropdown */
    document.querySelectorAll('.lang-select__item').forEach(function (item) {
        item.classList.toggle('active', item.getAttribute('data-lang') === lang);
    });

    /* Update dropdown button label */
    var btnLabel = document.querySelector('.lang-select__label');
    if (btnLabel) {
        var langObj = LANGUAGES.find(function (l) { return l.code === lang; });
        if (langObj) { btnLabel.textContent = langObj.label; }
    }
}

/* ── Build language dropdown inside #langSelect ── */
function buildLangSelect() {
    var container = document.getElementById('langSelect');
    if (!container) return;

    var current = localStorage.getItem('lang') || 'ko';
    var currentObj = LANGUAGES.find(function (l) { return l.code === current; }) || LANGUAGES[0];

    /* Button */
    var btn = document.createElement('button');
    btn.className = 'lang-select__btn';
    btn.setAttribute('aria-haspopup', 'listbox');
    btn.setAttribute('aria-expanded', 'false');

    var labelSpan = document.createElement('span');
    labelSpan.className = 'lang-select__label';
    labelSpan.textContent = currentObj.label;

    var arrowSpan = document.createElement('span');
    arrowSpan.className = 'lang-select__arrow';
    arrowSpan.setAttribute('aria-hidden', 'true');

    btn.appendChild(labelSpan);
    btn.appendChild(arrowSpan);

    /* Dropdown list */
    var menu = document.createElement('ul');
    menu.className = 'lang-select__menu';
    menu.setAttribute('role', 'listbox');

    LANGUAGES.forEach(function (lang) {
        var item = document.createElement('li');
        item.className = 'lang-select__item' + (lang.code === current ? ' active' : '');
        item.setAttribute('role', 'option');
        item.setAttribute('data-lang', lang.code);
        item.setAttribute('aria-selected', lang.code === current ? 'true' : 'false');
        item.textContent = lang.label;

        item.addEventListener('click', function () {
            localStorage.setItem('lang', lang.code);
            applyLang(lang.code);
            closeDropdown(container, btn);
        });

        menu.appendChild(item);
    });

    container.appendChild(btn);
    container.appendChild(menu);

    /* Toggle open/close on button click */
    btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var isOpen = container.classList.toggle('open');
        btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    /* Close when clicking outside */
    document.addEventListener('click', function () {
        closeDropdown(container, btn);
    });
}

function closeDropdown(container, btn) {
    container.classList.remove('open');
    if (btn) { btn.setAttribute('aria-expanded', 'false'); }
}

/* ── Initialise ── */
function initLang() {
    buildLangSelect();

    var saved = localStorage.getItem('lang');
    if (saved) {
        applyLang(saved);
        return;
    }

    /* Auto-detect country via IP */
    fetch('https://ipapi.co/country/')
        .then(function (res) {
            if (!res.ok) { throw new Error('HTTP ' + res.status); }
            return res.text();
        })
        .then(function (country) {
            var lang = (country.trim() === 'KR') ? 'ko' : 'en';
            localStorage.setItem('lang', lang);
            applyLang(lang);
        })
        .catch(function () {
            /* Fallback: keep default Korean and apply translations */
            localStorage.setItem('lang', 'ko');
            applyLang('ko');
        });
}

/* Run when DOM is ready */
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLang);
} else {
    initLang();
}
