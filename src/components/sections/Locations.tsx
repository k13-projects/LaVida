const Locations = () => {
  return (
    <section id="locations" className="relative bg-background">
      {/* Map Container */}
      <div className="relative w-full">
        {/* SVG Map - Stylized illustrated map matching reference design */}
        <svg
          viewBox="0 0 1440 800"
          className="w-full h-auto"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Background - cream/beige */}
          <rect width="1440" height="800" fill="#f5ebe0" />

          {/* Pink accent areas - organic blob shapes */}
          <path d="M0,0 L200,0 Q240,40 220,80 Q180,120 140,100 Q80,90 40,60 L0,80 Z" fill="#e8b4b8" opacity="0.6" />
          <path d="M1250,0 L1440,0 L1440,120 Q1380,140 1320,100 Q1280,60 1250,0 Z" fill="#e8b4b8" opacity="0.6" />
          <path d="M920,200 Q1000,160 1080,200 Q1120,260 1080,320 Q1000,360 920,320 Q880,260 920,200 Z" fill="#e8b4b8" opacity="0.6" />

          {/* City blocks - small gray rectangles at various angles */}
          <g fill="#c4c0b8" opacity="0.7">
            {/* Top area blocks */}
            <rect x="80" y="20" width="20" height="12" transform="rotate(-15 80 20)" />
            <rect x="120" y="35" width="18" height="10" transform="rotate(-8 120 35)" />
            <rect x="160" y="15" width="22" height="14" transform="rotate(-20 160 15)" />
            <rect x="60" y="55" width="16" height="10" transform="rotate(-10 60 55)" />
            <rect x="100" y="70" width="20" height="12" transform="rotate(-5 100 70)" />
            <rect x="140" y="60" width="18" height="11" transform="rotate(-12 140 60)" />

            {/* Upper middle - scattered */}
            <rect x="550" y="30" width="22" height="14" transform="rotate(5 550 30)" />
            <rect x="600" y="50" width="18" height="11" transform="rotate(10 600 50)" />
            <rect x="650" y="25" width="20" height="13" transform="rotate(8 650 25)" />
            <rect x="700" y="55" width="24" height="15" transform="rotate(12 700 55)" />
            <rect x="580" y="80" width="19" height="12" transform="rotate(6 580 80)" />
            <rect x="640" y="90" width="21" height="13" transform="rotate(15 640 90)" />

            {/* Right side top */}
            <rect x="850" y="40" width="20" height="12" transform="rotate(8 850 40)" />
            <rect x="900" y="60" width="18" height="11" transform="rotate(12 900 60)" />
            <rect x="950" y="35" width="22" height="14" transform="rotate(5 950 35)" />
            <rect x="1000" y="70" width="19" height="12" transform="rotate(10 1000 70)" />
            <rect x="1050" y="45" width="21" height="13" transform="rotate(15 1050 45)" />
            <rect x="1100" y="75" width="18" height="11" transform="rotate(8 1100 75)" />
            <rect x="1150" y="50" width="20" height="12" transform="rotate(12 1150 50)" />
            <rect x="1200" y="80" width="22" height="14" transform="rotate(6 1200 80)" />
            <rect x="1280" y="55" width="19" height="12" transform="rotate(10 1280 55)" />
            <rect x="1330" y="40" width="21" height="13" transform="rotate(14 1330 40)" />
            <rect x="1380" y="70" width="18" height="11" transform="rotate(8 1380 70)" />

            {/* Middle section */}
            <rect x="550" y="140" width="20" height="12" transform="rotate(5 550 140)" />
            <rect x="620" y="160" width="22" height="14" transform="rotate(10 620 160)" />
            <rect x="700" y="130" width="18" height="11" transform="rotate(8 700 130)" />
            <rect x="780" y="155" width="21" height="13" transform="rotate(12 780 155)" />
            <rect x="850" y="120" width="19" height="12" transform="rotate(6 850 120)" />

            <rect x="1150" y="140" width="20" height="12" transform="rotate(10 1150 140)" />
            <rect x="1220" y="160" width="22" height="14" transform="rotate(5 1220 160)" />
            <rect x="1290" y="130" width="18" height="11" transform="rotate(12 1290 130)" />
            <rect x="1360" y="155" width="21" height="13" transform="rotate(8 1360 155)" />

            {/* Lower middle */}
            <rect x="600" y="350" width="20" height="12" transform="rotate(6 600 350)" />
            <rect x="680" y="380" width="22" height="14" transform="rotate(10 680 380)" />
            <rect x="760" y="340" width="18" height="11" transform="rotate(4 760 340)" />
            <rect x="840" y="370" width="21" height="13" transform="rotate(12 840 370)" />

            <rect x="1100" y="340" width="20" height="12" transform="rotate(8 1100 340)" />
            <rect x="1180" y="370" width="22" height="14" transform="rotate(5 1180 370)" />
            <rect x="1260" y="350" width="18" height="11" transform="rotate(10 1260 350)" />
            <rect x="1340" y="380" width="21" height="13" transform="rotate(6 1340 380)" />

            {/* Bottom area */}
            <rect x="700" y="500" width="20" height="12" transform="rotate(5 700 500)" />
            <rect x="780" y="530" width="22" height="14" transform="rotate(10 780 530)" />
            <rect x="860" y="490" width="18" height="11" transform="rotate(8 860 490)" />
            <rect x="940" y="520" width="21" height="13" transform="rotate(12 940 520)" />
            <rect x="1020" y="500" width="19" height="12" transform="rotate(6 1020 500)" />
            <rect x="1100" y="540" width="20" height="12" transform="rotate(10 1100 540)" />
            <rect x="1180" y="510" width="22" height="14" transform="rotate(5 1180 510)" />
            <rect x="1260" y="550" width="18" height="11" transform="rotate(12 1260 550)" />
            <rect x="1340" y="520" width="21" height="13" transform="rotate(8 1340 520)" />

            {/* Very bottom */}
            <rect x="600" y="620" width="20" height="12" transform="rotate(6 600 620)" />
            <rect x="700" y="660" width="22" height="14" transform="rotate(10 700 660)" />
            <rect x="800" y="630" width="18" height="11" transform="rotate(4 800 630)" />
            <rect x="900" y="670" width="21" height="13" transform="rotate(12 900 670)" />
            <rect x="1000" y="640" width="19" height="12" transform="rotate(8 1000 640)" />
            <rect x="1100" y="680" width="20" height="12" transform="rotate(5 1100 680)" />
            <rect x="1200" y="650" width="22" height="14" transform="rotate(10 1200 650)" />
            <rect x="1300" y="690" width="18" height="11" transform="rotate(6 1300 690)" />
            <rect x="1380" y="660" width="21" height="13" transform="rotate(12 1380 660)" />

            <rect x="650" y="740" width="20" height="12" transform="rotate(8 650 740)" />
            <rect x="750" y="770" width="22" height="14" transform="rotate(5 750 770)" />
            <rect x="850" y="750" width="18" height="11" transform="rotate(10 850 750)" />
            <rect x="950" y="780" width="21" height="13" transform="rotate(6 950 780)" />
            <rect x="1050" y="760" width="19" height="12" transform="rotate(12 1050 760)" />
            <rect x="1150" y="790" width="20" height="12" transform="rotate(8 1150 790)" />
            <rect x="1250" y="770" width="22" height="14" transform="rotate(5 1250 770)" />
            <rect x="1350" y="755" width="18" height="11" transform="rotate(10 1350 755)" />
          </g>

          {/* Main roads - thick olive green curved paths */}
          <g stroke="#7a8450" fill="none" strokeLinecap="round" strokeLinejoin="round">
            {/* Top curved road */}
            <path
              d="M-20,80 Q250,60 500,100 Q750,140 1000,120 Q1200,100 1460,140"
              strokeWidth="12"
            />

            {/* Main diagonal road from top-left going down */}
            <path
              d="M200,0 Q240,100 300,200 Q380,350 420,500 Q480,700 520,800"
              strokeWidth="12"
            />

            {/* Right vertical road */}
            <path
              d="M1150,0 Q1120,150 1100,300 Q1080,500 1120,700 Q1140,750 1160,800"
              strokeWidth="12"
            />

            {/* Middle horizontal connector */}
            <path
              d="M300,200 Q500,220 750,200 Q950,180 1100,220"
              strokeWidth="10"
            />

            {/* Lower horizontal road */}
            <path
              d="M420,500 Q650,480 900,520 Q1050,550 1120,580"
              strokeWidth="10"
            />

            {/* Bottom curved road */}
            <path
              d="M-20,600 Q200,550 450,620 Q700,680 950,640 Q1200,600 1460,660"
              strokeWidth="10"
            />
          </g>

          {/* Road intersections - olive circles */}
          <g fill="#7a8450">
            <circle cx="300" cy="200" r="16" />
            <circle cx="420" cy="500" r="16" />
            <circle cx="1100" cy="220" r="16" />
            <circle cx="1120" cy="580" r="16" />
          </g>

          {/* Location Card - Olive rectangle on left */}
          <rect x="140" y="60" width="300" height="680" fill="#7a8450" />
        </svg>

        {/* Overlay Card - positioned on the olive rectangle */}
        <div className="absolute left-[9.7%] top-[7.5%] w-[20.8%] h-[85%] flex flex-col justify-start pt-6 sm:pt-8 md:pt-12 px-4 sm:px-6 md:px-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-bold mb-8 sm:mb-10 md:mb-14">
            Locations
          </h2>

          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {/* Carlsbad */}
            <div>
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-1">
                CARLSBAD
              </h3>
              <p className="text-white/90 text-[10px] sm:text-xs md:text-sm lg:text-base">
                Windmill Food Hall
              </p>
              <p className="text-white/90 text-[10px] sm:text-xs md:text-sm lg:text-base">
                890 Palomar Airport Rd, CA 92011
              </p>
              <p className="text-white/90 text-[10px] sm:text-xs md:text-sm lg:text-base">
                Daily: 11:00 AM – 9:00 PM
              </p>
            </div>

            {/* Miramar */}
            <div>
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-1">
                MIRAMAR
              </h3>
              <p className="text-white font-semibold text-[10px] sm:text-xs md:text-sm lg:text-base">
                COMING SOON
              </p>
              <p className="text-white/90 text-[10px] sm:text-xs md:text-sm lg:text-base">
                1720 North El Camino Real
              </p>
              <p className="text-white/90 text-[10px] sm:text-xs md:text-sm lg:text-base">
                Daily: 11:00 AM – 9:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
