import React from "react";

const Map = () => {
  return (
    <div className="w-full h-[700px] pt-[160px]">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.381121061579!2d106.81612357409625!3d-6.213363360857588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f401eeca60a1%3A0x55eb45582dbe31ac!2sLe%20M%C3%A9ridien%20Jakarta!5e0!3m2!1sid!2sid!4v1753972818796!5m2!1sid!2sid"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
