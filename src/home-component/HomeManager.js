import List from "./views/List"
import Title from "./views/Title"
import HomeLogic from "./HomeLogic"
import Detail from "./views/Detail"
import HookDelete from "./provider/hookDelete"
import HookGetBlog from "./provider/hookGetBlog"
import { HomeContext } from "./provider/HomeContext"
import {useState} from "react"

const HomeManager = () => {
    const[blogLists,setBlogLists] = useState(null)
    return ( 
        <div className="Home">
            <HomeContext.Provider value={{blogLists,setBlogLists}}>
                <HomeLogic>
                {(title)=><Title title={title}/>}
                {(fetchParams)=><HookGetBlog params={fetchParams}/>}
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
            </HomeContext.Provider>
        </div>
    )
}
 
export default HomeManager;