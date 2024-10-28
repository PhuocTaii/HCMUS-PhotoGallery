import axios from 'axios'


axios.defaults.baseURL = import.meta.env.VITE_UNSPLASH_URL;
axios.defaults.headers.common['Authorization'] = `Client-ID ${import.meta.env.VITE_ACCESS_KEY}`;

export default axios