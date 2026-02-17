import type { ReactNode } from 'react';

export interface ComparisonItem {
  feature: string;
  ourValue: string;
  competitorValue: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  /** Optional React node for formatted display (e.g. bold labels, line breaks); when set, used on FAQs page instead of plain answer */
  answerNode?: ReactNode;
}

export interface StepItem {
  number: number;
  title: string;
  description: string;
}
