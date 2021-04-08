const Detail = ({content,closeButton}) => {
    return (
        <div>
            <h2>{content.title}</h2>
            <div>{content.body}</div>
            <button onClick={closeButton}>fermer</button> 
        </div>
    )
}
 
export default Detail;