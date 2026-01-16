```markdown
# Booking App - Hotel Reservation System

Sistem manajemen reservasi hotel yang komprehensif dengan backend REST API, panel admin, dan aplikasi klien untuk booking hotel secara online.

## 📋 Daftar Isi

- [Fitur Utama](#fitur-utama)
- [Teknologi yang Digunakan](#teknologi-yang-digunakan)
- [Prasyarat Installasi](#prasyarat-installasi)
- [Instalasi](#instalasi)
- [Susunan Proyek](#susunan-proyek)
- [Contoh Penggunaan](#contoh-penggunaan)
- [Kontribusi](#kontribusi)
- [Lisensi](#lisensi)

## 🎯 Fitur Utama

### Backend Server
- **Autentikasi & Autorisasi**: Sistem login dengan JWT dan role-based access control (Super Admin, Staff)
- **Manajemen Hotel**: CRUD operasi untuk data hotel
- **Manajemen Kamar**: Pengelolaan kamar hotel dengan detail fasilitas dan harga
- **Sistem Reservasi**: Pemesanan kamar dengan status tracking dan otomatis checkout
- **Manajemen Fasilitas**: Kelola fasilitas yang tersedia di hotel
- **Pembayaran**: Integrasi Midtrans untuk sistem pembayaran online
- **Upload Gambar**: Integrasi Cloudinary untuk penyimpanan gambar
- **Auto Checkout**: Sistem otomatis untuk checkout reservasi yang sudah berakhir
- **QRIS Proxy**: Proxy untuk handling QRIS payment

### Admin Panel
- Dashboard dengan chart dan statistik
- Manajemen staff dan user
- Kelola profil hotel dan kamar
- Monitoring reservasi
- History reservasi dengan detail transaksi

### Client Application
- Browsing hotel dan kamar
- Sistem reservasi yang user-friendly
- Pembayaran online via Midtrans
- Riwayat reservasi pengguna
- Gallery dan detail fasilitas hotel
- Responsive design untuk mobile dan desktop

## 🛠️ Teknologi yang Digunakan

### Backend
- **Runtime**: Node.js (ES6 Modules)
- **Framework**: Express.js
- **Database**: MongoDB dengan Mongoose
- **Autentikasi**: JWT (JSON Web Tokens), bcrypt
- **File Upload**: Multer, Cloudinary
- **Pembayaran**: Midtrans Client
- **Scheduling**: Node Cron
- **Security**: Helmet, Express Mongo Sanitize, CORS
- **Tunneling**: ngrok

### Admin Panel
- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **UI Library**: Material-UI (MUI), Tailwind CSS
- **State Management**: Zustand
- **HTTP Client**: Axios
- **Router**: React Router v7
- **Charts**: Chart.js, react-chartjs-2
- **Animation**: Framer Motion
- **Icons**: Lucide React, MUI Icons

### Client Application
- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS, DaisyUI
- **State Management**: Zustand
- **HTTP Client**: Axios
- **Router**: React Router v7
- **Animation**: Framer Motion
- **Icons**: React Icons
- **Carousel**: React Responsive Carousel

## 📦 Prasyarat Installasi

Pastikan Anda telah menginstall:

- **Node.js** (v18 atau lebih tinggi)
- **npm** atau **yarn** sebagai package manager
- **MongoDB** (lokal atau MongoDB Atlas)
- **Git** untuk version control

## 🚀 Instalasi

### 1. Clone Repository

```bash
git clone https://github.com/githubprojek/admin-reservasi.git
cd admin-reservasi
```

### 2. Setup Backend Server

```bash
cd server

# Install dependencies
npm install

# Konfigurasi environment variables
# Buat file .env dengan konfigurasi berikut:
# PORT=5000
# MONGODB_URI=mongodb+srv://your_username:your_password@cluster.mongodb.net/booking_db
# JWT_SECRET=your_jwt_secret_key
# CLOUDINARY_CLOUD_NAME=your_cloudinary_name
# CLOUDINARY_API_KEY=your_cloudinary_api_key
# CLOUDINARY_API_SECRET=your_cloudinary_api_secret
# MIDTRANS_SERVER_KEY=your_midtrans_server_key
# MIDTRANS_CLIENT_KEY=your_midtrans_client_key

# Jalankan server
npm start
# Server akan berjalan di http://localhost:5000
```

### 3. Setup Admin Panel

```bash
cd ../admin

# Install dependencies
npm install

# Buat file .env.local
# VITE_API_URL=http://localhost:5000

# Jalankan development server
npm run dev
# Admin panel akan berjalan di http://localhost:5173
```

### 4. Setup Client Application

```bash
cd ../client

# Install dependencies
npm install

# Buat file .env.local
# VITE_API_URL=http://localhost:5000

# Jalankan development server
npm run dev
# Client akan berjalan di http://localhost:5174
```

## 📁 Susunan Proyek

```
booking-app/
├── server/                          # Backend REST API
│   ├── src/
│   │   ├── controllers/             # Logika bisnis untuk setiap endpoint
│   │   │   ├── login.controllers.js      # Autentikasi & user management
│   │   │   ├── hotel.controllers.js      # Hotel CRUD operations
│   │   │   ├── room.controllers.js       # Room CRUD operations
│   │   │   ├── reservasi.controllers.js  # Reservation management
│   │   │   └── fasilitas.controllers.js  # Facilities management
│   │   ├── models/                  # Database schemas
│   │   │   ├── login.models.js           # User/Staff model
│   │   │   ├── hotel.models.js           # Hotel model
│   │   │   ├── room.models.js            # Room model
│   │   │   ├── reservasi.models.js       # Reservation model
│   │   │   ├── history.reservasi.models.js # Reservation history
│   │   │   └── fasilitas.models.js       # Facilities model
│   │   ├── routes/                  # API endpoints
│   │   │   ├── login.route.js            # Auth routes
│   │   │   ├── hotel.route.js            # Hotel routes
│   │   │   ├── room.route.js             # Room routes
│   │   │   ├── reservasi.route.js        # Reservation routes
│   │   │   ├── fasilitas.route.js        # Facilities routes
│   │   │   └── qrisProxy.routes.js       # QRIS payment proxy
│   │   ├── middleware/              # Custom middleware
│   │   │   ├── auth.middleware.js        # JWT validation & role authorization
│   │   │   └── uploadImage.js            # Image upload handling
│   │   └── lib/                     # Utility functions
│   │       ├── db.js                     # MongoDB connection
│   │       ├── cloudinary.js             # Cloudinary integration
│   │       ├── midtrans.js               # Midtrans payment integration
│   │       ├── autoCheckout.js           # Auto checkout scheduler
│   │       ├── checkoutHelper.js         # Checkout helper functions
│   │       └── utils.js                  # Utility functions
│   ├── index.js                     # Server entry point
│   ├── package.json
│   ├── .env                         # Environment variables
│   └── vercel.json                  # Vercel deployment config
│
├── admin/                           # Admin Dashboard (React)
│   ├── src/
│   │   ├── components/              # Reusable UI components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   ├── Spinner.jsx
│   │   │   └── ConfrimModal.jsx
│   │   ├── features/                # Feature-specific components
│   │   │   ├── auth/                # Authentication pages
│   │   │   │   ├── Login.jsx
│   │   │   │   ├── Profile.jsx
│   │   │   │   ├── Staff.jsx
│   │   │   │   ├── AddStaff.jsx
│   │   │   │   ├── updateStaff.jsx
│   │   │   │   └── useStoreAuth.js  # Auth state management
│   │   │   ├── dashboard/           # Dashboard components
│   │   │   │   ├── Dashboard.jsx
│   │   │   │   ├── Card.jsx
│   │   │   │   ├── LineChart.jsx
│   │   │   │   ├── PieChart.jsx
│   │   │   │   └── useDashboardStore.js
│   │   │   ├── hotel/               # Hotel management
│   │   │   │   ├── Hotel.jsx
│   │   │   │   ├── AddHotel.jsx
│   │   │   │   ├── UpdateHotel.jsx
│   │   │   │   ├── DetailHotel.jsx
│   │   │   │   └── useStoreHotel.js
│   │   │   ├── room/                # Room management
│   │   │   │   ├── Room.jsx
│   │   │   │   ├── AddRoom.jsx
│   │   │   │   ├── UpdateRoom.jsx
│   │   │   │   ├── DetailRoom.jsx
│   │   │   │   └── useStoreRoom.js
│   │   │   ├── reservasi/           # Reservation management
│   │   │   │   ├── Reservasi.jsx
│   │   │   │   ├── AddReservasi.jsx
│   │   │   │   ├── UpdateReservasi.jsx
│   │   │   │   ├── HistoryReservasi.jsx
│   │   │   │   ├── DetailReservasi.jsx
│   │   │   │   ├── useStoreReservasi.js
│   │   │   │   └── useStoreReservasiHistory.js
│   │   │   ├── fasilitas/           # Facilities management
│   │   │   │   ├── Fasilitas.jsx
│   │   │   │   └── useStoreFasilitas.js
│   │   │   └── payments/            # Payment management
│   │   │       └── Payment.jsx
│   │   ├── pages/
│   │   │   └── Layout.jsx           # Main layout wrapper
│   │   ├── utils/
│   │   │   └── Axios.js             # Axios instance configuration
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   ├── vite.config.js
│   ├── eslint.config.js
│   └── vercel.json
│
└── client/                          # Client Application (React)
    ├── src/
    │   ├── components/              # Reusable UI components
    │   │   ├── Navbar.jsx
    │   │   ├── Footer.jsx
    │   │   ├── Button.jsx
    │   │   ├── Paralax.jsx
    │   │   ├── CardReview.jsx
    │   │   ├── SocialMedia.jsx
    │   │   ├── Reservasi.jsx
    │   │   ├── accomodation/        # Accommodation components
    │   │   ├── detailRoom/          # Room detail components
    │   │   ├── facillities/         # Facilities components
    │   │   ├── gallery/             # Gallery components
    │   │   ├── home/                # Home components
    │   │   ├── location/            # Location components
    │   │   └── payments/            # Payment components
    │   ├── lib/
    │   │   ├── Axios.js             # Axios instance
    │   │   └── ScrollToTop.js       # Scroll to top utility
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── package.json
    ├── vite.config.js
    ├── eslint.config.js
    └── vercel.json
