import React, { useEffect, useState } from "react";
import { useRoomStore } from "../detailRoom/useRoomStore.js";
import { useNavigate } from "react-router-dom";

const AvailableRoom = () => {
  const { fetchRoom, roomList, fetchAvailableRooms, availableRoom, loading, error } = useRoomStore();
  const navigate = useNavigate();

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    fetchRoom();
  }, []);

  const handleSearch = async () => {
    const hotelId = roomList[0]?.hotel?._id;

    if (!hotelId || !checkIn || !checkOut) {
      return alert("Isi tanggal check-in dan check-out dulu");
    }

    await fetchAvailableRooms(hotelId, checkIn, checkOut);
    setSearched(true);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-gray-900">Available Rooms</h2>

      {/* Filter tanggal */}
      <div className="bg-white shadow-md rounded-xl p-4 flex flex-col sm:flex-row sm:items-end gap-4 mb-8 border border-gray-200">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">Check-In</label>
          <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">Check-Out</label>
          <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div>
          <button onClick={handleSearch} className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 shadow-sm transition">
            Cari
          </button>
        </div>
      </div>

      {/* Hasil pencarian */}
      {loading && <p className="text-gray-500">Loading rooms...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {searched ? (
        availableRoom && availableRoom.length > 0 ? (
          <div className="space-y-6">
            {availableRoom.map((room) => (
              <div key={room._id} className="flex flex-col md:flex-row border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition bg-white overflow-hidden">
                {/* Image */}
                <div className="md:w-1/3">
                  <img src={room?.image_room?.[0]} alt={room.nameRoom} className="w-full h-56 md:h-full object-cover" />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between p-6 md:w-2/3">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {room.nameRoom} · {room.bed_type} Bed
                    </h3>

                    <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-700">
                      <p>
                        <span className="text-gray-500">Capacity:</span> <span className="font-medium">{room.kapasitas} guests</span>
                      </p>
                      <p>
                        <span className="text-gray-500">Room Size:</span> <span className="font-medium">{room.luas} m²</span>
                      </p>
                      <p>
                        <span className="text-gray-500">Available:</span> <span className="font-medium">{room.availableRoom} rooms</span>
                      </p>
                    </div>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-6">
                    <div>
                      <p className="text-sm text-gray-500">Price per night</p>
                      <p className="text-2xl font-bold text-gray-900">Rp {room.harga_room?.toLocaleString("id-ID")}</p>
                    </div>

                    <button
                      onClick={() =>
                        navigate(`/booking/${room._id}`, {
                          state: {
                            hotelId: room.hotel._id || room.hotel,
                            checkIn,
                            checkOut,
                          },
                        })
                      }
                      className="mt-4 md:mt-0 px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 text-lg">No rooms available in this date range.</p>
        )
      ) : (
        <p className="text-gray-600 text-lg">Isi tanggal check-in dan check-out untuk melihat room tersedia.</p>
      )}
    </div>
  );
};

export default AvailableRoom;
