import React, { Component } from 'react'
import { Link } from 'react-scroll'
import './Header.sass'

const OFFSET_FIX_MENU = 25

let menuItems = [
  { title: 'Главная', link: 'header', active: true },
  { title: 'Расчет цены', link: 'calculator', active: false },
  { title: 'Услуги', link: 'service', active: false },
  { title: 'Наши работы', link: 'portfolio', active: false },
  { title: 'О нас', link: 'about-us', active: false },
  { title: 'Контакты', link: 'contacts', active: false },
]

class Header extends Component {

  constructor(props) {
    super(props)

    this.handleScroll = this.handleScroll.bind(this)
    this.state = {
      showFixMenu: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll(e) {
    let scrollTop = e.srcElement.body.scrollTop,
        isShowing = false

    if (scrollTop >= OFFSET_FIX_MENU) {
      isShowing = true
      if (this.state.showFixMenu !== isShowing){
        this.setState({ showFixMenu: isShowing })
      }
    } else {
      isShowing = false
      if (this.state.showFixMenu !== isShowing){
        this.setState({ showFixMenu: isShowing })
      }
    }
  }

  render() {
    return(
      <div id='header' name='header' className='site-wrapper'>
        <div className='site-wrapper-inner'>
          <div className='cover-container'>
            <nav id='navigation' className={'navbar navbar-toggleable-md navbar-inverse fixed-top ' + (this.state.showFixMenu ? '' : '') }>
              <div className='container'>
                <button className='navbar-toggler navbar-toggler-right' type='button' data-toggle='collapse' data-target='#navbarCollapse' aria-controls='navbarCollapse' aria-expanded='false' aria-label='Toggle navigation'>
                  <span className='navbar-toggler-icon'></span>
                </button>
                <a className='navbar-brand' href='#'><h3>лого</h3></a>
                <div className='collapse navbar-collapse justify-content-end' id='navbarCollapse'>
                  <ul className='navbar-nav'>
                    {
                      menuItems.map((item, i) => {
                        return (
                          <li className={'nav-item' + (item.active ? 'active' : '')} key={i}>
                            <Link className='nav-link' to={ item.link } spy={true} smooth={true} offset={0} duration={1000}>
                              { item.title }
                            </Link>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              </div>
            </nav>

            <div className='inner cover'>
              <h1 className='cover-heading display-4'>Сантехника для загородного дома</h1>
              <p className='lead'>
                Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев
              </p>
              <p className='lead'>
                <Link className='btn btn-lg btn-outline-secondary' activeClass='active' to='calculator' spy={true} smooth={true} offset={50} duration={1000}>
                  <i className='fa fa-calculator fa-fw'></i>Рассчитать цену
                </Link>
              </p>
            </div>

            <div className='mastfoot'>
              <div className='inner'>
                <Link activeClass='active' to='calculator' spy={true} smooth={true} offset={50} duration={1000}>
                  <span className='arrow bounce'></span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Header
