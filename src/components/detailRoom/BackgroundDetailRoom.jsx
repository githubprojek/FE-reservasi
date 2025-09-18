import React, { useEffect, useState } from "react";
import { useRoomStore } from "./useRoomStore.js";
import { useParams } from "react-router-dom";

const BackgroundDetailRoom = () => {
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
    <div className="relative z-1">
      <div className="absolute top-1/2 left-1/2 z-1 -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="text-4xl md:text-4xl font-light ">
          Welcome to <span className="italic"> Le' Maridien</span>
        </h1>
        <p className="text-lg md:text-xl mt-2 font-extralight">Best Hotel in Jakarta</p>
      </div>
      <img src={room?.image_room?.[0]} alt={room?.nameRoom} className="h-[100vh] w-full object-cover" />
    </div>
  );
};

export default BackgroundDetailRoom;
