import logo from './logo.svg';
import './App.css';
import AddTask from './components/AddTask';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <AddTask/>
      <hr/>
      <TodoList/>
    </div>
  );
}

export default App;
