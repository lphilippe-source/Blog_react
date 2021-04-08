import List from "./views/List"
import Title from "./views/Title"
import HomeLogic from "./HomeLogic"
import Detail from "./views/Detail"

const HomeManager = () => {
    
    return ( 
        <div className="Home">
            <HomeLogic>
            {(title)=><Title title={title}/>}

            {(fetchedData,toggleContent)=>
                <List 
                onClick={toggleContent} 
                list={fetchedData} 
                key={fetchedData.id}/>
            }

            {(listContent,toggleContent)=>
                <Detail 
                className="blog-detail"
                closeButton={toggleContent}
                content={listContent}/>}
            </HomeLogic>
        </div>
    )
}
 
export default HomeManager;