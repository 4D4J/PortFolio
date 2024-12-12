import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrochip } from '@fortawesome/free-solid-svg-icons';

function Me(){
  return (
      <div className="h-full w-full flex flex-col items-center justify-center p-4 sm:p-8">
          <h1 className="text-left text-xl sm:text-2xl font-bold mb-4 w-full">I'm Nathan and i'm a passionate individual in the field of technology and cybersecurity</h1>
          <h2 className="text-left text-lg sm:text-xl font-semibold mb-2 w-full">My core skills include:</h2>
          <ul className="text-left list-disc list-inside space-y-2 w-full">
            <li className="text-base sm:text-lg">
              <span className="font-semibold">Identity:</span> Aspiring tech professional with a keen interest in cybersecurity, programming, and hardware projects.
            </li>
            <li className="text-base sm:text-lg">
              <span className="font-semibold">Skills:</span>
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li>Programming languages: Web language (favorite), Python, JavaScript, C, etc. ‎  
                  <i className="devicon-html5-plain colored"> </i>
                  <i className="devicon-python-plain colored"> </i>
                  <i className="devicon-javascript-plain colored"> </i>
                </li>
                <li>Cybersecurity expertise: Network analysis, ethical hacking, and protocol exploitation. ‎ 
                  <FontAwesomeIcon icon={faMicrochip} />
                </li>
                <li>Web development and UI/UX using modern frameworks. ‎ 
                  <i className="devicon-react-original colored"></i>
                </li>
              </ul>
            </li>
            <li className="text-base sm:text-lg">
              <span className="font-semibold">Hobbies:</span> Creating projects that bridge software and hardware, such as cybersecurity tools and creative websites. And I like sports, I've played 7 years of handball.
            </li>
          </ul>
        </div>
  )
}

export default Me;