import Carousel from "./components/Carousel.jsx";
import pic1 from './assets/pic1.jpg';
import pic2 from './assets/pic2.jpg';
import pic3 from './assets/pic3.jpg';
import pic4 from './assets/pic4.jpg';
import pic5 from './assets/pic5.jpg';

function App() {

    const image = [pic1, pic2, pic3, pic4, pic5];

    return (
        <>
            <Carousel images = {image}/>
        </>
    );
}


export default App
