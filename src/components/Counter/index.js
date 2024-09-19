import {Component} from 'react'
import './index.css'
class Counter extends Component {
  state = {count: 0}
  onIncrement = () => {
    this.setState(function (prevState) {
      return {count: prevState.count + 1}
    })
  }
  onDecrement = () => {
    this.setState(function (prevState) {
      return {count: prevState.count - 1}
    })
  }
  render() {
    let {count} = this.state
    return (
      <div className="container">
        <h className="heading">Counter</h>
        <p className="count"> {count} </p>
        <div>
          <button onClick={this.onIncrement}>Increase</button>
          <button onClick={this.onDecrement}>Decrease</button>
        </div>
      </div>
    )
  }
}
export default Counter
