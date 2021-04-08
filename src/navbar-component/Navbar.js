
const Navbar = ({Links,children}) => {
    
    return (
        <nav className="navbar">
            {children}
            {Links}
        </nav>
     );
}

export default Navbar