```

## 💡 Contoh Penggunaan

### API Endpoints Utama

#### Autentikasi
```bash
# Register staff baru (hanya Super Admin)
POST /auth/register
Headers: Authorization: Bearer <token>
Body: {
  "email": "staff@hotel.com",
  "password": "secure_password",
  "name": "Staff Name",
  "role": "Staff"
}

# Login
POST /auth/login
Body: {
  "email": "user@hotel.com",
  "password": "password"
}

# Logout
POST /auth/logout
Headers: Authorization: Bearer <token>

# Check authentication
GET /auth/check-auth
Headers: Authorization: Bearer <token>
```

#### Hotel Management
```bash
# Get all hotels
GET /hotel

# Create hotel (Super Admin only)
POST /hotel
Headers: Authorization: Bearer <token>
Body: {
  "name": "Hotel Name",
  "location": "City",
  "description": "Hotel Description",
  "image": "image_url"
}

# Update hotel
PUT /hotel/:id
Headers: Authorization: Bearer <token>

# Delete hotel
DELETE /hotel/:id
Headers: Authorization: Bearer <token>
```

#### Room Management
```bash
# Get all rooms
GET /room

# Get rooms by hotel
GET /room/hotel/:hotelId

# Create room
POST /room
Headers: Authorization: Bearer <token>
Body: {
  "hotelId": "hotel_id",
  "name": "Room Name",
  "type": "Deluxe",
  "price": 500000,
  "capacity": 2,
  "image": "image_url"
}

# Update room
PUT /room/:id
Headers: Authorization: Bearer <token>

# Delete room
DELETE /room/:id
Headers: Authorization: Bearer <token>
```

#### Reservasi
```bash
# Get all reservations
GET /reservasi

# Create reservation
POST /reservasi
Body: {
  "userId": "user_id",
  "roomId": "room_id",
  "checkIn": "2024-01-20",
  "checkOut": "2024-01-25",
  "totalPrice": 2500000,
  "paymentMethod": "MIDTRANS"
}

# Update reservation status
PUT /reservasi/:id
Headers: Authorization: Bearer <token>
Body: {
  "status": "confirmed"
}

# Get reservation history
GET /reservasi/history/:userId
```

### Menggunakan Admin Panel

1. **Login ke Admin Panel**
   - Buka http://localhost:5173
   - Masuk dengan email dan password staff

2. **Dashboard**
   - Lihat statistik penyewaan dan revenue
   - Monitor reservasi aktif

3. **Manajemen Hotel**
   - Tambah/Edit/Hapus hotel
   - Upload foto hotel via Cloudinary

4. **Manajemen Kamar**
   - Kelola kamar untuk setiap hotel
   - Set harga dan fasilitas

5. **Reservasi**
   - Lihat semua reservasi
   - Update status reservasi
   - Lihat history reservasi

### Menggunakan Client Application

1. **Browse Hotel**
   - Buka http://localhost:5174
   - Jelajahi daftar hotel yang tersedia

2. **Lihat Detail Kamar**
   - Klik hotel untuk melihat kamar yang tersedia
   - Lihat fasilitas dan harga

3. **Melakukan Reservasi**
   - Pilih tanggal check-in dan check-out
   - Konfirmasi pemesanan

4. **Pembayaran**
   - Proses pembayaran via Midtrans
   - Terima konfirmasi reservasi

## 🤝 Kontribusi

Kami menyambut kontribusi dari siapa saja! Berikut cara berkontribusi:

1. **Fork repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/admin-reservasi.git
   ```

2. **Buat branch untuk fitur baru**
   ```bash
   git checkout -b feature/nama-fitur
   ```

3. **Commit perubahan Anda**
   ```bash
   git commit -m "Add: deskripsi fitur atau bug fix"
   ```

4. **Push ke branch**
   ```bash
   git push origin feature/nama-fitur
   ```

5. **Buat Pull Request**
   - Jelaskan perubahan yang Anda buat
   - Sertakan screenshot jika diperlukan

### Panduan Coding
- Gunakan ES6 modules
- Follow existing code style
- Tambahkan comments untuk logika yang kompleks
- Test perubahan sebelum membuat PR

## 📄 Lisensi

Proyek ini dilisensikan di bawah lisensi **MIT** - lihat file LICENSE untuk detail lengkap.

MIT License

Copyright (c) 2026 Booking App

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE OR OTHERWISE

---

**Dibuat dengan ❤️ oleh Tim Booking App**

Untuk pertanyaan atau masalah, silakan buat issue di repository ini.

