import React from 'react';
import { CheckCircle, Clock, Users, BarChart2, Layers, MessageCircle, Grid, Layout } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary-100">
      <Icon className="w-6 h-6 text-primary-600" />
    </div>
    <h2 className="text-1xl md:text-1xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">{title}</h2>
    <p className="text-gray-600 mb-4">{description}</p>
  </div>
);

const FeaturesBlocks = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "AI Automation",
      description: "Let our AI do the heavy lifting. Automatically generate tasks based on project goals, so you can focus on the fun stuff. It's like having an assistant who never sleeps!"
    },
    {
      icon: Grid,
      title: "Kanban & Gantt Boards",
      description: "Visualize your project timeline and task progress with intuitive boards. Whether you’re a Kanban connoisseur or Gantt guru, we’ve got you covered."
    },
    {
      icon: Clock,
      title: "Time Tracking",
      description: "Keep track of every second without losing your mind. Boost productivity and make sure no time goes unaccounted for (not even those coffee breaks)."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Communicate seamlessly with your team. Share files, swap ideas, and get things done together—minus the chaos."
    },
    {
      icon: MessageCircle,
      title: "Client Communication",
      description: "Talk to your clients directly through in-app messaging. Get real-time updates and keep everyone on the same page without endless email threads."
    },
    {
      icon: Layers,
      title: "Project Planning",
      description: "Plan like a pro with detailed project plans, set milestones, and effortlessly track progress. It’s like having a crystal ball for your project."
    },
    {
      icon: BarChart2,
      title: "Analytics & Reporting",
      description: "Gain insights without the headache. Use our comprehensive analytics to turn project data into understandable reports. It’s numbers made friendly!"
    },
    {
      icon: Layout,
      title: "Timesheets & Reports",
      description: "Generate detailed timesheets and reports with ease. Track progress accurately and impress everyone with your organizational skills."
    },
    {
      icon: CheckCircle,
      title: "Alerts & Notifications",
      description: "Stay informed with timely alerts and notifications for bugs and tasks. Get updates on deliverables via email and in-app notifications. No more surprises!"
    }
  ];

  return (
    <section className="relative py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Streamline Your Workflow</h2>
          <p className="text-md text-gray-600">
            tactoe offers a comprehensive suite of AI-powered tools designed to enhance productivity and simplify project management for freelancers and small teams. No learning curve needed—even a kid could use it!
          </p>
          <p className="text-md text-gray-600 mt-4">
            The best part? It's affordable as heck. We’re working hard to finish our first MVP by January. Sign up for early access now, because it's going to be a closed-access release!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesBlocks;
