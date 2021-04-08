import {Create} from './views/Create'
import {CreateLogic} from './CreateLogic'
import {HookSubmit} from './providers/hookSubmit'

const CreateManager = () => {

    return (
        <CreateLogic>
        {(params)=><HookSubmit fetchParams={params}/>}
        {(params)=><Create logicData={params}/>}
        </CreateLogic>
    );
}
 
export default CreateManager;