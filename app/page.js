"use client"
import { useState, useEffect } from "react";
import { BsClockFill, BsFillBagHeartFill } from "react-icons/bs";
import { FaArrowRight, FaCakeCandles, FaClock, FaDollarSign, FaFacebook, FaFaceSmile, FaHandHoldingHeart, FaPhone, FaQuoteLeft, FaRegSun, FaSeedling, FaStore } from "react-icons/fa6";
import { FaMapMarkerAlt, FaHeart, FaFacebookF, FaInstagram, FaYelp, FaCheckCircle } from "react-icons/fa";
import { RiCupFill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
const NAV_LINKS = [
  { label: "Our Menu", href: "#menu" },
  { label: "Custom Cakes", href: "#custom-cakes" },
  { label: "Visit Us", href: "#visit-us" },
  { label: "Testimonials", href: "#testimonials" },
];

const VALUES = [
  {
    icon: <FaHandHoldingHeart className="w-6 h-6" />,
    title: "Generous Portions",
    desc: "We don't skimp. Every donut is stuffed to perfection, every slice is satisfying. Old-school generosity in every bite.",
  },
  {
    icon: <FaSeedling className="w-6 h-6" />,
    title: "Always Fresh",
    desc: "Baked daily with the finest ingredients. No shortcuts, no compromises. Just honest, fresh-from-the-oven goodness.",
  },
  {
    icon: <FaCakeCandles className="w-6 h-6" />,
    title: "Beautiful Custom Cakes",
    desc: "Artfully decorated, tailored to your vision. Every celebration deserves a centerpiece that looks as incredible as it tastes.",
  },
  {
    icon: <FaFaceSmile className="w-6 h-6" />,
    title: "Friendly & Reliable",
    desc: "Helpful staff, clear communication, no stress. We make ordering easy, even when you're in a hurry.",
  },
  {
    icon: <IoIosPeople className="w-6 h-6" />,
    title: "Loved for Generations",
    desc: "Families return year after year, celebration after celebration. That kind of loyalty isn't bought—it's earned.",
  },
  {
    icon: <FaDollarSign className="w-6 h-6" />,
    title: "Fair & Honest Pricing",
    desc: "Premium quality doesn't mean premium prices. We believe everyone deserves a taste of something special.",
  },
];

const PRODUCTS = [
  {
    title: "Custom Birthday Cakes",
    desc: "Beautifully decorated, perfectly moist, tailored to your celebration. Every cake is a work of art that tastes even better than it looks.",
    link: "#",
    linkLabel: "Order Yours",
    bg: "from-amber-900/80 via-amber-900/50 to-transparent",
    image: "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/c6845207-54cf-4b25-ac88-d6b242dba800/public",
    accent: "#f59e0b",
  },
  {
    title: "Stuffed Donuts & Pastries",
    desc: "Generously filled, impossibly fresh, irresistibly delicious. These aren't your average donuts—they're the ones you dream about.",
    link: "#",
    linkLabel: "See Full Menu",
    bg: "from-amber-900/80 via-amber-900/50 to-transparent",
    image: "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/0df8daee-c731-431a-5dce-96963f93c600/publicContain",
    accent: "#f59e0b",
  },
  {
    title: "Artisan Breads",
    desc: "Crusty on the outside, pillowy soft within. Baked fresh daily using time-honored techniques and premium ingredients.",
    link: "#",
    linkLabel: "Explore More",
    bg: "from-amber-900/80 via-amber-900/50 to-transparent",
    image: "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/20467aab-2ed3-4a60-3a30-699221fff200/public",
    accent: "#f59e0b",
  },
  {
    title: "Coffee & Cupcakes",
    desc: "The perfect pairing. Cozy up with fresh coffee and our signature cupcakes in our welcoming bakery atmosphere.",
    link: "/visit-us",
    linkLabel: "Visit Us",
    bg: "from-amber-900/80 via-amber-900/50 to-transparent",
    image: "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/56f06a03-bc66-4b25-5312-22c2d31a4800/publicContain",
    accent: "#f59e0b",
  },
];

const STEPS = [
  {
    icon: <FaStore className="w-6 h-6" />,
    num: "1",
    title: "Visit In Store",
    desc: "Stop by and browse our fresh daily selection. Our friendly staff will help you find exactly what you need.",
  },
  {
    icon: <FaPhone className="w-6 h-6" />,
    num: "2",
    title: "Call Ahead",
    desc: "Planning something special? Give us a call and we'll have your order ready when you arrive.",
  },
  {
    icon: <BsClockFill className="w-6 h-6" />,
    num: "3",
    title: "Short-Notice Welcome",
    desc: "Last-minute party? No problem. We're known for accommodating rush orders without compromising quality.",
  },
];

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#fbece1] shadow-md" : "bg-[#fbece1]"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-32">
          <a href="/" className="flex-shrink-0">
            <img src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/89780b82-7ecc-47b1-16ff-11c1049d4f00/publicContain" alt="Johnnie's Bakery Logo" className="h-10 lg:h-16" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href="#"
                className="text-[#3c2e1f] hover:text-[var(--accent-color)]  font-medium transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#"
              className="bg-[#8C602F] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[var(--primary-button-hover-bg-color)] transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Order Your Dream Cake
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-[#3c2e1f] p-2 hover:text-[var(--accent-color)]  transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="text-2xl">{mobileOpen ? "✕" : "☰"}</span>
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="lg:hidden pb-4 border-t border-amber-200 pt-4 mt-2">
            <div className="flex flex-col space-y-3">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.label}
                  href="#"
                  className="text-[#3c2e1f] hover:text-[var(--accent-color)]  font-medium transition-colors duration-200 py-2 px-2 rounded hover:bg-amber-50"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#custom-cakes"
                className="bg-[#8C602F] text-white px-6 py-3 rounded-lg font-semibold text-center shadow-md mt-2"
              >
                Order Your Dream Cake
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #3c2e1f 0%, #5a3e2b 40%, #7a5c3e 100%)" }}
    >

      {/* Large decorative emoji */}
      <div className="absolute ">
        <img src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/aad80e5d-a6b2-4ec2-4ad6-103351bae900/public" alt="Large Donut Emoji" className="w-full h-full object-contain" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#3c2e1f] via-[#3c2e1f]/80 to-transparent"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-[#EFB27A] text-[#3c2e1f] px-4 py-2 rounded-full mb-6 shadow-lg">
            {/* <i class="fas fa-star" aria-hidden="true"></i> */}
            <span class="font-semibold">4.7 Stars • 700+ Reviews</span>
          </div>

          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Where Tradition Meets{" "}
            <span className="text-[var(--accent-color)]">Indulgence</span>
          </h1>

          <p className="text-xl sm:text-2xl text-amber-100 mb-8 leading-relaxed">
            Handcrafted perfection since day one. Generous portions, always
            fresh, never compromised. This is where birthdays are remembered and
            families come back, year after year.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="#custom-cakes"
              className="inline-flex items-center justify-center bg-[var(--secondary-button-text-color)] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[var(--primary-button-hover-bg-color)] transition-all duration-200 shadow-xl hover:scale-105"
            >
              Order a Custom Cake →
            </a>
            <a
              href="#menu"
              className="inline-flex items-center justify-center text-[var(--secondary-button-text-color)] bg-[var(--secondary-button-bg-color)] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[var(--secondary-button-hover-bg-color)] transition-all duration-200"
            >
              View Our Menu
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-[var(--accent-color)]">
            <div className="flex items-center gap-2">
              <span><BsClockFill className="w-5 h-5" /></span>
              <span className="text-sm text-white">Short-notice orders welcome</span>
            </div>
            <div className="flex items-center gap-2">
              <span><BsFillBagHeartFill className="w-5 h-5" /></span>
              <span className="text-sm text-white">Family-owned & operated</span>
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-[-1] left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="#fbece1"
          />
        </svg>
      </div>
    </section>
  );
}

