/* ============ EDIT BAGIAN INI / EDIT THIS PART ============ */
const CONFIG = {
  githubUser: "Yoel1345",              // username GitHub kamu, mis. "yoeldavid"
  email: "yoelofficial123@gmail.com",
  phone: "0896-9481-6524",      // nomor WhatsApp (format 08xx atau 62xx, tautan wa.me dibuat otomatis)
  location: "Makassar, Indonesia",

  /* Ikon kartu kontak. Kosong = pakai ikon bawaan.
     Isi dengan path file logo resmi yang kamu unduh sendiri (SVG atau PNG persegi), contoh:
       github: "img/icons/github.svg"
     Jika file tidak ditemukan, ikon bawaan tetap dipakai. */
  contactIcons: { email: "img/icons/email.png", phone: "img/icons/whatsapp.png", location: "img/icons/location.png", github: "img/icons/github.png" },
  defaultLang: "id",           // "id" atau "en"

  /* Pengiriman form kontak:
     formEndpoint : URL layanan form (mis. Formspree "https://formspree.io/f/xxxx"). Pesan dikirim langsung tanpa membuka aplikasi email.
     Kosong = tombol "Kirim pesan" membuka aplikasi email dengan pesan yang sudah terisi. */
  formEndpoint: "",

  autoGithubPreview: true,     // pakai gambar kartu otomatis GitHub bila `image` kosong

  /* Daftar proyek unggulan. Kosongkan ([]) agar diambil otomatis dari repo GitHub.
     Setiap proyek:
       category  : "fullstack" | "ai" | "frontend"
       year      : "2026"
       title     : { id: "...", en: "..." }
       desc      : { id: "... **tebal** ...", en: "..." }   (pakai **teks** untuk menebalkan)
       tags      : ["Flutter", "NestJS", ...]
       image     : "img/nama.png"   (screenshot rasio 16:10, taruh di folder img/)
       repo      : "nama-repo-github"  (opsional, untuk link GitHub dan data otomatis)
       github    : "https://github.com/..." (opsional, menimpa link dari repo)
       demo      : "https://..."    (opsional, tombol Live demo)
       story     : { id: "...", en: "..." }                 (isi Case Study)
       highlights: { id: ["...", "..."], en: ["...", "..."] } (poin Case Study) */
  projects: [
    {
      category: "frontend",
      year: "2026",
      title: { id: "Company Profile Template — Perusahaan Logistik", en: "Company Profile Template — Logistics Company" },
      desc: {
        id: "Template website company profile 4 halaman (beranda, tentang, layanan, kontak) dengan **HTML**, **CSS**, dan **JavaScript** murni, lengkap dengan FAQ interaktif dan form penawaran ke WhatsApp.",
        en: "A 4-page company profile website template (home, about, services, contact) built with plain **HTML**, **CSS**, and **JavaScript**, with an interactive FAQ and a quote form that opens WhatsApp."
      },
      tags: ["HTML5", "CSS3", "JavaScript", "Responsive", "SEO"],
      image: "img/projects/company-profile.jpg",
      repo: "company-profile-template",
      demo: "https://yoel1345.github.io/company-profile-template/",
      story: {
        id: "Template siap pakai untuk perusahaan jasa pengiriman. Semua data perusahaan di dalamnya fiktif dan bertanda GANTI, sehingga mudah disesuaikan untuk klien sungguhan. Fokusnya pada tampilan yang rapi, terbaca jelas, dan nyaman di HP maupun desktop.",
        en: "A ready-to-use template for a shipping company. All company data inside is fictional and marked GANTI (replace), so it is easy to adapt for a real client. The focus is a clean, readable layout that works on both phones and desktops."
      },
      highlights: {
        id: ["Empat halaman dengan navigasi mobile dan animasi muncul saat scroll", "Form penawaran yang menyiapkan pesan ke WhatsApp", "FAQ yang bisa dibuka-tutup dan timeline perusahaan", "Tag SEO, Open Graph, dan atribut aksesibilitas di setiap halaman"],
        en: ["Four pages with a mobile menu and scroll-reveal animation", "Quote form that prepares a WhatsApp message", "Collapsible FAQ and a company timeline", "SEO and Open Graph tags plus accessibility attributes on every page"]
      }
    },
    {
      category: "frontend",
      year: "2026",
      title: { id: "Landing Page Kafe — Kopi Senja", en: "Cafe Landing Page — Kopi Senja" },
      desc: {
        id: "Landing page kafe dengan hero, menu unggulan, cerita brand, testimoni, dan form kontak ke WhatsApp. Dibuat dengan **HTML**, **CSS**, dan **JavaScript** murni.",
        en: "A cafe landing page with a hero, featured menu, brand story, testimonials, and a WhatsApp contact form. Built with plain **HTML**, **CSS**, and **JavaScript**."
      },
      tags: ["HTML5", "CSS3", "JavaScript", "Responsive", "SEO"],
      image: "img/projects/landing-page-kafe.jpg",
      repo: "landing-page-kafe",
      demo: "https://yoel1345.github.io/landing-page-kafe/",
      story: {
        id: "Landing page untuk kafe fiktif di Makassar dengan suasana hangat. Semua data (menu, harga, alamat, testimoni) bertanda GANTI sehingga mudah disesuaikan untuk kafe sungguhan.",
        en: "A landing page for a fictional cafe in Makassar with a warm mood. All data (menu, prices, address, testimonials) is marked GANTI (replace), so it is easy to adapt for a real cafe."
      },
      highlights: {
        id: ["Enam menu unggulan lengkap dengan foto dan harga", "Form kontak yang menyiapkan pesan ke WhatsApp", "Animasi muncul saat scroll, dengan tampilan cadangan bila JavaScript mati", "Tag SEO, Open Graph, dan atribut aksesibilitas"],
        en: ["Six featured menu items with photos and prices", "Contact form that prepares a WhatsApp message", "Scroll-reveal animation, with a fallback if JavaScript is off", "SEO, Open Graph tags, and accessibility attributes"]
      }
    },
    {
      category: "frontend",
      year: "2026",
      title: { id: "Toko Online Template — Tenun Nusa", en: "Online Store Template — Tenun Nusa" },
      desc: {
        id: "Template toko online satu halaman dengan katalog yang bisa dicari dan difilter, detail produk, keranjang belanja, serta checkout via WhatsApp. Dibuat dengan **HTML**, **CSS**, dan **JavaScript** murni.",
        en: "A single-page online store template with a searchable, filterable catalog, product details, a shopping cart, and WhatsApp checkout. Built with plain **HTML**, **CSS**, and **JavaScript**."
      },
      tags: ["HTML5", "CSS3", "JavaScript", "E-commerce", "WhatsApp"],
      image: "img/projects/toko-online-template.jpg",
      repo: "toko-online-template",
      demo: "https://yoel1345.github.io/toko-online-template/",
      story: {
        id: "Template toko untuk produk kerajinan, tanpa backend. Pesanan dikirim sebagai pesan WhatsApp dan dikonfirmasi manual oleh penjual, sehingga cocok untuk usaha kecil.",
        en: "A store template for craft products, with no backend. Orders are sent as WhatsApp messages and confirmed manually by the seller, which suits small businesses."
      },
      highlights: {
        id: ["Pencarian, filter kategori, dan urutan harga", "Detail produk dalam jendela dialog", "Keranjang berbentuk panel samping dengan subtotal", "Checkout dengan catatan dan kode promo ke WhatsApp"],
        en: ["Search, category filters, and price sorting", "Product details in a dialog window", "A side-panel cart with a subtotal", "Checkout with a note and promo code sent to WhatsApp"]
      }
    }
  ]
};
/* ============================================================ */

