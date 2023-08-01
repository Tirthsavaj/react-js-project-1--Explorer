import logo from './logo.svg';
import './App.css';
import Record from './Components/Record';
import Table from './Components/Table';

function App() {
  return (
    <>
      <Record record={Table}/>
    </>
  );
}

export default App;
