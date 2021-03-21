import React from 'react'


const Character = ({item}) => {
    return (
        <div className="image-container">

            <img src ={item.img} alt=''  />
            <p>{item.name}</p>
            
            
        </div>
    )
}

export default Character
