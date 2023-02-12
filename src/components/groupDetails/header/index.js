import Cover from './Cover';
import Details from './Details';
import Tabs from './Tabs';

const coverImage = 'https://static.vecteezy.com/system/resources/previews/000/517/088/original/vector-landscape-illustration.png';

const GroupHeader = ({ currentTab , setCurrentTab }) => {
    return (
        <div>
            <div className='profile-header shadow-2 bg-pure dark:bg-dark_secondary rounded-lg sm:p-4 flex flex-col gap-4'>
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