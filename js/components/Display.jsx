const React = require('react')

const styles = {
  width: '50%',
  height: '100%',
  margin: '0 auto',
  padding: '0 1rem',
  overflorWrap: 'normal'
}

class Display extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div style={styles}>
        <div dangerouslySetInnerHTML={{__html: marked(this.props.text)}}></div>
      </div>
    )
  }
}

module.exports = Display
