import React from 'react'
import Appointment from './Appointment'

const Userprofile = () => {
  return (
    <div>
      <div className="profile-balance">
        <h3 className="available-balance">$100</h3>
        <button>Add cASH</button>
        <button>WithDraw</button>
      </div>
      <div className="profile-info">
        <p>name: emmanuel obiezuo</p>
        <p>Address: UNILAG akoka yaba</p>
        <p>memberId: Emmao234</p>
        <p>Date joined: 16 15 2002</p>
        <p>plan: senior</p>
      </div>
      <div className="dog-info">
        <h1>Dog Info</h1>
        <p>name:Rex</p>
        <p>breed:Causian</p>
        <p>Age:1 month</p>
        <p>color:Golden brown</p>
        {/* to be updated every vet visit */}
        <p>weight:50kg </p> 
        <p>pedigree:2 sons:fled&grey</p>
        <div className="sickness-history">
          <h1>sickness history</h1>
          <ul>
            <li>anemaia</li>
            <li>lice</li>
          </ul>
        </div>
      </div>
      <Profileinfo/> 
      <Balance/>
      <Doginfoandhealthcare/>
      <Appointment/>
      <MemorylaneandPedigree/>
    </div>
  )
}

export default Userprofile