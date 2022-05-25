import axios from 'axios';

const ghibliApi =  axios.create({
    baseURL: 'https://ghibliapi.herokuapp.com/',
    timeout: 1000,
});


export default ghibliApi;