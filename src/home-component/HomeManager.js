import List from "./List"
import Title from "./Title"
import HomeLogic from "./HomeLogic"

const HomeManager = () => {
    
    return ( 
        <div className="Home">
            <HomeLogic>
            {(title)=><Title title={title}/>}
            {(fetchedData)=><List list={fetchedData} key={fetchedData.id}/>}
            </HomeLogic>
        </div>
     )
}
 
export default HomeManager;