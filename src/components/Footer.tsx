
import React from "react";
import { MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import { logo } from "../assets/index";

const Footer = () => {
  return (
    <footer className="bg-barber-bg-dark text-white pt-16 pb-8 border-t border-barber-gold/30">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* معلومات الاتصال */}
          <div>
            <h3 className="text-xl font-cairo mb-4 text-barber-gold">معلومات الاتصال</h3>
            <div className="flex items-start gap-3 mb-4">
              <MapPin className="text-barber-gold shrink-0 mt-1" size={20} />
              <p className="text-sm">
                شارع غبيرة العام، بجانب إشارة الفرزدق، عمارة الراجحي، بالقرب من شارع عمار بن ياسر، الرياض، المملكة العربية السعودية
              </p>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-barber-gold shrink-0">
                <path d="M3 21l1.9-5.7a8.5 8.5 0 113.8 3.8z"></path>
              </svg>
              <p>0545162003</p>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-barber-gold shrink-0">
                <path d="M3 21l1.9-5.7a8.5 8.5 0 113.8 3.8z"></path>
              </svg>
              <p>الواتساب: 00966530640121</p>
            </div>
          </div>

          {/* ساعات العمل */}
          <div>
            <h3 className="text-xl font-cairo mb-4 text-barber-gold">ساعات العمل</h3>
            <div className="flex items-center gap-3 mb-3">
              <Clock className="text-barber-gold shrink-0" size={20} />
              <div>
                <p className="font-bold">من الأحد إلى السبت:</p>
                <p>12 ظهراً - 2 صباحاً</p>
              </div>
            </div>
            <div className="mt-6">
              <a
                href="https://maps.app.goo.gl/43rafdhCiehkz16QA"
                target="_blank"
                rel="noopener noreferrer"
                className="outline-button text-sm"
              >
                شاهد موقعنا على الخريطة
              </a>
            </div>
          </div>

          {/* روابط سريعة */}
          <div>
            <h3 className="text-xl font-cairo mb-4 text-barber-gold">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-barber-gold transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-barber-gold transition-colors">
                  نبذة عنا
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-barber-gold transition-colors">
                  خدماتنا
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-barber-gold transition-colors">
                  معرض الأعمال
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-barber-gold transition-colors">
                  الأسئلة الشائعة
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-barber-gold transition-colors">
                  مراجعات العملاء
                </Link>
              </li>
            </ul>
          </div>

          {/* التواصل الاجتماعي */}
          <div>
            <h3 className="text-xl font-cairo mb-4 text-barber-gold">تابعونا على وسائل التواصل</h3>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <a
                href="https://www.instagram.com/elegantsudanesbarber/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 text-center"
              >
                <div className="w-10 h-10 rounded-full border border-barber-gold flex items-center justify-center hover:bg-barber-gold/20 transition-colors">
                  <Instagram size={20} />
                </div>
                <span className="text-sm">انستغرام</span>
              </a>
              <a
                href="https://www.tiktok.com/@barberelgant"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 text-center"
              >
                <div className="w-10 h-10 rounded-full border border-barber-gold flex items-center justify-center hover:bg-barber-gold/20 transition-colors">
                  {/* Simple TikTok text icon since we don't have a TikTok icon */}
                  <span className="text-sm font-bold">TT</span>
                </div>
                <span className="text-sm">تيك توك</span>
              </a>
              <a
                href="https://www.facebook.com/61559650486448"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 text-center"
              >
                <div className="w-10 h-10 rounded-full border border-barber-gold flex items-center justify-center hover:bg-barber-gold/20 transition-colors">
                  <Facebook size={20} />
                </div>
                <span className="text-sm">فيسبوك</span>
              </a>
              <a
                href="https://www.snapchat.com/add/elegantsudanese"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 text-center"
              >
                <div className="w-10 h-10 rounded-full border border-barber-gold flex items-center justify-center hover:bg-barber-gold/20 transition-colors">
                  {/* Simple Snapchat text icon since we don't have a Snapchat icon */}
                  <span className="text-sm font-bold">SC</span>
                </div>
                <span className="text-sm">سناب شات</span>
              </a>
              <a
                href="https://www.threads.net/@elegantsudanesbarber"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 text-center"
              >
                <div className="w-10 h-10 rounded-full border border-barber-gold flex items-center justify-center hover:bg-barber-gold/20 transition-colors">
                  {/* Simple Threads text icon since we don't have a Threads icon */}
                  <span className="text-sm font-bold">TH</span>
                </div>
                <span className="text-sm">ثريدز</span>
              </a>
            </div>
            <div>
              <a
                href="https://wa.me/966530640121"
                target="_blank"
                rel="noopener noreferrer"
                className="gold-button flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21l1.9-5.7a8.5 8.5 0 113.8 3.8z"></path>
                </svg>
                احجز الآن عبر الواتساب
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-barber-gold/20 text-center">
          <p className="text-sm text-gray-400">
            جميع الحقوق محفوظة © {new Date().getFullYear()} - صالون السوداني الأنيق للحلاقة
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
