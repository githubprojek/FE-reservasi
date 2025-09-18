import React, { useState, useEffect } from "react";
import { useRoomStore } from "./useRoomStore.js";
import { useParams } from "react-router-dom";

const AnotherDetailRoom = () => {
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
    <div className="relative w-full px-6 py-10">
      {/* Flex container untuk gambar */}

      <div className="flex flex-row w-full h-full gap-6">
        {/* Gambar kiri */}
        <div className="w-1/2 h-full">
          <img src={room?.image_room?.[1]} alt="pemandangan" className="w-full h-full object-cover " />
        </div>

        {/* Spacer kanan */}
        <div className="w-1/2"></div>
      </div>

      {/* Teks overlay sebagian ke atas gambar */}
      <div className="absolute top-[20%] left-[42%] w-[55%] z-10 bg-slate-100">
        <div className=" p-12 backdrop-blur">
          <h1 className="uppercase font-light text-xl">Room Type:</h1>
          <p className="text-justify leading-relaxed font-extralight">{room?.jenis_room}</p>
        </div>
        <div className=" p-12 backdrop-blur">
          <h1 className="uppercase font-light text-xl">bed type:</h1>
          <p className="text-justify leading-relaxed font-extralight">{room?.bed_type}</p>
        </div>
      </div>
    </div>
  );
};

export default AnotherDetailRoom;
