
import usePageTitle from '../../hooks/usePageTitle';

function Me(){
  usePageTitle({ 
    title: 'À propos de moi', 
    description: 'Découvrez Nathan Auvray (Rapido), développeur passionné de 18 ans étudiant en cybersécurité, développement web et hardware hacking.' 
  });

  return (
      <div className="h-full w-full flex flex-col items-center justify-center p-4 sm:p-8 overflow-y-auto">
        <h1 className="text-left text-lg sm:text-2xl font-bold mb-4 w-full">
          Hi! I'm <span className="text-blue-500">Nathan aka Rapido</span>, passionate about IT, cybersecurity, and everything in between.
        </h1>

        <h2 className="text-left text-base sm:text-xl font-semibold mb-2 w-full">About me:</h2>
        <ul className="text-left list-disc list-inside space-y-2 w-full">
          <li className="text-sm sm:text-lg">
            <span className="font-semibold">Who I am:</span> I'm 18 years old and have been exploring the world of computers since I was 13. From software to hardware, I love building and experimenting with tech.
          </li>

          <li className="text-sm sm:text-lg">
            <span className="font-semibold">Skills:</span>
            <ul className="list-disc list-inside ml-3 sm:ml-6 space-y-1">
              <li>
                Programming languages: <b>HTML/CSS</b>, <b>JavaScript</b>, <b>Python</b>, <b>Java</b>, <b>C/C++</b>, and more.
              </li>
              <li>
                Cybersecurity: <b>Web pentesting</b>, <b>Osint</b>, <b>Forensics</b>, <b>Hardware</b>.
              </li>
              <li>
                <b>UI/UX</b> design and modern frameworks like <b>React</b>.
              </li>
            </ul>
          </li>

          <li className="text-sm sm:text-lg">
            <span className="font-semibold">Hobbies:</span> I enjoy creating and experimenting with a wide range of projects, from websites and pentesting tools to electronics and hardware hacks.
          </li>
        </ul>
      </div>
  )
}

export default Me;