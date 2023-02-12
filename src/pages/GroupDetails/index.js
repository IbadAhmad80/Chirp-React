import './styles.css';
import Navbar from '../../components/navbar'
import Leftbar from '../../components/home/leftBar'
import { useState } from 'react';
import GroupHeader from '../../components/groupDetails/header';
import Featured from '../../components/groupDetails/featured';
import Events from '../../components/profile/events';
import Photos from '../../components/profile/photos';


const GroupDetails = () => {
    const [currentTab , setCurrentTab ] = useState('Featured');

    
    return (
        <div>
            <Navbar />
            <div className='profile-wrapper min-h-screen  margin flex gap-6 bg-light dark:bg-dark_primary pb-16'>
                <div className='profile-left'>
                    <Leftbar />
                </div>
                <div className='profile-container w-full py-4'>
                    <div className='profile flex flex-col  gap-4'>
                        <GroupHeader 
                        currentTab={currentTab}
                        setCurrentTab={setCurrentTab}
                        />
                        <div className="profile-content">
                            {
                                currentTab === 'Featured'
                                ? 
                                    <Featured />
                                : 
                                currentTab === 'Events'
                                ? 
                                    <Events />
                                :
                                currentTab === 'Photos'
                                ? 
                                    <Photos />
                                :
                                    ''
                            }
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    )
}

export default GroupDetails;