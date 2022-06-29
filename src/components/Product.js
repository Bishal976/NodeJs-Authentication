import logo from '../Images/Slider1.jpg';
import './css/Product.css';
export default function Product(){
    return(
        <>
        <div className='card'>
        <img src={logo} />
        <div className='body'>
        <h4>Gulab Jamun</h4>
        <p>here is best Choice</p>
        <button>Add to cart</button>
        </div>
        </div>
        </>
    )
}
