import React, { useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useReservasiStore } from "./useReservasiStore";

const Booking = () => {
  const navigate = useNavigate();
  const { roomId } = useParams();
  const location = useLocation();
  const { hotelId, checkIn: checkInState, checkOut: checkOutState } = location.state || {};

  const { createReservasi, loading, error } = useReservasiStore();

  if (!hotelId) {
    return <p className="text-red-500 p-6 text-center">Hotel tidak valid. Silakan pilih ulang.</p>;
  }
  if (!roomId) {
    return <p className="text-red-500 p-6 text-center">Room tidak valid. Silakan pilih ulang.</p>;
  }

  const [form, setForm] = useState({
    guestName: "",
    guestEmail: "",
    guestPhone: "",
    hotel: hotelId,
    room: roomId,
    jumlahTamu: 1,
    jumlahKamar: 1,
    checkIn: checkInState,
    checkOut: checkOutState,
    keterangan: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Data dikirim ke backend:", form);

    const result = await createReservasi(form);

    if (result.success) {
      const reservasiId = result.data.reservasi._id;

      navigate(`/payment/${reservasiId}`, {
        state: {
          reservasiId,
          guestName: form.guestName,
          guestEmail: form.guestEmail,
          guestPhone: form.guestPhone,
        },
      });
    } else {
      alert(result.message || "Gagal membuat reservasi!");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-gray-900">Buat Reservasi</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Nama */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Nama Tamu</label>
          <input type="text" name="guestName" value={form.guestName} onChange={handleChange} required className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" name="guestEmail" value={form.guestEmail} onChange={handleChange} required className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Nomor Telepon</label>
          <input type="tel" name="guestPhone" value={form.guestPhone} onChange={handleChange} required className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
        </div>

        {/* Jumlah Tamu & Kamar */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Jumlah Tamu</label>
            <input type="number" name="jumlahTamu" value={form.jumlahTamu} onChange={handleChange} min="1" required className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Jumlah Kamar</label>
            <input type="number" name="jumlahKamar" value={form.jumlahKamar} onChange={handleChange} min="1" required className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
          </div>
        </div>

        {/* Check-in & Check-out */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Check-In</label>
            <input type="date" name="checkIn" value={form.checkIn} onChange={handleChange} readOnly className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Check-Out</label>
            <input type="date" name="checkOut" value={form.checkOut} onChange={handleChange} readOnly className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
          </div>
        </div>

        {/* Keterangan */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Keterangan</label>
          <textarea name="keterangan" value={form.keterangan} onChange={handleChange} rows="3" className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"></textarea>
        </div>

        {/* Submit */}
        <button type="submit" disabled={loading} className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition disabled:opacity-50">
          {loading ? "Memproses..." : "Submit Reservasi & Bayar"}
        </button>

        {/* Error Message */}
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default Booking;
