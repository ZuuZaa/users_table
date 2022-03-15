import AXIOS from './index';

export const getUsers = () => AXIOS.get('users').then(res=> res.data);