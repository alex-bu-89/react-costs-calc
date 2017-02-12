import React from 'react'
import Header from '../../components/Header'
import './CoreLayout.sass'
import '../../styles/core.sass'

export const CoreLayout = ({ children }) => (
  <div id="layout">
    <Header />
    <div>
      {children}
    </div>
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
