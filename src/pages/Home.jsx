import { useState } from 'react';
import { ArrowRight, Phone, X, CreditCard, Shield, FileText, Users, Award, Zap, Clock, DollarSign, Lock } from 'lucide-react';

const BenefitCard = ({ icon, title, description, image, details }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Main Card */}
      <div
        onClick={() => setIsOpen(true)}
        className="bg-card rounded-xl p-6 border border-navy-100 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group hover:-translate-y-2"
      >
        <div className="w-14 h-14 bg-gradient-to-br from-navy-50 to-navy-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <div className="text-navy-600">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-bold text-navy-900 mb-2">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
        <p className="text-sky-600 text-sm mt-3 font-medium group-hover:text-sky-700 transition-colors">
          Click to learn more →
        </p>
      </div>

      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-primary/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setIsOpen(false)}
        >
          {/* Expanded Card */}
          <div
            className="bg-card rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Section */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-card transition-all duration-200"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="absolute bottom-4 left-6">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-2 shadow-lg">
                  <div className="text-accent-foreground">
                    {icon}
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-navy-900 mb-3">{title}</h3>
              <p className="text-muted-foreground mb-6 text-lg">{description}</p>

              {/* Details List */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-sky-600 uppercase tracking-wide">
                  What You Get
                </h4>
                <ul className="space-y-2">
                  {details.map((detail, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 animate-slide-up"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="w-full mt-6 bg-gradient-to-r from-accent to-gold-600 text-accent-foreground font-semibold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const quickBullets = [
    {
      icon: <Shield className="h-6 w-6" />,
      text: "Nationwide surplus-fund recovery via experienced professionals"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      text: "We handle research, paperwork, filings — you get paid, hassle-free"
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      text: "No upfront costs — we charge only if your funds are successfully recovered"
    },
    {
      icon: <Users className="h-6 w-6" />,
      text: "Transparent, ethical, and client-first approach"
    }
  ];

  const benefits = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Fast Recovery",
      description: "Quick and efficient processing to get your funds as soon as possible",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
      details: [
        "Average processing time of 30-60 days",
        "Expedited handling for urgent cases",
        "Real-time status updates via phone or email",
        "Direct deposit available for faster payment"
      ]
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Save Time",
      description: "We handle all the complex paperwork and legal procedures",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
      details: [
        "Complete document preparation and filing",
        "Court representation when needed",
        "Communication with all relevant parties",
        "No need to take time off work"
      ]
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "No Upfront Costs",
      description: "Pay nothing until we successfully recover your funds",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80",
      details: [
        "Zero out-of-pocket expenses",
        "Contingency-based fee structure",
        "No hidden charges or surprise costs",
        "You only pay when we succeed"
      ]
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Secure Process",
      description: "Your information is protected with bank-level security",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
      details: [
        "256-bit SSL encryption on all data",
        "Strict confidentiality agreements",
        "Secure document handling procedures",
        "Privacy-first approach to all cases"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Consultation Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-primary/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-card rounded-2xl max-w-md w-full p-6 relative animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-sky-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <CreditCard className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-sky-800 mb-2">
                Free Case Review
              </h3>
              <p className="text-sky-600 font-medium">
                Find out if you're owed surplus funds
              </p>
            </div>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
              />
              <input
                type="text"
                placeholder="Property Address (if known)"
                className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-sky-500 to-sky-600 text-secondary-foreground font-semibold py-3 px-6 rounded-xl hover:shadow-lg transition-all hover:from-sky-600 hover:to-sky-700 hover:scale-[1.02] active:scale-[0.98]"
              >
                Submit for Free Review
              </button>
            </form>

            <p className="text-xs text-muted-foreground text-center mt-6">
              By submitting, you agree to our Terms and Privacy Policy
            </p>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-6 md:pt-8 pb-12 md:pb-16 flex items-center overflow-hidden bg-gradient-to-br from-sky-50 via-background to-sky-50">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-sky-100/50 to-transparent rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-sky-200/30 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="animate-slide-up">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-sky-600 text-secondary-foreground px-3 py-1.5 rounded-full mb-6 text-xs">
                <Award className="h-4 w-4" />
                <span className="text-sm font-medium">Nationwide Recovery Experts</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-4 leading-tight">
                Did your home go to foreclosure or tax sale?
                <span className="block text-sky-600 mt-4 font-medium">You could still be owed thousands.</span>
              </h1>

              {/* Company Name */}
              <div className="text-lg md:text-xl font-semibold text-navy-700 mb-6">
                <span className="text-sky-700 font-semibold">Tiberius Strategies</span> — Recovering Surplus Funds for Former Homeowners Nationwide
              </div>

              {/* Value Proposition */}
              <div className="bg-gradient-to-r from-navy-50 to-background border border-navy-100 rounded-xl p-4 mb-6 shadow-sm">
                <p className="text-md text-navy-800 leading-relaxed">
                  We help you reclaim leftover money (surplus / overage funds) from foreclosure or tax-sale — with <span className="text-gold-600 font-semibold">zero upfront fees</span>, full legal support, and a <span className="text-gold-600 font-semibold">"you pay only when you get paid"</span> guarantee.
                </p>
              </div>
            </div>

            {/* Right Side - CTA Card */}
            <div className="relative px-6 sm:px-8 md:px-12 animate-slide-up" style={{ animationDelay: '200ms' }}>
              <div className="bg-card rounded-2xl shadow-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1554224155-3a58922a22c3?w=800&q=80"
                  alt="Claim Your Surplus Funds"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <button
                    onClick={() => setShowModal(true)}
                    className="w-full bg-gradient-to-r from-accent to-gold-600 text-accent-foreground font-semibold py-4 px-6 rounded-xl hover:shadow-xl flex items-center justify-center space-x-3 group transition-all duration-300 shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span className="text-lg">Free Case Review</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>

                  <div className="mt-4 text-center">
                    <a
                      href="tel:1-800-399-0132"
                      className="text-navy-800 hover:text-gold-600 font-medium text-lg transition-colors duration-300 inline-flex items-center space-x-2"
                    >
                      <Phone className="h-5 w-5" />
                      <span>1-800-399-0132</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-navy-600/60 text-sm">Scroll to learn more</div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-gradient-to-b from-background to-navy-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
              Why Choose Tiberius Strategies
            </h2>
            <p className="text-xl text-navy-700 max-w-3xl mx-auto">
              <span className="bg-gradient-to-r from-sky-100 to-sky-50 px-2 py-1 rounded-md">Professional, hassle-free surplus funds recovery with your success as our priority</span>
            </p>
          </div>

          {/* Benefits Grid - Clickable Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((item, index) => (
              <BenefitCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                image={item.image}
                details={item.details}
              />
            ))}
          </div>

          {/* Quick Bullets Section */}
          <div className="bg-gradient-to-r from-sky-50 to-sky-50 rounded-2xl p-8 md:p-12 shadow-lg border border-sky-100">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-sky-800 mb-4">
                How We Make It Simple
              </h3>
              <p className="text-sky-600 text-lg font-medium">
                We handle the complexity so you don't have to
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {quickBullets.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-card rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-sky-50"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-100 to-sky-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <div className="text-sky-600">
                      {item.icon}
                    </div>
                  </div>
                  <p className="text-sky-800 text-lg leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-12">
              <button
                onClick={() => setShowModal(true)}
                className="bg-gradient-to-r from-accent to-gold-600 text-accent-foreground font-bold py-4 px-8 rounded-xl hover:shadow-2xl flex items-center justify-center space-x-3 mx-auto transition-all duration-300 shadow-lg hover:scale-105 active:scale-95"
              >
                <span className="text-lg">Start Your Free Review</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <p className="text-muted-foreground text-sm mt-4">
                No obligation • 100% confidential • Get results in days
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;