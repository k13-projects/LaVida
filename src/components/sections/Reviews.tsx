import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface Review {
  id: number;
  name: string;
  source: "Google" | "Yelp";
  isLocalGuide?: boolean;
  text: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Mia Ratajczak",
    source: "Google",
    text: "10/10 experience!! I got the kale ceasar salad plus chicken, and it was fabulous!! It came in this huge bowl with lots and lots of protein. Also the service was amazing!! I loved the environment and everyone was so welcoming. I will definitely be back!!",
  },
  {
    id: 2,
    name: "Sim B",
    source: "Google",
    isLocalGuide: true,
    text: "Tried the hummus wrap and avocado toast at La Vida and wow, healthy food that actually tastes good is real. Everything was fresh, flavorful, and satisfying without feeling heavy. This is the kind of place that makes you forget you're eating 'healthy' because it just tastes great. Definitely coming back.",
  },
  {
    id: 3,
    name: "Alphan Şibiroğlu",
    source: "Google",
    text: "The food was absolutely delicious, and the matcha latte was spot on! If you're looking for a healthy and satisfying meal, this is the place to treat yourself. The staff were incredibly kind and attentive. La Vida is truly one of the top spots in California!",
  },
  {
    id: 4,
    name: "Yelp Reviewer",
    source: "Yelp",
    text: "We tried the kale caesar and added chicken. This place is great if you're looking for fresh clean ingredients!! The chicken was cooked to perfection and still very juicy. If you're trying a few of the stalls like me we did this is a great addition for something green and fresh. Hope more people show this spot love!!!",
  },
  {
    id: 5,
    name: "Yelp Reviewer",
    source: "Yelp",
    text: "I mean if you think healthy food cannot be delicious you have to try it in La Vida. I ate the most delicious avocado toast ever in my life.",
  },
  {
    id: 6,
    name: "Jill Walkowiak",
    source: "Google",
    text: "It's so good especially for a hot summer day, the pb kiss açaí bowl is so good too. We're gonna come back!",
  },
  {
    id: 7,
    name: "K \"Citizen K\"",
    source: "Google",
    isLocalGuide: true,
    text: "Much healthier food here compared to the neighbors!",
  },
  {
    id: 8,
    name: "Harry Koenig",
    source: "Google",
    text: "WOW.....just WOW!!! I've been living in Carlsbad for a while and this is a hidden gem. I am very strict with my diet with eating healthy and they were more than able to accommodate anything I needed. The costal salmon wrap was out of this world and the service was top notch. Definitely a must try!",
  },
];

const StarRating = () => (
  <div className="flex gap-0.5 mb-3">
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
    ))}
  </div>
);

const ReviewCard = ({ review }: { review: Review }) => (
  <div className="bg-white rounded-xl p-5 sm:p-6 shadow-md border border-foreground/5 h-full flex flex-col min-h-[200px]">
    <StarRating />
    <p className="text-foreground/80 text-sm leading-relaxed mb-4 flex-1 line-clamp-5">
      &ldquo;{review.text}&rdquo;
    </p>
    <div className="mt-auto pt-3 border-t border-foreground/5">
      <p className="font-semibold text-foreground text-sm">{review.name}</p>
      <p className="text-xs text-muted-foreground">
        {review.source}
        {review.isLocalGuide ? " · Local Guide" : ""}
      </p>
    </div>
  </div>
);

const Reviews = () => {
  return (
    <section
      className="relative bg-[#FDF8F5] py-16 md:py-24"
      aria-labelledby="reviews-heading"
    >
      <div className="container mx-auto px-4">
        <h2
          id="reviews-heading"
          className="text-3xl md:text-4xl font-bold text-center text-foreground mb-3"
        >
          What Our Guests Say
        </h2>
        <p className="text-center text-muted-foreground text-base md:text-lg mb-10">
          Real reviews from real customers
        </p>

        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full"
            aria-label="Customer reviews"
          >
            <CarouselContent className="-ml-4" aria-live="polite">
              {reviews.map((review) => (
                <CarouselItem
                  key={review.id}
                  className="pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3"
                >
                  <ReviewCard review={review} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-4 lg:-left-6" />
            <CarouselNext className="hidden sm:flex -right-4 lg:-right-6" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
