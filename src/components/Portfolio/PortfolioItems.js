import React, {Component} from 'react'
import Slider from '../Slider/'

class PortfolioItems extends Component {

  constructor(props) {
    super(props);
    this.state = { showSlider: false }
    this.item = this.props.item
  }

  componentDidUpdate(nextProps, nextState) {
    console.log(nextState);
  }

  openSlider(e) {
    e.stopPropagation()
    console.log('_openSlider');
    document.body.classList.add('no-scroll') // TODO refactor
    this.setState({ showSlider: true })
  }

  closeSlider(e) {
    e.stopPropagation()
    console.log('_closeSlider');
    document.body.classList.remove('no-scroll') // TODO refactor
    this.setState({ showSlider: false })
  }

  render() {
    return (
      <div className='col-lg-4 col-sm-6'>
        <div className='portfolio__box'>

          { /* ITEM */ }
          <section onClick={ this.openSlider.bind(this) }>
            <img src={ this.item.img_mini } className='img-responsive' alt=''/>
            <div className='portfolio__box--caption'>
              <div className='portfolio__box--caption-content'>
                <div className='portfolio__project-category'>
                  { this.item.category }
                </div>
                <div className='portfolio__project-name'>
                  { this.item.project_name }
                </div>
              </div>
            </div>
          </section>

          { /* SLIDER */ }
          { this.state.showSlider
            ? <Slider images={ this.item.images }
                      closeSlider={ this.closeSlider.bind(this) }/>
            : null
          }
        </div>
      </div>
    )
  }
}

PortfolioItems.propTypes = {
  item: React.PropTypes.object.isRequired
}

export default PortfolioItems
