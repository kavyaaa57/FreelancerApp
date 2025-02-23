import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="animate-slide-left text-5xl font-extrabold text-gray-900 sm:text-6xl md:text-7xl">
            <span className="block">Find Top</span>
            <span className="block text-indigo-600 mt-2">Freelance Talent</span>
          </h1>
          <p className="animate-slide-right animate-delay-200 mt-6 max-w-lg mx-auto text-xl text-gray-500 sm:max-w-3xl">
            Connect with skilled freelancers, manage projects, and grow your business with our comprehensive freelancing platform.
          </p>
          <div className="animate-fade-in animate-delay-400 mt-10 flex justify-center gap-4">
            <a href="/signup" className="px-8 py-3 text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 transition-all duration-200 transform hover:scale-105">
              Hire Talent
            </a>
            <a href="/signup" className="px-8 py-3 text-base font-medium rounded-md text-indigo-600 bg-white border border-indigo-600 hover:bg-indigo-50 md:py-4 md:text-lg md:px-10 transition-all duration-200 transform hover:scale-105">
              Find Work
            </a>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden shadow-xl animate-fade-in">
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ"
              title="Platform Overview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-12">Success Stories</h2>
          <div className="image-grid">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Freelancer success story 1"
              className="animate-fade-in animate-delay-200"
            />
            <img 
              src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Freelancer success story 2"
              className="animate-fade-in animate-delay-400"
            />
            <img 
              src="https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Freelancer success story 3"
              className="animate-fade-in animate-delay-600"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="animate-fade-in animate-delay-200 p-6 bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-12 h-12 mx-auto bg-indigo-100 rounded-lg flex items-center justify-center animate-float">
              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">Competitive Rates</h3>
            <p className="mt-2 text-gray-500 text-center">Find the perfect balance of quality and cost with our talented freelancers.</p>
          </div>

          <div className="animate-fade-in animate-delay-400 p-6 bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-12 h-12 mx-auto bg-indigo-100 rounded-lg flex items-center justify-center animate-float">
              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">Secure Payments</h3>
            <p className="mt-2 text-gray-500 text-center">Your transactions are protected with our secure payment system.</p>
          </div>

          <div className="animate-fade-in animate-delay-600 p-6 bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-12 h-12 mx-auto bg-indigo-100 rounded-lg flex items-center justify-center animate-float">
              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">24/7 Support</h3>
            <p className="mt-2 text-gray-500 text-center">Get help whenever you need it with our round-the-clock support team.</p>
          </div>
        </div>
      </div>

      {/* Categories Section with Images */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="animate-fade-in text-3xl font-extrabold text-gray-900 text-center mb-12">
            Popular Categories
          </h2>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {[
              { name: 'Web Development', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
              { name: 'Design', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
              { name: 'Writing', image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
              { name: 'Marketing', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
              { name: 'Mobile Apps', image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
              { name: 'Video Editing', image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' }
            ].map((category, index) => (
              <div 
                key={category.name}
                className={`animate-fade-in animate-delay-${index * 200} relative group cursor-pointer`}
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-32 object-cover transform transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-indigo-600 bg-opacity-60 transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                    <p className="text-white font-medium text-sm">{category.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section with Background Image */}
      <div className="relative bg-indigo-600 py-16">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
            alt="Team collaboration"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl animate-pulse-slow">
              Ready to get started?
            </h2>
            <p className="mt-4 text-lg text-indigo-100">
              Join thousands of freelancers and clients already using our platform.
            </p>
            <a
              href="/signup"
              className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 transition-all duration-200 transform hover:scale-105"
            >
              Create Free Account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

