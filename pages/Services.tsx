
import React from 'react';
import { Layout, Code, PenTool, Search, Smartphone, Database, Globe, Layers } from 'lucide-react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  const iconMap: Record<string, any> = {
    Layout,
    Code,
    PenTool,
    Search
  };

  return (
    <div className="pt-20">
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-6">Our <span className="text-gradient">Services</span></h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to the unique needs of startups and growing businesses.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service) => {
              const IconComp = iconMap[service.icon];
              return (
                <div key={service.id} className="p-10 rounded-3xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition-all group">
                  <div className="w-16 h-16 bg-slate-950 rounded-2xl flex items-center justify-center mb-8 border border-slate-800 group-hover:scale-110 transition-transform">
                    <IconComp className="text-teal-400" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                  <p className="text-slate-400 text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {['Tailored approach', 'Modern tech stack', 'Optimized for SEO', 'Secure architecture'].map((feature, i) => (
                      <li key={i} className="flex items-center text-slate-500 text-sm">
                        <Globe size={14} className="mr-2 text-indigo-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="text-indigo-400 font-bold hover:text-indigo-300 transition-colors flex items-center">
                    Learn More <Globe className="ml-2" size={16} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12 uppercase tracking-widest text-slate-500">Technologies We Trust</h2>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
             <div className="text-white font-bold text-2xl">React</div>
             <div className="text-white font-bold text-2xl">Next.js</div>
             <div className="text-white font-bold text-2xl">Tailwind</div>
             <div className="text-white font-bold text-2xl">Node.js</div>
             <div className="text-white font-bold text-2xl">Python</div>
             <div className="text-white font-bold text-2xl">WordPress</div>
             <div className="text-white font-bold text-2xl">Framer</div>
             <div className="text-white font-bold text-2xl">AWS</div>
             <div className="text-white font-bold text-2xl">Figma</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
