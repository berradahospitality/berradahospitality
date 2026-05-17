window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
  });

  function toggleMenu() {
    const overlay = document.getElementById('navOverlay');
    const burger  = document.getElementById('hamburger');
    const isOpen  = overlay.classList.toggle('open');
    burger.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }
  function closeMenu() {
    document.getElementById('navOverlay').classList.remove('open');
    document.getElementById('hamburger').classList.remove('open');
    document.body.style.overflow = '';
  }

  let current = 0;
  const slides = document.querySelectorAll('.hero-slide');
  const dots   = document.querySelectorAll('.hero-dot');
  function goSlide(n) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = n;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }
  setInterval(() => goSlide((current + 1) % slides.length), 5500);

  function switchTab(type, btn) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-' + type).classList.add('active');
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 70);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in, .fade-left, .fade-right').forEach(el => observer.observe(el));


  // ── MOTEUR DE TRADUCTION ──
  const LANGS = {
    fr: {
      'nav.annonces':'Annonces','nav.services':'Services','nav.conciergerie':'Conciergerie',
      'nav.partenaires':'Partenaires','nav.cta':'Nous contacter','nav.comment':'Comment ça marche',
      'nav.tag':'Conciergerie Immobilière au Maroc',
      'hero.tag':'Conciergerie Immobilière au Maroc',
      'hero.title':"L'art de gérer<br/><em>votre bien</em><br/>avec élégance",
      'hero.sub':"Berrada Hospitality accompagne propriétaires et voyageurs avec un service haut de gamme — gestion, location, vente. Nous prenons soin de chaque détail.",
      'hero.btn1':'Voir les annonces','hero.btn2':'Confier mon bien',
      'stat.satisfaction':'Satisfaction client','stat.dispo':'Disponibilité',
      'stat.gestion':'Gestion complète','stat.revenus':'Revenus en moyenne',
      'annonces.tag':'Nos biens sélectionnés','annonces.title':'Nos <em>annonces</em>',
      'annonces.desc':"Des propriétés d'exception au Maroc, gérées par notre équipe avec le plus grand soin.",
      'annonces.tab1':'🏠 À Louer','annonces.tab2':'🏷️ À Vendre',
      'annonces.loc.title':'Annonces de location bientôt disponibles',
      'annonces.loc.desc':"Nous préparons une sélection de biens d'exception à louer au Maroc. Revenez bientôt ou contactez-nous directement.",
      'annonces.loc.btn':'Nous contacter',
      'annonces.vente.title':'Annonces de vente bientôt disponibles',
      'annonces.vente.desc':"Notre portefeuille de biens à vendre est en cours de constitution. Contactez-nous pour être informé en priorité.",
      'annonces.vente.btn':'Être informé en priorité',
      'services.tag':'Notre expertise','services.title':'Services <em>immobiliers</em>',
      'services.desc':"De l'achat à la gestion locative, nous couvrons l'ensemble du cycle immobilier.",
      's1.name':'Achat & Vente','s1.desc':"Accompagnement complet dans vos transactions — évaluation, négociation et suivi juridique jusqu'à la signature.",
      's2.name':'Promotion Immobilière','s2.desc':"Développement de projets résidentiels et commerciaux en partenariat avec les meilleurs promoteurs.",
      's3.name':'Gestion Locative','s3.desc':"Gestion complète de votre bien : annonces, locataires, check-in/out, état des lieux et maintenance.",
      's4.name':'Conseil & Investissement','s4.desc':"Analyse du marché, rentabilité locative, optimisation fiscale — pour maximiser votre investissement.",
      's5.name':'Serrure Connectée','s5.desc':"Installation et gestion de serrures intelligentes pour un accès sécurisé à distance.",
      's6.name':'Mandat de Gestion','s6.desc':"Confiez-nous votre bien sur-mesure. Vous encaissez vos revenus sans vous soucier du quotidien.",
      'concierge.tag':'Expérience premium','concierge.title':'Services de <em>Conciergerie</em>',
      'concierge.desc':"Nous orchestrons chaque séjour pour que vos hôtes vivent une expérience inoubliable.",
      'c1.name':'Réservations & Agenda','c1.desc':"Gestion de votre calendrier sur toutes les plateformes sans double-booking.",
      'c2.name':'Accueil & Check-in','c2.desc':"Accueil personnalisé, remise des clés, présentation du logement et conseils locaux.",
      'c3.name':'Transferts & Transport','c3.desc':"Organisation des transferts aéroport, location de voitures, chauffeur privé.",
      'c4.name':'Sorties & Expériences','c4.desc':"Excursions, ballade à cheval, cours de cuisine, spa Hammam — via nos partenaires.",
      'c5.name':'Restauration & Paniers','c5.desc':"Réservation de tables, panier de bienvenue, chef à domicile sur demande.",
      'c6.name':'Ménage & Maintenance','c6.desc':"Ménage professionnel, linge fourni, réparations gérées en temps réel.",
      'process.tag':'Simple & transparent','process.title':'Comment ça <em>fonctionne</em> ?',
      'process.desc':"Confier votre bien se fait en quatre étapes simples.",
      'p1.title':'Premier contact','p1.desc':"Vous nous contactez, nous organisons une visite pour comprendre votre bien.",
      'p2.title':'Évaluation & Devis','p2.desc':"Nous évaluons le potentiel et vous proposons un mandat sur-mesure.",
      'p3.title':'Mise en ligne','p3.desc':"Photos pro, annonces optimisées, serrure connectée installée.",
      'p4.title':'Vous encaissez','p4.desc':"Nous gérons tout, vous recevez vos revenus et un rapport mensuel.",
      'part.tag':'Réseau de confiance','part.title':'Nos <em>partenaires</em>',
      'part.desc':"Nous collaborons avec des acteurs locaux soigneusement sélectionnés pour offrir une expérience complète à nos clients.",
      'part.cs.title':'Espace partenaires bientôt disponible',
      'part.cs.desc':"Nos partenaires seront présentés ici très prochainement. Vous souhaitez rejoindre notre réseau ?",
      'part.cs.btn':'Devenir partenaire',
      'contact.tag':'Parlons de votre projet','contact.title':'Prêt à <em>nous confier</em><br/>votre bien ?',
      'contact.desc':"Propriétaire, investisseur ou voyageur — notre équipe répond sous 24h.",
      'contact.phone.label':'Téléphone & WhatsApp','contact.email.label':'Email',
      'form.fname':'Prénom','form.fname.ph':'Ahmed','form.lname':'Nom','form.lname.ph':'Berrada',
      'form.email':'Email','form.email.ph':'vous@exemple.com','form.phone':'Téléphone','form.phone.ph':'+212 6 XX XX XX XX',
      'form.role':'Vous êtes…','form.role.opt0':'Choisir une option',
      'form.role.opt1':"Propriétaire souhaitant confier mon bien",'form.role.opt2':"Investisseur à la recherche d'un bien",
      'form.role.opt3':'Voyageur souhaitant réserver','form.role.opt4':'Partenaire potentiel','form.role.opt5':'Autre',
      'form.message':'Message','form.message.ph':'Décrivez votre projet…','form.submit':'Envoyer ma demande →',
      'footer.annonces':'Annonces','footer.services':'Services','footer.conciergerie':'Conciergerie',
      'footer.partenaires':'Partenaires','footer.contact':'Contact',
      'footer.copy':'© 2026 Berrada Hospitality · Tous droits réservés'
    },
    en: {
      'nav.annonces':'Listings','nav.services':'Services','nav.conciergerie':'Concierge',
      'nav.partenaires':'Partners','nav.cta':'Contact us','nav.comment':'How it works',
      'nav.tag':'Real Estate Concierge in Morocco',
      'hero.tag':'Real Estate Concierge in Morocco',
      'hero.title':'The art of managing<br/><em>your property</em><br/>with elegance',
      'hero.sub':"Berrada Hospitality supports owners and travelers with a premium service — management, rental, sales. We take care of every detail.",
      'hero.btn1':'View listings','hero.btn2':'Entrust my property',
      'stat.satisfaction':'Client satisfaction','stat.dispo':'Availability',
      'stat.gestion':'Full management','stat.revenus':'Average revenue increase',
      'annonces.tag':'Our selected properties','annonces.title':'Our <em>listings</em>',
      'annonces.desc':"Exceptional properties in Morocco, managed by our team with the utmost care.",
      'annonces.tab1':'🏠 For Rent','annonces.tab2':'🏷️ For Sale',
      'annonces.loc.title':'Rental listings coming soon',
      'annonces.loc.desc':"We are preparing a selection of exceptional properties for rent in Morocco. Check back soon or contact us directly.",
      'annonces.loc.btn':'Contact us',
      'annonces.vente.title':'Sale listings coming soon',
      'annonces.vente.desc':"Our portfolio of properties for sale is being compiled. Contact us to be notified first.",
      'annonces.vente.btn':'Get priority updates',
      'services.tag':'Our expertise','services.title':'Real Estate <em>Services</em>',
      'services.desc':"From purchase to rental management, we cover the entire real estate cycle.",
      's1.name':'Purchase & Sale','s1.desc':"Full support in your transactions — evaluation, negotiation and legal follow-up until signing.",
      's2.name':'Property Development','s2.desc':"Development of residential and commercial projects in partnership with the best developers.",
      's3.name':'Rental Management','s3.desc':"Complete management of your property: listings, tenants, check-in/out, inventory and maintenance.",
      's4.name':'Consulting & Investment','s4.desc':"Market analysis, rental profitability, tax optimization — to maximize your investment.",
      's5.name':'Smart Lock','s5.desc':"Installation and management of smart locks for secure remote access.",
      's6.name':'Management Mandate','s6.desc':"Entrust us with your property on your terms. You collect your income without worrying about daily operations.",
      'concierge.tag':'Premium experience','concierge.title':'<em>Concierge</em> Services',
      'concierge.desc':"We orchestrate every stay so your guests live an unforgettable experience.",
      'c1.name':'Bookings & Calendar','c1.desc':"Calendar management across all platforms with no double-booking.",
      'c2.name':'Welcome & Check-in','c2.desc':"Personalized welcome, key handover, property tour and local tips.",
      'c3.name':'Transfers & Transport','c3.desc':"Airport transfers, car rentals, private driver arrangements.",
      'c4.name':'Outings & Experiences','c4.desc':"Excursions, horse riding, cooking classes, Hammam spa — via our partners.",
      'c5.name':'Catering & Baskets','c5.desc':"Table reservations, welcome basket, private chef on request.",
      'c6.name':'Cleaning & Maintenance','c6.desc':"Professional cleaning, linen provided, repairs managed in real time.",
      'process.tag':'Simple & transparent','process.title':'How does it <em>work</em>?',
      'process.desc':"Entrusting your property is done in four simple steps.",
      'p1.title':'First contact','p1.desc':"You contact us, we arrange a visit to understand your property.",
      'p2.title':'Evaluation & Quote','p2.desc':"We evaluate the potential and offer you a tailored mandate.",
      'p3.title':'Going live','p3.desc':"Professional photos, optimized listings, smart lock installed.",
      'p4.title':'You collect','p4.desc':"We manage everything, you receive your income and a monthly report.",
      'part.tag':'Trusted network','part.title':'Our <em>partners</em>',
      'part.desc':"We work with carefully selected local players to offer a complete experience to our clients.",
      'part.cs.title':'Partner space coming soon',
      'part.cs.desc':"Our partners will be presented here very soon. Would you like to join our network?",
      'part.cs.btn':'Become a partner',
      'contact.tag':"Let's talk about your project",'contact.title':'Ready to <em>entrust us</em><br/>with your property?',
      'contact.desc':"Owner, investor or traveler — our team responds within 24 hours.",
      'contact.phone.label':'Phone & WhatsApp','contact.email.label':'Email',
      'form.fname':'First name','form.fname.ph':'Ahmed','form.lname':'Last name','form.lname.ph':'Berrada',
      'form.email':'Email','form.email.ph':'you@example.com','form.phone':'Phone','form.phone.ph':'+212 6 XX XX XX XX',
      'form.role':'You are…','form.role.opt0':'Choose an option',
      'form.role.opt1':'Owner wishing to entrust my property','form.role.opt2':'Investor looking for a property',
      'form.role.opt3':'Traveler wishing to book','form.role.opt4':'Potential partner','form.role.opt5':'Other',
      'form.message':'Message','form.message.ph':'Describe your project…','form.submit':'Send my request →',
      'footer.annonces':'Listings','footer.services':'Services','footer.conciergerie':'Concierge',
      'footer.partenaires':'Partners','footer.contact':'Contact',
      'footer.copy':'© 2026 Berrada Hospitality · All rights reserved'
    },
    ar: {
      'nav.annonces':'الإعلانات','nav.services':'الخدمات','nav.conciergerie':'الكونسيرج',
      'nav.partenaires':'الشركاء','nav.cta':'تواصل معنا','nav.comment':'كيف يعمل',
      'nav.tag':'إدارة عقارية فاخرة في المغرب',
      'hero.tag':'إدارة عقارية فاخرة في المغرب',
      'hero.title':'فن إدارة<br/><em>عقارك</em><br/>بأناقة',
      'hero.sub':'برادة هوسبيتالتي يرافق أصحاب العقارات والمسافرين بخدمة راقية — إدارة، تأجير، بيع. نحن نعتني بكل التفاصيل.',
      'hero.btn1':'عرض الإعلانات','hero.btn2':'أسند عقاري',
      'stat.satisfaction':'رضا العملاء','stat.dispo':'التوفر',
      'stat.gestion':'إدارة شاملة','stat.revenus':'زيادة الدخل',
      'annonces.tag':'عقاراتنا المختارة','annonces.title':'إعلاناتنا <em>العقارية</em>',
      'annonces.desc':'عقارات استثنائية في المغرب، تديرها فريقنا بأعلى مستوى من العناية.',
      'annonces.tab1':'🏠 للإيجار','annonces.tab2':'🏷️ للبيع',
      'annonces.loc.title':'إعلانات الإيجار قريباً',
      'annonces.loc.desc':'نحن نعد مجموعة مختارة من العقارات الاستثنائية للإيجار في المغرب. عد قريباً أو تواصل معنا مباشرة.',
      'annonces.loc.btn':'تواصل معنا',
      'annonces.vente.title':'إعلانات البيع قريباً',
      'annonces.vente.desc':'محفظتنا العقارية للبيع في طور الإعداد. تواصل معنا لتكون أول من يعلم.',
      'annonces.vente.btn':'كن أول من يعلم',
      'services.tag':'خبرتنا','services.title':'الخدمات <em>العقارية</em>',
      'services.desc':'من الشراء إلى الإدارة الإيجارية، نغطي دورة العقار بأكملها.',
      's1.name':'شراء وبيع','s1.desc':'مرافقة كاملة في معاملاتك — تقييم، تفاوض ومتابعة قانونية حتى التوقيع.',
      's2.name':'التطوير العقاري','s2.desc':'تطوير مشاريع سكنية وتجارية بالشراكة مع أفضل المطورين.',
      's3.name':'الإدارة الإيجارية','s3.desc':'إدارة كاملة لعقارك: إعلانات، مستأجرون، تسجيل الدخول/الخروج، جرد ومتابعة.',
      's4.name':'الاستشارة والاستثمار','s4.desc':'تحليل السوق، مردودية الإيجار، التحسين الضريبي — لتعظيم استثمارك.',
      's5.name':'القفل الذكي','s5.desc':'تركيب وإدارة الأقفال الذكية للوصول الآمن عن بعد.',
      's6.name':'تفويض الإدارة','s6.desc':'أسند لنا عقارك وفق شروطك. أنت تستلم دخلك دون القلق من التفاصيل اليومية.',
      'concierge.tag':'تجربة فاخرة','concierge.title':'خدمات <em>الكونسيرج</em>',
      'concierge.desc':'نحن ننظم كل إقامة لتجعل ضيوفك يعيشون تجربة لا تُنسى.',
      'c1.name':'الحجوزات والتقويم','c1.desc':'إدارة تقويمك على جميع المنصات دون تداخل في الحجوزات.',
      'c2.name':'الاستقبال وتسجيل الدخول','c2.desc':'استقبال شخصي، تسليم المفاتيح، جولة في السكن ونصائح محلية.',
      'c3.name':'النقل والتنقل','c3.desc':'تنظيم التنقل من المطار، تأجير السيارات، السائق الخاص.',
      'c4.name':'الرحلات والتجارب','c4.desc':'رحلات، ركوب الخيل، دروس الطبخ، حمام مغربي — عبر شركائنا.',
      'c5.name':'الطعام والسلال','c5.desc':'حجز الطاولات، سلة ترحيب، طاهٍ خاص عند الطلب.',
      'c6.name':'التنظيف والصيانة','c6.desc':'تنظيف احترافي، مناشف مقدمة، إصلاحات تتم في الوقت الفعلي.',
      'process.tag':'بسيط وشفاف','process.title':'كيف <em>يعمل</em> ذلك؟',
      'process.desc':'إسناد عقارك يتم في أربع خطوات بسيطة.',
      'p1.title':'التواصل الأول','p1.desc':'تتواصل معنا، ننظم زيارة لفهم عقارك.',
      'p2.title':'التقييم والعرض','p2.desc':'نقيّم الإمكانات ونقدم لك عقداً مخصصاً.',
      'p3.title':'الإطلاق','p3.desc':'صور احترافية، إعلانات محسّنة، قفل ذكي مركّب.',
      'p4.title':'أنت تستلم','p4.desc':'نحن ندير كل شيء، تستلم دخلك وتقريراً شهرياً.',
      'part.tag':'شبكة موثوقة','part.title':'شركاؤنا <em>المختارون</em>',
      'part.desc':'نتعاون مع فاعلين محليين منتقَين بعناية لتقديم تجربة متكاملة لعملائنا.',
      'part.cs.title':'فضاء الشركاء قريباً',
      'part.cs.desc':'سيتم تقديم شركائنا هنا قريباً جداً. هل تريد الانضمام إلى شبكتنا؟',
      'part.cs.btn':'كن شريكاً',
      'contact.tag':'دعنا نتحدث عن مشروعك','contact.title':'هل أنت مستعد <em>لتسليمنا</em><br/>عقارك؟',
      'contact.desc':'مالك، مستثمر أو مسافر — فريقنا يجيبك في غضون 24 ساعة.',
      'contact.phone.label':'الهاتف وواتساب','contact.email.label':'البريد الإلكتروني',
      'form.fname':'الاسم الأول','form.fname.ph':'أحمد','form.lname':'اسم العائلة','form.lname.ph':'برادة',
      'form.email':'البريد الإلكتروني','form.email.ph':'you@example.com','form.phone':'الهاتف','form.phone.ph':'+212 6 XX XX XX XX',
      'form.role':'أنت…','form.role.opt0':'اختر خياراً',
      'form.role.opt1':'مالك يرغب في إسناد عقاره','form.role.opt2':'مستثمر يبحث عن عقار',
      'form.role.opt3':'مسافر يرغب في الحجز','form.role.opt4':'شريك محتمل','form.role.opt5':'أخرى',
      'form.message':'الرسالة','form.message.ph':'صف مشروعك…','form.submit':'← إرسال طلبي',
      'footer.annonces':'الإعلانات','footer.services':'الخدمات','footer.conciergerie':'الكونسيرج',
      'footer.partenaires':'الشركاء','footer.contact':'اتصل بنا',
      'footer.copy':'© 2026 Berrada Hospitality · جميع الحقوق محفوظة'
    }
  };

  function setLang(lang) {
    const t = LANGS[lang];
    // RTL
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    // Boutons actifs
    document.querySelectorAll('.lang-btn').forEach(b => {
      b.classList.toggle('active', b.getAttribute('onclick').includes("'"+lang+"'"));
    });
    function tx(sel, key) { const e=document.querySelector(sel); if(e) e.textContent=t[key]; }
    function th(sel, key) { const e=document.querySelector(sel); if(e) e.innerHTML=t[key]; }
    function ph(sel, key) { const e=document.querySelector(sel); if(e) e.placeholder=t[key]; }
    // Nav desktop
    const dl = document.querySelectorAll('.nav-links-desktop > li:not(.lang-switcher) a');
    if(dl[0]) dl[0].textContent=t['nav.annonces'];
    if(dl[1]) dl[1].textContent=t['nav.services'];
    if(dl[2]) dl[2].textContent=t['nav.conciergerie'];
    if(dl[3]) dl[3].textContent=t['nav.partenaires'];
    if(dl[4]) dl[4].textContent=t['nav.cta'];
    // Nav overlay
    tx('.nav-overlay-tag','nav.tag');
    const ol = document.querySelectorAll('.nav-overlay-links li a');
    function setOL(el, txt) { const n=[...el.childNodes].find(n=>n.nodeType===3&&n.textContent.trim()); if(n) n.textContent=txt; }
    if(ol[0]) setOL(ol[0],t['nav.annonces']);
    if(ol[1]) setOL(ol[1],t['nav.services']);
    if(ol[2]) setOL(ol[2],t['nav.conciergerie']);
    if(ol[3]) setOL(ol[3],t['nav.comment']);
    if(ol[4]) setOL(ol[4],t['nav.partenaires']);
    if(ol[5]) setOL(ol[5],t['nav.cta']);
    // Hero
    tx('.hero-tag','hero.tag'); th('.hero-title','hero.title'); tx('.hero-sub','hero.sub');
    tx('.hero-actions .btn-primary','hero.btn1'); tx('.hero-actions .btn-outline-hero','hero.btn2');
    // Stats
    const sl=document.querySelectorAll('.stat-label');
    ['stat.satisfaction','stat.dispo','stat.gestion','stat.revenus'].forEach((k,i)=>{ if(sl[i]) sl[i].textContent=t[k]; });
    // Annonces
    tx('#annonces .section-tag','annonces.tag'); th('#annonces .section-title','annonces.title'); tx('#annonces .section-desc','annonces.desc');
    const tabs=document.querySelectorAll('.tab-btn');
    if(tabs[0]) tabs[0].textContent=t['annonces.tab1'];
    if(tabs[1]) tabs[1].textContent=t['annonces.tab2'];
    // listings re-rendered dynamically from CSV
    // Services
    tx('#services .section-tag','services.tag'); th('#services .section-title','services.title'); tx('#services .section-desc','services.desc');
    const sc=document.querySelectorAll('.service-card');
    ['s1','s2','s3','s4','s5','s6'].forEach((k,i)=>{ if(!sc[i]) return; tx2(sc[i],'.service-name',k+'.name'); tx2(sc[i],'.service-desc',k+'.desc'); });
    // Conciergerie
    tx('#conciergerie .section-tag','concierge.tag'); th('#conciergerie .section-title','concierge.title'); tx('#conciergerie .section-desc','concierge.desc');
    const cc=document.querySelectorAll('.concierge-card');
    ['c1','c2','c3','c4','c5','c6'].forEach((k,i)=>{ if(!cc[i]) return; tx2(cc[i],'.concierge-name',k+'.name'); tx2(cc[i],'.concierge-desc',k+'.desc'); });
    // Process
    tx('#processus .section-tag','process.tag'); th('#processus .section-title','process.title'); tx('#processus .section-desc','process.desc');
    const ps=document.querySelectorAll('.process-step');
    ['p1','p2','p3','p4'].forEach((k,i)=>{ if(!ps[i]) return; tx2(ps[i],'.step-title',k+'.title'); tx2(ps[i],'.step-desc',k+'.desc'); });
    // Partenaires
    tx('#partenaires .section-tag','part.tag'); th('#partenaires .section-title','part.title'); tx('#partenaires .section-desc','part.desc');
    tx('#partenaires .coming-soon-title','part.cs.title'); tx('#partenaires .coming-soon-desc','part.cs.desc'); tx('#partenaires .btn-dark','part.cs.btn');
    // Contact
    tx('#contact .section-tag','contact.tag'); th('#contact .section-title','contact.title'); tx('#contact .section-desc','contact.desc');
    const ci=document.querySelectorAll('.contact-item strong');
    if(ci[0]) ci[0].textContent=t['contact.phone.label']; if(ci[1]) ci[1].textContent=t['contact.email.label'];
    // Formulaire
    const lb=document.querySelectorAll('.contact-form label');
    ['form.fname','form.lname','form.email','form.phone','form.role','form.message'].forEach((k,i)=>{ if(lb[i]) lb[i].textContent=t[k]; });
    ph('.contact-form input[type=text]:nth-of-type(1)','form.fname.ph');
    ph('.contact-form input[type=text]:nth-of-type(2)','form.lname.ph');
    ph('.contact-form input[type=email]','form.email.ph');
    ph('.contact-form input[type=tel]','form.phone.ph');
    ph('.contact-form textarea','form.message.ph');
    const op=document.querySelectorAll('.contact-form select option');
    ['form.role.opt0','form.role.opt1','form.role.opt2','form.role.opt3','form.role.opt4','form.role.opt5'].forEach((k,i)=>{ if(op[i]) op[i].textContent=t[k]; });
    document.querySelector('.form-submit').textContent=t['form.submit'];
    // Footer
    const fl=document.querySelectorAll('.footer-links a');
    ['footer.annonces','footer.services','footer.conciergerie','footer.partenaires','footer.contact'].forEach((k,i)=>{ if(fl[i]) fl[i].textContent=t[k]; });
    tx('.footer-copy','footer.copy');
  }
  function tx2(parent, sel, key) { const e=parent.querySelector(sel); if(e) e.textContent=LANGS[document.documentElement.lang||'fr'][key]; }

  // ── CURSEUR CLÉ + ANNEAU ──
  (function() {
    if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const key  = document.getElementById('cursorKey');
    const ring = document.getElementById('cursorRing');
    let mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener('mousemove', function(e) {
      mx = e.clientX; my = e.clientY;
      key.style.left = mx + 'px'; key.style.top = my + 'px';
      if (!key.classList.contains('active')) { key.classList.add('active'); ring.classList.add('active'); }
    });
    (function loop() {
      rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
      ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
      requestAnimationFrame(loop);
    })();
    function bindHover(el) {
      el.addEventListener('mouseenter', function() { key.classList.add('hover'); ring.classList.add('hover'); });
      el.addEventListener('mouseleave', function() { key.classList.remove('hover'); ring.classList.remove('hover'); });
    }
    document.querySelectorAll('a, button').forEach(bindHover);
    window._bindCursorHover = bindHover;
  })();

  // ── BARRE DE PROGRESSION SCROLL ──
  window.addEventListener('scroll', function() {
    var pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100;
    document.getElementById('progress-bar').style.width = Math.min(pct, 100) + '%';
  });

  // ── DIVIDERS ANIMÉS ──
  document.querySelectorAll('.divider').forEach(function(d) {
    d.classList.add('divider-anim');
    new IntersectionObserver(function(entries) {
      entries.forEach(function(e) { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0 }).observe(d);
  });

  // ── COMPTEURS ANIMÉS ──
  function animateCounter(el) {
    var text = el.textContent;
    var m = text.match(/^([+]?)(\d+)([%°]?)$/);
    if (!m) return;
    var prefix = m[1], target = parseInt(m[2]), suffix = m[3];
    var start = null, dur = 1800;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var ease = 1 - Math.pow(1 - p, 3);
      el.textContent = prefix + Math.floor(ease * target) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  var cntObs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) { animateCounter(e.target); cntObs.unobserve(e.target); }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.stat-num').forEach(function(el) { cntObs.observe(el); });

  // ── ANNONCES CSV ──
  var CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSpuGWyn3w7kVhnPW5uBPznnWJ750pKqLH1IC0Hr_HIMzkCPuCouGrorL3qt0rEQHporMkKg1v5-2Rl/pub?gid=0&single=true&output=csv';
  var allListings = [];
  var activeFilters = { location: 'all', vente: 'all' };

  // Mapping colonnes Google Sheet → noms internes
  var COL = {
    'TYPE':'Type','NOM':'Nom','PRIX':'Prix','CHAMBRE':'Chambres',
    'SDB':'SDB','SDB ':'SDB','EQUIPEMENT':'Equipements',
    'PHOTOS':'Photo','ACTIF':'Actif','DESCRIPTION':'Description',
    'PHOTO 1':'Photo2','PHOTO 2':'Photo3','PAYS':'Pays'
  };

  function parseCSV(text) {
    var lines = text.replace(/\r/g, '').split('\n').filter(function(l) { return l.trim(); });
    var rawHeaders = [];
    var cur = '', inQ = false;
    for (var i = 0; i < lines[0].length + 1; i++) {
      var c = i < lines[0].length ? lines[0][i] : ',';
      if (c === '"') inQ = !inQ;
      else if (c === ',' && !inQ) { rawHeaders.push(cur.trim().replace(/^"|"$/g, '')); cur = ''; }
      else cur += c;
    }
    // Normaliser les en-têtes via le mapping
    var headers = rawHeaders.map(function(h) { return COL[h] || h; });
    return lines.slice(1).map(function(line) {
      var vals = [], v = '', q = false;
      for (var i = 0; i < line.length + 1; i++) {
        var c = i < line.length ? line[i] : ',';
        if (c === '"') q = !q;
        else if (c === ',' && !q) { vals.push(v.trim().replace(/^"|"$/g, '')); v = ''; }
        else v += c;
      }
      var obj = {};
      headers.forEach(function(h, i) {
        var val = vals[i] !== undefined ? vals[i] : '';
        // Normaliser Pays en title case (FRANCE → France, MAROC → Maroc)
        if (h === 'Pays') val = val.charAt(0).toUpperCase() + val.slice(1).toLowerCase();
        obj[h] = val;
      });
      return obj;
    });
  }

  function imgUrl(url) {
    if (!url || !url.trim()) return '';
    // Lien direct ImgBB → garder tel quel
    if (url.indexOf('i.ibb.co') !== -1) return url;
    // Google Drive
    if (url.indexOf('drive.google.com') !== -1) {
      if (url.indexOf('uc?export=view') !== -1 || url.indexOf('uc?id=') !== -1) return url;
      var m = url.match(/\/d\/([^/?]+)/);
      if (m) return 'https://drive.google.com/uc?export=view&id=' + m[1];
      var m2 = url.match(/[?&]id=([^&]+)/);
      if (m2) return 'https://drive.google.com/uc?export=view&id=' + m2[1];
    }
    return url;
  }

  // Résolution asynchrone des liens de partage ImgBB (ibb.co/XXX)
  var _ibbCache = {};
  try { var _s = localStorage.getItem('ibbCache'); if (_s) _ibbCache = JSON.parse(_s); } catch(e) {}
  async function resolveImgUrl(url) {
    if (!url || !url.trim()) return '';
    var base = imgUrl(url);
    // Lien de partage ImgBB (pas i.ibb.co) → résoudre via proxy CORS
    if (/^https?:\/\/ibb\.co\//.test(url)) {
      if (_ibbCache[url]) return _ibbCache[url];
      try {
        var proxy = 'https://api.codetabs.com/v1/proxy?quest=' + encodeURIComponent(url);
        var res = await fetch(proxy);
        var html = await res.text();
        var match = html.match(/property="og:image"\s+content="([^"]+)"/) ||
                    html.match(/content="([^"]+)"\s+property="og:image"/);
        if (match && match[1]) {
          _ibbCache[url] = match[1];
          try { localStorage.setItem('ibbCache', JSON.stringify(_ibbCache)); } catch(e) {}
          return match[1];
        }
      } catch(e) {}
    }
    return base;
  }

  async function resolveAndSet(imgEl, url, fallback) {
    var direct = await resolveImgUrl(url);
    imgEl.src = direct || fallback;
    imgEl.onerror = function() { this.src = fallback; };
  }

  function getFlag(pays) {
    if (!pays) return '';
    return pays.indexOf('France') !== -1 ? '&#127467;&#127479;' : '&#127474;&#127462;';
  }

  function comingSoonHTML(type) {
    if (type === 'vente') {
      return '<div class="coming-soon" style="margin-top:2rem">' +
        '<span class="coming-soon-icon">🏷️</span>' +
        '<h3 class="coming-soon-title">Annonces de vente bientôt disponibles</h3>' +
        '<p class="coming-soon-desc">Notre portefeuille de biens à vendre est en cours de constitution. Contactez-nous pour être informé en priorité.</p>' +
        '<a href="https://wa.me/212660795649?text=Bonjour%20Berrada%20Hospitality%2C%20je%20souhaite%20%C3%AAtre%20inform%C3%A9%20en%20priorit%C3%A9%20de%20vos%20nouvelles%20annonces%20de%20vente." class="btn-dark" target="_blank" rel="noopener noreferrer">Être informé en priorité</a>' +
        '</div>';
    }
    return '<div class="coming-soon" style="margin-top:2rem">' +
      '<span class="coming-soon-icon">🏠</span>' +
      '<h3 class="coming-soon-title">Annonces de location bientôt disponibles</h3>' +
      '<p class="coming-soon-desc">Nous préparons une sélection de biens d&#39;exception à louer au Maroc. Revenez bientôt ou contactez-nous directement.</p>' +
      '<a href="#contact" class="btn-dark">Nous contacter</a>' +
      '</div>';
  }

  async function renderListings(tabType) {
    var container = document.getElementById('listings-' + tabType);
    if (!container) return;
    var type = tabType === 'location' ? 'Location' : 'Vente';
    var country = activeFilters[tabType];
    var filtered = allListings.filter(function(l) { return l.Type === type && l.Actif === 'Oui'; });
    if (country !== 'all') filtered = filtered.filter(function(l) { return l.Pays === country; });
    if (!filtered.length) { container.innerHTML = comingSoonHTML(tabType); return; }
    var fallback = 'https://images.unsplash.com/photo-1527769814692-b9066e3cbcf2?w=500&q=80';
    // Résoudre toutes les URLs photos en parallèle AVANT de rendre
    var resolvedPhotos = await Promise.all(filtered.map(function(l) { return resolveImgUrl(l.Photo); }));
    var cards = filtered.map(function(l, i) {
      var src = resolvedPhotos[i] || fallback;
      var card = '<div class="listing-card fade-in" style="animation-delay:' + (i * 0.1) + 's" data-idx="' + i + '" data-tab="' + tabType + '">' +
        '<div class="listing-card-img">' +
        '<img src="' + src + '" alt="' + (l.Nom || '') + '" onerror="this.src=this.dataset.fb" data-fb="' + fallback + '" loading="lazy"/>' +
        '<div class="listing-card-overlay">' +
        '<div class="listing-card-top">' +
        '<span class="listing-badge ' + (l.Type === 'Location' ? 'badge-loc' : 'badge-vente') + '">' + (l.Type === 'Location' ? 'Location' : 'À Vendre') + '</span>' +
        (l.Pays ? '<span class="listing-country">' + getFlag(l.Pays) + ' ' + l.Pays + '</span>' : '<span></span>') +
        '</div>' +
        '<div class="listing-card-info">' +
        '<h3 class="listing-name">' + (l.Nom || '') + '</h3>' +
        '<p class="listing-price">' + (l.Type === 'Vente' ? 'Prix sur demande' : (l.Prix || '')) + '</p>' +
        '<div class="listing-meta">' +
        (l.Chambres ? '<span>🛏 ' + l.Chambres + '</span>' : '') +
        (l.SDB ? '<span>🚿 ' + l.SDB + '</span>' : '') +
        '</div></div></div>' +
        '</div></div>';
      return card;
    }).join('');
    container.innerHTML = '<div class="listings-grid">' + cards + '</div>';
    setTimeout(function() {
      container.querySelectorAll('.listing-card').forEach(function(c) {
        c.classList.add('visible');
        c.addEventListener('click', function() {
          openDetail(parseInt(this.dataset.idx), this.dataset.tab);
        });
      });
      if (window._bindCursorHover) container.querySelectorAll('a,button,.listing-card').forEach(window._bindCursorHover);
    }, 60);
  }

  function setCountryFilter(tabType, country, btn) {
    activeFilters[tabType] = country;
    var group = btn.closest('.listing-filters');
    group.querySelectorAll('.filter-btn').forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active');
    renderListings(tabType);
  }

  async function openDetail(idx, tabType) {
    var type = tabType === 'location' ? 'Location' : 'Vente';
    var country = activeFilters[tabType];
    var filtered = allListings.filter(function(l) { return l.Type === type && l.Actif === 'Oui'; });
    if (country !== 'all') filtered = filtered.filter(function(l) { return l.Pays === country; });
    var l = filtered[idx];
    if (!l) return;
    var fb = 'https://images.unsplash.com/photo-1527769814692-b9066e3cbcf2?w=800&q=80';
    var rawPhotos = [l.Photo, l.Photo2, l.Photo3].filter(function(p) { return p && p.trim(); });
    var photos = await Promise.all(rawPhotos.map(resolveImgUrl));
    photos = photos.filter(function(p) { return p && p.trim(); });
    if (!photos.length) photos = [fb];

    // Carrousel
    var trackImgs = photos.map(function(p) {
      var el = document.createElement('img');
      el.src = p; el.dataset.fb = fb;
      el.onerror = function() { this.src = this.dataset.fb; };
      return el.outerHTML;
    }).join('');
    var dots = photos.length > 1 ? '<div class="carousel-dots">' +
      photos.map(function(_, i) { return '<span class="carousel-dot' + (i===0?' active':'') + '"></span>'; }).join('') +
      '</div>' : '';
    var arrows = photos.length > 1
      ? '<button class="carousel-prev">&#8592;</button><button class="carousel-next">&#8594;</button>'
      : '';
    var carouselHTML = '<div class="detail-carousel"><div class="carousel-track">' + trackImgs + '</div>' + arrows + dots + '</div>';

    // Contenu texte
    var badge = l.Type === 'Location' ? 'badge-loc' : 'badge-vente';
    var badgeLabel = l.Type === 'Location' ? 'Location' : 'A Vendre';
    var price = l.Type === 'Vente' ? 'Prix sur demande' : (l.Prix || '');
    var waText = encodeURIComponent('Bonjour Berrada Hospitality, je suis interesse par : ' + (l.Nom || ''));
    var specsHTML = '';
    if (l.Chambres || l.SDB || l.Equipements) {
      specsHTML = '<div class="detail-specs">' +
        (l.Chambres ? '<div class="detail-spec"><strong>Chambres</strong><span>🛏 ' + l.Chambres + '</span></div>' : '') +
        (l.SDB ? '<div class="detail-spec"><strong>Salles de bain</strong><span>🚿 ' + l.SDB + '</span></div>' : '') +
        (l.Equipements ? '<div class="detail-spec"><strong>Equipements</strong><span>' + l.Equipements + '</span></div>' : '') +
        '</div>';
    }
    var waSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';

    var overlay = document.getElementById('listingDetail');
    overlay.innerHTML =
      '<div class="detail-back"><button class="detail-back-btn" onclick="closeDetail()">&#8592; Retour aux annonces</button></div>' +
      '<div class="detail-scroll">' +
      carouselHTML +
      '<div class="detail-content">' +
      '<div class="detail-badges">' +
      '<span class="detail-badge ' + badge + '">' + badgeLabel + '</span>' +
      (l.Pays ? '<span class="detail-badge" style="background:var(--sand);color:var(--ink);">' + getFlag(l.Pays) + ' ' + l.Pays + '</span>' : '') +
      '</div>' +
      '<h2 class="detail-title">' + (l.Nom || '') + '</h2>' +
      '<p class="detail-price">' + price + '</p>' +
      specsHTML +
      (l.Description ? '<p class="detail-desc">' + l.Description + '</p>' : '') +
      '<a href="https://wa.me/212660795649?text=' + waText + '" target="_blank" rel="noopener noreferrer" class="btn-whatsapp-detail">' + waSVG + ' Demander plus d&#39;informations</a>' +
      '</div></div>';

    overlay.classList.add('open');
    overlay.querySelector('.detail-scroll').scrollTop = 0;
    document.body.style.overflow = 'hidden';

    // ── Logique carrousel ──
    (function() {
      var track = overlay.querySelector('.carousel-track');
      if (!track) return;
      var dotEls = overlay.querySelectorAll('.carousel-dot');
      var imgEls = overlay.querySelectorAll('.carousel-track img');
      var cur = 0;
      function goTo(n) {
        cur = (n + imgEls.length) % imgEls.length;
        track.style.transform = 'translateX(-' + cur * 100 + '%)';
        dotEls.forEach(function(d, i) { d.classList.toggle('active', i === cur); });
      }
      var btnNext = overlay.querySelector('.carousel-next');
      var btnPrev = overlay.querySelector('.carousel-prev');
      if (btnNext) btnNext.addEventListener('click', function() { goTo(cur + 1); });
      if (btnPrev) btnPrev.addEventListener('click', function() { goTo(cur - 1); });
      dotEls.forEach(function(d, i) { d.addEventListener('click', function() { goTo(i); }); });
      var startX = 0;
      track.addEventListener('touchstart', function(e) { startX = e.touches[0].clientX; }, { passive: true });
      track.addEventListener('touchend', function(e) {
        var diff = startX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 40) goTo(diff > 0 ? cur + 1 : cur - 1);
      });
    })();

    if (window._bindCursorHover) overlay.querySelectorAll('a,button').forEach(window._bindCursorHover);
  }

  function closeDetail() {
    document.getElementById('listingDetail').classList.remove('open');
    document.body.style.overflow = '';
  }

  async function loadListings() {
    try {
      var res = await fetch(CSV_URL);
      var text = await res.text();
      allListings = parseCSV(text);
      renderListings('location');
      renderListings('vente');
    } catch(e) {
      ['location','vente'].forEach(function(t) {
        var c = document.getElementById('listings-' + t);
        if (c) c.innerHTML = comingSoonHTML(t);
      });
    }
  }
  loadListings();

  // ── FORMULAIRE FORMSPREE ──
  var contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      var btn = contactForm.querySelector('.form-submit');
      btn.textContent = 'Envoi en cours…';
      btn.disabled = true;
      try {
        var res = await fetch(contactForm.action, {
          method: 'POST',
          body: new FormData(contactForm),
          headers: { 'Accept': 'application/json' }
        });
        if (res.ok) {
          contactForm.style.display = 'none';
          document.getElementById('form-success').style.display = 'block';
        } else {
          btn.textContent = 'Erreur — réessayer';
          btn.disabled = false;
        }
      } catch(err) {
        btn.textContent = 'Erreur — réessayer';
        btn.disabled = false;
      }
    });
  }