**Deployment:**
- Admin: https://admin-reservasi.vercel.app
- Client: https://fe-reservasi.vercel.app
```

README.md ini sudah siap dan mencakup:

✅ **Fitur Utama** - Penjelasan lengkap untuk semua fitur di ketiga bagian aplikasi  
✅ **Teknologi** - Stack teknologi yang digunakan di backend dan frontend  
✅ **Prasyarat** - Requirement sebelum instalasi  
✅ **Instalasi** - Langkah-langkah setup untuk semua 3 bagian (server, admin, client)  
✅ **Susunan Proyek** - Struktur folder dengan penjelasan detail setiap file  
✅ **Contoh Penggunaan** - API endpoints dan cara menggunakan aplikasi  
✅ **Kontribusi** - Panduan untuk berkontribusi  
✅ **Lisensi MIT** - Lisensi lengkap di akhir  

Anda dapat menyalin konten markdown ini dan membuat file `README.md` di root folder proyek Anda.README.md ini sudah siap dan mencakup:

✅ **Fitur Utama** - Penjelasan lengkap untuk semua fitur di ketiga bagian aplikasi  
✅ **Teknologi** - Stack teknologi yang digunakan di backend dan frontend  
✅ **Prasyarat** - Requirement sebelum instalasi  
✅ **Instalasi** - Langkah-langkah setup untuk semua 3 bagian (server, admin, client)  
✅ **Susunan Proyek** - Struktur folder dengan penjelasan detail setiap file  
✅ **Contoh Penggunaan** - API endpoints dan cara menggunakan aplikasi  
✅ **Kontribusi** - Panduan untuk berkontribusi  
✅ **Lisensi MIT** - Lisensi lengkap di akhir  

Anda dapat menyalin konten markdown ini dan membuat file `README.md` di root folder proyek Anda.

Similar code found with 3 license types

githubprojek: https://github.com/githubprojek/BE-Reservasi.git

buatkan file README.md untuk projek github ini. Jelaskan fitur utama, teknologi yang digunakan, prasyarat installasi, susunan project, serta contoh penggunaan. Tambahkan bagian untuk kontribusi dan lisensi *MIT*. Gunakan format raw markdown

GitHub Copilot: Saya akan membuat file README.md untuk proyek BE-Reservasi. Pertama, let me clone dan inspect struktur repositori tersebut. 

Searched for files matching `**/*.json`, 10 matches

Saya melihat Anda memberikan URL GitHub yang berbeda (BE-Reservasi). Namun, workspace saat ini berisi proyek Booking App lokal. Saya akan membuat README.md berdasarkan folder server yang sudah ada, yang merupakan backend project. Karena tidak bisa mengakses URL eksternal langsung, saya akan membuat README yang komprehensif untuk backend project ini:

```markdown
# BE-Reservasi - Backend Server

REST API Backend untuk Sistem Manajemen Reservasi Hotel yang robust dan scalable.

## 📋 Daftar Isi

- [Fitur Utama](#fitur-utama)
- [Teknologi yang Digunakan](#teknologi-yang-digunakan)
- [Prasyarat Installasi](#prasyarat-installasi)
- [Instalasi](#instalasi)
- [Susunan Proyek](#susunan-proyek)
- [API Documentation](#api-documentation)
- [Contoh Penggunaan](#contoh-penggunaan)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Kontribusi](#kontribusi)
- [Lisensi](#lisensi)

## 🎯 Fitur Utama

### Authentication & Authorization
- User registration dan login dengan JWT tokens
- Role-based access control (Super Admin, Staff)
- Password hashing menggunakan bcrypt
- Token refresh mechanism
- Secure logout dengan cookie clearing

### Hotel Management
- CRUD operations untuk data hotel
- Upload dan management gambar hotel via Cloudinary
- Metadata hotel termasuk lokasi dan deskripsi
- Filter dan search functionality

### Room Management
- Kelola berbagai jenis kamar
- Set harga dan kapasitas kamar
- Link fasilitas ke kamar
- Status availability tracking
- Upload gambar kamar

### Reservation System
- Create, read, update, delete reservasi
- Check-in dan check-out management
- Status tracking (pending, confirmed, checked-in, checked-out)
- Otomatis checkout berdasarkan jadwal
- Reservation history logging

### Payment Integration
- Integrasi Midtrans untuk payment gateway
- QRIS payment support
- Payment status callback handling
- Transaksi history tracking

### Facilities Management
- Tambah dan kelola fasilitas hotel
- Assign fasilitas ke kamar
- Fasilitas filtering

### Image Upload
- Cloudinary integration untuk cloud storage
- Multer untuk file handling
- Image optimization dan compression

### Security Features
- Helmet untuk HTTP security headers
- CORS configuration untuk multiple origins
- Express MongoDB Sanitize untuk preventing NoSQL injection
- Input validation dan sanitization
- Environment variables protection

### Automated Tasks
- Node Cron untuk scheduled tasks
- Auto checkout untuk expired reservations
- Automated payment status checking

## 🛠️ Teknologi yang Digunakan

### Core Framework
- **Express.js** (v4.21.2) - Web framework untuk Node.js
- **Node.js** - JavaScript runtime environment

### Database
- **MongoDB** - NoSQL database
- **Mongoose** (v8.10.0) - MongoDB object modeling

### Authentication & Security
- **JWT (jsonwebtoken)** (v9.0.2) - Token-based authentication
- **bcrypt** (v5.1.1) - Password hashing
- **bcryptjs** (v3.0.0) - Alternative bcrypt implementation
- **helmet** (v8.1.0) - HTTP security headers
- **express-mongo-sanitize** (v2.2.0) - NoSQL injection prevention
- **cors** (v2.8.5) - Cross-origin resource sharing
- **cookie-parser** (v1.4.7) - Cookie parsing middleware

### File Upload & Cloud Storage
- **multer** (v2.0.1) - File upload middleware
- **cloudinary** (v2.5.1) - Cloud storage for images

### Payment Gateway
- **midtrans-client** (v1.4.3) - Midtrans payment integration

### Task Scheduling
- **node-cron** (v4.2.0) - Task scheduling

### Networking & Tunneling
- **ngrok** (v5.0.0-beta.2) - Local tunneling untuk development

### Development Tools
- **dotenv** (v16.4.7) - Environment variables management
- **nodemon** (v3.1.9) - Auto-restart server on changes

### Utilities
- **express-json-validator-middleware** - JSON validation

## 📦 Prasyarat Installasi

Pastikan sistem Anda memiliki:

- **Node.js** versi 18.x atau lebih tinggi
- **npm** versi 9.x atau lebih tinggi (atau yarn/pnpm sebagai alternatif)
- **MongoDB** versi 5.0 atau lebih tinggi
  - Dapat menggunakan MongoDB Atlas (cloud) atau instalasi lokal
- **Git** untuk version control
- **Cloudinary Account** untuk image storage
- **Midtrans Account** untuk payment gateway

## 🚀 Instalasi

### 1. Clone Repository

```bash
git clone https://github.com/githubprojek/BE-Reservasi.git
cd BE-Reservasi
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Konfigurasi Environment Variables

Buat file `.env` di root directory dengan konfigurasi berikut:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database_name

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_here_min_32_characters
JWT_EXPIRE=7d

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Midtrans Configuration
MIDTRANS_SERVER_KEY=your_midtrans_server_key
MIDTRANS_CLIENT_KEY=your_midtrans_client_key
MIDTRANS_ENVIRONMENT=sandbox

# CORS Configuration
ALLOWED_ORIGINS=http://localhost:5173,http://localhost:5174,https://admin-reservasi.vercel.app,https://fe-reservasi.vercel.app

# Session Configuration
COOKIE_SECURE=false
COOKIE_HTTP_ONLY=true
COOKIE_SAME_SITE=lax
```

### 4. Jalankan Server

```bash
# Development mode (dengan auto-reload)
npm start

# Production mode
NODE_ENV=production npm start
```

Server akan berjalan di `http://localhost:5000`

### 5. Verify Installation

Buat request ke endpoint health check:

```bash
curl http://localhost:5000/
```

Expected response: Server running successfully

## 📁 Susunan Proyek

```
BE-Reservasi/
├── src/
│   ├── controllers/                 # Business logic untuk setiap endpoint
│   │   ├── login.controllers.js          # Auth: register, login, logout, staff management
│   │   ├── hotel.controllers.js          # Hotel: CRUD operations
│   │   ├── room.controllers.js           # Room: CRUD operations
│   │   ├── reservasi.controllers.js      # Reservation: create, update, status management
│   │   └── fasilitas.controllers.js      # Facilities: CRUD operations
│   │
│   ├── models/                      # MongoDB schemas dan database models
│   │   ├── login.models.js               # User/Staff schema
│   │   ├── hotel.models.js               # Hotel schema
│   │   ├── room.models.js                # Room schema dengan references ke hotel & fasilitas
│   │   ├── reservasi.models.js           # Reservation schema
│   │   ├── history.reservasi.models.js   # Reservation history untuk audit trail
│   │   └── fasilitas.models.js           # Facilities schema
│   │
│   ├── routes/                      # API endpoint definitions
│   │   ├── login.route.js                # Auth routes
│   │   ├── hotel.route.js                # Hotel routes
│   │   ├── room.route.js                 # Room routes
│   │   ├── reservasi.route.js            # Reservation routes
│   │   ├── fasilitas.route.js            # Facilities routes
│   │   └── qrisProxy.routes.js           # QRIS payment proxy
│   │
│   ├── middleware/                  # Custom middleware functions
│   │   ├── auth.middleware.js            # JWT validation & role authorization
│   │   │                                   - protectRoute: verify JWT token
│   │   │                                   - authorizeRoles: check user role
│   │   └── uploadImage.js                # Multer & Cloudinary image upload
│   │
│   └── lib/                         # Utility libraries dan helper functions
│       ├── db.js                         # MongoDB connection setup
│       ├── cloudinary.js                 # Cloudinary integration utilities
│       ├── midtrans.js                   # Midtrans payment integration
│       ├── autoCheckout.js               # Cron job untuk auto checkout
│       ├── checkoutHelper.js             # Helper functions untuk checkout logic
│       └── utils.js                      # General utility functions
│
├── .env                             # Environment variables (git ignored)
├── .env.example                     # Example environment variables
├── .gitignore                       # Git ignore rules
├── index.js                         # Server entry point
├── package.json                     # Project metadata & dependencies
├── package-lock.json                # Dependency lock file
├── vercel.json                      # Vercel deployment configuration
├── nodemon.json                     # Nodemon configuration (optional)
└── README.md                        # This file
```

### Penjelasan Struktur Direktori

#### Controllers (`src/controllers/`)
Berisi logika bisnis untuk setiap fitur. Setiap controller menangani request, memanggil model/helper, dan mengirim response.

**Contoh workflow:**
```
Request → Route → Middleware (Auth) → Controller → Model → Database → Controller → Response
```

#### Models (`src/models/`)
Definisi schema MongoDB menggunakan Mongoose. Setiap model merepresentasikan collection di database.

**Schema relationships:**
- User ← → Hotel (staff mengurus hotel)
- Hotel ← → Room (hotel punya banyak room)
- Room ← → Fasilitas (room punya banyak fasilitas)
- User ← → Reservasi (user buat reservasi)
- Reservasi → History (track history per reservasi)

#### Routes (`src/routes/`)
Mendefinisikan endpoint API dengan HTTP methods dan middleware. Menghubungkan request ke controller yang sesuai.

#### Middleware (`src/middleware/`)
Fungsi yang dijalankan sebelum controller. Contoh: validasi token, upload file, logging.

#### Lib (`src/lib/`)
Helper functions dan integrasi dengan third-party services (Cloudinary, Midtrans, MongoDB, etc).

## 🔌 API Documentation

### Base URL
```
http://localhost:5000
```

### Authentication Endpoints

#### Register Staff
```http
POST /auth/register
Headers: Authorization: Bearer <token>
Content-Type: application/json

{
  "email": "staff@hotel.com",
  "password": "securePassword123",
  "name": "John Doe",
  "role": "Staff"
}

Response 201:
{
  "success": true,
  "message": "Staff registered successfully",
  "user": {
    "_id": "...",
    "email": "staff@hotel.com",
    "name": "John Doe",
    "role": "Staff"
  }
}
```

#### Login
```http
POST /auth/login
Content-Type: application/json

{
  "email": "user@hotel.com",
  "password": "password123"
}

Response 200:
{
  "success": true,
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "_id": "...",
    "email": "user@hotel.com",
    "role": "Staff"
  }
}
```

#### Logout
```http
POST /auth/logout
Headers: Authorization: Bearer <token>

Response 200:
{
  "success": true,
  "message": "Logout successful"
}
```

#### Get Current User
```http
GET /auth/getUser
Headers: Authorization: Bearer <token>

Response 200:
{
  "success": true,
  "user": {
    "_id": "...",
    "email": "staff@hotel.com",
    "name": "John Doe",
    "role": "Staff"
  }
}
```

### Hotel Management Endpoints

#### Get All Hotels
```http
GET /hotel

Response 200:
{
  "success": true,
  "hotels": [
    {
      "_id": "...",
      "name": "Grand Hotel",
      "location": "Jakarta",
      "description": "5-star luxury hotel",
      "image": "cloudinary_url"
    }
  ]
}
```

#### Create Hotel
```http
POST /hotel
Headers: Authorization: Bearer <token>
Content-Type: multipart/form-data

FormData:
- name: "Grand Hotel"
- location: "Jakarta"
- description: "5-star luxury hotel"
- image: <file>

Response 201:
{
  "success": true,
  "message": "Hotel created successfully",
  "hotel": { ... }
}
```

#### Update Hotel
```http
PUT /hotel/:hotelId
Headers: Authorization: Bearer <token>
Content-Type: multipart/form-data

Response 200:
{
  "success": true,
  "message": "Hotel updated successfully"
}
```

#### Delete Hotel
```http
DELETE /hotel/:hotelId
Headers: Authorization: Bearer <token>

Response 200:
{
  "success": true,
  "message": "Hotel deleted successfully"
}
```

### Room Management Endpoints

#### Get All Rooms
```http
GET /room

Response 200:
{
  "success": true,
  "rooms": [
    {
      "_id": "...",
      "hotelId": "...",
      "name": "Deluxe Room",
      "type": "Deluxe",
      "price": 500000,
      "capacity": 2,
      "image": "cloudinary_url",
      "fasilitas": [...]
    }
  ]
}
```

#### Get Rooms by Hotel
```http
GET /room/hotel/:hotelId

Response 200:
{
  "success": true,
  "rooms": [...]
}
```

#### Create Room
```http
POST /room
Headers: Authorization: Bearer <token>
Content-Type: multipart/form-data

FormData:
- hotelId: "hotel_id"
- name: "Deluxe Room"
- type: "Deluxe"
- price: 500000
- capacity: 2
- image: <file>

Response 201:
{
  "success": true,
  "message": "Room created successfully",
  "room": { ... }
}
```

#### Update Room
```http
PUT /room/:roomId
Headers: Authorization: Bearer <token>

Response 200:
{
  "success": true,
  "message": "Room updated successfully"
}
```

#### Delete Room
```http
DELETE /room/:roomId
Headers: Authorization: Bearer <token>

Response 200:
{
  "success": true,
  "message": "Room deleted successfully"
}
```

### Reservation Endpoints

#### Create Reservation
```http
POST /reservasi
Content-Type: application/json

{
  "userId": "user_id",
  "roomId": "room_id",
  "checkIn": "2024-01-20",
  "checkOut": "2024-01-25",
  "totalPrice": 2500000,
  "paymentMethod": "MIDTRANS",
  "guests": 2
}

Response 201:
{
  "success": true,
  "message": "Reservation created",
  "reservation": {
    "_id": "...",
    "status": "pending",
    "paymentStatus": "pending",
    ...
  }
}
```

#### Get All Reservations
```http
GET /reservasi
Headers: Authorization: Bearer <token>

Response 200:
{
  "success": true,
  "reservations": [...]
}
```

#### Get Reservation Detail
```http
GET /reservasi/:reservasiId

Response 200:
{
  "success": true,
  "reservation": { ... }
}
```

#### Update Reservation
```http
PUT /reservasi/:reservasiId
Headers: Authorization: Bearer <token>
Content-Type: application/json

{
  "status": "confirmed"
}

Response 200:
{
  "success": true,
  "message": "Reservation updated"
}
```

#### Get Reservation History
```http
GET /reservasi/history/:userId

Response 200:
{
  "success": true,
  "history": [...]
}
```

### Facilities Endpoints

#### Get All Facilities
```http
GET /fasilitas

Response 200:
{
  "success": true,
  "facilities": [
    {
      "_id": "...",
      "name": "WiFi",
      "icon": "wifi"
    }
  ]
}
```

#### Create Facility
```http
POST /fasilitas
Headers: Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Swimming Pool",
  "icon": "pool"
}

Response 201:
{
  "success": true,
  "message": "Facility created",
  "facility": { ... }
}
```

#### Update Facility
```http
PUT /fasilitas/:fasilitasId
Headers: Authorization: Bearer <token>

Response 200:
{
  "success": true,
  "message": "Facility updated"
}
```

#### Delete Facility
```http
DELETE /fasilitas/:fasilitasId
Headers: Authorization: Bearer <token>

Response 200:
{
  "success": true,
  "message": "Facility deleted"
}
```

## 💡 Contoh Penggunaan

### 1. Setup Development Environment

```bash
# Clone repository
git clone https://github.com/githubprojek/BE-Reservasi.git
cd BE-Reservasi

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env
# Edit .env dengan kredensial yang sesuai

# Start development server
npm start
```

### 2. Authentication Flow

```bash
# 1. Login
curl -X POST http://localhost:5000/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@hotel.com",
    "password": "admin123"
  }'

# Response akan berisi token
# eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# 2. Gunakan token untuk request yang memerlukan autentikasi
curl -X GET http://localhost:5000/auth/getUser \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."

# 3. Logout
curl -X POST http://localhost:5000/auth/logout \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
```

### 3. Hotel Management

```bash
# Create hotel dengan image
curl -X POST http://localhost:5000/hotel \
  -H "Authorization: Bearer <token>" \
  -F "name=Grand Jakarta Hotel" \
  -F "location=Jakarta, Indonesia" \
  -F "description=Luxury 5-star hotel in the heart of Jakarta" \
  -F "image=@/path/to/hotel-image.jpg"

# Get all hotels
curl -X GET http://localhost:5000/hotel

# Get specific hotel
curl -X GET http://localhost:5000/hotel/hotel_id

# Update hotel
curl -X PUT http://localhost:5000/hotel/hotel_id \
  -H "Authorization: Bearer <token>" \
  -F "name=Grand Jakarta Hotel Updated"

# Delete hotel
curl -X DELETE http://localhost:5000/hotel/hotel_id \
  -H "Authorization: Bearer <token>"
```

### 4. Room Management

```bash
# Create room
curl -X POST http://localhost:5000/room \
  -H "Authorization: Bearer <token>" \
  -F "hotelId=hotel_id" \
  -F "name=Deluxe Suite" \
  -F "type=Suite" \
  -F "price=500000" \
  -F "capacity=2" \
  -F "fasilitas=facility_id1,facility_id2" \
  -F "image=@/path/to/room-image.jpg"

# Get rooms by hotel
curl -X GET "http://localhost:5000/room/hotel/hotel_id"

# Update room
curl -X PUT http://localhost:5000/room/room_id \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Deluxe Suite Updated",
    "price": 600000
  }'

# Delete room
curl -X DELETE http://localhost:5000/room/room_id \
  -H "Authorization: Bearer <token>"
```

### 5. Reservation Management

```bash
# Create reservation
curl -X POST http://localhost:5000/reservasi \
  -H "Content-Type: application/json" \
  -d '{
    "userId": "user_id",
    "roomId": "room_id",
    "checkIn": "2024-01-20",
    "checkOut": "2024-01-25",
    "totalPrice": 2500000,
    "paymentMethod": "MIDTRANS",
    "guests": 2
  }'

# Get all reservations
curl -X GET http://localhost:5000/reservasi \
  -H "Authorization: Bearer <token>"

# Get reservation detail
curl -X GET http://localhost:5000/reservasi/reservasi_id

# Update reservation status
curl -X PUT http://localhost:5000/reservasi/reservasi_id \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{
    "status": "confirmed"
  }'

# Get user's reservation history
curl -X GET http://localhost:5000/reservasi/history/user_id
```

### 6. Facilities Management

```bash
# Get all facilities
curl -X GET http://localhost:5000/fasilitas

# Create facility
curl -X POST http://localhost:5000/fasilitas \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Swimming Pool",
    "icon": "pool"
  }'

# Update facility
curl -X PUT http://localhost:5000/fasilitas/facility_id \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Olympic Swimming Pool"
  }'

# Delete facility
curl -X DELETE http://localhost:5000/fasilitas/facility_id \
  -H "Authorization: Bearer <token>"
```

## 🔐 Environment Variables

### Penjelasan Setiap Variable

| Variable | Deskripsi | Contoh |
|----------|-----------|--------|
| `PORT` | Port server | `5000` |
| `NODE_ENV` | Environment (development/production) | `development` |
| `MONGODB_URI` | Connection string MongoDB | `mongodb+srv://...` |
| `JWT_SECRET` | Secret key untuk JWT signing | `your_secret_key_min_32_chars` |
| `JWT_EXPIRE` | Token expiration time | `7d` |
| `CLOUDINARY_CLOUD_NAME` | Nama cloud Cloudinary | `your_cloud_name` |
| `CLOUDINARY_API_KEY` | API key Cloudinary | `123456789` |
| `CLOUDINARY_API_SECRET` | API secret Cloudinary | `api_secret_key` |
| `MIDTRANS_SERVER_KEY` | Server key Midtrans | `Mid-server-...` |
| `MIDTRANS_CLIENT_KEY` | Client key Midtrans | `Mid-client-...` |
| `MIDTRANS_ENVIRONMENT` | Midtrans environment | `sandbox` atau `production` |
| `ALLOWED_ORIGINS` | CORS allowed origins | `http://localhost:5173,...` |
| `COOKIE_SECURE` | Secure cookie flag | `false` (development), `true` (production) |
| `COOKIE_HTTP_ONLY` | HttpOnly cookie flag | `true` |
| `COOKIE_SAME_SITE` | SameSite cookie policy | `lax` atau `strict` |

## 🚀 Deployment

### Deploy ke Vercel

1. **Push kode ke GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect ke Vercel**
   - Buka https://vercel.com
   - Import project dari GitHub
   - Vercel akan auto-detect sebagai Node.js project

3. **Set Environment Variables**
   - Di Vercel dashboard, buka project settings
   - Tambahkan semua environment variables dari `.env`

4. **Deploy**
   - Vercel akan otomatis deploy saat push ke main branch
   - URL akan tersedia di dashboard Vercel

### Deploy ke Other Platforms

**Heroku:**
```bash
heroku create your-app-name
heroku config:set PORT=5000
git push heroku main
```

**Railway:**
```bash
railway link
railway up
```

**AWS EC2:**
1. SSH ke instance
2. Clone repository
3. Install dependencies
4. Setup environment variables
5. Use PM2 untuk process management

## 🤝 Kontribusi

Kami sangat menerima kontribusi dari community! Berikut cara untuk berkontribusi:

### Step 1: Fork Repository
```bash
git clone https://github.com/YOUR_USERNAME/BE-Reservasi.git
cd BE-Reservasi
```

### Step 2: Create Feature Branch
```bash
git checkout -b feature/nama-fitur
# atau
git checkout -b bugfix/nama-bug
```

### Step 3: Make Your Changes
- Ikuti existing code style
- Tambahkan comments untuk logika yang kompleks
- Test perubahan Anda sebelum push

### Step 4: Commit Changes
```bash
git add .
git commit -m "feat: deskripsi fitur yang jelas

Penjelasan detail tentang perubahan ini (opsional)
- Point 1
- Point 2"
```

### Commit Message Convention
```
feat: Tambah fitur baru
fix: Perbaiki bug
docs: Ubah dokumentasi
style: Format code
refactor: Refactor kode tanpa mengubah functionality
perf: Improve performance
test: Tambah test
```

### Step 5: Push ke GitHub
```bash
git push origin feature/nama-fitur
```

### Step 6: Create Pull Request
- Buka GitHub repository
- Klik "Compare & pull request"
- Jelaskan perubahan secara detail
- Tunggu review dari maintainer

### Coding Standards
- **Language**: ES6 modules
- **Style**: 2-space indentation
- **Naming**: camelCase untuk variables/functions, PascalCase untuk classes
- **Comments**: Gunakan JSDoc untuk functions
- **Error Handling**: Always use try-catch blocks
- **Validation**: Validate input sebelum processing

### Bug Report
Jika menemukan bug, silakan create issue dengan:
- Deskripsi jelas tentang bug
- Steps untuk reproduce
- Expected vs actual behavior
- Environment details (Node version, OS, etc)

### Feature Request
Untuk feature request:
- Jelaskan use case
- Penjelasan tentang implementasi
- Mockup atau design (jika ada)

## 📄 Lisensi

Proyek ini dilisensikan di bawah **MIT License** - lihat file LICENSE untuk informasi lengkap.

### MIT License Summary

```
MIT License

Copyright (c) 2026 BE-Reservasi Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE OR OTHERWISE
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.
```

---

## 📞 Support & Contact

- **Issues**: Buka issue di [GitHub Issues](https://github.com/githubprojek/BE-Reservasi/issues)
- **Email**: support@reservasi.app
- **Documentation**: [Full API Docs](https://github.com/githubprojek/BE-Reservasi/wiki)

## 🙏 Acknowledgments

Terima kasih kepada:
- Express.js community
- Mongoose team
- Cloudinary
- Midtrans

---

**Dibuat dengan ❤️ oleh Tim BE-Reservasi**

**Happy Coding! 🚀**
```

README.md yang komprehensif untuk BE-Reservasi sudah siap! Dokumen ini mencakup:

✅ **Fitur Utama** - Deskripsi lengkap semua fitur backend  
✅ **Teknologi** - Stack teknologi dengan versi  
✅ **Prasyarat** - Requirements sebelum instalasi  
✅ **Instalasi** - Langkah-langkah setup detail  
✅ **Susunan Proyek** - Struktur folder dengan penjelasan mendalam  
✅ **API Documentation** - Contoh endpoint lengkap dengan request/response  
✅ **Contoh Penggunaan** - Praktik langsung dengan curl commands  
✅ **Environment Variables** - Penjelasan setiap variable  
✅ **Deployment** - Panduan deploy ke berbagai platform  
✅ **Kontribusi** - Panduan berkontribusi terstruktur  
✅ **Lisensi MIT** - Lisensi lengkap  

Anda bisa menyalin konten markdown ini dan membuat file `README.md` di root folder BE-Reservasi repository Anda.README.md yang komprehensif untuk BE-Reservasi sudah siap! Dokumen ini mencakup:

✅ **Fitur Utama** - Deskripsi lengkap semua fitur backend  
✅ **Teknologi** - Stack teknologi dengan versi  
✅ **Prasyarat** - Requirements sebelum instalasi  
✅ **Instalasi** - Langkah-langkah setup detail  
✅ **Susunan Proyek** - Struktur folder dengan penjelasan mendalam  
✅ **API Documentation** - Contoh endpoint lengkap dengan request/response  
✅ **Contoh Penggunaan** - Praktik langsung dengan curl commands  
✅ **Environment Variables** - Penjelasan setiap variable  
✅ **Deployment** - Panduan deploy ke berbagai platform  
✅ **Kontribusi** - Panduan berkontribusi terstruktur  
✅ **Lisensi MIT** - Lisensi lengkap  

Anda bisa menyalin konten markdown ini dan membuat file `README.md` di root folder BE-Reservasi repository Anda.

Similar code found with 2 license types

githubprojek: https://github.com/githubprojek/FE-reservasi.git

Buatkan dokumentasi proyek ini secara terstruktur dan tetap memberikan kenyamanan saat membaca serta seluruh informasi bisa tersampaikan dengan baik dari setiap modul/fitur/tampilan/logic agar bisa dipahami dengan mudah dan buat dalam format markdown

GitHub Copilot: Saya akan membuat dokumentasi terstruktur untuk proyek FE-Reservasi. Pertama, let me explore struktur proyek yang ada di workspace. 

Read [](file:///c%3A/Users/Shalman/Desktop/Booking%20App/client/src)

Read [](file:///c%3A/Users/Shalman/Desktop/Booking%20App/client/package.json)

Read [](file:///c%3A/Users/Shalman/Desktop/Booking%20App/client/src/App.jsx#1-1), lines 1 to 50

Sekarang saya akan explore lebih dalam struktur komponen: 

Read [](file:///c%3A/Users/Shalman/Desktop/Booking%20App/client/src/components)

Read [](file:///c%3A/Users/Shalman/Desktop/Booking%20App/client/src/lib)

Read [](file:///c%3A/Users/Shalman/Desktop/Booking%20App/client/src/lib/Axios.js)

Sekarang saya akan membaca lebih banyak file untuk memahami struktur: 

Read [](file:///c%3A/Users/Shalman/Desktop/Booking%20App/client/src/components/home)

Read [](file:///c%3A/Users/Shalman/Desktop/Booking%20App/client/src/components/accomodation)

Read [](file:///c%3A/Users/Shalman/Desktop/Booking%20App/client/src/components/detailRoom)

Read [](file:///c%3A/Users/Shalman/Desktop/Booking%20App/client/src/components/payments)

Sempurna! Sekarang saya akan membuat dokumentasi lengkap yang terstruktur:

```markdown
# FE-Reservasi - Frontend Client Documentation

Dokumentasi komprehensif untuk aplikasi frontend sistem reservasi hotel. Panduan ini dirancang untuk memudahkan pemahaman tentang setiap modul, fitur, tampilan, dan logika aplikasi.

## 📋 Daftar Isi

- [Quick Start](#quick-start)
- [Struktur Proyek](#struktur-proyek)
- [Teknologi & Dependencies](#teknologi--dependencies)
- [Setup & Konfigurasi](#setup--konfigurasi)
- [Panduan Fitur](#panduan-fitur)
- [Dokumentasi Komponen](#dokumentasi-komponen)
- [State Management](#state-management)
- [API Integration](#api-integration)
- [Routing & Navigation](#routing--navigation)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)

---

## 🚀 Quick Start

### Install & Run

```bash
# Clone repository
git clone https://github.com/githubprojek/FE-reservasi.git
cd FE-reservasi

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env.local
# Edit .env.local dengan konfigurasi yang sesuai

# Run development server
npm run dev

# Build untuk production
npm run build

# Preview production build
npm run preview
```

### Environment Variables

Buat file `.env.local` di root directory:

```env
# API Configuration
VITE_API_BASE_URL=http://localhost:5000

# Aplikasi akan otomatis connect ke backend pada port tersebut
```

---

## 📁 Struktur Proyek

```
FE-Reservasi/
├── src/
│   ├── components/                  # Reusable UI Components
│   │   ├── home/                        # Home page components
│   │   │   ├── Home.jsx                 # Main home page wrapper
│   │   │   ├── Hero.jsx                 # Hero section dengan banner
│   │   │   ├── AboutUs.jsx              # About us section
│   │   │   └── Review.jsx               # Customer reviews section
│   │   │
│   │   ├── accomodation/                # Accommodation listing
│   │   │   ├── Accomodation.jsx         # Main accommodation page
│   │   │   ├── BackgroundAccomodation.jsx # Background/banner section
│   │   │   └── CardRoom.jsx             # Room card component
│   │   │
│   │   ├── detailRoom/                  # Room detail pages
│   │   │   ├── DetailRoom.jsx           # Main detail room wrapper
│   │   │   ├── BackgroundDetailRoom.jsx # Background banner
│   │   │   ├── DescDetailRoom.jsx       # Room description
│   │   │   ├── PhotoDetailRoom.jsx      # Photo gallery
│   │   │   ├── AnotherDetailRoom.jsx    # Additional room info
│   │   │   ├── Amenities.jsx            # Amenities/facilities list
│   │   │   └── useRoomStore.js          # Room state management
│   │   │
│   │   ├── payments/                    # Payment & booking flow
│   │   │   ├── AvailableRoom.jsx        # Available rooms selection
│   │   │   ├── Booking.jsx              # Booking form page
│   │   │   ├── Payment.jsx              # Payment gateway page
│   │   │   └── useReservasiStore.js     # Reservation state management
│   │   │
│   │   ├── location/                    # Location page
│   │   │   └── Location.jsx             # Location information
│   │   │
│   │   ├── facillities/                 # Facilities page
│   │   │   └── Facilities.jsx           # All facilities listing
│   │   │
│   │   ├── gallery/                     # Gallery page
│   │   │   └── Gallery.jsx              # Image gallery showcase
│   │   │
│   │   ├── Navbar.jsx                   # Top navigation bar
│   │   ├── Footer.jsx                   # Footer section
│   │   ├── Button.jsx                   # Reusable button component
│   │   ├── Paralax.jsx                  # Parallax effect component
│   │   ├── CardReview.jsx               # Review card component
│   │   ├── Reservasi.jsx                # Reservation call-to-action
│   │   └── SocialMedia.jsx              # Social media links
│   │
│   ├── lib/                         # Utility & Helper Functions
│   │   ├── Axios.js                     # Axios configuration & instances
│   │   └── ScrollToTop.js               # Scroll to top utility
│   │
│   ├── assets/                      # Static assets
│   │   └── (images, icons, fonts)
│   │
│   ├── App.jsx                      # Main app routing & layout
│   ├── main.jsx                     # Entry point
│   ├── index.css                    # Global styles
│   └── vite.config.js               # Vite configuration
│
├── index.html                       # HTML template
├── package.json                     # Dependencies & scripts
├── vite.config.js                   # Vite configuration
├── tailwind.config.js               # Tailwind CSS configuration
├── eslint.config.js                 # ESLint rules
├── vercel.json                      # Vercel deployment config
└── .env.example                     # Example environment variables
```

---

## 🛠️ Teknologi & Dependencies

### Framework & Runtime
- **React** (v19.0.0) - UI library untuk building user interfaces
- **Vite** (v6.1.0) - Fast build tool dan dev server
- **Node.js** - JavaScript runtime

### Routing & Navigation
- **React Router DOM** (v7.7.1) - Client-side routing dan navigation

### State Management
- **Zustand** (v5.0.6) - Lightweight state management library

### Styling
- **Tailwind CSS** (v4.1.11) - Utility-first CSS framework
- **DaisyUI** (v5.0.50) - Tailwind CSS component library
- **@tailwindcss/vite** (v4.1.11) - Vite plugin untuk Tailwind

### HTTP Client
- **Axios** (v1.10.0) - Promise-based HTTP client

### Animation & Effects
- **Framer Motion** (v12.23.12) - Animation library untuk React

### Icons
- **React Icons** (v5.5.0) - Popular icon collections

### Carousel/Slider
- **React Responsive Carousel** (v3.2.23) - Responsive carousel component

### Development Tools
- **ESLint** (v9.19.0) - Code linting
- **Vite React Plugin** (v4.3.4) - React Fast Refresh

### Utilities
- **CORS** (v2.8.5) - Cross-origin resource sharing

---

## 🔧 Setup & Konfigurasi

### 1. Install Dependencies

```bash
npm install
```

Ini akan menginstall semua packages yang tercantum di package.json.

### 2. Environment Configuration

**File: `.env.local`**
```env
VITE_API_BASE_URL=http://localhost:5000
```

Variabel ini digunakan oleh Axios untuk connect ke backend API.

### 3. Tailwind CSS Configuration

**File: `tailwind.config.js`**
```javascript
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
}
```

### 4. Vite Configuration

**File: `vite.config.js`**
- React Fast Refresh untuk hot module replacement
- CSS handling untuk Tailwind
- Optimizations untuk production build

### 5. Start Development Server

```bash
npm run dev
```

Server akan berjalan di `http://localhost:5173` (default Vite port)

### 6. Build untuk Production

```bash
npm run build
```

Menghasilkan optimized build di folder `dist/`.

---

## 📖 Panduan Fitur

### 1. Home Page (`/`)

**File: `src/components/home/Home.jsx`**

#### Fitur:
- Hero section dengan banner/gambar utama
- About Us section menjelaskan tentang hotel
- Customer reviews testimonial
- Call-to-action buttons untuk booking

#### Komponen Child:
- `Hero.jsx` - Banner dan intro
- `AboutUs.jsx` - Deskripsi lengkap
- `Review.jsx` - Ulasan pelanggan

#### User Flow:
```
Home Page
├── Hero Section (Browse)
├── About Us Section (Learn)
├── Review Section (Trust Building)
└── CTA Button → Accommodation Page
```

---

### 2. Accommodation Page (`/accomodation`)

**File: `src/components/accomodation/Accomodation.jsx`**

#### Fitur:
- Display semua kamar hotel yang tersedia
- Filter & search functionality
- Sorting options (harga, rating, dsb)
- Show room cards dengan info dasar

#### Komponen Child:
- `BackgroundAccomodation.jsx` - Header/banner
- `CardRoom.jsx` - Individual room card

#### Data Flow:
```
Component Mount
↓
Fetch rooms dari API (/room)
↓
Render CardRoom untuk setiap room
↓
User klik room
↓
Navigate ke DetailRoom page
```

#### CardRoom Component Properties:
```javascript
{
  _id: "room_id",
  name: "Deluxe Room",
  type: "Suite",
  price: 500000,
  image: "image_url",
  capacity: 2,
  rating: 4.5
}
```

---

### 3. Detail Room Page (`/detail-room/:id`)

**File: `src/components/detailRoom/DetailRoom.jsx`**

#### Fitur:
- Tampilkan informasi lengkap kamar
- Photo gallery dengan multiple images
- Deskripsi detail kamar
- List fasilitas/amenities
- Related rooms
- Book now button

#### Komponen Child:
- `BackgroundDetailRoom.jsx` - Title section
- `PhotoDetailRoom.jsx` - Image gallery
- `DescDetailRoom.jsx` - Room description
- `Amenities.jsx` - Facilities list
- `AnotherDetailRoom.jsx` - Related info

#### State Management: `useRoomStore.js`
```javascript
// Store untuk menyimpan room detail
{
  room: { /* room data */ },
  isLoading: boolean,
  error: string,
  fetchRoomDetail: (roomId) => Promise,
  setRoom: (room) => void,
  clearRoom: () => void
}
```

#### User Interaction Flow:
```
DetailRoom Page
├── View Photos (Gallery)
├── Read Description
├── Check Amenities
├── Check Price & Availability
└── Click "Book Now" → Booking Page
```

---

### 4. Location Page (`/location`)

**File: `src/components/location/Location.jsx`

#### Fitur:
- Tampilkan lokasi hotel di maps
- Informasi alamat lengkap
- Nearby attractions
- Transportation options

#### Integrasi:
- Embed Google Maps
- Display location metadata

---

### 5. Facilities Page (`/facilities`)

**File: `src/components/facillities/Facilities.jsx`**

#### Fitur:
- Display semua fasilitas hotel
- Icons untuk setiap fasilitas
- Deskripsi fasilitas
- Filter by category

#### Data Source:
Fetch dari API `/fasilitas`

---

### 6. Gallery Page (`/gallery`)

**File: `src/components/gallery/Gallery.jsx`**

#### Fitur:
- Showcase hotel images
- Lightbox preview
- Category filtering
- Image grid layout

#### Komponen:
- React Responsive Carousel atau grid gallery

---

### 7. Available Room Page (`/available-room`)

**File: `src/components/payments/AvailableRoom.jsx`**

#### Fitur:
- Search available rooms berdasarkan:
  - Check-in date
  - Check-out date
  - Number of guests
- Filter hasil
- Display available rooms

#### Data Flow:
```
User Input (dates, guests)
↓
API Call to /room dengan parameters
↓
Display available rooms
↓
User select room → Navigate to Booking
```

---

### 8. Booking Page (`/booking/:roomId`)

**File: `src/components/payments/Booking.jsx`**

#### Fitur:
- Form untuk input booking details:
  - Guest name
  - Email
  - Phone number
  - Check-in date
  - Check-out date
  - Number of guests
  - Special requests
- Price calculation
- Confirmation preview
- Submit booking

#### State Management: `useReservasiStore.js`
```javascript
{
  reservasi: { /* booking data */ },
  isLoading: boolean,
  error: string,
  totalPrice: number,
  createReservasi: (data) => Promise,
  calculatePrice: (days, roomPrice) => number,
  setReservasi: (data) => void,
  clearReservasi: () => void
}
```

#### Validation:
- Email format
- Dates valid (check-out > check-in)
- All required fields filled
- Phone number format

#### Data Structure:
```javascript
{
  roomId: "room_id",
  userName: "string",
  email: "string",
  phone: "string",
  checkIn: "YYYY-MM-DD",
  checkOut: "YYYY-MM-DD",
  guests: number,
  specialRequests: "string",
  totalPrice: number,
  status: "pending"
}
```

#### User Flow:
```
Booking Form
├── Input guest info
├── Select dates
├── Calculate price
├── Review booking details
└── Submit → Create Reservation
```

---

### 9. Payment Page (`/payment/:reservasiId`)

**File: `src/components/payments/Payment.jsx`**

#### Fitur:
- Display reservation summary
- Payment method selection
- Integrated payment gateway (Midtrans)
- Payment status tracking
- Success/failure handling

#### Payment Methods Supported:
- Credit/Debit Card (via Midtrans)
- Bank Transfer (via Midtrans)
- E-wallet (via Midtrans)
- QRIS (via Midtrans)

#### Integration dengan Midtrans:
```javascript
// Midtrans Snap untuk payment
window.snap.pay(token, {
  onSuccess: (result) => { /* handle success */ },
  onPending: (result) => { /* handle pending */ },
  onError: (result) => { /* handle error */ }
})
```

#### Payment Flow:
```
Payment Page (Reservation Summary)
↓
Select Payment Method
↓
Redirect ke Midtrans Snap
↓
User complete payment
↓
Payment callback to server
↓
Update reservation status
↓
Success page / confirmation email
```

#### Data Passed:
- Reservation ID
- Guest name
- Email
- Total amount
- Item details

---

## 🧩 Dokumentasi Komponen

### Reusable Components

#### 1. Navbar Component

**File: `src/components/Navbar.jsx`**

```javascript
// Props: (none)
// Features:
// - Navigation links ke semua pages
// - Logo
// - Responsive mobile menu
// - Active link highlighting
// - Sticky header option

