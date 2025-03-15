
import { useState, useEffect, useRef } from 'react';
import { Copy, Send, Check } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const ReferralForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [friendName, setFriendName] = useState('');
  const [friendEmail, setFriendEmail] = useState('');
  const [referralCode, setReferralCode] = useState('REF12345');
  const [copied, setCopied] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          formRef.current?.classList.add('animated');
        }
      },
      { threshold: 0.1 }
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
    };
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    toast({
      title: "Code Copied!",
      description: "Referral code copied to clipboard",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Referral Sent!",
      description: `You've successfully invited ${friendName} to join.`,
    });
    // Reset form
    setFriendName('');
    setFriendEmail('');
  };

  return (
    <section id="refer-now" className="py-20 bg-gradient-to-b from-accent/50 to-white">
      <div className="container-md" ref={formRef}>
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="heading-lg mb-4">Refer & Earn Now</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Share the love and get rewarded. Start referring your friends and family today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 animate-on-scroll">
          <div className="glass-card rounded-xl overflow-hidden shadow-card">
            <div className="bg-primary p-6 text-white">
              <h3 className="text-xl font-semibold">Your Unique Referral Code</h3>
            </div>
            <div className="p-8">
              <p className="mb-6 text-foreground/70">
                Share this code with your friends or copy the link below:
              </p>
              
              <div className="flex items-center bg-secondary rounded-lg overflow-hidden mb-6">
                <div className="flex-grow bg-secondary p-4 font-mono text-lg font-semibold text-primary">
                  {referralCode}
                </div>
                <button 
                  onClick={copyToClipboard}
                  className="bg-primary hover:bg-primary/90 text-white p-4 transition-colors"
                >
                  {copied ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    <Copy className="h-5 w-5" />
                  )}
                </button>
              </div>
              
              <div className="mb-6">
                <p className="text-sm text-foreground/70 mb-2">Or share via:</p>
                <div className="flex space-x-4">
                  <a 
                    href={`https://wa.me/?text=Use my referral code ${referralCode} to get ₹5,000 off on your first purchase!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] text-white w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                    aria-label="Share on WhatsApp"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </a>
                  <a 
                    href={`https://www.facebook.com/sharer/sharer.php?u=https://referal-hub.com/ref/${referralCode}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#3b5998] text-white w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                    aria-label="Share on Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a 
                    href={`mailto:?subject=Get ₹5,000 off on your first purchase&body=Use my referral code ${referralCode} to get ₹5,000 off on your first purchase!`}
                    className="bg-[#EA4335] text-white w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                    aria-label="Share via Email"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4.236l-8 4.882-8-4.882V6h16v2.236z"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              <p className="text-sm text-foreground/70">
                *Your friends will receive a notification with your referral.
              </p>
            </div>
          </div>

          <div className="glass-card rounded-xl overflow-hidden shadow-card">
            <div className="bg-primary p-6 text-white">
              <h3 className="text-xl font-semibold">Invite a Friend Directly</h3>
            </div>
            <div className="p-8">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 bg-white border border-border rounded-md focus:ring-2 focus:ring-primary/30"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 bg-white border border-border rounded-md focus:ring-2 focus:ring-primary/30"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                
                <div className="h-px bg-border my-6"></div>
                
                <div className="mb-4">
                  <label htmlFor="friendName" className="block text-sm font-medium text-foreground/80 mb-1">
                    Friend's Name
                  </label>
                  <input
                    type="text"
                    id="friendName"
                    value={friendName}
                    onChange={(e) => setFriendName(e.target.value)}
                    className="w-full p-3 bg-white border border-border rounded-md focus:ring-2 focus:ring-primary/30"
                    placeholder="Enter friend's name"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="friendEmail" className="block text-sm font-medium text-foreground/80 mb-1">
                    Friend's Email
                  </label>
                  <input
                    type="email"
                    id="friendEmail"
                    value={friendEmail}
                    onChange={(e) => setFriendEmail(e.target.value)}
                    className="w-full p-3 bg-white border border-border rounded-md focus:ring-2 focus:ring-primary/30"
                    placeholder="Enter friend's email"
                    required
                  />
                </div>
                
                <button 
                  type="submit"
                  className="button-primary w-full flex items-center justify-center gap-2"
                >
                  <Send className="h-5 w-5" />
                  Send Invitation
                </button>
                
                <p className="text-sm text-foreground/70 mt-4">
                  By inviting friends, you agree to our 
                  <a href="#" className="text-primary hover:underline ml-1">
                    Terms and Conditions
                  </a>.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferralForm;
