import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrochip } from '@fortawesome/free-solid-svg-icons';

function Me(){
  return (
      <div className="h-full w-full flex flex-col items-center justify-center p-4 sm:p-8 overflow-y-auto">
          <h1 className="text-left text-lg sm:text-2xl font-bold mb-4 w-full">Ih ! I'm Nathan and i'm passionate about IT and cybersecurity.</h1>
          <h2 className="text-left text-base sm:text-xl font-semibold mb-2 w-full">My skills include:</h2>
          <ul className="text-left list-disc list-inside space-y-2 w-full">
            <li className="text-sm sm:text-lg">
              <span className="font-semibold">Identity:</span> I'm 18 and I've been tinkering with computers since I was 13. I love the web and hardware.  
            </li>
            <li className="text-sm sm:text-lg">
              <span className="font-semibold">Skills:</span>
              <ul className="list-disc list-inside ml-3 sm:ml-6 space-y-1">
                <li>Programming languages: Web language (favorite), Python, JavaScript, C, etc. ‎  
                  <i className="devicon-html5-plain colored"> </i>
                  <i className="devicon-python-plain colored"> </i>
                  <i className="devicon-javascript-plain colored"> </i>
                </li>
                <li>Cybersecurity Skills: Web pentesting, Osint, Social Engineering. ‎ 
                  <FontAwesomeIcon icon={faMicrochip} />
                </li>
                <li>Web development and UI/UX using modern frameworks. ‎ 
                  <i className="devicon-react-original colored"></i>
                </li>
              </ul>
            </li>
            <li className="text-sm sm:text-lg">
              <span className="font-semibold">Hobbies: </span> I love creating projects in any field, such as websites, pentest tools and hardware in general
            </li>
          </ul>
        </div>
  )
}

export default Me;