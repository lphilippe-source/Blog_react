import NavbarLogic from "./NavbarLogic"
import Navbar from "./Navbar"
import{ Link } from 'react-router-dom'
import Logo from "./Logo"

const NavbarManager = () => {
    return (
        <NavbarLogic>
            {(importedLinks,logo)=><Navbar Links={importedLinks}>{logo}</Navbar>}
            {(linkData)=>
                <Link
                to={linkData.route} 
                key={linkData.id}
                >
                {linkData.routeName}
                </Link>
            }
            {()=><Logo/>}
        </NavbarLogic>
    )
}
 
export default NavbarManager;


