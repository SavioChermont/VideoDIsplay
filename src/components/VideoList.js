import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos}) => {
    const RenderedList = videos.map((video) => {
        return <VideoItem />
    })
    return(
    <div> {RenderedList} </div>
    )
}

export default VideoList;