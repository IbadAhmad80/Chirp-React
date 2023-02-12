import React, { useEffect, useRef } from 'react'

const TextStory = () => {
    const textRef = useRef(null);

    useEffect(() => {
        textRef?.current?.focus();
    }, [])
    return (
        <div className='w-full h-[400px] flex items-center justify-center'>
            <div className='bg-[#5843BE] rounded-lg py-4 px-2 w-[250px] h-[400px] flex items-center justify-center'>
                <textarea 
                className='resize-none text-base text-pure bg-transparent outline-none border-none placeholder:text-white'
                placeholder='Write a text here...'
                ref={textRef}
                />
            </div>
        </div>
    )
}

export default TextStory