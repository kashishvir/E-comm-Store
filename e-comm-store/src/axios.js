import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001/e-comm-store-2bba5/us-central1/app' //API(cloud function) URL
});

export default instance;