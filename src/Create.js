import { useState } from "react";

const Create = () => {
    const[title,setTitle] = useState('')
    const[body,setBody] = useState('')
    const[author,setAuthor] = useState('mario')
    const handleSubmit = (e)=>{
        e.preventDefault()
        const blog = {title,body,author}
        fetch("https://localhost:8000/blog/submit", {
            method:'POST',
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then((res)=>{
            console.log(res)
            console.log('new blog added')
        })
    }
    return ( 
        <div className="create">
            <h2>blog</h2>
            <form onSubmit={handleSubmit} action="">
                <label >Blog Title:</label>
                <input 
                type="text"
                required
                value={title}
                onChange={(e)=>{return setTitle(e.target.value)}}
                />
                <label >Blog Body:</label>
                <textarea 
                type="text"
                required
                value={body}
                onChange={(e)=>{return setBody(e.target.value)}}

                ></textarea>
                <label >Blog Author:</label>
                <select
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}
                 name=""
                  id="">
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                <button>Add Blog</button>
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>


            </form>
        </div>
     );
}
 
export default Create;