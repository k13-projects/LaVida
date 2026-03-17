import { FC } from 'react';

// Location data
// UPDATED: All 4 locations now open with confirmed data (Tasks 5+6)
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
    isComingSoon: false,
  },
  {
    id: 'san-clemente',
    cityLabel: 'SAN CLEMENTE',
    subtitle: 'Miramar Food Hall',
    addressLines: [
      '1720 North El Camino Real,',
      'CA 92672'
    ],
    hoursLabel: '11:00 AM – 9:00 PM',
    link: 'https://maps.google.com/?q=1720+North+El+Camino+Real,+San+Clemente,+CA+92672',
    isComingSoon: true,
  },
  {
    id: 'ucsd',
    cityLabel: 'UCSD CAMPUS',
    subtitle: 'Station 8 Public Market',
    addressLines: [
      '9165 Theatre District Drive,',
      'La Jolla, CA 92037'
    ],
    hoursLabel: '11:00 AM – 9:00 PM',
    link: 'https://maps.google.com/?q=9165+Theatre+District+Drive,+La+Jolla,+CA+92037',
    isComingSoon: true,
  },
  {
    id: 'little-italy',
    cityLabel: 'LITTLE ITALY',
    subtitle: 'Global Fork Food Hall',
    addressLines: [
      '550 W Date St Suite B,',
      'San Diego, CA 92101'
    ],
    hoursLabel: '11:00 AM – 9:00 PM',
    link: 'https://maps.google.com/?q=550+W+Date+St+Suite+B,+San+Diego,+CA+92101',
    isComingSoon: true,
  },
];

// Location Card Component
const LocationCard: FC<{
  location: typeof locations[0];
}> = ({ location }) => {
  return (
    <div className={`relative bg-primary/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 xs:p-4 sm:p-5 md:p-6 lg:p-8 shadow-xl w-full h-full min-h-[160px] xs:min-h-[180px] sm:min-h-[200px] md:min-h-[240px] lg:min-h-[280px] xl:min-h-[320px] flex flex-col items-center justify-between text-center border overflow-hidden transition-all ${location.isComingSoon ? 'border-[#F5F0E8]/10' : 'border-[#F5F0E8]/20'}`}>

      {/* City Label */}
      <h3 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-0.5 sm:mb-1">
        {location.cityLabel}
      </h3>

      {/* Subtitle */}
      {location.subtitle && (
        <p className="text-[11px] xs:text-xs sm:text-sm md:text-base lg:text-lg mb-1 sm:mb-2 font-semibold text-white/90">
          {location.subtitle}
        </p>
      )}

      {/* Address Lines */}
      <div className="mb-1 sm:mb-2 flex-1 flex flex-col justify-center">
        {location.addressLines.map((line, idx) => (
          <p key={idx} className="text-white/80 text-[11px] xs:text-xs sm:text-sm md:text-base lg:text-lg leading-snug sm:leading-relaxed font-medium">
            {line}
          </p>
        ))}
      </div>

      {/* Hours */}
      <p className="text-white/80 text-[11px] xs:text-xs sm:text-sm md:text-base lg:text-lg mb-2 sm:mb-3 lg:mb-4 font-medium">
        {location.hoursLabel}
      </p>

      {/* Button area — either Get Directions or Opening Soon badge */}
      {location.isComingSoon ? (
        <div className="flex items-center gap-1.5 sm:gap-2 bg-[#F5F0E8]/15 backdrop-blur-sm border border-[#F5F0E8]/30 px-3 xs:px-4 sm:px-5 md:px-6 py-1.5 xs:py-2 sm:py-2.5 rounded-full">
          <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-amber-400"></span>
          </span>
          <span className="text-[#F5F0E8] font-semibold text-[11px] xs:text-xs sm:text-sm md:text-base lg:text-lg tracking-wide uppercase">
            Opening Soon
          </span>
        </div>
      ) : (
        <a
          href={location.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#F5F0E8] hover:bg-white text-olive-dark text-center px-3 xs:px-4 sm:px-5 md:px-6 py-1.5 xs:py-2 sm:py-2.5 rounded-full font-semibold text-[11px] xs:text-xs sm:text-sm md:text-base lg:text-lg transition-colors"
          aria-label={`Get directions to ${location.cityLabel} location (opens in new tab)`}
        >
          Get Directions
        </a>
      )}
    </div>
  );
};

// Main Locations Component
const Locations: FC = () => {
  return (
    <section id="locations" className="relative bg-[#FDF8F5] py-16 md:py-24 lg:py-32" aria-labelledby="locations-heading">
      <h2 id="locations-heading" className="sr-only">Our Locations</h2>
      {/* Map Container */}
      <div className="relative w-full">
        {/* Background Map Image - decorative */}
        <picture>
          <source
            srcSet={`${import.meta.env.BASE_URL}images/locations/Large_map.webp`}
            type="image/webp"
          />
          <img
            src={`${import.meta.env.BASE_URL}images/locations/Large_map.png`}
            alt=""
            role="presentation"
            className="w-full h-auto object-cover min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-0"
            loading="lazy"
          />
        </picture>

        {/* Cards Overlay - Responsive Grid */}
        <div className="absolute inset-0 flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8">
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 w-full max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[1100px]" role="list" aria-label="Restaurant locations">
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
