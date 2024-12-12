import { useState, useEffect } from 'react';
import Home from './Utilities/Home';
import Me from './Utilities/Me';
import Project from './Utilities/Project';
import Contact from './Utilities/Contact';
// import MusicToggle from './Utilities/MusicToogle';

function Content() {
  const [content, setContent] = useState('home');


  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchProfileImage = async () => {
        try {
          const response = await fetch('https://api.github.com/users/4D4J');
          
          if (!response.ok) {
            throw new Error('Failed to fetch profile data');
          }
          
          const data = await response.json();
          setProfileImage(data.avatar_url);
        } catch (err) {
          setError('Unable to load profile image');
          console.error(err);
        }
      };
  
      fetchProfileImage();
    }, []);

  return (
    <div className="flex flex-col min-h-screen w-full overflow-y-auto items-center justify-center">
      {/* <MusicToggle/> */}
      
      <div className='h-[40em] w-[65em] max-w-[100vw] px-4 sm:px-0'>
        
      <div className='h-[4em] w-full flex items-center justify-between pb-[4em]'>
        <div className='flex w-[42.5em] flex justify-between'>
          <div className='h-[4em] w-[15.5em] flex items-center justify-evenly'>
            <p className='text-xl cursor-pointer hover:animate-[wiggle_0.30s_ease-in-out_infinite] ' onClick={() => setContent('home')}>Hello👋!</p>
            <hr className='border-white w-[4em] rotate-90'/>
          </div>

          <div className='h-[4em] w-[18em] flex justify-stretch flex-row px-1'>
            <div className='flex flex-row'>
              <div className='h-[4em] w-[4em] flex items-center justify-center'>
                <p className='text-lg hover:underline cursor-pointer' onClick={() => setContent('Me')}>Me</p>
              </div>
              <div className='h-[4em] w-[4em] flex items-center justify-center '>
                <p className='text-lg hover:underline cursor-pointer' onClick={() => setContent('Project')}>Project</p>
              </div>
              <div className='h-[4em] w-[4em] flex items-center justify-center mx-4'>
                <p className='text-lg hover:underline cursor-pointer' onClick={() => setContent('Contact')}>Contact</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className='mr-4'>
          {error && <div className="text-red-500">{error}</div>}
        
          { profileImage ? (
            <a href="https://github.com/4D4J" target='_blank'>
            <img 
              src={profileImage} 
              alt="GitHub profile" 
              className="w-[3.5em] h-[3.5em] rounded-full object-cover border-2 border-gray-200 shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
            />
            </a>
          ) : (
            // quand erreur du chargement de l'image, mettre le display en None pour avoir que le text de l'erreur !!!

            <div className="w-32 h-32 bg-gray-200 animate-pulse rounded-full"></div>
          )}
        </div>
      </div>

        <div className='h-[36em] w-full flex items-center justify-center border border-white rounded-lg'>
          {content === 'home' && <Home/>}
          {content === 'Me' && <Me/>}
          {content === 'Project' && <Project/>}
          {content === 'Contact' && <Contact/>}
        </div>
      </div>      
    </div>
  )
}


export default Content
