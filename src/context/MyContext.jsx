import { createContext, useState, useContext } from 'react'

const MyContext = createContext();

export const setMyContext = () => useContext(MyContext);

export default function ({ children }) {
    const [countries, setCountries] = useState(null);
    const [isChange, setIsChange] = useState(false);

    return (
        <MyContext.Provider value={{ countries, setCountries, isChange, setIsChange }}>
            <MyContext.Consumer>{() => children}</MyContext.Consumer>
        </MyContext.Provider>
    )
} 