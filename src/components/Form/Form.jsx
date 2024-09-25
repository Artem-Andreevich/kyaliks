import { useRef } from "react";
import { useUsersContext } from "../../context";
import { formDataJson } from "../../untils/formDataJson";


export const Form = () => {

    const form = useRef(null)
    const { addUser} = useUsersContext()

    const addUserFormHandler = (event, form) => {
        event.preventDefault()
        addUser(formDataJson(form))
        form.reset()
    }

    return (
        <form
            className="form"
            ref={form}
            onSubmit={(event) => {addUserFormHandler(event, form.current)}} 
        >
            <input type="text" placeholder="name" name="name" required/>
            <input type="mail" placeholder="email" name="email" />
            <button className="btn">Добавить</button>
        </form>
    )
}

