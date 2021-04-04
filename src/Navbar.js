// import { Home } from './Home'
import{ Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
        <h1>Salut</h1>
        <Link to="/">home</Link>
        <Link to="/Blog" style={{ color:'blue' }}>Blog</Link>
        </nav>
     );
}
 
export default Navbar ;