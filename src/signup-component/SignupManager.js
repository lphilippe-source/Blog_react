import FormSignup from "./views/FormSignup"
import SignupLogic from "./SignupLogic"
import {HookSubmit} from "./providers/hookSubmit"

const SignupManager = () => {
     
    return  <SignupLogic>
            {(params)=><HookSubmit fetchParams={params}/>}
            {(params)=><FormSignup logicData={params}/>}
            </SignupLogic>
}
 
export default SignupManager