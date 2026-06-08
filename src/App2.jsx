import { useState, useEffect } from 'react';
import { 
  Menu as MenuIcon, 
  X, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Leaf, 
  Heart, 
  Utensils, 
  // Instagram, 
  // Facebook, 
  MessageCircle, 
  Award,
  ChevronDown,
  CheckCircle2,
  Loader2
} from 'lucide-react';

// Premium Unsplash Images
const IMAGES = {
  heroBg: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1920&q=80",
  aboutImg: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80",
  statsBg: "https://images.unsplash.com/photo-1507914464562-6ff4ac29692f?auto=format&fit=crop&w=1920&q=80",
  contactBg: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80",
  
  // Menu items
  vegPlatter: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=600&q=80",
  paneerTikka: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
  natuKodi: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
  gonguraMutton: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
  pesarattu: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80",
  payasam: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
  coffee: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80",
  juice: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=600&q=80",
  
  // Gallery items
  galleryFood1: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
  galleryFood2: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
  galleryAmbiance1: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
  galleryAmbiance2: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80",
  galleryEvent1: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
  galleryEvent2: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80",
};

const MENU_ITEMS = [
  {
    id: 1,
    name: "Village Veg Platter",
    description: "A delightful assortment of traditional village appetizers including crispy pakoras, spiced patties, and roasted items.",
    price: 360,
    category: "Starters",
    image: IMAGES.vegPlatter,
    badge: "Signature"
  },
  {
    id: 2,
    name: "Paneer Tikka",
    description: "Cottage cheese marinated with traditional spices, organic yogurt, and grilled to perfection in our clay oven.",
    price: 420,
    category: "Starters",
    image: IMAGES.paneerTikka,
  },
  {
    id: 3,
    name: "Natu Kodi Pulusu",
    description: "Traditional country chicken slow-cooked in a rich, spicy gravy made with home-ground village spices.",
    price: 620,
    category: "Main Course",
    image: IMAGES.natuKodi,
    badge: "Chef's Special"
  },
  {
    id: 4,
    name: "Gongura Mutton",
    description: "Tender mutton chunks cooked with tangy gongura (sorrel) leaves and a blend of authentic Andhra spices.",
    price: 620,
    category: "Main Course",
    image: IMAGES.gonguraMutton,
    badge: "Spicy"
  },
  {
    id: 5,
    name: "Pesarattu",
    description: "Crispy whole green gram dosa served with traditional ginger chutney and fresh coconut chutney.",
    price: 280,
    category: "Starters",
    image: IMAGES.pesarattu,
  },
  {
    id: 6,
    name: "Bellam Payasam",
    description: "Traditional sweet pudding prepared with rice, milk, organic jaggery, and garnished with roasted dry fruits.",
    price: 240,
    category: "Desserts",
    image: IMAGES.payasam,
  },
  {
    id: 7,
    name: "Filter Coffee",
    description: "Strong, aromatic, and authentic South Indian filter coffee brewed with fresh chicory blend.",
    price: 120,
    category: "Beverages",
    image: IMAGES.coffee,
  },
  {
    id: 8,
    name: "Seasonal Fruit Juice",
    description: "Freshly squeezed juice of handpicked seasonal fruits with minimal organic cane sugar.",
    price: 150,
    category: "Beverages",
    image: IMAGES.juice,
  }
];

const TESTIMONIALS = [
  {
    id: 1,
    name: "Priya S.",
    role: "Food Connoisseur",
    rating: 5,
    text: "Maa Village offers an authentic village dining experience like no other. The flavors, ambiance, and heartfelt hospitality are exceptional! The Gongura Mutton is an absolute must-try.",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Ramesh K.",
    role: "Local Guide",
    rating: 5,
    text: "Every dish was bursting with traditional heritage flavors. Truly a hidden gem for fine dining lovers. The rustic mud-house atmosphere coupled with modern hospitality is stunning.",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Anusha R.",
    role: "Family Diner",
    rating: 5,
    text: "The perfect place for family dinners and celebrations. Highly recommended! We loved the Village Veg Platter and the warm, candlelit seating setup in the garden courtyard.",
    date: "3 weeks ago"
  },
  {
    id: 4,
    name: "Vikram Seth",
    role: "Culinary Blogger",
    rating: 5,
    text: "I was wowed by the depth of flavor in the Natu Kodi Pulusu. The spices are authentic and freshly ground. The staff treats you like family. A masterclass in village hospitality.",
    date: "5 days ago"
  }
];

