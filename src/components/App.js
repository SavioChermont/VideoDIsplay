import React from 'react';
import SearchBar from './SearchBar.js';
import VideoList from './VideoList.js';
import Youtube from '../api/youtube.js'
import VideoDetail from './VideoDetail.js';

class App extends React.Component {
    state = {  videos: [], selectedVideo: null }

    searchTerm = async (term) => {
        const response = await Youtube.get('/search', {
            params: {
                q: term
            }
        })

        this.setState({ videos: response.data.items})
    }

    onVideoSelected = (video) => {
        this.setState({selectedVideo:video});
    }

    render() { 
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.searchTerm}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList onVideoSelected={this.onVideoSelected} videos={this.state.videos}/>
            </div>
         );
    }
}
 
export default App;