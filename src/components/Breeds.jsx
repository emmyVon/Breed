import React from 'react'

const Breeds = () => {
  return (
    <div>
         breeds.map(({ img, breed, weight,minLifeSpan,id,breedDescription }) => {
              return (
                <article key={id} className='services_item'>
                  <div>
                    <img src={img} alt="" className='services_image' />
                  </div>
                  <div className="client_info grid">
                    <h3>{breed}</h3>
                    <h4>{`weight: ${weight}`}</h4>
                    {/* <p>{breedDescription}</p> */}
                  </div>

                </article>
              )
            })
    </div>
  )
}

export default Breeds