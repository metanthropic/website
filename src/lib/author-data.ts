/* FILE: src/lib/author-data.ts */

export interface Author {
  name: string;
  url: string;      // Main link (LinkedIn, Twitter, Website)
  role?: string;    // Optional: Title like "Director", "Research Lab"
  avatar?: string;  // Optional: Image path
}

// Dictionary to look up authors by ID (e.g., 'ekjot-singh')
export const AUTHORS: Record<string, Author> = {
  "metanthropic": {
    name: "Metanthropic",
    url: "https://www.linkedin.com/company/metanthropic/",
    role: "Research Lab"
  },
  "ekjot-singh": {
    name: "Ekjot Singh",
    url: "https://www.linkedin.com/in/ekjot-singh-153110268",
    role: "Director & Lead Researcher"
  },
  // Add future authors here...
  // "jane-doe": { name: "Jane Doe", url: "..." }
};
