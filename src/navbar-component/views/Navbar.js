
const Navbar = ({Links,children}) => {
    const [logo, account]= children
    return (
        <nav className="navbar">
            {logo}
            {Links}
            {account}
        </nav>
     );
}

export default Navbar