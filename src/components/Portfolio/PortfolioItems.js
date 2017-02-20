import React, {Component} from 'react'
import Slider from '../Slider/'

class PortfolioItems extends Component {

  constructor(props) {
    super(props);
    this.state = { showSlider: false }
    this.item = this.props.item
    this._openSlider = this._openSlider.bind(this)
    this._closeSlider = this._closeSlider.bind(this)
  }

  componentDidUpdate(nextProps, nextState) {
    console.log(nextState);
  }

  _openSlider(e) {
    e.stopPropagation()
    console.log('_openSlider');
    this.setState({ showSlider: true })
  }

  _closeSlider(e) {
    e.stopPropagation()
    console.log('_closeSlider');
    this.setState({ showSlider: false })
  }

  render() {
    return (
      <div className="col-lg-4 col-sm-6">
        <div className="portfolio__box">

          { /* ITEM */ }
          <section onClick={ this._openSlider }>
            <img src={ this.item.img_mini } className="img-responsive" alt=""/>
            <div className="portfolio__box--caption">
              <div className="portfolio__box--caption-content">
                <div className="portfolio__project-category">
                  { this.item.category }
                </div>
                <div className="portfolio__project-name">
                  { this.item.project_name }
                </div>
              </div>
            </div>
          </section>

          { /* SLIDER */ }
          { this.state.showSlider
            ? <div className="portfolio-slider">
                <div className="portfolio-slider__wrapper">
                  <button type="button" className="portfolio-slider__close-button close" aria-label="Close" onClick={ this._closeSlider }>
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <Slider images={ this.item.images } />
                </div>
              </div>
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
