import { FC } from 'react';

// Location data with positions
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
    position: { top: '10%', left: '12%' },
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
    position: { top: '10%', right: '12%' },
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
    position: { bottom: '10%', left: '12%' },
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
    position: { bottom: '10%', right: '12%' },
  },
];

// Location Card Component
const LocationCard: FC<{
  location: typeof locations[0];
}> = ({ location }) => {
  const isComingSoon = location.subtitle === 'COMING SOON';

  return (
    <div
      className="absolute z-10 pointer-events-auto"
      style={location.position}
    >
      <div className="bg-primary/95 backdrop-blur-sm rounded-xl p-6 lg:p-8 shadow-xl w-[350px] sm:w-[400px] lg:w-[475px] h-[253px] sm:h-[275px] lg:h-[325px] flex flex-col items-center text-center border border-[#F5F0E8]/20">
        {/* City Label */}
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">
          {location.cityLabel}
        </h3>

        {/* Subtitle */}
        {location.subtitle && (
          <p className={`text-sm sm:text-base lg:text-lg mb-2 ${isComingSoon ? 'text-white font-semibold tracking-wide' : 'text-white/90'}`}>
            {location.subtitle}
          </p>
        )}

        {/* Address Lines */}
        <div className="mb-2 flex-1">
          {location.addressLines.map((line, idx) => (
            <p key={idx} className="text-[#F5F0E8] text-sm sm:text-base lg:text-lg leading-relaxed">
              {line}
            </p>
          ))}
        </div>

        {/* Hours */}
        <p className="text-[#F5F0E8] text-sm sm:text-base lg:text-lg mb-4">
          {location.hoursLabel}
        </p>

        {/* Get Directions Button */}
        <a
          href={location.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#F5F0E8] hover:bg-white text-primary text-center px-6 py-2.5 rounded-full font-medium text-sm sm:text-base lg:text-lg transition-colors"
        >
          Get Directions
        </a>
      </div>
    </div>
  );
};

// Main Locations Component
const Locations: FC = () => {
  return (
    <section id="locations" className="relative bg-[#FDF8F5]">
      {/* Map Container - 90% width centered */}
      <div className="relative w-[90%] mx-auto" style={{ aspectRatio: '16 / 9' }}>
        {/* Background Map Image */}
        <img
          src={`${import.meta.env.BASE_URL}images/locations/Large_map.png`}
          alt="La Vida Locations Map"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Scattered Location Cards */}
        {locations.map((location) => (
          <LocationCard key={location.id} location={location} />
        ))}
      </div>
    </section>
  );
};

export default Locations;
