import {  createContext, useContext } from "react";

const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
}
export const UserAuth = () => {
    return (
        useContext(AuthContext)
    );
}