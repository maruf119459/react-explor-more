import  { useState, useEffect } from 'react';
import axios from 'axios';
import { AiOutlineYoutube } from "react-icons/ai";

const Axios = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {        
                axios.get('https://openapi.programming-hero.com/api/videos/category/1000')
                // Set fetched data to state
                .then(response => {
                    console.log(response.data.data);
                    setVideos(response.data.data)}); 
    }, []); 
    

    return (
        <div>
            <h1>Video List</h1>
            <ul>
                {videos.map((video, index) => (
                    <li key={index}>
                        <p> <AiOutlineYoutube className='text-3xl' />Title: {video.title}</p>
                        
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Axios;
