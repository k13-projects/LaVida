import { FC } from 'react';

// Location data
const locations = [
  {
    id: 'carlsbad',
    cityLabel: 'CARLSBAD',
    subtitle: 'Windmill Food Hall',
    addressLines: [
      '890 Palomar Airport Rd,',
      'Carlsbad, CA 92011'
    ],
    hoursLabel: '11:00 AM – 9:00 PM',
    link: 'https://maps.google.com/?q=890+Palomar+Airport+Rd,+Carlsbad,+CA+92011',
  },
  {
    id: 'miramar',
    cityLabel: 'MIRAMAR',
    subtitle: 'COMING SOON',
    addressLines: [
      '1720 North El Camino Real,',
      'San Clemente, CA 92673'
    ],
    hoursLabel: '11:00 AM – 9:00 PM',
    link: 'https://maps.google.com/?q=1720+North+El+Camino+Real,+San+Clemente,+CA+92673',
  }
];

// Main Locations Component
const Locations: FC = () => {
  return (
    <section id="locations" className="relative bg-[#FDF8F5]">
      {/* Map Container - 90% width centered */}
      <div className="relative w-[90%] mx-auto" style={{ aspectRatio: '16 / 9' }}>
        {/* Background Map Image */}
        <img
          src={`${import.meta.env.BASE_URL}images/locations/map_only.png`}
          alt="La Vida Locations Map"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Single merged locations box */}
        <div
          className="absolute z-10 pointer-events-auto"
          style={{ left: '4%', top: '50%', transform: 'translateY(-50%)' }}
        >
          <div className="bg-primary/95 backdrop-blur-sm rounded-lg p-6 sm:p-8 shadow-xl w-[320px] sm:w-[380px] lg:w-[420px] border-2 border-[#F5F0E8]/30">
            {locations.map((location, index) => {
              const isComingSoon = location.subtitle === 'COMING SOON';
              const isLast = index === locations.length - 1;

              return (
                <div key={location.id} className={!isLast ? 'mb-6 pb-6 border-b border-[#F5F0E8]/30' : ''}>
                  {/* City Label */}
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">
                    {location.cityLabel}
                  </h3>

                  {/* Subtitle */}
                  {location.subtitle && (
                    <p className={`text-sm sm:text-base mb-2 ${isComingSoon ? 'text-white font-semibold tracking-wide' : 'text-white/90'}`}>
                      {location.subtitle}
                    </p>
                  )}

                  {/* Address Lines */}
                  <div className="mb-2">
                    {location.addressLines.map((line, idx) => (
                      <p key={idx} className="text-[#F5F0E8] text-sm sm:text-base leading-relaxed">
                        {line}
                      </p>
                    ))}
                  </div>

                  {/* Hours */}
                  <p className="text-[#F5F0E8] text-sm sm:text-base mb-4">
                    {location.hoursLabel}
                  </p>

                  {/* Get Directions Button */}
                  <a
                    href={location.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#F5F0E8] hover:bg-white text-primary text-center px-6 py-2.5 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-colors"
                  >
                    Get Directions
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
