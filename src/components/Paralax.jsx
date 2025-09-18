import React from "react";

const Paralax = ({ image, children, className = "" }) => {
  return (
    <div className={`relative bg-fixed bg-center bg-cover ${className}`} style={{ backgroundImage: `url(${image})` }}>
      {children}
    </div>
  );
};

export default Paralax;
