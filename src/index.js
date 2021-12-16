import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import { makeAutoObservable} from 'mobx'
import { observer } from 'mobx-react'

// Model the application state.
class Timer {
  secondsPassed = 0

  constructor() {
      makeAutoObservable(this)
  }

  increase() {
      this.secondsPassed += 1
  }

  reset() {
      this.secondsPassed = 0
  }
}

const myTimer = new Timer()


// Build a "user interface" that uses the observable state.
const TimerView = observer(({ timer }) => (
  <button onClick={() => timer.reset()}>Seconds passed: {timer.secondsPassed}</button>
))

ReactDOM.render(
  <React.StrictMode>
    <TimerView timer={myTimer} />
  </React.StrictMode>,
  document.getElementById('root')
);

// Update the 'Seconds passed: X' text every second.
setInterval(() => {
  myTimer.increase()
}, 1000)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
