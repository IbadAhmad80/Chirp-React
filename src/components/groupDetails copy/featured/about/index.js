import { EyeFill, HeartOutline, Location, Private } from '../../../../svgs';
import './styles.css';

const ProfileAbout = () => {
    return (
        <div className='bg-pure rounded-lg p-2 sm:p-4 flex flex-col gap-4 shadow-2'>
            <div className='flex flex-col gap-1 text-sm text-dark'>
                <span className='font-semibold text-secondary text-base sm:text-lg'>About</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quo sunt perspiciatis culpa ipsa repellat corporis aliquam totam id labore!</p>
            </div>
            <div className='flex items-center gap-3'>
                <div className="small-svg-2 ">
                    <Private />
                </div>
                <div className='text-sm text-dark'>
                    <span className='text-secondary font-semibold '>Private</span>
                    <p>Whats up, how are you?</p>
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <div className="small-svg-2 ">
                    <EyeFill />
                </div>
                <div className='text-sm text-dark'>
                    <span className='text-secondary font-semibold'>Visible</span>
                    <p>Anyone can find you</p>
                </div>
            </div>
            
        </div>
    )
}

export default ProfileAbout