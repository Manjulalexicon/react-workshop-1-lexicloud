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