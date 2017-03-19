import React, { Component, PropTypes } from 'react'
import { browserHistory, hashHistory, Router } from 'react-router' // browserHistory doesn't work as static app http://stackoverflow.com/a/37557805
import { Provider } from 'react-redux'

class AppContainer extends Component {
  static propTypes = {
    routes : PropTypes.object.isRequired,
    store  : PropTypes.object.isRequired
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    const { routes, store } = this.props

    return (
      <Provider store={store}>
        <Router history={browserHistory} children={routes} />
      </Provider>
    )
  }
}

export default AppContainer
