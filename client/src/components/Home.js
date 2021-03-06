import {Link} from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import NewAdded from './NewAdded';
import Popular from './Popular';
import Review from './Review';
import SlideBody from './SlideBody';
export default function Home() {
    
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
            <Footer />
            </>
        )
    
}