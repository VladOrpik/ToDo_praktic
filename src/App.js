import './App.css';
import Header from './components/Header';
import Filter from './components/filter';
import TaskCreate from './components/taskCreate';

function App() {
  return (
    <div className="App">
     <Header/>
     <Filter/>
     <TaskCreate/>
    </div>
  );
}

export default App;
