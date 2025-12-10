import React, { useState } from 'react';
import { 
  Quote, 
  Star, 
  Award, 
  Shield, 
  CheckCircle,
  Users,
  DollarSign,
  FileText,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Volume2
} from 'lucide-react';

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const testimonials = [
    {
      id: 1,
      title: "Highly Professional People",
      content: "United States Surplus Funds exemplifies true professionalism. What sets them apart is their commitment to handling the entire claim process on my behalf. They didn't just keep me informed, they represented me and navigated the complex terrain of recovering my funds with the utmost professionalism. Their dedicated team ensured that every detail was taken care of, providing me with peace of mind throughout. I couldn't have asked for a more professional partner in reclaiming my funds.",
      author: "Michael Rodriguez",
      location: "Miami, FL",
      amount: "$24,500",
      type: "Foreclosure Surplus",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      duration: "Recovered in 3 months"
    },
    {
      id: 2,
      title: "Even My Small Claim",
      content: "These people came to my rescue when I had a relatively small claim of $5,000. What stood out was their reasonable fee of just 30%, which came to $1,500. This was a game-changer for me, especially when regular lawyers were demanding more than the claim's worth. They represented me in court with dedication and expertise, ensuring that every dollar counted. Thanks to them, I received $3,500 in my pocket which I desperately needed. I'm incredibly grateful for their cost-effective and efficient service.",
      author: "Sarah Johnson",
      location: "Austin, TX",
      amount: "$5,000",
      type: "Tax Sale Recovery",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      duration: "Completed in 2 months"
    },
    {
      id: 3,
      title: "Life-Changing Recovery",
      content: "After my father passed away, we discovered foreclosure surplus funds from years ago. The team handled the complex heir documentation with such care and professionalism. They recovered $67,000 that we never knew existed. Their compassion during a difficult time was as valuable as their expertise.",
      author: "Jennifer Lee",
      location: "Seattle, WA",
      amount: "$67,000",
      type: "Inheritance Claim",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      duration: "4 months including probate"
    },
    {
      id: 4,
      title: "Nationwide Expertise",
      content: "My property was in a different state, and I thought recovering the funds would be impossible. United States Surplus Funds handled the interstate complexities seamlessly. Their knowledge of different state laws is remarkable. They recovered $38,200 without me having to travel or hire local attorneys.",
      author: "Robert Chen",
      location: "New York, NY",
      amount: "$38,200",
      type: "Multi-State Recovery",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      duration: "3.5 months"
    }
  ];

  const stats = [
    { value: "98%", label: "Client Satisfaction", icon: <Star className="w-5 h-5" /> },
    { value: "$4.2M+", label: "Total Recovered", icon: <DollarSign className="w-5 h-5" /> },
    { value: "3.8 months", label: "Avg. Recovery Time", icon: <FileText className="w-5 h-5" /> },
    { value: "50 States", label: "Nationwide Coverage", icon: <Users className="w-5 h-5" /> }
  ];

  // Auto-advance testimonials
  React.useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const StarRating = ({ rating }) => (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          className={`w-5 h-5 ${i < rating ? 'fill-sky-400 text-sky-400' : 'text-gray-300'}`} 
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl mb-6">
            <Quote className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hear from our clients <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">in their own words</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real people who've successfully recovered their surplus funds with our help.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 border border-sky-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-sky-100 to-blue-100 rounded-xl">
                  <div className="text-sky-600">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-sky-700">{stat.value}</div>
              </div>
              <div className="text-sm font-medium text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Testimonials Section */}
        <div className="relative mb-20">
          {/* Background Decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-sky-50 to-blue-50 rounded-3xl -rotate-1"></div>
          
          <div className="relative">
            {/* Testimonial Navigation Controls */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Volume2 className="w-5 h-5 text-sky-600" />
                  <span className="text-sm font-semibold text-sky-600">CLIENT VOICES</span>
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setAutoplay(!autoplay)}
                    className="p-2 hover:bg-sky-100 rounded-full transition-colors duration-200"
                  >
                    {autoplay ? (
                      <Pause className="w-5 h-5 text-sky-600" />
                    ) : (
                      <Play className="w-5 h-5 text-sky-600" />
                    )}
                  </button>
                  <span className="text-sm text-gray-500">
                    Auto-play {autoplay ? 'ON' : 'OFF'}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <button 
                  onClick={prevTestimonial}
                  className="p-3 bg-white border border-sky-200 rounded-full hover:bg-sky-50 transition-all duration-300 hover:scale-105"
                >
                  <ChevronLeft className="w-5 h-5 text-sky-600" />
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="p-3 bg-white border border-sky-200 rounded-full hover:bg-sky-50 transition-all duration-300 hover:scale-105"
                >
                  <ChevronRight className="w-5 h-5 text-sky-600" />
                </button>
              </div>
            </div>

            {/* Testimonial Cards */}
            <div className="relative">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`transition-all duration-500 ease-in-out ${
                    index === activeTestimonial
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 absolute inset-0 translate-x-full'
                  }`}
                >
                  <div className="bg-white rounded-3xl overflow-hidden border-2 border-sky-100 shadow-xl">
                    {/* Testimonial Header */}
                    <div className="bg-gradient-to-r from-sky-500 to-blue-600 p-8">
                      <div className="flex items-start justify-between">
                        <div>
                          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                            {testimonial.title}
                          </h2>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <StarRating rating={testimonial.rating} />
                              <span className="text-sky-100 text-sm">Perfect Rating</span>
                            </div>
                            <div className="text-sky-100 text-sm">{testimonial.duration}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-white">{testimonial.amount}</div>
                          <div className="text-sky-100 text-sm">Recovered Amount</div>
                        </div>
                      </div>
                    </div>

                    {/* Testimonial Content */}
                    <div className="p-8">
                      <div className="grid md:grid-cols-3 gap-8">
                        {/* Quote Content */}
                        <div className="md:col-span-2">
                          <div className="relative">
                            <Quote className="absolute -top-4 -left-4 w-12 h-12 text-sky-100 -rotate-12" />
                            <p className="text-lg text-gray-700 leading-relaxed pl-4">
                              {testimonial.content}
                            </p>
                          </div>
                          
                          {/* Progress Dots */}
                          <div className="flex items-center gap-2 mt-8">
                            {testimonials.map((_, i) => (
                              <button
                                key={i}
                                onClick={() => setActiveTestimonial(i)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                  i === activeTestimonial
                                    ? 'w-8 bg-sky-600'
                                    : 'bg-sky-300 hover:bg-sky-400'
                                }`}
                              />
                            ))}
                          </div>
                        </div>

                        {/* Author Info */}
                        <div className="md:col-span-1">
                          <div className="bg-gradient-to-br from-sky-50 to-white rounded-2xl p-6 border border-sky-100">
                            <div className="flex items-center gap-4 mb-4">
                              <img 
                                src={testimonial.avatar} 
                                alt={testimonial.author}
                                className="w-16 h-16 rounded-full object-cover border-4 border-white shadow"
                              />
                              <div>
                                <div className="font-bold text-gray-900">{testimonial.author}</div>
                                <div className="text-sm text-gray-600">{testimonial.location}</div>
                              </div>
                            </div>
                            
                            <div className="space-y-3">
                              <div className="p-3 bg-white rounded-xl border border-sky-100">
                                <div className="text-sm font-medium text-gray-500">Recovery Type</div>
                                <div className="font-semibold text-sky-700">{testimonial.type}</div>
                              </div>
                              
                              <div className="p-3 bg-white rounded-xl border border-sky-100">
                                <div className="text-sm font-medium text-gray-500">Our Fee</div>
                                <div className="font-semibold text-sky-700">30% Contingency</div>
                                <div className="text-xs text-gray-500">Only pay when we recover</div>
                              </div>
                            </div>
                            
                            <div className="mt-4 pt-4 border-t border-sky-100">
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                <span>Successfully recovered</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust & Guarantee Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 mb-20 border-2 border-sky-100 shadow-lg">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">Promise</span> to You
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We operate on a simple principle: Your success is our success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "No Recovery, No Fee",
                description: "We only get paid when you recover your funds. No upfront costs or hidden fees.",
                icon: "💰"
              },
              {
                title: "Full Legal Representation",
                description: "We handle all court filings, documentation, and legal proceedings on your behalf.",
                icon: "⚖️"
              },
              {
                title: "Transparent Process",
                description: "Clear communication and regular updates throughout your recovery journey.",
                icon: "📱"
              }
            ].map((promise, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-sky-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl group-hover:scale-110 transition-transform duration-300">
                  {promise.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{promise.title}</h3>
                <p className="text-gray-600">{promise.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* More Testimonials Grid */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">More Success Stories</h2>
            <div className="flex items-center gap-2 text-sky-600">
              <Award className="w-5 h-5" />
              <span className="text-sm font-semibold">VERIFIED CLIENTS</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                quote: "They recovered funds from 7 years ago that I had completely forgotten about. Professional and persistent!",
                author: "David Wilson",
                amount: "$18,500",
                type: "Old Foreclosure"
              },
              {
                quote: "The 30% fee was more than fair considering they did all the work. Received my check within 90 days.",
                author: "Maria Garcia",
                amount: "$12,000",
                type: "Tax Sale Surplus"
              }
            ].map((story, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-sky-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-sky-100 to-blue-100 rounded-xl flex items-center justify-center">
                      <Quote className="w-6 h-6 text-sky-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 mb-4">"{story.quote}"</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-gray-900">{story.author}</div>
                        <div className="text-sm text-gray-500">{story.type}</div>
                      </div>
                      <div className="text-lg font-bold text-sky-700">{story.amount}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-sky-500 to-blue-600 rounded-3xl p-1 mb-8">
            <div className="bg-white rounded-2xl px-8 py-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Ready to Start Your Recovery?
              </h3>
              <p className="text-gray-600">
                Free evaluation • No upfront fees • 30% contingency only
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group relative bg-gradient-to-r from-sky-600 to-blue-700 text-white font-semibold py-4 px-10 rounded-2xl hover:shadow-2xl hover:shadow-sky-500/25 transition-all duration-300 transform hover:-translate-y-1 text-lg">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Start Free Evaluation
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="group relative bg-white text-gray-800 font-semibold py-4 px-10 rounded-2xl border-2 border-sky-200 hover:border-sky-300 hover:shadow-xl transition-all duration-300 text-lg">
              <span className="relative z-10 flex items-center justify-center gap-2">
                View More Testimonials
                <Users className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
          
          {/* Decorative Bottom */}
          <div className="mt-16 relative">
            <div className="h-2 bg-gradient-to-r from-transparent via-sky-400 to-transparent rounded-full opacity-30"></div>
            <div className="absolute inset-0 h-2 bg-gradient-to-r from-sky-300 via-blue-400 to-sky-300 rounded-full blur-sm opacity-50"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
