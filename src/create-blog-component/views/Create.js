export const Create = ({logicData,children}) => {

    const [
        title,body,author,
        handleSubmit,
        handleChangeAuthor,
        handleChangeTitle,
        handleChangeBody
    ] = logicData()
     
    return <div className="create">
            <h2>blog</h2>
            <form onSubmit={handleSubmit} action="">
                <label >Blog Title:</label>
                <input 
                type="text"
                required
                value={title}
                onChange={handleChangeTitle}
                />
                <label >Blog Body:</label>
                <textarea 
                type="text"
                required
                value={body}
                onChange={handleChangeBody}
                >
                </textarea>
                <label >Blog Author:</label>
                <select
                value={author}
                onChange={handleChangeAuthor}
                 name=""
                  id="">
                    {children}
                </select>
                <button>Add Blog</button>
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
     ;
}