import React, { useContext, useState } from 'react'
import { PopupContext } from '../../context/popupContext';

const CreatePageForm = () => {
    const { setCreatePageView } = useContext(PopupContext)
    const [name , setName] = useState('');
    const [category , setCategory] = useState('');
    const [description , setDescription] = useState('');

    return (
        <div className='w-full py-2'>
            <h3 className='text-dark dark:text-light text-xl font-semibold'>
                Page information
            </h3>
            <form className="form mt-6">
                <div className="form-control">
                    <input 
                    type="text" 
                    placeholder="none"
                    className="form-input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id='name'
                    />
                    <label htmlFor="name" className="form-label">Page name (required)</label>
                </div>
                <p className='text-[11px] text-secondary_light -mt-4 mb-6'>
                    Use the name of your business, brand or organisation, or a name that explains what the Page is about.
                </p>
                <div className="form-control">
                    <input 
                    type="text" 
                    placeholder="none"
                    className="form-input"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    id='category'
                    />
                    <label htmlFor="category" className="form-label">Category name (required)</label>
                </div>
                <p className='text-[11px] text-secondary_light -mt-4 mb-6 '>
                    Choose a category that describes what type of business, organisation or topic the Page represents. You can add up to three.
                </p>
                <div className="form-control ">
                    <textarea 
                    type="text" 
                    placeholder="none"
                    className="form-input resize-none "
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    id='description'
                    />
                    <label htmlFor="description" className="form-label">Description</label>
                </div>
                <br />
                <p className='text-[11px] text-secondary_light text-center'>
                    You can add images, contact info and other details after you create the Page.
                </p>
                <div className='mt-4'>
                    <button type="submit" className='btn-primary w-full '
                    onClick={() => {
                        setCreatePageView('inviteFriends')
                    }}>
                        Continue
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreatePageForm