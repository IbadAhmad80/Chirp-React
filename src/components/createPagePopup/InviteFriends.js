import React, { useContext , useState } from 'react'
import { Search } from '../../svgs';
import { userData } from '../../data/User';
import InviteFriendItem from './InviteFriendItem';
import { PopupContext } from '../../context/popupContext';

const InviteFriends = () => {
    const { setCreatePageView } = useContext(PopupContext)
    const [search , setSearch] = useState('');

   

    return (
        <div className='w-full py-4 flex flex-col items-center justify-center gap-4' >
            <div className="border border-gray-200 dark:border-gray-400 bg-light dark:bg-dark_primary filter-svg rounded-full py-1.5 px-3 text-base flex items-center w-[90%] sm:w-[80%] gap-3">
                <Search />
                <input 
                className="bg-transparent border-none outline-none w-full sm:w-[85%] text-sm sm:text-base dark:text-gray-200"
                type="text" 
                placeholder='Start typing to search..' 
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
                />
            </div> 
            <div className='sm:w-[80%] w-[90%] shadow-2 rounded-lg sm:p-3 p-2 flex flex-col gap-4 addScroll overflow-auto h-[300px]'>
                <div className='flex items-center justify-between'> 
                    <h3 className='text-dark dark:text-light font-semibold text-base'>
                        Suggested
                    </h3>
                    <div className='flex items-center gap-1.5'>
                        <label className='text-sm text-secondary dark:text-gray-200' htmlFor="selectAll">Select All</label>
                        <input
                        type="checkbox"
                        name="selectAll"
                        id="selectAll"
                        />
                    </div>
                </div>
                <div className='w-full flex flex-col gap-4 '>
                {
                    userData.map((user, i) => (
                        <InviteFriendItem user={user} />
                    ))
                }
                </div>
            </div>
            <div className='sm:w-[80%] w-[90%]'>
                <button className="btn-primary w-full"
                onClick={() => setCreatePageView('media')}>
                    Continue
                </button>
            </div>
        </div>
    )
}

export default InviteFriends