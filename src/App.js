import {useState} from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState(80);
  const [bottles, setBottles] = useState(0);
  const [gender, setGender] = useState("male");
  const [time, setTime] = useState(0)
  const [result, setResult] = useState(0);
  

  

  function handleSubmit(e) {
    e.preventDefault();
    
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let grams_left = grams - (burning * time);
    

    

    let BAL = 0;
    if (gender === 'male') {
      BAL = grams_left / (weight * 0.7)
    }
    else {
      BAL = grams_left / (weight * 0.6)
    }
    setResult(BAL);
    
  }


  return (
    <>
      <h3>Calculating alcohol blood level</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Weight</label>
          <input name="weight" type="number" step="1" value={weight} onChange={e => setWeight(e.target.value)} ></input>
        </div>
        <div>
          <label>Bottles</label>
          <input type="number" name="bottles" step="1" value={bottles} onChange={e => setBottles(e.target.value)}/>
        </div>

        <div>
          <label>Time</label>
          <input type="number"name="time" step="1" value={time} onChange={e => setTime(e.target.value)} />
        </div>

        <div>
          <label>Gender</label>
          <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)} /><label>Male</label>
          <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)} /><label>Female</label>
        </div>
        <div>
          <output>{result.toFixed(2)}</output>
        </div>
        <button>Calculate</button>
      </form>
    </>
  );
}

export default App;
