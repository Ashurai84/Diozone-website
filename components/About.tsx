import React from 'react';
import { Heart, Leaf, ShieldCheck } from 'lucide-react';

const About = () => {
  return (
    <section id="about-us" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#29524A]">
          Why Choose DiaZone?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              icon: <Heart className="h-12 w-12 text-[#29524A]" />,
              title: "Health-Focused",
              description: "All our products are specially crafted for diabetic needs"
            },
            {
              icon: <ShieldCheck className="h-12 w-12 text-[#29524A]" />,
              title: "Quality Assured",
              description: "Rigorous testing ensures safety and consistency"
            },
            {
              icon: <Leaf className="h-12 w-12 text-[#29524A]" />,
              title: "Natural Ingredients",
              description: "Made with carefully selected natural alternatives"
            }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;