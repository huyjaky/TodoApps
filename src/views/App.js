import './App.scss';
import Todo from './example/Todo';
import logo from './logo.svg';
import { ToastContainer } from 'react-toastify';
// import Navbar from './nav/navbar';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Todo></Todo>
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
  );
}

export default App;
