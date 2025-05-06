
import React from "react";
import Layout from "../components/Layout";
import { Star } from "lucide-react";

const Reviews = () => {
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
    {
      id: 4,
      name: "hesham kambal",
      rating: 5,
      date: "قبل 3 أشهر",
      text: "ماشاء الله يامصطفى شي مرتب ونظافه الله يوفقكم يارب مبروك المكان الجديد 💚👍",
    },
    {
      id: 5,
      name: "obai algafari",
      rating: 5,
      date: "قبل 3 أشهر",
      text: "ممتاذ شباب حلوين محل نظيف جديد تحية للأخ مصطفى قمة في الأخلاق بتوفيق دوام التقدم",
    },
    {
      id: 6,
      name: "سوما عمر",
      rating: 5,
      date: "قبل 5 أشهر",
      text: "افضل صالون في الرياض استطاف ممتاز وتعامل راقي والمكان مريح جدا ومجهز تجهيز حلو جدا ربنا يوفقكم",
    },
    {
      id: 7,
      name: "MOHAMED SIDEEG ADAM ABDALLAH",
      rating: 5,
      date: "قبل 5 أشهر",
      text: "صالون جميل و نظيف جداً و مرتب و طاقم حلاقين ممتاز عندهم حلاق اطفال رهيب و ممتازين و تعاملهم راقي جداً شكراً 🌹 علي التعامل الراقي",
    },
    {
      id: 8,
      name: "Khlaid Abdulgader",
      rating: 5,
      date: "قبل 5 أشهر",
      text: "ماشاء الله صالون مميز جدا، حلاقة ونظافة على اعلى مستوى، ياريت نشوف الحلاقين السودانيين بنفس المستوى ده. موفقين جدا",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-barber-bg-dark to-barber-dark">
        <div className="container">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-cairo text-barber-gold font-bold mb-6 animate-fade-in">
              مراجعات وشهادات العملاء
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in">
              ما يقوله عملاؤنا عن صالون السوداني الأنيق
            </p>
            <div className="flex justify-center items-center gap-3 mt-6">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={28}
                    className="text-barber-gold fill-barber-gold"
                  />
                ))}
              </div>
              <span className="text-2xl font-bold text-white">4.9/5</span>
            </div>
            <p className="text-gray-400 mt-2">بناءً على أكثر من 71 تقييم على Google</p>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-barber-dark">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-cairo text-barber-gold font-bold mb-10 text-center">
            شهادات عملائنا
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((review, index) => (
              <div
                key={review.id}
                className="bg-barber-dark-light p-6 rounded-lg border border-barber-gold/30 hover:border-barber-gold/70 transition-all duration-300 animate-fade-in hover:shadow-xl hover:shadow-barber-gold/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={`${
                        i < review.rating ? "text-barber-gold" : "text-gray-500"
                      } fill-current`}
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-6">"{review.text}"</p>
                <div className="flex justify-between items-center border-t border-barber-gold/20 pt-4">
                  <h3 className="font-bold text-barber-gold">{review.name}</h3>
                  <span className="text-sm text-gray-400">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-barber-dark to-barber-dark-light">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-cairo text-barber-gold font-bold mb-4">
              شاركنا تجربتك معنا
            </h2>
            <p className="text-gray-300 mb-8">
              نسعى دائماً لتحسين خدماتنا وتقديم أفضل تجربة لعملائنا. شاركنا رأيك في خدماتنا من خلال تقييمنا على Google.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://maps.app.goo.gl/43rafdhCiehkz16QA"
                target="_blank"
                rel="noopener noreferrer"
                className="gold-button"
              >
                قيم تجربتك على Google
              </a>
              <a
                href="https://wa.me/966530640121"
                target="_blank"
                rel="noopener noreferrer"
                className="outline-button"
              >
                احجز موعدك الآن
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Reviews;
