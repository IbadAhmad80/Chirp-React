import React, { useRef } from 'react'
import { AddImage } from '../../svgs'

const Media = () => {
    const coverRef = useRef(null);
    const profileRef = useRef(null);
    const handleCoverClick = () => {
        coverRef?.current?.click();
    }
    const handleProfileClick = () => {
        profileRef.current?.click();
    }
    return (
        <div className='flex flex-col gap-4 py-2'>
            <div className='flex flex-col gap-4  addScroll h-[350px] overflow-auto'>
                <div onClick={handleCoverClick} className='cursor-pointer'>   
                    <span className='text-dark font-semibold dark:text-light'>Cover Photo</span>
                    <div className='w-full h-[150px] bg-light dark:bg-dark_primary border border-transparent hover:border-primary rounded-lg flex items-center justify-center mt-2'>
                        <input type="file" hidden ref={coverRef}/>
                        <div className='border border-primary dark:border-gray-400 rounded-md flex items-center justify-center p-2 gap-2'>
                            <div className="small-svg-2">
                                <AddImage />
                            </div>
                            <span className='text-primary text-sm dark:text-gray-200'>Upload cover Photo</span>
                        </div>
                    </div>
                </div>
                <div onClick={handleProfileClick} className='cursor-pointer'>   
                    <span className='text-dark font-semibold dark:text-light'>Profile Photo</span>
                    <div className='w-full h-[150px] bg-light rounded-lg flex items-center justify-center mt-2 dark:bg-dark_primary border border-transparent hover:border-primary '>
                        <input type="file" hidden ref={profileRef}/>
                        <div className='border border-primary dark:border-gray-400 rounded-md flex items-center justify-center p-2 gap-2'>
                            <div className="small-svg-2">
                                <AddImage />
                            </div>
                            <span className='text-primary text-sm dark:text-gray-200'>Upload Profile Photo</span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <button className="btn-primary w-full">
                    Continue
                </button>
            </div>
        </div>
    )
}

export default Media