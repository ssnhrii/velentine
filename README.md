# 💙 Valentine's Day Website

Website Valentine's Day interaktif dengan tema biru yang elegan, dilengkapi galeri foto/video dan musik latar.

## ✨ Fitur

- 🎨 Desain modern dengan tema biru gradien
- 📸 Galeri 4 kolom untuk foto dan video
- 🎵 Music player dengan lagu "Jun Munthe - HITA"
- 🎁 Animasi kotak hadiah interaktif
- 💌 Pesan Valentine yang menyentuh
- ⭐ Efek bintang berkelap-kelip
- 🎊 Efek confetti saat membuka hadiah
- 📱 Responsive design untuk mobile

## 🚀 Cara Deploy ke GitHub Pages

### 1. Upload ke GitHub

```bash
# Inisialisasi git repository
git init

# Tambahkan semua file
git add .

# Commit pertama
git commit -m "Initial commit - Valentine website"

# Buat repository baru di GitHub, lalu:
git remote add origin https://github.com/username/nama-repo.git
git branch -M main
git push -u origin main
```

### 2. Aktifkan GitHub Pages

1. Buka repository di GitHub
2. Klik **Settings** (tab di atas)
3. Scroll ke bawah, klik **Pages** di menu kiri
4. Di bagian **Source**, pilih **main** branch
5. Klik **Save**
6. Tunggu beberapa menit, website akan aktif di: `https://username.github.io/nama-repo/`

## 📁 Struktur File

```
.
├── index.html                          # File HTML utama
├── style.css                           # Styling website
├── script.js                           # JavaScript untuk interaksi
├── Jun_Munthe_-_HITA_(mp3.pm).mp3     # File musik
├── WhatsApp Image 2026-02-13 at 10.55.21 PM.jpeg
├── WhatsApp Image 2026-02-13 at 11.05.30 PM.jpeg
├── WhatsApp Video 2026-02-13 at 10.52.18 PM.mp4
├── WhatsApp Video 2026-02-13 at 10.56.30 PM.mp4
└── README.md                           # Dokumentasi
```

## 🎯 Cara Menggunakan

1. Buka `index.html` di browser
2. Musik akan autoplay (atau klik di mana saja untuk memulai)
3. Lihat galeri foto dan video
4. Klik tombol "Buka Hadiah" untuk melihat pesan spesial
5. Nikmati efek confetti! 🎊

## 🎵 Ganti Musik

Untuk mengganti musik, edit file `index.html` baris audio source:

```html
<source src="nama-file-musik-baru.mp3" type="audio/mpeg">
```

## 📸 Ganti Foto/Video

Edit file `index.html` pada bagian photo gallery:

```html
<img id="preview1" src="path/ke/foto-baru.jpg">
<video id="video2" src="path/ke/video-baru.mp4" autoplay loop muted playsinline></video>
```

## 💌 Edit Pesan Valentine

Edit bagian `.love-message` di file `index.html` untuk mengubah pesan.

## 🎨 Kustomisasi Warna

Edit file `style.css` untuk mengubah tema warna:

```css
/* Background gradient */
background: linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #7e22ce 100%);

/* Warna tombol */
background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
```

## 📱 Browser Support

- ✅ Chrome/Edge (Recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers

## 📝 Lisensi

Free to use untuk keperluan personal.

## 💝 Dibuat dengan

HTML, CSS, JavaScript murni (no framework)

---

Made with 💙 for Valentine's Day
