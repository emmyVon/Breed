import {useEffect, useState} from 'react'
import { persona } from '../Assets/data'

const Appointment = () => {
    const[reminder,setReminder] = useState({
        show:false,
        msg:''
    })
    useEffect(()=>{
        const alert = setInterval(() => {
        showAlert(true,'this is it')
        setTimeout(()=>{
            showAlert()
        },1000)
            
        },4*7*24*60*60*1000)
        return ()=>clearInterval(alert);
       

    },[])
    
    const showAlert = (show=false,msg='')=>{
        setReminder({show,msg})
    }
    
  return (
    <div>
       {/* <p>{reminder.msg}</p> */}
       <div className='vet-container'>
       {
        persona.map(vet=>{
            const{id,image,Name,Age} = vet
            return(
                
                <article key={id} className='vet-section'>
                    <div>
                    <img src={image} alt="img" />
                    <div>
                    <h2>{Name}</h2>
                    <p>{Age}</p>
                    </div>
                    </div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius quaerat harum omnis rerum dolor dolorem fuga aliquam dolore! Esse sequi obcaecati architecto mollitia placeat quia doloremque corrupti consectetur veritatis maxime.</p>
                </article>
                
            )
        })
       }
       </div> 

    </div>
  )
}

export default Appointment