import React, { useState, useEffect } from "react";
import { useRoomStore } from "./useRoomStore.js";
import { useParams } from "react-router-dom";

const PhotoDetailRoom = () => {
  const { id } = useParams();
  const { fetchRoomById, roomList } = useRoomStore();
  const [room, setRoom] = useState(null);

  useEffect(() => {
    const found = roomList.find((r) => r._id === id);
    if (found) {
      setRoom(found);
    } else {
      fetchRoomById(id).then((res) => setRoom(res));
    }
  }, [id, roomList]);

  return (
    <div className="relative z-1 pl-10 my-10 flex items-center">
      {/* tampilkan semua gambar */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {room?.image_room?.map((img, index) => (
          <img key={index} src={img} alt={`${room?.nameRoom} - ${index + 1}`} className="h-[50vh] object-cover w-full object-center" />
        ))}
      </div>
    </div>
  );
};

export default PhotoDetailRoom;
