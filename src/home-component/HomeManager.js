import List from "./List"
import Title from "./Title"
import HomeLogic from "./HomeLogic"
import Detail from "./Detail"

const HomeManager = () => {
    
    return ( 
        <div className="Home">
            <HomeLogic>
            {(title)=><Title title={title}/>}
            {
                (fetchedData,toggleContent)=>
                    <List 
                    onClick={toggleContent} 
                    list={fetchedData} 
                    key={fetchedData.id}/>
            }
            {(listContent)=><Detail className="blog-detail" content={listContent}/>}
            </HomeLogic>
        </div>
    )
}
 
export default HomeManager;