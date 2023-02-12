import React from 'react'

const Cover = ({ coverImage}) => {
    return (
        <div className='w-full h-[300px] rounded-md '>
            <img 
            src={coverImage} 
            alt='Cover' 
            className='w-full h-full object-cover rounded-md'
            />
        </div>
    )
}

export default Cover