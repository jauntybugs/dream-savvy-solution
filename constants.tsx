
import React from 'react';
import { Layout, Code, PenTool, Search, Database, Smartphone, GraduationCap, Briefcase } from 'lucide-react';
import { Service, Course, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'web-design',
    title: 'Website Design',
    description: 'Bespoke, responsive websites that capture your brand essence and convert visitors into loyal customers.',
    icon: 'Layout'
  },
  {
    id: 'web-dev',
    title: 'Web Application Development',
    description: 'Scalable, high-performance web applications built with the latest technologies to solve complex business problems.',
    icon: 'Code'
  },
  {
    id: 'uiux-design',
    title: 'UI/UX Design',
    description: 'User-centric interface designs that are both visually stunning and highly intuitive for a seamless digital experience.',
    icon: 'PenTool'
  },
  {
    id: 'ux-research',
    title: 'UX Research',
    description: 'Data-driven insights and user testing to understand behavior and optimize your product for maximum impact.',
    icon: 'Search'
  }
];

export const COURSES: Course[] = [
  {
    id: 'ds-01',
    title: 'Data Science & Analytics',
    duration: '12 Weeks',
    description: 'Master Python, SQL, and machine learning to turn raw data into actionable business intelligence.',
    level: 'Intermediate',
    price: '$499'
  },
  {
    id: 'uiux-01',
    title: 'UI/UX Design Masterclass',
    duration: '10 Weeks',
    description: 'Go from zero to pro in Figma, user research, and wireframing for world-class digital products.',
    level: 'Beginner',
    price: '$399'
  },
  {
    id: 'pm-01',
    title: 'Product Management',
    duration: '8 Weeks',
    description: 'Learn the lifecycle of product development, agile methodologies, and leadership skills.',
    level: 'Advanced',
    price: '$450'
  },
  {
    id: 'web-01',
    title: 'Fullstack Web Development',
    duration: '16 Weeks',
    description: 'Comprehensive training in React, Node.js, and modern cloud infrastructure.',
    level: 'Beginner',
    price: '$599'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Adebayo Samuel',
    role: 'CEO',
    company: 'TechGrowth Nigeria',
    content: 'Dream Savvy Solutions transformed our online presence. Their attention to detail in UI/UX is truly world-class.',
    avatar: 'https://picsum.photos/seed/ade/200/200'
  },
  {
    id: '2',
    name: 'Sarah Jenkins',
    role: 'Startup Founder',
    company: 'Lumina Apps',
    content: 'The web application they built for us is fast, secure, and incredibly user-friendly. Highly recommended!',
    avatar: 'https://picsum.photos/seed/sarah/200/200'
  }
];

export const CONTACT_INFO = {
  phone: '+234 807 117 2485',
  email: 'info@designme.africa',
  address: 'Lagos, Nigeria | Global Digital Presence'
};

export const TRUSTED_CLIENTS = [
  { name: 'Foular', url: 'https://foular.co.uk' },
  { name: 'Affinity Art Gallery', url: 'https://galleryaffinity.com' },
  { name: 'AOA Impact', url: 'https://aoaimpact.org' },
  { name: 'XPS Constructions', url: 'https://xpsconstructions.co.uk' },
  { name: 'XPS Academy', url: 'https://xpsacademy.co.uk' },
  { name: 'Marble Ashe', url: 'https://marbleashe.co.uk' },
  { name: 'Avante Services', url: 'https://avanteservices.co.uk' },
  { name: 'Shekinah Family', url: 'https://shekinahfamily.org' },
];
