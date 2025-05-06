
import React from "react";
import { heroImage } from "../../assets/index";

const Hero = () => {
  return (
    <section
      className="min-h-[90vh] flex items-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container py-20">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-cairo font-bold text-white mb-6">
            صالون <span className="text-barber-gold">السوداني الأنيق</span> للحلاقة
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            وجهتكم المثالية للحصول على أفضل خدمات الحلاقة والعناية الشخصية في الرياض
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/966530640121"
              target="_blank"
              rel="noopener noreferrer"
              className="gold-button"
            >
              احجز الآن
            </a>
            <a href="#services" className="outline-button">
              استكشف خدماتنا
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute left-0 bottom-0 w-full h-16 bg-gradient-to-t from-barber-dark to-transparent"></div>
      <div className="absolute -bottom-1 -left-10 w-24 h-24 bg-barber-gold rounded-full opacity-20"></div>
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-barber-gold rounded-full opacity-10"></div>
    </section>
  );
};

export default Hero;
