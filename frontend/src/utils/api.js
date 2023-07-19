import axios from 'axios';

const BASE_URL="https://youtube138.p.rapidapi.com"
const options = {
    params: {hl: 'en',gl: 'US'},
    headers: {
      'X-RapidAPI-Key': '64e097dae2msh3b34f10c3efe9e2p1a3b3bjsne79f6826406d',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };

export const fetchDataApi=async(url)=>{
 const {data}=await axios.get(`${BASE_URL}/${url}`,options);
 return data;
}
