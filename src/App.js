import './App.css';
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import Profile from "./Components/Profile/Profile";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Navigation />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;
