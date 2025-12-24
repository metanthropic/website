export type Category = 'All' | 'Publication' | 'Milestone' | 'Release' | 'Product';

export type Tech =
| 'Foundation Models'
| 'Reasoning Systems'
| 'Generative Vision'
| 'Audio Intelligence'
| 'Code Generation'
| 'Video Generation'
| 'Interpretability Tools'
| 'Safety Frameworks'
| 'Sparse Architectures'
| 'Robotics'
| 'General';

export type Topic =
| 'AGI'
| 'Founding'
| '2025'
| 'Safety'
| 'Community & Collaboration'
| 'Compute Scaling'
| 'Ethics & Safety'
| 'Exploration & Games'
| 'Generative Models'
| 'Language'
| 'Learning Paradigms'
| 'Multi-agent'
| 'Reasoning & Policy'
| 'Robotics'
| 'Simulated Environments'
| 'Software & Engineering'
| 'Transformers'
| 'Company';

export interface ResearchItem {
    id: string;
    category: Exclude<Category, 'All'>;
    date: string;
    title: string;
    summary: string;
    link: string;
    image?: string;
    tech?: Tech[];
    topics?: Topic[];
    authors?: string[]; // <--- NEW FIELD
}

export const RESEARCH_DATA: ResearchItem[] = [
    {
        id: '3',
        category: 'Publication',
        date: 'Dec 23, 2025',
        title: 'The Fragility of Guardrails: Cognitive Jamming and Repetition Collapse in Safety-Steered LLMs',
        summary: 'We conduct a mechanistic audit of the LLM residual stream, deploying Sparse Autoencoders to reveal how models spontaneously construct internal physics engines—and how fragile these representations are to perturbation.',
        link: '/research/fragility-of-guardrails',
        image: '/images/research/fragility-of-guardrails/thumbnail.png',
        tech: ['Interpretability Tools', 'Safety Frameworks', 'Reasoning Systems'],
        topics: ['Safety', 'Language', 'Transformers', 'Reasoning & Policy'],
        authors: ['metanthropic', 'ekjot-singh']
    },
    {
        id: '2',
        category: 'Publication',
        date: 'Dec 17, 2025',
        title: 'Dataset Distillation for the Pre-Training Era',
        summary: 'We introduce Linear Gradient Matching, a method that condenses massive datasets into a single synthetic image per class, revealing the shared representations across different AI models.',
        link: '/research/dataset-distillation',
        image: '/images/research/dataset-distillation/thumbnail.png',
        tech: ['Generative Vision', 'Foundation Models'],
        topics: ['Learning Paradigms', 'Generative Models', 'Transformers'],
        authors: ['metanthropic', 'ekjot-singh'] // <--- ADDED AUTHORS
    },
    {
        id: '1',
        category: 'Milestone',
        date: 'Nov 10, 2025',
        title: 'Announcing Metanthropic',
        summary: 'We are proud to officially unveil Metanthropic, an independent research organization dedicated to the development of safe and broadly beneficial AGI.',
        link: '/research/announcing-metanthropic',
        image: '/images/announcement.png',
        tech: ['General'],
        topics: ['AGI', 'Safety'],
        authors: ['metanthropic', 'ekjot-singh'] // <--- ADDED AUTHORS
    },
];
