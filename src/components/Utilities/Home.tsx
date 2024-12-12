import styled from "styled-components"



function Home(){
  
    return (
        <div className="flex flex-col items-center justify-center h-full w-full">

            <div>
                <StyledShining>
                    <p>Welcome to my PorteFolio: <br/><a href="https://github.com/4D4J" target='_blank'>github.com/4D4J</a></p>
                </StyledShining>
            </div>

        </div>
    )
}

const StyledShining = styled.div`
    a {
        text-decoration: none;
        color: inherit;
        font-size: 24px;
    }

    p {
        font-weight: 700;
        text-align: center;
        font-size: 40px;
        font-family: Hack, sans-serif;
        text-transform: uppercase;
        background: linear-gradient(90deg, #000, #fff, #000);
        letter-spacing: 5px;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        background-repeat: no-repeat;
        background-size: 80%;
        animation: shine 6s linear infinite;
        position: relative;
    }

    @keyframes shine {
        0% {
            background-position-x: -500%;
        }
        100% {
            background-position-x: 500%;
        }
    }


`

export default Home