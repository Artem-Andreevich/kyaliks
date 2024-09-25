import { MainPage, ProfilesPage, TodoPage } from "../pages";
import { Layout } from "../pages/Layout"
 

export const routes = [
		{
			path: '/',
			element: <Layout />,
            children: [
                {
                    index: true,
                    path: "/",
                    element: <MainPage />,
                },
                {
                    path: "Todo",
                    element: <TodoPage />,
                },
                {
                    path: "profiles",
                    element: <ProfilesPage />,
                }
                
            ]
		}
	]