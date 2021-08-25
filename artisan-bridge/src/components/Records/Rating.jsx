import React from "react";
import { FaStar } from "react-icons/fa";
import "./rating.css";
import { useState } from "react";


export default function Star(){
  
    const[rating, setRating]=useState(null); 
    const[hover, setHover]=useState(null) 

    return(
        <div>
        {[...Array(5)].map((star, i)=>{
            const ratingValue= i+1;
            return <label>
                <input type="radio" name="rating" value={ratingValue}
                 onClick={()=>(setRating(ratingValue))}/>
                <FaStar size={30} color={ ratingValue <= (hover||rating) ? "#f59401":"#e4e5e5"} onMouseEnter={()=>(setHover(ratingValue))}
                 onMouseLeave={()=>(setHover(null))}/>
                </label>
        })}    
        </div>

    )

};
