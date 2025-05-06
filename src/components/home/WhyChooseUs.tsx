
import React from "react";
import { User, Check, Scissors, Smile, Award } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <User className="text-barber-gold w-12 h-12" />,
      title: "خدمة احترافية",
      description:
        "فريق متخصص من الحلاقين ذوي الخبرة العالية والمهارات المتميزة",
    },
    {
      icon: <Check className="text-barber-gold w-12 h-12" />,
      title: "بيئة نظيفة",
      description: "نهتم بالنظافة والتعقيم لكافة الأدوات والمعدات",
    },
    {
      icon: <Scissors className="text-barber-gold w-12 h-12" />,
      title: "مكان مريح",
      description:
        "صالون مجهز بأحدث التقنيات لضمان راحتكم طوال فترة زيارتكم",
    },
    {
      icon: <Smile className="text-barber-gold w-12 h-12" />,
      title: "تعامل راقي",
      description: "نقدم تجربة متكاملة تشمل الاستقبال الحار والخدمة المتميزة",
    },
    {
      icon: <Award className="text-barber-gold w-12 h-12" />,
      title: "تقييمات عالية",
      description:
        "نفتخر بتقييمنا المميز 4.9 من 5 بناءً على أكثر من 71 تقييم على Google",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-barber-dark to-barber-dark-light">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-cairo font-bold text-barber-gold mb-6">
            لماذا تختارنا؟
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-barber-dark p-8 rounded-lg border border-barber-gold/20 hover:border-barber-gold/70 transition-all duration-300 animate-fade-in hover:shadow-xl hover:shadow-barber-gold/20 transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-center mb-4">{reason.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-barber-gold text-center">
                {reason.title}
              </h3>
              <p className="text-gray-300 text-center">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
