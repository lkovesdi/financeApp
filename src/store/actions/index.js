import { FETCH_GITHUB_DATA } from './types';
import axios from 'axios';
import { host } from '../../config/api_config';

export const fetchGithubData = () => {
   return (dispatch) => {
      const apiUrl = 'https://api.github.com/users/rrozema12';

      return axios.get(apiUrl)
         .then(response => {
            dispatch({
               type: FETCH_GITHUB_DATA,
               data: response.data
            })
         })
         .catch(error => {
            throw(error);
         });
   };
};