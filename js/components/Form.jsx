const React = require('react')

const styles = {
  width: '50%',
  height: '500px',
  margin: '0 auto'
}

const textAreaStyle = {
  width: '100%',
  height: '100%',
  fontSize: '16px',
  padding: '0 1rem'
}

let Form = React.createClass ({
  handleChange: function (t) {
    let text = t.target.value
    this.props.onChange(text)
  },
  render: function () {
    return (
      <div style={styles}>
	<textarea ref='markdown' onChange={this.handleChange} style={textAreaStyle}/>
      </div>
    )
  }
})

module.exports = Form
