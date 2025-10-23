
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
