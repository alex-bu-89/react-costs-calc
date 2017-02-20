import React, {Component} from 'react'
import './Slider.sass'

class Slider extends Component {

  constructor(props) {
    super(props);
    this.images = this.props.images
  }

  render() {
    return(
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <img className="d-block img-fluid" src={ this.images[0] } alt="First slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block img-fluid" src={ this.images[1] } alt="Second slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block img-fluid" src={ this.images[2] } alt="Third slide"/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    )
  }
}

Slider.propTypes = {
  images: React.PropTypes.array.isRequired
}

export default Slider
