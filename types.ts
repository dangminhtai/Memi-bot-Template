import type React from 'react';

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Command {
  name: string;
  description: string;
  isSlash: boolean;
}

export interface Testimonial {
  avatarUrl: string;
  name: string;
  title: string;
  quote: string;
}

export interface ChatMessage {
  sender: 'user' | 'bot';
  text: string;
  error?: boolean;
}

export interface PricingTier {
    name: string;
    price: string;
    period: string;
    features: string[];
    isFeatured: boolean;
    cta: string;
    ctaLink: string;
}