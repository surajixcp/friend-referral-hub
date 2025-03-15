
import { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
  return (
    <div className="border-b border-border last:border-0">
      <button
        className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <h3 className="font-medium text-lg">{question}</h3>
        <span className="ml-4 flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-primary" />
          ) : (
            <ChevronDown className="h-5 w-5 text-foreground/70" />
          )}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="pb-6 text-foreground/70">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const faqRef = useRef<HTMLDivElement>(null);

  const faqs = [
    {
      question: "How does the referral program work?",
      answer: "Our referral program is simple. You share your unique referral link or code with friends and family who might be interested in our services. When they make their first purchase using your referral, both you and your friend receive rewards: you get a ₹10,000 gift card, and they get ₹5,000 off their purchase."
    },
    {
      question: "Is there a limit to how many people I can refer?",
      answer: "No, there's no limit to the number of friends you can refer. The more friends you refer who complete a purchase, the more rewards you'll earn!"
    },
    {
      question: "When will I receive my reward after referring someone?",
      answer: "Your reward will be credited to your account within 7 days after your friend completes their transaction with us. You'll receive a notification when your reward is ready to use."
    },
    {
      question: "How long is my referral link valid?",
      answer: "Your referral link does not expire and can be used multiple times for different friends. However, each friend can only use one referral link for their first purchase."
    },
    {
      question: "Can I use my reward for any service?",
      answer: "Yes, your ₹10,000 gift card can be used for any of our services, including new projects or ongoing ones. It's as good as cash for any transaction with us."
    },
    {
      question: "What if my friend cancels their order after I've received my reward?",
      answer: "If your friend cancels their order after the cooling-off period, we reserve the right to retract or adjust the reward based on our terms and conditions. Please refer to our detailed referral policy for more information."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          faqRef.current?.classList.add('animated');
        }
      },
      { threshold: 0.1 }
    );

    if (faqRef.current) {
      observer.observe(faqRef.current);
    }

    return () => {
      if (faqRef.current) {
        observer.unobserve(faqRef.current);
      }
    };
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20">
      <div className="container-md" ref={faqRef}>
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="heading-lg mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Everything you need to know about our referral program.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-card p-6 md:p-8 animate-on-scroll">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <p className="mb-6 text-foreground/70">
            Still have questions? We're here to help.
          </p>
          <a href="#" className="button-outline">
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
