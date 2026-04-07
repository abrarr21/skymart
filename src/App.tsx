import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

const App = () => {
    return (
        <div className="h-screen bg-ink">
            <Navbar />
            <Cart />
            <Outlet />
            <Footer />
        </div>
    );
};

export default App;
