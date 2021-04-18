import NavbarLogic from "./NavbarLogic"
import Navbar from "./views/Navbar"
import{ Link } from 'react-router-dom'
import Logo from "./views/Logo"
// import Account from "./views/Account"
import {
    UserOutlined
  } from '@ant-design/icons'

const NavbarManager = () => {
    return (
        <NavbarLogic>
            {(importedLinks,logo,account)=><Navbar Links={importedLinks}>{logo}{account}</Navbar>}
            {(linkData)=>
                <Link
                to={linkData.route} 
                key={linkData.id}
                >
                {linkData.routeName}
                </Link>
            }
            {()=><Logo/>}
            {()=><UserOutlined />}
        </NavbarLogic>
    )
}
 
export default NavbarManager;


