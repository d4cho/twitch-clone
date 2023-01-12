import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark');

    const [alertList, setAlertList] = useState([]);

    return (
        <AppContext.Provider
            value={{ theme, setTheme, alertList, setAlertList }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppContext;
