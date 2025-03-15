
import { useEffect, useRef, useState } from 'react';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Referred 3 Friends",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      content: "I referred my cousin and two colleagues to ReferalHub, and we all ended up getting amazing rewards. The process was seamless, and the rewards were credited quickly. Highly recommend their referral program!"
    },
    {
      name: "Raj Patel",
      role: "Referred 2 Friends",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      content: "The referral process couldn't be simpler! I shared my code with a couple of friends who were planning home renovations, and we all benefited. The ₹10,000 gift card came in handy for my own ongoing project."
    },
    {
      name: "Ananya Singh",
      role: "Referred 5 Friends",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      content: "I've referred multiple friends over the past year, and the experience has been consistently excellent. My friends appreciate the discounts they receive, and I love the rewards. It's a win-win situation!"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          testimonialsRef.current?.classList.add('animated');
        }
      },
      { threshold: 0.1 }
    );

    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current);
    }

    return () => {
      if (testimonialsRef.current) {
        observer.unobserve(testimonialsRef.current);
      }
    };
  }, []);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-accent/30">
      <div className="container-lg">
        <div className="text-center mb-16 animate-on-scroll" ref={testimonialsRef}>
          <h2 className="heading-lg mb-4">What Our Referrers Say</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Hear from people who have already benefited from our referral program.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative animate-on-scroll">
          <div className="glass-card rounded-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <div className="relative">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-md mx-auto">
                    <img 
                      src={testimonials[activeIndex].image} 
                      alt={testimonials[activeIndex].name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    <div className="flex items-center">
                      <Star className="h-3 w-3 mr-1 fill-current" />
                      <Star className="h-3 w-3 mr-1 fill-current" />
                      <Star className="h-3 w-3 mr-1 fill-current" />
                      <Star className="h-3 w-3 mr-1 fill-current" />
                      <Star className="h-3 w-3 fill-current" />
                    </div>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <h3 className="font-semibold text-lg">{testimonials[activeIndex].name}</h3>
                  <p className="text-sm text-foreground/70">{testimonials[activeIndex].role}</p>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <blockquote>
                  <p className="text-lg italic text-foreground/80 mb-4">
                    "{testimonials[activeIndex].content}"
                  </p>
                </blockquote>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow-sm hover:bg-primary/5 transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-5 w-5 text-foreground/70" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${index === activeIndex ? 'bg-primary' : 'bg-primary/20'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow-sm hover:bg-primary/5 transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-5 w-5 text-foreground/70" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
