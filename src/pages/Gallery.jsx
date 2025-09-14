import React from "react";

export default function Gallery() {
  return (
    <div className="mt-16 px-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <img
          src="https://www.kia.com/content/dam/kwp/au/vehicles/sorento/sorento-gallery.jpg"
          alt="KIA Sorento"
          className="rounded shadow"
        />
        <img
          src="https://www.kia.com/content/dam/kwp/au/vehicles/seltos/seltos-gallery.jpg"
          alt="KIA Seltos"
          className="rounded shadow"
        />
        <img
          src="https://www.kia.com/content/dam/kwp/au/vehicles/sonet/sonet-gallery.jpg"
          alt="KIA Sonet"
          className="rounded shadow"
        />
        <img
          src="https://www.kia.com/content/dam/kwp/au/vehicles/carnival/carnival-gallery.jpg"
          alt="KIA Carnival"
          className="rounded shadow"
        />
        <img
          src="https://www.kia.com/content/dam/kwp/au/vehicles/seltos/seltos-gallery.jpg"
          alt="KIA Seltos"
          className="rounded shadow"
        />
        <img
          src="https://www.kia.com/content/dam/kwp/au/vehicles/sonet/sonet-gallery.jpg"
          alt="KIA Sonet"
          className="rounded shadow"
        />
      </div>
    </div>
  );
}
