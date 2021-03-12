import logo from './logo.svg';
import './App.css';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { useState } from 'react';


function App() {
const [like,setLike]=useState();

const handle=()=>{
  const color = like?'':'secondary'
  setLike(color)
}

  return (
    <div className="App">

                <ThumbUpIcon ></ThumbUpIcon>
                 <AccessAlarmIcon onClick={handle} color={like}></AccessAlarmIcon>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
