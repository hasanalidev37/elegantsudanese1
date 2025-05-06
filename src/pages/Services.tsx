
import React, { useState } from "react";
import Layout from "../components/Layout";
import { Scissors } from "lucide-react";
import {
  hairServiceImage,
  beardServiceImage,
  childrenServiceImage,
  skinCareServiceImage,
  moroccanBathImage,
  afterShaveProductImage,
  hairCareProductImage,
  beardCareProductImage,
  trimmersProductImage,
  hairImage5, // Added hairImage5 for classic haircuts card
  hairImage3, // Added hairImage3 for full beard shave card
  beardImage2 // Added beardImage2 for beard care card
} from "../assets/index";

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const services = [
    {
      id: 1,
      title: "قصات الشعر العصرية",
      description:
        "نواكب أحدث صيحات الموضة العالمية في مجال قصات الشعر، ونقدم مجموعة متنوعة من القصات العصرية التي تتناسب مع مختلف أشكال الوجه وأنواع الشعر.",
      image: hairServiceImage,
      category: "haircuts",
    },
    {
      id: 2,
      title: "قصات الشعر الكلاسيكية",
      description:
        "للباحثين عن الأناقة التقليدية، نقدم أفضل القصات الكلاسيكية بلمسات عصرية تمنحكم مظهراً أنيقاً ومرتباً يناسب جميع المناسبات.",
      image: hairImage5, // Changed from hairServiceImage to hairImage5
      category: "haircuts",
    },
    {
      id: 3,
      title: "قصات شعر الأطفال",
      description:
        "نقدم خدمات حلاقة خاصة للأطفال في أجواء مريحة وودية، مع فريق متخصص في التعامل مع الأطفال لضمان تجربة ممتعة وخالية من الإزعاج.",
      image: childrenServiceImage,
      category: "haircuts",
    },
    {
      id: 4,
      title: "تشذيب وتصميم اللحية",
      description:
        "نقدم خدمات احترافية لتشذيب وتصميم اللحية بدقة عالية، مع مراعاة شكل الوجه وكثافة شعر اللحية لإبراز جمال ملامحكم.",
      image: beardServiceImage,
      category: "beard",
    },
    {
      id: 5,
      title: "حلاقة اللحية الكاملة",
      description:
        "لمن يفضلون الوجه الأملس، نقدم خدمة حلاقة متقنة تضمن نعومة البشرة وحمايتها من التهيج.",
      image: hairImage3, // Changed from beardServiceImage to hairImage3
      category: "beard",
    },
    {
      id: 6,
      title: "العناية باللحية",
      description:
        "خدمات متكاملة للعناية باللحية تشمل التنظيف العميق والترطيب واستخدام أفضل المنتجات والزيوت الطبيعية.",
      image: beardImage2, // Changed from beardServiceImage to beardImage2
      category: "beard",
    },
    {
      id: 7,
      title: "تنظيف البشرة",
      description:
        "خدمة متكاملة لتنظيف البشرة وإزالة الرؤوس السوداء وترطيب البشرة للحصول على بشرة نظيفة وصحية.",
      image: skinCareServiceImage,
      category: "skincare",
    },
    {
      id: 8,
      title: "الحمام المغربي",
      description:
        "تجربة فريدة للاسترخاء والعناية بالبشرة، متوفرة في صالوننا لتمنحكم نظافة عميقة وبشرة متجددة.",
      image: moroccanBathImage,
      category: "skincare",
    },
  ];

  const products = [
    {
      id: 1,
      title: "كريمات ما بعد الحلاقة",
      image: afterShaveProductImage,
    },
    {
      id: 2,
      title: "منتجات العناية بالشعر",
      image: hairCareProductImage,
    },
    {
      id: 3,
      title: "منتجات العناية باللحية",
      image: beardCareProductImage,
    },
    {
      id: 4,
      title: "ماكينات التنعيم",
      image: trimmersProductImage,
    },
  ];

  const filteredServices = activeCategory === "all" 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-barber-bg-dark to-barber-dark">
        <div className="container">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-cairo text-barber-gold font-bold mb-6 animate-fade-in">
              خدماتنا المتميزة
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in">
              نقدم في صالون السوداني الأنيق مجموعة متكاملة من خدمات الحلاقة والعناية
              الشخصية التي تلبي احتياجات جميع عملائنا بمختلف أعمارهم وأذواقهم
            </p>
          </div>
        </div>
      </section>

      {/* Services Filter and Grid */}
      <section className="py-16 bg-barber-dark">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <button
              className={`px-6 py-3 rounded-full text-lg transition-colors duration-300 ${
                activeCategory === "all"
                  ? "bg-barber-gold text-barber-dark font-bold"
                  : "bg-barber-dark-light text-gray-300 hover:bg-barber-gold/20"
              }`}
              onClick={() => setActiveCategory("all")}
            >
              جميع الخدمات
            </button>
            <button
              className={`px-6 py-3 rounded-full text-lg transition-colors duration-300 ${
                activeCategory === "haircuts"
                  ? "bg-barber-gold text-barber-dark font-bold"
                  : "bg-barber-dark-light text-gray-300 hover:bg-barber-gold/20"
              }`}
              onClick={() => setActiveCategory("haircuts")}
            >
              قصات الشعر
            </button>
            <button
              className={`px-6 py-3 rounded-full text-lg transition-colors duration-300 ${
                activeCategory === "beard"
                  ? "bg-barber-gold text-barber-dark font-bold"
                  : "bg-barber-dark-light text-gray-300 hover:bg-barber-gold/20"
              }`}
              onClick={() => setActiveCategory("beard")}
            >
              خدمات اللحية
            </button>
            <button
              className={`px-6 py-3 rounded-full text-lg transition-colors duration-300 ${
                activeCategory === "skincare"
                  ? "bg-barber-gold text-barber-dark font-bold"
                  : "bg-barber-dark-light text-gray-300 hover:bg-barber-gold/20"
              }`}
              onClick={() => setActiveCategory("skincare")}
            >
              العناية بالبشرة
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className="bg-barber-dark-light rounded-lg overflow-hidden border border-barber-gold/30 hover:border-barber-gold transition-all duration-500 group animate-fade-in shadow-lg hover:shadow-xl hover:shadow-barber-gold/20"
                style={{ animationDelay: `${index * 0.1}s` }}
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
                  <h3 className="text-xl font-bold mb-3 text-barber-gold">
                    {service.title}
                  </h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 bg-gradient-to-b from-barber-dark-light to-barber-dark">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-cairo font-bold text-barber-gold mb-6">
              المنتجات المتوفرة
            </h2>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
              نوفر في صالون السوداني الأنيق مجموعة متميزة من المنتجات المختارة بعناية:
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="bg-barber-dark rounded-lg overflow-hidden border border-barber-gold/30 hover:border-barber-gold transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden h-48 sm:h-64">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-barber-dark to-transparent opacity-50"></div>
                </div>
                <div className="p-4">
                  <h3 className="text-barber-gold font-cairo font-bold text-center">{product.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-barber-dark">
        <div className="container">
          <div className="max-w-3xl mx-auto bg-barber-dark-light border border-barber-gold/50 p-8 rounded-lg text-center">
            <h2 className="text-2xl md:text-3xl font-cairo text-barber-gold font-bold mb-4">
              هل أنت مستعد لتجربة خدماتنا المميزة؟
            </h2>
            <p className="text-gray-300 mb-8">
              نسعد بخدمتكم وتقديم أفضل تجربة حلاقة لكم في صالون السوداني الأنيق. احجز موعدك الآن.
            </p>
            <a
              href="https://wa.me/966530640121"
              target="_blank"
              rel="noopener noreferrer"
              className="gold-button"
            >
              احجز موعدك الآن
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
