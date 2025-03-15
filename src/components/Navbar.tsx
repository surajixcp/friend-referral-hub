
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/90 backdrop-blur-sm shadow-sm py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container-lg flex items-center justify-between">
        <a href="/" className="flex items-center">
          <span className="font-display text-xl font-bold text-primary tracking-tight">
            ReferalHub
          </span>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#how-it-works" className="nav-item">How It Works</a>
          <a href="#rewards" className="nav-item">Rewards</a>
          <a href="#testimonials" className="nav-item">Testimonials</a>
          <a href="#faq" className="nav-item">FAQ</a>
        </nav>

        <div className="hidden md:flex space-x-4">
          <a href="#refer-now" className="button-primary">
            Refer a Friend
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed top-[60px] inset-x-0 bg-white/95 backdrop-blur-sm shadow-lg md:hidden transition-all duration-300 ease-in-out transform origin-top",
          isMenuOpen 
            ? "opacity-100 scale-y-100" 
            : "opacity-0 scale-y-0 pointer-events-none"
        )}
      >
        <div className="container px-4 py-6 space-y-4">
          <a 
            href="#how-it-works" 
            className="block py-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            How It Works
          </a>
          <a 
            href="#rewards" 
            className="block py-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Rewards
          </a>
          <a 
            href="#testimonials" 
            className="block py-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Testimonials
          </a>
          <a 
            href="#faq" 
            className="block py-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            FAQ
          </a>
          <div className="pt-4">
            <a 
              href="#refer-now" 
              className="button-primary block text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Refer a Friend
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
