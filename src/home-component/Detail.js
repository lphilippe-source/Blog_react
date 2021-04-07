const Detail = ({content}) => {
    return (
        <div>
            <h2>{content.title}</h2>
            <div>{content.body}</div> 
        </div>
    )
}
 
export default Detail;