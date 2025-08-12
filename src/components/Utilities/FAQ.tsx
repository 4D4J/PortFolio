import { useState } from 'react';
import usePageTitle from '../../hooks/usePageTitle';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

interface FAQProps {
  onNavigateToContact?: () => void;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "Who are you and what do you do?",
    answer: "I'm Nathan, aka Rapido. I'm a web developer and a cybersecurity student. I create modern web applications and various other software, and i also participate in CTF competitions."
  },
  {
    id: 2,
    question: "What are your skills?",
    answer: "I use many technologies: React, TypeScript, Node.js, Tailwind CSS, Flutter for web and mobile applications. I also use Python, C, C++, Java and Lua. I have cybersecurity skills like Pentesting, OSINT, and i'm learning forensics and reverse engineering. You can view some of my projects in the Projects section."
  },
  {
    id: 3,
    question: "Can i download your CV?",
    answer: "Of course! My CV is downloadable from my portfolio. You can find it in the Contact section or contact me to get the latest version of my CV."
  },
  {
    id: 4,
    question: "How can i contact you?",
    answer: "You can contact me through the Contact page of this portfolio, or directly by email. I'm also present on LinkedIn and GitHub. Feel free to contact me for any collaboration or professional opportunity."
  },
  {
    id: 5,
    question: "Do you work as a freelancer?",
    answer: "Yes, i'm open to freelance missions and interesting projects. Whether it's for web development, or specific projects, feel free to propose your ideas."
  },
  {
    id: 6,
    question: "What types of projects do you work on?",
    answer: "I mainly work on web applications (showcase websites, React applications, APIs), cybersecurity tools, and i participate in technical challenges. You can see my work in the Projects section."
  }
];

function FAQ({ onNavigateToContact }: FAQProps = {}) {
  usePageTitle({ 
    title: 'FAQ - Frequently Asked Questions', 
    description: 'Find answers to the most frequently asked questions about me.' 
  });

  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenItem(prev => prev === id ? null : id);
  };

  return (
    <div className="h-full w-full flex flex-col p-4 sm:p-8 overflow-y-auto scrollbar-hide faq-container">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-white uppercase tracking-[3px]">
          FAQ
        </h1>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4 mb-8">
        {faqData.map((item) => (
          <div
            key={item.id}
            className="border border-gray-700 rounded-lg bg-gray-900/30 hover:bg-gray-900/50 transition-all duration-300"
          >
            {/* Question */}
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full p-4 sm:p-6 text-left flex items-center justify-between hover:bg-gray-800/30 transition-colors duration-200 rounded-lg"
            >
              <h3 className="text-base sm:text-lg font-semibold text-white pr-4">
                {item.question}
              </h3>
              <div className="flex-shrink-0">
                <svg
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                    openItem === item.id ? 'transform rotate-90' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </button>

            {/* Answer */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openItem === item.id
                  ? 'max-h-96 opacity-100'
                  : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                <div className="border-t border-gray-700 pt-4">
                  <p className="text-gray-300 leading-relaxed text-left text-sm sm:text-base">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="text-center">
        <div className="border border-gray-700 rounded-lg bg-gray-900/30 p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
            Can't find your answer?
          </h3>
          <p className="text-gray-400 mb-4 text-sm sm:text-base">
            Feel free to contact me directly for any specific questions.
          </p>
          <p
            onClick={onNavigateToContact}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 cursor-pointer"
          >
            Contact me
          </p>
        </div>
      </div>
    </div>
  );
}

export default FAQ;