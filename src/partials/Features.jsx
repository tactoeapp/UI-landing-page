import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Layers, PieChart, Bell, BarChart2, FileText, DollarSign } from 'lucide-react';

function Features() {
  const [activeTab, setActiveTab] = useState(0);
  const tabsRef = useRef([]);

  const features = [
    {
      icon: CheckCircle,
      title: "AI-Powered",
      description: "Let our AI handle the boring stuff. Automatically create tasks, generate insightful reports, and track project progress. Identify bugs and manage pending tasks with ease, leaving you to make those big, strategic decisions (or just chill with a coffee)."
    },
    {
      icon: DollarSign,
      title: "Affordable Pricing",
      description: "Get premium project management tools without selling a kidney. tactoe is designed to be easy on the wallet, offering top-notch features to freelancers and small businesses at a price that won’t make you cry."
    },
    {
      icon: Layers,
      title: "Versatile Project Views",
      description: "Whether you’re a Kanban enthusiast or a Gantt chart devotee, we’ve got the customizable project views to match your unique style. Flexibility is the name of the game."
    },
    {
      icon: Bell,
      title: "Timely Notifications",
      description: "Never miss a beat with real-time updates via email and in-app notifications. Stay informed, meet deadlines, and keep your projects on track without the last-minute panic."
    },
    {
      icon: BarChart2,
      title: "Data Analysis & Visualization",
      description: "Turn numbers into knowledge with our advanced analytics tools. Get actionable insights and make informed decisions without breaking a sweat (or the bank)."
    },
    {
      icon: FileText,
      title: "Automated Reports",
      description: "Generate detailed project reports with a single click. Provide clients and stakeholders with clear overviews of project status and performance."
    }
  ];

  useEffect(() => {
    const focusedTab = tabsRef.current[activeTab];
    focusedTab?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [activeTab]);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Tailored for Freelancers and Small Businesses
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              ref={(el) => (tabsRef.current[index] = el)}
              className={`p-6 rounded-xl transition-all duration-300 cursor-pointer ${
                activeTab === index
                  ? 'bg-white'
                  : 'bg-gray-50 hover:bg-white hover:shadow-md'
              }`}
              onClick={() => setActiveTab(index)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <feature.icon className={`w-8 h-8 mr-4 ${activeTab === index ? 'text-[#00a686]-500' : 'text-[#00a686]-400'}`} />
                <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
