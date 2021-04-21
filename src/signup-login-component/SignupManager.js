import FormSignup from "./views/FormSignup"
import SignupLogic from "./SignupLogic"
import {HookSubmit} from "./providers/hookSubmit"
import Login from "./views/Login"

const SignupManager = () => {
     
    return  <SignupLogic>
            {(params)=><HookSubmit fetchParams={params}/>}
            {(params)=><FormSignup logicData={params}/>}
            {(params)=><Login credentials={params}/>}
            </SignupLogic>
}
 
export default SignupManager