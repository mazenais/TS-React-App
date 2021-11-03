import './App.css';
import Test from './components/Test';


function App() {
  return (
    <div className="App">
     <Test name='Mazen' messageCount={20} isLoggedIn={true}/>
    </div>
  );
}

export default App;
