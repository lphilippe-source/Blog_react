import {Create} from './views/Create'
import {CreateLogic} from './CreateLogic'
import {HookSubmit} from './providers/hookSubmit'
import {OptionsList} from './views/OptionsList'

const CreateManager = () => {

    return (
        <CreateLogic>
        {(params)=><HookSubmit fetchParams={params}/>}
        {(params,optionsList)=><Create logicData={params}>{optionsList}</Create>}
        {(userList)=><OptionsList value={userList.firstName} key={userList.id}/>}
        </CreateLogic>
    );
}
 
export default CreateManager;