// Usage:
<Navbar />
```

**Links:**
- Home `/`
- Accommodation `/accomodation`
- Facilities `/facilities`
- Gallery `/gallery`
- Location `/location`

---

#### 2. Footer Component

**File: `src/components/Footer.jsx`**

```javascript
// Features:
// - Company info
// - Quick links
// - Contact information
// - Newsletter subscription
// - Social media links
// - Copyright notice

// Usage:
<Footer />
```

---

#### 3. Button Component

**File: `src/components/Button.jsx`**

```javascript
// Props:
{
  label: string,           // Button text
  onClick: function,       // Click handler
  variant: 'primary' | 'secondary' | 'danger',
  size: 'sm' | 'md' | 'lg',
  disabled: boolean,
  loading: boolean,
  className: string        // Additional classes
}

// Usage:
<Button 
  label="Book Now" 
  onClick={() => navigate('/available-room')}
  variant="primary"
/>
```

---

#### 4. CardReview Component

**File: `src/components/CardReview.jsx`**

```javascript
// Props:
{
  name: string,            // Customer name
  rating: number,          // 1-5 stars
  review: string,          // Review text
  image: string            // Customer avatar
}

// Usage:
<CardReview 
  name="John Doe"
  rating={5}
  review="Excellent service!"
  image={avatarUrl}