const I18N = {
  id: {
    "nav.label": "Navigasi utama", "nav.menu": "Buka menu", "nav.job": "Job desk", "nav.skills": "Skills", "nav.projects": "Proyek", "nav.contact": "Kontak",
    "hero.eyebrow": "Software Developer · Teknik Informatika",
    "hero.h1a": "Satu developer untuk layar HP, ", "hero.h1em": "server", "hero.h1b": ", dan agen AI.",
    "hero.lead": "Halo, saya <strong>Yoel David</strong>. Saya merancang aplikasi mobile lintas platform dengan <strong>Flutter</strong>, sistem web dan API dengan <strong>Laravel</strong>, <strong>NestJS</strong>, dan <strong>Next.js</strong>, serta asisten AI berbasis <strong>LangGraph</strong>.",
    "hero.code": "Cuplikan kode", "st.1": "teknologi di stack", "st.2": "bidang keahlian", "st.3": "Teknik Informatika",
    "hero.cta1": "Lihat proyek", "hero.cta2": "Hubungi saya",
    "card.role": "Software Developer", "card.edu": "Pendidikan", "card.eduv": "S1 Teknik Informatika",
    "card.field": "Bidang", "card.fieldv": "Mobile, Web & API, AI", "card.lang": "Bahasa utama",
    "card.status": "Terbuka untuk proyek dan kolaborasi",
    "job.h2": "Apa yang saya kerjakan",
    "job.p": "Tiga area kerja yang saling melengkapi. Satu orang bisa memegang aplikasi, backend, dan otomasinya sekaligus.",
    "t1.h": "Mobile App Development", "t1.p": "Aplikasi Android dan iOS dengan satu basis kode.",
    "t1.a": "Membangun aplikasi lintas platform dengan Flutter dan Dart",
    "t1.b": "Merancang alur layar dan state management yang mudah dirawat",
    "t1.c": "Menghubungkan aplikasi ke REST API dan database",
    "t1.d": "Menerjemahkan desain Figma menjadi antarmuka yang presisi",
    "t2.h": "Full Stack Development", "t2.p": "Dari tampilan web sampai layanan di belakangnya.",
    "t2.a": "Membuat antarmuka web dengan React, Next.js, dan Tailwind CSS",
    "t2.b": "Membangun REST API dengan NestJS, Express, dan Laravel",
    "t2.c": "Merancang skema database PostgreSQL, MySQL, dan MongoDB",
    "t2.d": "Mengamankan autentikasi, otorisasi, dan akses data",
    "t3.h": "AI Automation", "t3.p": "Mengubah pekerjaan berulang menjadi alur otomatis.",
    "t3.a": "Membangun agen AI multi-langkah dengan LangGraph",
    "t3.b": "Mengotomasi proses bisnis lewat Python dan integrasi API",
    "t3.c": "Menyiapkan deployment dengan Docker dan Caddy",
    "t3.d": "Mengelola versi dan kolaborasi lewat Git dan GitHub",
    "sk.h2": "Skill yang saya kuasai",
    "sk.p": "Teknologi yang saya pakai sehari-hari, dikelompokkan menurut perannya.",
    "sk.r1": "Bahasa & framework", "sk.r1s": "MOBILE · SCRIPTING",
    "sk.r2": "Web, backend & database",
    "sk.r3": "AI, motion & infrastruktur", "sk.r3s": "OTOMASI · DEPLOY",
    "pr.eyebrow": "Karya pilihan", "pr.h2": "Proyek unggulan",
    "pr.p": "Proyek yang pernah saya bangun, lengkap dengan teknologi yang dipakai. Buka Case Study untuk ringkasan, atau GitHub untuk melihat kodenya.",
    "pr.all": "Semua", "pr.fullstack": "Mobile & Full-Stack", "pr.ai": "AI & Automation", "pr.frontend": "Frontend & UI",
    "pr.case": "Case Study", "pr.demo": "Live demo", "pr.close": "Tutup",
    "pr.overview": "Ringkasan", "pr.highlights": "Poin utama", "pr.stack": "Teknologi",
    "pr.empty": "Belum ada proyek di kategori ini.", "pr.nodesc": "Belum ada deskripsi.",
    "pr.noteDemo": "Ini proyek contoh. Isi githubUser dan daftar projects di CONFIG untuk menampilkan karya aslimu.",
    "pr.noteFail": "Data GitHub belum bisa dimuat, jadi yang tampil adalah contoh. Periksa username atau batas permintaan API.",
    "pr.noteOk": "Terhubung ke github.com/",
    "ed.eyebrow": "Pendidikan", "ed.h2": "Latar belakang",
    "ed.p": "Mendalami arsitektur perangkat lunak, pengembangan aplikasi mobile, keamanan backend, dan sistem kecerdasan buatan terapan.",
    "ct.eyebrow": "Hubungi saya", "ct.h2": "Mari bangun sesuatu bersama",
    "ct.name": "Nama Anda", "ct.namePh": "Nama lengkap", "ct.mail": "Alamat email",
    "ct.msg": "Detail proyek atau pesan", "ct.msgPh": "Ceritakan proyek, jadwal, atau ide kolaborasi Anda...",
    "ct.send": "Kirim pesan", "ct.sending": "Mengirim...",
    "ct.errFields": "Lengkapi nama, email yang valid, dan pesan sebelum mengirim.",
    "ct.okMail": "Aplikasi email Anda dibuka dengan pesan yang sudah terisi. Jika tidak muncul, kirim langsung ke ",
    "ct.okSent": "Pesan terkirim. Saya akan membalas secepatnya.",
    "ct.fail": "Pesan belum terkirim. Coba lagi, atau kirim langsung ke ",
    "ct.mailSubject": "Pesan dari portofolio: ",
    "ct.email": "Email", "ct.phone": "Telepon / WhatsApp", "ct.loc": "Lokasi",
    "ct.copy": "Salin", "ct.copied": "Tersalin",
    "ft.built": "Dibangun dengan HTML, CSS, dan JavaScript murni",
    "locale": "id-ID"
  },
  en: {
    "nav.label": "Main navigation", "nav.menu": "Open menu", "nav.job": "Job scope", "nav.skills": "Skills", "nav.projects": "Projects", "nav.contact": "Contact",
    "hero.eyebrow": "Software Developer · Informatics Engineering",
    "hero.h1a": "One developer for the phone screen, ", "hero.h1em": "the server", "hero.h1b": ", and AI agents.",
    "hero.lead": "Hi, I'm <strong>Yoel David</strong>. I design cross-platform mobile apps with <strong>Flutter</strong>, web systems and APIs with <strong>Laravel</strong>, <strong>NestJS</strong>, and <strong>Next.js</strong>, and AI assistants with <strong>LangGraph</strong>.",
    "hero.code": "Code snippet", "st.1": "technologies in my stack", "st.2": "areas of expertise", "st.3": "Informatics Engineering",
    "hero.cta1": "View projects", "hero.cta2": "Get in touch",
    "card.role": "Software Developer", "card.edu": "Education", "card.eduv": "B.Sc. Informatics Engineering",
    "card.field": "Focus", "card.fieldv": "Mobile, Web & API, AI", "card.lang": "Main languages",
    "card.status": "Open to projects and collaboration",
    "job.h2": "What I work on",
    "job.p": "Three areas of work that complement each other. One person can own the app, the backend, and the automation behind it.",
    "t1.h": "Mobile App Development", "t1.p": "Android and iOS apps from a single codebase.",
    "t1.a": "Build cross-platform apps with Flutter and Dart",
    "t1.b": "Design screen flows and maintainable state management",
    "t1.c": "Connect apps to REST APIs and databases",
    "t1.d": "Turn Figma designs into precise interfaces",
    "t2.h": "Full Stack Development", "t2.p": "From the web interface to the services behind it.",
    "t2.a": "Build web interfaces with React, Next.js, and Tailwind CSS",
    "t2.b": "Build REST APIs with NestJS, Express, and Laravel",
    "t2.c": "Design PostgreSQL, MySQL, and MongoDB schemas",
    "t2.d": "Secure authentication, authorization, and data access",
    "t3.h": "AI Automation", "t3.p": "Turn repetitive work into automated flows.",
    "t3.a": "Build multi-step AI agents with LangGraph",
    "t3.b": "Automate business processes with Python and API integrations",
    "t3.c": "Set up deployment with Docker and Caddy",
    "t3.d": "Manage versions and collaboration with Git and GitHub",
    "sk.h2": "Skills I work with",
    "sk.p": "The technologies I use day to day, grouped by role.",
    "sk.r1": "Languages & frameworks", "sk.r1s": "MOBILE · SCRIPTING",
    "sk.r2": "Web, backend & databases",
    "sk.r3": "AI, motion & infrastructure", "sk.r3s": "AUTOMATION · DEPLOY",
    "pr.eyebrow": "Selected work", "pr.h2": "Featured projects",
    "pr.p": "Projects I have built, with the technology behind each one. Open the case study for a summary, or GitHub to read the code.",
    "pr.all": "All", "pr.fullstack": "Mobile & Full-Stack", "pr.ai": "AI & Automation", "pr.frontend": "Frontend & UI",
    "pr.case": "Case Study", "pr.demo": "Live demo", "pr.close": "Close",
    "pr.overview": "Overview", "pr.highlights": "Key points", "pr.stack": "Tech",
    "pr.empty": "No projects in this category yet.", "pr.nodesc": "No description yet.",
    "pr.noteDemo": "These are sample projects. Set githubUser and the projects list in CONFIG to show your real work.",
    "pr.noteFail": "GitHub data could not be loaded, so samples are shown. Check the username or the API rate limit.",
    "pr.noteOk": "Connected to github.com/",
    "ed.eyebrow": "Education", "ed.h2": "Background",
    "ed.p": "Studying software architecture, mobile application development, backend security, and applied artificial intelligence systems.",
    "ct.eyebrow": "Get in touch", "ct.h2": "Let's build something together",
    "ct.name": "Your name", "ct.namePh": "Full name", "ct.mail": "Email address",
    "ct.msg": "Project details or message", "ct.msgPh": "Tell me about your project, timeline, or collaboration idea...",
    "ct.send": "Send message", "ct.sending": "Sending...",
    "ct.errFields": "Fill in your name, a valid email, and a message before sending.",
    "ct.okMail": "Your email app opened with the message filled in. If nothing appeared, write directly to ",
    "ct.okSent": "Message sent. I will reply as soon as I can.",
    "ct.fail": "The message was not sent. Try again, or write directly to ",
    "ct.mailSubject": "Message from portfolio: ",
    "ct.email": "Email", "ct.phone": "Phone / WhatsApp", "ct.loc": "Location",
    "ct.copy": "Copy", "ct.copied": "Copied",
    "ft.built": "Built with plain HTML, CSS, and JavaScript",
    "locale": "en-US"
  }
};

