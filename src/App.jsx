import "./App.css";
import Home from "./components/Home";
import { GlobalStorage } from "./GlobalContext";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

import Navbar from "./layout/Navbar";

function App() {
    return (
        <div className="app">
            <GlobalStorage>
                <Header />
                <Navbar />
                <Home />
                <Footer />
            </GlobalStorage>
        </div>
    );
}

export default App;
