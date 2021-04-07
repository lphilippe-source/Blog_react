import {useFetch} from '../services/useFetch'
const HomeLogic = ({children}) => {

    const[returnTitle,returnList]=children

    const url = 'https://localhost:8000/blog'
    const {error, isPending, lists } = useFetch(url, null)
    const title = "all blogs!"

    return (
        <>
        {returnTitle(title)}
        {lists && lists.map((list)=>{return returnList(list)})}
        </> 
    )
}
 
export default HomeLogic;