import { useEffect } from "react";
import { useUsersContext } from "../../context";
import { Form, ProfileItem } from "../../components";


export const ProfilesPage = () => {

    const { params: userState, selectUser} = useUsersContext()

    useEffect( () => {
        const isUserExist = userState
            .includes(userState.find( user => user.id === Number(localStorage.getItem("userId"))))
        if(isUserExist && localStorage.getItem("userId")) {
            selectUser(localStorage.getItem("userId"))
        } else {
            localStorage.removeItem("userId")
        }
    },[]) 

    return (
        <main className="page">
            <div className="container">
                <h1 className="page__title">Profiles Page</h1> 
                <div className="profiles">
                    <ul className="profiles__list">
                        {userState?.map( user => (
                            <ProfileItem user={user} key={user.id}/>
                        ))}
                    </ul>
                    <Form />
                </div>
            </div>
        </main>
    )
}

