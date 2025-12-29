import React, { useState } from 'react';
import { getImageUrl } from '../../utils/images';

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Which area of the city lorem quis bibendum auctor, nisi elit?",
      answer: "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo."
    },
    {
      question: "How can I get in touch with lorem ipsum dolor sit amet ullamcorper?",
      answer: "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo."
    },
    {
      question: "Where can I aptent taciti sociosqu ad litora torquent?",
      answer: "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo."
    },
    {
      question: "Do you also offer ut imperdiet nisi proin condimentum fermentum?",
      answer: "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo."
    },
    {
      question: "Does plumbing mean velit mauris egestas quam, ut aliquam?",
      answer: "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo."
    }
  ];

  return (
    <div>
      {/* Hero */}
      <div 
        className="relative bg-cover bg-center py-16 md:py-20 lg:py-24 mb-12 md:mb-16"
        style={{ backgroundImage: `url(${getImageUrl('wp-content/uploads/2019/04/Webp.net-compress-image.jpg')})` }}
      >
        <div className="absolute inset-0 bg-[#2354a2]/65"></div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          <div>
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4">FAQ</h1>
            <div className="w-8 h-0.5 bg-[#8ed1fc]"></div>
          </div>
          
          <div className="bg-[#ea3a1c] p-6 md:p-8 text-right text-white mt-4 md:mt-0 max-w-sm w-full md:w-auto">
            <p className="font-bold text-xs md:text-sm mb-4 uppercase">EMERGENCY CALL - 24/7</p>
            <div className="w-5 h-0.5 bg-white ml-auto mb-6"></div>
            <p className="text-4xl font-bold">+258 846 974 444</p>
          </div>
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {faqs.map((faq, idx) => (
            <div key={idx} className="mb-5 border border-gray-100 rounded">
              <div 
                onClick={() => toggleFAQ(idx)}
                className={`p-6 cursor-pointer font-bold text-[#2354a2] relative transition-colors ${activeIndex === idx ? 'bg-[#f0f0f0]' : 'bg-[#f9f9f9] hover:bg-[#f0f0f0]'}`}
              >
                {faq.question}
                <span className="absolute right-6 text-2xl font-bold">
                  {activeIndex === idx ? '−' : '+'}
                </span>
              </div>
              <div 
                className={`overflow-hidden transition-all duration-300 ${activeIndex === idx ? 'max-h-[500px] p-6' : 'max-h-0'}`}
              >
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#f2f5f7] py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-[#2354a2] text-3xl font-bold mb-6 uppercase">quick & reliable plumbing services</h2>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis. Sed non mauris vitae erat consequat auctor eu in elit. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat
            justo.
          </p>
          <a href="#" className="inline-block bg-[#ea3a1c] text-white py-4 px-10 rounded-full font-bold uppercase hover:bg-[#d63316] transition-colors">
            CONTACT US
          </a>
        </div>
      </div>
    </div>
  );
}