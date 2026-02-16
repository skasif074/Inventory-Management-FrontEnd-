
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import RegisterUser from './Components/LoginComponent/RegisterUser';
import LoginPage from './Components/LoginComponent/LoginPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<LoginPage/>}/>
           <Route path='/register' element={<RegisterUser/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
