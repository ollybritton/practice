import './App.css';

import Sidebar from './components/Sidebar'
import Instructions from './components/Instructions'

import { randomScale } from './exercises/random'
import { ExerciseData } from './exercises/data'

console.log(ExerciseData)

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Instructions data={ExerciseData} exercise={randomScale(ExerciseData[0].exercises.scales)} />
    </div>
  );
}

export default App;
