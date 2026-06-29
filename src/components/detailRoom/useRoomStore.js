// useStoreRoom.js
import { create } from "zustand";
import { axiosRoom } from "../../lib/Axios";

export const useRoomStore = create((set) => ({
  roomList: [],
  availableRoom: [],
  loading: false,
  error: null,

  fetchRoom: async (force = false) => {
    set({ loading: true, error: null });
    try {
      const res = await axiosRoom.get("/getRoom");
      set({
        roomList: res.data.content?.rooms,
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
      const res = await axiosRoom.get(`/getRoom/${roomId}`);
      return res.data.content?.room;
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
      const res = await axiosRoom.get("/getAvailable", {
        params: { hotelId, checkIn, checkOut },
      });
      const rooms = res.data.content?.rooms || [];
      set({ availableRoom: rooms });
      return rooms;
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
