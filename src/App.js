
import './App.css';
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Home/Header/Header';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Header></Header>
     <Home></Home>
     <Footer></Footer>
    </div>
  );
}

export default App;
