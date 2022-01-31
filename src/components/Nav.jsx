import {Link , NavLink} from "react-router-dom"
export default function Nav()
{

    return <>
        <ul className="list-unstyled d-flex">
            <li>
                <NavLink to="blog">
                    blog
                </NavLink>
            </li>
            <li>
                <NavLink to="/">
                    home
                </NavLink>
            </li>
        </ul>
    </>
}