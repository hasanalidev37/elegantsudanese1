
import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const NotFound = () => {
  return (
    <Layout>
      <div className="container py-20 min-h-[50vh] flex flex-col items-center justify-center">
        <h1 className="text-6xl md:text-8xl font-cairo text-barber-gold font-bold mb-4">404</h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">الصفحة غير موجودة</p>
        <p className="text-gray-400 mb-8 max-w-md text-center">
          عذراً، الصفحة التي تبحث عنها غير موجودة أو قد تم نقلها أو حذفها.
        </p>
        <Link to="/" className="gold-button">
          العودة للصفحة الرئيسية
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
