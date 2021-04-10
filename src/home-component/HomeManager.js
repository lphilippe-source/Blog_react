import List from "./views/List"
import Title from "./views/Title"
import HomeLogic from "./HomeLogic"
import Detail from "./views/Detail"
import HookDelete from "./provider/hookDelete"

const HomeManager = () => {
    
    return ( 
        <div className="Home">
            <HomeLogic>
            {(title)=><Title title={title}/>}
            {(fetchParams)=><HookDelete params={fetchParams}/>}
            {(fetchedData,toggleContent,handleDelete)=>
                <List 
                deleteButton={handleDelete}
                onClick={toggleContent} 
                list={fetchedData} 
                key={fetchedData.id}/>
            }

            {(listContent,toggleContent)=>
                <Detail
                closeButton={toggleContent}
                content={listContent}/>}
            </HomeLogic>
        </div>
    )
}
 
export default HomeManager;