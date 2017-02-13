import React, {Component} from 'react'
import Slider from '../Slider/Slider'

class PortfolioItems extends Component {

  constructor(props) {
    super(props);

    this.state = { showSlider: false }
    this.item = this.props.item
    this._openSlider = this._openSlider.bind(this)
  }

  _openSlider() {
    this.setState({
      showSlider: true,
    });
  }

  render() {
    console.log(this.state)
    return (
      <div className="col-lg-4 col-sm-6" key={ this.item.key }>
        <div href="" className="portfolio-box" onClick={ this._openSlider }>

          { /* ITEM */ }
          <img src={ this.item.img_mini } className="img-responsive" alt=""/>
          <div className="portfolio-box-caption">
            <div className="portfolio-box-caption-content">
              <div className="project-category text-faded">
                { this.item.category }
              </div>
              <div className="project-name">
                { this.item.project_name }
              </div>
            </div>
          </div>

          { /* SLIDER */ }
          { this.state.showSlider
            ? <div className="slider-box">
                <div className="slider-box-wrapper">
                  <Slider images={ this.item.images } />
                </div>
              </div>
            : null }

        </div>
      </div>
    )
  }

}

PortfolioItems.propTypes = {
  item: React.PropTypes.object.isRequired
}

export default PortfolioItems
