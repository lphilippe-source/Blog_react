import List from "./List"
import { useFetch } from "./services/useFetch";

const Home = () => {
    
    const url = 'https://localhost:8000/blog'
    const { lists, isPending, error} = useFetch(url,null)

    return ( 
        <div className="Home">
                        { isPending && <div> loading... </div> }
                        {error && <div>{error}</div>}
            {lists && Array.isArray(lists) && <>
            <List dataList={lists} title="all blogs!"/>
            </>
            }
        </div>
     );
}
 
export default Home;