import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark');

    const [alertList, setAlertList] = useState([]);

    const [userChannelPageData, setUserChannelPageData] = useState({});

    return (
        <AppContext.Provider
            value={{
                theme,
                setTheme,
                alertList,
                setAlertList,
                userChannelPageData,
                setUserChannelPageData,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppContext;
