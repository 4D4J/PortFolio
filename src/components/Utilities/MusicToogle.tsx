import { useState, useRef } from 'react';
import { Music, MicOff } from 'lucide-react';

function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLIFrameElement>(null);

  const toggleMusic = () => {
    if (videoRef.current) {
      const player = videoRef.current;
      if (isPlaying) {
        player.contentWindow?.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
      } else {
        player.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      }
    }
    setIsPlaying(!isPlaying);
  };

  document.onloadeddata = () => {
    toggleMusic();
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center">
      <iframe 
        ref={videoRef}
        width="0" 
        height="0" 
        src="https://www.youtube.com/embed/jfKfPfyJRdk?enablejsapi=1&autoplay=0&controls=0" 
        title="Lofi Girl Livestream"
        allow="autoplay; encrypted-media"
      />
      <button 
        onClick={toggleMusic} 
        className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all duration-300"
      >
        {isPlaying ? <MicOff color="white" /> : <Music color="white" />}
      </button>
    </div>
    
  );
}

export default MusicToggle;