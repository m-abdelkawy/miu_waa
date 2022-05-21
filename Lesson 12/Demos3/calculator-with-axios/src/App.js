import logo from './logo.svg';
import './App.css';
import { Calculator } from './components/Calculator';
import Contacts from './components/Contacts';
import ContactsAxios from './components/ContactsAxios';

function App() {
  return (
    <div className="App">
      {/* <Calculator/> */}
      {/* <Contacts/> */}
      <ContactsAxios/>
    </div>
  );
}

export default App;
