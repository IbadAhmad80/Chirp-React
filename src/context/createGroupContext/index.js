import { createContext , useState , useContext } from 'react';

const GroupContext = createContext();

export const useGroupContext = () => useContext(GroupContext);

const GroupContextProvider = ({ children }) => {
    const [groupView , setGroupView] = useState('create');
    const [showGroupPopup , setShowGroupPopup] = useState(false);
    const [groups , setGroups] = useState([]);

    return (
        <GroupContext.Provider 
        value={{
            groupView , setGroupView , showGroupPopup , setShowGroupPopup , groups , setGroups
        }}
        >
            {children}
        </GroupContext.Provider>
    )
}

export default GroupContextProvider;