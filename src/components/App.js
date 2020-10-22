import React from 'react';
import SearchBar from './SearchBar.js';
import VideoList from './VideoList.js';
import Youtube from '../api/youtube.js'

class App extends React.Component {
    state = {  videos: [] }

    searchTerm = async (term) => {
        const response = await Youtube.get('/search', {
            params: {
                q: term
            }
        })

        this.setState({ videos: response.data.items})
    }

    render() { 
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.searchTerm}/>
                <VideoList videos={this.state.videos}/>
            </div>
         );
    }
}
 
export default App;