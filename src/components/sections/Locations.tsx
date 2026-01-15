import { MapPin, Clock } from "lucide-react";
import { locations } from "@/data/locations";

const Locations = () => {
  return (
    <section id="locations" className="py-16 md:py-24 bg-primary relative overflow-hidden">
      {/* Decorative Map Pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg viewBox="0 0 1440 600" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          {/* Road-like curved paths */}
          <path
            d="M-100,100 Q200,50 400,100 T800,80 T1200,120 T1600,100"
            stroke="hsl(var(--cream))"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M-50,250 Q150,200 350,250 T750,220 T1150,280 T1550,250"
            stroke="hsl(var(--cream))"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M0,400 Q250,350 450,400 T850,370 T1250,420 T1500,400"
            stroke="hsl(var(--cream))"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M100,500 Q300,450 500,500 T900,470 T1300,520"
            stroke="hsl(var(--cream))"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
          />
          {/* Decorative circles for locations */}
          <circle cx="350" cy="250" r="80" fill="hsl(var(--secondary))" opacity="0.3" />
          <circle cx="900" cy="350" r="60" fill="hsl(var(--cream))" opacity="0.25" />
          <circle cx="1200" cy="150" r="50" fill="hsl(var(--secondary))" opacity="0.2" />
          {/* Location markers */}
          <circle cx="350" cy="250" r="12" fill="hsl(var(--secondary))" />
          <circle cx="900" cy="350" r="12" fill="hsl(var(--cream))" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="mb-10 md:mb-14">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-bold">
            Locations
          </h2>
        </div>

        {/* Locations Cards */}
        <div className="max-w-xl space-y-5">
          {locations.map((location) => (
            <div
              key={location.id}
              className="bg-secondary p-5 md:p-7 rounded-2xl text-foreground shadow-lg"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-1">
                    {location.name}
                  </h3>
                  {location.comingSoon ? (
                    <p className="text-coral font-semibold">Coming Soon</p>
                  ) : (
                    <p className="text-muted-foreground font-medium">
                      Windmill Food Hall
                    </p>
                  )}
                </div>
                {location.comingSoon && (
                  <span className="bg-coral/20 text-coral px-3 py-1 rounded-full text-sm font-semibold">
                    Opening Soon
                  </span>
                )}
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                  {location.isOpen ? (
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(location.address + ", " + location.city)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      {location.address}, {location.city}
                    </a>
                  ) : (
                    <span className="text-muted-foreground">
                      {location.address}, {location.city}
                    </span>
                  )}
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                  <span>{location.hours}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
