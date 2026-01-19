import { locations } from "@/data/locations";
import Wave from "@/components/common/Wave";

const Locations = () => {
  return (
    <section id="locations" className="relative min-h-[520px] md:min-h-[600px] bg-secondary overflow-hidden">
      {/* Wave Top */}
      <Wave
        position="top"
        variant="soft"
        fillColor="hsl(var(--background))"
      />

      {/* Background Map Pattern */}
      <div className="absolute inset-0 opacity-25">
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
          <circle cx="600" cy="300" r="100" fill="hsl(var(--primary))" opacity="0.12" />
          <circle cx="1000" cy="200" r="70" fill="hsl(var(--primary))" opacity="0.1" />
          <circle cx="200" cy="400" r="50" fill="hsl(var(--primary))" opacity="0.08" />
          {/* Location markers */}
          <circle cx="400" cy="280" r="15" fill="hsl(var(--primary))" opacity="0.6" />
          <circle cx="900" cy="350" r="15" fill="hsl(var(--primary))" opacity="0.6" />
        </svg>
      </div>

      {/* Overlay Card - positioned absolute on left */}
      <div className="absolute left-4 md:left-16 lg:left-24 top-28 md:top-36 z-10 w-[calc(100%-32px)] max-w-sm md:max-w-[340px]">
        <div className="bg-secondary/95 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl md:text-4xl text-foreground font-bold mb-6">
            Locations
          </h2>

          <div className="space-y-6">
            {locations.map((location) => (
              <div key={location.id}>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg md:text-xl font-bold text-foreground">
                    {location.name.toUpperCase()}
                  </h3>
                  {location.comingSoon && (
                    <span className="text-coral font-semibold text-xs uppercase">
                      Coming Soon
                    </span>
                  )}
                </div>

                {!location.comingSoon && (
                  <p className="text-muted-foreground text-sm mb-1">Windmill Food Hall</p>
                )}

                <p className="text-foreground text-sm">
                  {location.address}
                  {!location.comingSoon && `, ${location.city}`}
                </p>
                <p className="text-foreground text-sm">{location.hours}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
