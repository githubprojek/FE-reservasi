# Hotel Booking System - Client

Aplikasi web frontend untuk sistem manajemen reservasi hotel modern dan responsif. Dibangun dengan React, Vite, dan Tailwind CSS, menyediakan pengalaman pengguna yang intuitif untuk browsing hotel, melihat detail kamar, membuat reservasi, dan melakukan pembayaran.

---

## 📋 Daftar Isi

- [Fitur Utama](#fitur-utama)
- [Teknologi yang Digunakan](#teknologi-yang-digunakan)
- [Prasyarat Installasi](#prasyarat-installasi)
- [Cara Installasi](#cara-installasi)
- [Konfigurasi Environment](#konfigurasi-environment)
- [Struktur Proyek](#struktur-proyek)
- [Navigasi & Routes](#navigasi--routes)
- [Komponenen Utama](#komponen-utama)
- [Contoh Penggunaan](#contoh-penggunaan)
- [State Management](#state-management)
- [Styling & Design](#styling--design)

---

## 🎯 Fitur Utama

### 1. **Halaman Beranda (Home)**

- Hero section dengan background menarik
- Informasi singkat tentang hotel
- Call-to-action untuk booking
- Review dari tamu sebelumnya
- Responsive design untuk semua device

### 2. **Pencarian & Browsing Akomodasi**

- Daftar lengkap kamar hotel
- Filter dan search kamar
- Kartu kamar dengan harga dan deskripsi
- Link ke detail kamar lengkap

### 3. **Detail Kamar**

- Foto carousel kamar yang dapat di-scroll
- Informasi lengkap: harga, kapasitas, tipe kamar
- Daftar amenities (fasilitas kamar)
- Tombol "Book Now" untuk reservasi

### 4. **Sistem Reservasi**

- Form booking dengan date picker
- Inputan tamu: nama, email, nomor telp
- Pilih jumlah tamu dan kamar
- Validasi form otomatis
- Konfirmasi sebelum submit

### 5. **Fasilitas Hotel**

- Halaman dedikasi untuk fasilitas
- Deskripsi detail setiap fasilitas
- Parallax effect untuk visual menarik
- Gambar fasilitas dari Cloudinary

### 6. **Lokasi & Map**

- Informasi lokasi hotel
- Embedded Google Maps
- Jarak dari landmark penting
- Alamat lengkap dan kontak

### 7. **Gallery**

- Galeri foto hotel dan kamar
- Carousel photo gallery
- Thumbnail preview
- Lightbox effect

### 8. **Sistem Pembayaran**

- Integrasi Midtrans Snap Payment
- Multiple payment methods (card, e-wallet, transfer)
- Status pembayaran real-time
- Konfirmasi pembayaran otomatis

### 9. **Responsive Design**

- Mobile-first approach
- Optimized untuk tablet dan desktop
- Touch-friendly interface
- Fast loading time

---

## 🛠️ Teknologi yang Digunakan

### Frontend Framework & Build Tool

- **React** (v19.0.0) - UI library
- **Vite** (v6.1.0) - Modern build tool
- **React Router DOM** (v7.7.1) - Client-side routing

### Styling & UI

- **Tailwind CSS** (v4.1.11) - Utility-first CSS framework
- **DaisyUI** (v5.0.50) - Component library untuk Tailwind
- **@tailwindcss/vite** (v4.1.11) - Vite plugin untuk Tailwind

### Animasi & Visual Effects

- **Framer Motion** (v12.23.12) - Advanced animation library
- **react-responsive-carousel** (v3.2.23) - Carousel component
- **react-icons** (v5.5.0) - Icon library (Font Awesome, Material Design, etc.)

### State Management & Data Fetching

- **Zustand** (v5.0.6) - Lightweight state management
- **Axios** (v1.10.0) - HTTP client untuk API requests

### Development Tools

- **ESLint** (v9.19.0) - Code linting
- **Vite** plugin untuk React development

### Utility Libraries

- **CORS** (v2.8.5) - Cross-Origin Resource Sharing

---

## 📦 Prasyarat Installasi

Sebelum menginstall, pastikan Anda sudah memiliki:

1. **Node.js** (v16.0 atau lebih tinggi)
   - Download dari [nodejs.org](https://nodejs.org)
   - Cek versi: `node --version`

2. **npm** (v7.0 atau lebih tinggi)
   - Biasanya sudah terinstall bersama Node.js
   - Cek versi: `npm --version`

3. **Git** (untuk cloning repository)
   - Download dari [git-scm.com](https://git-scm.com)

4. **Text Editor atau IDE**
   - Rekomendasi: VS Code, WebStorm, atau Sublime Text

5. **Backend Server**
   - Pastikan backend server sudah berjalan
   - Default: http://localhost:5000

---

## 🚀 Cara Installasi

### Step 1: Clone Repository

```bash
git clone <repository-url>
cd "Booking App/client"
```

### Step 2: Install Dependencies

```bash
npm install
```

Perintah ini akan menginstall semua package yang diperlukan berdasarkan file `package.json`.

Alternatif dengan yarn:

```bash
yarn install
```

### Step 3: Setup Environment Variables

Buat file `.env` atau `.env.local` di root folder client:

```env
VITE_API_BASE_URL=https://be-reservasi.vercel.app
VITE_MIDTRANS_CLIENT_KEY=your_midtrans_client_key_here
```

Atau untuk development lokal:

```env
VITE_API_BASE_URL=http://localhost:5000
VITE_MIDTRANS_CLIENT_KEY=your_midtrans_client_key_here
```

### Step 4: Jalankan Development Server

```bash
npm run dev
```

Server akan berjalan di `http://localhost:5173`

Output yang akan muncul:

```
VITE v6.1.0  ready in 456 ms

➜  Local:   http://localhost:5173/
➜  press h to show help
```

### Step 5: Build untuk Production

```bash
npm run build
```

Build output akan berada di folder `dist/`

### Step 6: Preview Production Build

```bash
npm run preview
```

Preview akan tersedia di `http://localhost:4173`

---

## ⚙️ Konfigurasi Environment

### VITE_API_BASE_URL

- URL endpoint backend server
- Format: `http://localhost:5000` (development) atau domain production
- Digunakan oleh Axios untuk semua API requests

### VITE_MIDTRANS_CLIENT_KEY

- Client key dari Midtrans payment gateway
- Dapatkan dari dashboard Midtrans
- Public key (tidak perlu disembunyikan di frontend)
- Digunakan untuk inisialisasi Snap Payment

### Contoh File .env Lengkap

```env
# API Configuration
VITE_API_BASE_URL=http://localhost:5000

# Payment Gateway (Midtrans)
VITE_MIDTRANS_CLIENT_KEY=Mid-client-s1NgvFH2X-siJ-Ve

# Optional: untuk development dengan server yang berbeda
VITE_PORT=5173
```

---

## 📁 Struktur Proyek

```
client/
├── src/
│   ├── components/
│   │   ├── accomodation/              # Halaman akomodasi/kamar
│   │   │   ├── Accomodation.jsx
│   │   │   ├── BackgroundAccomodation.jsx
│   │   │   └── CardRoom.jsx
│   │   │
│   │   ├── detailRoom/                # Halaman detail kamar
│   │   │   ├── DetailRoom.jsx
│   │   │   ├── PhotoDetailRoom.jsx
│   │   │   ├── DescDetailRoom.jsx
│   │   │   ├── Amenities.jsx
│   │   │   ├── AnotherDetailRoom.jsx
│   │   │   ├── BackgroundDetailRoom.jsx
│   │   │   └── useRoomStore.js
│   │   │
│   │   ├── facillities/               # Halaman fasilitas
│   │   │   ├── Facilities.jsx
│   │   │   ├── DescFacilities.jsx
│   │   │   ├── AnotherDescFacilities.jsx
│   │   │   ├── BackgroundFacilities.jsx
│   │   │   ├── ParalaxFacilities.jsx
│   │   │   └── useFacilitiesStore.js
│   │   │
│   │   ├── gallery/                   # Halaman galeri foto
│   │   │   ├── Gallery.jsx
│   │   │   └── GalleryPhoto.jsx
│   │   │
│   │   ├── home/                      # Halaman beranda
│   │   │   ├── Home.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── AboutUs.jsx
│   │   │   └── Review.jsx
│   │   │
│   │   ├── location/                  # Halaman lokasi & map
│   │   │   ├── Location.jsx
│   │   │   ├── DescLocation.jsx
│   │   │   ├── Distance.jsx
│   │   │   └── Map.jsx
│   │   │
│   │   ├── payments/                  # Halaman booking & pembayaran
│   │   │   ├── Payment.jsx
│   │   │   ├── Booking.jsx
│   │   │   ├── AvailableRoom.jsx
│   │   │   └── useReservasiStore.js
│   │   │
│   │   ├── Button.jsx                 # Component tombol reusable
│   │   ├── CardReview.jsx             # Component card review
│   │   ├── Footer.jsx                 # Footer
│   │   ├── Navbar.jsx                 # Navigation bar
│   │   ├── Paralax.jsx                # Parallax effect component
│   │   ├── Reservasi.jsx              # CTA reservasi
│   │   └── SocialMedia.jsx            # Social media links
│   │
│   ├── lib/                           # Utility functions
│   │   ├── Axios.js                   # Axios instances untuk API
│   │   └── ScrollToTop.js             # Auto scroll to top on route change
│   │
│   ├── assets/                        # Static assets (images, icons, etc)
│   │
│   ├── App.jsx                        # Root component
│   ├── main.jsx                       # Entry point
│   └── index.css                      # Global styles
│
├── public/                            # Static files
├── .env                               # Environment variables
├── .env.local                         # Local environment (git-ignored)
├── .gitignore                         # Git ignore rules
├── eslint.config.js                   # ESLint configuration
├── vite.config.js                     # Vite configuration
├── vercel.json                        # Vercel deployment config
├── package.json                       # Dependencies & scripts
└── index.html                         # HTML entry point
```

---

## 🛣️ Navigasi & Routes

### Struktur Routing

| Path                    | Component     | Deskripsi                        |
| ----------------------- | ------------- | -------------------------------- |
| `/`                     | Home          | Halaman beranda                  |
| `/location`             | Location      | Halaman lokasi & map             |
| `/accomodation`         | Accomodation  | Daftar kamar hotel               |
| `/facilities`           | Facilities    | Halaman fasilitas                |
| `/detail-room/:id`      | DetailRoom    | Detail kamar spesifik            |
| `/gallery`              | Gallery       | Galeri foto hotel                |
| `/available-room`       | AvailableRoom | Kamar tersedia dengan date range |
| `/booking/:roomId`      | Booking       | Form booking kamar               |
| `/payment/:reservasiId` | Payment       | Halaman pembayaran               |

### Navigation Flow

```
Home (/)
├── Navigate to Detail Room → /detail-room/:id
│   └── "Book Now" → /booking/:roomId
│       └── Submit → /payment/:reservasiId
│           └── Payment Success → Home
│
├── Accomodation → /accomodation
│   ├── View Room Detail → /detail-room/:id
│   └── Book Room → /booking/:roomId
│
├── Facilities → /facilities
├── Location → /location
└── Gallery → /gallery
```

### Clean Routes

Beberapa routes tidak menampilkan Navbar, Footer, dan sidebar:

- `/booking/:roomId` - Form booking page
- `/payment/:reservasiId` - Payment page
- `/available-room` - Available rooms page

---

## 💡 Contoh Penggunaan

### Contoh 1: Browsing Hotel & Kamar

1. **Buka aplikasi di `http://localhost:5173`**
2. **Klik menu "Accomodation"** atau scroll ke section akomodasi
3. **Lihat daftar kamar** dengan harga dan deskripsi
4. **Klik "View Details"** untuk melihat detail kamar
5. **Di halaman detail, lihat:**
   - Foto carousel kamar
   - Amenities (fasilitas kamar)
   - Harga per malam
   - Kapasitas kamar
6. **Klik "Book Now"** untuk melanjutkan

### Contoh 2: Melakukan Reservasi

**URL:** `http://localhost:5173/booking/room_id`

Form Booking:

```
Guest Information:
├── Full Name: "John Doe"
├── Email: "john@example.com"
├── Phone: "082123456789"
│
Reservation Details:
├── Check-in: "2024-02-15"
├── Check-out: "2024-02-18"
├── Number of Guests: 2
├── Number of Rooms: 1
└── Notes: "Need late check-in"
```

**Klik "Confirm Booking"** → Redirect ke halaman payment

### Contoh 3: Pembayaran dengan Midtrans

**URL:** `http://localhost:5173/payment/reservasi_id`

Halaman Payment menampilkan:

```
Reservation Details:
├── Guest Name: John Doe
├── Hotel: Hotel Premium
├── Room: Deluxe Room 101
├── Check-in: Feb 15, 2024
├── Check-out: Feb 18, 2024
├── Total Price: Rp 1,500,000
│
Payment Methods:
├── Credit/Debit Card
├── E-wallet (OVO, DANA, LinkAja)
├── Bank Transfer
└── QR Code (QRIS)
```

**Klik "Pay with Midtrans"** → Redirect ke Snap Payment

---

## 🎨 Styling & Design

### Tailwind CSS

````

---

## 📊 Performance Tips

### 1. Image Optimization

- Gunakan lazy loading untuk images
- Compress images sebelum upload
- Gunakan responsive image sizes

### 2. Code Splitting

- Vite automatic code splitting
- Lazy load routes dengan React.lazy()

```jsx
import React from "react";
const DetailRoom = React.lazy(() => import("./DetailRoom"));
````

### 3. State Management

- Hindari nested state yang terlalu dalam
- Gunakan selectors untuk mengakses state

### 4. Build Optimization

```bash
npm run build
# Output akan di-minify dan optimized
```

---

## 🐛 Troubleshooting

### API Connection Error

```
Error: Failed to connect to API
```

**Solusi:**

- Cek VITE_API_BASE_URL di .env
- Pastikan backend server sedang berjalan
- Cek CORS configuration di server

### Payment Gateway Error

```
Error: Midtrans Snap not loaded
```

**Solusi:**

- Verify VITE_MIDTRANS_CLIENT_KEY
- Check Midtrans script loading
- Cek browser console untuk error details

### Port Already in Use

```
Error: EADDRINUSE: address already in use :::5173
```

**Solusi:**

- Kill process: `lsof -i :5173` (Mac/Linux)
- Atau ubah port di vite.config.js

### Build Error

```
Error: Module not found
```

**Solusi:**

- Clear node_modules: `rm -rf node_modules`
- Reinstall: `npm install`
- Clear cache: `npm cache clean --force`

---

## 🚀 Deployment

### Deploy ke Vercel

1. **Push ke GitHub**

```bash
git push origin main
```

2. **Connect ke Vercel**

- Login ke [vercel.com](https://vercel.com)
- Select repository
- Click Deploy

3. **Setup Environment Variables**

- Buka Project Settings
- Tambahkan Environment Variables:
  - VITE_API_BASE_URL
  - VITE_MIDTRANS_CLIENT_KEY

4. **Deploy Complete**

- Vercel akan otomatis build dan deploy

### Deploy ke Netlify

```bash
npm run build

# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

---

## 📚 Useful Commands

```bash
# Development
npm run dev              # Start development server

# Build
npm run build            # Build untuk production
npm run preview          # Preview production build

# Linting
npm run lint             # Run ESLint

# Cleanup
rm -rf node_modules      # Delete node_modules
npm cache clean --force  # Clear npm cache
npm install              # Fresh install
```

---

## 📝 License

ISC License

---

**Last Updated:** January 17, 2024
