import {
  Zap,
  ShieldCheck,
  Bot,
  BarChart3,
  Cloud,
  MessageCircle,
} from "lucide-react";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: Zap,
    title: "Fast Performance",
    description:
      "Professional business solution built with Tailwind CSS utility classes.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Platform",
    description:
      "Professional business solution built with Tailwind CSS utility classes.",
  },
  {
    icon: Bot,
    title: "AI Automation",
    description:
      "Professional business solution built with Tailwind CSS utility classes.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description:
      "Professional business solution built with Tailwind CSS utility classes.",
  },
  {
    icon: Cloud,
    title: "Cloud Hosting",
    description:
      "Professional business solution built with Tailwind CSS utility classes.",
  },
  {
    icon: MessageCircle,
    title: "24/7 Support",
    description:
      "Professional business solution built with Tailwind CSS utility classes.",
  },
];
export const pricingPlans = [
  {
    name: "Starter",
    price: "$19",
    features: [
      "Responsive Design",
      "Support",
      "Updates",
    ],
  },
  {
    name: "Professional",
    price: "$49",
    features: [
      "Responsive Design",
      "Support",
      "Updates",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Responsive Design",
      "Support",
      "Updates",
    ],
  },
];
export const statistics = [
  {
    value: "500+",
    label: "Clients",
  },
  {
    value: "99.9%",
    label: "Uptime",
  },
  {
    value: "120+",
    label: "Experts",
  },
  {
    value: "25",
    label: "Countries",
  },
];

export const testimonials = [
  {
    quote: "Amazing platform!",
    author: "John Carter",
  },
  {
    quote: "Highly recommended.",
    author: "Sarah Wilson",
  },
  {
    quote: "Excellent support.",
    author: "Michael Brown",
  },
];