import {useState} from 'react'

const SignupLogic = ({children}) => {
    const [hookSubmit,returnForm] = children
    const[password,setPassword] = useState('')
    const[password2,setPassword2] = useState('')
    const[pseudo,setPseudo] = useState('')
    const[mail,setMail] = useState('')

    const[submited,setSubmited] = useState(false)

    const handleChangePassword = (e)=>setPassword(e.target.value)
    const handleChangePassword2 = (e)=>setPassword2(e.target.value)
    const handleChangePseudo = (e)=>setPseudo(e.target.value)
    const handleChangeMail = (e)=>setMail(e.target.value)


    const url = "https://localhost:8000/blog/signup"
    const user = {password,password2,pseudo,mail}
    const options = {
        method:'POST',
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(user)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        setSubmited(true)
    }
    function logicData(){
        return [
            password,password2,pseudo,mail,
            handleSubmit,
            handleChangePassword,
            handleChangePassword2,
            handleChangePseudo,
            handleChangeMail
        ]
    }
    function fetchParams(){
        return [url,options]
    }

    return <>
        {submited ? hookSubmit(fetchParams) : returnForm(logicData)}
    </>
}
 
export default SignupLogic