const SAMPLE = [
  { category: "fullstack", year: "2026", tags: ["Flutter", "NestJS", "Next.js", "PostgreSQL", "Prisma", "Docker"],
    title: { id: "Contoh · Aplikasi Kasir UMKM", en: "Sample · Small Business POS" },
    desc: {
      id: "Sistem kasir lengkap: aplikasi Android **Flutter** untuk kasir, dashboard laporan **Next.js**, dan REST API **NestJS + PostgreSQL** dengan **Prisma** untuk stok dan transaksi.",
      en: "A complete point-of-sale system: a **Flutter** Android app for cashiers, a **Next.js** reporting dashboard, and a **NestJS + PostgreSQL** REST API with **Prisma** for stock and transactions." },
    story: {
      id: "Contoh isi Case Study. Jelaskan masalah yang ingin diselesaikan, peran kamu, keputusan teknis yang penting, dan hasil akhirnya.",
      en: "Sample case study text. Describe the problem you solved, your role, the key technical decisions, and the outcome." },
    highlights: {
      id: ["Transaksi tetap berjalan saat koneksi putus, lalu disinkronkan otomatis", "Autentikasi berbasis peran untuk kasir dan pemilik toko", "Laporan penjualan harian dan stok menipis di dashboard web"],
      en: ["Sales keep working offline and sync automatically when the connection returns", "Role-based authentication for cashiers and store owners", "Daily sales reports and low-stock alerts on the web dashboard"] } },
  { category: "ai", year: "2026", tags: ["Python", "LangGraph", "Node.js", "Express"],
    title: { id: "Contoh · Asisten AI untuk Admin", en: "Sample · AI Assistant for Admins" },
    desc: {
      id: "Agen AI multi-langkah dengan **LangGraph** dan **Python** yang membaca permintaan masuk, memilih alat yang tepat, dan meminta konfirmasi sebelum bertindak.",
      en: "A multi-step AI agent built with **LangGraph** and **Python** that reads incoming requests, picks the right tool, and asks for confirmation before acting." },
    story: {
      id: "Contoh isi Case Study. Ceritakan alur kerja yang diotomasi dan berapa waktu yang berhasil dihemat.",
      en: "Sample case study text. Describe the workflow you automated and how much time it saved." },
    highlights: {
      id: ["Alur agen berbentuk graf sehingga mudah dilacak dan diuji", "Konfirmasi manusia untuk tindakan yang berisiko", "Pembuatan laporan PDF dan spreadsheet otomatis"],
      en: ["The agent flow is a graph, so it is easy to trace and test", "Human confirmation for risky actions", "Automatic PDF and spreadsheet report generation"] } },
  { category: "frontend", year: "2025", tags: ["HTML5", "Tailwind CSS", "JavaScript", "GSAP"],
    title: { id: "Contoh · Landing Page Brand", en: "Sample · Brand Landing Page" },
    desc: {
      id: "Landing page editorial dengan **Tailwind CSS** dan **GSAP**: animasi muncul saat scroll, hero parallax, dan menu interaktif dengan pesan cepat.",
      en: "An editorial landing page built with **Tailwind CSS** and **GSAP**: scroll-reveal animation, a parallax hero, and an interactive menu with quick ordering." },
    story: {
      id: "Contoh isi Case Study. Jelaskan arah desain, tantangan animasi, dan hasil performanya.",
      en: "Sample case study text. Describe the design direction, the animation challenges, and the performance results." },
    highlights: {
      id: ["Animasi scroll yang halus dengan ScrollTrigger", "Skor performa tinggi berkat gambar WebP", "Tampilan responsif dari HP sampai layar lebar"],
      en: ["Smooth scroll animation with ScrollTrigger", "High performance score thanks to WebP images", "Responsive from phones to wide screens"] } }
];

