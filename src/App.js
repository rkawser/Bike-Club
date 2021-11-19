
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
import PrivatRoute from './Components/Privat/PrivatRoute';
import Review from './Components/Review/Review';
import Payment from './Components/Payment/Payment';
import MyOrders from './Components/MyOrders/MyOrders';
import Details from './Components/Details/Details';
import AddProduct from './Components/AddProduct/AddProduct';

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
        <PrivatRoute path='/service'>
        <Service></Service>
        </PrivatRoute>
        <Route path='/register'>
        <Register></Register>
        </Route>

        <Route path='/login'>
        <Login></Login>
        </Route>

        <Route path='/dashbord'>
        <OffCanvasExample></OffCanvasExample>
        </Route>

        <Route path='/review'>
        <Review></Review>
        </Route>

        <Route path='/payment'>
       <Payment></Payment>
        </Route>

        <Route path='/myorders'>
       <MyOrders></MyOrders>
        </Route>

        <Route path='/orders/:id'>
        <Details></Details>
        </Route>

        <Route path='/addproduct'>
        <AddProduct></AddProduct>
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
