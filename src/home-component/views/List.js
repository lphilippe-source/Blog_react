const List = ({list,onClick,deleteButton}) => {
    return (
        <div onClick={()=>onClick(list)} className="blog-preview">
        <h2 >{list.title}</h2>
        <p>Written by {list.author}</p>
        <button onClick={()=>deleteButton(list.id)}>Delete</button>
        </div>
    )
}
 
export default List;