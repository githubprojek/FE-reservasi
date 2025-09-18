import React, { useEffect, useState } from "react";
import { useRoomStore } from "./useRoomStore.js";
import { useParams } from "react-router-dom";
import { FaBed, FaUserFriends, FaRulerCombined } from "react-icons/fa";

const DescDetailRoom = () => {
  const { id } = useParams();
  const { fetchRoomById, roomList } = useRoomStore();
  const [room, setRoom] = useState(null);

  useEffect(() => {
    const found = roomList.find((r) => r._id === id);
    if (found) {
      setRoom(found); // langsung ambil dari cache store
    } else {
      fetchRoomById(id) // fallback kalau ga ada di roomList
        .then((res) => setRoom(res));
    }
  }, [id, roomList]);
  return (
    <div className="max-w-5xl mx-auto px-4 mt-10 mb-10 text-center text-black">
      <h1 className="text-3xl mb-4 font-light italic">
        {room?.nameRoom}
        <hr className="w-24 mt-1 mx-auto border-gray-800" />
      </h1>
      <h4 className="uppercase text-sm tracking-wider mb-6 text-gray-700">DKI Jakarta</h4>

      <h2 className="uppercase text-md tracking-wider mb-6 text-gray-700">Premium Suites in Central Jakarta with Serene Sea View</h2>

      <p className="text-sm leading-relaxed mb-4">
        Le Maridien Hotel is nestled in the heart of Central Jakarta, offering a perfect blend of comfort and urban elegance. Our hotel provides a selection of stylish rooms and luxury suites designed for business and leisure travelers
        alike.
      </p>
      <div className="flex justify-center gap-5 items-center text-gray-600 text-sm m-5">
        <div className="flex items-center gap-1">
          <FaBed className="text-blue-600" />
          <span>{room?.bed_type}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaUserFriends className="text-blue-600" />
          <span>{room?.kapasitas} orang</span>
        </div>
        <div className="flex items-center gap-1">
          <FaRulerCombined className="text-blue-600" />
          <span>{room?.luas} m²</span>
        </div>
      </div>
    </div>
  );
};

export default DescDetailRoom;
