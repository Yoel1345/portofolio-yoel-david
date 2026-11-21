# Portofolio Yoel David

Website portofolio satu halaman (HTML, CSS, JavaScript murni). Tidak perlu build atau instalasi apa pun.

## Isi folder

```
portfolio/
├── index.html            Struktur halaman
├── css/style.css         Semua gaya tampilan
├── js/main.js            Pengaturan (CONFIG), teks ID/EN, proyek, GitHub, form kontak
└── img/
    ├── avatar.jpg        Foto profil
    └── projects/         Taruh screenshot proyek di sini
```

## Cara melihat di komputer

Buka `index.html` langsung di browser. Untuk uji koneksi GitHub, lebih baik jalankan server lokal:

```
cd portfolio
python -m http.server 8000
```

Lalu buka http://localhost:8000

## Yang wajib kamu isi

Semua ada di bagian `CONFIG` paling atas file `js/main.js`:

| Pengaturan | Isi |
|---|---|
| `githubUser` | Username GitHub kamu, mis. `"yoeldavid"` |
| `email` | Email kontak |
| `phone` | Nomor WhatsApp |
| `location` | Kota dan negara |
| `formEndpoint` | (Opsional) URL Formspree agar pesan langsung terkirim. Kosong = membuka aplikasi email |
| `projects` | Daftar proyek unggulan (lihat di bawah) |

## Mengubah isi bagian atas (hero)

- Teks judul, paragraf perkenalan, dan label angka ada di `js/main.js`, pada kunci `hero.*` dan `st.*` di blok `I18N` (versi `id` dan `en`). Kata yang dibungkus `<strong>` tampil tebal.
- Jendela kode di kanan ada di `index.html` (cari `class="codewin"`). Ganti isi `<pre>` dengan potongan kode milikmu. Warna sintaks memakai kelas `k` (kata kunci), `s` (string), `f` (fungsi), `t` (tipe), dan `c` (komentar).
- Foto di samping logo memakai `img/avatar.jpg`.

## Mengisi proyek unggulan

Isi `CONFIG.projects` di `js/main.js`. Contoh satu proyek:

```js
{
  category: "fullstack",              // "fullstack" | "ai" | "frontend"
  year: "2026",
  title: { id: "Aplikasi Kasir UMKM", en: "Small Business POS" },
  desc:  { id: "Sistem kasir dengan **Flutter** dan **NestJS**.", en: "A POS system built with **Flutter** and **NestJS**." },
  tags: ["Flutter", "NestJS", "PostgreSQL"],
  image: "img/projects/kasir.webp",   // screenshot 16:10
  repo: "nama-repo-di-github",        // link GitHub dan data otomatis
  demo: "https://kasir.example.com",  // opsional
  story: { id: "Ringkasan Case Study...", en: "Case study summary..." },
  highlights: { id: ["Poin 1", "Poin 2"], en: ["Point 1", "Point 2"] }
}
```

- Pakai `**teks**` untuk menebalkan kata teknologi di deskripsi.
- Kalau `projects` dikosongkan dan `githubUser` terisi, 6 repo terbaikmu tampil otomatis.
- Selama `githubUser` kosong, yang tampil adalah 3 proyek contoh.

## Ganti foto avatar

Timpa file `img/avatar.jpg` dengan fotomu (persegi, minimal 288x288 piksel).

## Hosting gratis

- **GitHub Pages**: unggah folder ke repo, lalu Settings > Pages > pilih branch `main`.
- **Netlify**: seret folder `portfolio` ke https://app.netlify.com/drop
- **Vercel**: `vercel` di dalam folder, atau impor repo dari GitHub.

## Catatan

- Koneksi GitHub memakai API publik tanpa token (batas 60 permintaan per jam per pengunjung). Cukup untuk portofolio. Bila gagal, halaman menampilkan proyek dari `CONFIG.projects`.
- Pratinjau gambar otomatis dari GitHub dipakai bila `image` kosong dan `repo` terisi. Matikan lewat `autoGithubPreview: false`.
- Font dimuat dari Google Fonts, jadi perlu koneksi internet.

## Proyek yang sudah terpasang

- `company-profile-template`, `landing-page-kafe`, dan `toko-online-template` (semua kategori Frontend & UI), masing-masing dengan demo di GitHub Pages.

Untuk menambah proyek baru, salin satu blok `{ ... }` di `CONFIG.projects`, ganti isinya, dan taruh screenshot di `img/projects/`.

## Logo resmi di kartu kontak

Kartu Email, WhatsApp, Lokasi, dan GitHub memakai ikon bawaan. Untuk memakai logo resmi:

1. Unduh logo dari halaman brand resmi masing-masing dan ikuti ketentuan penggunaannya.
2. Simpan di `img/icons/` (SVG atau PNG persegi).
3. Isi path di `js/main.js`, contoh:

```js
contactIcons: {
  email: "img/icons/email.svg",
  phone: "img/icons/whatsapp.svg",
  location: "img/icons/location.svg",
  github: "img/icons/github.svg"
}
```

Kalau file tidak ditemukan, ikon bawaan tetap dipakai.
