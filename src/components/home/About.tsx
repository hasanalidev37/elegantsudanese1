
import React from "react";
import { aboutUsImage } from "../../assets/index";
import { Check } from "lucide-react";

const About = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-barber-bg-dark to-barber-dark">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-cairo font-bold text-barber-gold mb-6">نبذة عن الصالون</h2>
            <p className="text-gray-300 mb-6 text-lg">
              تأسس صالون السوداني الأنيق للحلاقة لتقديم تجربة حلاقة متميزة تجمع بين الاحترافية والراحة، ونسعى لتكون الوجهة الأولى والمفضلة لخدمات الحلاقة الرجالية في الرياض.
            </p>
            <div className="mt-8">
              <a href="/about" className="outline-button">
                المزيد عن الصالون
              </a>
            </div>
          </div>

          <div className="bg-barber-dark p-6 rounded-lg border border-barber-gold/30 overflow-hidden group animate-fade-in">
            <img 
              src={aboutUsImage} 
              alt="صالون السوداني الأنيق"
              className="w-full h-auto rounded-lg transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
