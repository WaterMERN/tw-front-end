import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Body from './components/Body';
import NavBar from './components/NavBar';



function App() {
  // const [expenseList, setExpenseList] = useState([])
  // const [tripName, setTripName]=useState('')
  // const [budget, setBudget] = useState(0)
  // const [length, setLenght] =useState(0)
  // const [foodCost, setfoodCost]=useState(0)
  // const [transportCost, setTransportCost]=useState(0)
  // const [lodgingCost, setLodgingCost]=useState(0)
  // const [otherCost, setOtherCost]=useState(0)

  return (
    <div className="App">
      <NavBar />
      <Body />
    </div>
  );
}

export default App;