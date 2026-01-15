import { ExternalLink } from "lucide-react";

const OrderOnline = () => {
  return (
    <section id="order" className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-bold">
            Order Online
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10">
            Your favorites, just a click away. Choose your preferred way to enjoy
            La Vida!
          </p>

          <div className="grid sm:grid-cols-2 gap-5 max-w-lg mx-auto">
            {/* Pickup */}
            <a
              href="https://www.toasttab.com/la-vida-890-palomar-airport-rd"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-primary-foreground text-foreground p-5 md:p-6 rounded-2xl hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              <h3 className="text-xl md:text-2xl mb-2 font-bold">Pickup</h3>
              <p className="text-muted-foreground mb-4 text-sm md:text-base">Order ahead and skip the line</p>
              <span className="inline-flex items-center gap-2 text-primary font-semibold">
                Order on Toast
                <ExternalLink className="w-4 h-4" />
              </span>
            </a>

            {/* Delivery */}
            <a
              href="https://www.grubhub.com/restaurant/la-vida-890-palomar-airport-rd-carlsbad/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-primary-foreground text-foreground p-5 md:p-6 rounded-2xl hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              <h3 className="text-xl md:text-2xl mb-2 font-bold">Delivery</h3>
              <p className="text-muted-foreground mb-4 text-sm md:text-base">Fresh food, delivered to you</p>
              <span className="inline-flex items-center gap-2 text-primary font-semibold">
                Order on Grubhub
                <ExternalLink className="w-4 h-4" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderOnline;
