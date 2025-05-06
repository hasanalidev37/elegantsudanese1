
import React from "react";
import { Scissors } from "lucide-react";
import { hairServiceImage, beardServiceImage, childrenServiceImage, skinCareServiceImage } from "../../assets/index";

const Services = () => {
  const services = [
    {
      title: "حلاقة الشعر",
      description: "قصات عصرية وكلاسيكية تناسب جميع الأذواق",
      image: hairServiceImage,
    },
    {
      title: "تشذيب اللحية",
      description: "عناية فائقة وتصميم احترافي للحية",
      image: beardServiceImage,
    },
    {
      title: "حلاقة للأطفال",
      description: "خدمات خاصة ومناسبة للأطفال في أجواء مريحة",
      image: childrenServiceImage,
    },
    {
      title: "العناية بالبشرة",
      description: "تنظيف البشرة وإزالة الرؤوس السوداء",
      image: skinCareServiceImage,
    },
  ];

  return (
    <section id="services" className="py-16 bg-barber-dark">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-cairo font-bold text-barber-gold mb-6">
            خدماتنا المميزة
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-lg">
            نقدم في صالون السوداني الأنيق مجموعة متكاملة من خدمات الحلاقة والعناية
            الشخصية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-barber-dark-light rounded-lg overflow-hidden border border-barber-gold/30 hover:border-barber-gold transition-all duration-500 group animate-fade-in shadow-lg hover:shadow-xl hover:shadow-barber-gold/20"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-barber-dark to-transparent opacity-50"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-barber-gold">
                  {service.title}
                </h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="/services" className="gold-button">
            عرض جميع الخدمات
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
