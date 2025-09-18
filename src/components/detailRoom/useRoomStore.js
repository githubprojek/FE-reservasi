// useStoreRoom.js
import { create } from "zustand";
import { axiosRoom } from "../../lib/Axios";

export const useRoomStore = create((set, get) => ({
  roomList: [],
  availableRoom: [],
  loading: false,
  error: null,
  isFetched: false, // 🔥 Tambahan flag

  fetchRoom: async (force = false) => {
    // 🔑 Kalau sudah pernah fetch & tidak dipaksa, skip refetch
    if (get().isFetched && !force) {
      console.log("✅ Data room sudah di-cache, tidak refetch");
      return;
    }

    set({ loading: true, error: null });
    try {
      const res = await axiosRoom.get("/getRoom");
      set({
        roomList: res.data.rooms,
        isFetched: true, // 🔥 Tandai sudah pernah fetch
      });
    } catch (error) {
      console.error(error);
      set({ error: "Gagal memuat data room" });
    } finally {
      set({ loading: false });
    }
  },

  fetchRoomById: async (roomId) => {
    set({ loading: true, error: null });
    try {
      const res = await axiosRoom.get(`/getRoomById/${roomId}`);
      console.log("Full response:", res); // ngecek semua isi response
      console.log("Room data:", res.data.room); // ngecek data room aja
      return res.data.room;
    } catch (error) {
      console.error("Error fetchRoomById:", error);
      set({ error: "gagal fetch data room id" });
    } finally {
      set({ loading: false });
    }
  },

  fetchAvailableRooms: async (hotelId, checkIn, checkOut) => {
    set({ loading: true, error: null });
    try {
      const res = await axiosRoom.get("/get-available", {
        params: { hotelId, checkIn, checkOut },
      });
      set({ availableRoom: res.data.rooms });
      return res.data.rooms;
    } catch (error) {
      console.error(error);
      set({ error: "Gagal memuat room tersedia" });
      return [];
    } finally {
      set({ loading: false });
    }
  },
}));

export default useRoomStore;