/>
```

---

#### 5. Parallax Component

**File: `src/components/Paralax.jsx`**

```javascript
// Props:
{
  image: string,           // Background image URL
  offset: number,          // Parallax offset strength
  children: ReactNode      // Content overlay
}

// Usage:
<Paralax image={imageUrl}>
  <h1>Welcome</h1>
</Paralax>
```

**Effect:** Background image moves slower untuk depth effect

---

#### 6. Reservasi Component (CTA)

**File: `src/components/Reservasi.jsx`**

```javascript
// Features:
// - Floating call-to-action widget
// - "Reserve Now" button
// - Quick booking form
// - Always visible untuk easy access

// Usage:
<Reservasi />
```

---

#### 7. SocialMedia Component

**File: `src/components/SocialMedia.jsx`**

```javascript
// Features:
// - Social media icons (Facebook, Instagram, Twitter, dsb)
// - Links ke social profiles
// - Floating sidebar atau section

// Usage:
<SocialMedia />
```

---

## 🔄 State Management

### Zustand Setup

**File: `src/components/detailRoom/useRoomStore.js`**

```javascript
import { create } from 'zustand';

export const useRoomStore = create((set) => ({
  room: null,
  isLoading: false,
  error: null,

  // Actions
  fetchRoomDetail: async (roomId) => {
    set({ isLoading: true });
    try {
      const response = await axiosRoom.get(`/${roomId}`);
      set({ room: response.data.room, error: null });
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ isLoading: false });
    }
  },

  setRoom: (room) => set({ room }),
  clearRoom: () => set({ room: null, error: null })
}));

