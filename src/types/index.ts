export interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
}