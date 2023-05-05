import React, { useEffect } from 'react'
 

const Breeds = () => {
  const options =  {
    method:'GET',
    url:'https://thedogapi.com/v1/breeds?limit=10',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'live_DIVH9Eo8hqRvAzAZKdPAdfXurfSafE0mjiYTOKJ4TzvWeDAplp707UDvN4spm8ko'
    }
  }
  const fetchData = async ()=>{
    const response = fetch(url,options);
    const data = await response.json();
    return data
  }
  useEffect(()=>{
    fetchData()
  })
  return (
    <div>
     
    </div>
  )
}

export default Breeds