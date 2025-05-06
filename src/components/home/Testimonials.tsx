
import React from "react";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Moez Salih",
      rating: 5,
      date: "قبل 5 أشهر",
      text: "Very clean place , people are very welcoming in there.",
    },
    {
      id: 2,
      name: "على عشا",
      rating: 5,
      date: "قبل 5 أشهر",
      text: "مبدعين ومحل مرتب ونظيف واهتمام بالعملا نتمني لكم التوفيق",
    },
    {
      id: 3,
      name: "MUNTASIR ABDALLA",
      rating: 5,
      date: "قبل 4 أشهر",
      text: "والله من افضل الصوالين السودانية في الرياض ❤️ تعامل اكثر من رائع 🌹 وصالون مجهز بكل المعدات الحديثة والانتظار مجهز باحتراف ✌️ حبيبنا مصطفى بالتوفيق يا غالي",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-barber-dark to-barber-dark-light">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-cairo font-bold text-barber-gold mb-6">
            آراء عملائنا
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-lg">
            نفخر بتقييم عملائنا المميز البالغ 4.9 من 5، وهذا يعكس التزامنا بتقديم خدمات عالية الجودة وتجربة استثنائية لكل عميل.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-barber-dark-light p-6 rounded-lg border border-barber-gold/30 hover:border-barber-gold transition-all duration-300 animate-fade-in hover:shadow-xl hover:shadow-barber-gold/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={`${
                      i < testimonial.rating
                        ? "text-barber-gold"
                        : "text-gray-500"
                    } fill-current`}
                  />
                ))}
              </div>
              <p className="text-gray-300 mb-4 min-h-[80px]">{testimonial.text}</p>
              <div className="flex justify-between items-center border-t border-barber-gold/20 pt-4">
                <h3 className="font-bold text-barber-gold">{testimonial.name}</h3>
                <span className="text-sm text-gray-400">{testimonial.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/reviews" className="outline-button">
            مشاهدة جميع التقييمات
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
