import { useState, useEffect} from 'react';
import Modal from 'react-modal';


const Project = () => {
  const ProjectName = ['MindMapper', 'Muzikae', 'BS Studio', 'Linux Helper'];
  const ProjectVideo = ['vid_mindmapper.mp4', 'vid_muzikae.mp4', 'vid_bsstudio.mp4', 'vid_linuxhelper.mp4'];
  const ProjectText = [
    'MindMapper is a web application that allows you to create mind maps. It is a tool that helps you to organize your ideas and thoughts visually. you can share your mind maps with others and collaborate in real-time.',
    'Muzikae is a discord bot that allows you to listen to music with your friends. You can create a room and invite your friends to listen to music together. You can also create a playlist and queue songs. Using reaction and not commands.',
    'BS Studio is a website showing the work of two sneakers designers, they create their own nike sneakers. they take nike shoe soles and create the whole shoe from scratch with an extraordinary level of finishing.',
    'Linux Helper is a website created with a friend, in this web site you can learn basic linux command, test your connaissance and try basic command on the website with a full custom terminal developed by me in JS.'
  ]


  const [num_text, setNumText] = useState(0);
  const [num_title, setNumTitle] = useState(0);
  const [num_video, setNumVideo] = useState(0);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {  
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ') {
        setNumText((prev) => (prev + 1) % ProjectText.length);
        setNumTitle((prev) => (prev + 1) % ProjectName.length);
        setNumVideo((prev) => (prev + 1) % ProjectVideo.length);
      }
    };


    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-4 sm:p-8">
      <div className="mb-5 flex flex-col items-center justify-center sm:text-left">
        <h2 className='text-lg'>Check out my latest projects</h2>
        <p className='text-xs'>Press Space to change project</p>
      </div>
      <div className='w-full h-[280px] md:h-[400px] flex flex-col items-center justify-around'>
        <div 
          className="w-auto flex flex-row items-center justify-center mb-2.5 cursor-pointer" 
          onClick={openModal}
        >
          <p className="text-base font-medium">{ProjectName[num_title]}</p>
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
            className="w-full h-full object-contain" 
            src={`/video/${ProjectVideo[num_video]}`} 
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
        <div className='p-4 md:p-6 rounded-lg w-full mx-auto bg-black bg-opacity-80'>
          <h2 className='text-white text-lg md:text-xl mb-2 md:mb-4'>{ProjectName[num_title]}</h2>
          <p className='text-sm md:text-base'>
            {ProjectText[num_text]}
          </p>
        </div>
      </Modal>
    </div>
  );
}

export default Project;