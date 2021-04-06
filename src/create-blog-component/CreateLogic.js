import {useState} from 'react'

export const CreateLogic = ({children}) => {
    console.log("children: ",children)
    const[title,setTitle] = useState('')
    const[body,setBody] = useState('')
    const[author,setAuthor] = useState('mario')
    const[submited,setSubmited] = useState(false)

    const handleChangeTitle = (e)=>setTitle(e.target.value)
    const handleChangeBody = (e)=>setBody(e.target.value)
    const handleChangeAuthor = (e)=>setAuthor(e.target.value)

    const url = "https://localhost:8000/blog/submit"
    const blog = {title,body,author}
    const options = {
        method:'POST',
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(blog)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        setSubmited(true)
    }

    const someStuff = ()=>{
        return [
            options,
            url,
            title,body,author,submited,
            handleSubmit,
            handleChangeAuthor,
            handleChangeTitle,
            handleChangeBody,
        ]
    }

    return (
        <>
        {children(someStuff)}
        </>
    );
}
