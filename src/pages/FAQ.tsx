
import React, { useState } from "react";
import Layout from "../components/Layout";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      category: "المواعيد والزيارة",
      questions: [
        {
          id: 1,
          question: "ما هي ساعات عمل الصالون؟",
          answer:
            "صالون حلاق السوداني الأنيق يفتح أبوابه يومياً من الساعة 12 ظهراً حتى الساعة 2 صباحاً.",
        },
        {
          id: 2,
          question: "هل يلزم الحجز المسبق؟",
          answer:
            "لا يلزم الحجز المسبق، يمكنكم زيارتنا مباشرة في أي وقت خلال ساعات العمل. ومع ذلك، يفضل الاتصال بنا في أوقات الذروة للتأكد من توفر الخدمة دون انتظار طويل.",
        },
        {
          id: 3,
          question: "هل يمكنني إحضار طفلي للحلاقة؟",
          answer:
            "بالتأكيد، نحن نقدم خدمات حلاقة خاصة للأطفال في بيئة مريحة، ولدينا فريق متخصص في التعامل معهم بلطف واحترافية.",
        },
      ],
    },
    {
      category: "الخدمات",
      questions: [
        {
          id: 4,
          question: "ما هي الخدمات الرئيسية التي تقدمونها؟",
          answer:
            "نقدم مجموعة متكاملة من خدمات الحلاقة تشمل قص الشعر، تشذيب وتصميم اللحية، خدمات العناية بالبشرة، الحمام المغربي، بالإضافة إلى خدمات خاصة للأطفال.",
        },
        {
          id: 5,
          question: "هل توفرون منتجات العناية بالشعر واللحية؟",
          answer:
            "نعم، نوفر مجموعة مختارة من أفضل منتجات العناية بالشعر واللحية، بالإضافة إلى ماكينات الحلاقة وكريمات ما بعد الحلاقة والكولونيا.",
        },
        {
          id: 6,
          question: "كم تستغرق خدمة قص الشعر واللحية؟",
          answer:
            "تستغرق خدمة قص الشعر عادة حوالي 30-45 دقيقة، وتشذيب اللحية حوالي 15-20 دقيقة، وتعتمد المدة على نوع القصة والخدمة المطلوبة.",
        },
      ],
    },
    {
      category: "الصالون",
      questions: [
        {
          id: 7,
          question: "ما هي إجراءات النظافة والتعقيم المتبعة في الصالون؟",
          answer:
            "نلتزم بأعلى معايير النظافة والتعقيم، حيث نقوم بتعقيم جميع الأدوات بعد كل استخدام، واستخدام فوط نظيفة لكل عميل، بالإضافة إلى التنظيف المستمر للصالون والكراسي.",
        },
        {
          id: 8,
          question: "هل تقدمون خدمات للمناسبات الخاصة؟",
          answer:
            "نعم، يمكننا تقديم خدمات خاصة للمناسبات مثل الأعراس والمناسبات المهمة، يرجى التواصل معنا مسبقاً للترتيب.",
        },
        {
          id: 9,
          question: "هل لديكم مواقف سيارات؟",
          answer: "نعم، يتوفر مواقف للسيارات بالقرب من الصالون.",
        },
      ],
    },
  ];

  const [openCategory, setOpenCategory] = useState("المواعيد والزيارة");
  const [openQuestions, setOpenQuestions] = useState([1]);

  const toggleQuestion = (id) => {
    if (openQuestions.includes(id)) {
      setOpenQuestions(openQuestions.filter((qId) => qId !== id));
    } else {
      setOpenQuestions([...openQuestions, id]);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-barber-bg-dark to-barber-dark">
        <div className="container">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-cairo text-barber-gold font-bold mb-6 animate-fade-in">
              الأسئلة الشائعة
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in">
              إليكم إجابات عن الأسئلة الأكثر شيوعاً حول خدمات صالون السوداني الأنيق للحلاقة
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 bg-barber-dark">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {faqs.map((category) => (
              <button
                key={category.category}
                className={`px-6 py-3 rounded-full transition-colors ${
                  openCategory === category.category
                    ? "bg-barber-gold text-barber-dark"
                    : "bg-barber-dark-light text-gray-300 hover:bg-barber-gold/20"
                }`}
                onClick={() => setOpenCategory(category.category)}
              >
                {category.category}
              </button>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs
              .filter((cat) => cat.category === openCategory)
              .map((category) => (
                <div key={category.category} className="space-y-4">
                  {category.questions.map((item) => (
                    <div
                      key={item.id}
                      className="bg-barber-dark-light border border-barber-gold/30 rounded-lg overflow-hidden animate-fade-in"
                    >
                      <button
                        className="w-full flex justify-between items-center p-6 text-right focus:outline-none"
                        onClick={() => toggleQuestion(item.id)}
                      >
                        <span className="text-barber-gold">
                          {openQuestions.includes(item.id) ? (
                            <ChevronUp size={20} />
                          ) : (
                            <ChevronDown size={20} />
                          )}
                        </span>
                        <h3 className="text-lg font-cairo font-bold text-barber-gold">
                          {item.question}
                        </h3>
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          openQuestions.includes(item.id)
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="p-6 pt-0 text-gray-300 border-t border-barber-gold/20">
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-b from-barber-dark to-barber-dark-light">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-cairo text-barber-gold font-bold mb-4">
              لديك سؤال آخر؟
            </h2>
            <p className="text-gray-300 mb-8">
              نسعد بتواصلكم معنا واستفساراتكم، ونرحب بزيارتكم في صالوننا.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/966530640121"
                target="_blank"
                rel="noopener noreferrer"
                className="gold-button"
              >
                تواصل معنا عبر الواتساب
              </a>
              <a href="tel:0545162003" className="outline-button">
                اتصل بنا مباشرة
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
