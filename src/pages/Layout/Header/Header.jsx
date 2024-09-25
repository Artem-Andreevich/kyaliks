
import { NavLink } from "react-router-dom"

export const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="nav">
                    <ul className="nav__list">
                        <li>
                            <NavLink 
                                to={'/'}
                                className="nav__link"
                            >Главная</NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to={'todo'}
                                className="nav__link"
                            >Todo</NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to={'profiles'}
                                className="nav__link"
                            >Profiles</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>

    )
}