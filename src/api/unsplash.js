import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 1324018ce4b01b3918a2183fcd8c3b0e8f884d7c23cf6040df73bc353599a10e'
    } 
});