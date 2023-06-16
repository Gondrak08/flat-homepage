"use client";
import { createContext, useContext, Dispatch, SetStateAction, useState} from "react"


interface IContextProps{
    isheaderLodad:Boolean
    setIsHeaderLoaded: Dispatch<SetStateAction<boolean>>
};

const GlobalContext = createContext<IContextProps>({
    isheaderLodad:false,
    setIsHeaderLoaded:():boolean => false
});


export const GlobalContextProvider=({children}:any)=>{
    const [ isheaderLodad, setIsHeaderLoaded]=useState(false);
    return(
    <GlobalContext.Provider value={{isheaderLodad, setIsHeaderLoaded}} >
        {children}
    </GlobalContext.Provider>
    )
};

export const useGlobalContext = () => useContext(GlobalContext);