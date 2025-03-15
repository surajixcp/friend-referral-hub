
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const refSection = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          refSection.current?.classList.add('animated');
        }
      },
      { threshold: 0.1 }
    );

    if (refSection.current) {
      observer.observe(refSection.current);
    }

    return () => {
      if (refSection.current) {
        observer.unobserve(refSection.current);
      }
    };
  }, []);

  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container-lg relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-on-scroll" ref={refSection}>
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-ping-slow"></span>
            Introducing Our Referral Program
          </div>
          
          <h1 className="heading-xl mb-6 animate-fade-in">
            <span className="text-primary">Share</span> with friends, 
            <span className="block"> Earn <span className="text-primary">together</span></span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-in">
            Refer your friends and family to our home renovation services and get rewarded. 
            Both you and your friend will receive exclusive benefits and discounts.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
            <a href="#refer-now" className="button-primary flex items-center gap-2 w-full sm:w-auto justify-center">
              Refer Now
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#how-it-works" className="button-secondary w-full sm:w-auto justify-center">
              How It Works
            </a>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-accent/50 to-transparent -z-10"></div>
      <div className="absolute top-24 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Hero;
