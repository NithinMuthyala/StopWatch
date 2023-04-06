import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {timeInSeconds: 0}

  getTimerString = () => {
    const {timeInSeconds} = this.state
    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = Math.floor(timeInSeconds % 60)
    const stringMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringSeconds = seconds > 9 ? seconds : `0${seconds}`

    return `${stringMinutes}:${stringSeconds}`
  }

  secondsIncrementFunc = () => {
    // const {timeInSeconds, timeInMinutes} = this.state
    this.setState(prevState => ({timeInSeconds: prevState.timeInSeconds + 1}))
  }

  clearTimeInterval = () => {
    clearInterval(this.intervalId)
  }

  startButton = () => {
    this.intervalId = setInterval(this.secondsIncrementFunc, 1000)
  }

  stopButton = () => {
    this.clearTimeInterval()
  }

  resetButton = () => {
    this.setState({timeInSeconds: 0})
  }

  render() {
    return (
      <div className="bg-image-container">
        <div className="bg-color-container">
          <h1 className="stop-watch-heading">Stopwatch</h1>
          <div className="bottom-container">
            <div className="watch-image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p className="timer-text">Timer</p>
            </div>
            <h1 className="stop-timer">{this.getTimerString()}</h1>
            <div className="button-container">
              <button className="btn1" onClick={this.startButton} type="button">
                Start
              </button>
              <button className="btn2" onClick={this.stopButton} type="button">
                Stop
              </button>
              <button className="btn3" onClick={this.resetButton} type="button">
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
