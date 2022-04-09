import './App.css';
import SayButtonComponent from './components/SayButtonComponent';

function App() {
  return (
    <div>
      <header>
        <table>
          <tbody>
            <tr>
              <td>
                <SayButtonComponent text={"Say Hello from button 1"} message={"Hello from button 1"}/>
              </td>
              <td>
                <SayButtonComponent text={"Say Welcome from button 2"} message={"Welcome from button 2"}/>
              </td>
            </tr>
            <tr>
              <td>
                <SayButtonComponent text={"Say Hi from button 3"} message={"Hi from button 3"}/>
              </td>
              <td>
                <SayButtonComponent text={"Say Goodbye from button 4"} message={"Goodbye from button 4"}/>
              </td>
            </tr>
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
