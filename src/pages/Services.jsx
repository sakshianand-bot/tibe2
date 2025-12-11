import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Foreclosure & Tax-Sale Surplus Fund Recovery",
      description: "We identify and recover surplus funds generated from property auctions that closed for more than the owed amount. Our team specializes in tracking down these often-overlooked funds that rightfully belong to previous property owners.",
      features: [
        "Comprehensive surplus identification",
        "Multi-state foreclosure expertise",
        "Tax-sale surplus recovery",
        "Auction analysis and tracking"
      ],
      icon: "https://images.unsplash.com/photo-1554224155-3a58922a22c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      backgroundPosition: "center 30%"
    },
    {
      title: "Full Claim Filing & Legal Representation",
      description: "End-to-end legal management of your claim. We handle all court petitions, filings, and correspondence with government entities until your funds are successfully released.",
      features: [
        "Complete legal documentation",
        "Court petition preparation",
        "Government agency liaison",
        "Ongoing case management"
      ],
      icon: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=90",
      backgroundPosition: "center 60%"
    },
    {
      title: "Nationwide Record Audit & Search",
      description: "Our proprietary system scours public records and ownership databases across all 50 states to identify potential unclaimed funds. We leave no stone unturned in our search for your money.",
      features: [
        "50-state coverage",
        "Title database access",
        "Public records audit",
        "Systematic search protocols"
      ],
      icon: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=90",
      isSearchCard: true,
      backgroundPosition: "center 50%"
    },
    {
      title: "Heir & Beneficiary Claims",
      description: "When the original property owner has passed away, we guide heirs and beneficiaries through the claim process, handling the complex documentation required for inheritance-based claims.",
      features: [
        "Heir identification services",
        "Inheritance documentation",
        "Beneficiary verification",
        "Probate claim support"
      ],
      icon: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      backgroundPosition: "center 50%"
    },
    {
      title: "Estate & Probate Assistance",
      description: "We provide expert guidance through probate processes and maintain a network of trusted probate attorneys for specialized cases requiring additional legal support.",
      features: [
        "Probate process guidance",
        "Attorney referral network",
        "Estate claim facilitation",
        "Document coordination"
      ],
      icon: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RXN0YXRlfGVufDB8fDB8fHww",
    },
    {
      title: "Free Case Evaluation",
      description: "Start with a no-obligation review of your situation. We'll determine the viability of your claim before you make any commitment, ensuring transparency from day one.",
      features: [
        "No-cost assessment",
        "Claim viability analysis",
        "Recovery potential estimate",
        "Clear action plan"
      ],
      icon: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      backgroundPosition: "center 40%"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-sky-600 to-sky-800 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-sky-600 max-w-3xl mx-auto">
            Comprehensive surplus fund recovery solutions designed to maximize your claim's success 
            while minimizing your involvement and stress.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="relative rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group h-full flex flex-col"
            >
              {/* Background Image with Overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-105"
                style={{ 
                  backgroundImage: `url(${service.icon})`,
                  backgroundSize: service.title === 'Free Case Evaluation' ? 'cover' : 'cover',
                  backgroundPosition: service.backgroundPosition || 'center',
                  filter: service.title === 'Free Case Evaluation' ? 'brightness(0.8) contrast(1.2)' : 'brightness(0.9) contrast(1.1)',
                  backgroundRepeat: 'no-repeat',
                  transform: service.title === 'Free Case Evaluation' ? 'scale(1.05)' : 'none',
                  transition: 'all 0.7s ease'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-sky-900/80 via-sky-800/40 to-sky-900/80" />
              </div>
              
              {/* Content */}
              <div className="relative z-10 flex-1 flex flex-col h-full">
                <div className={`p-6 text-center flex-1 flex flex-col items-center justify-center ${service.isSearchCard ? 'py-12' : 'py-8'}`}>
                  <div className="w-16 h-16 mb-4 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/30 shadow-lg">
                    <img 
                      src={service.icon} 
                      alt="" 
                      className="w-10 h-10 object-cover rounded-full" 
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 px-4">
                    {service.title}
                  </h3>
                </div>
                <div className="p-6 pt-0 flex-1 flex flex-col">
                  <p className="text-sky-100 mb-6 leading-relaxed flex-grow text-center">
                    {service.description}
                  </p>
                  <div className="space-y-3">
                    <div className="mt-4">
                      <h4 className="font-semibold text-sky-100 text-center mb-3">What We Provide:</h4>
                      <div className="grid gap-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start bg-black/20 backdrop-blur-sm rounded-lg p-2 border border-white/10">
                            <div className="flex-shrink-0 mt-1">
                              <div className="w-2 h-2 bg-sky-300 rounded-full mt-1.5"></div>
                            </div>
                            <span className="ml-3 text-sky-100 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Hover Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-sky-300/50 rounded-2xl transition-all duration-300 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 via-sky-300 to-sky-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16 border border-sky-100">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our <span className="bg-gradient-to-r from-sky-600 to-sky-800 bg-clip-text text-transparent">4-Step</span> Recovery Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Free Evaluation", desc: "We review your case at no cost to determine claim viability." },
              { step: "2", title: "Documentation", desc: "We gather and prepare all required legal documents and evidence." },
              { step: "3", title: "Claim Filing", desc: "We file all necessary petitions and manage court proceedings." },
              { step: "4", title: "Fund Recovery", desc: "We secure the release of your funds and ensure you receive payment." }
            ].map((process, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-sky-700">{process.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-sky-600">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-sky-600 via-sky-700 to-sky-800 rounded-full p-1 mb-8">
            <div className="bg-white rounded-full px-8 py-4">
              <h3 className="text-2xl font-bold text-gray-900">
                No Recovery • No Fee*
              </h3>
            </div>
          </div>
          
          <p className="text-xl text-sky-600 mb-8 max-w-2xl mx-auto">
            Our success is tied to yours. We only get paid when you recover your funds.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-sky-600 to-sky-800 text-white font-semibold py-3 px-8 rounded-full hover:from-sky-700 hover:to-sky-900 transition-colors duration-300 text-lg shadow-lg hover:shadow-xl">
              Start Free Evaluation
            </button>
            <button className="bg-white text-sky-700 font-semibold py-3 px-8 rounded-full hover:bg-sky-50 transition-colors duration-300 text-lg border-2 border-sky-600">
              View Sample Cases
            </button>
          </div>
          
          <p className="mt-8 text-gray-500 text-sm">
            *Client responsible for court filing fees in some jurisdictions. We never charge upfront fees for our recovery services.
          </p>
          
          {/* Dark blue accent at the end */}
          <div className="mt-16 h-2 bg-gradient-to-r from-sky-900 via-sky-800 to-sky-900 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Services;