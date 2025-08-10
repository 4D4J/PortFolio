import styled from "styled-components"
import usePageTitle from '../../hooks/usePageTitle';

function Home(){
  usePageTitle({ 
    title: 'Accueil', 
    description: 'Bienvenue sur le portfolio de Nathan Auvray (Rapido), développeur web et étudiant en cybersécurité. Explorez mes projets et compétences.' 
  });
  
    return (
        <div className="flex flex-col items-center justify-center h-full w-full">
            <div>
                <StyledShining>
                    <p>Welcome to my Portfolio</p><p className="custom-text-size text-[15px]">I'm Nathan aka Rapido</p>
                </StyledShining>
            </div>
        </div>
    )
}

const StyledShining = styled.div`
    p {
        font-weight: 700;
        text-align: center;
        font-size: 40px;
        font-family: Hack, sans-serif;
        text-transform: uppercase;
        color: #fff;
        letter-spacing: 5px;
        position: relative;
        animation: fadeIn 2s ease-in-out 1s forwards;
    }

    p.custom-text-size {
        font-size: 20px;
        letter-spacing: 2px;
        margin-top: 5px;
        animation: fadeIn 3s ease-in-out 1s forwards;
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes pulse {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.05);
        }
        100% {
            transform: scale(1);
        }
    }


`

export default Home