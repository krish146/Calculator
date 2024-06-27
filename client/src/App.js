
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Employee from './Employee';
import UpdateEmployee from './UpdateEmployee';
import CreateEmployee from './CreateEmployee';

function App() {
  return (
    <div className="App">
   <BrowserRouter>
       <Routes>

          <Route path='/' element={<Employee/>} />
          <Route path="/create" element={<CreateEmployee/>} />
          <Route path="/update/:id" element={<UpdateEmployee/>} />

       </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