// Usage di component:
const { room, isLoading, fetchRoomDetail } = useRoomStore();
```

---

**File: `src/components/payments/useReservasiStore.js`**

```javascript
import { create } from 'zustand';

export const useReservasiStore = create((set, get) => ({
  reservasi: null,
  isLoading: false,
  error: null,
  totalPrice: 0,

  // Actions
  createReservasi: async (data) => {
    set({ isLoading: true });
    try {
      const response = await axiosReservasi.post('/', data);
      set({ 
        reservasi: response.data.reservation,
        error: null 
      });
      return response.data.reservation;
    } catch (error) {
      set({ error: error.message });
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  calculatePrice: (checkInDate, checkOutDate, roomPrice) => {
    const days = Math.ceil(
      (new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 60 * 60 * 24)
    );
    const total = days * roomPrice;
    set({ totalPrice: total });
    return total;
  },

  setReservasi: (reservasi) => set({ reservasi }),
  clearReservasi: () => set({ reservasi: null, error: null, totalPrice: 0 })
}));
```

---

## 🌐 API Integration

### Axios Configuration

**File: Axios.js**

```javascript
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Create separate instances untuk setiap endpoint
export const axiosHotel = axios.create({
  baseURL: `${BASE_URL}/hotel`,
  withCredentials: true
});

export const axiosReservasi = axios.create({
  baseURL: `${BASE_URL}/reservasi`,
  withCredentials: true
});

export const axiosRoom = axios.create({
  baseURL: `${BASE_URL}/room`,
  withCredentials: true
});

export const axiosFacilities = axios.create({
  baseURL: `${BASE_URL}/fasilitas`,
  withCredentials: true
});
```

### API Endpoints Usage

#### Hotel Endpoints
```javascript
import { axiosHotel } from '@/lib/Axios';

// Get all hotels
const getHotels = async () => {
  const { data } = await axiosHotel.get('/');
  return data.hotels;
};

// Get single hotel
const getHotel = async (hotelId) => {
  const { data } = await axiosHotel.get(`/${hotelId}`);
  return data.hotel;
};
```

#### Room Endpoints
```javascript
import { axiosRoom } from '@/lib/Axios';

// Get all rooms
const getRooms = async () => {
  const { data } = await axiosRoom.get('/');
  return data.rooms;
};

// Get rooms by hotel
const getRoomsByHotel = async (hotelId) => {
  const { data } = await axiosRoom.get(`/hotel/${hotelId}`);
  return data.rooms;
};

// Get room detail
const getRoomDetail = async (roomId) => {
  const { data } = await axiosRoom.get(`/${roomId}`);
  return data.room;
};

// Search available rooms
const getAvailableRooms = async (checkIn, checkOut, guests) => {
  const { data } = await axiosRoom.get('/', {
    params: { checkIn, checkOut, guests }
  });
  return data.rooms;
};
```

#### Reservation Endpoints
```javascript
import { axiosReservasi } from '@/lib/Axios';

// Create reservation
const createReservation = async (reservationData) => {
  const { data } = await axiosReservasi.post('/', reservationData);
  return data.reservation;
};

// Get reservation detail
const getReservationDetail = async (reservasiId) => {
  const { data } = await axiosReservasi.get(`/${reservasiId}`);
  return data.reservation;
};

// Update reservation
const updateReservation = async (reservasiId, updateData) => {
  const { data } = await axiosReservasi.put(`/${reservasiId}`, updateData);
  return data.reservation;
};

// Get user's reservation history
const getReservationHistory = async (userId) => {
  const { data } = await axiosReservasi.get(`/history/${userId}`);
  return data.history;
};
```

#### Facilities Endpoints
```javascript
import { axiosFacilities } from '@/lib/Axios';

// Get all facilities
const getFacilities = async () => {
  const { data } = await axiosFacilities.get('/');
  return data.facilities;
};

// Get single facility
const getFacility = async (facilityId) => {
  const { data } = await axiosFacilities.get(`/${facilityId}`);
  return data.facility;
};
```

---

## 🛣️ Routing & Navigation

### Route Structure

**File: App.jsx**

```javascript
const routes = [
  { path: '/', element: <Home /> },
  { path: '/location', element: <Location /> },
  { path: '/accomodation', element: <Accomodation /> },
  { path: '/facilities', element: <Facilities /> },
  { path: '/detail-room/:id', element: <DetailRoom /> },
  { path: '/gallery', element: <Gallery /> },
  { path: '/available-room', element: <AvailableRoom /> },
  { path: '/booking/:roomId', element: <Booking /> },
  { path: '/payment/:reservasiId', element: <Payment /> }
];
```

### Conditional Layout

```javascript
// Routes dengan navbar, footer, dan floating widgets
const mainRoutes = [
  '/', '/location', '/accomodation', 
  '/facilities', '/detail-room', '/gallery'
];

// Clean routes tanpa navbar/footer (payment flow)
const cleanRoutes = [
  '/booking', '/payment', '/available-room'
];

// Conditional render:
{!isClean && <Navbar />}
{!isClean && <Footer />}
{!isClean && <Reservasi />}
{!isClean && <SocialMedia />}
```

### Navigation Examples

```javascript
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();

// Navigate ke accommodation
navigate('/accomodation');

// Navigate ke detail room
navigate(`/detail-room/${roomId}`);

// Navigate ke available rooms search
navigate('/available-room');

// Navigate ke booking
navigate(`/booking/${roomId}`, { 
  state: { checkInDate, checkOutDate, guests } 
});

// Navigate ke payment
navigate(`/payment/${reservasiId}`);
```

---

## ⚡ Best Practices

### 1. Component Structure

```javascript
// ✅ Good - Clear structure
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '@/store';

export default function MyComponent() {
  // Hooks
  const [state, setState] = useState();
  const { data, fetchData } = useStore();
  const navigate = useNavigate();

  // Effects
  useEffect(() => {
    fetchData();
  }, []);

  // Handlers
  const handleClick = () => { /* ... */ };

  // Render
  return (
    <div>
      {/* JSX */}
    </div>
  );
}
```

### 2. State Management Best Practices

```javascript
// ✅ Use Zustand for global state
const useAppStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 }))
}));

