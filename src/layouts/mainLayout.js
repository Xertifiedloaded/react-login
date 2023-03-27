import { Outlet } from "react-router-dom"
import { AuthContextProvider } from "../components/AuthContext"
import AuthDetails from "../components/AuthDetails/AuthDetails"
import Header from "../components/header/header"


const MainLayout = () => {
    return (
        <>
            <AuthContextProvider>
                <Header />
                <Outlet />
                <AuthDetails/>
            </AuthContextProvider>
           
        </>
    )
}

export default MainLayout