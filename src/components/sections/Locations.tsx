import { locations } from "@/data/locations";

const Locations = () => {
  return (
    <section id="locations" className="py-16 md:py-24 bg-secondary relative overflow-hidden">
      {/* Decorative Map Pattern - adjusted for pink background */}
      <div className="absolute inset-0 opacity-30">
        <svg viewBox="0 0 1440 600" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          {/* Road-like curved paths */}
          <path
            d="M-100,100 Q200,50 400,100 T800,80 T1200,120 T1600,100"
            stroke="hsl(var(--primary))"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M-50,250 Q150,200 350,250 T750,220 T1150,280 T1550,250"
            stroke="hsl(var(--primary))"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M0,400 Q250,350 450,400 T850,370 T1250,420 T1500,400"
            stroke="hsl(var(--primary))"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M100,500 Q300,450 500,500 T900,470 T1300,520"
            stroke="hsl(var(--primary))"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
          />
          {/* Decorative circles */}
          <circle cx="350" cy="250" r="80" fill="hsl(var(--primary))" opacity="0.15" />
          <circle cx="900" cy="350" r="60" fill="hsl(var(--primary))" opacity="0.1" />
          <circle cx="1200" cy="150" r="50" fill="hsl(var(--primary))" opacity="0.12" />
          {/* Location markers */}
          <circle cx="350" cy="250" r="12" fill="hsl(var(--primary))" />
          <circle cx="900" cy="350" r="12" fill="hsl(var(--primary))" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left side - Heading in a box */}
          <div>
            <div className="inline-block bg-blush/50 px-8 py-4 rounded-2xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground font-bold">
                Locations
              </h2>
            </div>
          </div>

          {/* Right side - Location cards */}
          <div className="space-y-5">
            {locations.map((location) => (
              <div
                key={location.id}
                className="bg-white p-5 md:p-6 rounded-2xl shadow-md"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">
                    {location.name.toUpperCase()}
                  </h3>
                  {location.comingSoon && (
                    <span className="text-coral font-semibold text-sm">
                      COMING SOON
                    </span>
                  )}
                </div>

                {!location.comingSoon && (
                  <p className="text-muted-foreground mb-2">Windmill Food Hall</p>
                )}

                <p className="text-foreground mb-1">
                  {location.address}
                  {!location.comingSoon && `, ${location.city}`}
                </p>
                <p className="text-foreground">{location.hours}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
