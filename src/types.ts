export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  accentColor?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  levelBadge?: string;
  detailedTopics?: string[];
}

export interface HowItWorksStep {
  stepNumber: number;
  title: string;
  description: string;
  iconName: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  iconName: string;
  iconColor: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  quote: string;
  rating: number;
  avatarUrl: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface BookingFormData {
  studentName: string;
  parentName?: string;
  email: string;
  phone: string;
  level: 'National 5' | 'Higher' | 'Advanced Higher' | 'GCSE' | 'A-Level' | 'Other';
  preferredDays: string[];
  lessonType: 'One-to-One Online' | 'Exam Crash Course' | 'Weekly Revision' | 'Homework Support';
  notes: string;
}

export interface CourseLevelDetail {
  id: string;
  title: string;
  subtitle: string;
  modules: {
    name: string;
    topics: string[];
  }[];
  targetAudience: string;
}
