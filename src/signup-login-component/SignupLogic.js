import {useState} from 'react'

const SignupLogic = ({children}) => {
    const [hookSubmit,returnForm,returnLogin] = children
    const[password,setPassword] = useState('')
    const[password2,setPassword2] = useState('')
    const[pseudo,setPseudo] = useState('')
    const[mail,setMail] = useState('')
    const[user,setUser] = useState({})
    const[submited,setSubmited] = useState([false,"login"])

    const handleChangePassword = (e)=>setPassword(e.target.value)
    const handleChangePassword2 = (e)=>setPassword2(e.target.value)
    const handleChangePseudo = (e)=>setPseudo(e.target.value)
    const handleChangeMail = (e)=>setMail(e.target.value)

    const urlLogin = "https://localhost:8000/blog/login_check"
    const urlSignup = "https://localhost:8000/blog/login/signup"

    const options = {
        method:'POST',
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(user)
    }

    const handleSubmitSignup = (e)=>{
        e.preventDefault()
        setUser({password,password2,pseudo,mail})
        setSubmited([true,"signup"])
    }
    const handleSubmitLogin = (e)=>{
        e.preventDefault()
        const username = mail
        setUser({username,password})
        setSubmited([true,"login"])
    }
    function logicData(){
        return [
            password,password2,pseudo,mail,
            handleSubmitSignup,
            handleChangePassword,
            handleChangePassword2,
            handleChangePseudo,
            handleChangeMail
        ]
    }
    function credentials(){
        return[
            password,mail,
            handleChangePassword,
            handleChangeMail,
            handleSubmitLogin,
            setSubmited
        ]
    }

    function fetchParams(){
        let url
        submited[1]==="login" ? (url = urlLogin) : (url = urlSignup)
        return [url,options]
    }
    function loginOrSignup(){
        return submited[1]==="login" ? returnLogin(credentials()) : returnForm(logicData)
    }

    return <>
        {submited[0] ? hookSubmit(fetchParams) : loginOrSignup()}
    </>
}
 
export default SignupLogic