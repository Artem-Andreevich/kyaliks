import { ProfilesPage, TodoPage } from "../pages";
import { Layout } from "../pages/Layout"
 

export const routes = [
		{
			path: '/',
			element: <Layout />,
            children: [
                {
                    index: true,
                    path: "Todo",
                    element: <TodoPage />,
                },
                {
                    path: "Profiles",
                    element: <ProfilesPage />,
                }
                
            ]
		}
	]