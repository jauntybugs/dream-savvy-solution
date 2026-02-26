
import React from 'react';
import { ArrowRight, CheckCircle2, Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES, TESTIMONIALS, TRUSTED_CLIENTS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-24 md:pt-32 md:pb-40 bg-gradient-mesh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold mb-6 animate-pulse">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              <span>Innovating Africa's Digital Landscape</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
              Transforming <span className="text-gradient">Ideas</span> Into <br className="hidden md:block" /> Digital Reality
            </h1>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto">
              Dream Savvy Solutions offers premium web design, software development, and specialized tech training to help startups and professionals scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center group shadow-lg shadow-indigo-600/20">
                Launch Your Project <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/training" className="bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all text-center">
                Explore Courses
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating Decorative Elements */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-full opacity-20 pointer-events-none hidden lg:block">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[120px] -mr-64"></div>
           <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-teal-500 rounded-full blur-[100px]"></div>
        </div>
      </section>

      {/* Trusted Clients Section */}
      <section className="py-12 bg-slate-950 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-slate-500 text-sm font-bold uppercase tracking-[0.3em] mb-10">Our Trusted Clients</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
            {TRUSTED_CLIENTS.map((client, idx) => (
              <div key={idx} className="text-white font-bold text-xl md:text-2xl hover:text-indigo-400 transition-colors cursor-default">
                {client.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Prop / Features */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/50 transition-all">
              <div className="w-16 h-16 bg-indigo-600/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="text-indigo-400" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Innovation-First</h3>
              <p className="text-slate-400">We use cutting-edge frameworks and AI integration to build future-ready solutions.</p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-teal-500/50 transition-all">
              <div className="w-16 h-16 bg-teal-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Star className="text-teal-400" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Expert Training</h3>
              <p className="text-slate-400">Our certifications are led by industry veterans with years of experience in global tech hubs.</p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/50 transition-all">
              <div className="w-16 h-16 bg-indigo-600/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="text-indigo-400" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Africa & Global Focus</h3>
              <p className="text-slate-400">Combining local insights with global standards to deliver unmatched quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Snippet */}
      <section className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-bold mb-4">Our Expertise</h2>
              <p className="text-slate-400 max-w-xl">We build premium digital products that scale with your business goals.</p>
            </div>
            <Link to="/services" className="text-teal-400 font-semibold flex items-center hover:underline group">
              View All Services <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <div key={service.id} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:scale-[1.02] transition-all cursor-default">
                <h4 className="text-white font-bold text-lg mb-3">{service.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-teal-400 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="p-8 rounded-3xl bg-slate-900 border border-slate-800 relative group">
                <Quote className="absolute top-6 right-8 text-slate-800 group-hover:text-indigo-900/50 transition-colors" size={48} />
                <p className="text-slate-300 text-lg mb-8 italic relative z-10">"{t.content}"</p>
                <div className="flex items-center">
                  <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full mr-4 border-2 border-indigo-500/30" />
                  <div>
                    <h5 className="text-white font-bold">{t.name}</h5>
                    <p className="text-slate-500 text-sm">{t.role} • {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-indigo-600 rounded-[3rem] p-12 md:p-20 text-center overflow-hidden relative">
            {/* Background decoration */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-indigo-400 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-teal-400 rounded-full blur-3xl opacity-20"></div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8">Ready to start your digital journey?</h2>
            <p className="text-indigo-100 text-xl mb-12 max-w-2xl mx-auto">
              Join hundreds of companies and professionals already benefiting from our solutions.
            </p>
            <Link to="/contact" className="bg-white text-indigo-600 hover:bg-slate-100 px-10 py-5 rounded-2xl font-bold text-xl transition-all inline-flex items-center shadow-xl">
              Talk to Us <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
