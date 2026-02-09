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
      'San Clemente, CA 92672'
    ],
    hoursLabel: '11:00 AM – 9:00 PM',
    link: 'https://maps.google.com/?q=1720+North+El+Camino+Real,+San+Clemente,+CA+92672',
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

      {/* Subtitle - font-semibold for WCAG contrast compliance at small sizes */}
      {location.subtitle && (
        <p className={`text-[11px] xs:text-xs sm:text-sm md:text-base lg:text-lg mb-1 sm:mb-2 font-semibold ${isComingSoon ? 'text-white tracking-wide' : 'text-white'}`}>
          {location.subtitle}
        </p>
      )}

      {/* Address Lines - font-medium for WCAG contrast compliance */}
      <div className="mb-1 sm:mb-2 flex-1 flex flex-col justify-center">
        {location.addressLines.map((line, idx) => (
          <p key={idx} className="text-white text-[11px] xs:text-xs sm:text-sm md:text-base lg:text-lg leading-snug sm:leading-relaxed font-medium">
            {line}
          </p>
        ))}
      </div>

      {/* Hours - font-medium for WCAG contrast compliance */}
      <p className="text-white text-[11px] xs:text-xs sm:text-sm md:text-base lg:text-lg mb-2 sm:mb-3 lg:mb-4 font-medium">
        {location.hoursLabel}
      </p>

      {/* Get Directions Button - using olive-dark text for better contrast */}
      <a
        href={location.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#F5F0E8] hover:bg-white text-olive-dark text-center px-3 xs:px-4 sm:px-5 md:px-6 py-1.5 xs:py-2 sm:py-2.5 rounded-full font-semibold text-[11px] xs:text-xs sm:text-sm md:text-base lg:text-lg transition-colors"
        aria-label={`Get directions to ${location.cityLabel} location (opens in new tab)`}
      >
        Get Directions
      </a>
    </div>
  );
};

// Main Locations Component
const Locations: FC = () => {
  return (
    <section id="locations" className="relative bg-[#FDF8F5]" aria-labelledby="locations-heading">
      <h2 id="locations-heading" className="sr-only">Our Locations</h2>
      {/* Map Container */}
      <div className="relative w-full">
        {/* Background Map Image - decorative */}
        <img
          src={`${import.meta.env.BASE_URL}images/locations/Large_map.png`}
          alt=""
          role="presentation"
          className="w-full h-auto object-cover min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-0"
        />

        {/* Cards Overlay - Responsive Grid */}
        <div className="absolute inset-0 flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8">
          <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8 w-full max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[1100px]" role="list" aria-label="Restaurant locations">
            {locations.map((location) => (
              <div key={location.id} role="listitem">
                <LocationCard location={location} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
