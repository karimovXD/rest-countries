import { createContext, useState, useEffect, useContext } from 'react'

const MyContext = createContext();

export const setMyContext = () => useContext(MyContext);

export default function ({ children }) {
    const [countries, setCountries] = useState(null);

    return (
        <MyContext.Provider value={{ countries, setCountries }}>
            <MyContext.Consumer>{() => children}</MyContext.Consumer>
        </MyContext.Provider>
    )
} 