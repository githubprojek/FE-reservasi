import axios from "axios";

const BASE_URL = "http://localhost:5000";

// Factory untuk membuat instance Axios dengan baseURL + withCredentials
const createAxiosInstance = (prefix) => {
  return axios.create({
    baseURL: `${BASE_URL}/${prefix}`,
    withCredentials: true,
  });
};

// Export semua instance

export const axiosHotel = createAxiosInstance("hotel");
export const axiosReservasi = createAxiosInstance("reservasi");
export const axiosRoom = createAxiosInstance("room");
export const axiosFacilities = createAxiosInstance("fasilitas");
