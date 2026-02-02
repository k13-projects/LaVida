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
    id: 'little-italy',
    cityLabel: 'LITTLE ITALY',
    subtitle: 'COMING SOON',
    addressLines: [
      'Location TBD'
    ],
    hoursLabel: '11:00 AM – 9:00 PM',
    link: '#',
  },
  {
    id: 'la-jolla',
    cityLabel: 'LA JOLLA',
    subtitle: 'COMING SOON',
    addressLines: [
      'Location TBD'
    ],
    hoursLabel: '11:00 AM – 9:00 PM',
    link: '#',
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
  },
];

// Location Card Component
const LocationCard: FC<{
  location: typeof locations[0];
}> = ({ location }) => {
  const isComingSoon = location.subtitle === 'COMING SOON';

  return (
    <div className="bg-primary/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 xs:p-4 sm:p-5 md:p-6 lg:p-8 shadow-xl w-full h-full min-h-[160px] xs:min-h-[180px] sm:min-h-[200px] md:min-h-[240px] lg:min-h-[280px] xl:min-h-[320px] flex flex-col items-center justify-between text-center border border-[#F5F0E8]/20">
      {/* City Label */}
      <h3 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-0.5 sm:mb-1">
        {location.cityLabel}
      </h3>

      {/* Subtitle */}
      {location.subtitle && (
        <p className={`text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg mb-1 sm:mb-2 ${isComingSoon ? 'text-white font-semibold tracking-wide' : 'text-white/90'}`}>
          {location.subtitle}
        </p>
      )}

      {/* Address Lines */}
      <div className="mb-1 sm:mb-2 flex-1 flex flex-col justify-center">
        {location.addressLines.map((line, idx) => (
          <p key={idx} className="text-[#F5F0E8] text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg leading-snug sm:leading-relaxed">
            {line}
          </p>
        ))}
      </div>

      {/* Hours */}
      <p className="text-[#F5F0E8] text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg mb-2 sm:mb-3 lg:mb-4">
        {location.hoursLabel}
      </p>

      {/* Get Directions Button */}
      <a
        href={location.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#F5F0E8] hover:bg-white text-primary text-center px-3 xs:px-4 sm:px-5 md:px-6 py-1.5 xs:py-2 sm:py-2.5 rounded-full font-medium text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg transition-colors"
      >
        Get Directions
      </a>
    </div>
  );
};

// Main Locations Component
const Locations: FC = () => {
  return (
    <section id="locations" className="relative bg-[#FDF8F5]">
      {/* Map Container */}
      <div className="relative w-full">
        {/* Background Map Image */}
        <img
          src={`${import.meta.env.BASE_URL}images/locations/Large_map.png`}
          alt="La Vida Locations Map"
          className="w-full h-auto object-cover min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-0"
        />

        {/* Cards Overlay - Responsive Grid */}
        <div className="absolute inset-0 flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8">
          <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8 w-full max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[1100px]">
            {locations.map((location) => (
              <LocationCard key={location.id} location={location} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
