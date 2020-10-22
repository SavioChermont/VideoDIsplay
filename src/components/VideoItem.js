import React from 'react';
import '../css/VideoItem.css';

const VideoList = ({video}) => {
    return ( 
        <div className="item">
            <img className="ui image" src={video.snippet.thumbnails.medium.url} alt="thumb"/>
            <div className="content">
                <div className="header"> {video.snippet.title} </div>
            </div>
            
        </div> 
    );
}
 
export default VideoList;