let lang = CONFIG.defaultLang === "en" ? "en" : "id";
let state = { items: [], mode: "demo" };
let filter = "all";
const t = k => (I18N[lang] && I18N[lang][k]) || k;
const L = v => (v && typeof v === "object" && !Array.isArray(v)) ? (v[lang] || v.id || v.en || "") : (v || "");

function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }
function rich(s) { return esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"); }
function ghProfile() { return CONFIG.githubUser ? "https://github.com/" + CONFIG.githubUser : "https://github.com/"; }

/* ---------- Ilustrasi cadangan bila belum ada screenshot ---------- */
function illo(cat) {
  const base = '<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><rect width="320" height="200" fill="var(--canvas)"/>';
  if (cat === "ai") {
    const node = (x, y, w, fill) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="34" rx="8" fill="' + fill + '" stroke="var(--ink)" stroke-width="2"/>';
    const line = d => '<path d="' + d + '" fill="none" stroke="var(--ink)" stroke-width="2" stroke-linecap="round"/>';
    return base + line('M92 100 H122') + line('M198 100 H228') + line('M160 70 V52') + line('M160 130 V148') +
      node(24, 83, 68, 'var(--bg)') + node(122, 83, 76, 'var(--accent)') + node(228, 83, 68, 'var(--bg)') +
      node(122, 20, 76, 'var(--bg)') + node(122, 148, 76, 'var(--warm)') + '</svg>';
  }
  if (cat === "frontend") {
    return base +
      '<rect x="40" y="24" width="240" height="152" rx="10" fill="var(--bg)" stroke="var(--ink)" stroke-width="2"/>' +
      '<rect x="56" y="38" width="40" height="8" rx="4" fill="var(--ink)"/><rect x="190" y="38" width="22" height="8" rx="4" fill="var(--line)"/><rect x="220" y="38" width="44" height="8" rx="4" fill="var(--accent)"/>' +
      '<rect x="56" y="68" width="110" height="14" rx="4" fill="var(--ink)"/><rect x="56" y="90" width="84" height="14" rx="4" fill="var(--ink)"/>' +
      '<rect x="56" y="116" width="100" height="8" rx="4" fill="var(--line)"/><rect x="56" y="130" width="76" height="8" rx="4" fill="var(--line)"/>' +
      '<rect x="56" y="148" width="54" height="16" rx="8" fill="var(--accent)"/>' +
      '<rect x="182" y="62" width="84" height="102" rx="10" fill="var(--accent)"/><circle cx="224" cy="104" r="22" fill="var(--warm)"/></svg>';
  }
  /* fullstack: dashboard + phone */
  return base +
    '<rect x="28" y="30" width="206" height="136" rx="10" fill="var(--bg)" stroke="var(--ink)" stroke-width="2"/>' +
    '<path d="M28 52 H234" stroke="var(--ink)" stroke-width="2"/>' +
    '<circle cx="42" cy="41" r="4" fill="var(--warm)"/><circle cx="56" cy="41" r="4" fill="var(--accent)"/><circle cx="70" cy="41" r="4" fill="var(--line)"/>' +
    '<rect x="38" y="62" width="42" height="94" rx="5" fill="var(--surface)"/>' +
    '<rect x="90" y="62" width="132" height="18" rx="5" fill="var(--accent)"/>' +
    '<rect x="96" y="132" width="20" height="24" fill="var(--line)"/><rect x="124" y="112" width="20" height="44" fill="var(--accent)"/><rect x="152" y="122" width="20" height="34" fill="var(--line)"/><rect x="180" y="96" width="20" height="60" fill="var(--accent)"/>' +
    '<rect x="206" y="44" width="78" height="140" rx="14" fill="var(--bg)" stroke="var(--ink)" stroke-width="2"/>' +
    '<rect x="216" y="60" width="58" height="24" rx="6" fill="var(--ink)"/><rect x="216" y="92" width="58" height="14" rx="4" fill="var(--line)"/><rect x="216" y="112" width="58" height="14" rx="4" fill="var(--line)"/><rect x="216" y="140" width="58" height="20" rx="10" fill="var(--warm)"/></svg>';
}
function mediaHTML(p) {
  let src = p.image || "";
  if (!src && CONFIG.autoGithubPreview && CONFIG.githubUser && p.repo) {
    src = "https://opengraph.githubassets.com/1/" + encodeURIComponent(CONFIG.githubUser) + "/" + encodeURIComponent(p.repo);
  }
  return src ? '<img src="' + esc(src) + '" alt="" loading="lazy" data-fb="' + esc(p.category) + '">' : illo(p.category);
}
function wireFallback(root) {
  root.querySelectorAll("img[data-fb]").forEach(img => {
    img.addEventListener("error", () => {
      const cat = img.getAttribute("data-fb"); const par = img.parentElement;
      img.remove(); par.insertAdjacentHTML("afterbegin", illo(cat));
    }, { once: true });
  });
}

/* ---------- Kartu proyek ---------- */
function ghLink(p) { return p.github || (p.repo && CONFIG.githubUser ? "https://github.com/" + CONFIG.githubUser + "/" + p.repo : ghProfile()); }
function card(p, i) {
  const chips = (p.tags || []).slice(0, 6).map(x => "<span>" + esc(x) + "</span>").join("");
  const d = L(p.desc) || t("pr.nodesc");
  return '<article class="proj">' +
    '<div class="shot">' + mediaHTML(p) + '</div>' +
    '<div class="proj-body">' +
      '<div class="proj-top"><span class="cat">' + esc(t("pr." + p.category)) + '</span><span class="yr">' + esc(p.year || "") + '</span></div>' +
      '<h3>' + esc(L(p.title)) + '</h3>' +
      '<p class="desc">' + rich(d) + '</p>' +
      (chips ? '<div class="chips">' + chips + '</div>' : "") +
      '<div class="proj-actions">' +
        '<button type="button" class="btn solid sm" data-case="' + i + '">' + esc(t("pr.case")) + '</button>' +
        '<a class="btn line sm" href="' + esc(ghLink(p)) + '" target="_blank" rel="noopener">GitHub ↗</a>' +
      '</div>' +
    '</div></article>';
}
function renderFilters() {
  const cats = ["all", "fullstack", "ai", "frontend"];
  document.getElementById("filters").innerHTML = cats.map(c =>
    '<button type="button" data-f="' + c + '" aria-pressed="' + (filter === c) + '">' + esc(t("pr." + c)) + '</button>').join("");
}
function renderProjects() {
  const box = document.getElementById("repos");
  const list = state.items.map((p, i) => ({ p, i })).filter(x => filter === "all" || x.p.category === filter);
  box.innerHTML = list.length ? list.map(x => card(x.p, x.i)).join("") : '<div class="empty">' + esc(t("pr.empty")) + '</div>';
  wireFallback(box);
}

/* ---------- Case study dialog ---------- */
const dlg = document.getElementById("cs");
function openCase(i) {
  const p = state.items[i]; if (!p) return;
  document.getElementById("cs-shot").innerHTML = mediaHTML(p);
  wireFallback(document.getElementById("cs-shot"));
  const hl = (p.highlights && (p.highlights[lang] || p.highlights.id)) || [];
  const chips = (p.tags || []).map(x => "<span>" + esc(x) + "</span>").join("");
  document.getElementById("cs-body").innerHTML =
    '<div class="proj-top"><span class="cat" style="color:var(--accent)">' + esc(t("pr." + p.category)) + '</span><span class="yr" style="color:var(--muted)">' + esc(p.year || "") + '</span></div>' +
    '<h3 id="cs-title">' + esc(L(p.title)) + '</h3>' +
    '<p>' + rich(L(p.desc)) + '</p>' +
    (L(p.story) ? '<h4>' + esc(t("pr.overview")) + '</h4><p>' + rich(L(p.story)) + '</p>' : "") +
    (hl.length ? '<h4>' + esc(t("pr.highlights")) + '</h4><ul>' + hl.map(x => "<li>" + rich(x) + "</li>").join("") + '</ul>' : "") +
    (chips ? '<h4>' + esc(t("pr.stack")) + '</h4><div class="chips">' + chips + '</div>' : "") +
    '<div class="proj-actions">' +
      (p.demo ? '<a class="btn solid sm" href="' + esc(p.demo) + '" target="_blank" rel="noopener">' + esc(t("pr.demo")) + ' ↗</a>' : "") +
      '<a class="btn ' + (p.demo ? "line" : "solid") + ' sm" href="' + esc(ghLink(p)) + '" target="_blank" rel="noopener">GitHub ↗</a>' +
    '</div>';
  document.getElementById("cs-close").setAttribute("aria-label", t("pr.close"));
  try { dlg.showModal(); } catch (e) { dlg.setAttribute("open", ""); }
}
document.getElementById("repos").addEventListener("click", e => {
  const b = e.target.closest("[data-case]"); if (b) openCase(Number(b.getAttribute("data-case")));
});
document.getElementById("filters").addEventListener("click", e => {
  const b = e.target.closest("[data-f]"); if (!b) return;
  filter = b.getAttribute("data-f"); renderFilters(); renderProjects();
});
document.getElementById("cs-close").addEventListener("click", () => { try { dlg.close(); } catch (e) { dlg.removeAttribute("open"); } });
dlg.addEventListener("click", e => { if (e.target === dlg) { try { dlg.close(); } catch (x) { dlg.removeAttribute("open"); } } });

/* ---------- Data proyek + GitHub ---------- */
function guessCategory(r) {
  const tp = ((r.topics || []).join(" ") + " " + r.name + " " + (r.description || "")).toLowerCase();
  if (/ai|agent|langgraph|llm|automation|bot/.test(tp) || r.language === "Python") return "ai";
  if (r.language === "HTML" || r.language === "CSS" || /landing|portfolio|ui|frontend|gsap/.test(tp)) return "frontend";
  return "fullstack";
}
function fromRepo(r) {
  const tags = [r.language].concat(r.topics || []).filter(Boolean);
  return { category: guessCategory(r), year: (r.created_at || r.updated_at || "").slice(0, 4), title: r.name, desc: r.description || "",
    tags: tags, repo: r.name, github: r.html_url, story: "", highlights: null };
}
async function loadProjects() {
  const user = CONFIG.githubUser.trim();
  const curated = CONFIG.projects || [];
  if (!user && !curated.length) { state = { items: SAMPLE, mode: "demo" }; renderProjects(); return; }
  if (!user) { state = { items: curated, mode: "demo" }; renderProjects(); return; }
  const base = "https://api.github.com";
  try {
    if (curated.length) {
      const items = await Promise.all(curated.map(async p => {
        if (!p.repo) return p;
        try {
          const r = await fetch(base + "/repos/" + encodeURIComponent(user) + "/" + encodeURIComponent(p.repo));
          if (!r.ok) return p;
          const g = await r.json();
          return Object.assign({}, p, {
            year: p.year || (g.created_at || "").slice(0, 4),
            desc: (p.desc && (p.desc.id || p.desc.en || typeof p.desc === "string")) ? p.desc : (g.description || ""),
            tags: (p.tags && p.tags.length) ? p.tags : [g.language].concat(g.topics || []).filter(Boolean),
            github: p.github || g.html_url
          });
        } catch (e) { return p; }
      }));
      state = { items: items, mode: "ok" };
    } else {
      const res = await fetch(base + "/users/" + encodeURIComponent(user) + "/repos?sort=updated&per_page=30&type=owner");
      if (!res.ok) throw new Error(res.status);
      const repos = (await res.json()).filter(r => !r.fork).sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 6);
      if (!repos.length) throw new Error("empty");
      state = { items: repos.map(fromRepo), mode: "ok" };
    }
  } catch (e) {
    state = { items: curated.length ? curated : SAMPLE, mode: "fail" };
  }
  renderProjects();
}

