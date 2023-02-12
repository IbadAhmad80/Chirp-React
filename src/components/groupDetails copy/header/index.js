import Cover from './Cover';
import Details from './Details';
import Tabs from './Tabs';

const coverImage = 'https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/113d1046-6bdc-4475-a781-99f6cf7d1acd/001-understand-yourself-large-opt.png';

const GroupHeader = ({ currentTab , setCurrentTab }) => {
    return (
        <div>
            <div className='profile-header shadow-2 bg-pure rounded-lg sm:p-4 flex flex-col gap-4'>
                <Cover coverImage={coverImage}/>
                <Details />
                <Tabs 
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}
                />
            </div>
        </div>
    )
}

export default GroupHeader;