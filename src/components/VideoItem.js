import React from 'react';
import '../css/VideoItem.css';

const VideoList = ({video, onVideoSelected}) => {
    return ( 
        <div 
            onClick={() => onVideoSelected(video)}
            className="video-item item"
        >

            <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
            <div className="content">
                <div className="header"> 
                    {video.snippet.title} 
                </div>
            </div>
            
        </div> 
    );
}
 
export default VideoList;