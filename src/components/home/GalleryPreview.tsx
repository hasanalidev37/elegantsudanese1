
import React from "react";
import { hairImage1, hairImage2, beardImage1, childrenServiceImage } from "../../../src/assets/index";

const GalleryPreview = () => {
  const images = [
    { id: 1, src: hairImage1 },
    { id: 2, src: beardImage1 },
    { id: 3, src: childrenServiceImage },
    { id: 4, src: hairImage2 },
  ];

  return (
    <section className="py-16 bg-barber-dark">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-cairo font-bold text-barber-gold mb-6">
            شاهد أعمالنا
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-lg">
            نقدم لكم مجموعة من أعمالنا المميزة التي تعكس جودة وإبداع خدماتنا في صالون
            السوداني الأنيق
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-lg border-2 border-barber-gold/30 hover:border-barber-gold group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image.src}
                alt={`صورة معرض ${image.id}`}
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-barber-dark to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/gallery" className="gold-button">
            مشاهدة معرض الأعمال
          </a>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
