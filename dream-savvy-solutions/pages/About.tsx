
import React from 'react';
import { Target, Eye, ShieldCheck, Zap } from 'lucide-react';
import { TRUSTED_CLIENTS } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl font-extrabold mb-8"><span className="text-gradient">Who We Are</span></h1>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                Dream Savvy Solutions is more than a tech agency; we are a growth engine for the modern digital economy. Founded with a vision to bridge the digital divide, we combine world-class engineering with intentional mentorship.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed">
                Based in Nigeria with a global footprint, we specialize in building sophisticated digital infrastructure for startups and empowering the next generation of tech leaders through hands-on training and certification programs.
              </p>
            </div>
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <img 
                src="https://res.cloudinary.com/dreamsavvy/image/upload/v1771940547/techh_h5olzp.jpg" 
                alt="Digital Innovation" 
                className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 w-full object-cover aspect-[4/3] lg:aspect-[16/10] max-h-[400px]" 
              />
              <div className="absolute -bottom-6 -left-6 bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-xl hidden md:block">
                <div className="text-4xl font-extrabold text-teal-400 mb-1">500+</div>
                <div className="text-slate-500 font-bold text-sm uppercase tracking-widest">Students Trained</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Clients Section */}
      <section className="py-16 bg-slate-900/20 border-y border-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-slate-500 text-xs font-bold uppercase tracking-[0.4em] mb-12">Companies We've Partnered With</h2>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10 opacity-80 grayscale hover:grayscale-0 transition-all duration-700">
            {TRUSTED_CLIENTS.map((client, idx) => (
              <div key={idx} className="text-white font-bold text-xl md:text-2xl hover:text-teal-400 transition-colors cursor-default">
                {client.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-10 rounded-3xl bg-slate-900 border border-slate-800">
              <Target className="text-indigo-400 mb-6" size={48} />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-slate-400 leading-relaxed">
                To deliver innovative, high-impact digital solutions that solve real-world problems while equipping professionals with the technical skills needed to excel in the global tech ecosystem.
              </p>
            </div>
            <div className="p-10 rounded-3xl bg-slate-900 border border-slate-800">
              <Eye className="text-teal-400 mb-6" size={48} />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-slate-400 leading-relaxed">
                To become the leading catalyst for digital transformation in Africa, recognized globally for engineering excellence and as the premier hub for tech talent development.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-16">Why Dream Savvy?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Zap, title: "Speed & Scale", desc: "We build for performance, ensuring your products handle growth effortlessly." },
              { icon: ShieldCheck, title: "Quality Assured", desc: "Our rigorous QA processes ensure bug-free, secure deployments every time." },
              { icon: Target, title: "Results Driven", desc: "We focus on conversion metrics and ROI, not just aesthetics." }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mb-6 border border-slate-800">
                  <item.icon className="text-teal-400" size={32} />
                </div>
                <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                <p className="text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
