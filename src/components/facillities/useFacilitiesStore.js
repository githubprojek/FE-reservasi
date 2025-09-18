// useStoreRoom.js
import { create } from "zustand";
import { axiosFacilities } from "../../lib/Axios";

export const useFacilitiesStore = create((set, get) => ({
  fasilitasList: [],
  loading: false,
  error: null,
  isFetched: false, // 🔥 Tambahan flag

  fetchFacilities: async (force = false) => {
    // 🔑 Kalau sudah pernah fetch & tidak dipaksa, skip refetch
    if (get().isFetched && !force) {
      console.log("✅ Data fasilitas sudah di-cache, tidak refetch");
      return;
    }

    set({ loading: true, error: null });
    try {
      const res = await axiosFacilities.get("/getFasilitas");
      set({
        fasilitasList: res.data.fasilitas,
        isFetched: true, // 🔥 Tandai sudah pernah fetch
      });
    } catch (error) {
      console.error(error);
      set({ error: "Gagal memuat data fasilitas" });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useFacilitiesStore;
