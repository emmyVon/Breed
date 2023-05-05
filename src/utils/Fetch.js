
   export  const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key':'335307f7bbmshac293af0e22429ap12c147jsn302a3f4b92b2',
    'X-RapidAPI-Host': 'dog-breeds2.p.rapidapi.com'
  },
   url: 'https://dog-breeds2.p.rapidapi.com/dog_breeds/1',
};


export const fetchData = async(url,option)=>{
    const response = await fetch(url,option);
    const data = await response.json();

    return data
}
//  process.env.REACT_APP_RAPID_API_KEY

