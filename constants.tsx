
import React from 'react';
import { ComparisonItem, FaqItem, StepItem } from './types';

export const COMPARISON_DATA: ComparisonItem[] = [
  {
    feature: 'Who leads the trip',
    ourValue: 'Founders (experienced educators)',
    competitorValue: 'Rotating staff/contractors'
  },
  {
    feature: 'Pricing',
    ourValue: 'Budget-flexible planning',
    competitorValue: 'Fixed tiers and packages'
  },
  {
    feature: 'Itinerary',
    ourValue: 'Custom to curriculum + goals',
    competitorValue: 'Standardized itineraries'
  },
  {
    feature: 'Support',
    ourValue: 'Direct access to founders',
    competitorValue: 'Tiered support, less continuity'
  },
  {
    feature: 'Safety planning',
    ourValue: 'FMCSA-vetted buses + hotel night security',
    competitorValue: 'Varies by provider'
  }
];

export const HOMEPAGE_FAQS: FaqItem[] = [
  {
    question: "Do you really lead every trip yourselves?",
    answer: "Yes. The founders plan the trip and personally lead it in Washington, DC, so schools have consistent leadership from start to finish."
  },
  {
    question: "Can you work with our budget?",
    answer: "Yes. We tailor the itinerary to what schools and families can afford, adjusting lodging, pacing, and inclusions without locking you into a rigid package."
  },
  {
    question: "What grades do you typically work with?",
    answer: "Most trips are middle and high school groups, especially 8th-grade history, civics, and government, plus any school group seeking an educational DC experience."
  },
  {
    question: "How far in advance should we plan?",
    answer: "Many schools plan 6–12 months ahead, but shorter timelines may be possible depending on availability."
  },
  {
    question: "Is travel insurance included?",
    answer: "Insurance is optional and can be purchased for 10% of the trip cost."
  },
  {
    question: "Can you help with parent communication?",
    answer: "Yes. We can provide parent-ready materials and may conduct parent informational meetings upon request."
  }
];

export const PLANNING_STEPS: StepItem[] = [
  { number: 1, title: 'Request a quote or planning call', description: 'Share dates, group size, grade level, and budget range.' },
  { number: 2, title: 'Review your custom Washington, DC itinerary', description: 'We design an itinerary aligned to curriculum and budget.' },
  { number: 3, title: 'Prepare for approvals and parents', description: 'Use our materials to support school approval and parent readiness.' },
  { number: 4, title: 'Finalize logistics', description: 'Confirm transportation, lodging, and schedule details.' },
  { number: 5, title: 'Travel with founder-led leadership', description: 'The founders personally lead the trip in Washington, DC.' },
  { number: 6, title: 'Post-trip follow-up', description: 'A final wrap-up to ensure goals were met.' }
];
