
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Course {
  id: string;
  title: string;
  duration: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  price: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}
