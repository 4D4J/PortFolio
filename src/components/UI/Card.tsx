import React from 'react';

interface CardProps {
    title: string;
    description: string;
    videoUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, videoUrl }) => {
    return (
        <div className='w-[300px] h-[400px] flex flex-col items-center justify-around border border-white rounded-lg'>
                <video width="300" height="200">
                    <source src={videoUrl} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <div className="card-content flex flex-col items-center justify-around">
                    <h2 className="card-title">{title}</h2>
                    <p className="card-description">{description}</p>
                </div>
        </div>
    );
};

export default Card;