
// rest operator=> ...data , recup tous les autres arguments dans un array
const List = ({handleDelete,title,dataList}) => {
   
    return ( 
        <div >
            <h2>{title}</h2>
           {Array.isArray(dataList) && dataList.map((list)=>{
                           console.log('props dans le return:',dataList)

               return (
                   //itération des données avec un id en utilisant la propriété key
                    <div key={list.id} className="blog-preview">
                    <h2 >{list.title}</h2>
                    <p>Written by {list.author}</p>
                    </div>
               )
            })}
        </div>
     );
}
 
export default List;