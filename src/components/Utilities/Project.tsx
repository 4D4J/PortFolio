import { useState, useEffect} from 'react';
import Modal from 'react-modal';

interface Project {
  name: string;
  video: string;
  description: string;
}

interface ProjectCategory {
  name: string;
  projects: Project[];
}

const projectCategories: ProjectCategory[] = [
  {
    name: 'Web',
    projects: [
      {
        name: 'MindMapper',
        video: 'vid_mindmapper.mp4',
        description: 'MindMapper is a web application that allows you to create mind maps. It is a tool that helps you to organize your ideas and thoughts visually. you can share your mind maps with others and collaborate in real-time.'
      },
      {
        name: 'Muzikae',
        video: 'vid_muzikae.mp4',
        description: 'Muzikae is a discord bot that allows you to listen to music with your friends. You can create a room and invite your friends to listen to music together. You can also create a playlist and queue songs. Using reaction and not commands.'
      },
      {
        name: 'BS Studio',
        video: 'vid_bsstudio.mp4',
        description: 'BS Studio is a website showing the work of two sneakers designers, they create their own nike sneakers. they take nike shoe soles and create the whole shoe from scratch with an extraordinary level of finishing.'
      },
      {
        name: 'Linux Helper',
        video: 'vid_linuxhelper.mp4',
        description: 'Linux Helper is a website created with a friend, in this web site you can learn basic linux command, test your connaissance and try basic command on the website with a full custom terminal developed by me in JS.'
      }
    ]
  },
  {
    name: 'Cybersecurity',
    projects: [
      {
        name: 'NReader',
        video: 'vid_NReader.mp4',
        description: 'NReader is a powerful RFC-NFID badge and card scanner and emulator, designed for security professionals and hobbyists. It supports a wide range of RFID protocols and can read, write, and emulate various RFID tags.'
      },
      {
        name: 'Razm0x00',
        video: 'vid_Razm0x00.mp4',
        description: 'Malware info-stealer write in C using DLL injection in Discord working with a Dropper write in C++.'
      }
    ]
  },
  {
    name: 'Other',
    projects: [
      {
        name: 'BedRock',
        video: 'vid_BedRock.mp4',
        description: 'One of the best Minecraft anti-cheat plugins, designed to prevent cheating and enhance gameplay, already in development.'
      },
      {
        name: 'VocaLock',
        video: 'vid_vocalock.mp4',
        description: 'VocaLock is an original application in beta phase that combines learning English and controlling access to your programs. To launch an executable of your choice, you must first succeed in translating an English vocabulary word. Three mistakes and your computer shuts down.'
      }
    ]
  }
];

const Project = () => {
  const [currentCategory, setCurrentCategory] = useState(0);
  const [currentProject, setCurrentProject] = useState(0);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {  
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  // Helpers pour obtenir les données du projet actuel
  const getCurrentProjects = () => projectCategories[currentCategory].projects;
  const getCurrentProject = () => getCurrentProjects()[currentProject];

  useEffect(() => {
    const changeProject = () => {
      const currentProjects = projectCategories[currentCategory].projects;
      setCurrentProject((prev) => (prev + 1) % currentProjects.length);
    };

    const changeCategoryWithKeys = (direction: 'next' | 'prev') => {
      if (direction === 'next') {
        setCurrentCategory((prev) => (prev + 1) % projectCategories.length);
      } else {
        setCurrentCategory((prev) => (prev - 1 + projectCategories.length) % projectCategories.length);
      }
      setCurrentProject(0); 
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ') {
        changeProject();
      } else if (e.key === 'ArrowLeft') {
        changeCategoryWithKeys('prev');
      } else if (e.key === 'ArrowRight') {
        changeCategoryWithKeys('next');
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      // Éviter le changement si on touche la modal ou le bouton d'info
      const target = e.target as HTMLElement;
      if (target.closest('.modal-content') || target.closest('.info-button') || target.closest('.category-nav')) {
        return;
      }
      changeProject();
    };

    // Écouter les deux types d'événements sur tous les appareils
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('touchstart', handleTouchStart);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('touchstart', handleTouchStart);
    };
  }, [currentCategory, currentProject]);

  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-4 sm:p-8">
      
      {/* Navigation des catégories */}
      <div className="mb-4 flex flex-wrap justify-center gap-2 category-nav">
        {projectCategories.map((category, index) => (
          <button
            key={category.name}
            onClick={() => {
              setCurrentCategory(index);
              setCurrentProject(0);
            }}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
              currentCategory === index
                ? 'bg-emerald-600 text-white shadow-lg'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="mb-5 flex flex-col items-center justify-center sm:text-left">
        <h2 className='text-lg'>Check out my latest projects</h2>
        <p className='text-xs'>Press Space/tap to change project • Arrow keys to change category</p>
      </div>
      
      <div className='w-full h-[280px] md:h-[400px] flex flex-col items-center justify-around'>        
        <div 
          className="w-auto flex flex-row items-center justify-center mb-2.5 cursor-pointer info-button" 
          onClick={openModal}
        >
          <p className="text-base font-medium">{getCurrentProject().name}</p>
          <svg 
            className="ml-2 w-5 h-5 md:w-6 md:h-6" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="11" y1="8" x2="13" y2="8"></line>
          </svg>
        </div>
        <div className="w-full h-[220px] md:h-[400px]">
          <video 
            className="w-full h-full object-contain pb-2" 
            src={`/video/${getCurrentProject().video}`} 
            loop 
            autoPlay 
          />
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Project Info"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 outline-none cursor-default max-w-[92%] md:max-w-md"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 cursor-pointer"
        ariaHideApp={false}
      >        
        <div className='p-4 md:p-6 rounded-lg w-full mx-auto bg-black bg-opacity-80 modal-content'>
          <h2 className='text-white text-lg md:text-xl mb-2 md:mb-4'>{getCurrentProject().name}</h2>
          <p className='text-sm md:text-base'>
            {getCurrentProject().description}
          </p>
        </div>
      </Modal>
    </div>
  );
}


export default Project;