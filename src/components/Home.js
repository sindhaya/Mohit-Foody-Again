import React,{useEffect,useState} from 'react'
import Common from '../Common'


const Home = () => {
  const[message,setMessage]=useState('')

  const newTime = new Date().toLocaleTimeString()

  useEffect(()=>{
    setTimeout(()=>{
      setMessage("Welcome To Mohit Foody, Are U Hungry,Order Now ")
      setInterval(()=> {
        setMessage("Delicious Food At ")
      },5000)
    },2000)
  },[message])


  return (
    <div>
      <Common
        name={message}
        imgsrc="https://media.istockphoto.com/id/860618580/photo/glass-of-rose-wine-on-rustic-table.jpg?s=612x612&w=0&k=20&c=hdHftBhh8_YlsdkZubqIgEa0FYUutPwAVJFTfJd4Rfo="
        visit="/aboutus"
        btname="Get Started" />
      <div className='apptime'>
      {newTime}
      </div>
    </div>
  )
}

export default Home