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
    question: "Who are you and what are you doing ?",
    answer: "I'm Nathan aka Rapido. I'm a web developpeur and a cybersecurity student. I create modern web application and many other software, i also participate at CTF."
  },
  {
    id: 2,
    question: "What's you're skills ?",
    answer: "I maitrise many technologies: React, TypeScript, Node.JS, Tailwindcss, Flutter for web and mobile applicatione; I also maitrise Python, C, C++, Java and Lua. I've many cybersecurity skills like Pentesting, Osint and i learn Forensic and Reverse Engineering, You can have a view of a peace of my project in the same section ."
  },
  {
    id: 3,
    question: "Can i download your CV?",
    answer: "Of course ! My CV is downloadable in my PortFolio, You can find it in the Contact section or by contact me to have the latest version of my CV."
  },
  {
    id: 4,
    question: "Comment puis-je vous contacter ?",
    answer: "Vous pouvez me contacter via la page contact de ce portfolio, ou directement par email. Je suis également présent sur LinkedIn et GitHub. N'hésitez pas à me contacter pour toute collaboration ou opportunité professionnelle."
  },
  {
    id: 5,
    question: "Travaillez-vous en freelance ?",
    answer: "Oui, je suis ouvert aux missions freelance et aux projets intéressants. Que ce soit pour du développement web, des audits de sécurité, ou des projets spécifiques, n'hésitez pas à me proposer vos idées."
  },
  {
    id: 6,
    question: "Quels types de projets réalisez-vous ?",
    answer: "Je réalise principalement des applications web (sites vitrine, applications React, APIs), des outils de cybersécurité, et je participe à des challenges techniques. Vous pouvez voir mes réalisations dans la section projets."
  }
];

function FAQ({ onNavigateToContact }: FAQProps = {}) {
  usePageTitle({ 
    title: 'FAQ - Questions Fréquentes', 
    description: 'Retrouvez les réponses aux questions les plus fréquemment posées me concernant.' 
  });

  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenItem(prev => prev === id ? null : id);
  };

  return (
    <div className="h-full w-full flex flex-col p-4 sm:p-8 overflow-y-auto scrollbar-hide faq-container">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-white font-[Hack] uppercase tracking-[3px]">
          FAQ
        </h1>
        <p className="text-gray-400 text-base sm:text-lg">
          Questions fréquemment posées
        </p>
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
                  <p className="text-gray-300 leading-relaxed text-right text-sm sm:text-base">
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
            Vous ne trouvez pas votre réponse ?
          </h3>
          <p className="text-gray-400 mb-4 text-sm sm:text-base">
            N'hésitez pas à me contacter directement pour toute question spécifique.
          </p>
          <p
            onClick={onNavigateToContact}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 cursor-pointer"
          >
            Me contacter
          </p>
        </div>
      </div>
    </div>
  );
}

export default FAQ;