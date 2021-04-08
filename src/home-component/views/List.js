const List = ({list,onClick}) => {

    return (
        <div onClick={()=>onClick(list)} className="blog-preview">
        <h2 >{list.title}</h2>
        <p>Written by {list.author}</p>
        </div>
    )
}
 
export default List;