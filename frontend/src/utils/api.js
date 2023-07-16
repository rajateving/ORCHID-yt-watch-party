import axios from 'axios';

const BASE_URL="https://youtube138.p.rapidapi.com"
const options = {
    params: {hl: 'en',gl: 'US'},
    headers: {
      'X-RapidAPI-Key': '5804a9b103msh3ce19c2f4176200p199563jsn603dbe983492',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };

export const fetchDataApi=async(url)=>{
 const {data}=await axios.get(`${BASE_URL}/${url}`,options);
 return data;
}
