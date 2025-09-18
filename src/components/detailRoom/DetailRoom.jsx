import React from "react";
import BackgroundDetailRoom from "./BackgroundDetailRoom";
import DescDetailRoom from "./DescDetailRoom";
import AnotherDetailRoom from "./AnotherDetailRoom";
import Amenities from "./Amenities";
import PhotoDetailRoom from "./PhotoDetailRoom";

const DetailRoom = () => {
  return (
    <div>
      <BackgroundDetailRoom />
      <DescDetailRoom />
      <AnotherDetailRoom />
      <Amenities />
      <PhotoDetailRoom />
    </div>
  );
};

export default DetailRoom;
