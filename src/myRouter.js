import React from 'react'
import { useRoutes } from 'react-router-dom'
import AuthDetails from './components/AuthDetails/AuthDetails'
import MainLayout from './layouts/mainLayout'
import Landing from './pages/login/landing'

import SignUp from './pages/signout/signup'


const MyRouter = () => {
    return useRoutes([
        {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                    path: "/",
                    element: <SignUp />
                },
                {
                    path: "/login",
                    element: <Landing />
                },
                {
                    path: "/account",
                    element: <AuthDetails />
                },
            ]
        }
    ]

    )
}

export default MyRouter