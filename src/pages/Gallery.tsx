
import React, { useState } from "react";
import Layout from "../components/Layout";
import {
  hairImage1, hairImage2, hairImage3, hairImage5, // Removed hairImage4
  beardImage1, beardImage2, beardImage3,
  childrenServiceImage
} from "../assets/index";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("all");

  const galleryImages = [
    {
      id: 1,
      category: "haircuts",
      src: hairImage1,
      alt: "قصة شعر 1",
    },
    {
      id: 2,
      category: "haircuts",
      src: hairImage2,
      alt: "قصة شعر 2",
    },
    {
      id: 3,
      category: "haircuts",
      src: hairImage3,
      alt: "قصة شعر 3",
    },
    // Removed image with id: 4 (hairImage4) as it's now a service card image
    {
      id: 5,
      category: "haircuts",
      src: hairImage5,
      alt: "قصة شعر 5",
    },
    {
      id: 6,
      category: "beard",
      src: beardImage1,
      alt: "تشذيب لحية 1",
    },
    {
      id: 7,
      category: "beard",
      src: beardImage2,
      alt: "تشذيب لحية 2",
    },
    {
      id: 8,
      category: "beard",
      src: beardImage3,
      alt: "تشذيب لحية 3",
    },
    {
      id: 9,
      category: "kids",
      src: childrenServiceImage,
      alt: "قصة شعر للأطفال",
    },
  ];

  const filteredImages =
    activeTab === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeTab);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-barber-bg-dark to-barber-dark">
        <div className="container">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-cairo text-barber-gold font-bold mb-6 animate-fade-in">
              معرض الأعمال
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in">
              نقدم لكم مجموعة من أعمالنا المميزة التي تعكس جودة وإبداع خدماتنا في
              صالون السوداني الأنيق
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-barber-dark">
        <div className="container">
          {/* Gallery Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <button
              className={`px-6 py-3 rounded-full text-lg transition-colors duration-300 ${
                activeTab === "all"
                  ? "bg-barber-gold text-barber-dark font-bold"
                  : "bg-barber-dark-light text-gray-300 hover:bg-barber-gold/20"
              }`}
              onClick={() => setActiveTab("all")}
            >
              الكل
            </button>
            <button
              className={`px-6 py-3 rounded-full text-lg transition-colors duration-300 ${
                activeTab === "haircuts"
                  ? "bg-barber-gold text-barber-dark font-bold"
                  : "bg-barber-dark-light text-gray-300 hover:bg-barber-gold/20"
              }`}
              onClick={() => setActiveTab("haircuts")}
            >
              قصات الشعر
            </button>
            <button
              className={`px-6 py-3 rounded-full text-lg transition-colors duration-300 ${
                activeTab === "beard"
                  ? "bg-barber-gold text-barber-dark font-bold"
                  : "bg-barber-dark-light text-gray-300 hover:bg-barber-gold/20"
              }`}
              onClick={() => setActiveTab("beard")}
            >
              تصميمات اللحية
            </button>
            <button
              className={`px-6 py-3 rounded-full text-lg transition-colors duration-300 ${
                activeTab === "kids"
                  ? "bg-barber-gold text-barber-dark font-bold"
                  : "bg-barber-dark-light text-gray-300 hover:bg-barber-gold/20"
              }`}
              onClick={() => setActiveTab("kids")}
            >
              قصات الأطفال
            </button>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="relative overflow-hidden rounded-lg border-2 border-barber-gold/30 hover:border-barber-gold group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-80 md:h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-barber-dark/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-barber-gold font-cairo font-bold text-xl">
                    {image.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-barber-dark to-barber-dark-light">
        <div className="container">
          <div className="max-w-3xl mx-auto bg-barber-dark border border-barber-gold/50 p-8 rounded-lg text-center">
            <h2 className="text-2xl md:text-3xl font-cairo text-barber-gold font-bold mb-4">
              أعجبتك أعمالنا؟
            </h2>
            <p className="text-gray-300 mb-8">
              احجز موعدك الآن واحصل على قصة شعر أو تشذيب لحية من الحلاقين المحترفين في صالون السوداني الأنيق
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

export default Gallery;
