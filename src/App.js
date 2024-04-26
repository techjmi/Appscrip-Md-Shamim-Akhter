
import './App.css';
import Details from './components/Details';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Details />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
