import Product from './Product';
export default function NewAdded(){
    let items=[101,102,103,104];
    return (
        <>
        <div style={{display: "flex",overflow: "auto"}}>
        {
            items.map((items)=>{
                return <Product/>
            })
        } 
        </div>
        </>
    )
}