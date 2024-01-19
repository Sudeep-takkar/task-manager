import logo from './logo.svg';
import './App.css';
// import DefaultComponentWithNameChanged from './Clock';
// import { add } from './Clock';

import Tasks  from './components/FunctionalComponentExample'
import Form from './components/Form';
import StatefulComponent from './components/StatefulComponent';

const taskList = [
  {
  task: "Task 1",
  isComplete: false
  },
  {
    task: "Task 2",
    isComplete: false
  },
  {
    task: "Task 3",
    isComplete: false
  },
  {
    task: "Task 4",
    isComplete: true
  },
  {
    task: "Task 5",
    isComplete: true
  }
]

function App() {
  // console.log(add)
  return (
    <div className="App">
      {/* <DefaultComponentWithNameChanged /> */}
      {/* <Tasks taskList={taskList} someRandomProp={'1536'} /> */}
      {/* <Form /> */}
      <StatefulComponent />
    </div>
  );
}

export default App;
