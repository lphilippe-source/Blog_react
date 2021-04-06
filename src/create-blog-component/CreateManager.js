import {Create} from './Create'
import {CreateLogic} from './CreateLogic'

const CreateManager = () => {

    return (
        <CreateLogic>
        {(truc)=><Create someStuff={truc}/>}
        </CreateLogic>
    );
}
 
export default CreateManager;