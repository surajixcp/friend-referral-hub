
import { useEffect, useRef } from 'react';
import { Gift, Users, Award } from 'lucide-react';

const RewardCard = () => {
  const rewardsRef = useRef<HTMLDivElement>(null);

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

    const childElements = rewardsRef.current?.querySelectorAll('.animate-on-scroll');
    childElements?.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      childElements?.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="rewards" className="py-20">
      <div className="container-lg" ref={rewardsRef}>
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="heading-lg mb-4">Exciting Rewards Await</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Our generous rewards program ensures both you and your friends benefit from your referrals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="animate-on-scroll">
            <div className="glass-card rounded-xl overflow-hidden h-full">
              <div className="bg-primary p-6 text-white">
                <h3 className="text-2xl font-semibold">For You (Referrer)</h3>
              </div>
              <div className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <Gift className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-semibold mb-2">₹10,000 Gift Card</h4>
                    <p className="text-foreground/70">
                      Receive a ₹10,000 gift card for each successful referral that completes a transaction.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 mb-6">
                  <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Unlimited Referrals</h4>
                    <p className="text-foreground/70">
                      There's no limit to how many friends you can refer. The more you refer, the more you earn!
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Award className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Loyalty Status</h4>
                    <p className="text-foreground/70">
                      Unlock exclusive VIP benefits and priority service with multiple successful referrals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll" style={{ animationDelay: '150ms' }}>
            <div className="glass-card rounded-xl overflow-hidden h-full">
              <div className="bg-accent p-6">
                <h3 className="text-2xl font-semibold text-primary">For Your Friend (Referee)</h3>
              </div>
              <div className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <Gift className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-semibold mb-2">₹5,000 Off First Purchase</h4>
                    <p className="text-foreground/70">
                      Your friend gets ₹5,000 off on their first transaction with us.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 mb-6">
                  <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Priority Consultation</h4>
                    <p className="text-foreground/70">
                      Referred friends get priority scheduling for their initial design consultation.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Award className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Welcome Package</h4>
                    <p className="text-foreground/70">
                      A special welcome gift awaits your friend when they complete their first project with us.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center animate-on-scroll">
          <p className="text-sm text-foreground/60 mb-6">
            *Terms and conditions apply. Rewards are credited after your friend's transaction is complete.
          </p>
          <a href="#refer-now" className="button-primary">
            Get Started Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default RewardCard;
