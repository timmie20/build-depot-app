import { createContext, useState } from "react";

export const AppContext = createContext(null)

export const AppProvider = ({children}) => {
    const [location, setLocation] = useState("");
    const [material, setMaterial] = useState("");
    const [foundDistributor, setFoundDistributor] = useState([]);

    return (
        <AppContext.Provider value={{location, setLocation, material, setMaterial, foundDistributor, setFoundDistributor}}>
            {children}
        </AppContext.Provider>
    )
}