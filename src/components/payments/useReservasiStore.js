// useReservasiStore.js
import { create } from "zustand";
import { axiosReservasi } from "../../lib/Axios";

export const useReservasiStore = create((set, get) => ({
  reservasiList: [],
  loading: false,
  error: null,

  // 🔥 Create Reservasi
  createReservasi: async (newData) => {
    set({ loading: true, error: null });

    try {
      const res = await axiosReservasi.post("/createReservasi", newData);

      // update list hanya kalau backend kasih reservasi baru
      if (res.data?.reservasi) {
        set((state) => ({
          reservasiList: [...state.reservasiList, res.data.reservasi],
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
}));

export default useReservasiStore;
