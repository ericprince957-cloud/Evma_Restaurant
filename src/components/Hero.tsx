import React from 'react';

export default function Hero() {
  return (
    <section className="pt-16 relative overflow-hidden">
      <div className="bg-gradient-to-br from-amber-900 via-orange-800 to-red-900 min-h-[90vh] flex items-center relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-yellow-400 blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-orange-400 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-red-400 blur-3xl"></div>
        </div>

        {/* Floating food emojis */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <span className="absolute top-[15%] left-[10%] text-5xl animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>🍲</span>
          <span className="absolute top-[25%] right-[15%] text-4xl animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }}>🥘</span>
          <span className="absolute bottom-[20%] left-[20%] text-4xl animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}>🍛</span>
          <span className="absolute top-[60%] right-[25%] text-5xl animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '3.2s' }}>🥗</span>
          <span className="absolute top-[40%] left-[50%] text-3xl animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.8s' }}>🌶️</span>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="text-center">
            <div className="inline-block mb-4 px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-amber-200 text-sm font-medium">🔥 Now serving in Abia State</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Taste the <span className="text-amber-400">Authentic</span><br />
              Flavors of Home
            </h1>
            <p className="text-xl text-amber-100/80 max-w-2xl mx-auto mb-8 leading-relaxed">
              From our kitchen to your table — enjoy delicious Nigerian dishes made with love, 
              fresh ingredients, and generations of culinary expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#menu"
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200 text-lg"
              >
                Order Now 🍽️
              </a>
              <a
                href="#book-cook"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-200 text-lg"
              >
                Book a Cook 👨‍🍳
              </a>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
              <div>
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-amber-200/70 text-sm">Menu Items</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">1000+</div>
                <div className="text-amber-200/70 text-sm">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">4.9⭐</div>
                <div className="text-amber-200/70 text-sm">Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
