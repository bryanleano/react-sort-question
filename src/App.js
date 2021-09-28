import { useState } from 'react';
import './App.css';

function App() {

  const [order, setOrder] = useState(true);
  let [array, setArray] = useState([2, 202, 2, 3, 200, 4, 5]);
  let [max, setMax] = useState(null)


  let sort = () => {
    let newSort = array.sort((a, b) => a - b);

    { calculate(newSort) };

  }

  let calculate = (newSort) => {

    setOrder(false);
    setArray(newSort);
    setMax(5);
  }

  return (

    <div className="App">

      {order === true
        ?
        array.map((val, index) => (
          <p key={index}>{val}</p>
        ))
        :
        array.map((val, index) => (
          <p key={index}>{val}</p>
        ))

      }

      <button onClick={sort}>Sort and max profit</button>
      <p>Maximum profit is: {max}</p>
    </div >

  );
}

export default App;
