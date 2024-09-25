import { useUsersContext, usePaginationContext } from "../../context";


export const ProfileItem = ({user}) => {

    const { setPage } = usePaginationContext()
    const { selectUser } = useUsersContext()
    
    const userSelectHandler = (id) => {
        localStorage.setItem("userId", id)
        selectUser(localStorage.getItem("userId"))
        setPage("todo", 1)
    }

    return (
        <li 
            className="profiles__item"
            key={user.id}
        >
            <span className="profiles__content">{user.name}</span>
            <button
                className="profiles__button"
                onClick={() => {userSelectHandler(user.id)}}                            
                disabled={user.isActive}
            >
                Выбрать профиль
            </button>
        </li>
    )
}

