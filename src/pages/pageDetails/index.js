import './styles.css';
import Navbar from '../../components/navbar'
import Leftbar from '../../components/home/leftBar'
import { useState } from 'react';
import Home from '../../components/pageDetails/home';
import PageHeader from '../../components/pageDetails/header';
import Posts from '../../components/pageDetails/posts';
import Photos from '../../components/profile/photos';
import Videos from '../../components/profile/videos';


const PageDetails = () => {
    const [currentTab , setCurrentTab ] = useState('Home');

    
    return (
        <div>
            <Navbar />
            <div className='profile-wrapper min-h-screen  margin flex gap-6 bg-light dark:bg-dark_primary pb-16'>
                <div className='profile-left'>
                    <Leftbar />
                </div>
                <div className='profile-container w-full py-4'>
                    <div className='profile flex flex-col  gap-4'>
                        <PageHeader 
                        currentTab={currentTab}
                        setCurrentTab={setCurrentTab}
                        />
                        <div className="profile-content">
                            {
                                currentTab === 'Home'
                                ? 
                                    <Home />
                                : 
                                currentTab === 'Posts'
                                ? 
                                   <Posts />
                                : 
                                currentTab === 'Photos'
                                ? 
                                   <Photos />
                                : 
                                currentTab === 'Videos'
                                ? 
                                   <Videos />
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

export default PageDetails;