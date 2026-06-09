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
  MessageCircle, 
  Award,
  ChevronDown,
  CheckCircle2,
  Loader2
} from 'lucide-react';

// Inline SVG replacements for commented-out lucide icons
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

// Premium Unsplash Images
const IMAGES = {
  heroBg: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1920&q=80",
  aboutImg: "src/assets/374c37f4-0ffa-47cd-8d32-dbc3f480ada0.jpeg",
  statsBg: "https://images.unsplash.com/photo-1507914464562-6ff4ac29692f?auto=format&fit=crop&w=1920&q=80",
  contactBg: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80",
  vegPlatter: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=600&q=80",
  paneerTikka: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
  natuKodi: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
  gonguraMutton: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
  pesarattu: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80",
  payasam: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
  coffee: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80",
  juice: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=600&q=80",
  galleryFood1: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
  galleryFood2: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
  galleryAmbiance1: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
  galleryAmbiance2: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80",
  galleryEvent1: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
  galleryEvent2: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80",
  galleryPic1: "src/assets/4a59a954-9613-454d-9bbe-4b057b7ca231.jpeg",
  galleryPic2: "src/assets/4a59a954-9613-454d-9bbe-4b057b7ca231.jpeg",
  galleryPic3: "src/assets/374c37f4-0ffa-47cd-8d32-dbc3f480ada0.jpeg",
  galleryPic4: "src/assets/04574aac-0b9b-4ae5-a80b-508939aebc3c.jpeg",
  galleryPic5: "src/assets/16831af0-c394-4927-829a-0390c90f0167.jpeg",
  galleryPic6: "src/assets/b931c4c6-b37f-44b2-8f0f-adfccb2545bd.jpeg",
  galleryPic7: "src/assets/f0b95528-217a-44f8-a428-847ae85c49b7.jpeg",
  galleryPic8: "src/assets/f49b4eba-fa63-4cbc-ba80-c93d85ecdf8b.jpeg",
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

const GALLERY_ITEMS = [
  // { id: 1, category: "Food", url: IMAGES.vegPlatter, title: "Rustic Starter Platter" },
  // { id: 2, category: "Food", url: IMAGES.paneerTikka, title: "Tandoori Paneer Tikka" },
  // { id: 3, category: "Ambiance", url: IMAGES.galleryAmbiance1, title: "Elegant Dining Table" },
  // { id: 4, category: "Ambiance", url: IMAGES.galleryAmbiance2, title: "Lantern-lit Courtyard" },
  // { id: 5, category: "Events", url: IMAGES.galleryEvent1, title: "Private Celebration Setup" },
  // { id: 6, category: "Events", url: IMAGES.galleryEvent2, title: "Traditional Welcome Event" },
  // { id: 7, category: "Food", url: IMAGES.galleryFood1, title: "Traditional Handi Serving" },
  { id: 1, category: "Ambiance", url: IMAGES.galleryPic1, title: "" },
  { id: 2, category: "Ambiance", url: IMAGES.galleryPic2, title: "" },
  { id: 3, category: "Ambiance", url: IMAGES.galleryPic3, title: "" },
  { id: 4, category: "Ambiance", url: IMAGES.galleryPic4, title: "" },
  { id: 5, category: "Ambiance", url: IMAGES.galleryPic5, title: "" },
  { id: 6, category: "Ambiance", url: IMAGES.galleryPic6, title: "" },
  { id: 7, category: "Ambiance", url: IMAGES.galleryPic7, title: "" },
  { id: 8, category: "Ambiance", url: IMAGES.galleryPic8, title: "" },
  
];

// Human-friendly nav labels
const NAV_LABELS = {
  home: 'Home',
  about: 'Our Story',
  menu: 'Menu',
  gallery: 'Gallery',
  contact: 'Contact',
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [menuFilter, setMenuFilter] = useState('All');
  const [galleryFilter, setGalleryFilter] = useState('All');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [formStatus, setFormStatus] = useState('idle');
  const [formErrors, setFormErrors] = useState({});
  const [currentMenuPage, setCurrentMenuPage] = useState(0);
  const [menuModalOpen, setMenuModalOpen] = useState(false);
    
  const menuPages = [
    "/src/assets/806661ad-c266-425b-a730-0881a413eb50-0000.jpeg",
    "/src/assets/806661ad-c266-425b-a730-0881a413eb50-0001.jpeg",
  ];

  const nextMenuPage = () =>
    setCurrentMenuPage((prev) => (prev + 1) % menuPages.length);
  
  const prevMenuPage = () =>
    setCurrentMenuPage((prev) => (prev - 1 + menuPages.length) % menuPages.length);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

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

  const filteredMenuItems = menuFilter === 'All'
    ? MENU_ITEMS
    : MENU_ITEMS.filter(item => item.category === menuFilter);

  const filteredGalleryItems = galleryFilter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === galleryFilter);


  useEffect(() => {
    // const timer = setInterval(nextTestimonial, 6000);
    // return () => clearInterval(timer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) setFormErrors(prev => ({ ...prev, [name]: '' }));
  };

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

    if (Object.keys(errors).length > 0) { setFormErrors(errors); return; }

    setFormStatus('loading');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 2000);
  };

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const nextLightboxImage = (e) => {
    e.stopPropagation();
    setLightboxIndex(prev => (prev + 1) % filteredGalleryItems.length);
  };

  const prevLightboxImage = (e) => {
    e.stopPropagation();
    setLightboxIndex(prev => (prev - 1 + filteredGalleryItems.length) % filteredGalleryItems.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight' && lightboxIndex !== null) nextLightboxImage(e);
      if (e.key === 'ArrowLeft' && lightboxIndex !== null) prevLightboxImage(e);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredGalleryItems]);

  return (
    <div className="bg-dark-bg text-gray-200 min-h-screen relative overflow-x-hidden selection:bg-brand-gold selection:text-dark-bg">

      {/* BACKGROUND DECORATIVE BLOBS */}
      <div className="fixed top-[20%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-brand-gold/5 blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed top-[60%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-brand-gold/5 blur-[120px] pointer-events-none z-0"></div>

      {/* ─── NAVBAR ─── */}
      {/* <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-dark-bg/95 backdrop-blur-md py-3 border-b border-dark-border shadow-[0_4px_30px_rgba(0,0,0,0.8)]' : 'bg-transparent py-5'}`}></header> */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-dark-bg/95 py-3 border-b border-dark-border shadow-[0_4px_30px_rgba(0,0,0,0.8)]`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-full border border-brand-gold/40 flex items-center justify-center p-1.5 bg-gradient-to-br from-dark-card to-dark-bg group-hover:border-brand-gold transition-all duration-300">
              {/* <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="46" fill="none" stroke="#C5A880" strokeWidth="2" strokeDasharray="3 3" />
                <path d="M30 60 C30 80, 70 80, 70 60 Z" fill="#C5A880" />
                <path d="M50 20 C60 35, 60 50, 50 55 C40 50, 40 35, 50 20 Z" fill="url(#flameGradient)" />
                <defs>
                  <linearGradient id="flameGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#EF4444" />
                    <stop offset="60%" stopColor="#F97316" />
                    <stop offset="100%" stopColor="#FBBF24" />
                  </linearGradient>
                </defs>
              </svg> */}
              <img src="/src/assets/maa-village-logo-design.png"/>

            </div>
            <div>
              <span className="block font-serif font-bold text-xl tracking-widest text-brand-gold uppercase group-hover:text-brand-gold-light transition-colors duration-300">
                Maa Village
              </span>
              <span className="block text-[9px] tracking-[0.35em] text-gray-500 font-sans uppercase -mt-0.5">
                Taste the best
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-9 text-[11px] font-sans tracking-[0.2em] uppercase">
            {Object.entries(NAV_LABELS).map(([key, label]) => (
              <a
                key={key}
                href={`#${key}`}
                className={`relative py-2 transition-all duration-300 hover:text-brand-gold ${activeSection === key ? 'text-brand-gold font-semibold' : 'text-gray-400'}`}
              >
                {label}
                {activeSection === key && (
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold to-transparent"></span>
                )}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-brand-gold hover:text-brand-gold-light focus:outline-none p-1.5 border border-dark-border rounded-sm bg-dark-card/50"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <MenuIcon size={22} />}
          </button>
        </div>

        {/* Mobile Drawer */}
        <div className={`lg:hidden fixed inset-y-0 right-0 w-72 bg-dark-bg/97 border-l border-dark-border z-50 p-8 shadow-2xl transition-transform duration-500 ease-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-end mb-10">
            <button onClick={() => setMobileMenuOpen(false)} className="text-brand-gold p-1" aria-label="Close menu">
              <X size={22} />
            </button>
          </div>
          <nav className="flex flex-col gap-7 font-sans text-[11px] tracking-[0.25em] uppercase mb-10">
            {Object.entries(NAV_LABELS).map(([key, label]) => (
              <a
                key={key}
                href={`#${key}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-1 border-b border-dark-border/40 hover:text-brand-gold transition-colors duration-300 ${activeSection === key ? 'text-brand-gold pl-2 font-semibold border-brand-gold/50' : 'text-gray-400'}`}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* ─── HERO ─── */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${IMAGES.heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/70 to-dark-bg/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.05)_0%,rgba(10,10,10,0.85)_80%)]"></div>

        {/* Hero Content */}
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center flex flex-col items-center pb-32">
          <span className="text-brand-gold font-sans text-[11px] md:text-xs tracking-[0.55em] uppercase mb-5 block">
            Taste the best
          </span>

          <div className="flex items-center gap-4 mb-8 opacity-70">
            <span className="h-[1px] w-14 bg-gradient-to-r from-transparent to-brand-gold"></span>
            <Star className="text-brand-gold fill-brand-gold/20" size={11} />
            <span className="h-[1px] w-14 bg-gradient-to-l from-transparent to-brand-gold"></span>
          </div>

          {/* FIX: Better type scale with tighter line-height */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-white tracking-tight leading-[1.05] mb-8">
            A Culinary Journey <br />
            Rooted in{' '}
            <span className="bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold-dark bg-clip-text text-transparent italic font-normal">
              Tradition
            </span>
            ,<br />
            Crafted with <span className="text-red-400">Love</span>.
          </h1>

          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto font-sans leading-relaxed tracking-wide mb-12">
            Savor the perfect harmony of authentic village flavors, heartfelt warm hospitality, and a serene traditional village ambiance.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <a
              href="#menu"
              className="w-full sm:w-auto px-9 py-4 bg-gradient-to-r from-brand-gold to-brand-gold-dark text-dark-bg font-sans font-bold tracking-[0.18em] text-[11px] uppercase rounded-sm hover:from-brand-gold-light hover:to-brand-gold transition-all duration-300 shadow-[0_4px_24px_rgba(197,168,128,0.3)] hover:scale-105"
            >
              Explore Our Menu
            </a>
            <a
              href="#about"
              className="w-full sm:w-auto px-9 py-4 border border-gray-500 hover:border-brand-gold text-white hover:text-brand-gold font-sans font-medium tracking-[0.18em] text-[11px] uppercase rounded-sm bg-dark-bg/30 hover:bg-dark-bg/60 transition-all duration-300 hover:scale-105"
            >
              Our Story
            </a>
          </div>
        </div>

        {/* FIX: Scroll indicator now child of <section> (relative), not the content div */}
        <a
          href="#about"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-gray-400 hover:text-brand-gold transition-colors duration-300"
        >
          <span className="text-[9px] tracking-[0.3em] font-sans uppercase">Scroll To Explore</span>
          <div className="w-6 h-10 border border-gray-600 rounded-full flex justify-center p-1 relative">
            <span className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-bounce absolute top-2"></span>
          </div>
          <ChevronDown size={13} className="animate-pulse -mt-1" />
        </a>
      </section>

      {/* ─── ABOUT ─── */}
      <section id="about" className="py-28 bg-dark-bg border-t border-dark-border/40 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-16 items-center">

            {/* Text */}
            <div className="lg:col-span-6 flex flex-col">
              <span className="text-brand-gold font-sans text-[11px] tracking-[0.4em] uppercase mb-3">
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 tracking-tight leading-[1.08]">
                Rooted in Tradition, <br />
                Inspired by Nature
              </h2>
              <div className="h-[2px] w-20 bg-brand-gold mb-8"></div>
              <p className="text-gray-300 text-base leading-relaxed mb-5 font-sans">
                At Maa Village, we celebrate the rich culinary heritage of our roots. Every dish is prepared with locally sourced ingredients, time-honored recipes, and a deep-seated passion for authentic Indian village flavors.
              </p>
              <p className="text-gray-400 text-base leading-relaxed mb-12 font-sans">
                Our warm, village-inspired architecture—from lantern lighting to mud-finished surfaces and wooden decor—creates an immersive atmosphere that makes every meal a memorable, soul-satisfying experience.
              </p>

              <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-dark-border">
                {[
                  { icon: <Leaf size={18} />, title: "Locally Sourced", desc: "Fresh ingredients from local organic farms." },
                  { icon: <Utensils size={18} />, title: "Authentic Recipes", desc: "Traditional recipes passed down generations." },
                  { icon: <Heart size={18} />, title: "Made with Love", desc: "Every single dish is cooked with passion." },
                ].map(({ icon, title, desc }) => (
                  <div key={title} className="flex flex-col gap-3 group">
                    <div className="w-10 h-10 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-dark-bg transition-all duration-300">
                      {icon}
                    </div>
                    <div>
                      <h4 className="text-white font-serif font-semibold text-sm mb-1 tracking-wide">{title}</h4>
                      <p className="text-gray-400 text-xs leading-relaxed font-sans">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image — FIX: pb-10 prevents the stat badge from being clipped */}
            <div className="lg:col-span-6 relative pb-10">
              <div className="absolute inset-0 border border-brand-gold/30 rounded-lg translate-x-4 translate-y-4 -z-10"></div>
              <div className="rounded-lg overflow-hidden border border-dark-border shadow-[0_10px_40px_rgba(0,0,0,0.6)] group">
                <img
                  src={IMAGES.aboutImg}
                  alt="Traditional restaurant dining space"
                  className="w-full h-[360px] sm:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── STATS ───
      <section
        className="py-20 relative bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${IMAGES.statsBg})` }}
      >
        <div className="absolute inset-0 bg-dark-bg/92"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { icon: <Star className="fill-brand-gold/10" size={22} />, value: "10K+", label: "Happy Guests" },
              { icon: <Utensils size={22} />, value: "50+", label: "Signature Dishes" },
              { icon: <Award size={22} />, value: "5+", label: "Years of Excellence" },
              { icon: <Leaf size={22} />, value: "100%", label: "Authentic & Fresh" },
            ].map(({ icon, value, label }, i) => (
              <div key={label} className={`flex flex-col items-center p-6 ${i < 3 ? 'lg:border-r border-dark-border/40' : ''}`}>
                <div className="w-12 h-12 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold mb-5">
                  {icon}
                </div>
                <span className="block font-serif text-4xl sm:text-5xl font-bold text-brand-gold tracking-wide mb-2">{value}</span>
                <span className="block font-sans text-[11px] tracking-[0.2em] text-gray-400 uppercase">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ─── MENU ─── */}
      <section id="menu" className="py-28 bg-dark-bg border-t border-dark-border/40 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-brand-gold font-sans text-[11px] tracking-[0.4em] uppercase mb-3 block">Our Menu</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight">Explore Our Menu</h2>
            <div className="h-[2px] w-16 bg-brand-gold mx-auto mt-5 mb-6"></div>
          </div>

          {/* Category tabs
          <div className="flex flex-wrap justify-center items-center gap-3 mb-14">
            {['All', 'Starters', 'Main Course', 'Desserts', 'Beverages'].map(cat => (
              <button
                key={cat}
                onClick={() => setMenuFilter(cat)}
                className={`px-5 py-2.5 rounded-sm text-[11px] font-sans tracking-[0.18em] uppercase border transition-all duration-300 ${menuFilter === cat ? 'bg-gradient-to-r from-brand-gold to-brand-gold-dark text-dark-bg border-brand-gold font-bold shadow-[0_4px_12px_rgba(197,168,128,0.2)]' : 'border-dark-border text-gray-400 hover:text-brand-gold hover:border-brand-gold/50 bg-dark-card/30'}`}
              >
                {cat}
              </button>
            ))}
          </div> */}

          {/* Menu grid
          <div className="grid md:grid-cols-2 gap-6">
            {filteredMenuItems.map(item => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row bg-dark-card/40 border border-dark-border rounded-md overflow-hidden hover:border-brand-gold/40 hover:shadow-[0_0_24px_rgba(197,168,128,0.07)] transition-all duration-300 group"
              >
                <div className="sm:w-[38%] relative h-48 sm:h-auto overflow-hidden flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {item.badge && (
                    <span className="absolute top-3 left-3 bg-brand-gold/95 text-dark-bg text-[9px] font-sans font-bold tracking-wider uppercase px-2 py-0.5 rounded-sm">
                      {item.badge}
                    </span>
                  )}
                </div>
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex justify-between items-start gap-3 mb-3">
                      <h3 className="font-serif text-xl font-bold text-white tracking-wide group-hover:text-brand-gold transition-colors duration-300 leading-snug">
                        {item.name}
                      </h3>
                      <span className="font-serif text-lg font-bold text-brand-gold whitespace-nowrap mt-0.5">
                        ₹{item.price}
                      </span>
                    </div>
                    <div className="border-b border-dashed border-dark-border/70 w-full mb-3"></div>
                    <p className="text-gray-400 text-sm font-sans leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-[10px] tracking-[0.2em] font-sans uppercase text-gray-500">{item.category}</span>
                    <span className="text-[10px] text-brand-gold font-sans font-semibold hover:underline cursor-pointer tracking-wide">Order Now →</span>
                  </div>
                </div>
              </div>
            ))}
          </div> */}
        <div className="max-w-3xl mx-auto">
          <div className="relative group">
            <img
              src={menuPages[currentMenuPage]}
              alt={`Menu Page ${currentMenuPage + 1}`}
              onClick={() => setMenuModalOpen(true)}
              className="
                w-full
                max-h-[650px]
                object-contain
                rounded-xl
                border border-dark-border
                cursor-pointer
                transition-transform duration-300
                hover:scale-[1.01]
              "
            />

            {/* Previous */}
            <button
              onClick={prevMenuPage}
              className="
                absolute left-3 top-1/2 -translate-y-1/2
                p-3 rounded-full
                bg-dark-bg/80
                border border-dark-border
                text-white
                hover:text-brand-gold
              "
              aria-label="Previous menu page"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Next */}
            <button
              onClick={nextMenuPage}
              className="
                absolute right-3 top-1/2 -translate-y-1/2
                p-3 rounded-full
                bg-dark-bg/80
                border border-dark-border
                text-white
                hover:text-brand-gold
              "
              aria-label="Next menu page"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          <div className="text-center mt-4 text-sm text-gray-400">
            Page {currentMenuPage + 1} of {menuPages.length}
          </div>
        </div>



        </div>
      </section>

      {/* ─── GALLERY ─── */}
      <section id="gallery" className="py-28 bg-dark-bg border-t border-dark-border/40 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-brand-gold font-sans text-[11px] tracking-[0.4em] uppercase mb-3 block">Gallery</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight">Our Moments</h2>
            <div className="h-[2px] w-16 bg-brand-gold mx-auto mt-5 mb-6"></div>
          </div>

          {/* <div className="flex justify-center gap-6 mb-12 flex-wrap">
            {['All', 'Food', 'Ambiance', 'Events'].map(cat => (
              <button
                key={cat}
                onClick={() => setGalleryFilter(cat)}
                className={`px-4 py-2 text-[11px] font-sans tracking-[0.2em] uppercase transition-all duration-300 border-b-2 ${galleryFilter === cat ? 'border-brand-gold text-brand-gold font-semibold' : 'border-transparent text-gray-400 hover:text-brand-gold'}`}
              >
                {cat}
              </button>
            ))}
          </div> */}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
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
                {/* <div className="absolute inset-0 bg-dark-bg/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4">
                  <Star className="text-brand-gold mb-2" size={16} />
                  <span className="text-white text-sm font-serif font-bold tracking-wide text-center leading-snug">
                    {item.title}
                  </span>
                  <span className="text-[10px] text-brand-gold uppercase tracking-[0.2em] mt-1">
                    {item.category}
                  </span>
                </div> */}
              </div>
            ))}
          </div>

          {/* Lightbox */}
          {lightboxIndex !== null && (
            <div
              className="fixed inset-0 bg-dark-bg/97 z-50 flex flex-col items-center justify-center p-4 backdrop-blur-sm"
              onClick={closeLightbox}
            >
              <button onClick={closeLightbox} className="absolute top-6 right-6 text-white hover:text-brand-gold p-2 border border-white/10 rounded-full bg-dark-card/50" aria-label="Close lightbox">
                <X size={22} />
              </button>
              <div className="relative max-w-4xl max-h-[80vh] w-full flex items-center justify-center">
                <img
                  src={filteredGalleryItems[lightboxIndex].url}
                  alt={filteredGalleryItems[lightboxIndex].title}
                  className="max-w-full max-h-[75vh] object-contain rounded-md border border-dark-border"
                  onClick={e => e.stopPropagation()}
                />
                <button onClick={prevLightboxImage} className="absolute left-2 p-3 border border-white/10 text-white hover:text-brand-gold rounded-full transition-colors bg-dark-card/50" aria-label="Previous image">
                  <ChevronLeft size={22} />
                </button>
                <button onClick={nextLightboxImage} className="absolute right-2 p-3 border border-white/10 text-white hover:text-brand-gold rounded-full transition-colors bg-dark-card/50" aria-label="Next image">
                  <ChevronRight size={22} />
                </button>
              </div>
              <div className="text-center mt-7 relative z-10 select-none">
                <h4 className="text-white font-serif text-xl font-bold tracking-wide">
                  {filteredGalleryItems[lightboxIndex].title}
                </h4>
                <p className="text-brand-gold font-sans text-[11px] tracking-[0.2em] uppercase mt-1">
                  {filteredGalleryItems[lightboxIndex].category} · {lightboxIndex + 1} / {filteredGalleryItems.length}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="py-28 bg-dark-card/10 border-t border-dark-border/40 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-10 gap-16 items-stretch">

            {/* Contact details */}
            <div className="lg:col-span-12 flex flex-col justify-between">
              <div>
                <span className="text-brand-gold font-sans font-bold text-[2rem] tracking-[0.2rem] uppercase mb-3 block">Contact Us</span>
                <h2 className="text-5xl md:text-8xl font-serif font-medium text-white tracking-[0.2rem] mb-6">Get In Touch</h2>
                <div className="h-[2px] w-16 bg-brand-gold mb-10"></div>
                <div className="flex flex-col gap-8">
                  {[
                    {
                      icon: <MapPin size={17} />,
                      label: "Our Location",
                      content: <> Poddatur Gate Shankarpally, <br/> Hyderabad, Telangana 501203 </>
                    },
                    {
                      icon: <Phone size={17} />,
                      label: "Call Us",
                      content: <a className="hover:text-brand-gold transition-colors duration-300">+91 06309080706</a>
                    },
                    {
                      icon: <Clock size={17} />,
                      label: "Hours",
                      content: <>Monday – Sunday<br />11:00 AM – 10:30 PM</>
                    },
                  ].map(({ icon, label, content }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold bg-dark-card/50 flex-shrink-0">
                        {icon}
                      </div>
                      <div>
                        <h4 className="font-serif text-white font-semibold text-lg mb-1 tracking-wider uppercase">{label}</h4>
                        <p className="text-gray-400 text-lg font-sans leading-relaxed">{content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FIX: Instagram and Facebook now use proper SVG icons */}
              <div className="pt-12 mt-12 border-t border-dark-border/40">
                <h4 className="font-serif text-white font-medium text-xs tracking-[0.2em] uppercase mb-5">Follow Our Journey</h4>
                <div className="flex items-center gap-3">
                  {[
                    { icon: <InstagramIcon />, label: "Instagram" },
                    { icon: <FacebookIcon />, label: "Facebook" },
                    { icon: <MessageCircle size={18} />, label: "WhatsApp" },
                  ].map(({ icon, label }) => (
                    <a
                      key={label}
                      href="#"
                      aria-label={label}
                      className="w-10 h-10 border border-dark-border hover:border-brand-gold text-gray-400 hover:text-brand-gold rounded-full flex items-center justify-center transition-all duration-300 bg-dark-card/20 hover:scale-105"
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Reservation form */}
            <div className="lg:col-span-7 relative">
              <div className="absolute inset-0 bg-cover bg-center opacity-10 rounded-md" style={{ backgroundImage: `url(${IMAGES.contactBg})` }}></div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-dark-bg border-t border-dark-border py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-brand-gold/40 flex items-center justify-center p-1.5 bg-dark-card">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path d="M30 60 C30 80, 70 80, 70 60 Z" fill="#C5A880" />
                <path d="M50 20 C60 35, 60 50, 50 55 C40 50, 40 35, 50 20 Z" fill="orange" />
              </svg>
            </div>
            <div>
              <span className="block font-serif font-bold text-base tracking-widest text-brand-gold uppercase">Maa Village</span>
              <span className="block text-[8px] tracking-[0.35em] text-gray-500 font-sans uppercase">Taste the best</span>
            </div>
          </div>
          <div className="text-gray-500 font-sans text-xs tracking-wider text-center">
            &copy; 2024 Maa Village Taste The best. All Rights Reserved.
          </div>
          <div className="flex gap-6 text-gray-500 font-sans text-xs tracking-wider">
            <a href="#" className="hover:text-brand-gold transition-colors duration-300">Privacy Policy</a>
            <span className="text-dark-border">|</span>
            <a href="#" className="hover:text-brand-gold transition-colors duration-300">Terms & Conditions</a>
          </div>
        </div>
      </footer>
      {menuModalOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setMenuModalOpen(false)}
        >
          <button
            onClick={() => setMenuModalOpen(false)}
            className="
              absolute top-6 right-6
              text-white hover:text-brand-gold
            "
          >
            <X size={30} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevMenuPage();
            }}
            className="
              absolute left-6
              text-white hover:text-brand-gold
            "
          >
            <ChevronLeft size={40} />
          </button>

          <img
            src={menuPages[currentMenuPage]}
            alt={`Menu Page ${currentMenuPage + 1}`}
            onClick={(e) => e.stopPropagation()}
            className="
              max-w-[95vw]
              max-h-[90vh]
              object-contain
              rounded-lg
            "
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextMenuPage();
            }}
            className="
              absolute right-6
              text-white hover:text-brand-gold
            "
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </div>
  );
}