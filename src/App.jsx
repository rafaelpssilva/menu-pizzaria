import "./App.css";
import Home from "./components/Home";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

import Navbar from "./layout/Navbar";

function App() {
    return (
        <div className="">
            <Header />
            <Navbar />
            <Home />
            <Footer />
        </div>
    );
}

export default App;