function WhyUsSection() {
  return (
    <section className="py-20 lg:py-32 bg-[#fbece1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#3c2e1f] mb-6"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Why Families Choose Us
          </h2>
          <p className="text-xl text-[var(--gray-text-color)]">
            Four decades of unwavering quality, served with a smile
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VALUES.map((v) => (
            <div
              key={v.title}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[var(--accent-color)] group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--accent-color)] to-[var(--accent2-color)] rounded-2xl flex items-center justify-center mb-6 shadow-md">
                {v.icon}
              </div>
              <h3
                className="text-2xl font-bold text-[#3c2e1f] mb-4"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                {v.title}
              </h3>
              <p className="text-[var(--gray-text-color)] leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductsSection() {
  return (
    <section className=" py-20 lg:py-32 bg-gradient-to-b from-white to-[var(--light-background-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#3c2e1f] mb-6"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Our Signature Favorites
          </h2>
          <p className="text-xl text-amber-800">
            Handcrafted classics that bring people back, time and time again
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {PRODUCTS.map((p) => (
            <div
              key={p.title}
              className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500"
              style={{ minHeight: "320px" }}
            >
              <div className="absolute inset-0 flex items-center justify-center  select-none pointer-events-none group-hover:opacity-90 transition-opacity duration-500">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>

              {/* Warm texture overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#3c2e1f] via-[#3c2e1f]/40 to-transparent" />

              <div className="relative z-10 flex items-end p-8 h-full" style={{ minHeight: "320px" }}>
                <div>
                  <h3
                    className="text-3xl lg:text-4xl font-bold text-white mb-3"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-white/90 text-lg mb-4 leading-relaxed">
                    {p.desc}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-[var(--accent-color)] font-semibold text-lg hover:text-[var(--accent2-color)] transition-colors"
                  >
                    {p.linkLabel} →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RitualSection() {
  return (
    <section
      className="relative py-20 lg:py-32 overflow-hidden"
      style={{ background: "#3c2e1f" }}
    >
      {/* Pattern */}
      <div className="absolute inset-0">
        <img src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/43f98f22-4a46-4203-a68c-49a67c787700/public" alt="Local bakery in small italian village" data-media="{&quot;id&quot;:&quot;2194514466&quot;,&quot;src&quot;:&quot;iStock&quot;,&quot;type&quot;:&quot;image&quot;}" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[var(--dark-background-color)] opacity-90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="font-[var(--font-family-heading)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              More Than a Bakery—
              <span class="text-[var(--accent-color)]">It's a Ritual</span>
            </h2>
            <p className="text-xl text-[var(--light-background-color)] mb-6 leading-relaxed">
              Step inside and you'll understand why people have been coming here for
              decades. The aroma of fresh-baked bread fills the air. The warmth
              wraps around you like a hug.
            </p>
            <p className="text-lg text-[var(--light-background-color)]/80 mb-8 leading-relaxed">
              This isn't just where you buy pastries—it's where traditions are made.
              Where you grab coffee before work, celebrate birthdays with custom
              cakes, and create memories that last a lifetime.
            </p>
            <a href="#" className="inline-flex items-center bg-[var(--primary-color)] text-[var(--primary-button-text-color)] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[var(--primary-button-hover-bg-color)] transition-all duration-200 shadow-xl hover:scale-105">
              Come Experience It
              <i className="ml-2"><FaMapMarkerAlt /></i>
            </a>
          </div>

          <div className="space-y-6">
            {[
              { icon: <RiCupFill className="w-6 h-6" />, title: "Cozy Atmosphere", desc: "Seating, coffee, and a welcoming vibe that makes you want to linger. This is your neighborhood haven." },
              { icon: <FaRegSun className="w-6 h-6" />, title: "Fresh Every Morning", desc: "Early mornings mean fresh bakes, still warm from the oven. Come early for the best selection." },
              { icon: <FaHeart className="w-6 h-6" />, title: "Community Roots", desc: "A Canton institution. We're not just a business—we're part of the fabric of this neighborhood." },
            ].map((f) => (
              <div
                key={f.title}
                className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-[var(--accent-color)] rounded-xl flex items-center justify-center shadow-lg text-2xl">
                    {f.icon}
                  </div>
                  <div>
                    <h3
                      className="text-2xl font-bold text-white mb-2"
                    >
                      {f.title}
                    </h3>
                    <p className="text-black leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function OrderingSection() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#3c2e1f] mb-6"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Easy Ordering, Every Time
          </h2>
          <p className="text-xl text-[var(--gray-text-color)] max-w-2xl mx-auto">
            Whether it's a last-minute craving or a planned celebration, we make
            it simple
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {STEPS.map((s) => (
            <div key={s.num} className="text-center group">
              <div className="relative mb-6 flex justify-center">
                <div className="w-24 h-24 bg-gradient-to-br from-[var(--accent-color)] to-[var(--accent2-color)] rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                  {s.icon}
                </div>
                <div className="absolute -top-2 -right-2 sm:right-8 lg:right-12 w-12 h-12 bg-[var(--primary-color)] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {s.num}
                </div>
              </div>
              <h3
                className="text-2xl font-bold text-[#3c2e1f] mb-3"
              >
                {s.title}
              </h3>
              <p className="text-[var(--gray-text-color)] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Block */}
        <div className="bg-gradient-to-br from-[var(--primary-color)] to-[var(--dark-background-color)] rounded-3xl p-8 lg:p-12 text-center shadow-2xl">
          <h3 className="font-[var(--font-family-heading)] text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Order Your Custom Cake?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's create something beautiful for your celebration. Our team is ready
            to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="inline-flex items-center justify-center bg-white text-[var(--primary-color)] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[var(--light-background-color)] transition-all duration-200 shadow-lg hover:scale-105">
              Start Your Order
              <i className=" ml-2"><FaArrowRight /> </i>
            </a>
            <a href="#" className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[var(--primary-color)] transition-all duration-200">
              Contact Us
              <i className="fas fa-envelope ml-2" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="py-20 lg:py-32 bg-[#fbece1]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-[var(--accent-color)] rounded-full mb-8 shadow-xl">
          <FaQuoteLeft className="text-white text-2xl" />
        </div>

        <h2 class="font-[var(--font-family-heading)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--dark-text-color)] mb-8 leading-tight">
          This Is Where Birthdays
          <span class="text-[var(--primary-color)]">Are Remembered</span>
        </h2>

        <p class="text-2xl text-[var(--gray-text-color)] mb-12 leading-relaxed max-w-3xl mx-auto">
          This is where families come back. Where tradition meets indulgence. Where
          every bite reminds you why quality will never go out of style.
        </p>

        <div className="grid sm:grid-cols-3 gap-8 mb-12">
          {[
            { val: "700+", label: "Happy Reviews" },
            { val: "4.7", label: "Star Rating" },
            { val: "100%", label: "Fresh Daily" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl p-6 shadow-lg">
              <div
                className="text-4xl lg:text-5xl font-bold text-[var(--primary-color)] mb-2"
              >
                {stat.val}
              </div>
              <div className="text-[var(--gray-text-color)] font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>

        <div class="space-y-4">
          <a href="#" class="inline-flex items-center bg-[var(--primary-color)] text-[var(--primary-button-text-color)] px-10 py-5 rounded-lg font-bold text-xl hover:bg-[var(--primary-button-hover-bg-color)] transition-all duration-200 shadow-2xl hover:scale-105">
            Visit Johnnie's Bakery Today
            <i className=" ml-3"><FaArrowRight /> </i>
          </a>
          <p class="text-[var(--gray-text-color)] text-sm">
            Come taste the difference that four decades of dedication makes
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#3c2e1f] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div class="lg:col-span-1">
            <a href="/" class="inline-block mb-6">
              <img src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/89780b82-7ecc-47b1-16ff-11c1049d4f00/publicContain" alt="Johnnie's Bakery of Canton" class="h-18 lg:h-28 py-2 w-auto brightness-0 invert" data-logo="" />
            </a>
            <p class="text-[var(--light-background-color)]/80 mb-6 leading-relaxed">
              Canton's beloved bakery serving handcrafted perfection for over four
              decades.
            </p>
            <div class="flex space-x-4">
              <a href="#" class="w-10 h-10 bg-[var(--primary-color)] rounded-full flex items-center justify-center hover:bg-[var(--primary-button-hover-bg-color)] transition-colors duration-200">
                <i ><FaFacebookF /></i>
              </a>
              <a href="#" class="w-10 h-10 bg-[var(--primary-color)] rounded-full flex items-center justify-center hover:bg-[var(--primary-button-hover-bg-color)] transition-colors duration-200">
                <i ><FaInstagram /></i>
              </a>
              <a href="#" class="w-10 h-10 bg-[var(--primary-color)] rounded-full flex items-center justify-center hover:bg-[var(--primary-button-hover-bg-color)] transition-colors duration-200">
                <i ><FaYelp /></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="font-[var(--font-family-heading)]  text-xl font-bold mb-4 text-[var(--accent-color)]"
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[...NAV_LINKS, { label: "Contact", href: "#" }].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-white hover:text-[var(--accent-color)] transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3
              className="font-[var(--font-family-heading)] text-xl font-bold mb-4 text-[var(--accent-color)]"
            >
              What We Offer
            </h3>
            <ul className="space-y-3 text-white">
              {[
                "Custom Birthday Cakes",
                "Fresh Donuts & Pastries",
                "Artisan Breads",
                "Coffee & Cupcakes",
                "Short-Notice Orders",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-[var(--accent-color)] text-xs"><FaCheckCircle className="w-5 h-5" /></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-[var(--font-family-heading)] text-xl font-bold mb-4 text-[var(--accent-color)]">
              Visit Us
            </h3>
            <ul className="space-y-4 text-white">
              <li className="flex items-start">
                <i className="text-[var(--accent-color)] mt-1 mr-3" aria-hidden="true"><FaMapMarkerAlt className="w-5 h-5" /></i>
                <span>Canton, Ohio<br />Come visit us in store!</span>
              </li>
              <li className="flex items-start">
                <i className=" text-[var(--accent-color)] mt-1 mr-3" aria-hidden="true"><FaPhone className="w-5 h-5" /></i>
                <span>Call for orders &amp; inquiries</span>
              </li>
              <li className="flex items-start">
                <i className="text-[var(--accent-color)] mt-1 mr-3" aria-hidden="true"><FaClock className="w-5 h-5" /></i>
                <span>Early mornings<br />Fresh bakes daily</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white text-sm text-center md:text-left">
              © 2026 Johnnie's Bakery of Canton. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white hover:text-[var(--accent-color)]  transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-white hover:text-[var(--accent-color)]  transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function JohnniesBakery() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <WhyUsSection />
      <ProductsSection />
      <RitualSection />
      <OrderingSection />
      <StatsSection />
      <Footer />
    </div>
  );
}