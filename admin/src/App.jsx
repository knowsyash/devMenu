import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Sidebar from './component/Sidebar/Sidebar';
import Add from './pages/add/Add';
import List from './pages/list/List';
import Order from './pages/order/Order';
import './App.css'
import { ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  
  return (
     
      <div className="app">
           <ToastContainer />
        <Navbar />
     
        <div className="app-content">
          <Sidebar />
          <div className="main-content">
       
            <Routes>
         
              <Route path="/add" element={<Add />} />
              <Route path="/list" element={<List />} />
              <Route path="/orders" element={<Order />} />
            </Routes>
          
          </div>
        </div>
      </div>
 
  );
}

export default App;
