const React = require('react')
const ReactDOM = require('react-dom')
const Form = require('./components/Form.jsx')
const Display = require('./components/Display.jsx')

const styles = {
  width: '80%',
  height: '100%',
  margin: '2% auto',
  display: 'flex',
  flexDirection: 'row'
}

let App = React.createClass( {
  getInitialState: function () {
    return {text: 'Batman'}
  },
  changeText: function (text) {
    this.setState({text: text})
  },

  render: function () {
    return (
      <div style={styles}>
       <Form onChange={this.changeText}/>
       <Display text={this.state.text}/>
      </div>
    )
  }
})

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
