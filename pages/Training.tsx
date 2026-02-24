
import React from 'react';
import { Clock, GraduationCap, TrendingUp, Users, CheckCircle } from 'lucide-react';
import { COURSES } from '../constants';

const Training: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        {/* Abstract background */}
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden">
           <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-indigo-900/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-16">
            <h1 className="text-5xl font-extrabold mb-6 leading-tight">Elevate Your <span className="text-gradient">Tech Career</span></h1>
            <p className="text-xl text-slate-400">
              Industry-standard certification programs designed to transform beginners into professionals. Gain hands-on experience and build a portfolio that gets you hired.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {COURSES.map((course) => (
              <div key={course.id} className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-indigo-500/50 transition-all hover:translate-y-[-4px] shadow-lg flex flex-col">
                <div className="p-8 flex-grow">
                  <div className="flex justify-between items-start mb-6">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      course.level === 'Beginner' ? 'bg-teal-500/10 text-teal-400 border border-teal-500/20' :
                      course.level === 'Intermediate' ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20' :
                      'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                    }`}>
                      {course.level}
                    </span>
                    <span className="text-slate-500 text-sm flex items-center">
                      <Clock size={14} className="mr-1" /> {course.duration}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{course.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {course.description}
                  </p>
                  <div className="space-y-3">
                    {['Certificate included', 'Live sessions', 'Hands-on projects'].map((item, i) => (
                      <div key={i} className="flex items-center text-slate-400 text-xs">
                        <CheckCircle size={14} className="text-teal-400 mr-2" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-8 pt-0 mt-auto">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-2xl font-bold text-white">{course.price}</div>
                  </div>
                  <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 rounded-xl transition-all">
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-slate-800">
             <div className="text-center">
               <div className="text-3xl font-extrabold text-white mb-2">95%</div>
               <div className="text-slate-500 text-sm uppercase tracking-widest">Hiring Rate</div>
             </div>
             <div className="text-center">
               <div className="text-3xl font-extrabold text-white mb-2">12+</div>
               <div className="text-slate-500 text-sm uppercase tracking-widest">Global Mentors</div>
             </div>
             <div className="text-center">
               <div className="text-3xl font-extrabold text-white mb-2">1k+</div>
               <div className="text-slate-500 text-sm uppercase tracking-widest">Graduates</div>
             </div>
             <div className="text-center">
               <div className="text-3xl font-extrabold text-white mb-2">50+</div>
               <div className="text-slate-500 text-sm uppercase tracking-widest">Partner Companies</div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Training;
