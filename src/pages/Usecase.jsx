import React from 'react';
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import { Link } from 'react-router-dom';
import Testimonials from '../partials/Testimonials';

const UseCase = ({ title, description, icon, subSections }) => (
  <div className="flex flex-col items-start p-6 bg-white rounded-lg shadow-md">
    <div className="flex items-center mb-4">
      <div className="text-3xl mr-4">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <p className="text-gray-600 mb-4">{description}</p>
    {subSections && (
      <ul className="list-disc pl-5">
        {subSections.map((subSection, index) => (
          <li key={index} className="text-sm text-gray-500 mb-1">{subSection}</li>
        ))}
      </ul>
    )}
  </div>
);

const ProjectTypeSection = ({ title, useCases }) => (
  <div className="mb-12">
    <h2 className="text-3xl font-bold mb-6">{title}</h2>
    <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
      {useCases.map((useCase, index) => (
        <UseCase key={index} {...useCase} />
      ))}
    </div>
  </div>
);

function UseCases() {
  const projectTypes = [
    {
      // title: "Tailored Use Cases for Freelancers and Small Businesses",
      useCases: [
        {
          title: "Efficient Project Planning",
          description: "Simplify your project planning with tactoe's AI-driven tools designed to save time and enhance clarity for freelancers and small teams.",
          icon: "📅",
          subSections: [
            "Automated Task Creation: Generate tasks quickly based on project details, freeing up your time for core work.",
            "Visual Project Timelines: Utilize Kanban and Gantt boards to see project timelines and progress at a glance.",
            "Roadmap and Milestones: Create detailed roadmaps and set milestones to keep your projects on track.",
            "Real-Time Alerts: Receive notifications for deadlines and key updates, ensuring you never miss an important task."
          ]
        },
        {
          title: "Streamlined Agile Workflows",
          description: "Adapt Agile methodologies to your small business or freelance projects with tactoe's intuitive workflow tools.",
          icon: "🔄",
          subSections: [
            "Balanced Sprint Planning: Use AI to estimate and distribute story points, optimizing your sprints.",
            "Daily Check-Ins: Keep track of progress and issues with virtual stand-up meetings and boards.",
            "Backlog Management: Prioritize tasks and user stories effectively with collaborative refinement tools.",
            "Continuous Improvement: Use retrospectives to assess performance and integrate feedback for better outcomes."
          ]
        },
        {
          title: "Simplified Code Management",
          description: "Enhance code quality and collaboration with tactoe's integrated features tailored for small teams and freelancers.",
          icon: "💻",
          subSections: [
            "Automated Code Reviews: Streamline code review processes with automated assignments and progress tracking.",
            "Seamless Pull Request Integration: Manage and track pull requests easily with version control system integration.",
            "Code Quality Insights: Monitor and improve code quality with built-in metrics and analytics.",
            "Pair Programming: Schedule and manage pair programming sessions to foster collaboration and code improvement."
          ]
        },
        {
          title: "Effective Quality Assurance",
          description: "Ensure high-quality deliverables with tactoe's comprehensive QA tools, designed to fit the needs of freelancers and small teams.",
          icon: "🔍",
          subSections: [
            "Manage Test Cases: Organize and execute test cases efficiently within your project workflow.",
            "Bug Tracking: Log, prioritize, and resolve bugs with AI-assisted tools to improve product quality.",
            "Automated Testing: Integrate with automated testing tools to track results and ensure thorough coverage.",
            "User Feedback: Collect and manage user acceptance testing feedback to validate your product."
          ]
        },
        {
          title: "Optimized DevOps Practices",
          description: "Enhance your DevOps workflows with tactoe's tools, making deployment and infrastructure management easier for small teams.",
          icon: "🚀",
          subSections: [
            "Deployment Scheduling: Plan and track deployment tasks across different environments seamlessly.",
            "CI/CD Integration: Monitor build and deployment statuses with integration into CI/CD pipelines.",
            "Resource Management: Track and manage cloud resources effectively to control costs and plan infrastructure needs.",
            "Incident Tracking: Handle and resolve production incidents quickly with effective tracking tools."
          ]
        },
        {
          title: "Enhanced Team Collaboration",
          description: "Boost team productivity and client communication with tactoe's collaboration features, perfect for freelancers and small businesses.",
          icon: "🤝",
          subSections: [
            "Real-Time Collaboration: Share files, leave comments, and work together on tasks in real time.",
            "Client Engagement: Provide clients with controlled access to project updates and maintain clear communication channels.",
            "Knowledge Base: Create and manage a repository of best practices and documentation for your team.",
            "Productivity Reports: Track and analyze team performance with detailed reports for continuous improvement."
          ]
        },
        {
          title: "Efficient Time Tracking and Budgeting",
          description: "Manage your time and budget effectively with tactoe's time tracking and resource management tools, designed for small-scale operations.",
          icon: "⏱️",
          subSections: [
            "Accurate Time Logging: Track time spent on tasks directly, ensuring precise project tracking and billing.",
            "Comprehensive Reports: Generate timesheets and budget reports to analyze resource allocation and expenses.",
            "Capacity Planning: Assess team capacity and workload to plan sprints and allocate resources efficiently.",
            "Budget Monitoring: Keep an eye on project costs and developer utilization to stay within budget."
          ]
        },
        {
          title: "Insightful Analytics and Reporting",
          description: "Leverage tactoe's analytics tools to gain actionable insights and make informed decisions for your freelance or small business projects.",
          icon: "📊",
          subSections: [
            "Project Dashboard: Get a clear overview of project health, risks, and progress with an intuitive dashboard.",
            "Velocity Metrics: Measure team velocity and track performance across sprints to improve future planning.",
            "Custom Reporting: Create tailored reports to meet the needs of stakeholders and track project outcomes.",
            "Predictive Insights: Use AI to forecast project timelines and identify potential bottlenecks."
          ]
        }
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />

      <main className="flex-grow">
        <section className="bg-gradient-to-b from-white-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              <div className="flex-shrink-0 mr-4 pb-12 flex text-center items-center justify-center">
                {/* Logo */}
                <Link to="/" className="block" aria-label="tactoe">
                  <svg className="w-10 h-10 animate-spin-slow" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <radialGradient cx="21.152%" cy="86.063%" fx="21.152%" fy="86.063%" r="79.941%" id="header-logo">
                        <stop stopColor="#00a686" offset="0%" />
                        <stop stopColor="#FFFFFF" offset="10.871%" />
                        <stop stopColor="#00B8D6" offset="100%" />
                      </radialGradient>
                    </defs>
                    <rect width="32" height="32" rx="16" fill="url(#header-logo)" fillRule="nonzero" />
                  </svg>
                </Link>
              </div>
              <div className="text-center pb-12 md:pb-16">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-2xl md:text-2xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                    Discover how tactoe, your AI-powered project management solution, can revolutionize your software development workflow
                  </h2>
                </div>
              </div>
              {projectTypes.map((projectType, index) => (
                <ProjectTypeSection key={index} {...projectType} />
              ))}
              <div className="text-center mt-12 text-gray-600">
                <p className="text-lg">
                  <strong>Disclaimer:</strong> Not all features listed above will be part of the MVP release. These are the plans for the initial version of tactoe. Stay tuned for updates as we continue to develop and enhance our solution.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Testimonials />

      <Footer />
    </div>
  );
}

export default UseCases;
