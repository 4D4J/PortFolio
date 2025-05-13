import { useState, useEffect } from 'react';
import Home from './Utilities/Home';
import Me from './Utilities/Me';
import Project from './Utilities/Project';
import Contact from './Utilities/Contact';

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
      
      <div className='h-auto max-h-full md:h-[40em] w-full md:w-[65em] max-w-[100vw] px-4 sm:px-0'>
        
      <div className='flex flex-col md:flex-row md:h-[4em] w-full md:items-center justify-between pb-2 md:pb-[4em]'>
        <div className='flex flex-col md:flex-row md:w-[42.5em] justify-between'>
          <div className='h-[3em] md:h-[4em] md:w-[15.5em] flex items-center justify-center md:justify-evenly'>
            <p className='text-xl cursor-pointer hover:animate-[wiggle_0.30s_ease-in-out_infinite] ' onClick={() => setContent('home')}>Hello👋!</p>
            <hr className='hidden md:block border-white w-[4em] rotate-90'/>
          </div>

          <div className='h-[3em] md:h-[4em] md:w-[18em] flex justify-around md:justify-stretch flex-row px-1'>
            <div className='flex w-full flex-row space-x-6 justify-evenly md:space-x-0'>
              <div className='h-[3em] md:h-[4em] w-[4em] flex items-center justify-center'>
                <p className='text-lg hover:underline cursor-pointer' onClick={() => setContent('Me')}>Me</p>
              </div>
              <div className='h-[3em] md:h-[4em] w-[4em] flex items-center justify-center '>
                <p className='text-lg hover:underline cursor-pointer' onClick={() => setContent('Project')}>Project</p>
              </div>
              <div className='h-[3em] md:h-[4em] w-[4em] flex items-center justify-center'>
                <p className='text-lg hover:underline cursor-pointer' onClick={() => setContent('Contact')}>Contact</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className='self-center md:self-auto md:mr-4 mt-4 md:mt-0'>
          {error && <div className="text-red-500">{error}</div>}
        
          { profileImage ? (
            <a href="https://github.com/4D4J" target='_blank'>
            <img 
              src={profileImage} 
              alt="GitHub profile" 
              className="w-[3em] md:w-[3.5em] h-[3em] md:h-[3.5em] rounded-full object-cover border-2 border-gray-200 shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
            />
            </a>
          ) : (
            <div className="w-0 h-0 bg-gray-200 animate-pulse rounded-full none"></div>
          )}
        </div>
      </div>

        <div className='h-[75vh] md:h-[36em] w-full flex items-center justify-center border border-white rounded-lg'>
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
