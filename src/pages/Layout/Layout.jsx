import { Header } from "./Header"
import { Outlet } from 'react-router-dom'
import { PaginateProvider, UsersProvider } from "../../context";

export const Layout = () => {
    return (
        <div className='wrapper'>
            <UsersProvider>
                <PaginateProvider> 
                    <Header />
                    <Outlet />
                </PaginateProvider>
            </UsersProvider>
        </div>
    )
};