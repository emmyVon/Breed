import {useEffect, useState} from 'react'

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
    <div className='alert'>
       <p>{reminder.msg}</p>
    </div>
  )
}

export default Appointment