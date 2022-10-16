import React,{useState} from 'react'
import './EventCard.css'
import { Fade } from 'react-awesome-reveal'
import Modal from '../Modal/Modal'


const EventCard = ({
    data
  }) => {
    const[openModal,setOpenModal]= useState(false);
    const modal =()=>{
      setOpenModal(true);
    }
  return (
    <>
    <Fade>
        <div className='event-card'>      
                    <img src={data.image} alt='img'className='icon'></img>
                    <div className='event-card-bot'>
                    <h3 className='event-card-name'>{data.name}</h3>
                    <p>{data.smallDesc}<br></br><br></br> <span style={{paddingRight: "0px", color: "red"}}>{data.faqUpdate}</span></p>
                    {/* <span>{data.faqUpdate}</span> */}
                    <span>{data.date}</span>
                    <button className='button-62' onClick={modal}>Details</button>
                    </div>
                </div>
                </Fade>
                {
                  openModal && <Modal data={data}  closeModal={setOpenModal}/>
                }
                </>
   
  )
}

export default EventCard