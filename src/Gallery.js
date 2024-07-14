import React from 'react';
import {useState, useEffect } from 'react';
import './Gallery.css';

import {Link} from "react-router-dom";
import axios from "axios";

function Gallery() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        async function fetchVideos() {
            try {
                const response = await axios.get('http://localhost:3000/gallery');
                console.log('Response:', response.data);
                setVideos(response.data);
            } catch (error) {
                console.error('Error fetching videos:', error);
            }
        }

        fetchVideos();
    }, []);

    return (
        <div className="main-container">
            <Link to="/" className="home-ink">
                <button className="home-button">Home Page</button>
            </Link>
            <h1 className="h2">Gallery Page</h1>
            <div className="video-list">
            {videos.length > 0 ? (
                <div>
                    {videos.map(video => (
                        <div key={video.id} className="video-item">
                            <video controls width="500">
                                <source src={video.url} type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                            <p>Video name: {video.name}</p>
                            <p>Description: {video.description}</p>
                            <p>Date: {video.date}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="p"> No videos uploaded yet </p>
            )}
            </div>
        </div>
    );
}

export default Gallery;
