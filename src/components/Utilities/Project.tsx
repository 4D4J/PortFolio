import { useState, useEffect} from 'react';
import Modal from 'react-modal';

const Project = () => {
  const ProjectName = ['MindMapper ', 'Muzikae ', 'BS Studio '];
  const ProjectVideo = ['vid_mindmapper.mkv', 'vid_muzikae.mp4', 'vid_bsstudio.mp4'];
  const ProjectText = [
    'MindMapper is a web application that allows you to create mind maps. It is a tool that helps you to organize your ideas and thoughts visually. you can share your mind maps with others and collaborate in real-time.',
    'Muzikae is a discord bot that allows you to listen to music with your friends. You can create a room and invite your friends to listen to music together. You can also create a playlist and queue songs. Using reaction and not commands.',
    'BS Studio is a website showing the work of two shoe designers, they create their own nike sneakers. they take nike shoe soles and create the whole shoe from scratch with an extraordinary level of finishing.  '
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
        setNumText((prev) => (prev + 1) % 3);
        setNumTitle((prev) => (prev + 1) % 3);
        setNumVideo((prev) => (prev + 1) % 3);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-4 sm:p-8">
      <div className="mb-5">
        <h2 className='text-lg'>Check out my latest projects :</h2>
        <p className='text-xs'>Press Space to change project</p>
      </div>
      <div className='w-full h-[400px] flex flex-col items-center justify-around'>
        <div 
          className="w-full flex flex-row items-center justify-center mb-2.5 cursor-pointer" 
          onClick={openModal}
        >
          <p className=''>{ProjectName[num_title]}</p>
          <img 
            src="/src/assets/info_icon.svg" 
            alt="Info" 
            className="ml-2" 
          />
        </div>
        <div className="w-full h-[400px]">
          <video 
            className="w-full h-[400px]" 
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
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 outline-none"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
        ariaHideApp={false}
      >
        <div className='p-6 rounded-lg max-w-md w-full mx-auto'>
          <h2 className='text-white text-xl mb-4'>{ProjectName[num_title]}</h2>
          <p>
            {ProjectText[num_text]}
          </p>
        </div>
      </Modal>
    </div>
  );
}

export default Project;