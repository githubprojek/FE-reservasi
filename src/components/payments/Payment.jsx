import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useReservasiStore from "./useReservasiStore.js";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { reservasiId, guestName, guestEmail, guestPhone } = location.state;

  const [paymentMethod, setPaymentMethod] = useState("bca");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const { bayarReservasi, cancelReservasi, cekStatusPembayaran } = useReservasiStore();

  const handlePayment = async () => {
    setLoading(true);
    const res = await bayarReservasi(reservasiId, paymentMethod);
    if (res.success) {
      setResult(res.data.data);
    } else {
      alert(res.message);
    }
    setLoading(false);
  };

  const handleCancel = async () => {
    const res = await cancelReservasi(reservasiId);
    if (res.success) {
      setStatus("cancel");
    } else {
      alert(res.message);
    }
  };

  const handleCheckStatus = async () => {
    const res = await cekStatusPembayaran(reservasiId);
    if (res.success) {
      setStatus(res.data.status);
    } else {
      alert(res.message);
    }
  };

  const handleBack = async () => {
    await handleCheckStatus();
    navigate("/available-room");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-white shadow-xl rounded-2xl p-8">
        {/* HEADER */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-1">Pembayaran Reservasi</h1>
          <p className="text-sm text-gray-500">
            {guestName} • {guestEmail} • {guestPhone}
          </p>
        </div>

        {/* PILIH METODE */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Pilih Metode Pembayaran</h2>
          <select className="border rounded-lg w-full p-3 focus:ring-2 focus:ring-blue-500 outline-none" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
            <option value="bni">Bank Transfer - BCA</option>
            <option value="bri">Bank Transfer - BRI</option>
          </select>
        </div>

        {/* ACTION BUTTON */}
        <button onClick={handlePayment} disabled={loading} className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition mb-6">
          {loading ? "Memproses..." : "Bayar Sekarang"}
        </button>

        {/* RESULT */}
        {result && (
          <div className="mt-4 border-t pt-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Instruksi Pembayaran</h3>(
            <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
              <p className="mb-1">
                <strong>Bank:</strong> {result.va_numbers?.[0]?.bank?.toUpperCase()}
              </p>
              <p>
                <strong>VA Number:</strong> {result.va_numbers?.[0]?.va_number}
              </p>
            </div>
            ){/* STATUS */}
            {status && (
              <div className="mt-4 text-center">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${status === "settlement" ? "bg-green-100 text-green-700" : status === "cancel" ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"}`}>
                  Status: {status}
                </span>
              </div>
            )}
            {/* ACTION BUTTONS */}
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <button onClick={handleCheckStatus} className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                Cek Status
              </button>
              <button onClick={handleCancel} className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
                Batalkan
              </button>
              <button onClick={handleBack} className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600">
                Kembali
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;