const GALLERY_ITEMS = [
  { id: 1, category: "Food", url: IMAGES.vegPlatter, title: "Rustic Starter Platter" },
  { id: 2, category: "Food", url: IMAGES.paneerTikka, title: "Tandoori Paneer Tikka" },
  { id: 3, category: "Ambiance", url: IMAGES.galleryAmbiance1, title: "Elegant Dining Table" },
  { id: 4, category: "Ambiance", url: IMAGES.galleryAmbiance2, title: "Lantern-lit Courtyard" },
  { id: 5, category: "Events", url: IMAGES.galleryEvent1, title: "Private Celebration Setup" },
  { id: 6, category: "Events", url: IMAGES.galleryEvent2, title: "Traditional Welcome Event" },
  { id: 7, category: "Food", url: IMAGES.galleryFood1, title: "Traditional Handi Serving" },
  { id: 8, category: "Food", url: IMAGES.galleryFood2, title: "Freshly Prepared Curries" }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [menuFilter, setMenuFilter] = useState('All');
  const [galleryFilter, setGalleryFilter] = useState('All');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  // Lightbox State
  const [lightboxIndex, setLightboxIndex] = useState(null);
  
  // Contact Form State
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [formStatus, setFormStatus] = useState('idle'); // idle, loading, success, error
  const [formErrors, setFormErrors] = useState({});

  // Dynamic Scroll Listeners
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section on scroll
      const sections = ['home', 'about', 'menu', 'testimonials', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter Menu Items
  const filteredMenuItems = menuFilter === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === menuFilter);

  // Filter Gallery Items
  const filteredGalleryItems = galleryFilter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === galleryFilter);

  // Testimonial Carousel Controls
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };
  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Testimonials Auto Scroll
  useEffect(() => {
    const timer = setInterval(nextTestimonial, 6000);
    return () => clearInterval(timer);
  }, []);

  // Form Input Handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Form Validation and Submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email address';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-]{10,15}$/.test(formData.phone.replace(/\s+/g, ''))) {
      errors.phone = 'Invalid phone number';
    }
    if (!formData.message.trim()) errors.message = 'Message is required';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormStatus('loading');

    // Simulate Server Request
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 2000);
  };

  // Lightbox Navigation
  const openLightbox = (index) => {
    const originalItem = filteredGalleryItems[index];
    // Find index in filtered items
    setLightboxIndex(index);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const nextLightboxImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % filteredGalleryItems.length);
  };

  const prevLightboxImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + filteredGalleryItems.length) % filteredGalleryItems.length);
  };

  // Escape key for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight' && lightboxIndex !== null) nextLightboxImage(e);
      if (e.key === 'ArrowLeft' && lightboxIndex !== null) prevLightboxImage(e);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredGalleryItems]);

  // return (
  //   <div className='text-white'>
  //     Here
  //     </div>
  // )

  return (
    <div className="bg-dark-bg text-gray-200 min-h-screen relative overflow-x-hidden selection:bg-brand-gold selection:text-dark-bg">
      
      BACKGROUND DECORATIVE ELEMENTS
      <div className="absolute top-[20%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-brand-gold/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute top-[60%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-brand-gold/5 blur-[120px] pointer-events-none"></div>

      {/* HEADER / NAVBAR */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-dark-bg/90 backdrop-blur-md py-4 border-b border-dark-border shadow-[0_4px_30px_rgba(0,0,0,0.8)]' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* LOGO */}
          <a href="#home" className="flex items-center gap-3 group">
            {/* SVG Logo Graphic */}
            <div className="w-12 h-12 rounded-full border border-brand-gold/40 flex items-center justify-center p-1.5 bg-gradient-to-br from-dark-card to-dark-bg group-hover:border-brand-gold transition-all duration-300 relative">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Outer Ring */}
                <circle cx="50" cy="50" r="46" fill="none" stroke="#C5A880" strokeWidth="2" strokeDasharray="3 3" />
                {/* Steaming Bowl */}
                <path d="M30 60 C30 80, 70 80, 70 60 Z" fill="#C5A880" />
                {/* Flame */}
                <path d="M50 20 C60 35, 60 50, 50 55 C40 50, 40 35, 50 20 Z" fill="url(#flameGradient)" />
                <defs>
                  <linearGradient id="flameGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#EF4444" />
                    <stop offset="60%" stopColor="#F97316" />
                    <stop offset="100%" stopColor="#FBBF24" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <span className="block font-serif font-bold text-lg md:text-xl tracking-widest text-brand-gold uppercase group-hover:text-brand-gold-light transition-colors duration-300">Maa Village</span>
              <span className="block text-[9px] tracking-[0.3em] text-gray-400 font-sans uppercase -mt-1">Fine Dining</span>
            </div>
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-sans tracking-widest uppercase">
            {['home', 'about', 'menu', 'testimonials', 'gallery', 'contact'].map((section) => (
              <a 
                key={section} 
                href={`#${section}`}
                className={`relative py-2 transition-all duration-300 hover:text-brand-gold ${activeSection === section ? 'text-brand-gold font-medium' : 'text-gray-400'}`}
              >
                {section === 'about' ? 'Our Story' : section}
                {activeSection === section && (
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold to-transparent"></span>
                )}
              </a>
            ))}
          </nav>

          {/* RESERVATION BUTTON */}
          <div className="hidden lg:block">
            <a 
              href="#contact" 
              className="px-6 py-2.5 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-dark-bg transition-all duration-300 text-sm tracking-widest uppercase font-sans font-medium rounded-sm shadow-[0_0_15px_rgba(197,168,128,0.1)] hover:shadow-[0_0_25px_rgba(197,168,128,0.3)]"
            >
              Book A Table
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="lg:hidden text-brand-gold hover:text-brand-gold-light focus:outline-none p-1.5 border border-dark-border rounded-sm bg-dark-card/50"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>

        {/* MOBILE DRAWER */}
        <div className={`lg:hidden fixed inset-y-0 right-0 w-72 bg-dark-bg/95 border-l border-dark-border z-50 p-8 shadow-2xl transition-transform duration-500 ease-out backdrop-blur-lg ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-end mb-8">
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="text-brand-gold p-1"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          
          <nav className="flex flex-col gap-6 font-sans text-base tracking-widest uppercase mb-8">
            {['home', 'about', 'menu', 'testimonials', 'gallery', 'contact'].map((section) => (
              <a 
                key={section} 
                href={`#${section}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-1 border-b border-dark-border/40 hover:text-brand-gold transition-colors duration-300 ${activeSection === section ? 'text-brand-gold pl-2 font-medium border-brand-gold/50' : 'text-gray-400'}`}
              >
                {section === 'about' ? 'Our Story' : section}
              </a>
            ))}
          </nav>
          
          <a 
            href="#contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full py-3 text-center border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-dark-bg transition-all duration-300 text-sm tracking-widest uppercase rounded-sm"
          >
            Book A Table
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section 
        id="home" 
        className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${IMAGES.heroBg})` }}
      >
        {/* Dark radial overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/75 to-dark-bg/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.1)_0%,rgba(10,10,10,0.9)_80%)]"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center justify-center">
          
          <span className="text-brand-gold font-sans text-xs md:text-sm tracking-[0.4em] uppercase mb-4 animate-fade-in block">
            Fine Dining Experience
          </span>
          
          {/* Title Ornament */}
          <div className="flex items-center gap-4 mb-6 opacity-80">
            <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-brand-gold"></span>
            <Star className="text-brand-gold fill-brand-gold/20" size={12} />
            <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-brand-gold"></span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-white tracking-wide leading-tight mb-6">
            A Culinary Journey <br/>
            Rooted in <span className="bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold-dark bg-clip-text text-transparent italic font-normal">Tradition</span>, <br/>
            Crafted with <span className="text-red-400">Love</span>.
          </h1>

          <p className="text-gray-300 text-sm md:text-lg max-w-xl mx-auto font-sans leading-relaxed tracking-wide mb-10">
            Savor the perfect harmony of authentic village flavors, heartfelt warm hospitality, and a serene traditional village ambiance.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-5 justify-center">
            <a 
              href="#menu" 
              className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-brand-gold to-brand-gold-dark text-dark-bg font-sans font-bold tracking-widest text-xs uppercase rounded-sm hover:from-brand-gold-light hover:to-brand-gold transition-all duration-300 shadow-[0_4px_20px_rgba(197,168,128,0.25)] hover:scale-105"
            >
              Explore Our Menu
            </a>
            <a 
              href="#about" 
              className="w-full sm:w-auto px-8 py-3.5 border border-gray-500 hover:border-brand-gold text-white hover:text-brand-gold font-sans font-medium tracking-widest text-xs uppercase rounded-sm bg-dark-bg/30 hover:bg-dark-bg/60 transition-all duration-300 hover:scale-105"
            >
              Our Story
            </a>
          </div>

          {/* Scroll Down */}
          <a 
            href="#about" 
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 hover:text-brand-gold transition-colors duration-300"
          >
            <span className="text-[10px] tracking-[0.2em] font-sans uppercase">Scroll To Explore</span>
            <div className="w-6 h-10 border border-gray-600 rounded-full flex justify-center p-1 relative">
              <span className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-bounce absolute top-2"></span>
            </div>
            <ChevronDown size={14} className="animate-pulse -mt-1" />
          </a>
        </div>
      </section>

      {/* ABOUT US / STORY SECTION */}
      <section id="about" className="py-24 bg-dark-bg border-t border-dark-border/40 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* TEXT COLUMN */}
            <div className="lg:col-span-6 flex flex-col">
              <span className="text-brand-gold font-sans text-xs tracking-[0.3em] uppercase mb-2">
                Our Story
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 tracking-wide leading-tight">
                Rooted in Tradition, <br />
                Inspired by Nature
              </h2>
              
              <div className="h-[2px] w-20 bg-brand-gold mb-8"></div>
              
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 font-sans">
                At Maa Village, we celebrate the rich culinary heritage of our roots. Every dish is prepared with locally sourced ingredients, time-honored recipes, and a deep-seated passion for authentic Indian village flavors.
              </p>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10 font-sans">
                Our warm, village-inspired architecture—from lantern lighting to mud-finished surfaces and wooden decor—creates an immersive atmosphere that makes every meal a memorable, soul-satisfying experience.
              </p>

              {/* HIGHLIGHTS */}
              <div className="grid sm:grid-cols-3 gap-6 pt-6 border-t border-dark-border">
                
                {/* Highlight 1 */}
                <div className="flex flex-col gap-3 group">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-dark-bg transition-all duration-300">
                    <Leaf size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-serif font-medium text-sm mb-1 tracking-wide">Locally Sourced</h4>
                    <p className="text-gray-400 text-xs leading-relaxed font-sans">Fresh ingredients from local organic farms.</p>
                  </div>
                </div>

                {/* Highlight 2 */}
                <div className="flex flex-col gap-3 group">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-dark-bg transition-all duration-300">
                    <Utensils size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-serif font-medium text-sm mb-1 tracking-wide">Authentic Recipes</h4>
                    <p className="text-gray-400 text-xs leading-relaxed font-sans">Traditional recipes passed down generations.</p>
                  </div>
                </div>

                {/* Highlight 3 */}
                <div className="flex flex-col gap-3 group">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-dark-bg transition-all duration-300">
                    <Heart size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-serif font-medium text-sm mb-1 tracking-wide">Made with Love</h4>
                    <p className="text-gray-400 text-xs leading-relaxed font-sans">Every single dish is cooked with passion.</p>
                  </div>
                </div>

              </div>
            </div>

            {/* IMAGE COLUMN */}
            <div className="lg:col-span-6 relative">
              <div className="absolute inset-0 border border-brand-gold/30 rounded-lg translate-x-4 translate-y-4 -z-10"></div>
              <div className="rounded-lg overflow-hidden border border-dark-border shadow-[0_10px_30px_rgba(0,0,0,0.6)] group">
                <img 
                  src={IMAGES.aboutImg} 
                  alt="Traditional restaurant dining space" 
                  className="w-full h-[350px] sm:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              
              {/* Stat overlay */}
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-dark-card to-dark-bg border border-brand-gold/30 p-6 rounded-md shadow-2xl hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="text-brand-gold font-serif text-3xl font-bold">2019</div>
                  <div className="h-8 w-[1px] bg-dark-border"></div>
                  <div className="text-gray-300 font-sans text-xs tracking-wider uppercase">
                    Estd. & serving <br />excellence
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* STATS SECTION */}
      <section 
        className="py-20 relative bg-cover bg-center overflow-hidden" 
        style={{ backgroundImage: `url(${IMAGES.statsBg})` }}
      >
        <div className="absolute inset-0 bg-dark-bg/90"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            
            {/* Stat 1 */}
            <div className="flex flex-col items-center p-6 border-r border-dark-border/40 last:border-0 max-lg:even:border-r-0">
              <div className="w-12 h-12 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold mb-4">
                <Star className="fill-brand-gold/10" size={24} />
              </div>
              <span className="block font-serif text-3xl sm:text-5xl font-bold text-brand-gold tracking-wide mb-2">10K+</span>
              <span className="block font-sans text-xs tracking-widest text-gray-400 uppercase">Happy Guests</span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center p-6 border-r border-dark-border/40 last:border-0 max-lg:odd:border-r-0 max-lg:last:border-r">
              <div className="w-12 h-12 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold mb-4">
                <Utensils size={24} />
              </div>
              <span className="block font-serif text-3xl sm:text-5xl font-bold text-brand-gold tracking-wide mb-2">50+</span>
              <span className="block font-sans text-xs tracking-widest text-gray-400 uppercase">Signature Dishes</span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center p-6 border-r border-dark-border/40 last:border-0 max-lg:even:border-r-0">
              <div className="w-12 h-12 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold mb-4">
                <Award size={24} />
              </div>
              <span className="block font-serif text-3xl sm:text-5xl font-bold text-brand-gold tracking-wide mb-2">5+</span>
              <span className="block font-sans text-xs tracking-widest text-gray-400 uppercase">Years of Excellence</span>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center p-6">
              <div className="w-12 h-12 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold mb-4">
                <Leaf size={24} />
              </div>
              <span className="block font-serif text-3xl sm:text-5xl font-bold text-brand-gold tracking-wide mb-2">100%</span>
              <span className="block font-sans text-xs tracking-widest text-gray-400 uppercase">Authentic & Fresh</span>
            </div>

          </div>

        </div>
      </section>

      {/* EXPLORE MENU SECTION */}
      <section id="menu" className="py-24 bg-dark-bg border-t border-dark-border/40 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Section Heading */}
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-brand-gold font-sans text-xs tracking-[0.3em] uppercase mb-2 block">Our Menu</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-wide">Explore Our Menu</h2>
            <div className="h-[2px] w-16 bg-brand-gold mx-auto mt-4 mb-6"></div>
            <p className="text-gray-400 text-sm font-sans leading-relaxed">
              Carefully curated traditional recipes cooked with natural ingredients to recreate the warmth and richness of rural Indian households.
            </p>
          </div>

          {/* Menu Categories Tabs */}
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-5 mb-12">
            {['All', 'Starters', 'Main Course', 'Desserts', 'Beverages'].map((cat) => (
              <button
                key={cat}
                onClick={() => setMenuFilter(cat)}
                className={`px-5 py-2.5 rounded-sm text-xs font-sans tracking-widest uppercase border transition-all duration-300 ${menuFilter === cat ? 'bg-gradient-to-r from-brand-gold to-brand-gold-dark text-dark-bg border-brand-gold font-bold shadow-[0_4px_12px_rgba(197,168,128,0.2)]' : 'border-dark-border text-gray-400 hover:text-brand-gold hover:border-brand-gold/50 bg-dark-card/30'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredMenuItems.map((item) => (
              <div 
                key={item.id}
                className="flex flex-col sm:flex-row bg-dark-card/40 border border-dark-border rounded-md overflow-hidden hover:border-brand-gold/40 hover:shadow-[0_0_20px_rgba(197,168,128,0.05)] transition-all duration-300 group"
              >
                {/* Image panel */}
                <div className="sm:w-1/3 relative h-48 sm:h-auto overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {item.badge && (
                    <span className="absolute top-3 left-3 bg-brand-gold/90 text-dark-bg text-[10px] font-sans font-bold tracking-wider uppercase px-2 py-0.5 rounded-sm">
                      {item.badge}
                    </span>
                  )}
                </div>
                {/* Content Panel */}
                <div className="p-6 sm:w-2/3 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <h3 className="font-serif text-lg font-bold text-white tracking-wide group-hover:text-brand-gold transition-colors duration-300">
                        {item.name}
                      </h3>
                      <span className="font-serif text-base font-bold text-brand-gold whitespace-nowrap">
                        ₹{item.price}
                      </span>
                    </div>
                    
                    {/* Dotted border line divider */}
                    <div className="border-b border-dashed border-dark-border/80 w-full mb-3"></div>
                    
                    <p className="text-gray-400 text-xs sm:text-sm font-sans leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  
                  {/* Category indicator tag */}
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-[10px] tracking-widest font-sans uppercase text-gray-500">
                      {item.category}
                    </span>
                    <span className="text-[10px] text-brand-gold font-sans font-medium hover:underline cursor-pointer">
                      Order Now
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials" className="py-24 bg-dark-card/20 border-t border-dark-border/40 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          
          <span className="text-brand-gold font-sans text-xs tracking-[0.3em] uppercase mb-2 block">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-wide mb-6">What Our Guests Say</h2>
          
          {/* Ornament */}
          <div className="flex items-center justify-center gap-4 mb-16 opacity-80">
            <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-brand-gold"></span>
            <Utensils className="text-brand-gold" size={14} />
            <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-brand-gold"></span>
          </div>

          {/* Carousel Wrapper */}
          <div className="relative min-h-[300px] flex items-center justify-center">
            
            {/* Carousel Item */}
            <div className="transition-all duration-500 ease-in-out px-4 sm:px-12">
              
              {/* Star Ratings */}
              <div className="flex justify-center items-center gap-1.5 mb-6 text-brand-gold">
                {[...Array(TESTIMONIALS[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-brand-gold" />
                ))}
              </div>

              {/* Quote text */}
              <blockquote className="text-lg sm:text-2xl font-serif text-white italic leading-relaxed mb-8">
                "{TESTIMONIALS[currentTestimonial].text}"
              </blockquote>

              {/* Guest Details */}
              <div>
                <span className="block text-brand-gold font-serif text-base font-bold tracking-wider">
                  {TESTIMONIALS[currentTestimonial].name}
                </span>
                <span className="block text-gray-500 font-sans text-[11px] uppercase tracking-widest mt-1">
                  {TESTIMONIALS[currentTestimonial].role} • {TESTIMONIALS[currentTestimonial].date}
                </span>
              </div>
            </div>

            {/* Slider Navigation Arrows */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 p-2 border border-dark-border text-gray-400 hover:text-brand-gold hover:border-brand-gold rounded-full transition-all duration-300 bg-dark-bg/40 focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 p-2 border border-dark-border text-gray-400 hover:text-brand-gold hover:border-brand-gold rounded-full transition-all duration-300 bg-dark-bg/40 focus:outline-none"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>

          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-2 mt-10">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`h-2 rounded-full transition-all duration-300 ${currentTestimonial === index ? 'w-6 bg-brand-gold' : 'w-2 bg-dark-border'}`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>

        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="gallery" className="py-24 bg-dark-bg border-t border-dark-border/40 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Section Heading */}
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-brand-gold font-sans text-xs tracking-[0.3em] uppercase mb-2 block">Gallery</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-wide">Our Moments</h2>
            <div className="h-[2px] w-16 bg-brand-gold mx-auto mt-4 mb-6"></div>
          </div>

          {/* Gallery Category Filter */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {['All', 'Food', 'Ambiance', 'Events'].map((cat) => (
              <button
                key={cat}
                onClick={() => setGalleryFilter(cat)}
                className={`px-4 py-2 text-xs font-sans tracking-widest uppercase transition-all duration-300 border-b-2 ${galleryFilter === cat ? 'border-brand-gold text-brand-gold font-bold' : 'border-transparent text-gray-400 hover:text-brand-gold'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Photo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {filteredGalleryItems.map((item, index) => (
              <div 
                key={item.id}
                onClick={() => openLightbox(index)}
                className="relative aspect-square rounded-md overflow-hidden border border-dark-border cursor-pointer group"
              >
                <img 
                  src={item.url} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-dark-bg/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4">
                  <Star className="text-brand-gold mb-2" size={18} />
                  <span className="text-white text-sm font-serif font-bold tracking-wide text-center">
                    {item.title}
                  </span>
                  <span className="text-[10px] text-brand-gold uppercase tracking-widest mt-1">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox Modal */}
          {lightboxIndex !== null && (
            <div 
              className="fixed inset-0 bg-dark-bg/95 z-50 flex flex-col items-center justify-center p-4 backdrop-blur-sm"
              onClick={closeLightbox}
            >
              <button 
                onClick={closeLightbox}
                className="absolute top-6 right-6 text-white hover:text-brand-gold p-2 border border-white/10 rounded-full bg-dark-card/50"
                aria-label="Close lightbox"
              >
                <X size={24} />
              </button>

              <div className="relative max-w-4xl max-h-[80vh] w-full flex items-center justify-center">
                
                {/* Lightbox Main Image */}
                <img 
                  src={filteredGalleryItems[lightboxIndex].url} 
                  alt={filteredGalleryItems[lightboxIndex].title}
                  className="max-w-full max-h-[75vh] object-contain rounded-md border border-dark-border"
                  onClick={(e) => e.stopPropagation()}
                />

                {/* Left/Right Controls inside Lightbox */}
                <button 
                  onClick={prevLightboxImage}
                  className="absolute left-2 p-3 border border-white/10 text-white hover:text-brand-gold rounded-full transition-colors bg-dark-card/50"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={nextLightboxImage}
                  className="absolute right-2 p-3 border border-white/10 text-white hover:text-brand-gold rounded-full transition-colors bg-dark-card/50"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>

              </div>

              {/* Image Title at bottom of Lightbox */}
              <div className="text-center mt-6 relative z-10 select-none">
                <h4 className="text-white font-serif text-lg font-bold tracking-wide">
                  {filteredGalleryItems[lightboxIndex].title}
                </h4>
                <p className="text-brand-gold font-sans text-xs tracking-widest uppercase mt-1">
                  {filteredGalleryItems[lightboxIndex].category} • {lightboxIndex + 1} / {filteredGalleryItems.length}
                </p>
              </div>

            </div>
          )}

        </div>
      </section>

      {/* CONTACT & RESERVATION SECTION */}
      <section id="contact" className="py-24 bg-dark-card/10 border-t border-dark-border/40 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid lg:grid-cols-12 gap-16 items-stretch">
            
            {/* CONTACT DETAILS COLUMN */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="text-brand-gold font-sans text-xs tracking-[0.3em] uppercase mb-2 block">Contact Us</span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-wide mb-6">Get In Touch</h2>
                <div className="h-[2px] w-16 bg-brand-gold mb-8"></div>
                
                {/* Contact list */}
                <div className="flex flex-col gap-8">
                  
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold bg-dark-card/50 flex-shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <h4 className="font-serif text-white font-medium text-sm mb-1 tracking-wider uppercase">Our Location</h4>
                      <p className="text-gray-400 text-xs sm:text-sm font-sans leading-relaxed">
                        Maa Village Fine Dining, 123 Village Road,<br />
                        Green Fields, Hyderabad, Telangana 500001
                      </p>
                    </div>
                  </div>

                  {/* Call */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold bg-dark-card/50 flex-shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <h4 className="font-serif text-white font-medium text-sm mb-1 tracking-wider uppercase">Call Us</h4>
                      <p className="text-gray-400 text-xs sm:text-sm font-sans leading-relaxed hover:text-brand-gold transition-colors duration-300">
                        <a href="tel:+919876543210">+91 98765 43210</a>
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold bg-dark-card/50 flex-shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <h4 className="font-serif text-white font-medium text-sm mb-1 tracking-wider uppercase">Email Us</h4>
                      <p className="text-gray-400 text-xs sm:text-sm font-sans leading-relaxed hover:text-brand-gold transition-colors duration-300">
                        <a href="mailto:info@maavillage.in">info@maavillage.in</a>
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold bg-dark-card/50 flex-shrink-0">
                      <Clock size={18} />
                    </div>
                    <div>
                      <h4 className="font-serif text-white font-medium text-sm mb-1 tracking-wider uppercase">Dining Hours</h4>
                      <p className="text-gray-400 text-xs sm:text-sm font-sans leading-relaxed">
                        Monday - Sunday<br />
                        12:00 PM - 11:00 PM
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Social links & Copyright */}
              <div className="pt-12 mt-12 border-t border-dark-border/40">
                <h4 className="font-serif text-white font-medium text-xs tracking-widest uppercase mb-4">Follow Our Journey</h4>
                <div className="flex items-center gap-3">
                  <a href="#" className="w-10 h-10 border border-dark-border hover:border-brand-gold text-gray-400 hover:text-brand-gold rounded-full flex items-center justify-center transition-all duration-300 bg-dark-card/20 hover:scale-105" aria-label="Instagram">
                    {/* <Instagram size={18} /> */}
                    Instagram
                  </a>
                  <a href="#" className="w-10 h-10 border border-dark-border hover:border-brand-gold text-gray-400 hover:text-brand-gold rounded-full flex items-center justify-center transition-all duration-300 bg-dark-card/20 hover:scale-105" aria-label="Facebook">
                    {/* <Facebook size={18} /> */}
                    Facebook
                  </a>
                  <a href="#" className="w-10 h-10 border border-dark-border hover:border-brand-gold text-gray-400 hover:text-brand-gold rounded-full flex items-center justify-center transition-all duration-300 bg-dark-card/20 hover:scale-105" aria-label="WhatsApp">
                    <MessageCircle size={18} />
                  </a>
                </div>
              </div>

            </div>

            {/* RESERVATION FORM COLUMN */}
            <div className="lg:col-span-7 relative">
              <div className="absolute inset-0 bg-cover bg-center opacity-10 rounded-md" style={{ backgroundImage: `url(${IMAGES.contactBg})` }}></div>
              <div className="bg-dark-card/80 border border-dark-border p-8 md:p-10 rounded-md relative z-10 shadow-2xl backdrop-blur-sm">
                
                <h3 className="font-serif text-2xl font-bold text-white mb-2 tracking-wide">Reserve Table / Send Message</h3>
                <p className="text-gray-400 text-xs sm:text-sm font-sans leading-relaxed mb-8">
                  Plan your dining experience at Maa Village. Drop us a message and we'll confirm your booking details.
                </p>

                {formStatus === 'success' ? (
                  <div className="py-12 flex flex-col items-center justify-center text-center animate-fade-in">
                    <CheckCircle2 size={64} className="text-brand-gold mb-4 animate-scale-in" />
                    <h4 className="text-white font-serif text-xl font-bold mb-2">Message Sent Successfully!</h4>
                    <p className="text-gray-400 text-sm max-w-sm font-sans leading-relaxed">
                      Thank you for contacting Maa Village. Our representative will call you shortly to confirm your fine dining table reservation.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    
                    <div className="grid sm:grid-cols-2 gap-6">
                      
                      {/* Name */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-xs font-sans uppercase tracking-widest text-gray-400 font-semibold">Your Name *</label>
                        <input 
                          type="text" 
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`bg-dark-bg/60 border ${formErrors.name ? 'border-red-400 focus:border-red-400' : 'border-dark-border focus:border-brand-gold'} rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:bg-dark-bg transition-all duration-300 font-sans`}
                          placeholder="e.g. John Doe"
                        />
                        {formErrors.name && <span className="text-[10px] text-red-400 font-sans">{formErrors.name}</span>}
                      </div>

                      {/* Email */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-xs font-sans uppercase tracking-widest text-gray-400 font-semibold">Email Address *</label>
                        <input 
                          type="email" 
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`bg-dark-bg/60 border ${formErrors.email ? 'border-red-400 focus:border-red-400' : 'border-dark-border focus:border-brand-gold'} rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:bg-dark-bg transition-all duration-300 font-sans`}
                          placeholder="e.g. john@example.com"
                        />
                        {formErrors.email && <span className="text-[10px] text-red-400 font-sans">{formErrors.email}</span>}
                      </div>

                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-xs font-sans uppercase tracking-widest text-gray-400 font-semibold">Phone Number *</label>
                      <input 
                        type="tel" 
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`bg-dark-bg/60 border ${formErrors.phone ? 'border-red-400 focus:border-red-400' : 'border-dark-border focus:border-brand-gold'} rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:bg-dark-bg transition-all duration-300 font-sans`}
                        placeholder="e.g. +91 98765 43210"
                      />
                      {formErrors.phone && <span className="text-[10px] text-red-400 font-sans">{formErrors.phone}</span>}
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-xs font-sans uppercase tracking-widest text-gray-400 font-semibold">Message / Booking Details *</label>
                      <textarea 
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className={`bg-dark-bg/60 border ${formErrors.message ? 'border-red-400 focus:border-red-400' : 'border-dark-border focus:border-brand-gold'} rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:bg-dark-bg transition-all duration-300 font-sans resize-none`}
                        placeholder="Specify number of guests, date, time and any custom culinary requests..."
                      ></textarea>
                      {formErrors.message && <span className="text-[10px] text-red-400 font-sans">{formErrors.message}</span>}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={formStatus === 'loading'}
                      className="w-full py-4 bg-gradient-to-r from-brand-gold to-brand-gold-dark hover:from-brand-gold-light hover:to-brand-gold text-dark-bg font-sans font-bold tracking-widest text-xs uppercase rounded-sm hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 shadow-[0_4px_15px_rgba(197,168,128,0.2)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                      {formStatus === 'loading' ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </button>

                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-dark-bg border-t border-dark-border py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Brand Logo & Name */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-brand-gold/40 flex items-center justify-center p-1.5 bg-dark-card">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path d="M30 60 C30 80, 70 80, 70 60 Z" fill="#C5A880" />
                <path d="M50 20 C60 35, 60 50, 50 55 C40 50, 40 35, 50 20 Z" fill="orange" />
              </svg>
            </div>
            <div>
              <span className="block font-serif font-bold text-base tracking-widest text-brand-gold uppercase">Maa Village</span>
              <span className="block text-[8px] tracking-[0.3em] text-gray-500 font-sans uppercase">Fine Dining</span>
            </div>
          </div>

          {/* Copyright text */}
          <div className="text-gray-500 font-sans text-xs tracking-wider text-center md:text-left">
            &copy; 2024 Maa Village Fine Dining. All Rights Reserved.
          </div>

          {/* Legal policy links */}
          <div className="flex gap-6 text-gray-500 font-sans text-xs tracking-wider">
            <a href="#" className="hover:text-brand-gold transition-colors duration-300">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-brand-gold transition-colors duration-300">Terms & Conditions</a>
          </div>

        </div>
      </footer>

    </div>
  );
}
