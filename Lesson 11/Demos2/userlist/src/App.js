import logo from './logo.svg';
import './App.css';
import { UsersList } from './components/UsersList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UsersList/>
      </header>
    </div>
  );
}

export default App;
