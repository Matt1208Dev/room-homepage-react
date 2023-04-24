import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Layouts/Homepage/Homepage";

function App() {
    return (
        <div className="app">
            <Navbar />
            <Homepage />
            <Footer />
        </div>
    );
}

export default App;
