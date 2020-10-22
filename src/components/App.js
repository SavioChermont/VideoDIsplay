import React from 'react';
import SearchBar from './SearchBar.js';
import VideoList from './VideoList.js';
import Youtube from '../api/youtube.js'
import VideoDetail from './VideoDetail.js';

class App extends React.Component {
    state = {  videos: [], selectedVideo: null };

    componentDidMount(){
        this.searchTrending();
    }

    searchTrending = async () => {
        const response = await Youtube.get('/search', {
            params: {
                chart: 'mostPopular',
            }
        })

        this.setState({ 
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    }

    searchTerm = async (term) => {
        const response = await Youtube.get('/search', {
            params: {
                q: term,
            }
        })

        this.setState({ 
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    }

    onVideoSelected = (video) => {
        this.setState({selectedVideo:video});
    }

    render() { 
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.searchTerm}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelected={this.onVideoSelected} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
                    
            </div>
         );
    }
}
 
export default App;