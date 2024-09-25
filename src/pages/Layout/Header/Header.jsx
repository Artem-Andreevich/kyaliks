
import { NavLink } from "react-router-dom"

export const Header = () => {
    return (
        <ul>
            <li>
                <NavLink to={'/'}>Главная</NavLink>
            </li>
            <li>
                <NavLink to={'todo'}>todo</NavLink>
            </li>
            <li>
                <NavLink to={'profiles'}>profiles</NavLink>
            </li>
        </ul>
    )
}