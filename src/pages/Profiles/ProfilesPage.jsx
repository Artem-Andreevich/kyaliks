import { useEffect, useRef } from "react";
import { useUsersContext, usePaginationContext } from "../../context";
import { formDataJson } from "../../untils/formDataJson";

export const ProfilesPage = () => {

    const form = useRef(null)
    const { params: userState, addUser, selectUser} = useUsersContext()
    const { setPage } = usePaginationContext()

    useEffect( () => {
        const isExistsUser = userState
            .includes(userState.find( user => user.id === Number(localStorage.getItem("userId"))))
        if(isExistsUser && localStorage.getItem("userId")) {
            selectUser(localStorage.getItem("userId"))
        } else {
            localStorage.removeItem("userId")
        }
    },[]) 


    const addUserFormHandler = (event, form) => {
        event.preventDefault()
        addUser(formDataJson(form))
        form.reset()
    }

    const choiseUserHandler = (id) => {
        localStorage.setItem("userId", id)
        selectUser(localStorage.getItem("userId"))
        setPage("todo", 1)
    }

    return (
        <div>
            <h1>Profiles Page</h1> 

            <div>
                {userState?.map( user => (
                    <div 
                        key={user.id}
                        style={{display: 'flex', gap: '20px'}}
                    >
                        {user.name}
                        <button
                            onClick={() => {choiseUserHandler(user.id)}}                            
                            disabled={user.isActive}
                        >Выбрать профиль</button>
                    </div>
                ))}
            </div>
     
            <div>
                <form 
                    ref={form}
                    onSubmit={(event) => {addUserFormHandler(event, form.current)}} 
                >
                    <input type="text" placeholder="name" name="name" required/>
                    <input type="mail" placeholder="email" name="email" />
                    <button className="btn">Добавить</button>
                </form>
            </div>
        </div>
    )
}

