import Front from "./components/Front";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Plan from "./components/Plan";
import Room from "./components/Room";
import ImageSlider from "./components/ImageSlider";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="app">
     <Navbar />
     <Front />
     <Offers />
     <Plan />
     <Room />
     <ImageSlider />
     <Footer />
    </div>
  );
}

export default App;
