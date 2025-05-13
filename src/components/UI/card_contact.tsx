import styled from 'styled-components';


const StyledCard = styled.div`
  .card {
    display: flex;
    height: 100px;
    width: 300px;
  }

  @media (max-width: 640px) {
    .card {
      width: 240px;
      height: 80px;
      justify-content: space-between;
    }
  }

  .card svg {
    position: absolute;
    display: flex;
    width: 60%;
    height: 100%;
    font-size: 24px;
    font-weight: 700;
    opacity: 1;
    transition: opacity 0.25s;
    z-index: 2;
    cursor: pointer;
  }

  .card .social-link1,.card .social-link2,.card .social-link3, {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 24px;
    text-decoration: none;
    transition: 0.25s;
    border-radius: 50px;
  }

  @media (max-width: 640px) {
    .card .social-link1,
    .card .social-link2,
    .card .social-link3 {
      width: 50px !important;
      height: 50px !important;
    }
  }

  .card svg {
    transform: scale(1);
  }

  .card .social-link1:hover {
    background-color: #1a1e22;
    animation: bounce_613 0.4s linear;
  }

  .card .social-link2:hover {
    background-color: #c13584;
    animation: bounce_613 0.4s linear;
  }

  .card .social-link3:hover {
    background-color: #0059f7;
    animation: bounce_613 0.4s linear;
  }

  @keyframes bounce_613 {
    40% {
      transform: scale(1.4);
    }

    60% {
      transform: scale(0.8);
    }

    80% {
      transform: scale(1.2);
    }

    100% {
      transform: scale(1);
    }
  }`;

const Card_Contact = () => {
  return (
    <StyledCard>
      <div className="card flex items-center justify-around">
        <a className="social-link1 w-[60px] h-[60px]" href='https://github.com/4D4J' target='_blank'>
        <svg xmlns="" fill="#fff" height="1em" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
        </a>
        <a className="social-link2 w-[60px] h-[60px]" href='mailto:nathan.auvray60@gmail.com' target='_blank'>
            <svg height="48px" viewBox="0 0 48 48" width="48px" xmlns=""><path d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z" fill="#4caf50"/><path d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z" fill="#1e88e5"/><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"/><path d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z" fill="#c62828"/><path d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z" fill="#fbc02d"/></svg>
        </a>
        <a className="social-link3 w-[60px] h-[60px]" href='https://www.linkedin.com/in/nathan-auvray-24274b330/' target='_blank'>
            <svg xmlns="" fill="#fff" height="1em" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zm-46.14-340.6C24.28 107.4 0 83.12 0 53.57 0 24.28 24.28 0 54.14 0s54.14 24.28 54.14 53.57c0 29.55-24.28 53.83-54.14 53.83zM447.9 448h-92.68V302.4c0-34.7-12.48-58.4-43.68-58.4-23.82 0-38.02 16.02-44.28 31.4-2.28 5.5-2.82 13.2-2.82 20.9V448h-92.68s1.22-241.4 0-266.1h92.68v37.7c-0.18 0.3-0.42 0.6-0.6 0.9h0.6v-0.9c12.32-19 34.32-46.1 83.48-46.1 60.92 0 106.48 39.7 106.48 125.1V448z"/></svg>
        </a>
      </div>
    </StyledCard>
  );
}


export default Card_Contact;
