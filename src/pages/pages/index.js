import { useContext, useState } from 'react';
import Leftbar from '../../components/home/leftBar';
import Navbar from '../../components/navbar';
import SearchHeader from '../../components/searchHeader';
import { PopupContext } from '../../context/popupContext';
import { pagesData } from './data';
import PageItem from './PageItem';
import './styles.css';

const Pages = () => {
    const [search , setSearch] = useState('');
    const { setShowCreatePagePopup } = useContext(PopupContext)

    return (
        <div>
            <Navbar />
            <div className='common-wrapper min-h-screen  margin flex gap-6 bg-light dark:bg-dark_primary pb-16'>
                <div className='common-left'>
                    <Leftbar />
                </div>
                <div className='common-container w-full py-4'>
                    <div className='common flex flex-col gap-4'>
                        <div className="your-pages flex flex-col gap-4">
                            <div className='search-header shadow-2 bg-pure dark:bg-dark_secondary rounded-lg flex items-center justify-between py-4 sm:px-4 px-2 '>
                                <h3 className='font-semibold text-lg text-dark dark:text-light'>            
                                    Your Pages   
                                </h3>
                                <button className="btn-primary"
                                onClick={() => {
                                    setShowCreatePagePopup(true)
                                }}>
                                    Create Page
                                </button>
                            </div>
                             <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-4'>
                                {
                                    pagesData.slice(2,4).map((page,i) => (
                                        <PageItem key={i} page={page} user />
                                    ))
                                }
                            </div>
                        </div>
                        <div className="popular-pages flex flex-col gap-4">
                            <SearchHeader 
                            heading='Suggested' 
                            placeholder='Search for groups'
                            search={search} 
                            setSearch={setSearch} 
                            />

                            <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-4'>
                                {
                                    pagesData.map((page,i) => (
                                        <PageItem key={i} page={page} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Pages;