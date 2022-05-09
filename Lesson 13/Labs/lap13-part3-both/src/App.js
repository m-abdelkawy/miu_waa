import logo from './logo.svg';
import './App.css';
import Calculator from './components/Calculator';
import AddTask from './components/AddTask';
import TodoList from './components/TodoList';
import Both from './components/Both';

function App() {
  return (
    <div className="App">
      <h3>Calculator Component</h3>
      <Calculator />
      <br />
      <hr />
      <h3>To do List Components</h3>
      <AddTask />
      <br />
      <TodoList />
      <br />
      <hr />
      <h3>Both</h3>
      <Both />
    </div>
  );
}

export default App;