/* ---------- Ikon kontak (logo resmi opsional) ---------- */
function applyContactIcons() {
  const map = CONFIG.contactIcons || {};
  document.querySelectorAll(".ic[data-icon]").forEach(el => {
    const src = map[el.getAttribute("data-icon")];
    if (!src) return;
    const img = new Image();
    img.alt = ""; img.width = 26; img.height = 26;
    img.addEventListener("load", () => { el.textContent = ""; el.appendChild(img); el.classList.add("has-img"); });
    img.src = src;
  });
}

/* ---------- Kontak ---------- */
function setContact() {
  function linkify(id, href, text, external) {
    const box = document.getElementById(id);
    box.textContent = "";
    if (!href) { box.textContent = text; return; }
    const a = document.createElement("a");
    a.href = href; a.textContent = text;
    if (external) { a.target = "_blank"; a.rel = "noopener noreferrer"; }
    box.appendChild(a);
  }
  const waDigits = String(CONFIG.phone).replace(/\D/g, "").replace(/^0/, "62");
  linkify("i-mail", /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(CONFIG.email) ? "mailto:" + CONFIG.email : "", CONFIG.email, false);
  linkify("i-phone", waDigits.length >= 10 ? "https://wa.me/" + waDigits : "", CONFIG.phone, true);
  document.getElementById("i-loc").textContent = CONFIG.location;
  document.getElementById("i-ghv").textContent = CONFIG.githubUser ? "github.com/" + CONFIG.githubUser : "github.com/username";
  document.getElementById("i-gh").href = ghProfile();
  document.getElementById("hdr-gh").href = ghProfile();
}
document.querySelectorAll("[data-copy]").forEach(btn => btn.addEventListener("click", () => {
  const val = btn.getAttribute("data-copy") === "mail" ? CONFIG.email : CONFIG.phone;
  const done = () => { btn.textContent = t("ct.copied"); setTimeout(() => { btn.textContent = t("ct.copy"); }, 1600); };
  try {
    navigator.clipboard.writeText(val).then(done, () => {
      const r = document.createRange(); r.selectNodeContents(btn.closest(".info").querySelector(".v"));
      const s = getSelection(); s.removeAllRanges(); s.addRange(r);
    });
  } catch (e) {}
}));
const form = document.getElementById("cform");
const statusEl = document.getElementById("f-status");
function setStatus(msg, cls) { statusEl.textContent = msg; statusEl.className = "form-status " + (cls || ""); }
form.addEventListener("submit", async e => {
  e.preventDefault();
  const name = document.getElementById("f-name").value.trim();
  const mail = document.getElementById("f-mail").value.trim();
  const msg = document.getElementById("f-msg").value.trim();
  if (!name || !msg || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) { setStatus(t("ct.errFields"), "err"); return; }
  if (CONFIG.formEndpoint) {
    const btn = document.getElementById("f-send"); btn.disabled = true; setStatus(t("ct.sending"), "");
    try {
      const res = await fetch(CONFIG.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", "Accept": "application/json" }, body: JSON.stringify({ name: name, email: mail, message: msg }) });
      if (!res.ok) throw new Error(res.status);
      setStatus(t("ct.okSent"), "ok"); form.reset();
    } catch (err) { setStatus(t("ct.fail") + CONFIG.email + ".", "err"); }
    btn.disabled = false;
    return;
  }
  const body = msg + "\n\n— " + name + " (" + mail + ")";
  const href = "mailto:" + CONFIG.email + "?subject=" + encodeURIComponent(t("ct.mailSubject") + name) + "&body=" + encodeURIComponent(body);
  setStatus(t("ct.okMail") + CONFIG.email + ".", "ok");
  try { window.location.href = href; } catch (err) {}
});

/* ---------- Menu mobile ---------- */
(function () {
  const btn = document.getElementById("menu-btn");
  const box = document.getElementById("hdr-menu");
  if (!btn || !box) return;
  function setOpen(open) {
    box.classList.toggle("is-open", open);
    btn.classList.toggle("is-open", open);
    btn.setAttribute("aria-expanded", String(open));
  }
  btn.addEventListener("click", () => setOpen(!box.classList.contains("is-open")));
  box.addEventListener("click", e => { if (e.target.closest("nav a")) setOpen(false); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") setOpen(false); });
  document.addEventListener("click", e => { if (!e.target.closest("header.top")) setOpen(false); });
  window.matchMedia("(min-width: 861px)").addEventListener("change", () => setOpen(false));
})();

/* ---------- Bahasa ---------- */
function applyLang() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.getAttribute("data-i18n")); });
  document.querySelectorAll("[data-i18n-html]").forEach(el => { el.innerHTML = t(el.getAttribute("data-i18n-html")); });
  document.querySelectorAll("[data-i18n-attr]").forEach(el => {
    const parts = el.getAttribute("data-i18n-attr").split(":");
    el.setAttribute(parts[0], t(parts[1]));
  });
  document.querySelectorAll(".lang button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
  renderFilters();
  renderProjects();
  if (dlg.open) { try { dlg.close(); } catch (e) {} }
}
function setLang(l) { lang = l; try { localStorage.setItem("lang", l); } catch (e) {} applyLang(); }
document.querySelectorAll(".lang button").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));
try { const saved = localStorage.getItem("lang"); if (saved === "id" || saved === "en") lang = saved; } catch (e) {}

/* ---------- Tab jendela kode ---------- */
(function () {
  const tabs = Array.from(document.querySelectorAll(".cw-tabs [role=tab]"));
  function select(tab, focus) {
    tabs.forEach(b => {
      const on = b === tab;
      b.setAttribute("aria-selected", String(on));
      b.tabIndex = on ? 0 : -1;
      document.getElementById(b.getAttribute("aria-controls")).hidden = !on;
    });
    if (focus) tab.focus();
  }
  tabs.forEach((b, i) => {
    b.addEventListener("click", () => select(b));
    b.addEventListener("keydown", e => {
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        e.preventDefault();
        select(tabs[(i + (e.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length], true);
      }
    });
  });
})();

document.getElementById("yr").textContent = new Date().getFullYear();
setContact();
applyContactIcons();
state = { items: CONFIG.projects.length ? CONFIG.projects : SAMPLE, mode: "demo" };
applyLang();
loadProjects();