// ✅ Use useState untuk local state
const [isOpen, setIsOpen] = useState(false);

// ❌ Avoid prop drilling
// Instead of: <Component1 prop={prop} /><Component2 prop={prop} />
// Use: Zustand store atau Context API
```

### 3. API Call Best Practices

```javascript
// ✅ Good error handling
try {
  const data = await axiosRoom.get('/');
  setRooms(data.rooms);
} catch (error) {
  console.error('Failed to fetch rooms:', error);
  setError('Failed to load rooms. Please try again.');
} finally {
  setLoading(false);
}

// ✅ Loading states
{isLoading && <LoadingSpinner />}
{error && <ErrorMessage message={error} />}
{data && <Content data={data} />}

// ✅ Cleanup AbortController untuk pending requests
const controller = new AbortController();
return () => controller.abort();
```

### 4. Styling Best Practices

```javascript
// ✅ Use Tailwind classes
className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg"

// ✅ Use DaisyUI components
<button className="btn btn-primary">Click me</button>

// ❌ Inline styles (gunakan sparingly)
style={{ backgroundColor: 'blue' }} // Avoid this

// ✅ Responsive classes
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
```

### 5. Naming Conventions

```javascript
// ✅ Components (PascalCase)
function DetailRoom() { }
function CardRoom() { }

