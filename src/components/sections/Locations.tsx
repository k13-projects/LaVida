const Locations = () => {
  return (
    <section id="locations" className="relative bg-[#FDF8F5]">
      {/* Two-column layout: Map left, Location cards right */}
      <div className="flex flex-col lg:flex-row">
        {/* Map image */}
        <div className="w-full lg:w-2/3">
          <img
            src="/images/locations/map.png"
            alt="La Vida Locations Map"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Location cards */}
        <div className="w-full lg:w-1/3 bg-primary flex flex-col justify-center py-10 lg:py-0 px-6 sm:px-10 lg:px-12">
          {/* Carlsbad */}
          <div className="mb-10 lg:mb-14">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3">
              CARLSBAD
            </h3>
            <p className="text-white/90 text-sm sm:text-base mb-1">Windmill Food Hall</p>
            <p className="text-white/90 text-sm sm:text-base mb-1">890 Palomar Airport Rd,</p>
            <p className="text-white/90 text-sm sm:text-base mb-1">CA 92011</p>
            <p className="text-white/90 text-sm sm:text-base mb-4">11:00 AM – 9:00 PM</p>
            <a
              href="https://maps.google.com/?q=890+Palomar+Airport+Rd,+Carlsbad,+CA+92011"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-white font-semibold text-sm sm:text-base hover:underline"
            >
              Get Directions →
            </a>
          </div>

          {/* Miramar */}
          <div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3">
              MIRAMAR
            </h3>
            <p className="text-white font-semibold text-sm sm:text-base mb-1">COMING SOON</p>
            <p className="text-white/90 text-sm sm:text-base mb-1">1720 North El Camino Real</p>
            <p className="text-white/90 text-sm sm:text-base mb-4">11:00 AM – 9:00 PM</p>
            <a
              href="https://maps.google.com/?q=1720+N+El+Camino+Real,+Encinitas,+CA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-white font-semibold text-sm sm:text-base hover:underline"
            >
              Get Directions →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
