import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://react-my-burger-70091.firebaseio.com/'
});

export default instance;