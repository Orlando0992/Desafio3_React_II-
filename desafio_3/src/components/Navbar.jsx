import { NavLink } from "react-router-dom";
import PokeballSvg from './PokeballSvg';

export default function Navbar() {
    return (
        <nav>
            <span>
                <PokeballSvg />
            </span>
            <ul>
                <li>
                    <NavLink activeClassName="active" exact to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/pokemones">Pokemones</NavLink>
                </li>
            </ul>
        </nav>
    );
}
