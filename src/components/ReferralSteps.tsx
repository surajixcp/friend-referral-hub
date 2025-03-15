
import { useEffect, useRef } from 'react';
import { Share2, Gift, CheckCircle } from 'lucide-react';

const ReferralSteps = () => {
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          }
        });
      },
      { threshold: 0.1 }
    );

    const childElements = stepsRef.current?.querySelectorAll('.animate-on-scroll');
    childElements?.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      childElements?.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  const steps = [
    {
      icon: <Share2 className="h-8 w-8 text-primary" />,
      title: "Share Your Referral",
      description: "Invite your friends using your unique referral link or code. Share it via email, social media, or text message."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Friend Makes a Purchase",
      description: "When your friend completes their first transaction with us, both you and your friend become eligible for rewards."
    },
    {
      icon: <Gift className="h-8 w-8 text-primary" />,
      title: "Both Get Rewarded",
      description: "You'll receive a ₹10,000 gift card, and your friend gets ₹5,000 off on their first purchase. Win-win!"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-accent/30">
      <div className="container-lg" ref={stepsRef}>
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="heading-lg mb-4">How It Works</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Our referral program is simple. Share, connect, and get rewarded together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="animate-on-scroll glass-card rounded-xl p-8 flex flex-col items-center text-center transition-transform duration-300 hover:translate-y-[-5px]"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <h3 className="heading-sm mb-3">{step.title}</h3>
              <p className="text-foreground/70">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-on-scroll">
          <a href="#refer-now" className="button-primary inline-flex items-center">
            Start Referring Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReferralSteps;
