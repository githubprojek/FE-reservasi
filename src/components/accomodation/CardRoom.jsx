import React, { useEffect } from "react";
import { useRoomStore } from "../detailRoom/useRoomStore.js";
import { Link } from "react-router-dom";
import { FaBed, FaUserFriends, FaRulerCombined } from "react-icons/fa";

const CardRoom = () => {
  const { fetchRoom, roomList, loading, error } = useRoomStore();

  useEffect(() => {
    fetchRoom();
  }, []);

  if (loading) return <p className="text-center mt-10 text-white">Loading...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;

  return (
    <div className="max-w-screen px-8 pb-16 mb-16">
      {/* Judul Halaman */}
      <h1 className="text-3xl mb-4 font-light  text-center">
        Accomodation
        <hr className="w-50 mt-1 mx-auto border-gray-600 mb-16" />
      </h1>

      {/* Kartu Room */}
      <div className="flex flex-wrap gap-6 justify-center">
        {roomList.map((room, index) => (
          <div key={index} className="bg-gray-200  overflow-hidden w-70 flex flex-col justify-between">
            {/* Gambar */}
            <img src={room.image_room?.[0]} alt={room.jenis_room} className="w-70 h-[200px] object-cover" />
            <div className="justify-center items-center text-center p-2">
              <h1 className="font-light">{room.nameRoom}</h1>
            </div>

            {/* Konten */}
            <div className="flex justify-between items-center text-gray-600 text-sm m-5">
              <div className="flex items-center gap-1">
                <FaBed className="text-blue-600" />
                <span>{room.bed_type}</span>
              </div>
              <div className="flex items-center gap-1">
                <FaUserFriends className="text-blue-600" />
                <span>{room.kapasitas} orang</span>
              </div>
              <div className="flex items-center gap-1">
                <FaRulerCombined className="text-blue-600" />
                <span>{room.luas} m²</span>
              </div>
            </div>

            {/* View More */}
            <div className="mt-4 text-right mb-5">
              <Link to={`/detail-room/${room._id}`} className="text-blue-600 text-sm font-medium hover:underline">
                View More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardRoom;
