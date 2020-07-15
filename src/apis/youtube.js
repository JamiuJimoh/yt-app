import axios from 'axios';

const KEY = 'AIzaSyDImkWsM9t6Gjc4h6dZMeIn7EGEJjW6bA4';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		type: 'video',
		maxResults: 5,
		key: KEY
	}
});