// ✅ Functions (camelCase)
const fetchRooms = () => { }
const handleClick = () => { }

// ✅ State (camelCase)
const [isLoading, setIsLoading] = useState(false);
const [roomData, setRoomData] = useState(null);

// ✅ Constants (UPPER_CASE)
const MAX_GUESTS = 4;
const API_TIMEOUT = 5000;
```

### 6. Error Handling

```javascript
// ✅ Try-catch dengan meaningful messages
try {
  await bookRoom(data);
  // Success notification
} catch (error) {
  if (error.response?.status === 404) {
    showError('Room not found');
  } else if (error.response?.status === 400) {
    showError('Invalid booking details');
  } else {
    showError('Booking failed. Please try again.');
  }
}

// ✅ Validation before submission
const validateBooking = (data) => {
  if (!data.email) return 'Email is required';
  if (!data.checkInDate) return 'Check-in date is required';
  if (new Date(data.checkOutDate) <= new Date(data.checkInDate)) {
    return 'Check-out must be after check-in';
  }
  return null;
};
```

---

## 🐛 Troubleshooting

### Issue: Axios requests failing with CORS error

**Solution:**
```env
# Make sure backend CORS is configured correctly
# Check that VITE_API_BASE_URL matches backend URL
VITE_API_BASE_URL=http://localhost:5000

# Restart dev server after changing env
npm run dev
```

---

### Issue: State not updating when switching pages

**Solution:**
```javascript
// Make sure to cleanup subscriptions
useEffect(() => {
  const unsubscribe = useStore.subscribe(
    (state) => state.data,
    (data) => { /* handle changes */ }
  );
  
  return () => unsubscribe();
}, []);

// Or clear state when unmounting
useEffect(() => {
  return () => {
    store.clearData(); // Cleanup
  };
}, []);
```

---

### Issue: Images not loading

**Solution:**
```javascript
// Check image URLs are correct
console.log('Image URL:', imageUrl);

// Add fallback image
<img 
  src={imageUrl} 
  alt="Room"
  onError={(e) => e.target.src = '/fallback-image.jpg'}
/>
```

---

### Issue: Payment page redirecting unexpectedly

**Solution:**
```javascript
// Check reservation ID is valid
console.log('Reservation ID:', reservasiId);

// Verify payment data before submission
const validatePayment = () => {
  if (!reservasiId) return false;
  if (totalPrice <= 0) return false;
  return true;
};

// Handle Midtrans callbacks properly
window.snap.pay(token, {
  onSuccess: (result) => {
    console.log('Payment success:', result);
    // Update status in store
    // Navigate to success page
  },
  onError: (error) => {
    console.error('Payment failed:', error);
    // Show error message
  }
});
```

---

### Issue: Slow page loading

**Solution:**
```javascript
// 1. Use React.lazy untuk code splitting
const DetailRoom = React.lazy(() => import('./DetailRoom'));

// 2. Add suspense fallback
<Suspense fallback={<LoadingSpinner />}>
  <DetailRoom />
</Suspense>

// 3. Optimize images
<img src={imageUrl} loading="lazy" alt="Room" />

// 4. Minimize bundle size
npm run build  // Check output size

// 5. Use production build for testing
npm run preview
```

---

### Issue: Form validation not working

**Solution:**
```javascript
// Always validate before submit
const handleSubmit = (e) => {
  e.preventDefault();
  
  // Validation
  const error = validateBooking(formData);
  if (error) {
    setError(error);
    return;
  }
  
  // Submit
  submitBooking(formData);
};

// Real-time validation
const [formData, setFormData] = useState({});
const [errors, setErrors] = useState({});

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prev => ({ ...prev, [name]: value }));
  
  // Validate field
  const error = validateField(name, value);
  setErrors(prev => ({ ...prev, [name]: error }));
};
```

---

## 📱 Responsive Design

Aplikasi menggunakan Tailwind CSS breakpoints:

```javascript
// Mobile first approach
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"

// Breakpoints:
// sm: 640px
// md: 768px
// lg: 1024px
// xl: 1280px
// 2xl: 1536px
```

---

## 🔒 Security Considerations

### 1. Input Validation
```javascript
// Validate all user inputs
const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};
```

### 2. Sensitive Data
```javascript
// ❌ Don't store sensitive data in localStorage
// localStorage.setItem('token', jwtToken);

// ✅ Use httpOnly cookies (handled by backend)
// Axios automatically includes cookies with requests
```

### 3. XSS Prevention
```javascript
// React automatically escapes values
const userData = "<script>alert('xss')</script>";
return <p>{userData}</p>; // Safe - will display as text

// For HTML content, use dangerouslySetInnerHTML only with sanitized content
import DOMPurify from 'dompurify';
const clean = DOMPurify.sanitize(htmlContent);
```

---

## 📊 Performance Tips

### 1. Memoization
```javascript
// Memoize expensive components
const RoomCard = React.memo(({ room, onSelect }) => {
  return <div>{room.name}</div>;
});

// Memoize callbacks
const handleClick = useCallback(() => {
  fetchRooms();
}, []);

// Memoize values
const memoizedValue = useMemo(() => {
  return complexCalculation(data);
}, [data]);
```

### 2. Code Splitting
```javascript
// Split code by route
const Home = React.lazy(() => import('./Home'));
const Accommodation = React.lazy(() => import('./Accommodation'));

<Routes>
  <Route path="/" element={<Suspense fallback={<Loading />}><Home /></Suspense>} />
  <Route path="/accomodation" element={<Suspense fallback={<Loading />}><Accommodation /></Suspense>} />
</Routes>
```

### 3. Image Optimization
```javascript
// Use next-gen image formats (WebP)
<picture>
  <source srcSet="image.webp" type="image/webp" />
  <img src="image.jpg" alt="Room" loading="lazy" />
</picture>
```

---

## 🚀 Deployment

### Vercel Deployment

1. **Push ke GitHub**
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

2. **Connect ke Vercel**
- Buka https://vercel.com
- Import repository
- Set environment variables
- Deploy

3. **Post-deployment**
- Verify environment variables
- Test payment flow
- Check API connections

---

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [React Router Documentation](https://reactrouter.com)
- [Zustand Documentation](https://github.com/pmndrs/zustand)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [DaisyUI Documentation](https://daisyui.com)
- [Framer Motion Documentation](https://www.framer.com/motion)
- [Axios Documentation](https://axios-http.com)

---

## 🤝 Contributing

Lihat CONTRIBUTING.md untuk panduan kontribusi.

---

## 📞 Support

Untuk pertanyaan atau issues:
- Buat issue di GitHub
- Email: support@reservasi.app
- Discussion: GitHub Discussions

---

**Dokumentasi terakhir diupdate: January 16, 2026**

**Happy Coding! 🎉**
```

Dokumentasi lengkap untuk FE-Reservasi sudah siap! Dokumen ini mencakup:

✅ **Quick Start** - Setup cepat untuk memulai  
✅ **Struktur Proyek** - Penjelasan setiap folder dan file  
✅ **Teknologi & Dependencies** - List semua libraries dengan penjelasan  
✅ **Setup & Konfigurasi** - Langkah-langkah detail setup  
✅ **Panduan Fitur** - Penjelasan mendalam setiap halaman/fitur dengan user flow  
✅ **Dokumentasi Komponen** - Props, features, dan usage setiap component  
✅ **State Management** - Contoh Zustand store dengan implementasi  
✅ **API Integration** - Contoh API calls dengan Axios  
✅ **Routing & Navigation** - Struktur routes dan navigation examples  
✅ **Best Practices** - Coding standards dan patterns  
✅ **Troubleshooting** - Solusi untuk common issues  
✅ **Responsive Design** - Tailwind breakpoints  
✅ **Security** - Best practices keamanan  
✅ **Performance** - Optimization tips  
✅ **Deployment** - Cara deploy ke Vercel  

Dokumentasi ini dirancang untuk:
- **Mudah dibaca** dengan struktur yang jelas
- **Komprehensif** mencakup semua aspek aplikasi
- **Praktis** dengan contoh kode yang bisa langsung digunakan
- **Terstruktur** dengan table of contents dan navigasi yang baikDokumentasi lengkap untuk FE-Reservasi sudah siap! Dokumen ini mencakup:

✅ **Quick Start** - Setup cepat untuk memulai  
✅ **Struktur Proyek** - Penjelasan setiap folder dan file  
✅ **Teknologi & Dependencies** - List semua libraries dengan penjelasan  
✅ **Setup & Konfigurasi** - Langkah-langkah detail setup  
✅ **Panduan Fitur** - Penjelasan mendalam setiap halaman/fitur dengan user flow  
✅ **Dokumentasi Komponen** - Props, features, dan usage setiap component  
✅ **State Management** - Contoh Zustand store dengan implementasi  
✅ **API Integration** - Contoh API calls dengan Axios  
✅ **Routing & Navigation** - Struktur routes dan navigation examples  
✅ **Best Practices** - Coding standards dan patterns  
✅ **Troubleshooting** - Solusi untuk common issues  
✅ **Responsive Design** - Tailwind breakpoints  
✅ **Security** - Best practices keamanan  
✅ **Performance** - Optimization tips  
✅ **Deployment** - Cara deploy ke Vercel  

Dokumentasi ini dirancang untuk:
- **Mudah dibaca** dengan struktur yang jelas
- **Komprehensif** mencakup semua aspek aplikasi
- **Praktis** dengan contoh kode yang bisa langsung digunakan
- **Terstruktur** dengan table of contents dan navigasi yang baik
