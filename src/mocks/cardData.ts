import type { TCardProps } from "../components/Card";

export const mockData: Omit<TCardProps, "onEdit" | "onDelete">[] = [
  {
    id: 1,
    title:
      "Project Alpha: An Extensive Exploration into the Intricacies of Modern Software Development Techniques and Best Practices",
    subTitle:
      "This is the first project. It includes detailed documentation, multiple testing strategies, continuous integration pipelines, and insights into scaling applications effectively over time while managing team workflow and project scope.",
    created_at: "2025-10-28",
  },
  {
    id: 2,
    title:
      "Project Beta: Understanding the Challenges in Distributed Systems and Concurrent Programming Paradigms",
    subTitle:
      "Second project details here. Focused on tackling concurrency issues, load balancing, fault tolerance, and ensuring high availability of services in a production environment with multiple dependencies and microservices.",
    created_at: "2025-10-25",
  },
  {
    id: 3,
    title:
      "Project Gamma: Comprehensive Analysis of Frontend Frameworks, UI/UX Patterns, and Performance Optimization Techniques",
    subTitle:
      "Important notes about Gamma. Covers topics such as component architecture, state management solutions, responsive design strategies, lazy loading techniques, SEO optimization, accessibility compliance, and user engagement metrics.",
    created_at: "2025-10-20",
  },
  {
    id: 4,
    title:
      "Project Gamma: Comprehensive Analysis of Frontend Frameworks, UI/UX Patterns, and Performance Optimization Techniques",
    subTitle:
      "Important notes about Gamma. Covers topics such as component architecture, state management solutions, responsive design strategies, lazy loading techniques, SEO optimization, accessibility compliance, and user engagement metrics.",
    created_at: "2025-10-20",
  },
];
