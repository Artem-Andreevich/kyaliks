import { useEffect, useState, useRef } from "react";
import { useUsersContext } from "../../context/UsersContext";
import { formDataJson } from "../../untils/formDataJson";

export const ProfilesPage = () => {

    const form = useRef(null)
    const { params: userState, addUser, choiseUser} = useUsersContext()

    useEffect( () => {
        if(localStorage.getItem("userId")){
            choiseUser(localStorage.getItem("userId"))
        }
    },[]) 


    const addUserFormHandler = (event, form) => {
        event.preventDefault()
        addUser(formDataJson(form))
        form.reset()
    }

    const choiseUserHandler = (id) => {
        localStorage.setItem("userId", id)
        choiseUser(localStorage.getItem("userId"))
    }

    return (
        <div>
            <h1>Profiles Page</h1> 

            <div>
                {userState?.map( el => (
                    <div 
                        key={el.id}
                        style={{display: 'flex', gap: '20px'}}
                    >
                        {el.name}
                        <button
                            onClick={() => {choiseUserHandler(el.id)}}                            
                            disabled={el.isActive}
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

