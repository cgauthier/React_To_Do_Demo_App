import react, {useState, useEffect} from 'react';
import './App.css';

import Todo from './Components/Todo/Todo'

function App() {

  // can be loaded externally as a util library file.
  const formatDate = (n) => {
    let now = new Date(n);
    let m = now.getMonth() + 1;
    m = (m < 10) ? `0${m}`: m;
    let d = now.getDate();
    d = (d < 10) ? `0${d}`: d;
    let y = now.getFullYear();
    return `${m}/${d}/${y}`;
  }

  const [today, setToday] = useState(formatDate(Date.now()));

  return (
    <div className="App">
      <Todo today={today} />
    </div>
  );
}

export default App;
