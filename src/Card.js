import React from 'react'
// import { NavLink } from 'react-router-dom'
// import { useState } from 'react'

const Card = (props) => {
    // const[subData,setSubData]=useState({})

   

    return (
        <div>
            <div className='col-md-4 col-10 mx-auto'>
                <div className="card" >
                <span>{props.id}</span>
                    <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">{props.title}</h5>
                        <p className="card-text">Delicious food at Mohit Foody Restaurent, Try It.</p>
                        <button onClick={props.onOrder} className="btn btn-primary">Order Now</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Card;
// to="https://www.swiggy.com/" 