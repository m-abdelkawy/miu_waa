import './App.css';
import ButtonComponent from './components/ButtonComponent';

function App() {
  return (
    <div>
      <header>
        <p>
          <table>
            <tr>
              <td>
                <ButtonComponent message={"Hello from button 1"} />
              </td>
              <td>
                <ButtonComponent message={"Hello from button 2"} />
              </td>
            </tr>
            <tr>
              <td>
                <ButtonComponent message={"Hello from button 3"} />
              </td>
              <td>
                <ButtonComponent message={"Hello from button 4"} />
              </td>
            </tr>
          </table>
        </p>
      </header>
    </div>
  );
}

export default App;
