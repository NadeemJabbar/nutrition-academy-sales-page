import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200 py-5">
      <button 
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        <svg 
          className={`flex-shrink-0 w-5 h-5 text-primary transform ${isOpen ? 'rotate-180' : ''} transition-transform duration-200`} 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      <div className={`mt-3 ${isOpen ? 'block' : 'hidden'}`}>
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What makes the Nutrition Academy certification different from others?",
      answer: "Our certification program is designed with a results-first approach, focusing on practical skills that help clients achieve real outcomes. We combine scientific knowledge with effective coaching methodologies, and include business development training that most certifications lack."
    },
    {
      question: "Do I need prior nutrition or health experience to enroll?",
      answer: "No prior experience is necessary. Our comprehensive curriculum starts with the fundamentals and gradually builds to advanced concepts, making it accessible for beginners while still valuable for those with prior knowledge or experience."
    },
    {
      question: "How long does it take to complete the certification?",
      answer: "The program is entirely self-paced, so completion time varies. On average, students complete the certification in 3-6 months while studying part-time (5-10 hours per week). Dedicated full-time study can reduce this to 4-8 weeks."
    },
    {
      question: "Is the certification recognized internationally?",
      answer: "Yes, our certification is recognized globally. We've aligned our curriculum with international standards in nutrition science and coaching practice, making it valuable for nutrition coaches worldwide."
    },
    {
      question: "How is the Coaching Career Kickstarter Course delivered?",
      answer: "The Kickstarter Course combines self-paced learning modules with scheduled live training sessions. You'll have access to all recorded content immediately, plus can join bi-weekly live coaching calls for personalized guidance on building your business."
    },
    {
      question: "What payment options are available?",
      answer: "We offer both one-time payment and monthly installment plans. The monthly option requires no credit check and has zero interest. You can choose the plan that best fits your financial situation at checkout."
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer: "Absolutely. We offer a 30-day money-back guarantee. If you're not completely satisfied with the program for any reason, simply contact our support team within 30 days of purchase for a full refund."
    },
    {
      question: "Will I receive support during my studies?",
      answer: "Yes, all students receive access to our community forum where you can ask questions and get feedback from instructors and fellow students. Premium and Professional plan students also receive direct email support and scheduled coaching calls."
    }
  ];

  return (
    <section id="faq" className="section bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title">Frequently Asked Questions</h2>
        
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">Still have questions? We're here to help.</p>
          <a href="mailto:support@nutritionacademy.com" className="inline-flex items-center text-primary font-medium hover:underline">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            Contact our support team
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 