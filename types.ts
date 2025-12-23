
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface Testimonial {
  id: string;
  name: string;
  pet: string;
  comment: string;
  avatar: string;
}
