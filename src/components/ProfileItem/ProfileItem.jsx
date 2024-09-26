import { useUsersContext, usePaginationContext } from "../../context";


export const ProfileItem = ({user}) => {

    const { setPage } = usePaginationContext()
    const { selectUser, logout } = useUsersContext()
    
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
            {!user.isActive ? 
                <button
                    className="profiles__button"
                    onClick={() => {userSelectHandler(user.id)}}
                >
                    Выбрать профиль
                </button> : 
                <button
                    className="profiles__button profiles__button--logout"
                    onClick={logout}                            
                >
                    Выйти
                </button>
            }
        </li>
    )
}

