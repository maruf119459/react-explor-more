import { useState, useEffect } from 'react';
import axios from 'axios';
import { AiOutlineYoutube } from "react-icons/ai";

const Axios = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/videos/category/1000') // axios 1st  step ei API theke prapto data ke json e convert kore fele tai 2nd step e data gulo ke set kora jay
            // axios json data ke axios er data object er modhe rakhe . "response.data.data" eikhane 1st data holo axios er object data & 2nd data holo json er data.
            // Set fetched data to state
            .then(response => {
                console.log(response.data.data);
                setVideos(response.data.data)
            });
    }, []);

    /*
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/videos/category/1000')          
            .then(response => JSON(response))
            .then(dataValu => {
                setVideos(dataValu.data)
            });
    }, []);

    fetch er 3 step.
    */


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
