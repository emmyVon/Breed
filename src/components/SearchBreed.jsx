import React from 'react'
import { useSearchParams } from 'react-router-dom';

const SearchBreed = () => {
    const[search,setSearch] = useSearchParams()
  return (
    <div>
        <form >
          <input type="text" name='search' placeholder='search a breed here' value={search} onChange={(e)=>setSearch(e.target.value, {replace:true})}/>
        </form>
    </div>
  )
}

export default SearchBreed