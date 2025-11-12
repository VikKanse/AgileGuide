// src/agileData.js

/**
 * This file contains all the content data for the Agile Reference Guide.
 * It is exported so that all React components can easily import and use it.
 */
export const methodologiesData = {
    // -------------------------------------------------------------------
    // INTRODUCTION HOME PAGE DATA (New)
    // -------------------------------------------------------------------
    Introduction: {
        description: "Welcome to your comprehensive guide to Agile methodologies. Agile is a mindset and set of principles defined in the Agile Manifesto, aimed at building and responding to change in complex, uncertain environments.",
        sections: {
            WhyAgile: {
                title: "Why Organizations Benefit from Agile",
                content: `
                    <p>Agile shifts the focus from rigid planning to continuous adaptation and delivery. This flexibility provides major benefits, especially in dynamic markets:</p>
                    <ul>
                        <li><strong>Faster Time-to-Market:</strong> Delivering working increments frequently (e.g., every 2-4 weeks) rather than waiting months for a single release.</li>
                        <li><strong>Increased Customer Satisfaction:</strong> Continuously incorporating customer feedback ensures the final product meets user needs effectively.</li>
                        <li><strong>Better Risk Management:</strong> Small, iterative releases allow teams to fail fast, reducing the overall cost of change and identifying problems early.</li>
                        <li><strong>Improved Team Morale:</strong> Empowered, self-managing teams who control their own work pace and methods tend to be more motivated and productive.</li>
                        <li><strong>Transparency:</strong> Continuous visualization of work (Kanban boards, burndown charts) makes progress and impediments visible to everyone, fostering trust.</li>
                    </ul>
                `
            },
            HowToUse: {
                title: "How to Use This Guide",
                content: `
                    <p>Use the navigation panel on the left to explore specific methodologies based on your organizational context:</p>
                    <ul>
                        <li><strong>Team Level (Beginning):</strong> Start with **Scrum** or **Kanban** for team-focused execution.</li>
                        <li><strong>Scaling Level (Intermediate/Expert):</strong> Explore **LeSS** or **SAFe** when you have multiple teams working on a single product or solution.</li>
                        <li><strong>Technical Excellence:</strong> Use **XP** (Extreme Programming) to improve code quality and engineering practices.</li>
                        <li><strong>Organization-wide Flow:</strong> Dive into **Flight Levels** to connect strategy, coordination, and team execution across the enterprise.</li>
                    </ul>
                `
            }
        }
    },
    
    // -------------------------------------------------------------------
    // SCRUM METHODOLOGY DATA (Existing)
    // -------------------------------------------------------------------
    Scrum: {
        description: "Scrum is the most popular Agile framework for developing, delivering, and sustaining complex products. It is lightweight, simple to understand, and difficult to master.",
        sections: {
            Beginning: {
                title: "Beginning: The Basics and Roles",
                content: `
                    <p><strong>Focus:</strong> Understanding the **three roles** and the **five events**.</p>
                    <ul>
                        <li><strong>Roles:</strong> Product Owner, Scrum Master, Development Team.</li>
                        <li><strong>Artifacts:</strong> Product Backlog, Sprint Backlog, Increment.</li>
                        <li><strong>Events:</strong> Sprint (the container), Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective.</li>
                        <li><strong>Action:</strong> Start with a **2-week Sprint** and a small, cross-functional team (3-9 people). Define a simple, clear **Definition of Done (DoD)**.</li>
                    </ul>
                `
            },
            Intermediate: {
                title: "Intermediate: Advanced Concepts and Estimation",
                content: `
                    <p><strong>Focus:</strong> Mastering estimation, refinement, and measuring performance.</p>
                    <ul>
                        <li><strong>Estimation:</strong> Use **Story Points** and the **Planning Poker** technique.</li>
                        <li><strong>Refinement:</strong> Dedicate up to 10% of the Development Team's time to **Product Backlog Refinement** to ensure items are **DEEP** (Detailed, Estimated, Emergent, Prioritized).</li>
                        <li><strong>Metrics:</strong> Track **Velocity** (average Story Points completed per Sprint) and maintain a **Sprint Burndown Chart**.</li>
                    </ul>
                `
            },
            Expert: {
                title: "Expert: Scaling and Organizational Change",
                content: `
                    <p><strong>Focus:</strong> Applying Scrum in complex organizational structures (scaling) and continuous coaching.</p>
                    <ul>
                        <li><strong>Scaling:</strong> Explore frameworks like **SAFe (Scaled Agile Framework)**, **LeSS (Large-Scale Scrum)**, or **Scrum@Scale**.</li>
                        <li><strong>Scrum Master:</strong> Transition from process facilitator to an **Impediment Remover** and **Organizational Change Agent**.</li>
                        <li><strong>Team Dynamics:</strong> Focus on **self-management**, **T-shaped skills**, and creating an environment of **psychological safety**.</li>
                    </ul>
                `
            }
        }
    },

    // -------------------------------------------------------------------
    // KANBAN METHODOLOGY DATA (Existing)
    // -------------------------------------------------------------------
    Kanban: {
        description: "Kanban is a method for managing and improving work across human systems. It is based on flow and visualizing work, originating from Toyota's manufacturing process.",
        sections: {
            Beginning: {
                title: "Beginning: The Board and Visualization",
                content: `
                    <p><strong>Focus:</strong> Visualizing the workflow and making process policies explicit.</p>
                    <ul>
                        <li><strong>Action:</strong> Create a simple board: **To Do | In Progress | Done**. Map columns to your actual, current workflow steps.</li>
                        <li><strong>Core Principle 1:</strong> Visualize the workflow. Use cards for work items.</li>
                        <li><strong>Core Principle 2:</strong> Limit **Work in Progress (WIP)**. Set an initial, low limit for the 'In Progress' column (e.g., 3-5 tasks). This forces focus.</li>
                    </ul>
                `
            },
            Intermediate: {
                title: "Intermediate: Managing Flow and Metrics",
                content: `
                    <p><strong>Focus:</strong> Implementing the pull system and advanced metrics.</p>
                    <ul>
                        <li><strong>Pull System:</strong> Work should be **pulled** into the next column *only* when capacity allows, not *pushed* into it.</li>
                        <li><strong>Metrics:</strong> Track **Cycle Time** (time from start to finish for one item) and the **Cumulative Flow Diagram (CFD)** to identify bottlenecks.</li>
                        <li><strong>Action:</strong> Introduce **Classes of Service** (e.g., Standard, Expedite, Fixed Date) to manage prioritization.</li>
                    </ul>
                `
            },
            Expert: {
                title: "Expert: Feedback Loops and Continuous Improvement",
                content: `
                    <p><strong>Focus:</strong> Utilizing the Kanban Cadences and continuous process evolution.</p>
                    <ul>
                        <li><strong>Cadences:</strong> Implement the seven Kanban meetings (e.g., Service Delivery Review, Strategy Review) for feedback.</li>
                        <li><strong>Evolution:</strong> Use the principle of **Improve Collaboratively, Evolve Experimentally** (Kaizen) by analyzing data (CFD, Cycle Time) and making incremental, data-driven changes.</li>
                        <li><strong>Flow States:</strong> Introduce columns like **'Ready'** or **'QA'** with strict policies to further refine the flow and reduce wait time waste.</li>
                    </ul>
                `
            }
        }
    },

    // -------------------------------------------------------------------
    // EXTREME PROGRAMMING (XP) METHODOLOGY DATA (Existing)
    // -------------------------------------------------------------------
    XP: {
        description: "Extreme Programming (XP) is a prescriptive framework focused on technical practices for producing high-quality code and customer collaboration. It emphasizes frequent releases in short cycles.",
        sections: {
            Beginning: {
                title: "Beginning: Core Values and Pair Programming",
                content: `
                    <p><strong>Focus:</strong> Adopting the **five core values** and the fundamental practice of team coding.</p>
                    <ul>
                        <li><strong>Values:</strong> Simplicity, Communication, Feedback, Courage, Respect.</li>
                        <li><strong>Practice:</strong> Implement **Pair Programming** where all production code is written by two people at one machine.</li>
                        <li><strong>Action:</strong> Start with a **simple design** and the practice of **"You Ain't Gonna Need It" (YAGNI)**—only implement features when they are truly needed.</li>
                    </ul>
                `
            },
            Intermediate: {
                title: "Intermediate: Engineering and Design Practices",
                content: `
                    <p><strong>Focus:</strong> Integrating technical discipline into the workflow.</p>
                    <ul>
                        <li><strong>Testing:</strong> Master **Test-Driven Development (TDD)**: Red (write failing test) -> Green (write code to pass test) -> Refactor.</li>
                        <li><strong>Integration:</strong> Practice **Continuous Integration (CI)**: Teams check in code multiple times a day.</li>
                        <li><strong>Action:</strong> Hold **small, frequent releases** to get fast customer feedback. Implement **refactoring** as a daily, continuous activity to keep the codebase clean.</li>
                    </ul>
                `
            },
            Expert: {
                title: "Expert: The Whole Team and On-Site Customer",
                content: `
                    <p><strong>Focus:</strong> Achieving seamless communication and technical excellence at scale.</p>
                    <ul>
                        <li><strong>Customer Role:</strong> Ensure there is an **On-Site Customer** (or proxy) who is the definitive source for business rules and prioritization.</li>
                        <li><strong>Coding Standard:</strong> Develop and rigidly adhere to a team-agreed **Coding Standard** for consistency and collective code ownership.</li>
                        <li><strong>Metaphor:</strong> Use a **System Metaphor** (a shared story or naming convention) to help all team members understand the system's design and intent.</li>
                    </ul>
                `
            }
        }
    },
    
    // -------------------------------------------------------------------
    // LARGE-SCALE SCRUM (LeSS) METHODOLOGY DATA (Existing)
    // -------------------------------------------------------------------
    LeSS: {
        description: "LeSS is a scaled Agile framework that applies the principles of Scrum to multiple teams working together on a single Product Backlog to build one product.",
        sections: {
            Beginning: {
                title: "Beginning: The Core Framework and One Product Owner",
                content: `
                    <p><strong>Focus:</strong> Understanding the structure for 2-8 teams (LeSS Basic) and the key roles.</p>
                    <ul>
                        <li><strong>Principle:</strong> **One Product Owner** owns the single, prioritized Product Backlog for all teams.</li>
                        <li><strong>Teams:</strong> Teams are **feature teams** (cross-functional and cross-component) and are **self-managing**.</li>
                        <li><strong>Action:</strong> Conduct a **shared Sprint Planning** (Part 1) where all teams and the PO meet to select items and sync. Each team then plans its own Sprint (Part 2).</li>
                    </ul>
                `
            },
            Intermediate: {
                title: "Intermediate: Coordination and Common Events",
                content: `
                    <p><strong>Focus:</strong> Managing inter-team dependencies and shared learning.</p>
                    <ul>
                        <li><strong>Coordination:</strong> Teams coordinate directly through **communication (talking!)** or through techniques like **Scrum of Scrums** (optional) or sending a team member as a **traveling spokesperson**.</li>
                        <li><strong>Shared Events:</strong> Hold a **single Sprint Review** for all teams, where they integrate and demo the one **Product Increment**.</li>
                        <li><strong>Action:</strong> Introduce **Overall Retrospective** involving representation from all teams, the Product Owner, and Scrum Masters to inspect the entire system.</li>
                    </ul>
                `
            },
            Expert: {
                title: "Expert: Organizational Design and Optimization",
                content: `
                    <p><strong>Focus:</strong> Applying the 10 LeSS Principles and moving to LeSS Huge (8+ teams).</p>
                    <ul>
                        <li><strong>Principles:</strong> Focus on **Customer Centricity**, **Leaning the Organization**, and **Whole Product Focus**.</li>
                        <li><strong>LeSS Huge:</strong> For very large-scale, introduce **Area Product Owners** who specialize in parts of the Product Backlog, but still report to the **One Product Owner**.</li>
                        <li><strong>Action:</strong> Continually simplify the organization. Eliminate manager roles that conflict with team self-management and focus on creating value stream-aligned organizations.</li>
                    </ul>
                `
            }
        }
    },

    // -------------------------------------------------------------------
    // SCALED AGILE FRAMEWORK (SAFe) DATA (Existing)
    // -------------------------------------------------------------------
    SAFe: {
        description: "SAFe is a comprehensive framework for scaling Agile and Lean practices across large enterprises. It includes roles, responsibilities, and guidance at the team, program, large solution, and portfolio levels.",
        sections: {
            Beginning: {
                title: "Beginning: The Essential SAFe Configuration and Roles",
                content: `
                    <p><strong>Focus:</strong> Understanding the core components needed to launch an Agile Release Train (ART).</p>
                    <ul>
                        <li><strong>Structure:</strong> The **Agile Release Train (ART)** is a virtual organization of 5-12 teams (50-125 people) that plans, commits, and executes together.</li>
                        <li><strong>Key Roles:</strong> **Release Train Engineer (RTE)** (the chief Scrum Master), **Product Manager** (owns the Vision/Features), and **System Architect**.</li>
                        <li><strong>Action:</strong> Organize teams around **Value Streams** rather than traditional functional silos to minimize handoffs and delays.</li>
                    </ul>
                `
            },
            Intermediate: {
                title: "Intermediate: Program Increment (PI) Planning and Execution",
                content: `
                    <p><strong>Focus:</strong> Mastering the two-day, face-to-face (or virtual) planning event.</p>
                    <ul>
                        <li><strong>PI Planning:</strong> Teams create **PI Objectives** (business value) and identify cross-team dependencies and risks (**ROAM** technique: Resolved, Owned, Accepted, Mitigated).</li>
                        <li><strong>Backlogs:</strong> Features are managed in the **Program Backlog**, and break down into Stories in the **Team Backlogs**.</li>
                        <li><strong>Action:</strong> Conduct **Scrum of Scrums** and **PO Syncs** throughout the Program Increment (typically 8-12 weeks) to monitor progress and address impediments.</li>
                    </ul>
                `
            },
            Expert: {
                title: "Expert: Portfolio and Lean Governance",
                content: `
                    <p><strong>Focus:</strong> Strategic funding, investment control, and enterprise agility.</p>
                    <ul>
                        <li><strong>Funding:</strong> Implement **Lean Budgeting** to fund Value Streams (instead of projects) and use **Guardrails** to control spending.</li>
                        <li><strong>Strategy:</strong> Manage the flow of initiatives using the **Portfolio Kanban System** to prioritize and sequence **Epics**.</li>
                        <li><strong>Action:</strong> Adopt **DevOps** practices and the **Continuous Delivery Pipeline** (CDP) across the entire organization to decouple deployment from release and speed up the cycle time.</li>
                    </ul>
                `
            }
        }
    },

    // -------------------------------------------------------------------
    // FLIGHT LEVELS FRAMEWORK DATA (Existing)
    // -------------------------------------------------------------------
    FlightLevels: {
        description: "Flight Levels is a lightweight, context-driven framework that helps organizations understand, visualize, and improve the flow of work across different organizational levels to achieve business agility.",
        sections: {
            Beginning: {
                title: "Beginning: The Five Activities and Flight Level 2 (Coordination)",
                content: `
                    <p><strong>Focus:</strong> Identifying the different organizational perspectives and starting to visualize work flow.</p>
                    <ul>
                        <li><strong>Levels:</strong> **Flight Level 1 (Operational)**, **Flight Level 2 (Coordination)**, **Flight Level 3 (Strategic)**.</li>
                        <li><strong>Activity 1 (Visualization):</strong> Create a simple **Flight Level 2 Board** to show how multiple teams (FL1) are coordinating to deliver a common goal.</li>
                        <li><strong>Action:</strong> Identify the **end-to-end value stream** across your organization—from initial idea to customer delivery.</li>
                    </ul>
                `
            },
            Intermediate: {
                title: "Intermediate: Linking Levels and Metrics",
                content: `
                    <p><strong>Focus:</strong> Connecting the strategic goals to the team execution and measuring effectiveness.</p>
                    <ul>
                        <li><strong>Activity 2 (Interaction):</strong> Implement short, regular **Flight Review Meetings** at FL2 to check progress against coordination goals and address blockers between teams.</li>
                        <li><strong>Activity 3 (Measure & Monitor):</strong> Define metrics that relate flow to **business outcomes**, not just team output (e.g., Lead Time for a complete feature).</li>
                        <li><strong>Action:</strong> Ensure the **Flight Level 3 (Strategic)** board visualizes the organization's current strategy and how resources are allocated to achieve it.</li>
                    </ul>
                `
            },
            Expert: {
                title: "Expert: System Improvement and Contextualizing Change",
                content: `
                    <p><strong>Focus:</strong> Driving systemic improvement using the Flight Levels Model.</p>
                    <ul>
                        <li><strong>Activity 4 (Improvement):</strong> Use the **Flight Level 4 (Improvement)** activity to hold regular retrospectives across the levels, focused on improving the *system* rather than individual team performance.</li>
                        <li><strong>Activity 5 (Change):</strong> Use the model to define **context-specific improvements**. For example, if FL3 is blocked, implement a new FL2 board to break down the bottleneck.</li>
                        <li><strong>Action:</strong> Train leadership to use Flight Levels language to discuss flow, prioritization, and dependency management across the entire enterprise, not just within IT.</li>
                    </ul>
                `
            }
        }
    },
    "Glossary": { 
        title: "AgileGlossary", 
        description: "Essential terms and definitions." 
    },
    // -------------------------------------------------------------------
    // LEAN
    // -------------------------------------------------------------------
    Lean:{}

};

// IMPORTANT: Do not add any other code (like functions or listeners) in this file. 
// It is purely for data.