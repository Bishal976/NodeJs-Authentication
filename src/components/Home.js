import {Link} from 'react-router-dom';
//import Product from './Product';
import Navbar from './Navbar';
import Footer from './Footer';
import NewAdded from './NewAdded';
import Popular from './Popular';
import Review from './Review';
import SlideBody from './SlideBody';
export default function Home(){
    //et items=[100,100,232];
    return (
        <>
        <Navbar/>
        <SlideBody/>
        <Link to="/update">Update Product</Link><br/>
        <h2>Popular Items</h2>
        <Popular/>
        <h2>New Added</h2>
        <NewAdded/>
        <h2>Review</h2>
        <Review/>
        <Footer/>
        {/* {
            items.map(items=>{
                return <>{items}<Product/></>
            })
        } */}
        </>
    )
}