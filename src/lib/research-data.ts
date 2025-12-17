export type Category = 'All' | 'Publication' | 'Milestone' | 'Release' | 'Product';

// CHANGED: Generic, high-level tech categories
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

// (Topics can stay the same as they are standard academic fields)
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
}

export const RESEARCH_DATA: ResearchItem[] = [
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
    },
];
