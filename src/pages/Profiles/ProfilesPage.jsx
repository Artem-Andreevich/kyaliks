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
        <main className="page">
            <div className="container">
                <h1 className="page__title">Profiles Page</h1> 
                <div className="profiles">
                    <ul className="profiles__list">
                        {userState?.map( user => (
                            <li 
                                className="profiles__item"
                                key={user.id}
                            >
                                <span className="profiles__content">{user.name}</span>
                                <button
                                    className="profiles__button"
                                    onClick={() => {choiseUserHandler(user.id)}}                            
                                    disabled={user.isActive}
                                >
                                    Выбрать профиль
                                </button>
                            </li>
                        ))}
                    </ul>
                    <form
                        className="form"
                        ref={form}
                        onSubmit={(event) => {addUserFormHandler(event, form.current)}} 
                    >
                        <input type="text" placeholder="name" name="name" required/>
                        <input type="mail" placeholder="email" name="email" />
                        <button className="btn">Добавить</button>
                    </form>
                </div>
            </div>
        </main>
    )
}

