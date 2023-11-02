import React,{useState} from 'react'
import './StarRating.css'

function StarRating({limit,rating}) {

    const[selectedRating, setSelectedRating] = useState(rating)

    const selectStar = (idex ) => {
        setSelectedRating(idex + 1)
    }

    return (
        <div>
           {
               [...new Array(limit)].map((ele,id) => {
                   return (
                       <>
                           <span 
                            key={id}
                            onMouseEnter = {() => setSelectedRating(id+1)}
                            onClick = {()=>selectStar(id)}
                            className= { id< selectedRating ? "selected" : "not-selected"  }
                            >
                                
                            </span>
                       </>
               )
               })
           }
             <p>Your rating is {selectedRating}</p>
        </div>
    )
}

export default StarRating
