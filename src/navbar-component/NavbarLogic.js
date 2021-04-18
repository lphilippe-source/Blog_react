const NavbarLogic = ({children}) => {

    const[returnNavbar, returnLink, returnLogo, returnAccount] = children
    /*
    ### add new links here
    */
    const links = [
        {id:1,route:"/",routeName:"Home"},
        {id:2,route:"/blog",routeName:"Blog"},
        {id:3,route:"/signup",routeName:returnAccount()}
    ]
    function setLink(){
        return links.map((link)=>{
            return returnLink(link)
        })
    }

    return (
        <>
        {returnNavbar(setLink(),returnLogo())}
        </>
     )
}
 
export default NavbarLogic