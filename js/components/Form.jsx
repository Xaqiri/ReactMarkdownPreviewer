const React = require('react')

const styles = {
  width: '50%',
  height: '500px',
  padding: '.5rem',
  margin: '0 auto'
}

const textAreaStyle = {
  width: '90%',
  height: '100%',
  fontSize: '16px',
  padding: '0 .5rem'
}

let Form = React.createClass ({
  handleChange: function (t) {
    let text = t.target.value
    this.props.onChange(text)
  },
  render: function () {
    return (
      <div style={styles}>
	<textarea ref='markdown' onChange={this.handleChange} rows='25' cols='30' style={textAreaStyle} defaultValue={this.props.text}/>
      </div>
    )
  }
})

module.exports = Form
