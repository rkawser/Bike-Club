
import './App.css';
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Home/Header/Header';
import Footer from './Components/Footer/Footer';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import PageNoteFound from './Components/NotFound/PageNoteFound';
import Service from './Components/Service/Service';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import OffCanvasExample from './Components/DashBord/DashBord';
import AuthProvider from './Components/AuthProvider/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
        <Home></Home>
        </Route>
        <Route path='/home'>
        <Home></Home>
        </Route>
        <Route path='/service'>
        <Service></Service>
        </Route>
        <Route path='/register'>
        <Register></Register>
        </Route>
        <Route path='/login'>
        <Login></Login>
        </Route>

        <Route path='/dashbord'>
        <OffCanvasExample></OffCanvasExample>
        </Route>

        <Route path='*'>
          <PageNoteFound></PageNoteFound>
        </Route>

      </Switch>
      <Footer></Footer>
      </BrowserRouter>
     
    </div>
    </AuthProvider>
  );
}

export default App;
