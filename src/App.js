import { Fragment } from 'react';
import './App.css';
import InputTodo from './components/InputTodo';
import ListTodo from './components/ListTodo';

function App() {
  return (
    // style={{height:'100vh',width:'100vw',backgroundColor:'black'}}
    <div >
      <div className='container' style={{}}>
        <InputTodo/>
        <ListTodo/>
      </div>
    </div>
  );
}

export default App;
