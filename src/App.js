import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Body />
    </div>
  );
}

export default App;