import Product from './Product';
import './css/Product.css';
export default function Popular(){
    let items=[101,102,103,104];
    return (
        <>
        <div style={{display: "flex",overflow: "hidden"}}>
        {
            items.map((items)=>{
                return <Product/>
            })
        } 
        </div>
        </>
    )
}