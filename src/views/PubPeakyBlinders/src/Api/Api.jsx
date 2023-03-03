import axios from 'axios';

const Api = axios.create({
    // baseURL: "https://pubresiliajson.onrender.com/"
    baseURL:"http://localhost:4200/"
});

export default Api;