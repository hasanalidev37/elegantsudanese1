
import React from "react";
import { MapPin } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-barber-dark-light to-barber-dark relative overflow-hidden">
      <div className="container relative z-10">
        <div className="bg-barber-dark-light border border-barber-gold/50 p-8 md:p-12 rounded-lg shadow-lg max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-cairo text-barber-gold font-bold mb-6">
            تجربة حلاقة استثنائية تنتظرك
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            نسعد بزيارتكم وتجربة خدماتنا المميزة في صالوننا. احجز موعدك الآن واستمتع بتجربة حلاقة فريدة.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <MapPin className="text-barber-gold" size={20} />
              <span>شارع غبيرة العام، الرياض</span>
            </div>
            <span className="hidden md:inline text-barber-gold">•</span>
            <div>
              <span>نفتح يومياً من 12 ظهراً - 2 صباحاً</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/966530640121"
              target="_blank"
              rel="noopener noreferrer"
              className="gold-button"
            >
              احجز الآن عبر الواتساب
            </a>
            <a
              href="https://maps.app.goo.gl/43rafdhCiehkz16QA"
              target="_blank"
              rel="noopener noreferrer"
              className="outline-button"
            >
              شاهد موقعنا على الخريطة
            </a>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-barber-dark to-transparent"></div>
      <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-barber-gold rounded-full opacity-5"></div>
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-barber-gold rounded-full opacity-5"></div>
    </section>
  );
};

export default CTA;
