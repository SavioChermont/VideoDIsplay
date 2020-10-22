import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelected}) => {
    const RenderedList = videos.map((video) => {
        return <VideoItem 
                    onVideoSelected={onVideoSelected} 
                    video={video}
                    key={video.id.videoId}
                />
    })
    return(
    <div className="ui relaxed divided list"> 
        {RenderedList} 
    </div>
    )
}

export default VideoList;