const React = require('react')

const styles = {
  background: 'blue',
  color: 'white',
  width: '50%',
  height: '500px',
  margin: '0 auto',
  padding: '0 1rem'
}

class Display extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div style={styles}>
        <h1>{this.props.text}</h1>
      </div>
    )
  }
}

module.exports = Display
