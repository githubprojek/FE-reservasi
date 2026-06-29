// useStoreRoom.js
import { create } from "zustand";
import { axiosFacilities } from "../../lib/Axios";

export const useFacilitiesStore = create((set, get) => ({
  fasilitasList: [],
  loading: false,
  error: null,

  fetchFacilities: async (force = false) => {
    set({ loading: true, error: null });
    try {
      const res = await axiosFacilities.get("/getFasilitas");
      set({
        fasilitasList: res.data.content?.fasilitas,
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
