import axios from 'axios';
const KEY = 'AIzaSyDHXwhhUHOZndarOhfA38enbaFG7qsfXQE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});