import './App.scss';
import Todo from './example/Todo';
import logo from './logo.svg';
import { ToastContainer } from 'react-toastify';
import Navbar from './nav/Navbar';
import Home from './Home/Home';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import User from './User/Users';
import DetailUser from './detail_user/DetailUser';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <Home /> */}
          {/* <Todo /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="todoapp" element={<Todo />} />
            <Route path="User" element={<User />} />
            <Route path="/User/:id" element={<DetailUser />} />
          </Routes>
        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
