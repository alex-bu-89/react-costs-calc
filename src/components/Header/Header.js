import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'
import Navigation from '../Navigation/Navigation'
import Slider from '../Slider/Slider'

export const Header = () => (
  <div>
    <Navigation />
    <Slider />
  </div>
)

export default Header
