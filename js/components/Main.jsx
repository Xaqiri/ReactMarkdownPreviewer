const React = require('react')
const Nav = require('./Nav.jsx')


class Main extends React.Component {
  render () {
    return (
      <div>
	<Nav />
        <h1>Hello batman</h1>
      </div>
    )
  }
}

module.exports = Main
