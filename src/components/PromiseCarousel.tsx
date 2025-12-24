import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import promiseOntime from "@/assets/promise-ontime.jpg";
import promiseSafe from "@/assets/promise-safe.jpg";
import promiseTrusted from "@/assets/promise-trusted.jpg";
import promiseStressfree from "@/assets/promise-stressfree.jpg";
import promiseRates from "@/assets/promise-rates.jpg";

const promises = [
  {
    image: promiseOntime,
    title: "On-Time Delivery",
    description: "We value your time. Every shipment arrives exactly when promised.",
  },
  {
    image: promiseSafe,
    title: "Safe Delivery",
    description: "Your goods are secured and protected throughout the journey.",
  },
  {
    image: promiseTrusted,
    title: "Trusted Service",
    description: "Built on years of reliability and customer satisfaction.",
  },
  {
    image: promiseStressfree,
    title: "Stress-Free Experience",
    description: "Sit back and relax while we handle your logistics needs.",
  },
  {
    image: promiseRates,
    title: "Most Reasonable Rates",
    description: "Quality service at competitive prices. Value for every rupee.",
  },
];

const PromiseCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % promises.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + promises.length) % promises.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % promises.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Our Promises To You
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            At Sri Thakare Transport, we don't just deliver goods – we deliver on our promises.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-2xl shadow-elevated">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {promises.map((promise, index) => (
                <div key={index} className="w-full flex-shrink-0 relative">
                  <div className="aspect-video relative">
                    <img
                      src={promise.image}
                      alt={promise.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                      <h3 className="font-display font-bold text-2xl md:text-3xl text-primary-foreground mb-2">
                        {promise.title}
                      </h3>
                      <p className="text-primary-foreground/80 text-sm md:text-base max-w-lg">
                        {promise.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-background/90 hover:bg-background rounded-full shadow-card transition-all hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-foreground" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-background/90 hover:bg-background rounded-full shadow-card transition-all hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-foreground" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {promises.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-secondary hover:bg-secondary/80"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromiseCarousel;
