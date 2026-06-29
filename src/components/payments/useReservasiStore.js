// useReservasiStore.js
import { create } from "zustand";
import { axiosReservasi, axiosPayment } from "../../lib/Axios";

export const useReservasiStore = create((set, get) => ({
  reservasiList: [],
  loading: false,
  error: null,

  // 🔥 Create Reservasi
  createReservasi: async (newData) => {
    set({ loading: true, error: null });
    try {
      const res = await axiosReservasi.post("/createReservasi", newData);

      if (res.data?.content?.reservasi) {
        set((state) => ({
          reservasiList: [...state.reservasiList, res.data.content.reservasi],
        }));
      }

      return { success: true, data: res.data };
    } catch (err) {
      console.error("Error createReservasi:", err);
      const message = err.response?.data?.message || "Gagal membuat reservasi";
      set({ error: message });
      return { success: false, message };
    } finally {
      set({ loading: false });
    }
  },

  // 🔥 Bayar reservasi
  bayarReservasi: async (reservasiId, paymentMethod) => {
    try {
      const res = await axiosPayment.post(`/core-payment/${reservasiId}`, {
        paymentMethod,
      });
      console.log(paymentMethod);
      return { success: true, data: res.data };
    } catch (err) {
      console.error("Error bayarReservasi:", err);
      return {
        success: false,
        message: err.response?.data?.message || "Gagal memproses pembayaran",
      };
    }
  },

  // 🔥 Batalkan reservasi
  cancelReservasi: async (reservasiId) => {
    try {
      const res = await axiosPayment.post(`/cancelled/${reservasiId}`);
      return { success: true, data: res.data };
    } catch (err) {
      console.error("Error cancelReservasi:", err);
      return {
        success: false,
        message: err.response?.data?.message || "Gagal membatalkan reservasi",
      };
    }
  },

  // 🔥 Cek status pembayaran
  cekStatusPembayaran: async (reservasiId) => {
    try {
      const res = await axiosPayment.get(`/cek-status-pembayaran/${reservasiId}`);
      return { success: true, data: res.data };
    } catch (err) {
      console.error("Error cekStatusPembayaran:", err);
      return {
        success: false,
        message: err.response?.data?.message || "Gagal memeriksa status",
      };
    }
  },
}));

export default useReservasiStore;
