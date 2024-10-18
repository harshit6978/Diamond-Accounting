import { Route, Routes } from 'react-router-dom';
import './App.css';
import DiamondForm from './Component/Diamond Form/DiamondForm';
import Navbar from './Component/Navbar/Navbar';
import ShowEntry from './Component/Entry/ShowEntry';
import AddBroker from './Component/AddBroker/AddBroker';
import GetBroker from './GetBroker/GetBroker';

function App() {
  return (
    <>
      <Navbar/>
    <Routes>
        <Route>
          <Route path='/' element={<DiamondForm />} />
          <Route path='/showEntry' element={<ShowEntry/>}></Route> 
          <Route path='/addbroker' element={<AddBroker/>}></Route> 
          <Route path='/getbroker' element={<GetBroker/>}></Route> 
          

        </Route>
      </Routes>
     
    </>
  );
}

export default App;
